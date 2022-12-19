import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../CustomHooks/useTitle";

const Login = () => {
  const { logIn, googleSignUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
        const user = {
          email: result.user.email,
        };
        fetch("https://flytographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        navigate(from, { replace: true });
        const user = {
          email: result.user.email,
        };
        fetch("https://flytographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
          });
      })
      .catch((error) => console.error(error));
  };
  useTitle("Login");
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && (
        <button className="btn btn-warning btn-circle loading text-white "></button>
      )}
      <div className="hero">
        <div className="hero-content w-full flex-col " >
          <div className="card my-5 lg:my-10 flex-shrink-0 w-full lg:w-2/4 md:shadow-2xl bg-base-200 md:bg-base-100">
            <form className="card-body text-lg px-5 md:px-8" onSubmit={handleLogIn}>
              <h1 className="text-3xl font-bold">Login </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-lg"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt text-base link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning text-white text-base">
                  Login
                </button>
              </div>
              <p className="text-xl font-semibold my-2">Or</p>
              <div className="form-control">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-warning text-white flex text-base"
                >
                  <FcGoogle className="text-3xl mr-2"></FcGoogle>{" "}
                  <span className="flex-grow">Continue with Google</span>
                </button>
              </div>
              <Link to="/register" className="font-semibold mt-4 text-lg">
                Don't have an account?{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
