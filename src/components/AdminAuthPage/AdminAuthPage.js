import React from "react";
import authpageImage from "../../images/food.jpg";
import logo from "../../images/cookie.png";
import AdminLoginForm from "./AdminLoginForm";

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
