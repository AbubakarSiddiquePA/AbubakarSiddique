import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BackToTop from "./components/BackToTop";


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
      <BackToTop />
    </>
  );
}

export default App;
