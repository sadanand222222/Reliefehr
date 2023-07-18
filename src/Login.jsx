import React, { useState } from "react";
import { useParams } from "react-router-dom";
import patientsLogin from "./assets/patientsLogin.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { users } = useParams();
  const [email_phone, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email_phone", email_phone);
      formData.append("password", password);

      const response = await axios.post(
        "https://medical.studiomyraa.com/api/login_action",
        formData
      );

      // Handle successful login response
      console.log("Login successful:", response.data);
      toast.success("Login successful");

      // Reset the form
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      toast.error('login failed')
    }
  };

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="row">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth">
              <div className="row w-100">
                <div className="col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 bg-white">
                      <div className="auth-form-light text-left p-5">
                        <h2>{users} Portal Login</h2>
                        <h4 className="font-weight-light">
                          Please use the form below to access your account!
                        </h4>

                        <div className="pt-5">
                          <form onSubmit={handleLogin}>
                            <div className="form-group">
                              <label htmlFor="username">Username</label>
                              <input
                                type="text"
                                value={email_phone}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                id="username"
                                name="_username"
                                placeholder="Username or Email Address"
                              />
                              <i className="mdi mdi-account"></i>
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                id="password"
                                name="_password"
                                placeholder="Password"
                              />
                              <i className="mdi mdi-eye"></i>
                            </div>
                            <div className="mt-5">
                              <button
                                type="submit"
                                className="btn btn-block btn-success btn-lg font-weight-medium"
                              >
                                Login Now
                              </button>
                            </div>
                            <div className="mt-3 text-center">
                              <a
                                href="/patients/reset_password"
                                className="auth-link text-black"
                              >
                                Forgot password?
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 login-half-bg d-flex flex-row"
                      style={{ backgroundImage: `url(${patientsLogin})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
