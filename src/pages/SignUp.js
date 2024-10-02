import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();

  let [message, setMessage] = useState("");
  let [disable, setdisable] = useState(false);

  // ---------------- Form Hanlders and States ---------------
  let [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function HandleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function VerifyPassord(password) {
    if (password.length < 8) {
      setMessage("password should be atleast 8 characters");
      return false;
    }
    setMessage("");
    return true;
  }

  // funtion to submit Form
  function HandleSubmit(e) {
    e.preventDefault();
    if (!VerifyPassord(formData.password)) {
      return;
    }

    setdisable(() => true);

    axios
      .post("https://redexplodingbackend.onrender.com/auth/register", {
        ...formData,
      })
      .then((data) => {
        alert("Account Created Successfully");
        navigate("/login");
      })
      .catch((err) => {
        const errmsg = err.response.data.message || "An Error Occured!";
        setMessage(() => errmsg);
        console.log(err);
      })
      .finally(() => {
        setdisable(() => false);
      });
  }

  return (
    <>
      <div className="Container-login">
        <div className="login-box">
          <h2 className="title-login">Register</h2>

          <form action="post" onSubmit={HandleSubmit}>
            <div className="form-container">
              <label className="label">Name</label>
              <input
                className="input-field"
                type="text"
                name="name"
                onChange={HandleChange}
                placeholder=""
                required
              />
            </div>
            <div className="form-container">
              <label className="label">Username</label>
              <input
                className="input-field"
                type="text"
                name="username"
                onChange={HandleChange}
                placeholder=""
                required
              />
            </div>
            <div className="form-container">
              <label className="label">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                onChange={HandleChange}
                placeholder="user@gmail.com"
                required
              />
            </div>
            <div className="form-container">
              <label className="label">Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                onChange={HandleChange}
                placeholder=""
                required
              />
              <p className="warning-msg">{message}</p>
            </div>
            <div className="form-container">
              <button type="submit" className="submit-btn" disabled={disable}>
                Sign Up
              </button>
            </div>
            <div className="form-container">
              <br />
              <p className="alternate-msg">
                Already have an account?{"  "}
                <Link to="/login" className="links">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
