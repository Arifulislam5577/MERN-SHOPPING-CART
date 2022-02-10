import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  userLogOutAction,
  userUpdateActions,
} from "../../Redux/Actions/userActions";

import Loader from "../Loader/Loader";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loading, error } = useSelector((state) => state.userLogin);
  const { sucess, loading: isLoading } = useSelector(
    (state) => state.userUpdate
  );
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userLogOutAction());
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage("Passwords don't match");
    } else {
      dispatch(userUpdateActions(userInfo._id, username, email, password));
      setMessage("");

      setTimeout(() => {
        if (sucess) {
          navigate("/login");
        }
      }, 2000);
    }
  };

  return (
    <section className="profile py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3">
            <h1 className=" bg-primary p-3  text-light mb-4 text-uppercase">
              Your Info
            </h1>
            <form className=" row g-3" onSubmit={handleSubmit}>
              {loading && <Loader />}
              {isLoading && <Loader />}
              {error && (
                <h2 className="p-3 bg-danger text-center text-light">
                  {error}
                </h2>
              )}
              {message && (
                <h2 className="p-3 bg-danger text-center text-light">
                  {message}
                </h2>
              )}
              {sucess && (
                <h2 className="p-3 bg-primary text-center text-light">
                  Update Success
                </h2>
              )}
              <div className="col-md-12">
                <label htmlFor="inputEmail1" className="form-label fs-5">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0 fs-4"
                  id="inputEmail1"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label fs-5">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="form-control p-3 rounded-0 fs-4"
                  id="inputEmail4"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label fs-5">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="form-control p-3 rounded-0 fs-4"
                  id="inputPassword4"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPassword" className="form-label fs-5">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  className="form-control p-3 rounded-0 fs-4"
                  id="inputPassword"
                  required
                  value={cpassword}
                  onChange={(e) => setcPassword(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary p-3 rounded-0 fs-5 px-5 w-50"
                >
                  Update
                </button>
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger p-3 rounded-0 fs-5 px-5 w-50"
                >
                  Log Out
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <h1>Order Info</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
