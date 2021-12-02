import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";

import styles from "../css/navbar.module.css";

function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logout!" } });
  };

  const loggedRouter = () => {
    return (
      <>
        <li className="nav-item dropdown" style={{ marginTop: "8px" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={auth.user.avatar}
              alt={auth.user.avatar}
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                transform: "translateY(-3px)",
                marginRight: "5px",
              }}
            />
            <span className={styles.username}>{auth.user.username}</span>
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              style={{ textTransform: "capitalize" }}
            >
              Profile
            </a>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
      </>
    );
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container">
        <Link href="/">
          <a className={styles.navbarBrand}>Mendoan Indonesia</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {/* MENU */}
            <li className={styles.navLink}>
              <Link href="/menu">
                <a className={"nav-link" + isActive("/menu")}>MENU</a>
              </Link>
            </li>

            {/* LOGIN */}
            {Object.keys(auth).length === 0 ? (
              <li className={styles.navLink}>
                <Link href="/login">
                  <a className={"nav-link" + isActive("/login")}>
                    <i className="bi bi-person-fill" aria-hidden="true"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}

            {/* CART */}
            <li className={styles.cart}>
              <Link href="/cart">
                <a className={"nav-link" + isActive("/cart")}>
                  <i className="bi bi-bag-check" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
