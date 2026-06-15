import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and why it matters.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and why it matters.",
    href: "#",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/softwarelijah" },
  { label: "Email", href: "mailto:swemendez@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-6 py-24">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">Elijah Mendez</h1>
        <p className="text-lg text-black/70 dark:text-white/70">
          Software engineer. I build simple, useful things for the web.
        </p>
        <nav className="flex gap-4 pt-2 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black/60 underline-offset-4 hover:underline dark:text-white/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
          Projects
        </h2>
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <li key={project.title}>
              <Link
                href={project.href}
                className="group flex flex-col gap-1 rounded-lg border border-black/10 p-5 transition-colors hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
              >
                <span className="font-medium group-hover:underline">
                  {project.title}
                </span>
                <span className="text-sm text-black/60 dark:text-white/60">
                  {project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto text-sm text-black/40 dark:text-white/40">
        © {new Date().getFullYear()} Elijah Mendez
      </footer>
    </main>
  );
}
