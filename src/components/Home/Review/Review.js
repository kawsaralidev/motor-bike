import React from 'react';

const Review = (props) => {
    const { img, name, position, discription, rating } = props.review
    return (
        <div className=" col-lg-4 col-sm-12 ">

            <div className="p-3 m-2  service-container border rounded-3">
                <div className="d-flex">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75 rounded" src={img} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h4 >{name}</h4>
                        <h5>{position}</h5>
                    </div>
                </div>
                <div className="mt-3">


                    <p className="text-start">{discription}</p>
                    <small>Rating: {rating} </small>

                </div>


            </div>


        </div >
    );
};

export default Review;