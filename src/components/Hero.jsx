import { Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";
import { profile, codeSnippet } from "../data";

const ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  LeetCode: LeetcodeIcon,
  Email: Mail,
};

function CodeLine({ line }) {
  const isComment = line.trim().startsWith("//");
  if (isComment) {
    return <div className="text-muted/70">{line}</div>;
  }
  // very light manual highlighting: keywords + strings
  const parts = line.split(/("(?:[^"\\]|\\.)*")/g);
  return (
    <div>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          <span
            key={i}
            dangerouslySetInnerHTML={{
              __html: part.replace(
                /\b(class|constructor|this|return|new)\b/g,
                '<span class="text-[#c586c0]">$1</span>'
              ),
            }}
          />
        )
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-24"
    >
      {/* ambient background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#f4f3f1 1px, transparent 1px), linear-gradient(90deg, #f4f3f1 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* left column */}
        <div>
          <p className="font-mono text-sm text-muted tracking-wide">
            {profile.greeting}
          </p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-ink">
            {profile.name}
          </h2>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-accent">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-md text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-7 flex items-center gap-3">
            {profile.socials.map((s) => {
            const Icon = ICONS[s.label] ?? Mail;
            const isMail = s.href.startsWith("mailto:");
            return (
              <a  key={s.label}
                href={s.href}
              {...(!isMail && { target: "_blank", rel: "noreferrer" })}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:text-accent hover:border-accent transition-colors">
              <Icon className="h-[17px] w-[17px]" />
            </a>
             );
            })}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-void hover:bg-accent-dim transition-colors"
            >
              Contact Me
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-line px-7 py-3.5 font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-panel/60 max-w-md">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-5 text-center sm:text-left sm:pl-6">
                <div className="font-display text-2xl sm:text-3xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right column — signature code panel replacing a headshot */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-panel border border-line" />
          <div className="absolute h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-2xl" />

          <div className="relative w-[380px] animate-float">
            <div className="rounded-xl border border-line bg-[#161616] shadow-2xl shadow-black/50 overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-muted">
                  engineer.js
                </span>
              </div>
              <pre className="p-5 font-mono text-[12.5px] leading-relaxed text-ink/90 overflow-x-auto">
                {codeSnippet.split("\n").map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
                <span className="text-accent animate-blink">▍</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
