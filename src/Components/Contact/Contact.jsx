import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0acce8ce-daeb-41b6-a3f1-ec2aaadfd757");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Whether you want to collaborate on a project, share ideas, or just
            have a casual chat- I'm always open to connecting. Let's turn
            thoughts into actions and build something meaningful together!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>
                <a href="mailto:goldenjeffrey8@gmail.com" target="_blank">
                  goldenjeffrey8@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>
                <a href="tel:+919487044087" target="_blank">
                  +91 9487044087
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>
                <a
                  href="https://www.google.co.in/maps/place/Allankottai,+Rajakkamangalam,+Ganapathipuram,+Tamil+Nadu+629202/@8.135907,77.348791,17.73z/data=!4m6!3m5!1s0x3b04faebff53340d:0x9d6a814683267939!8m2!3d8.1369707!4d77.3507475!16s%2Fg%2F1jky64zw0?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Nagercoil, KaniyaKumari, Tamilnadu, India
                </a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
