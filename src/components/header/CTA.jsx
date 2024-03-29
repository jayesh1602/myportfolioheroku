import React from "react";
import CV from "../../assets/Jayesh_resume_New_2.pdf";

export const CTA = () => {
  function downloadPdf() {
    window.open("Jayesh_resume_New_2.pdf", "_blank");
  }
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk..
      </a>
    </div>
  );
};
