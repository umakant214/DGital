const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-3 mt-5" id="contact">
        <div className="col-sm-8 mx-auto text-center">
          <h2 className="first-color fw-bold">Get In Touch</h2>
          <hr className="w-50 mx-auto line mb-3" />
          <p>
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out to me.
          </p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10 mx-auto">
          <div className="row  p-4">
            <div className="col-sm-7 mx-auto shadow-lg rounded-4 p-4">
              <h3 className="mb-3">Send me a message</h3>
              <form className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    Message
                  </label>
                  <br />
                  <textarea
                    placeholder="Message"
                    style={{ resize: "none", height: 120 }}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="col-sm-12">
                  <button
                    className="btn  bgcolor text-light"
                    style={{ height: 50 }}
                  >
                    <i className="fa-solid fa-paper-plane" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
