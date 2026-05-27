import { User, Briefcase, Code, Mail } from "lucide-react"; 

const navItems = [
  { id: 0, icon: <User size={24} />, label: "About" },
  { id: 1, icon: <Briefcase size={24} />, label: "Experience" },
  { id: 2, icon: <Code size={24} />, label: "Projects" },
  { id: 3, icon: <Mail size={24} />, label: "Contact" },
];

type NavbarProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`transition-all duration-300 p-2 rounded-full ${
              activeTab === item.id
                ? "bg-blue-500 text-white scale-110 shadow-lg"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
}
