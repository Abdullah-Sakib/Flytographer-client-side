import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceCart = ({service}) => {
  const {image, price, description, _id, name} = service;
  return (
    <div>
       <div className="card w-96 glass mx-auto">
          <figure className='h-60'>
            <img src={image} className="h-full w-full" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-start">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
            <p className="text-start">${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/serviceDetails/${_id}`}><button className="btn btn-warning text-white">Details</button></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomeServiceCart;