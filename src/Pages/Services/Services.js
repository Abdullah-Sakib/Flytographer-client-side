import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p className="text-start">Capture the best moments from your graduation with flytographer</p>
            <p className="text-start">$129</p>
            <div className="card-actions justify-end">
              <Link to='/serviceDetails'><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;