import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Continuous Integration and Continuous Deployment",
      desc: "Implementing CI/CD pipelines automates build, test, and deployment processes for rapid and reliable software updates. Using Jenkins, Azure DevOps, TeamCity or GitHub Actions, I ensure streamlined workflows and consistent code quality.",
      icon: "fas fa-code-branch",
    },
    {
      name: "Infrastructure as Code (IaC)",
      desc: "Using Terraform and Ansible, I orchestrate and manage infrastructure deployments efficiently. This approach ensures consistency, scalability, and agility across cloud environments, minimizing operational overhead.",
      icon: "fas fa-cogs",
    },
    {
      name: "Containerization and Orchestration",
      desc: "Employing Docker and Kubernetes, I containerize applications for enhanced portability and scalability. Orchestrating with Kubernetes optimizes resource usage, ensures high availability, and simplifies deployment in dynamic cloud environments.",
      icon: "fas fa-database",
    },
    {
      name: "Monitoring and Observability",
      desc: "Implementing Prometheus and Grafana, I monitor system performance, detect anomalies, and gain insights into application health and infrastructure metrics. Emphasizing observability practices, I proactively resolve issues for optimal system reliability.",
      icon: "fas fa-chart-line",
    },
    {
      name: "Microservices Architecture",
      desc: "Designing microservices architectures using Docker containers and Kubernetes orchestration. Breaking down monolithic apps into smaller services enhances scalability and supports continuous software updates.",
      icon: "fas fa-layer-group",
    },
    {
      name: "DevOps Automation and Tooling",
      desc: "Automating DevOps with Jenkins, GitHub Actions, and Ansible streamlines software development, testing, and deployment. I create efficient pipelines that boost collaboration, accelerate time-to-market, and ensure software quality.",
      icon: "fas fa-robot",
    },    
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
