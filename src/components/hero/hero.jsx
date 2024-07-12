import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import { SocialIcon } from "react-social-icons";
import Sponsors from "./sponsors";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";
import Prizes from "../prizes/prizes";

const hero = () => {
  const handleInsta = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Instagram",
    });
    window.open("https://www.instagram.com/code_cubicle_2.0/p/C8mT1EjBzVp/");
  };
  const handleDiscord = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Discord",
    });
    window.open("https://discord.com/invite/7TEVm4pmMv");
  };
  const handleWhatsapp = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Whatsapp",
    });
    window.open("https://chat.whatsapp.com/HyH4G4GLYnsG6w6gr3F4Dv");
  };

  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://code-cubicle-2.devfolio.co");
  };
  const handleCardClicks = (card) => {
    // Log the card URL for debugging purposes
    console.log("Navigating to:", card);

    // Ensure card is a valid URL
    try {
        const url = new URL(card, window.location.origin);
        console.log("Resolved URL:", url.href);

        // Open the card URL in the same window
        window.open(url.href, "_self");
    } catch (error) {
        console.error("Invalid URL:", card, error);
    }
};

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleCountdown = () => {
    const countDate = new Date("July 27, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        {/* <div className="progress_bar"></div> */}
        <div className=" tag-hero-mobile">
          <div className="ccContainer">
            <img
              src="/images/CCFinalLogo.png"
              alt="srm logo"
              width="80vh"
              className="hero-srm-logo"
            />
          </div>

          <img
            src="/images/GeekRoomLogoFinal.png"
            alt="srmvec logo"
            width="120vw"
            className="hero-srmvec-logo"
          />
        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
              <span className="hackathon"> {"Code Cubicle  "}</span>
              <br />
              <span className="hackathon"> {"2.0"}</span>

              {/* <p className="tag1"> A National Level 24 Hour Hackathon</p> */}
              {/* <span className="hackathon">Hackathon</span> */}
              <p className="description">
              Delhi’s Largest Coding Community brings you the 2
nd edition of the <span>Code Cubicle</span>, the best
coding experience in the town.

              </p>
            </div>

            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <a>REGISTER </a>
              </div>
              <div>
                {" "}
                <img
                  src="/images/Devfolio logo.png"
                  width={30}
                ></img>
              </div>
            </div>
            <div className="countdown-main">
              {/* <h2 className="countdown-text">
            Join us for the ultimate coding extravaganza!
          </h2> */}
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="col1 animated-div">
              <h3 className="text">
                <div>Event Insights</div>
                <Calender className="calender-icon" />
              </h3>
              <p
                className="text2"
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text3" onClick={() => handleCardClicks("/events")}>
                Events <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 2 * ---------------------------------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Information Details <Info className="info-icon" />
              </h3>
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About Us
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text6" onClick={() => handleCardClicks("/judges")}>
                Mentor Panel
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}
            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Problem Statements</h3>
              </div>
              <p className="text8" onClick={() => handleCardClicks("/set1")}>
                Click here <ArrowRightBlack className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://maps.app.goo.gl/Hq7Sr4XHvFFDu7f57")
              }
            >
              <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3>
              <div className="flex flex-col ">
                <p className="text pt-[2vh] text-[1vw] venue-text-mobile">
                  Microsoft Office , CyberCity , Gurugram
                </p>
                {/* <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, Kattankulathur, Tamil
                  Nadu - 603203
                </p> */}
                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 5  ---------------------------------- */}
            <div className="col5 "></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 black animated-div">
              <h3 className="text13 white">
                Our Socials
                <div className="flex justify-center items-center gap-1"></div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <div className="socialicons">
                  <SocialIcon
                    onClick={handleInsta}
                    className="socialiconsitem"
                    network="instagram"
                  />
                  <SocialIcon
                    onClick={handleDiscord}
                    className="socialiconsitem"
                    network="discord"
                  />
                  <SocialIcon
                    onClick={handleWhatsapp}
                    className="socialiconsitem"
                    network="whatsapp"
                  />
                </div>
                <div className="round2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
      </div>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />

      <Footer />
    </React.Fragment>
  );
};

export default hero;
