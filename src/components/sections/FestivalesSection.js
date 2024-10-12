import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./FestivalesSection.css";
import Popup from "../Popup";
import { createPortal } from "react-dom";

const FestivalesSection = () => {
  const [festivos, setFestivos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useState to control popup visiblity
  const [showModal, setShowModal] = useState(false);
  // useStates for popup
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselWrapperRef = useRef(null);

  // Uses NodeJS api to collect data for festivos card information.
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/amca");
      setFestivos(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetches events after dom is created.
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handles window resizing for cards
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isMobile = windowWidth <= 750 ? true : false;

  // Handles card sizing
  useEffect(() => {
    const cardElement = isMobile
      ? document.querySelector(".festivales-carousel-mobile__card")
      : document.querySelector(".festivales-carousel__card");
    if (cardElement) {
      setCardWidth(cardElement.offsetWidth + (isMobile ? 50 : 40));
    }
  }, [festivos]);

  // Next arrow button logic
  const handleNext = () => {
    if (currentIndex < festivos.length - (isMobile ? 1 : 3)) {
      setCurrentIndex(currentIndex + 1);
      setActiveIndicator((prev) =>
        prev < festivos.length - (isMobile ? 1 : 3) ? prev + 1 : 0
      );
    }
  };

  // Previous arrow button logic
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveIndicator((prev) => (prev > 0 ? prev - 1 : festivos.length - 3));
    }
  };

  // Set movement distance of cards based on card width and position.
  useEffect(() => {
    const offset = -currentIndex * cardWidth;
    if (carouselWrapperRef.current) {
      carouselWrapperRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, cardWidth]);

  // Handles popup for information modal.
  const handlePopup = (title, description, imageUrl) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setSelectedImage(imageUrl);
    setShowModal(true); // Show the modal
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedTitle(null);
    setSelectedDescription(null);
    setSelectedImage(null); // Clear the data upon closing
  };

  return (
    <section id="section-3" className="section-example">
      <h2 className="festivales-header">Festivales</h2>
      <div className="festivales-carousel">
        <div
          className="festivales-carousel__track-container"
          ref={carouselWrapperRef}
        >
          <ul className="festivales-carousel__track">
            {festivos.map((item) => (
              <li
                className={
                  isMobile
                    ? "festivales-carousel__card festivales-carousel-mobile__card"
                    : "festivales-carousel__card"
                }
                key={item._id}
              >
                <img src={item.imageUrl} alt="" />
                <div className="card-info">
                  <h3 className="card-header">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
                <button
                  onClick={(event) =>
                    handlePopup(
                      item.title,
                      item.description,
                      item.imageUrl,
                      event
                    )
                  }
                >
                  Aprender más
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMobile ? (
        <div className="festivales-carousel__indicators">
          <button
            onClick={handlePrev}
            className="festivales-carousel__button festivales-carousel__button--left"
          >
            &lt;
          </button>
          {festivos.slice(0, festivos.length).map((_, index) => (
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
      ) : festivos.length > 3 ? (
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
      {showModal &&
        createPortal(
          <Popup
            title={selectedTitle}
            description={selectedDescription}
            image={selectedImage}
            closeModal={closeModal}
          />,
          document.getElementById("popup")
        )}
    </section>
  );
};

export default FestivalesSection;
