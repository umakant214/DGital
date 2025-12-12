import { MdOutlineMailLock } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down" className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-10 mx-auto mt-5">
          <div className="row">
            <div className="col-sm-4">
              <div className="card bg-light border-0 p-3">
                <MdOutlineMailLock className="text-center fs-1 mx-auto textColor" />
                <div className="card-body">
                  <h5 className="card-title text-center">Digital Marketing</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card bg-light border-0 p-3">
                <FaSearch className="text-center fs-1 mx-auto textColor" />
                <div className="card-body">
                  <h5 className="card-title text-center">SEO & Backlinks</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card bg-light border-0 p-3">
                <FaLaptopCode className="text-center fs-1 mx-auto textColor" />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {" "}
                    Design & Development
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

export default Card;
