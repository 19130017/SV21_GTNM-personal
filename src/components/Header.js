import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <section id="home-section" className="hero" style ={{marginTop:"86px"}}>
          <div className="home-slider owl-carousel">
            <div className="slider-item">
              <div className="overlay" />
              <div className="container-fluid px-md-0">
                <div
                  className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div
                    className="one-third order-md-last img"
                    style={{ backgroundImage: "url(images/bg.jpg)" }}
                  >
                    <div className="overlay" />
                    <div className="overlay-1" />
                  </div>
                  <div
                    className="one-forth d-flex  align-items-center"
                    data-scrollax=" properties: { translateY: '50%' }"
                  >
                    <div className="text">
                      <span className="subheading">
                        Hello! I am Do Thanh Binh
                      </span>
                      <h1 className="mb-4 mt-3">
                        I'm <span>a </span>  Developer
                      </h1>
                      <p>
                        <a href="/about" className="btn btn-primary">
                          About me
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
