import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/BulletPoint.svg" alt="arrow-logo" />
            <h1 className="title-name">About Code Cubicle</h1>
          </div>
          {/* <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              A hackathon is an event where individuals or teams come together
              to collaboratively work on solving specific problems or challenges
              within a limited timeframe, usually ranging from a few hours to a
              couple of days. It is a great platform for programmers, designers,
              entrepreneurs, and other creative minds to showcase their skills,
              creativity, and problem-solving abilities.
            </div>
          </div> */}
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/CC.png"
                alt="vision-image"
                width="250px"
                className="about-vision-image"
              />
            </div>
            <div className="about-vision-description" id="agenda-right">
              Code Cubicle is not just a competition; it's an adrenaline-fueled
              journey where coding prowess meets imaginative thinking. Set in
              the prestigious Ecosphere Coworking, this event is a beacon of
              tech excellence, attracting a vibrant mix of students,
              professionals, and tech enthusiasts.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/chinki.png"
                alt="mission-image"
                width={"450px"}
                className="about-mission-image"
              />
            </div>
            <div className="about-mission-description" id="agenda-left">
              At Code Cubicle, innovation takes center stage as brilliant minds
              converge to create solutions for an ever-evolving world. This
              hackathon is a catalyst for change, where collaborative tech
              efforts break new ground and pave the way for the future. Be part
              of this journey to brainstorm, partner, and make a lasting impact
              on the canvas of technological progress. Join us to ignite
              meaningful change and carve out a brighter, more innovative
              future.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
