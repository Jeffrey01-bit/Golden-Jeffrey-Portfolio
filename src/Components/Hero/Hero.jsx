import React, { useState } from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import my_profile from "../../assets/Profile 1.jpg";

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleResumeClick = () => {
    setShowResumeModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
    document.body.style.overflow = "unset";
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Jeffrey_Resume.pdf";
    link.download = "Jeffrey_Resume.pdf";
    link.click();
  };

  return (
    <>
      <div id="home" className="hero">
        <img src={my_profile} alt="" />
        <h1>
          <span>I'm Golden Jeffrey,</span>
          <br />a Tech Enthusiast
        </h1>
        <p>
          Computer Science and Engineering Student | Full Stack Developer |
          Graphic Designer | Java Enthusiastic | Rotaractor
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume" onClick={handleResumeClick}>
            My resume
          </div>
        </div>
      </div>

      {showResumeModal && (
        <div className="resume-modal" onClick={closeResumeModal}>
          <div
            className="resume-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-modal-header">
              <h3>My Resume</h3>
              <div className="resume-modal-actions">
                <button onClick={handleDownloadResume} className="download-btn">
                  Download
                </button>
                <button onClick={closeResumeModal} className="close-btn">
                  ×
                </button>
              </div>
            </div>
            <iframe
              src="/Jeffrey_Resume.pdf#zoom=75"
              width="100%"
              height="100%"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
