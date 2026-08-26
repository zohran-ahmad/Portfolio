import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with React &amp; Tailwind</p>
      </div>
    </footer>
  );
}
