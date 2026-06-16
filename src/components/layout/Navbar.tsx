import { User, Briefcase, Code, Mail } from "lucide-react";

const navItems = [
  { id: 0, icon: <User size={22} />, label: "About" },
  { id: 1, icon: <Briefcase size={22} />, label: "Experience" },
  { id: 2, icon: <Code size={22} />, label: "Projects" },
  { id: 3, icon: <Mail size={22} />, label: "Contact" },
];

type NavbarProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:bottom-8">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-2xl shadow-sky-950/30 backdrop-blur-xl md:gap-5 md:px-6">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              aria-label={item.label}
              className={`group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-all duration-300 md:px-4 ${
                isActive
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
              }`}
            >
              {item.icon}

              <span
                className={`hidden text-sm font-medium md:inline ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-slate-100"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}