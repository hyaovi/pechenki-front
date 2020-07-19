import React from "react";
import { Redirect } from "react-router-dom";

import { useAuth } from "../hooks";
import RoomLoginForm from "./RoomLoginForm";
import { STORE } from "../../constants/routes";

import authpageImage from "../../images/food.jpg";
import logo from "../../images/cookie.png";

export default function AuthPage() {
  const isauthenticated = useAuth();
  return (
    <>
      {isauthenticated ? (
        <Redirect to={STORE} />
      ) : (
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
                      <RoomLoginForm />
                    </div>

                    <p className=""></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
