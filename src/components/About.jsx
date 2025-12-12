import React, { useEffect } from "react";
import AOS from "aos";
import ProgressBar from "@ramonak/react-progress-bar";
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
              {/* Progress */}
              <p>Digital Marketing</p>
              <ProgressBar
                completed={80}
                labelColor="#e80909"
                animateOnRender
                dir="auto"
              />
              <p className="mt-2">SEO & Backlinks</p>
              <ProgressBar
                completed={95}
                labelColor="#e80909"
                animateOnRender
                dir="auto"
              />
              <p className="mt-2">Design & Development</p>
              <ProgressBar
                completed={50}
                bgColor="#2324c5"
                labelColor="#ffaa00"
                animateOnRender
                dir="auto"
              />
              <p className="mt-2">App Development</p>
              <ProgressBar
                completed={70}
                bgColor="#27dbe6"
                labelColor="#ffaa00"
                animateOnRender
                dir="auto"
              />
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
