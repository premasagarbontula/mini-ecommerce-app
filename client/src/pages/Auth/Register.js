import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (name.length < 3) {
      toast.error("Name is too short");
      return false;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    if (!phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/; // 10 digit number
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number");
      return false;
    }
    if (!address.trim()) {
      toast.error("Address is required");
      return false;
    }
    if (address.length < 5) {
      toast.error("Address is too short");
      return false;
    }
    if (!answer.trim()) {
      toast.error("Security answer is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Register Now - Start Shopping"}>
      <div className="form-container p-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="title">NEW USER REGISTRATION</h1>
            <form onSubmit={handleSubmit} className="reg-form">
              <div className="mb-3 form-items d-flex">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3 form-items d-flex ">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3 form-items d-flex justify-content-center align-items-center">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="mb-3 form-items d-flex justify-content-center align-items-center">
                <label htmlFor="phone">Phone: </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Contact num"
                />
              </div>
              <div className="mb-3 form-items d-flex justify-content-center align-items-center">
                <label htmlFor="address">Address: </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  id="address"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="mb-3 form-items d-flex justify-content-center align-items-center">
                <label htmlFor="answer">Security Question: </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="answer"
                  placeholder="What is your mother's maiden name?"
                />
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
