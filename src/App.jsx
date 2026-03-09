import { useEffect, useState } from "react";

import { Header, Home, About, Skills, Qualification, Portfolio, Contact, Footer } from "./components";

const App = () => {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = document.querySelectorAll("section[id]");

      sections.forEach(section => {

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {

      const scrollY = window.pageYOffset;

      /* ACTIVE LINK */
      sections.forEach((current) => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const link = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active-link");
        } else {
          link?.classList.remove("active-link");
        }

      });

      /* HEADER SHADOW */
      const header = document.getElementById("header");

      if (scrollY >= 80) {
        header?.classList.add("scroll-header");
      } else {
        header?.classList.remove("scroll-header");
      }

      /* SCROLL UP BUTTON */
      if (scrollY >= 500) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <Header activeSection={activeSection} />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>

      <Footer />

      {/* SCROLL UP BUTTON */}
      <a
        href="#"
        className={`scrollup ${scrollUp ? "show-scroll" : ""}`}
        id="scroll-up"
      >
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
};

export default App;