import React from "react";
import web from "../src/images/about.svg";
import Common from "./Common";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section id="header" className=" about d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pr-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    Welcome to About page{" "}
                    <strong className="brand-name">Modimanju</strong>
                  </h1>
                  <h2 className="my-3">I'm a FullStack Developer!</h2>
                  <p className="my-3 about-para">
                    <strong>I</strong> enjoy taking Complex problems and turing
                    them into simple & beautiful interface designs. I also love
                    the logic and structure of coding and always strive to write
                    <strong>
                      <em> elegant</em>
                    </strong>{" "}
                    and
                    <strong>
                      <em> efficient</em>
                    </strong>{" "}
                    code,whether it be
                    <strong> React</strong>, <strong> Scss</strong> or
                    <strong> Nodejs</strong> <br />
                    <br />
                    When I'm not coding or creating pixels, you'll find me in
                    gym or on the battle ground in virtual reality!
                  </p>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started">
                      Contact Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default About;
