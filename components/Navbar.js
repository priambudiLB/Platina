import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../css/navbar.module.css";

function Navbar() {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid container">
            <Link href="/">
              <a className={styles.navbarBrand}>Mendoan.id</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link href="/login">
                  <div className={styles.navLink}>
                    <a
                      className={"nav-link" + isActive("/login")}
                      aria-current="page"
                    >
                      <i className="far fa-user" aria-hidden="true"></i> Login
                    </a>
                  </div>
                </Link>
                <Link href="/sign-up">
                  <div className={styles.navLink}>
                    <a
                      className={"nav-link" + isActive("/sign-up")}
                      aria-current="page"
                    >
                      <i className="far fa-user" aria-hidden="true"></i> Sign Up
                    </a>
                  </div>
                </Link>
                <Link href="/cart">
                  <div className={styles.cart}>
                    <i className="bi bi-bag-check" aria-hidden="true"></i>
                    <a
                      className={"nav-link" + isActive("/cart")}
                      aria-current="page"
                    ></a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
