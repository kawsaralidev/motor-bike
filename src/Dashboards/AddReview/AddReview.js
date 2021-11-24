import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://damp-caverns-82012.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    };
    return (
        <div className="add-service">
            <h2 className="text-info m-4">Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="your position" /> <br />
                <textarea {...register("discription")} placeholder="discription" /> <br />

                <input {...register("img")} placeholder="image" /> <br />
                <input className="bg-info text-white fw-bold w-25" type="submit" />

            </form>
        </div>
    );
};

export default AddReview;