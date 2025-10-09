import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Stories from "./components/Stories";
import StoriesButton from "./components/StoriesButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Ensure scroll resets on route change */}
      <ScrollToTop />

      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main id="main" className="site-main container">
              <Hero />
              <About />
              <Experience />
              <Education />
              <Skills />
              <Contact />
            </main>
          }
        />

        {/* Stories Page */}
        <Route path="/stories" element={<Stories />} />
      </Routes>

      <Footer />
      <StoriesButton />
      <BackToTop />
      <ChatbaseWidget />
    </>

  );
}

export default App;
