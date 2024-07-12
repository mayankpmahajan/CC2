import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
import Prizes from "../prizes/prizes";
const sponsors = () => {
  return (
    <React.Fragment>
      <div id = "sponsors" className="parent-sponsors">

      <div className="schedule-title">
            <img src="/images/BulletPoint.svg" alt="arrow-logo" />
            Our Sponsors
      </div>

        <section class="grid-container">

        <div class="grid grid-4-cols gap-4 grid-items-center mt-4 large-mt-8">
            <img
              src="/images/IMG_6965-removebg-preview 1.png"
              alt="brand6"
              class="brand-image medium-image"
            />
            <img
              src="/images/IMG_6967 1.png"
              alt="brand7"
              class="brand-image medium-image"
            />
            <img
              src="/images/IMG_6967 2.png"
              alt="brand8"
              class="brand-image medium-image"
            />
            <img
              src="/images/yes.png"
              alt="brand9"
              class="brand-image medium-image"
            />
          </div>



          <div class="grid grid-5-cols gap-4 grid-items-center">
            <img
              src="/images/IMG_6960-removebg-preview 1.png"
              alt="brand1"
              class="brand-image large-image"
            />
            <img
              src="/images/IMG_6961-removebg-preview 1.png"
              alt="brand2"
              class="brand-image large-image sonu"
            />
            <img
             src="/images/IMG_6962-removebg-preview 1.png"
              alt="brand3"
              class="brand-image large-image"
            />
            <img
              src="/images/IMG_6963-removebg-preview 1.png"
              alt="brand4"
              class="brand-image large-image"
            />
            <img
              src="/images/IMG_6964-removebg-preview 1.png"
              alt="brand5"
              class="brand-image large-image"
            />
          </div>

          
        </section>

        <Prizes />
        <Faqs />
        <Convener />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
