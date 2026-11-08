import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Contact() {
  const { github, linkedin } = profile.socials;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-brand-50 to-white px-6 py-14 text-center sm:px-12 dark:border-zinc-800 dark:from-brand-500/10 dark:to-zinc-950">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed">
          I'm open to software developer roles in Brisbane and remote. The best way to reach me is LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={linkedin.href} external>
            <LinkedinIcon className="size-4" /> Message on LinkedIn
          </Button>
          {profile.email && (
            <Button href={`mailto:${profile.email}`} variant="outline">
              <Mail className="size-4" /> Email me
            </Button>
          )}
          <Button href={github.href} variant="outline" external>
            <GithubIcon className="size-4" /> View GitHub
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
