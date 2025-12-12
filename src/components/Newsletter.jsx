import { LuSend } from "react-icons/lu";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Newsletter = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down" className="container-fluid">
      <div className="row bgcolor p-5 mb-5">
        <div className="col-sm-8 mx-auto p-4 text-center text-light">
          <h4>--Newsletter---</h4>
          <h1>Stay Always In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            eligendi quos voluptas. Nesciunt dolor amet non asperiores
            voluptatem laudantium reiciendis.
          </p>
          <div
            class="input-group rounded-5 "
            style={{
              height: "47px",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              class="form-control fs-5"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Enter your Email"
            />
            <span class="input-group-text">
              <LuSend className="fs-3 textColor" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
