import React, { useEffect, useState } from 'react';
import useAuth from '../../components/Hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])


    useEffect(() => {
        const url = `https://boiling-wildwood-61910.herokuapp.com/booking?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container">
            <h2>My Booking: {orders.length}</h2>
            <div className="row">
                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;