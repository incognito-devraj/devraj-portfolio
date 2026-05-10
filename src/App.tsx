import { Helmet } from "react-helmet-async";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Devraj Mukherjee | Core Java Developer & Cybersecurity Enthusiast</title>
        <meta
          name="description"
          content="B.Tech CS student (SGPA 8.48) skilled in Core Java, Spring Boot, and Cybersecurity. Zscaler certified. Open to TCS NQT and backend internship opportunities."
        />
      </Helmet>

      <div className="min-h-screen bg-bgPrimary text-textPrimary">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
