// import { BsQuote } from "react-icons/bs";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const Testimonial = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);
//   return (
//     <div className="container-fluid">
//       <div className="row mt-5 mb-5">
//         <div className="col-sm-10 mx-auto">
//           <h5 className="text-color text-center ">-- TESTIMONIAL-- </h5>
//           <h1 className="text-center mb-5">What Say Our Clients!</h1>

//           <div className="row mb-5">
//             <div data-aos="fade-right" className="col-sm-6">
//               <div className="card p-4 bg-light border-0 shadow-lg">
//                 <div className="card-body">
//                   <h6 className="card-subtitle mb-2 fs-5">
//                     <BsQuote
//                       className="textColor"
//                       style={{
//                         fontSize: "90px",
//                         position: "relative",
//                         top: "-20px",
//                       }}
//                     />
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Blanditiis quia mollitia excepturi eligendi .
//                   </h6>
//                   <div className="card-text">
//                     <div className="row">
//                       <div className="col-4">
//                         <img
//                           src="/t1.jpg"
//                           className="rounded-circle"
//                           alt="..."
//                         />
//                       </div>
//                       <div className="col-5 pt-2">
//                         <h5>Client Name</h5>
//                         <p>Umakant Yadav</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div data-aos="fade-left" className="col-sm-6">
//               <div className="card p-4 bg-light border-0 shadow-lg">
//                 <div className="card-body">
//                   <h6 className="card-subtitle mb-2 fs-5">
//                     <BsQuote
//                       className="textColor"
//                       style={{
//                         fontSize: "90px",
//                         position: "relative",
//                         top: "-20px",
//                       }}
//                     />
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Blanditiis quia mollitia excepturi eligendi .
//                   </h6>
//                   <p className="card-text">
//                     <div className="row">
//                       <div className="col-4">
//                         <img
//                           src="/t2.jpg"
//                           className="rounded-circle"
//                           alt="..."
//                         />
//                       </div>
//                       <div className="col-5 pt-2">
//                         <h5>Client Name</h5>
//                         <p>Abhinav Yadav</p>
//                       </div>
//                     </div>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import { BsQuote } from "react-icons/bs";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-12 col-lg-10 mx-auto">
          <h5 className="text-color text-center">-- TESTIMONIAL --</h5>
          <h1 className="text-center mb-5">What Say Our Clients!</h1>

          <div className="row g-4">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <div className="card p-4 bg-light border-0 shadow-lg h-100">
                <h6 className="fs-5">
                  <BsQuote className="textColor" style={{ fontSize: "80px" }} />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing.
                </h6>

                <div className="row align-items-center mt-4">
                  <div className="col-4">
                    <img
                      src="/t1.jpg"
                      className="img-fluid rounded-circle"
                      alt="client"
                    />
                  </div>
                  <div className="col-8">
                    <h5>Client Name</h5>
                    <p>Umakant Yadav</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6" data-aos="fade-left">
              <div className="card p-4 bg-light border-0 shadow-lg h-100">
                <h6 className="fs-5">
                  <BsQuote className="textColor" style={{ fontSize: "80px" }} />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur.
                </h6>

                <div className="row align-items-center mt-4">
                  <div className="col-4">
                    <img
                      src="/t2.jpg"
                      className="img-fluid rounded-circle"
                      alt="client"
                    />
                  </div>
                  <div className="col-8">
                    <h5>Client Name</h5>
                    <p>Abhinav Yadav</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
