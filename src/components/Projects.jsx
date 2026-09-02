import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="04"
            title="Projects"
            subtitle="A selection of things I've built — spanning backend platforms, AI systems, and networking."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <article className="group h-full flex flex-col rounded-xl border border-line bg-panel/60 p-7 transition-colors hover:border-accent/50 hover:bg-panel">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 text-muted hover:text-accent transition-colors"
                  >
                    <GithubIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>

                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    View live
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
