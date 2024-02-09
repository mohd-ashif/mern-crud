import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", { name, email, age })
            .then(result => {
                console.log(result.data); // Access data from response
                navigate('/');
            })
            .catch(err => console.error(err)); // Changed to console.error for better logging of errors
    };

    return (
            
            <div className="w-5 bg-white rounded p-3 ml-3">
                <form onSubmit={submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control" id="name" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" id="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control" id="age" required onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>

    );
};

export default CreateUser;
