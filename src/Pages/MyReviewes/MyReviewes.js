import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../CustomHooks/useTitle";
import MyReviewCart from "./MyReviewCart";

const MyReviewes = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://flytographer-server.vercel.app/userReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return navigate("/login");
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user, logOut, navigate]);

  const handleReviewDelete = (id) => {
    const agree = window.confirm(
      "Are you sure your want to delete this review?"
    );
    if (!agree) {
      return;
    }
    fetch(`https://flytographer-server.vercel.app/deleteReview?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
          swal("Congratulations", "Review deleted successfully!", "success");
        }
      });
  };

  useTitle("MyReviews");

  return (
    <div>
      {reviews?.length > 0 && (
        <h2 className="text-3xl font-semibold my-7">My Reviews</h2>
      )}
      {reviews?.length === 0 && (
        <div className="h-[78vh] flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-warning">
            No reviews were added !!
          </h1>
        </div>
      )}
      {reviews?.map((review) => (
        <MyReviewCart
          key={review._id}
          reviews={review}
          handleReviewDelete={handleReviewDelete}
        ></MyReviewCart>
      ))}
    </div>
  );
};

export default MyReviewes;
