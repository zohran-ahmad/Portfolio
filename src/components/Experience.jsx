import { Briefcase } from "lucide-react";
import { experience } from "../data";
import { formatPeriod, calculateDuration } from "../utils/duration";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-panel/30">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading index="01" title="Experience" />
        </Reveal>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.role}`} delay={i * 100}>
              <div className="flex flex-col sm:flex-row gap-6 rounded-xl border border-line bg-panel/60 p-7 hover:border-accent/40 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Briefcase size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-x-4">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.role}
                    </h3>
                    <div className="text-left sm:text-right shrink-0">
                      <div className="font-mono text-xs text-muted">
                        {formatPeriod(item.start, item.end)}
                      </div>
                      <div className="font-mono text-[11px] text-accent/80 mt-0.5">
                        {calculateDuration(item.start, item.end)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-1 text-accent font-semibold text-sm">
                    {item.company}
                  </p>
                  <p className="mt-3 text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}