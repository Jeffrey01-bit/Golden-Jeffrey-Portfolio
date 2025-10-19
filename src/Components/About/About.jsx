import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Profile 2.jpg";

const About = () => {
  return (
    <div>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                A passionate and curious tech enthusiast in my final year of
                Computer Science and Engineering. I specialize in full-stack
                development, with a strong foundation in web development
                technologies, and I’m actively learning and working on data
                analysis and machine learning.
              </p>
              <p>
                I’ve built several projects that merge innovation with
                real-world application, using technology as a bridge between
                creativity and impact. I also enjoy graphic design and
                Photoshop, where I bring visual ideas to life through design and
                storytelling.
              </p>
              <p>
                Beyond academics, I’ve served as the Secretary of my department
                in my second year, coordinated the College Book Club, and
                currently serve as an Executive Member of my department. I also
                held the position of Public Image Chair in the Rotaract Club of
                my college.
              </p>
              <p>
                I believe in blending technology, creativity, and communication
                to build solutions that inspire and create value.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill">
                <p>Java</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Machine Learning</p>
                <hr style={{ width: "35%" }} />
              </div>
              <div className="about-skill">
                <p>Data Analysis</p>
                <hr style={{ width: "30%" }} />
              </div>
              <div className="about-skill">
                <p>Figma</p>
                <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill">
                <p>Photoshop</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS IN FULL STACK DEVELOPMENT </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS IN AI/ML</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS IN JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
