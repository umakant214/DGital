import { FaSearch } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoLogoAndroid } from "react-icons/io";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-sm-10 mx-auto">
          <h5 className="text-color text-center">-- OUR SERVICES --</h5>
          <h1 className="text-center mb-5">What Solutions We Provide</h1>
          <div className="row mt-4">
            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <FaSearch
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">
                    SEO Optimization
                  </h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <FaLaptopCode
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">Web Design</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <FaFacebookF
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">
                    Social Media Marketing
                  </h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <MdOutlineMarkEmailRead
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">
                    Email Marketing
                  </h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <BiSolidLike
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">
                    PPC Advertising
                  </h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card shadow-lg bg-light border-0 p-3 py-5">
                <IoLogoAndroid
                  className="text-light bgcolor d-flex justify-content-center align-items-center mx-auto"
                  style={{
                    fontSize: "50px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">
                    App Development
                  </h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
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

export default Service;
