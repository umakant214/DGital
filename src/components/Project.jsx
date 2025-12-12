import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-sm-10 mx-auto">
          <div className="row mt-5 ">
            <h5 className="text-color text-center">--OUR PROJECTS --</h5>
            <h1 className="text-center">Recently Completed Projects</h1>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid justify-content-center">
                {" "}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">
                      All
                    </a>
                    <a className="nav-link" href="#">
                      Web Design
                    </a>
                    <a className="nav-link" href="#">
                      Graphics Design
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            {/* Navbar */}
            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className="col-sm-4 mb-4">
              <div className="card bg-light border-0">
                <img src="/p6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title textColor">UI / UX Design</h6>
                  <p className="card-text fs-5 fw-bold">
                    Digital Agency Website Design And Development
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

export default Project;
