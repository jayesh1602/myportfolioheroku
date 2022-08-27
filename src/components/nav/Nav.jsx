import React, { useState } from "react";
import "./nav.css";

// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { AiOutlineProject } from "react-icons/ai";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("/#");
  return (
    <nav>
      {/* <a href='/#' onClick={() => setActiveNav('/#')} className={activeNav === '/#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='/#about' onClick={() => setActiveNav('/#about')} className={activeNav === '/#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='/#experiance' onClick={() => setActiveNav('/#experiance')} className={activeNav === '/#experiance' ? 'active' : ''}><BiBook/></a>
      <a href='/#portfolio' onClick={() => setActiveNav('/#portfolio')} className={activeNav === '/#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
      <a href='/#contact' onClick={() => setActiveNav('/#contact')} className={activeNav === '/#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> */}

      <a
        href="/#"
        onClick={() => setActiveNav("/#")}
        className={activeNav === "/#" ? "active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-img h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <a
        href="/#about"
        onClick={() => setActiveNav("/#about")}
        className={activeNav === "/#about" ? "active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-img h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </a>
      <a
        href="/#experiance"
        onClick={() => setActiveNav("/#experiance")}
        className={activeNav === "/#experiance" ? "active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-img h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </a>
      <a
        href="/#portfolio"
        onClick={() => setActiveNav("/#portfolio")}
        className={activeNav === "/#portfolio" ? "active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-img h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      </a>
      <a
        href="/#contact"
        onClick={() => setActiveNav("/#contact")}
        className={activeNav === "/#contact" ? "active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-img h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </a>
    </nav>
  );
};
