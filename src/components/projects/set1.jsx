import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  useEffect(() => {
    document.title = "Projects - Set 1";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Projects - set 1",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };
  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Problem Statements</h1>
        <p className="projects-disclaimer">
        Explore and Tackle Unique and Exciting Challenges
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Personalized Learning</h1>
            <p className="software-content-description projects-close">
            Traditional education often follows a one-size-fits-all approach, which may not cater to the diverse learning needs of students. Technology can facilitate personalized learning experiences by utilizing adaptive learning platforms, AI-driven tutors, and learning analytics to tailor educational content and pace to individual student abilities and preferences.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Gamified Homework Assignments</h1>
            <p className="software-content-description projects-close">
            Design a gamified homework platform that transforms traditional assignments into interactive quests, challenges, or simulations, incentivizing students to complete tasks, review concepts, and earn rewards while having fun and learning.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Rehabilitation</h1>
            <p className="software-content-description projects-close">
            Can you find ways to incorporate enjoyable activities into the recovery process so that it can provide a sense of accomplishment, help reduce stress, and provide a sense of purpose and meaning in life to people recovering from various problems such as addiction, therapies etc
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            Affordability
            </h1>
            <p className="software-content-description projects-close">
            Rising healthcare costs make it difficult for individuals and families in rural areas to afford necessary medical treatments, medications, and insurance premiums. Can you ponder upon this problem and find some unique solutions?
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            Money Management for Young Adults
            </h1>
            <p className="software-content-description projects-close">
            Young adults (aged 18-25) are financially savvy but lack the tools and guidance to confidently navigate their financial futures. Design an inclusive FinTech solution that empowers them to manage their money effectively and build a secure financial foundation.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Fraud and Security</h1>
            <p className="software-content-description projects-close">
            Financial fraud, including identity theft, payment fraud, and cyberattacks, are really common these days. Can blockchain or tech in general help in this matter?
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Open Innovation</h1>
            <p className="software-content-description projects-close">
            This is the real “open” open innovation, just build anything that solves a real world problem
            </p>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;