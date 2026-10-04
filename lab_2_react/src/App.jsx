import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;