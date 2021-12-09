import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import valid from "../utils/valid";
import { patchData } from "../utils/fetchData";
import { imageUpload } from "../utils/imageUpload";

import styles from "../css/profile.module.css";

const Profile = () => {
  const initialState = {
    avatar: "",
    username: "",
    password: "",
    confirm_password: "",
  };
  const [data, setData] = useState(initialState);
  const { avatar, username, password, confirm_password } = data;

  const { state, dispatch } = useContext(DataContext);
  const { auth, notify, orders } = state;

  useEffect(() => {
    if (auth.user) setData({ ...data, username: auth.user.username });
  }, [auth.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password) {
      const errMsg = valid(
        username,
        auth.user.email,
        password,
        confirm_password
      );
      if (errMsg)
        return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
      updatePassword();
    }

    if (username !== auth.user.username || avatar) updateInfo();
  };

  const updatePassword = () => {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    patchData("user/resetPassword", { password }, auth.token).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });
      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    });
  };

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "File tidak ditemukan." },
      });
    if (file.size > 1024 * 1024 * 5)
      //1mb
      return dispatch({
        type: "NOTIFY",
        payload: { error: "File terlalu besar. Max 1mb." },
      });
    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Format file salah." },
      });

    console.log(file);
    setData({ ...data, avatar: file });
  };

  const updateInfo = async () => {
    let media;
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    if (avatar) media = await imageUpload([avatar]);

    patchData(
      "user",
      {
        username,
        avatar: avatar ? media[0].url : auth.user.avatar,
      },
      auth.token
    ).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      dispatch({
        type: "AUTH",
        payload: {
          token: auth.token,
          user: res.user,
        },
      });
      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    });
  };

  if (!auth.user) return null;

  return (
    <>
      <div className={`container mt-3 ${styles.profilePage}`}>
        <Head>
          <title>Profile</title>
        </Head>

        <h3 className="text-center mt-2">Profile</h3>

        <section className={`mt-3 ${styles.profile}`}>
          {/* <section className="row mt-4 mb-3"> */}
          <div
            // className="col-md-4"
            className={styles.userProfile}
          >
            <h5 className="text-center">
              {auth.user.role === "user" ? "" : "Admin Profile"}
            </h5>

            {/* AVATAR */}
            <div className={`text-center ${styles.avatar}`}>
              <img
                src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                alt="avatar"
              ></img>
              <span>
                <i className="bi bi-camera-fill"></i>
                <p>Change</p>
                <input
                  type="file"
                  name="file"
                  id={styles.fileUp}
                  accept="image/*"
                  onChange={changeAvatar}
                ></input>
              </span>
            </div>

            {/* TAMPILKAN DATA NAMA TANPA FORM */}
            <div
              className="text-center my-3"
              // style={{ border: "2px solid black", padding: "10px" }}
            >
              <h5>{auth.user.username}</h5>
              <h5>{auth.user.email}</h5>
            </div>
          </div>

          {/* <div className="col-md-1" style={{ margin: "0 -20px" }}></div> */}

          <div
            // className="col-md-7"
            className={styles.editProfile}
          >
            <h5>Edit Profile</h5>

            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Your name"
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                defaultValue={auth.user.email}
                className="form-control"
                disabled={true}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Your new password"
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="confirm_password">Confirm New Password</label>
              <input
                type="password"
                name="confirm_password"
                value={confirm_password}
                className="form-control"
                placeholder="Confirm new password"
                onChange={handleChange}
              ></input>
            </div>

            <button
              className="btn btn-info"
              disabled={notify.loading}
              style={{ width: "100px" }}
              onClick={handleUpdateProfile}
            >
              Save
            </button>
          </div>
        </section>

        {/* <section className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <h5 className="tex-uppercase">Orders</h5>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Profile;
