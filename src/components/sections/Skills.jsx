import { ClipboardCheck, CodeXml, Database, Server, Wrench } from "lucide-react";
import { skillGroups } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const icons = {
  frontend: CodeXml,
  backend: Server,
  database: Database,
  tools: Wrench,
  docs: ClipboardCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="Tools I work with" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? CodeXml;
          return (
            <Reveal key={group.title} delay={(i % 3) * 100}>
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
