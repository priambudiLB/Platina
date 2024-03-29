/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import valid from '../utils/valid';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';

import styles from '../css/relog.module.css';

const Register = function () {
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [userData, setUserData] = useState(initialState);
  const {
    username, email, password, confirmPassword,
  } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(username, email, password, confirmPassword);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('auth/sign-up', userData);
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/login');
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Link href="/">
        <button type="button" className={`btn ${styles.back}`}>
          <i className="bi bi-box-arrow-left" />
        </button>
      </Link>

      <form className={`mx-auto ${styles.formReg}`} onSubmit={handleSubmit}>
        {/* USERNAME */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        <p className="my-2">
          Already have an account?
          <Link href="/login">
            <a style={{ color: 'crimson' }}> Login now</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
