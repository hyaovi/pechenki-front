import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Loading from '../Loading';
import { setUser, selectLoading } from '../../globalSlice';

import { ADMIN_LOGIN, STORE } from '../../constants/routes';
import { roomUserData } from '../../constants/mockData';
import { setSession } from '../../utils';

export default function RoomLoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const [roomKey, setRoomKey] = useState({
    isValid: false,
    key: '',
    feedBack: 'please enter a correct key',
  });

  const onChangeHandle = ({ target: { value } }) => {
    const isValid = roomKey.key.length === 2;
    setRoomKey((PREVSTATE) => ({ ...PREVSTATE, key: value, isValid }));
  };

  const setUserData = (data) => {
    setSession('user', data);
    dispatch(setUser(data));
    history.push(STORE);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    console.log('submitting');
    if (!roomKey.isValid) {
      console.log('invalid');
      return;
    }

    setUserData(roomUserData);
  };
  // TODOS: FORM VALIDATION, SUBMIT FORM, AND GET USER DATA
  return (
    <>
      {loading && <Loading />}
      <form className="" onSubmit={submitHandle}>
        <h3 className="mb-3">Login</h3>
        <div className="form-group">
          <label htmlFor="login">Room Key</label>
          <input
            type="text"
            className="form-control"
            id="login"
            placeholder="111"
            value={roomKey.key}
            onChange={onChangeHandle}
          />
        </div>

        <button type="submit" className="btn btn-block btn-primary">
          Enter
        </button>
      </form>
      <a href="." className="btn btn-link">
        <small>Forgot your key?</small>
      </a>
      <Link to={ADMIN_LOGIN} className="btn btn-block btn-link">
        Login as admin
      </Link>
    </>
  );
}
