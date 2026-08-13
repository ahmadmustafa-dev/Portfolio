/* Lightweight API helpers — call remote portfolio backend when NEXT_PUBLIC_API_URL / VITE_API_URL / API_URL is set.
   Falls back to the local `projects` exported from ./data.ts when no remote API is configured or on errors.
*/
import { projects as fallbackProjects, type Project } from "./data";

const RAW_BASE = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || process.env.API_URL || "";
export const API_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : "";

type ProjectWithFeatured = Project & { featured?: boolean };

async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  if (!API_BASE) return fallbackProjects;

  try {
    const res = await fetch(`${API_BASE}/api/projects`);
    if (!res.ok) return fallbackProjects;
    const json = await safeJson(res);
    if (!Array.isArray(json)) return fallbackProjects;
    return json as Project[];
  } catch {
    // network or parse error — fall back
    return fallbackProjects;
  }
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const isFeatured = (p: Project): boolean => Boolean((p as ProjectWithFeatured).featured);

  if (!API_BASE) return fallbackProjects.filter(isFeatured);

  try {
    const res = await fetch(`${API_BASE}/api/projects/featured`);
    if (!res.ok) return fallbackProjects.filter(isFeatured);
    const json = await safeJson(res);
    if (!Array.isArray(json)) return fallbackProjects.filter(isFeatured);
    return json as Project[];
  } catch {
    return fallbackProjects.filter(isFeatured);
  }
}

export async function fetchProjectById(id: string): Promise<Project | undefined> {
  if (!API_BASE) return fallbackProjects.find((p) => p.id === id);

  try {
    const res = await fetch(`${API_BASE}/api/projects/${encodeURIComponent(id)}`);
    if (res.status === 404) return undefined;
    if (!res.ok) return fallbackProjects.find((p) => p.id === id);
    const json = await safeJson(res);
    if (!json || typeof json !== "object") return fallbackProjects.find((p) => p.id === id);
    return json as Project;
  } catch {
    return fallbackProjects.find((p) => p.id === id);
  }
}
