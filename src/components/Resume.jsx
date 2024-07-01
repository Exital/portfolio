import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2018 - 2022",
      title: "B.S in Computer Science",
      place: "Technion",
      desc: ["I graduated with honors, earning a GPA of 91.1.", "My final project, \"Generating Melodies with Neural Networks,\" secured first place at the Technion Computer Science AI Project Contest."],
    },
    {
      yearRange: "2011 - 2016",
      title: "Israel Defense Forces",
      place: "Ordnance Corps",
      desc: ["As Tutorials Commander of field intelligence, explosives, and optics, I held the rank of Master Sergeant. I was responsible for 60-70 soldiers, utilizing my teaching skills to help them grasp complex concepts."],
    },
    {
      yearRange: "2006 - 2010",
      title: "Physics & Robotics",
      place: "Blich High School",
      desc: ["In high school, over the course of three years, I took electives in physics and robotics. \
       During this time, my team and I designed, built, and programmed a firefighter robot, \
      leading to participation in the \"Roboner\" competition. Working together as a team was a great experience."],
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - Present",
      title: "DevOps Engineer",
      place: "Intel",
      desc: [
        "Developed complex test automation for one of Intel's most critical pre- and post-silicon test generators, starting from Jenkins pipelines to Python OOP microservices, running in a Kubernetes environment.","",
        "Implemented DevOps best practices to foster collaboration between development and operations teams, facilitating faster delivery of high-quality software products.","",
        "Orchestrated Infrastructure as Code (IaC) using Ansible to automate all CI/CD agent installation and maintenance, while monitoring with Grafana and Prometheus.","",
      ]
    },
    {
      yearRange: "2019 - 2021",
      title: "Software Engineer",
      place: "Rafael",
      desc: ["Engineered sophisticated embedded systems within a Linux ecosystem utilizing advanced C++ programming skills.",]
    },
  ];

  const skills = [
    {
      name: "Jenkins",
      percent: 85,
    },
    {
      name: "Kubernetes",
      percent: 85,
    },
    {
      name: "Docker",
      percent: 90,
    },
    {
      name: "Linux, Shell Scripting",
      percent: 85,
    },
    {
      name: "Ansible",
      percent: 85,
    },
    {
      name: "Python, C++",
      percent: 95,
    },
    {
      name: "Monitoring (Grafana, Prometheus, ELK)",
      percent: 85,
    },
    {
      name: "GitOps (ArgoCD)",
      percent: 90,
    },
    {
      name: "Micro Services Architecture",
      percent: 80,
    },
    {
      name: "Networking",
      percent: 80,
    },
    {
      name: "IoT",
      percent: 90,
    },
    {
      name: "Django",
      percent: 85,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  {/* Separate lines in value.desc */}
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {/* Add <br /> tag if not the last line */}
                        {index !== value.desc.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
          </div>
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  {/* Separate lines in value.desc */}
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {/* Add <br /> tag if not the last line */}
                        {index !== value.desc.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
