import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <section id="portal" className="section gray-bg">
          <div className="container">
            <div className="row justify-content-center text-center m-60px-b md-m-25px-b">
              <div className="col-md-8 col-lg-6">
                <div className="section-title">
                  <p>Please choose which portal you would like to visit:</p>
                </div>
              </div>
            </div>

            <div className="row feature-box-row">
              <div className="col-md-4">
                <div className="feature-box-01" style={{ cursor: 'pointer' }}>
                  <Link to="/clinic/login">
                    <div className="icon main-bg">
                      <i className="fas fa-user-md"></i>
                    </div>
                    <div className="feature-content">
                      <h5>CLINIC PORTAL</h5>
                      <p>For doctors and staff</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-box-01" style={{ cursor: 'pointer' }}>
                  <Link to="/patient/login">
                    <div className="icon main-bg">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="feature-content">
                      <h5>PATIENT PORTAL</h5>
                      <p>For patients</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-box-01" style={{ cursor: 'pointer' }}>
                  <Link to="/providers/login">
                    <div className="icon main-bg">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="feature-content">
                      <h5>PROVIDER PORTAL</h5>
                      <p>For dispensaries</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p style={{ textAlign: 'center' }}>
          Copyright © 2023 Relief Financial and Healthcare, LLC.
          All rights reserved. <a href="/privacy">Privacy Policy</a>
        </p>
      </main>
    </>
  );
}