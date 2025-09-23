import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <main id="main" className="site-main container">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
