import React from "react";
import emailjs from '@emailjs/browser';
import "./contact.css"

const ContactComponent = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_p8rh2rs',e.target, 'OSjdcJw06ssXXu6Rj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }


  return (
    <div className="contact-main-container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"></link>
      <div style={{background: "rgba(0, 0, 0, .85)"}}>
        <div className="con-container" >
          <form action="" onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-10 form-group mx-auto ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <textarea className="form-control" placeholder="Your Message" name="message" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="col-10 pt-3 mx-auto">
              <input
                  type="submit"
                  className="btn btn-info"
                  value="Sent Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
