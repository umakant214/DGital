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
import Typewriter from "typewriter-effect";
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down" className="container-fluid  ">
      <div className="row bgcolor pb-5  pt-4">
        <div className="col-sm-6  p-5">
          <div className="row  p-4">
            <div className="col-sm-11  mx-auto">
              <h1 className="text-light ">
                <Typewriter
                  options={{
                    strings: [
                      " A Digital Agency Of Inteligents & Creative People",
                    ],
                    autoStart: true,
                    delay: 50,
                    loop: true,
                  }}
                />
              </h1>
              <p className=" text-light">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit justo amet ipsum vero ipsum clita lorem
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
