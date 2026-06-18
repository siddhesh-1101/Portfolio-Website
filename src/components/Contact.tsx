import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bhorsidd@gmail.com" data-cursor="disable">
                bhorsidd@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917709880820" data-cursor="disable">
                +91 7709880820
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/siddhesh-1101"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-bhor-4464372b3/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-bhor-4464372b3/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Professional <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Siddhesh Bhor</span>
            </h2>
            <p>
              Artificial Intelligence Engineer | Full Stack Developer
            </p>
            <h5>
              <MdCopyright /> 2024 - All rights reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
