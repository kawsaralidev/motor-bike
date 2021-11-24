import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import useAuth from '../Hooks/useAuth';


const Booking = () => {

    const { user } = useAuth()
    const initialBooking = { userName: user.displayName, email: user.email, phone: '' }
    const [booking, setBooking] = useState(initialBooking)

    const handleOnBlour = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBooking = { ...booking }
        newBooking[field] = value
        console.log(newBooking)
        setBooking(newBooking)

    }
    const handleBookingSubmit = (e) => {
        // collect data 
        const bookings = {
            ...booking,
        }

        // send to the server 
        fetch('https://damp-caverns-82012.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setBooking('')
                }
            })

    }
    const submitbtn = (e) => {
        alert('booking successfully')
        e.preventDefault();
    }

    return (
        <div className="container  mt-5">
            <div className="row">
                <div className="col-lg-6 ">
                    <img className="w-100" src="https://image.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <form onSubmit={handleBookingSubmit}>

                        <label htmlFor="exampleInputPassword1"  ></label>
                        <input onBlur={handleOnBlour} className="w-75 mb-3" type="name" name="name" id="" defaultValue={user.displayName} required />

                        <label htmlFor="exampleInputEmail1" ></label>
                        <input onBlur={handleOnBlour} className="w-75  mb-3" type="email" name="email" id="" defaultValue={user.email} required />

                        <br />
                        <label htmlFor="exampleInputPassword1"  ></label>
                        <input onBlur={handleOnBlour} className="w-75 mb-3" type="number" name="phone" id="" placeholder="phone number" required />


                        <br />
                        <Button onClick={submitbtn} type="submit" className="w-50 btn-banner mb-3">Submit</Button> <br />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;