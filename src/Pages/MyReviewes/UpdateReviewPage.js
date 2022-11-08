import React from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateReviewPage = () => {
  const review = useLoaderData();

  const handleUpdate = event =>{
    event.preventDefault();
    const updatedReview = event.target.review.value;

    fetch(`https://flytographer-server.vercel.app/updateReview/${review._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({updatedReview})
    })
    .then(res => res.json())
    .then(data => {
      if(data.matchedCount > 0){
        swal("Congratulations", "Review updated successfully!", "success");
      }
    })

  }

  return (
    <div>
      <form onSubmit={handleUpdate} className="w-10/12 mx-auto mt-14 h-[80vh]">
        <h2 className="text-2xl font-semibold text-start mb-5">Update Review</h2>
        <textarea
          className="textarea textarea-bordered w-full h-40"
          placeholder="write your review here"
          defaultValue={review.review}
          name="review"
        ></textarea>
        <button type="submit" className="block btn btn-warning text-white ">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateReviewPage;
