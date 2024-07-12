import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const events = () => {
  const handleAbstract = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Abstract Reference Download`,
    });
    window.open("/docs/Abstract_Reference_Hackathon.pdf");
  };
  useEffect(() => {
    document.title = "Stages";
  });
  const handleStage = (stage) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Events Stage-${stage}`,
    });
    if (stage == "1") {
      document.querySelector("#line-progress").style.width = "0%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage1-content").classList.add("active");
    }
    if (stage == "2") {
      document.querySelector("#line-progress").style.width = "25%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage2-content").classList.add("active");
    }
    if (stage == "3") {
      document.querySelector("#line-progress").style.width = "50%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage3-content").classList.add("active");
    }
    if (stage == "4") {
      document.querySelector("#line-progress").style.width = "75%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage4-content").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <div className="parent-events">
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div className="events-container">
          <div className="section-content stage1-content active">
            <div className="section-format">
              {" "}
              <h1>Registration</h1>
              <p>
              - The registration for Code Cubicle 2.0 ends at 22nd July 2024
                <br /> <br />
                - Participants can register themselves through Devfolio Platform at <a href="https://code-cubicle-
2.devfolio.co/">https://code-cubicle-
2.devfolio.co/</a>
                <br /> <br />
                - The Participants have to fill out their details such as Github and LinkedIn Profiles which
shall be used while scrutinization.
                <br /> <br />
                - The Participants can make a team of 1-4 members for the hackathon registration.
                <br /> <br />
              </p>
            </div>
          </div>
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>
              Scrutinization and Batch Announcement:
              
              </h1>
              <p>
              - Post the registrations the team’s profiles are evaluated by our expert teams and worth
contenders are selected to participate in the hackathon.
                <br /> <br />
                - The Teams are selected on based of the member’s Github Profiles, LinkedIn Profiles.
                <br /> <br />
                - The selected teams will be announced in batches.
                <br /> <br />
                - The Teams will be informed through email and on their Devfolio account.
                <br></br>
              </p>
            </div>
          </div>
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Online Round</h1>
              <p>
              - The selected teams will be eligible to participate in our online round on 27
th July 2024.
                <br /> <br />
                - In this round the participants will be asked to present their ideations to the mentors in a 5-
15 Minute Window during which our expert mentors will be evaluating the participants on
their Idea, Demo, Project Presentation and QnA.
                <br /> <br />
                - The selected participants will be eligible to join us for the Final Offline Round.
                <br /> <br />
               
              </p>
            </div>
          </div>
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>Final Offline Round</h1>
              <p>
              - The selected teams will be invited to Microsoft Office, Gurugram to compete against the
best of the best teams.
                <br /> <br />
                - The teams will have to present their idea to our amazing panel of judges who will evaluate
the participants on the basis of their project and presentation.
                <br /> <br />
                 
                We are super excited to meet you guys and LET THE BEST TEAM WIN THE TITLE.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default events;