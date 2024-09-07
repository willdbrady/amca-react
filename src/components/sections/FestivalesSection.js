import React from "react";
import "./FestivalesSection.css";

const FestivalesSection = () => {
  return (
    <section id="section-3" className="section-example">
      <h2 className="festivales-header">Festivales</h2>
      <div className="festivales-carousel">
        <div className="festivales-carousel__track-container">
          <ul className="festivales-carousel__track">
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <div className="card-info">
                <h3 className="card-header">Amca Fest 2024</h3>
                <p className="card-text">
                  Sit eveniet mollitia blanditiis fugit nostrum rem.
                </p>
                <button>Aprender más</button>
              </div>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <div className="card-info">
                <h3 className="card-header">San Pedro 2023</h3>
                <p className="card-text">
                  Sit eveniet mollitia blanditiis fugit nostrum rem.
                </p>
                <button>Aprender más</button>
              </div>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <div className="card-info">
                <h3 className="card-header">Las Flores 2023</h3>
                <p className="card-text">
                  Sit eveniet mollitia blanditiis fugit nostrum rem.
                </p>
                <button>Aprender más</button>
              </div>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <h3></h3>
              <p></p>
              <button></button>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <h3></h3>
              <p></p>
              <button></button>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <h3></h3>
              <p></p>
              <button></button>
            </li>
            <li className="festivales-carousel__card">
              <img src="" alt="" />
              <div className="card-info">
                <h3 className="card-header">Las Flores 2023</h3>
                <p className="card-text">
                  Sit eveniet mollitia blanditiis fugit nostrum rem.
                </p>
                <button>Aprender más</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="festivales-carousel__indicators">
        <button className="festivales-carousel__button festivales-carousel__button--left">
          &lt;
        </button>
        <span className="festivales-carousel__indicator carousel__indicator--active"></span>
        <span className="festivales-carousel__indicator"></span>
        <span className="festivales-carousel__indicator"></span>
        <span className="festivales-carousel__indicator"></span>
        <span className="festivales-carousel__indicator"></span>
        <button className="festivales-carousel__button festivales-carousel__button--right">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default FestivalesSection;
