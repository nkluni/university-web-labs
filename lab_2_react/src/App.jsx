
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="min-h-screen bg-[#e8eef6] px-0 py-0 font-sans text-[#0f172a] min-[901px]:px-4 min-[901px]:py-8">
      <div className="mx-auto grid min-h-screen w-full max-w-[1180px] grid-cols-1 overflow-hidden border-0 border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,39,68,0.18)] min-[901px]:min-h-0 min-[901px]:grid-cols-[340px_minmax(0,1fr)] min-[901px]:rounded-[24px] min-[901px]:border">
        <Sidebar />

        <main className="flex min-w-0 flex-col gap-10 bg-white px-5 py-8 sm:px-11 sm:py-12">
          <Intro />
          <Experience />
          <Projects />
          <Certifications />
        </main>
      </div>
    </div>
  );
}

export default App;
