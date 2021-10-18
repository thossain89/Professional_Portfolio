import React from 'react';

import ProfilePic from '../../assets/img/tanvir.jpg'

export default function About () {
    return(
        <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <img src={ProfilePic} class="img-fluid rounded b-shadow-a" alt=""></img>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p><span class="title-s">Name: </span> <span>Tanvir Hossain</span></p>
                          <p><span class="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                          <p><span class="title-s">Email: </span> <span>hossaintanvir@live.co.uk</span></p>
                          <p><span class="title-s">Phone: </span> <span>(+61) 404643188</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="skill-mf">
                      <p class="title-s">Skill</p>
                      <span>HTML</span> <span class="pull-right">90%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>CSS3</span> <span class="pull-right">80%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JAVASCRIPT</span> <span class="pull-right">70%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>BOOTSTRAP, MATERIALIZE & BULMA</span> <span class="pull-right">70%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JQUERY</span> <span class="pull-right">65%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>                    
                      <span>NODE.JS</span> <span class="pull-right">80%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>EXPRESS.JS </span> <span class="pull-right">80%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>MySQL (Sequelize, Bcrypt)</span> <span class="pull-right">70%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>Socket IO</span> <span class="pull-right">60%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>GIT</span> <span class="pull-right">75%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      
                    
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          About Me
                        </h5>
                      </div>
                      <p class="lead">
                       I am a solutions-driven Full Stack Developer applying Engineering background and strong technical skillset towards building functional websites and web applications.
                       I am undertaking an intensive Full Stack Development course from the University of Sydney (USYD), where I am developing skills in HTML 5, JavaScript, CSS, Bootstrap, 
                       jQuery, Express.js, Node.js, MySql, Socket.io and responsive web design. 
                      </p>
                      <p class="lead">
                        I have graduated in Electrical & Electronics Engineering with majors in communication systems from University of Plymouth, UK and 
                        for last last 5 years I have been in the retail industry which gave me the opportunity to learn about work ethics, attention to detail,
                        communication skills, interpersonal skills, customer service skills including excellent leadership skills. I have always excelled at multitasking and used 
                        to work part-time while undertaking my degree. My strengths include problem solving, project management, and agile adaptation to last minute 
                        support changes, which makes me an integral member of any team. 
                      </p>
                      <p class="lead">
                        As an eager learner and natural “helper”, I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help
                        your team to continue to develop innovative, and exciting work.
                      </p>
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