import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="mx-auto flex min-h-full max-w-6xl items-center px-6 py-20">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="text-sky-400">Hello, I'm</span>

          <h4 className="mb-6 text-4xl font-bold leading-tight text-slate-50 md:text-5xl lg:text-6xl">
            David Firmansyah
          </h4>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            I am a fresh graduate from Dian Nuswantoro University and currently
            working at Laboratory PT Hwa Seung Indonesia 2 as a Data and System
            staff.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="/cv_muhammad_david_firmansyah.pdf"
              download="cv_muhammad_david_firmansyah.pdf"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:bg-sky-400"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />

            {/* Image Card */}
            <div className="relative rounded-full border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-sky-950/40 backdrop-blur">
              <img
                src={profile}
                alt="Muhammad David Firmansyah"
                className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
