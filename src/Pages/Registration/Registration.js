import React from 'react';

const Registration = () => {
  const handleRegistration = event => {
    event.preventDefault();
  }
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col ">
       
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body w-96" onSubmit={(handleRegistration)}>
        <h1 className="text-3xl font-bold">Registration</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
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
              name='photoURL'
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
              name='email'
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
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-warning text-white">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Registration;