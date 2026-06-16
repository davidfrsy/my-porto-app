const experiences = [
  {
    company: "PT Hwa Seung Indonesia 2",
    role: "IT System & Web Developer",
    period: "November 2025 - Present",
    tasks: [
      "Developed and maintained internal web applications for laboratory and operational workflows.",
      "Built CRUD modules, DataTables integration, and reporting features using Laravel.",
      "Improved user experience by refining interface flow, filtering, and dashboard components.",
    ],
  },
  {
    company: "Dian Nuswantoro University",
    role: "Final Project Research",
    period: "October 2024 - February 2025",
    tasks: [
      "Conducted research on cybersecurity challenges in the Internet of Vehicles (IoV), focusing on intrusion detection and data imbalance issues.",
      "Applied Random Under-Sampling (RUS) on the CICIoV2024 dataset to improve class balance and enhance model performance.",
      "Evaluated multiple machine learning models such as Random Forest, AdaBoost, Gradient Boosting, and XGBoost.",
    ],
  },
  {
    company: "Indofood",
    role: "Web Developer Intern",
    period: "July 2024 - September 2024",
    tasks: [
      "Developed a monthly reporting system to track consumable stock and transformed the data into a trend-based dashboard.",
      "Translated design concepts into functional and responsive frontend dashboards.",
      "Optimized page structure and styling to improve UI clarity and overall usability.",
    ],
  },
  {
    company: "Infinite Learning Batam",
    role: "Independent Study Program",
    period: "February 2024 - June 2024",
    tasks: [
      "Implemented React and Node.js to develop a full-stack web application.",
      'Built "AquaCare", a web system to record and manage costs for catfish cultivation.',
      "Transformed raw data into meaningful and user-friendly dashboards.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mx-auto flex min-h-full max-w-6xl items-center px-6 py-20">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Experience
          </p>

          <h1 className="mb-5 text-4xl font-bold text-slate-50 md:text-5xl">
            Professional Journey
          </h1>

          <p className="text-base leading-8 text-slate-400 md:text-lg">
            A timeline of my learning process, professional growth, and
            contributions in web development, research, and internal system
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-slate-700 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
{experiences.map((experience, index) => {
  const isEven = index % 2 === 0;

  return (
    <div
      key={index}
      className="relative grid gap-6 md:grid-cols-2"
    >
      {/* Dot */}
      <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-sky-400 shadow-lg shadow-sky-500/40 md:left-1/2" />

      {/* Card */}
      <div
        className={`ml-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.05] md:ml-0 ${
          isEven
            ? "md:col-start-1 md:mr-10"
            : "md:col-start-2 md:ml-10"
        }`}
      >
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-50">
              {experience.role}
            </h2>
            <p className="mt-1 text-sm font-medium text-sky-400">
              {experience.company}
            </p>
          </div>

          <span className="w-fit rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
            {experience.period}
          </span>
        </div>

        <ul className="space-y-3">
          {experience.tasks.map((task, taskIndex) => (
            <li
              key={taskIndex}
              className="flex gap-3 text-sm leading-7 text-slate-400"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})}
          </div>
        </div>
      </div>
    </div>
  );
}