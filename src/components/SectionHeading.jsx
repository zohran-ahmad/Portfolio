export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="font-mono text-sm text-accent">{`// ${index}`}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
