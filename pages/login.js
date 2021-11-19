import Head from "next/head";
import Link from "next/link";

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>

      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your email"
          />
          <div id="emailHelp" className="form-text">
            Well never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="my-2">
          You dont have an account?
          <Link href="/sign-up">
            <a style={{ color: "crimson" }}> Register Now</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
