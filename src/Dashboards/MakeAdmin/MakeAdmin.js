import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdmin = (e) => {
        const user = { email }
        fetch('https://damp-caverns-82012.herokuapp.com/booking/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    alert('admin make successfull')
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAdmin}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button style={{ backgroundColor: 'blue', color: 'white' }} type="submit" variant="contained">Make Admin</Button>
            </form>

            {/* <form onSubmit={handleAdmin}>
                <input className="w-50  mb-3" type="email"
                    onBlur={handleOnBlur} name="email" id="" placeholder="email" required />
                <Button className="btn-banner" type="submit" color="inherit">MakeAdmin</Button>
            </form> */}
        </div>
    );
};

export default MakeAdmin;