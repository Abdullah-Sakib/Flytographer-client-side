import React from "react";

const MyReviewCart = ({ reviews, handleReviewDelete  }) => {
  const { review, userImage, userName, _id } = reviews;
  
  const handleReviewUpdate = () => {

  }
  return (
    <div className="grid grid-cols-12 my-5 border shadow-lg w-11/12 md:w-4/5 mx-auto rounded-lg py-4 md:p-8">
      <div className="col-span-3 ">
        <div className="avatar">
          <div className="w-14 md:w-20 rounded-full">
            <img src={userImage} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-6 text-start">
        <h3 className="text-xl font-bold mb-2">{userName}</h3>
        <p className="text-lg font-semibold text-gray-600">{review}</p>
      </div>

      <div className="col-span-3 text-start flex items-center justify-evenly">
        <button onClick={()=>handleReviewDelete(_id)} className="btn btn-error text-white">Delete</button>
        <button onClick={handleReviewUpdate} className="btn btn-warning text-white">Update</button>
      </div>
    </div>
  );
};

export default MyReviewCart;
