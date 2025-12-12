import { FaStar } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import CountUp from "react-countup";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Details = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down" className="container-fluid">
      <div className="row bgcolor mt-5">
        <div className="col-sm-10 text-light mx-auto">
          <div className="row py-5">
            <div className="col-sm-3 p-5">
              <div className="card text-light border-0  bgcolor">
                <FaStar className="mx-auto fw-bold text-color fs-1" />
                <div className="card-body">
                  <h2 className="card-title text-center fw-bold">
                    <CountUp end={1500} duration={5.75}></CountUp>
                  </h2>
                  <p className="card-text text-center fw-bold ">
                    User Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 p-5">
              <div className="card text-light border-0  bgcolor">
                <FaUsersCog className="mx-auto text-color fs-1" />
                <div className="card-body">
                  <h2 className="card-title text-center fw-bold">
                    <CountUp end={1500} duration={5.75}></CountUp>
                  </h2>
                  <p className="card-text text-center fw-bold ">Team Member</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 p-5">
              <div className="card text-light border-0  bgcolor">
                <FaUsers className="mx-auto text-color fs-1" />
                <div className="card-body">
                  <h2 className="card-title text-center fw-bold">
                    <CountUp end={1200} duration={5.75}></CountUp>
                  </h2>
                  <p className="card-text text-center fw-bold ">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 p-5">
              <div className="card text-light border-0  bgcolor">
                <MdDone className="mx-auto text-color fs-1" />
                <div className="card-body">
                  <h2 className="card-title text-center fw-bold">
                    <CountUp end={1200} duration={5.75}></CountUp>
                  </h2>
                  <p className="card-text text-center fw-bold ">
                    Complete Projects
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

export default Details;
