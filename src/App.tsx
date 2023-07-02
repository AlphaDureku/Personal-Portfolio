import { useEffect } from "react";
import "./App.css";
import ControlledCarousel from "./components/Hero Section/Carousel";
import Wave from "./components/Wave";
import Cards from "./components/card";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup observer when component unmounts
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <Navbar />

      <main>
        <section className="hero-sec">
          <div className="hero-first_row">
            <div className="firstRow_imgContainer">
              <img
                alt="hero"
                src="/images/bocchi1.gif"
                className="hero-img"
              ></img>
            </div>
            <span> Let's build something</span>
          </div>
          <div className="hero-second_row">
            <span>Amazing</span>
            <div className="secondRow_imgContainer">
              <img
                alt="hero"
                className="hero-img2"
                src="/images/bocchi2.gif"
              ></img>
            </div>
          </div>
          <div className="hero-third_row">
            {" "}
            <div className="third_imgContainer">
              <img
                alt="hero"
                className="hero-img3"
                src="/images/bocchi3.gif"
              ></img>
            </div>
            <span>Together!</span>
          </div>
        </section>
        <section className="carousel-sec">
          <div className="wave">
            <Wave />
          </div>
          <div
            className="carousel 
          "
          >
            <ControlledCarousel />
          </div>
        </section>
        <hr></hr>
        <section className="projects ">
          <h2>My Projects</h2>
          <div className="grid-projects hidden">
            <div>
              <Cards
                src="/images/project1.png"
                description="Web Based Online Appointment Sytem for Medical Center Manila "
                title="Online Appointment System"
                link="https://manilamed.netlify.app/"
              />
            </div>
            <div>
              {" "}
              <Cards
                src="/images/project2.png"
                description="A simple word game that I've contributed with the role of in-game functionaly developer."
                title="Simple Word Game"
                link="https://hangman99.netlify.app/"
              />
            </div>
            <div>
              {" "}
              <Cards
                src="/images/project3.png"
                description="One of my very first projects inspired by Genshin Impact using vanilla HTML, CSS and JavaScript"
                title="Genshin Simpact"
                link="https://genshinsimpact.netlify.app/"
              />
            </div>
            <div>
              {" "}
              <Cards
                src="/images/project4.png"
                description="My first ever portfolio as a web developer. Built using React JS Vite and React Bootstrap."
                title="My Portfolio"
                link="https://silver-creponne-ffd96e.netlify.app"
              />
            </div>
          </div>
        </section>
        <section className=""></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
