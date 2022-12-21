import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCart = ({ service }) => {
  const { image, price, description, _id, name } = service;
  return (
    <div className="card mx-5 sm:mx-auto shadow-lg">
      <figure className="h-60 ">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} className="h-full w-full" alt="car!" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <p className="text-start text-base">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <p className="text-start text-warning font-semibold text-lg"><span className="text-black">Price:</span> ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-warning text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
