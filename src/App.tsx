import "./App.css";
import ControlledCarousel from "./components/Hero Section/Carousel";
import Wave from "./components/Wave";
import Navbar from "./components/navbar";

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

function App() {
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
        <section className="hidden"></section>
        <section className="hidden"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
