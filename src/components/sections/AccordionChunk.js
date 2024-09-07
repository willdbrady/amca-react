import React, { useState } from "react";
import ListOfQNA from "../../components/ListOfQNA";

const Accordion = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(0);

  const accordionHandler = (id) => {
    selectedAccordion === id
      ? setSelectedAccordion(0)
      : setSelectedAccordion(id);
  };

  return (
    <>
      {ListOfQNA.map((item) => (
        <div
          key={item.id}
          className={
            selectedAccordion === item.id
              ? `accordion accordion__active`
              : `accordion`
          }
          onClick={() => accordionHandler(item.id)}
        >
          <div className="accordion__intro">
            <h2>{item.question}</h2>
            <svg
              className="arrowButton"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="17.5"
                stroke="#9095A0"
                strokeWidth="2"
              />
              <path
                d="M14.667 22.9273L15.7397 24L21.7397 18L15.7397 12L14.667 13.0727L19.5942 18L14.667 22.9273Z"
                fill="#9095A0"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="accordion__content">
            <p>
              {item.answer}
              {item.href !== undefined ? (
                <a href={"mailto:" + item.href}>{item.href}</a>
              ) : null}
            </p>
            {item.image !== undefined ? <br /> : null}
            {item.image !== undefined ? (
              <img src={item.image} alt={item.alt} />
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
