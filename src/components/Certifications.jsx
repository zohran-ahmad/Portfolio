import { Award } from "lucide-react";
import { certifications } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-panel/30">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading index="05" title="Certifications" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Wrapper = cert.url ? "a" : "div";
            return (
              <Reveal key={i} delay={i * 80}>
                <Wrapper
                  {...(cert.url && {
                    href: cert.url,
                    target: "_blank",
                    rel: "noreferrer",
                  })}
                  className={`block h-full rounded-xl border p-6 transition-colors ${cert.placeholder
                      ? "border-dashed border-line/80 text-muted"
                      : "border-line bg-panel/60 hover:border-accent/40"
                    }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Award size={18} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-ink">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  <p className="mt-3 font-mono text-xs text-muted">{cert.year}</p>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
