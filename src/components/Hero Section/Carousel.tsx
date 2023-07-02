import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/images/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Hello!</h1>
          <p>
            I am Mark Angelo S. Templanza, and I am currently looking for an
            internship program that would further enhance my skills in Web
            Development.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/images/carousel2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>About Me</h1>
          <p>
            I am confident with my skills in various programming knowledge
            especially JavasScript and know different JavaScript frameworks for
            both frontend and backend, such as React JS, Express JS and MySQL.{" "}
            I've worked with different projects since the start of my college
            and had become a lead programmer in one of our capstone project.
            Overall I'm passionate about taking on new challenges and
            contributing to more projects.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/images/carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Contact Me</h1>
          <p>
            For further questions, please contact by clicking on this link{" "}
            <a>Contact Me</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
