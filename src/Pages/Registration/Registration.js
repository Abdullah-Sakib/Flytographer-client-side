import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../CustomHooks/useTitle";

const Registration = () => {
  const { createUser, updateUserProfile, googleSignUp } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        form.reset();
        updateUserProfile(name, photoURL)
          .then(() => {
            navigate("/");
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
          .catch((err) => console.error(err));
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  useTitle("Registration");
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && (
        <button className="btn btn-warning btn-circle loading text-white "></button>
      )}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-96" onSubmit={handleRegistration}>
              <h1 className="text-3xl font-bold">Registration</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning text-white">
                  Register
                </button>
              </div>
              <p className="text-lg font-semibold my-2">Or</p>
              <div className="form-control">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-warning text-white flex"
                >
                  <FcGoogle className="text-3xl mr-2"></FcGoogle>{" "}
                  <span className="flex-grow">Continue with Google</span>
                </button>
              </div>
              <Link to="/login" className="font-semibold">
                Already have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
