import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviwes, setReviews] = useState([])

    useEffect(() => {
        fetch('https://damp-caverns-82012.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=" m-5">
            <h2>Our <span className="text-info ">Reviews</span></h2>
            <div className="row ">
                {
                    reviwes.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;