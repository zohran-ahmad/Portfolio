import { skills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-panel/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="02"
            title="Skills"
            subtitle="Tools and technologies I reach for most, grouped by where they show up in a project."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="h-full rounded-xl border border-line bg-panel/60 p-6 hover:border-accent/40 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-void/60 border border-line px-3 py-1.5 text-sm text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
