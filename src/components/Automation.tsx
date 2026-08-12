import { ArrowRight, CalendarClock, MessageSquare, RefreshCcw, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { automations } from "@/lib/data";

const TRIGGER_ICONS: Record<string, typeof Zap> = {
  "wf-01": Zap,
  "wf-02": MessageSquare,
  "wf-03": CalendarClock,
};

/** Upstream / downstream connectors resolved from each automation's accent list */
function resolveConnectors(accents: string[]) {
  const left = accents[0] ?? "fog";
  const right = accents[accents.length - 1] ?? "fog";
  return { left, right };
}

export default function Automation() {
  return (
    <section id="automation" className="section-sep scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-2 sm:px-4">
        <SectionHeading
          index="05"
          label="Automation"
          watermark="AUTOMATION"
          title={
            <>
              Boring on purpose.
              <br />
              <span className="text-champ">Reliable by design.</span>
            </>
          }
        />

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-fog-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon-400" aria-hidden="true" />
            Trigger
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fog-400" aria-hidden="true" />
            Steps
          </span>
          <span className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-neon-300" aria-hidden="true" />
                        Output
          </span>
        </div>

        {/* Horizontal pipeline — trigger → steps → output, arrow-linked */}
        <div className="mt-10 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {automations.map((automation, i) => {
            const { left, right } = resolveConnectors(automation.accents);
            const TriggerIcon = TRIGGER_ICONS[automation.id] ?? Zap;
            return (
              <div key={automation.id} className="contents">
                <SpotlightCard className="rounded-2xl">
                  <article className="card-line group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7">
                    {/* Stage index */}
                    <span className="absolute right-6 top-6 flex items-center gap-2 font-mono text-[11px] text-fog-600">
                      <span className="rounded border border-white/10 bg-ink-850 px-1.5 py-0.5 text-[10px] text-fog-500">
                        STAGE
                      </span>
                      {String(i + 1).padStart(2, "0")} / {String(automations.length).padStart(2, "0")}
                    </span>

                    {/* Trigger */}
                    <div className="flex items-center gap-3 pr-16">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neon-500/30 bg-neon-500/10 text-neon-400 transition-all duration-300 group-hover:shadow-[0_0_20px_-4px_rgb(211_248_75/0.4)]">
                        <TriggerIcon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-fog-500">Trigger</p>
                        <h3 className="truncate font-display text-base font-semibold text-fog-50">
                          {automation.title}
                        </h3>
                      </div>
                    </div>

                    {/* Steps */}
                    <div>
                      <p className="mb-3 mt-6 font-mono text-[10px] uppercase tracking-widest text-fog-500">
                        Steps
                      </p>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {automation.steps.map((step) => (
                          <span
                            key={step}
                            className="rounded-md border border-white/8 bg-ink-850/90 px-2.5 py-1 text-fog-300"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Output */}
                    <div className="mt-auto pt-6">
                      <div className="rounded-lg border border-white/8 bg-ink-800/60 px-4 py-3 transition-colors duration-300 hover:border-neon-300/40 hover:bg-neon-300/[0.04]">
                        <p className="flex items-center gap-2 font-mono text-xs text-neon-300">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-300" aria-hidden="true" />
                          {automation.output}
                        </p>
                      </div>
                      {left === right && (
                        <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-fog-600">
                          <RefreshCcw size={12} className="text-fog-500" aria-hidden="true" />
                          Built with same-domain tools — zero platform hops
                        </p>
                      )}
                    </div>
                  </article>
                </SpotlightCard>

                {/* Arrow connector — desktop only */}
                {i < automations.length - 1 && (
                  <div className="hidden items-center lg:flex" aria-hidden="true">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neon-500/25 bg-neon-500/[0.06] animate-float">
                      <ArrowRight size={16} className="text-neon-400" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="frame-gradient mt-10 rounded-xl">
            <div className="flex flex-col gap-4 rounded-[calc(0.75rem-1px)] bg-ink-900 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-sm leading-relaxed text-fog-300">
                Every flow runs on <span className="font-semibold text-fog-50">n8n</span> with
                error branches, retry policies, and Slack notifications — so failures are
                visible before they become emergencies.
              </p>
              <span className="shrink-0 self-start rounded-full border border-neon-500/30 bg-neon-500/10 px-4 py-2 font-mono text-xs text-neon-300 sm:self-auto">
                <span className="h-1.5 w-1.5 inline-block rounded-full bg-neon-400 animate-pulse-dot mr-2 align-middle" aria-hidden="true" />
                24/7 · zero-maintenance
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}