import { Briefcase } from "lucide-react";
import { experience } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <ol className="relative space-y-10 border-l border-zinc-200 pl-8 sm:pl-10 dark:border-zinc-800">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.role}-${job.company ?? i}`} delay={i * 100} className="relative">
            <span className="absolute top-6 -left-[calc(2rem+1px)] flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-brand-600 sm:-left-[calc(2.5rem+1px)] dark:border-zinc-800 dark:bg-zinc-950 dark:text-brand-400">
              <Briefcase className="size-4" />
            </span>
            <Card>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {job.role}
                  {job.company && <span className="text-brand-600 dark:text-brand-400"> · {job.company}</span>}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {[job.period, job.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <p className="mt-3 leading-relaxed">{job.summary}</p>
              {job.highlights?.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-brand-500">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {job.tech?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
