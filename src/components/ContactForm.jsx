import React from "react";
import { FaUserAlt, FaEnvelope, FaCommentDots, FaPaperPlane, FaWhatsappSquare, FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Form() {
  return (
    <div className="form-container">
      <form name="contact" method="post" className="form">
        <input type="hidden" name="form-name" value="contact" />
      <h1 className="form-heading">Get in touch</h1>

        <p className="input-container">
          <label htmlFor="name" className="form-icon"><FaUserAlt /></label>
          <input className="input" type="text" id="name" name="name" placeholder="Full Name" required />
        </p>
        <p className="input-container">
          <label htmlFor="email" className="form-icon"><FaEnvelope /></label>
          <input className="input" type="email" id="email" name="email" placeholder="Email Address" required />
        </p>
        <p className="input-container">
          <label htmlFor="message" className="form-icon"><FaCommentDots/></label>
          <textarea className="input" id="message" name="message" placeholder="Message" rows="10" required></textarea>
        </p>
        <p className="btn-container">
          <button type="submit" className="send-btn"><FaPaperPlane className="send-icon"/>Send1 </button>
        </p>
      </form>
      <div className="additional-info">
        <h2>You can also contact me on</h2>
        <div className="info">
            <p className="info-container">
                    <SiGmail className="info-icon"/>
                    maaz.ahmed786242@gmail.com
            </p>
            <p className="info-container">
                <FaWhatsappSquare  className="info-icon"/>
                (+92) 312 2362907
            </p>
            <a href="https://www.facebook.com/mmaaz.ahmed.5030/" className="info-container">
                <FaFacebook  className="info-icon"/>
                <p >Facebook</p>
            </a>
            <a href="https://github.com/Drago78624" className="info-container">
                <FaGithub  className="info-icon"/>
                <p>Github</p>
            </a>
        </div>
      </div>
    </div>
  );
}
