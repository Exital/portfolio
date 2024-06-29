import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    IOT: 'IoT',
    WEB: "Web",
    AI: 'AI',
    OTHER: "Other",
  };

  const projectsData = [
    {
      title: "Smart Garden",
      projectInfo:
        "My team and I have developed an IoT solution for collecting data and taking care of your home plants without consuming a lot of power. \
        We have used a raspberry pi as a local webserver and access point which can control up-to 6 end units which were built on ESP32 chip. \
        We have used several sensors such as soil moisture, temperature, light and uv in order to monitor the environment and its need for irrigation. \
        In order to be power efficient we have managed to use a deep sleep mode on the end point units and have come with a solution for low power irrigation system \
        which does not rely on pumps.",
      technologies: "C++, Embedded, IoT, RaspberryPi, ESP32, Arduino",
      date: "Dec, 2021",
      url: {
        name: "github.com/Exital/smartGarden",
        link: "https://github.com/Exital/smartGarden",
      },
      socialLinks: {
        youtube: "https://www.youtube.com/watch?v=yvWwVqaM3DU",
      },
      thumbImage: "images/projects/smart_garden_1.jpg",
      sliderImages: [

      ],
      categories: [filters.IOT, filters.WEB],
    },
    {
      title: "Generating melodies using Deep Learning",
      projectInfo:
        "For my final project at the Technion, my team and I (3 members) developed two melody generation models that won first place at the Technion Best AI Project of 2023. \
        These models are capable of training on various kinds of melodies with multiple instruments to generate new melodies. \
        We utilized PyTorch as our framework and built both RNN and GAN models. \
        Throughout the project, we overcame numerous challenges, such as memory issues and theoretical obstacles related to music preprocessing. \
        Our results, tested via Google Forms, were impressive — participants couldn't distinguish between human-written and model-generated melodies. \
        Samples are available on my GitHub.",
      technologies: "Python, PyTorch, NumPy, Pandas, Matplotlib, DL algorithms",
      date: "Nov, 2021",
      url: {
        name: "github.com/Exital/GeneratingMelodies",
        link: "https://github.com/Exital/GeneratingMelodies/tree/master/",
      },
      thumbImage: "images/projects/generating_melodies_1.jpg",
      sliderImages: [
        "images/projects/generating_melodies_2.jpg",
        "images/projects/generating_melodies_3.jpg",
      ],
      categories: [filters.AI, filters.WEB],
    },
    {
      title: "Django Web App to automate Airbnb bookings business",
      projectInfo:
        "I have built a django web app with multiple users for automating a business of Airbnb and Booking reservations. \
        The app syncs reservations from different API's and calenders, automates work plans, revenue reports, employee's salaries \
        and sending notifications to users via email for different events. \
        The app is served from my on-prem k8s server in my living room and has SSL certificates.",
      technologies: "Python, Django, REST APIs, Jenkins",
      date: "May, 2021",
      thumbImage: "images/projects/tals_place_1.jpg",
      sliderImages: [

      ],
      categories: [filters.WEB],
    },
    {
      title: "Breast cancer AI diagnostic",
      projectInfo:
        "I have built a KNN forest based on some researches that I have read online in order to diagnose breast cancer. \
        The training set was obtained from the internet (30 medical features) and the model reached 97% of success after training. \
        The forest is constructed of multiple decision trees and then the full model applies the concepts of KNN to the single trees.",
      technologies: "Python, AI algorithms",
      date: "Jan, 2021",
      url: {
        name: "Breast cancer KNN project",
        link: "https://github.com/Exital/IntroToAi/tree/master/Projects/tal's%20project",
      },
      thumbImage: "images/projects/knn_1.jpg",
      sliderImages: [
      ],
      categories: [filters.AI],
    },
    {
      title: "Building a compiler for FanC",
      projectInfo:
        "I have built a compiler that takes a program in FanC (subset of c) and compiles it to LLVM. \
        The compiler uses Flex for the lexical analysis and bison for the syntax analysis, everything else is written in c++ \
        and implements the code generation step.",
      technologies: "C++, Flex, Bison, Compilation methods",
      date: "Fab, 2021",
      url: {
        name: "FanC Compiler Github Repo",
        link: "https://github.com/Exital/compilation/tree/master/hw5",
      },
      thumbImage: "images/projects/compiler_1.jpg",
      sliderImages: [

      ],
      categories: [filters.OTHER],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
