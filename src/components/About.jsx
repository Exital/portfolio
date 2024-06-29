import React, { useState, useEffect } from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [age, setAge] = useState(0);
  
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date();
    const startYear = 2019; // Assuming you started gaining experience from 2019
    const birthDate = new Date(1992, 5, 16); // Your birth date (year, month - 1, day) months starts from 0
  
    // Calculate experience in years
    const experience = currentYear - startYear;
    setYearsExperience(experience);
  
    // Calculate age in years (rounded down)
    let ageInYears = currentYear - birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
  
    // Check if birthday yet to occurr this year
    if (currentDate.getMonth() < birthMonth || (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)) {
      ageInYears--;
    }
  
    setAge(ageInYears);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Tal Rozenzweig,</span> a DevOps
              Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am a DevOps Engineer with strong programming skills, having graduated with <span className="text-primary">honors from the Technion</span>.
            Known for being a fast learner and team player, I thrive on mastering new technologies. 
            I am passionate about innovation and am seeking my next challenge in a dynamic and forward-thinking organization.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              <>some thing about my devops skills</>
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Tal Rozenzweig
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:talrosen3@gmail.com">talrosen3@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>{age}
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Kfar Tavor, Israel
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>{yearsExperience}</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>91.1</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  GPA
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>6</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
