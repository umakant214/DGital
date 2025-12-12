import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "./Card";
import About from "./About";
import Details from "./Details";
import Service from "./Service";
import Newsletter from "./Newsletter";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Team from "./Team";
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down" className="container-fluid  ">
      <div className="row bgcolor pb-5  pt-5">
        <div className="col-sm-6  p-5">
          <div className="row  p-4">
            <div className="col-sm-11  mx-auto">
              <h1 className="text-light ">
                A Digital Agency Of Inteligents & Creative People
              </h1>
              <p className=" text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae fuga odio iste, tenetur sed nisi tempore ex, iure
                ipsum, veniam aliquid? Deserunt sequi iusto enim optio, officiis
                eum eius in.
              </p>
              <button className="btn btn-warning px-4 py-2 rounded-5">
                Read More
              </button>
              <button className="btn mx-2 btn-light px-4 py-2 rounded-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6  ">
          <div className="row p-5">
            <div className="col-sm-11 pt-4 mx-auto">
              <img
                src="/hero.png"
                className="img-fluid"
                style={{ minHeight: "350px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* component */}
      <Card />

      <About />

      <Details />

      <Service />

      <Newsletter />

      <Project />

      <Testimonial />

      <Team />
    </div>
  );
};

export default Home;
