import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setUser } from "../../globalSlice";
import { adminUserData } from "../../constants/mockData";
import { STORE, HOMEPAGE } from "../../constants/routes";
import { setSession } from "../../utils";

export default function AdminLoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginKey, setLoginKey] = useState({
    isValid: false,
    key: "",
    feedBack: "please enter a correct key",
  });
  const [password, setPassword] = useState({
    isValid: false,
    password: "",
    feedBack: "please a correct password",
  });

  const onChangeHandle = ({ target: { value } }) => {
    const isValid = loginKey.key.length > 2;
    setLoginKey((PREVSTATE) => ({ ...PREVSTATE, key: value, isValid }));
  };
  const onChangePasswordHandle = ({ target: { value } }) => {
    const isValid = password.password.length > 2;
    setPassword((PREVSTATE) => ({ ...PREVSTATE, password: value, isValid }));
  };
  const setUserData = (data) => {
    setSession("user", data);
    dispatch(setUser(data));
    history.push(STORE);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (!loginKey.isValid && !password.isValid) {
      return;
    }
    setUserData(adminUserData);
  };
  return (
    <>
      <form className="" onSubmit={submitHandle}>
        <h3 className="mb-3">Login admin</h3>
        <div className="form-group">
          <label htmlFor="login">user</label>
          <input
            type="text"
            className="form-control"
            id="login"
            value={loginKey.key}
            onChange={onChangeHandle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password.password}
            onChange={onChangePasswordHandle}
          />
        </div>

        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
      <Link to={HOMEPAGE} className="btn btn-link">
        <small>Forgot password?</small>
      </Link>
    </>
  );
}
