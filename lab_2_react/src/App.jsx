import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="resume">
      <Sidebar />
      <main className="content">
        <Intro />
        <Experience />
        <Projects />
        <Certifications />
      </main>
    </div>
  );
}

export default App;