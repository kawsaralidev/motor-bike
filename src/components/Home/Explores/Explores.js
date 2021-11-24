import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';


const Explores = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://damp-caverns-82012.herokuapp.com/products')
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