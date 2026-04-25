import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import SocialCard from "./Components/SocialCard";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="block fixed  bottom-50 md:bottom-10  right-0 md:right-5 z-50">
        <SocialCard />
      </div>
      <div className="pt-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
