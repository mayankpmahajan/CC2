import React from "react";
import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./contact.css";
import { ReactComponent as DiscordContact } from "../../assets/discord.svg";
import ReactGA from "react-ga";
import { LinkedIn } from "@mui/icons-material";

const contact = () => {
 const handlecontactOptions = (card) => {
 document.querySelector(card).classList.toggle("contact-card-flip");
 };

 const handleLaunch = (target) => {
 ReactGA.event({
 category: "Button",
 action: "click",
 label: "Contact Option",
 });
 const rocket = document.querySelector(`#${target}`);
 rocket.classList.toggle("contact-card-launch");
 };
 return (
 <React.Fragment>
 <div id="leadorganisers" className="parent-contact" >
 <div className="contact-title">
 <img src="/images/rrr.webp" alt="arrow-logo" />
 Lead Organisers
 </div>
 <div className="parent-container">
 {/* -----------------------------------------Contact 1 ------------------------------------------- */}
 
 {/* -----------------------------------------Contact 2 ------------------------------------------- */}
 <div>
 <div className="contact-container">
 <div className="contact-card1">
 <div className="contact-card-front">
 <img
 src="/images/arnav.jpg"
 alt="Arnav Gupta"
 />
 <div className="contact-card-details">
 <h1 className="contact-card-name">Arnav <br />Gupta</h1>
 <h2 className="contact-card-description">
 Co-Founder Geek Room
 </h2>
 <h3
 className="contact-card-options"

 >
 {" "}
 <LinkedIn

onClick={() => {
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/arnav-gupta-437a66256/");
 }, 20);
}}
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </h3>
 </div>
 </div>
 <div className="contact-card-back1">
 <div className="contact-card-details">
 <h1 className="contact-card-name"></h1>
 <h2 className="contact-card-description">
 
 <span
 className="contact-card-discord"
 onClick={() => {
 handleLaunch("contact-card-launch14");
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/arnav-gupta-437a66256/");
 }, 2000);
 }}
 >
 <LinkedIn
 className="discord"
 style={{
 width: "35px",
 height: "35px",
 }}
 />
 Arnav Gupta
 <span id="contact-card-launch14">
 <RocketLaunchIcon
 className="rocketLaunch"
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </span>
 </span>
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card1")}
 >
 <KeyboardDoubleArrowLeftIcon
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div>
 <div className="contact-container">
 <div className="contact-card1">
 <div className="contact-card-front">
 <img
 src="/images/Saksham.jpg"
 alt="Saksham Verma"
 />
 <div className="contact-card-details">
 <h1 className="contact-card-name">Saksham Verma</h1>
 <h2 className="contact-card-description">
 Design Head Geek Room
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card2")}
 >
 {" "}
 <LinkedIn

onClick={() => {
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/saksham-verma-a9390b256/");
 }, 20);
}}
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </h3>
 </div>
 </div>
 <div className="contact-card-back1">
 <div className="contact-card-details">
 <h1 className="contact-card-name"></h1>
 <h2 className="contact-card-description">
 
 <span
 className="contact-card-discord"
 onClick={() => {
 handleLaunch("contact-card-launch14");
 setTimeout(() => {
 window.open("");
 }, 2000);
 }}
 >
 <LinkedIn
 className="discord"
 style={{
 width: "35px",
 height: "35px",
 }}
 />
 Saksham Verma
 <span id="contact-card-launch14">
 <RocketLaunchIcon
 className="rocketLaunch"
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </span>
 </span>
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card2")}
 >
 <KeyboardDoubleArrowLeftIcon
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div>
 <div className="contact-container">
 <div className="contact-card1">
 <div className="contact-card-front">
 <img
 src="/images/manas.jpeg"
 alt="Manas Chopra"
 />
 <div className="contact-card-details">
 <h1 className="contact-card-name">Manas Chopra</h1>
 <h2 className="contact-card-description">
 Co-Founder Geek Room
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card3")}
 >
 {" "}
 <LinkedIn

onClick={() => {
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/themanas95826/");
 }, 20);
}}
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </h3>
 </div>
 </div>
 <div className="contact-card-back1">
 <div className="contact-card-details">
 <h1 className="contact-card-name"></h1>
 <h2 className="contact-card-description">
 
 <span
 className="contact-card-discord"
 onClick={() => {
 handleLaunch("contact-card-launch14");
 setTimeout(() => {
 window.open("");
 }, 2000);
 }}
 >
 <LinkedIn
 className="discord"
 style={{
 width: "35px",
 height: "35px",
 }}
 />
 Manas Chopra
 <span id="contact-card-launch14">
 <RocketLaunchIcon
 className="rocketLaunch"
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </span>
 </span>
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card3")}
 >
 <KeyboardDoubleArrowLeftIcon
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div>
 <div className="contact-container">
 <div className="contact-card1">
 <div className="contact-card-front">
 <img
 src="/images/pratham.jpeg"
 alt="Pratham"
 />
 <div className="contact-card-details">
 <h1 className="contact-card-name">Pratham Batra</h1>
 <h2 className="contact-card-description">
 Co-Founder Geek Room
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card4")}
 >
 {" "}
 <LinkedIn

onClick={() => {
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/pratham1908/");
 }, 20);
}}
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </h3>
 </div>
 </div>
 <div className="contact-card-back1">
 <div className="contact-card-details">
 <h1 className="contact-card-name"></h1>
 <h2 className="contact-card-description">
 
 <span
 className="contact-card-discord"
 onClick={() => {
 handleLaunch("contact-card-launch14");
 setTimeout(() => {
 window.open("");
 }, 2000);
 }}
 >
 <LinkedIn
 className="discord"
 style={{
 width: "35px",
 height: "35px",
 }}
 />
 pratham1908
 <span id="contact-card-launch14">
 <RocketLaunchIcon
 className="rocketLaunch"
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </span>
 </span>
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card4")}
 >
 <KeyboardDoubleArrowLeftIcon
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div>
 <div className="contact-container">
 <div className="contact-card1">
 <div className="contact-card-front">
 <img
 src="/images/purvesh.jpeg"
 alt="purvesh"
 />
 <div className="contact-card-details">
 <h1 className="contact-card-name">Purvesh Gupta</h1>
 <h2 className="contact-card-description">
 VP @HackUnicornClub
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card5")}
 >
 {" "}
 <LinkedIn

onClick={() => {
 setTimeout(() => {
 window.open("https://www.linkedin.com/in/purvesh-gupta-736b95256/");
 }, 20);
}}
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </h3>
 </div>
 </div>
 <div className="contact-card-back1">
 <div className="contact-card-details">
 <h1 className="contact-card-name"></h1>
 <h2 className="contact-card-description">
 
 <span
 className="contact-card-discord"
 onClick={() => {
 handleLaunch("contact-card-launch14");
 setTimeout(() => {
 window.open("");
 }, 2000);
 }}
 >
 <LinkedIn
 className="discord"
 style={{
 width: "35px",
 height: "35px",
 }}
 />
 Purvesh Gupta
 <span id="contact-card-launch14">
 <RocketLaunchIcon
 className="rocketLaunch"
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 </span>
 </span>
 </h2>
 <h3
 className="contact-card-options"
 onClick={() => handlecontactOptions(".contact-card5")}
 >
 <KeyboardDoubleArrowLeftIcon
 style={{
 width: "20px",
 height: "20px",
 }}
 />
 
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>


 </div>
 </div>
 </React.Fragment>
 );
};

export default contact;