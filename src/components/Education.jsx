import { GraduationCap } from "lucide-react";
import { education } from "../data";
import { formatPeriod, calculateDuration } from "../utils/duration";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading index="01" title="Education" />
        </Reveal>

        <div className="space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <div className="flex flex-col sm:flex-row gap-6 rounded-xl border border-line bg-panel/60 p-7 hover:border-accent/40 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-x-4">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.degree}
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
                  <p className="mt-1 text-muted">{item.school}</p>
                  <p className="mt-1 text-accent font-semibold text-sm">
                    {item.detail}
                  </p>
                  {item.coursework && item.coursework.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {c}
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