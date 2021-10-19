import React, { useState } from "react";
import Hero from "../../assets/img/hero-bg.jpg";

// Here we import a helper function that will check if the email and field is valid
import { validateEmail, validateField } from "../utils/helpers";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormBlur = (e) => {
    if (
      !validateField(name) ||
      !validateField(email) ||
      !validateField(message)
    ) {
      setErrorMessage("Please fill up all the fields");
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
    } else {
      setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !validateField(name) ||
      !validateField(email) ||
      !validateField(message)
    ) {
      setErrorMessage("Please fill up all the fields");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    setErrorMessage("Hi, this form is under construction.");

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section
      id="contact"
      ClassName="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div ClassName="overlay-mf"></div>
      <div ClassName="container">
        <div ClassName="row">
          <div ClassName="col-sm-12">
            <div ClassName="contact-mf">
              <div id="contact" ClassName="box-shadow-full">
                <div ClassName="row">
                  <div ClassName="col-md-6">
                    <div ClassName="title-box-2">
                      <h5 ClassName="title-left">Send Message</h5>
                    </div>
                    <div>                      
                        <div ClassName="row">
                          <div ClassName="col-md-12 mb-3">
                            <div ClassName="form-group">
                              <input
                                value={name}
                                ClassNameName="form-control"
                                id="name"
                                name="name"
                                onChange={handleInputChange}
                                onBlur={handleFormBlur}
                                type="text"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div ClassName="col-md-12 mb-3">
                            <div ClassName="form-group">
                              <input
                                value={email}
                                ClassNameName="form-control"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleFormBlur}
                                type="email"
                                placeholder="email"
                              />
                            </div>
                          </div>

                          <div ClassName="col-md-12">
                            <div ClassName="form-group">
                              <textarea
                                value={message}
                                ClassNameName="form-control"
                                id="message"
                                name="message"
                                onChange={handleInputChange}
                                onBlur={handleFormBlur}
                                type="message"
                                placeholder="message"
                              />
                            </div>
                          </div>
                          <div>
                            {errorMessage.length > 0 ? (
                              <p ClassNameName="alert alert-danger">
                                {errorMessage}
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div ClassName="col-md-12 text-center">
                            <button type="button" onClick={handleFormSubmit}>
                              Send Message
                            </button>
                          </div>
                        </div>                    
                    </div>
                  </div>
                  <div ClassName="col-md-6">
                    <div ClassName="title-box-2 pt-4 pt-md-0">
                      <h5 ClassName="title-left">Get in Touch</h5>
                    </div>
                    <div ClassName="more-info">
                      <p ClassName="lead">
                        With each project, I aim to understand how to best
                        engage users for an impactful user experience. I’m
                        excited to leverage my skills in the future as part of a
                        fast-paced, quality-driven team. Reach out to me to chat
                        about our next project.
                      </p>
                      <ul ClassName="list-ico">
                        <li>
                          <span ClassName="bi bi-geo-alt"></span> 33-37 Parliament
                          Road, Macquarie Fields, NSW, 2564
                        </li>
                        <li>
                          <span ClassName="bi bi-phone"></span> (+61) 404643188
                        </li>
                        <li>
                          <span ClassName="bi bi-envelope"></span>
                          hossaintanvir@live.co.uk
                        </li>
                        <li>
                          <span ClassName="bi bi-envelope"></span>
                          tanvirhossain2006@gmail.com
                        </li>
                        <li>
                          <a
                            href="https://github.com/thossain89"
                            
                          >
                            <span ClassName="bi bi-github"></span>My GitHub Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://au.linkedin.com/in/thossain89?trk=profile-badge"
                            
                          >
                            <span ClassName="bi bi-linkedin"></span>My LinkedIn
                            Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div ClassName="socials">
                      <ul>
                        <li>
                          <a href="mailto:hossatanvir@live.co.uk? subject= subject text ">
                            <span ClassName="ico-circle">
                              <i ClassName="bi bi-envelope"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/thossain89"
                            
                          >
                            <span ClassName="ico-circle">
                              <i ClassName="bi bi-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://au.linkedin.com/in/thossain89?trk=profile-badge"
                            
                          >
                            <span ClassName="ico-circle">
                              <i ClassName="bi bi-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


