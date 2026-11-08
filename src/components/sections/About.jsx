import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading eyebrow="About" title="A little about me" />
      </Reveal>
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-4 text-lg leading-relaxed md:col-span-3">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <dl className="grid grid-cols-2 gap-4 self-start md:col-span-2">
          {profile.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</dd>
              <dd className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
