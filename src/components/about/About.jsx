import React from "react";
import "./about.css";
// import ME from '../../assets/my_pinkbg_3.jpg'
import ME from "../../assets/jayesh_blue_back.png";
import About_Img from "../../assets/Laptop_image_about.png";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={About_Img} alt="About Image"></img>
          </div>
        </div> */}
        <div className="about__me__2">
          <div className="about__me-image_2">
            <img src={About_Img} alt="About Image" className="About-img"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h2>Education :</h2>

              <h4>Bachelors of Engineering (B.E) </h4>
              <small>
                - Pune institute of computer technology,Pune (2020 - 2024)
              </small>
              <h4>Higher Secondary Certificate (H.S.C)</h4>
              <small>- Nutan Maratha Collage , Jalgaon (2018 - 2020)</small>
              <h4>Secondary School Certificate (S.S.C)</h4>
              <small>
                - K.K.Wagh Vidyabhavan B.Nagar , Niphad (2013 - 2018)
              </small>

              <h2>Interest</h2>
              <h4>Coding</h4>
              <small>- Developing softwares and Competative coding</small>
              <h4>Watching & Reading</h4>
              <small>- Finance related contents on You-Tube , Movies</small>
              <small>- Inspirational books, Finance related books</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
