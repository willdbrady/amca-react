import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./FestivalesSection.css";

const FestivalesSection = () => {
  let isMobile = false;
  const [festivos, setFestivos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const carouselWrapperRef = useRef(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/amca");
      setFestivos(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const cardElement = document.querySelector(".festivales-carousel__card");
    if (cardElement) {
      setCardWidth(cardElement.offsetWidth + 40);
    }
  }, [festivos]);

  const handleNext = () => {
    if (currentIndex < festivos.length - 3) {
      setCurrentIndex(currentIndex + 1);
      setActiveIndicator((prev) => (prev < festivos.length - 3 ? prev + 1 : 0));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveIndicator((prev) => (prev > 0 ? prev - 1 : festivos.length - 3));
    }
  };

  useEffect(() => {
    // Update the carousel's position based on the current index
    const offset = -currentIndex * cardWidth;
    if (carouselWrapperRef.current) {
      carouselWrapperRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, cardWidth]);

  return (
    <section id="section-3" className="section-example">
      <h2 className="festivales-header">Festivales</h2>
      <div className="festivales-carousel">
        <div
          className="festivales-carousel__track-container"
          ref={carouselWrapperRef} // Attach the ref to this container
        >
          <ul className="festivales-carousel__track">
            {festivos.map((item) => (
              <li className="festivales-carousel__card" key={item._id}>
                <img src={item.imageUrl} alt="" />
                <div className="card-info">
                  <h3 className="card-header">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
                <button>Aprender más</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMobile || festivos.length > 3 ? (
        <div className="festivales-carousel__indicators">
          <button
            onClick={handlePrev}
            className="festivales-carousel__button festivales-carousel__button--left"
          >
            &lt;
          </button>
          {festivos.slice(0, festivos.length - 2).map((_, index) => (
            <span
              key={index}
              className={`festivales-carousel__indicator ${
                index === activeIndicator
                  ? "festivales-carousel__indicator--active"
                  : ""
              }`}
            ></span>
          ))}
          <button
            onClick={handleNext}
            className="festivales-carousel__button festivales-carousel__button--right"
          >
            {" "}
            &gt;
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default FestivalesSection;
