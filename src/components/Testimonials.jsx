import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Naomi Shachar",
      position: "Team Lead",
      src: "images/testimonial/naomi_shachar.jpg",
      desc: "Tal worked for me as a student intern for 2 years. \
      He is autodidact and has extraordinary ability to explore solutions. \
      Tal is able to face a complex problem and solve it from end to end while bringing up other important aspects of the problem.",
      rating: 5,
    },
    {
      name: "Oren Paz",
      position: "Senior Software Engineer and Active Scrum Master",
      src: "images/testimonial/oren_paz.jpg",
      desc: "We’ve worked together on several projects and Tal is one of the best people to have as a partner. \
      He is a quick learner and have the ability to implement new technologies for the benefit of the entire team. \
      I highly recommend Tal as a programmer and would love to work together again.",
      rating: 5,
    },
    {
      name: "Dov Tuchman",
      position: "Senior Software Engineer",
      src: "images/testimonial/dov_tuchman.jpg",
      desc: "I have met Tal when he was an intern student on my team and I was assigned as his tutor. \
      I quickly noticed that Tal has extraordinary abilities including the ability to understand tasks and \
      solve problems in addition to being a fun friend to meet every morning.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
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
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            How Team Members Describe Me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
