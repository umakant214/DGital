import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  return (
    <div data-aos="fade-down" className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-10 mx-auto">
          <div className="row mt-4">
            <div className="col-sm-6 p-4">
              <h5 className="text-color">ABOUT US ---</h5>
              <h1 className="mb-5 fw-bold">
                #1 Digital solution with 10 years of experience
              </h1>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae magnam perferendis praesentium optio! Dolorum neque,
                et eius repellat recusandae, amet maiores quos iusto facere
                consequuntur sunt tenetur quod ratione adipisci!
              </p>
              {/* Progess bar */}
              <>
                <p className="">Digital Marketing</p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bgcolor"
                    style={{ width: "60%" }}
                  />
                </div>
                <p className="">SEO & Backlinks</p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                  />
                </div>
                <p className="">Design & Development</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "90%" }}
                  />
                </div>
              </>

              {/* Progess bar */}

              <button className="btn bgcolor text-light p-2 px-4 rounded-5 mt-4">
                Read More
              </button>
            </div>
            <div className="col-sm-6 p-4">
              <img src="/about.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
