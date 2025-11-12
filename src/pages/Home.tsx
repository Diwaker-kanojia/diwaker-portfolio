import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Loader } from "../components/Loader";
import Mail from "../components/Mail";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Social from "../components/Social";

const Home = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${
        loading ? "flex" : ""
      } items-center overflow-hidden justify-center`}
    >
      {loading !== true ? (
        <>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
          <Mail />
          <Social />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
