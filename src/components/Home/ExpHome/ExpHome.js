import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ExpHome = (props) => {
    const { img, discription, name, price } = props.product
    const history = useHistory()

    const handlePurchase = () => {
        history.push(`/booking`)
    }
    return (
        <div className=" col-lg-4 col-sm-12 ">

            <div className="p-3 m-2  service-container  rounded-3">
                <img className="w-75" src={img} alt="" />
                <div>
                    <h4>{name}</h4>

                    <p>{discription}</p>
                    <h4>Price:<span className="text-primary">{price}</span> </h4>
                    <Button onClick={handlePurchase} className="btn-banner p-2 fw-bold">Purchase</Button>
                </div>


            </div>


        </div >
    );
};

export default ExpHome;