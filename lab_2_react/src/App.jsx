import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {
    }
    setTheme(saved === "light" || saved === "dark" ? saved : getAutoTheme());
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  }

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-[#060e1c] font-sans text-slate-900 dark:text-slate-100 transition-colors lg:px-4 lg:py-8">
      <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        className="fixed right-3 top-3 z-40 cursor-pointer rounded-full border border-slate-200 dark:border-[#1f3556] bg-white dark:bg-[#0d1a2e] px-3.5 py-2 text-[13px] font-bold text-slate-900 dark:text-slate-100 shadow-lg hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        {theme === "dark" ? "☀️ Day" : "🌙 Night"}
      </button>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 overflow-hidden bg-white dark:bg-[#0d1a2e] shadow-2xl shadow-slate-900/20 dark:shadow-black/50 lg:grid-cols-[340px_minmax(0,1fr)] lg:rounded-3xl lg:border lg:border-slate-200 dark:lg:border-[#1f3556]">
        <Sidebar />
        <main className="flex flex-col gap-10 bg-white dark:bg-[#0d1a2e] px-5 py-8 lg:px-11 lg:py-12">
          <Intro />
          <Experience />
          <Projects />
          <Certifications />
          <Reviews />
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;