import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';


const Explores = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <h2 className="fs-1 my-5">Our <span className="text-info ">Products</span></h2>
            <div className="row ">

                {
                    products.map(product => <Explore key={product._id} product={product} ></Explore>)
                }
            </div>
        </div>
    );
};

export default Explores;