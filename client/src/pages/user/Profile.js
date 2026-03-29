import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Profile = () => {
  //context
  const [auth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (auth?.user) {
      const { email, name, phone, address } = auth?.user;
      setName(name);
      setEmail(email);
      setPhone(phone);
      setAddress(address);
    }
  }, [auth?.user]);

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <h2 className="title">USER PROFILE</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="d-flex align-items-center mb-3 form-items">
                  <label className="fw-bold">NAME:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <label className="fw-bold">EMAIL:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    disabled
                  />
                </div>

                <div className="d-flex align-items-center mb-3">
                  <label className="fw-bold">MOBILE:</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Contact num"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <label className="fw-bold">ADDRESS:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="address"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    UPDATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
