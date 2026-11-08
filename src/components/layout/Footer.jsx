import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Footer() {
  const { github, linkedin } = profile.socials;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-900 dark:hover:text-white">
            <GithubIcon />
          </a>
          <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-zinc-900 dark:hover:text-white">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
