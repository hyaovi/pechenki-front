import React from "react";
import authpageImage from "../images/food.jpg";
import logo from "../images/cookie.png";

export default function AdminAuthPage() {
  return (
    <main>
      <div className="homepage container-fluid">
        <div className="row">
          <div className="col-sm-4 px-0 d-none d-sm-block">
            <img src={authpageImage} alt="" className="auth-image" />
          </div>
          <div className="col-sm-8 d-flex flex-column p-5 ">
            <div className="d-flex mb-3 align-items-center">
              <img
                className="img-fluid mr-2"
                height="30"
                width="30"
                src={logo}
                alt=""
              />
              <h1 className="h3">Печеньки</h1>
            </div>
            <div className="my-auto row">
              <div className="col-md-6">
                <div className="mb-5">
                  <AdminLoginForm />
                </div>

                <p className="">
                  <a href="/" className="btn btn-block btn-link">
                    Login as Room
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
const AdminLoginForm = () => {
  return (
    <>
      <form className="">
        <h3 className="mb-3">Login admin</h3>
        <div className="form-group">
          <label htmlFor="login">user</label>
          <input type="text" className="form-control" id="login" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
      <a href="." className="btn btn-link">
        <small>Forgot password?</small>
      </a>
    </>
  );
};
