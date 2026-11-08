export const profile = {
  name: "Leo To",
  fullName: "Ka Kin (Leo) To",
  role: "Software Developer",
  tagline:
    "I build reliable, user-focused web applications — from polished front-ends to the APIs and databases behind them.",
  location: "Brisbane, Australia",
  avatar: `${import.meta.env.BASE_URL}self.jpg`,
  // TODO: add an email address to show a "Email me" button in Contact (or leave null).
  email: null,
  socials: {
    github: { label: "Leoto0207", href: "https://github.com/Leoto0207" },
    linkedin: {
      label: "Ka Kin (Leo) To",
      href: "https://www.linkedin.com/in/ka-kin-to-968698112",
    },
  },
  about: [
    "I'm a software developer based in Brisbane. I recently completed a year-long Software Internship at TrilogyCare, working with the engineering team on production web applications.",
    "Before that I spent 2+ years in full-stack web development across outsourced and in-house projects — front-end work on an e-tax system and full-stack development on export credit insurance systems.",
    "I studied the Master of Information Technology at Queensland University of Technology and completed Harvard's CS50 courses. I enjoy turning requirements into clean, well-tested software.",
  ],
  stats: [
    { value: "1 yr", label: "Software Intern at TrilogyCare" },
    { value: "2+ yrs", label: "Full-stack web development" },
    { value: "MIT", label: "Queensland University of Technology" },
    { value: "CS50", label: "Harvard computer science courses" },
  ],
};
