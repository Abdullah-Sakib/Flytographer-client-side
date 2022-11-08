import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../CustomHooks/useTitle";
import ReviewCart from "./ReviewCart";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);
  const service = useLoaderData();
  const { image, price, description, name, _id } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/allReviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [_id]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const userName = user.displayName;
    const userImage = user.photoURL;
    const userEmail = user.email;
    const serviceId = _id;
    const date = Date();
    const split = date.split(' ');
    const dateArray = [split[2], split[1], split[3], split[4]];
    const reviewDate = dateArray.join(' ');
    const addReview = {
      review,
      userName,
      userImage,
      userEmail,
      serviceId,
      reviewDate
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        swal("Congratulations", "Review added successfully!", "success");
        const addNewReview = [ addReview, ...allReviews,];
        setAllReviews(addNewReview);
      });
  };

  useTitle('Service Details')

  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Flytographer
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {name}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Price: <span className="text-warning">${price}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={image}
            alt=""
          />
        </div>
      </div>

      {/* reviews section  */}

      <div>
        <h2 className="text-3xl font-bold my-16">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 ">
            <h2 className="text-2xl font-semibold ">All Reviews</h2>
            {allReviews.length > 0 || <h2 className="text-lg font-semibold mt-14">No reviews found.</h2>}
            {allReviews.map((review) => (
              <ReviewCart key={review._id} reviews={review}></ReviewCart>
            ))}
          </div>
          <div className="md:col-span-4 ">
            {user?.uid ? (
              <form onSubmit={handleAddReview} className="w-10/12 mx-auto ">
                <h2 className="text-2xl font-semibold text-start mb-5">
                  Add Review
                </h2>
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="write your review here"
                  name="review"
                ></textarea>
                <button
                  type="submit"
                  className="block btn btn-warning text-white "
                >
                  Add Review
                </button>
              </form>
            ) : (
              <div>
                <h2 className="text-3xl font-bold mb-5">
                  Please login to add a review.
                </h2>
                <Link to="/login">
                  <button className="btn btn-warning text-white">Log in</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
