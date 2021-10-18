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
      class="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">Send Message</h5>
                    </div>
                    <div>                      
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                value={name}
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={handleInputChange}
                                onBlur={handleFormBlur}
                                type="text"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                value={email}
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleFormBlur}
                                type="email"
                                placeholder="email"
                              />
                            </div>
                          </div>

                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea
                                value={message}
                                className="form-control"
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
                              <p className="alert alert-danger">
                                {errorMessage}
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div class="col-md-12 text-center">
                            <button type="button" onClick={handleFormSubmit}>
                              Send Message
                            </button>
                          </div>
                        </div>                    
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">Get in Touch</h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        With each project, I aim to understand how to best
                        engage users for an impactful user experience. I’m
                        excited to leverage my skills in the future as part of a
                        fast-paced, quality-driven team. Reach out to me to chat
                        about our next project.
                      </p>
                      <ul class="list-ico">
                        <li>
                          <span class="bi bi-geo-alt"></span> 33-37 Parliament
                          Road, Macquarie Fields, NSW, 2564
                        </li>
                        <li>
                          <span class="bi bi-phone"></span> (+61) 404643188
                        </li>
                        <li>
                          <span class="bi bi-envelope"></span>
                          hossaintanvir@live.co.uk
                        </li>
                        <li>
                          <span class="bi bi-envelope"></span>
                          tanvirhossain2006@gmail.com
                        </li>
                        <li>
                          <a
                            href="https://github.com/thossain89"
                            
                          >
                            <span class="bi bi-github"></span>My GitHub Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://au.linkedin.com/in/thossain89?trk=profile-badge"
                            
                          >
                            <span class="bi bi-linkedin"></span>My LinkedIn
                            Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li>
                          <a href="mailto:hossatanvir@live.co.uk? subject= subject text ">
                            <span class="ico-circle">
                              <i class="bi bi-envelope"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/thossain89"
                            
                          >
                            <span class="ico-circle">
                              <i class="bi bi-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://au.linkedin.com/in/thossain89?trk=profile-badge"
                            
                          >
                            <span class="ico-circle">
                              <i class="bi bi-linkedin"></i>
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


