// src/components/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { name, email, address, mobile, password };

        try {
            const response = await fetch('http://localhost:3000/haware', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                alert('Data submitted successfully!');
                console.log('Response:', jsonResponse);
                window.location.href = '/';
            } else {
                alert('Failed to submit data');
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting data');
        }
    };

    return (
        <div className="box" id="register">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="register-email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="Enter your address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-mobile" className="form-label">Mobile</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="register-mobile" 
                        placeholder="Enter your mobile number" 
                        value={mobile} 
                        onChange={(e) => setMobile(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="register-password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="bb">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
