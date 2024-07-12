import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What is Code Cubicle and what makes it unique?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            The Code Cubicle 2.0 is a groundbreaking hackathon organized by Geek Room. It provides a unique experience, redefining the boundaries of creativity and technology, transcending conventional hackathons.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            When and where is Code Cubicle 2.0 2024 taking place?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle 2.0 2024 is an offline event scheduled for 3rd August. The venue is Microsoft Office, Gurugram. It's a hackathon that promises an immersive experience in tech innovation
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What is the prize pool for Code Cubicle 2.0, and how are the prizes distributed?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle boasts a prize pool worth INR 300000+, with a cash prize worth INR 10,000+. Details about the prize distribution will be announced closer to the event.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What engaging activities can participants expect during Code Cubicle 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle 2.0 features live project presentations, idea pitching, judging by esteemed panels, and a fun and games round with prizes to keep participants engaged throughout the hackathon.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What exclusive perks are provided to participants?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants at Code Cubicle 2.0 enjoy exclusive perks, including free swags, networking opportunities with industry experts, goodies, accommodation, meals, and much more, enhancing their overall experience.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            How does Code Cubicle 2.0 encourage innovation and problem-solving?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle 2.0 challenges participants to push their boundaries and foster inventive solutions to real-world issues. It celebrates the union of innovation and technology, providing a platform for participants to showcase their skills.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            Who are the organizers of Code Cubicle 2.0, and what is their mission?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle 2.0 is hosted by the team efforts of Geek Room. Their mission is to provide a platform for tech enthusiasts to showcase their skills and amplify their potential through an exciting blend of competition, learning, and groundbreaking innovation.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            How can participants connect with like-minded individuals and industry experts during Code Cubicle?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants can connect with like-minded individuals and industry experts through networking sessions, project collaborations, and various interactive opportunities provided during Code Cubicle 2.0. It's a unique chance to learn, compete, and establish valuable connections.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            How can I stay updated on Code Cubicle 2.0 announcements and details?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Stay updated on Code Cubicle 2.0 announcements and details by regularly checking the official website. Additionally, follow their social media channels for the latest news and updates regarding the event.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What is the maximum team size allowed for Code Cubicle 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            The maximum team size allowed for Code Cubicle 2.0 is 4 members. Participants can form teams with a minimum of 1 member and a maximum of 4 members.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            Can I participate as an individual, or is it mandatory to be part of a team?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Code Cubicle 2.0 allows both individual and team participation. You can register as an individual and participate solo, or you can form a team with up to 3 other members.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            Are there any specific requirements for the projects that participants can work on?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants in Code Cubicle 2.0 have the flexibility to choose the type of projects they want to work on. There are no specific requirements, allowing participants to showcase their creativity and skills by working on innovative solutions to real-world issues.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What should I bring to Code Cubicle 2.0, and what will be provided by the organizers?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants are encouraged to bring their laptops and any specific tools or hardware they may need for coding. Organizers will provide the necessary infrastructure, but participants should ensure they have everything they need for a successful hacking experience.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;