import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div id="judges" className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Judges</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/Sunchit.webp"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Sunchit Dudeja</h1>

            <h1 className="convener-position">
            One of the Youngest SDE-V @ Adobe{" "}
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/ankur.webp"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Dr. Ankur Arora</h1>

            <h1 className="convener-position">
            VP Data science/AI Garage at Mastercard, Mastercard{" "}
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/sonu.webp"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Sonu Kumar</h1>

            <h1 className="convener-position">
            CTO and AI Head @ AI Anytime{" "}
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/ayon.webp"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Ayon Roy</h1>

            <h1 className="convener-position">
            Executive Data Scientist @ NielsenIQ{" "}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
