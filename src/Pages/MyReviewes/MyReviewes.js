import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewCart from './MyReviewCart';

const MyReviewes = () => {
  const {user} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userReviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[user])

  const handleReviewDelete = (id) => {
    const agree = window.confirm('Are you sure your want to delete this review?');
    if(!agree){
      return
    }
    fetch(`http://localhost:5000/deleteReview?id=${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        const remaining = reviews.filter(review => review._id !== id);
        setReviews(remaining);
        swal("Congratulations", "Review deleted successfully!", "success");
      }
    })
  }

  return (
    <div>
      {reviews.length > 0 && <h2 className='text-3xl font-semibold my-7'>My Reviews</h2>}
      {reviews.length === 0 && 
        <div className='h-[78vh] flex justify-center items-center'>
          <h1 className='text-4xl font-semibold text-warning'>No reviews were added !!</h1>
        </div>
      }
      {
        reviews.map(review => <MyReviewCart key={review._id} reviews={review} handleReviewDelete={handleReviewDelete }></MyReviewCart>)
      }
    </div>
  );
};

export default MyReviewes;