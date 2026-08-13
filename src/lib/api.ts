/* Lightweight API helpers — call remote portfolio backend when NEXT_PUBLIC_API_URL / VITE_API_URL / API_URL is set.
   Falls back to the local `projects` exported from ./data.ts when no remote API is configured or on errors.
*/
import { projects as fallbackProjects, type Project } from "./data";

const RAW_BASE = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || process.env.API_URL || "";
export const API_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : "";

async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch (e) {
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
  } catch (e) {
    // network or parse error — fall back
    return fallbackProjects;
  }
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  if (!API_BASE) return fallbackProjects.filter((p) => (p as any).featured);

  try {
    const res = await fetch(`${API_BASE}/api/projects/featured`);
    if (!res.ok) return fallbackProjects.filter((p) => (p as any).featured);
    const json = await safeJson(res);
    if (!Array.isArray(json)) return fallbackProjects.filter((p) => (p as any).featured);
    return json as Project[];
  } catch (e) {
    return fallbackProjects.filter((p) => (p as any).featured);
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
  } catch (e) {
    return fallbackProjects.find((p) => p.id === id);
  }
}
