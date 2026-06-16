import { useState, Children } from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);

  const pages = Children.toArray(children);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#020617] text-slate-50">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Horizontal Slider */}
      <div
        className="relative z-10 flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${pages.length * 100}vw`,
          transform: `translateX(-${activeTab * 100}vw)`,
        }}
      >
        {pages.map((page, index) => (
          <section
            key={index}
            className="h-screen w-screen flex-shrink-0 overflow-y-auto px-6 py-10 md:px-12 lg:px-20"
          >
            {page}
          </section>
        ))}
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}