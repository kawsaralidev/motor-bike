import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://boiling-wildwood-61910.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    };


    return (
        <div className="add-service">
            <h2 className="text-info m-4">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
                <textarea {...register("discription")} placeholder="discription" /> <br />
                <input type="number" {...register("price")} placeholder="price" /> <br />
                <input {...register("img")} placeholder="image" /> <br />
                <input className="bg-info text-white fw-bold w-25" type="submit" />

            </form>


        </div>
    );
};

export default AddProduct;