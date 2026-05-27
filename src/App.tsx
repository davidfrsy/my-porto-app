import MainLayout from "./components/layout/MainLayout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <MainLayout>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
