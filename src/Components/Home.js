import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("./images/1.jpg"),
  },
  {
    image: require("./images/3.jpg"),
  },
  {
    image: require("./images/4.jpg"),
  },
];

export const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item interval={800}>
            <img className="d-block w-100" src={slide.image} />
            <Carousel.Caption className="py-20">
              <Button variant="outline-primary">
                <Link to="/intro" style={{ color: "white" }}>
                  Get Started with your Learning
                </Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
