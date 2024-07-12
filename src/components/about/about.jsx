import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/GeekRoomLogoFinal.png"
              alt="srm logo"
              className="about-srm-logo"
            />
            Geek Room
            
          </div>
          <div className="foundation-description" id="about-left">
          GeekRoom is the thriving hub of technical enthusiasts where innovation meets camaraderie. With over 10000+ active members, Geek Room stands tall as one of the emergent technical communities in Delhi, boasting established chapters in numerous colleges across the city.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/CodeKshetraLogo.svg"
              alt="srmvec logo"
            />
            <img
              className="about-srmvec-logo"
              src="/images/CCLogo.png"
              alt="srmvec logo"
            />
            <img
              className="about-srmvec-logo"
              src="/images/CCLogo.png"
              alt="srmvec logo"
            />

          </div>
          <div className="about-srmvec-description" id="about-right">
          Since its inception, Geek Room has been dedicated to nurturing a culture of innovation and creativity within the realm of computer science. Our mission is simple yet profound: to provide a platform for like-minded individuals to collaborate, learn, and push the boundaries of technology.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.csi-kancheepuram.org/")}
          >
            

          </div>
          <div className="about-csi-description" id="about-left">
          At Geek Room, we believe in the power of community-driven learning and support. Whether you're a seasoned expert or a curious beginner, our community is here to guide you through competitions, projects, hackathons, and various other technical endeavors.
          </div>
        </div>
        {/* <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.whitehatians.tech")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/whitehatians.webp"
              alt="whitehatians logo"
            />
            About whitehatians
          </div>
          <div className="about-whitehatians-description" id="about-right">
            WhiteHatians Cyber Security club. The main goal of this club is to
            provide a technical opportunity for students to broaden their
            knowledge in the area of Cyber Security and to interact with other
            students who have a shared interest in cyber security. Through the
            club’s activities, members can also network with professionals in
            the field, gain hands-on experience, and prepare for careers in
            cyber security.
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default about;