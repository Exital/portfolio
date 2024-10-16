import React, { useEffect, useState } from "react";

const Footer = ({ classicHeader, darkTheme, handleNavClick }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update currentYear state with the current year
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © {currentYear}{" "}
              <a
                href="#home"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Tal Rozenzwieg
              </a>
              . All Rights Reserved.
            </p>
          </div>
          {/* <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#terms-policy"
                >
                  Terms &amp; Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#disclaimer"
                  href="#disclaimer"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
