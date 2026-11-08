import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass =
  "rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-lg dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={close} className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          {profile.name.replace(" ", "")}
          <span className="text-brand-500">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-zinc-200 px-4 py-3 md:hidden dark:border-zinc-800">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={close} className={`${linkClass} block`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
