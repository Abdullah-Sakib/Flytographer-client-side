import React from "react";
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div>
      <h2 className="text-3xl text-start ml-8 mb-7 mt-16 font-semibold">Photography services from Flytographer</h2>
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
            <h2 className="card-title">Life hack</h2>
            <p className="text-start">How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning text-white">Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p className="text-start">How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning text-white">Details</button>
            </div>
          </div>
        </div>
      </div>
      <Link to='/services'><button className="btn btn-warning my-10 text-white">SEE ALL <FaArrowRight className="ml-2"></FaArrowRight> </button></Link>
    </div>
  );
};

export default HomeServices;
