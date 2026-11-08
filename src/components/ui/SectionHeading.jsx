export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
