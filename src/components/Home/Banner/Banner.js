import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../../images/mbanner.jpg'

const Banner = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="text-start col-lg-6 col-sm-12 mt-5">

                        <h2 className="fs-1 fw-bold text-info  ">BIKE LOVER<br /> FOR EVERY BIKES</h2>
                        <p className=" mt-4">GPX is a Thai motorcycle manufacturing brand. They are specialized in manufacturing lifestyle bikes that caters new generation biker’s aspiration. By using only parts from Thailand, with excellent quality  .</p>
                        <Button className="bg-primary p-2 rounded-4 mt-4 fs-5 fw-bold">Bike Details</Button>

                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-75" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;