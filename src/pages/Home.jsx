import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import vector from "../assets/vector.svg";
import cv from "../assets/maaz-ahmed-cv.txt";

export default function Home() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio";
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
            <p className="home-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              mollitia ducimus aperiam id similique, quam impedit ratione ab
              maxime quia?Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Asperiores, tempore?
            </p>
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
