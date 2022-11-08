import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../CustomHooks/useTitle";

const Login = () => {
  const {logIn, googleSignUp} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(result => {
      form.reset();
      navigate(from, {replace: true});
    })
    .catch(error => console.error(error))
  }
  const handleGoogleSignIn = () => {
    googleSignUp()
    .then(result => {
      navigate(from, {replace: true});
    })
    .catch(error => console.error(error))
  }
  useTitle('Login')
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
         
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body w-96" onSubmit={handleLogIn}>
          <h1 className="text-3xl font-bold">Login </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning text-white">Login</button>
            </div>
            <p className="text-lg font-semibold my-2">Or</p>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn btn-warning text-white flex"><FcGoogle className="text-3xl mr-2"></FcGoogle> <span className="flex-grow">Continue with Google</span></button>
            </div>
            <Link to='/register' className="font-semibold">Don't have an account? </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
