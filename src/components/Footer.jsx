import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row bgcolor py-5 ">
        <div className="col-sm-10 mx-auto">
          <div className="row p-3 text-light ">
            <div className="col-sm-3 mb-4 text-center text-lg-start">
              <h4 className="">ADDRESS --</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <FaLocationDot /> 123 Street, New York, USA
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <FaPhoneAlt /> +012 345 67890
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <MdOutlineEmail /> umakant@gmail.com
                  </Link>
                </li>

                <FaFacebook className="fs-3 me-3 mt-3" />
                <FaTwitter className="fs-3 me-3 mt-3" />
                <FaInstagramSquare className="fs-3 me-3 mt-3" />
                <FaLinkedin className="fs-3 me-3 mt-3" />
              </ul>
            </div>

            <div className="col-sm-3 mb-4 text-center text-lg-start">
              <h4 className="">Quick Link --</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/about" className="text-light text-decoration-none">
                    <IoIosArrowForward /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-light text-decoration-none"
                  >
                    <IoIosArrowForward /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <IoIosArrowForward /> Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <IoIosArrowForward /> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <IoIosArrowForward /> Career
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-3 mb-4 text-center text-lg-start">
              <h4 className="">Gallery --</h4>
              <div className="row">
                <div className="col-4 mb-4">
                  <img src="/p1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-4 mb-4">
                  <img src="/p2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-4 mb-4">
                  <img src="/p3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-4 mb-4">
                  <img src="/p4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-4 mb-4">
                  <img src="/p5.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-4 mb-4">
                  <img src="/p6.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-3  text-center text-lg-start">
              <h4 className="">Newsletter --</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quibusdam quis .
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row bgcolor text-light">
        <div className="col-sm-12 text-center">
          <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
