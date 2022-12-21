import React from "react";
import { Link } from "react-router-dom";

const MyReviewCart = ({ reviews, handleReviewDelete }) => {
  const { review, userImage, userName, _id, reviewDate, serviceName } = reviews;

  return (
    <div className="grid grid-cols-12 my-5 border shadow-lg w-11/12 md:w-4/5 mx-auto rounded-lg py-4 px-4 md:p-8">
      <div className="col-span-12 md:col-span-3 ">
        <div className="avatar">
          <div className="w-20 md:w-28 rounded-full">
            <img src={userImage} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 text-start mb-5">
        <h3 className="text-xl font-bold mb-2">{userName}</h3>
        <p className="text-lg font-semibold mb-2">{reviewDate}</p>
        <p className="text-lg font-semibold mb-2">Service: {serviceName}</p>
        <p className="text-lg font-semibold text-gray-600">{review}</p>
      </div>

      <div className="col-span-12 lg:col-span-3 text-start flex items-center justify-evenly">
        <button
          onClick={() => handleReviewDelete(_id)}
          className="btn btn-error text-white "
        >
          Delete
        </button>
        <Link to={`/updateReview/${_id}`}>
          <button className="btn btn-warning text-white">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default MyReviewCart;
