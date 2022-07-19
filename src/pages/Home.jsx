import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import vector from "../assets/vector.svg";
import cv from "../assets/Muhammad_Maaz_Ahmed_CV.pdf";

export default function Home() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - Home";
  }, []);
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-info">
          <h1 className="home-heading">
            {" "}
            <span className="first-line">
              {" "}
              Hi, I'm <span className="text-gradient"> Maaz Ahmed</span>
            </span>{" "}
            <br /> <span className="second-line">Frontend Developer</span>{" "}
          </h1>
          <div className="fade-in-bottom">
            <ul className="home-text">
              <li>Get your website built.</li>
              <li>Pixels with purpose.</li>
              <li>Creativity never end.</li>
              <li>Creativity simplified.</li>
            </ul>
            <a className="home-btn" href={cv} download>
              Download CV <FaDownload className="home-icon" />
            </a>
          </div>
        </div>
        <div className="home-vector">
          <img src={vector} alt="" />
        </div>
      </div>
    </section>
  );
}
