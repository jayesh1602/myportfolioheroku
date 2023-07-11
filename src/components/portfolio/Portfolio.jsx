import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import health from "../../assets/health.png";
import Student_DB from "../../assets/Student_management.png";
import PortfolioIMG from "../../assets/portfolio.png";
import BookProject from "../../assets/book_wise_project.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={health} alt="title 1" />
          </div>
          <h3>
            <span className="portfolio__title">Title : </span>Health Records
            management System{" "}
          </h3>
          <p>
            <ul>
              <li>
                this project solves the problem of storing the health record of
                all the patients
              </li>
              <li>we dont have to bring our files every time to hospital's</li>
            </ul>
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PICT-PBL-6-2021-22/public_health_record_management_system"
              target="_blank"
              className="btn btn-port"
            >
              Github
            </a>
            <a
              href="https://public-health-record-system.herokuapp.com/"
              target="_blank"
              className="btn btn-primary btn-port"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BookProject} alt="title 1" />
          </div>
          <h3>
            <span>Title : </span>BookWise - Track Record of Books
          </h3>
          <hr />
          <p>
            <ul>
              <li>This project is to track the record of books read by user</li>
              <li>Implementation of user management</li>
            </ul>
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jayesh1602/Book_store"
              target="_blank"
              className="btn btn-port"
            >
              Github
            </a>
            <a
              href="https://book-store-kull.onrender.com/"
              target="_blank"
              className="btn btn-primary btn-port"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PortfolioIMG} alt="title 1" />
          </div>
          <h3>
            <span>Title : </span>This is My portfolio website Project
          </h3>
          <p>
            Portfolio website project to show-case my skills, made by ReactJS
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jayesh1602/myportfolioheroku"
              target="_blank"
              className="btn btn-port"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary btn-port"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
