import { Mail, GitBranch, BriefcaseBusiness, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "mdavidfrsy@gmail.com",
      href: "mailto:mdavidfrsy@gmail.com",
    },
    {
      icon: <GitBranch size={22} />,
      label: "GitHub",
      value: "github.com/davidfrsy",
      href: "https://github.com/davidfrsy",
    },
    {
      icon: <BriefcaseBusiness size={22} />,
      label: "LinkedIn",
      value: "Muhammad David Firmansyah",
      href: "https://www.linkedin.com/",
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Semarang, Indonesia",
      href: null,
    },
  ];

  return (
    <div className="mx-auto flex min-h-full max-w-6xl items-start px-0 pb-28 pt-6 sm:px-6 sm:pt-10 lg:items-center lg:py-20">
      <div className="grid w-full items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        {/* Left Content */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            Contact
          </p>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl md:mb-6 md:text-5xl">
            Let&apos;s Build Something
            <span className="text-sky-400"> Together.</span>
          </h1>

          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out. I&apos;m open to discussing web
            development, internal systems, and frontend-focused projects.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="mailto:mdavidfrsy@gmail.com"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:bg-sky-400 sm:w-auto sm:px-7"
            >
              <Send size={18} />
              Send Email
            </a>
          </div>
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-sky-950/30 backdrop-blur sm:rounded-[2rem] sm:p-6">
          <div className="mb-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:mb-6 sm:rounded-3xl sm:p-6">
            <h2 className="text-xl font-bold text-slate-50 sm:text-2xl">
              Get in Touch
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400 sm:leading-7">
              Choose the easiest way to contact me. I usually respond through
              email or professional platforms.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {contacts.map((contact, index) => {
              const content = (
                <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:border-sky-400/40 hover:bg-white/[0.06] sm:gap-4 sm:p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition duration-300 group-hover:bg-sky-400 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                    {contact.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-400">
                      {contact.label}
                    </p>
                    <p className="break-words text-sm font-semibold text-slate-100 sm:text-base">
                      {contact.value}
                    </p>
                  </div>
                </div>
              );

              return contact.href ? (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
