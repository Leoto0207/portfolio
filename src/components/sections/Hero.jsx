import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Hero() {
  const { github, linkedin } = profile.socials;

  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="animate-fade-up text-center motion-reduce:animate-none md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900/60">
            <span className="size-2 rounded-full bg-emerald-500" />
            Software Intern @ TrilogyCare · 1 year
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-3 text-xl font-medium text-zinc-500 dark:text-zinc-400">{profile.role}</p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed md:mx-0">{profile.tagline}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <MapPin className="size-4" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="#contact">
              Get in touch <ArrowRight className="size-4" />
            </Button>
            <Button href={github.href} variant="outline" external>
              <GithubIcon className="size-4" /> GitHub
            </Button>
            <Button href={linkedin.href} variant="outline" external>
              <LinkedinIcon className="size-4" /> LinkedIn
            </Button>
          </div>
        </div>

        <div className="relative shrink-0 animate-fade-up motion-reduce:animate-none">
          <div
            aria-hidden="true"
            className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 opacity-70 blur-md"
          />
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width="256"
            height="256"
            className="relative size-48 rounded-full border-4 border-white object-cover sm:size-64 dark:border-zinc-950"
          />
        </div>
      </div>
    </section>
  );
}
