import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-900 text-white relative">
      {/* Container Slider */}
      <div
        className="flex h-full w-[400vw] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeTab * 100}vw)` }}
      >
        {/* Setiap anak (page) harus dibungkus div w-screen */}
        {children}
      </div>

      {/* Navbar Floating */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
