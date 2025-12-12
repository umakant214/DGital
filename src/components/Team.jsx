import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-10 mx-auto">
          <h5 className="text-center text-color">--- OUR TEAM ---</h5>
          <h1 className="text-center mb-4">Our Team Members</h1>
          <div className="row mt-5">
            <div data-aos="fade-right" className="col-sm-4 mb-4">
              <div className="card p-3 bg-light border-0 rounded-4">
                <img src="/team-1.jpg" className="rounded-circle" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center ">Umakant Yadav</h5>
                  <p className="card-text text-center">CEO & Founder</p>
                  <hr />
                  <p className="text-center fs-5 textColor ">
                    <FaFacebook className="me-3" />
                    <FaTwitter className="me-3" />
                    <FaInstagramSquare className="me-3" />
                    <FaLinkedin className="me-3" />
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card p-3 bg-light border-0 rounded-4">
                <img src="/team-2.jpg" className="rounded-circle" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center ">Jessica Brown</h5>
                  <p className="card-text text-center">Web Designer</p>
                  <hr />
                  <p className="text-center fs-5 textColor ">
                    <FaFacebook className="me-3" />
                    <FaTwitter className="me-3" />
                    <FaInstagramSquare className="me-3" />
                    <FaLinkedin className="me-3" />
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="col-sm-4 mb-4">
              <div className="card p-3 bg-light border-0 rounded-4">
                <img src="/team-3.jpg" className="rounded-circle" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center ">Tony Johnson</h5>
                  <p className="card-text text-center">SEO Expert</p>
                  <hr />
                  <p className="text-center fs-5 textColor ">
                    <FaFacebook className="me-3" />
                    <FaTwitter className="me-3" />
                    <FaInstagramSquare className="me-3" />
                    <FaLinkedin className="me-3" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
