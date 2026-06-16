import { ExternalLink, GitBranch } from "lucide-react";

import movieImg from "../assets/movie.jpg";
import clinicImg from "../assets/clinic.jpg";
import notesImg from "../assets/notes.jpg";

const projects = [
  {
    title: "Movienion",
    desc: "Movie app with modern UI, auth/data powered by Supabase, deployed on Vercel.",
    image: movieImg,
    stack: [
      { label: "React" },
      { label: "Supabase" },
      { label: "Tailwind" },
    ],
    links: [
      { label: "Live Demo", href: "https://movienion.vercel.app/" },
      {
        label: "Source Code",
        href: "https://github.com/davidfrsy/movienion-vercel",
      },
    ],
  },
  {
    title: "Simple Outpatient Clinic System",
    desc: "Simple clinic management system built with CodeIgniter, MySQL, and Bootstrap UI.",
    image: clinicImg,
    stack: [
      { label: "CodeIgniter" },
      { label: "Bootstrap" },
      { label: "MySQL" },
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/davidfrsy/Sistem-Poliklinik-Sederhana",
      },
    ],
  },
  {
    title: "Web Notes",
    desc: "Lightweight notes web app built with vanilla JavaScript, HTML, and CSS.",
    image: notesImg,
    stack: [
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/davidfrsy/Web-Notes",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="mx-auto flex min-h-full max-w-6xl items-center px-6 py-20">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Projects
          </p>

          <h1 className="mb-5 text-4xl font-bold text-slate-50 md:text-5xl">
            Selected Works
          </h1>

          <p className="text-base leading-8 text-slate-400 md:text-lg">
            A collection of projects that represent my experience in building
            responsive interfaces, web-based systems, and data-driven
            applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-sky-950/20 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/[0.05]"
            >
              {/* Image */}
              <div className="relative overflow-hidden border-b border-white/10 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="flex min-h-[280px] flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((item, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>

                <h2 className="mb-3 text-xl font-bold text-slate-50">
                  {project.title}
                </h2>

                <p className="mb-6 text-sm leading-7 text-slate-400">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => {
                    const isDemo = link.label.toLowerCase().includes("demo");

                    return (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                          isDemo
                            ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400"
                            : "border border-white/10 text-slate-300 hover:border-sky-400/50 hover:text-sky-400"
                        }`}
                      >
                        {isDemo ? (
                          <ExternalLink size={16} />
                        ) : (
                          <GitBranch size={16} />
                        )}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
