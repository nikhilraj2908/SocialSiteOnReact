import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Signup successful!");
            setError('');
        } catch (error) {
            setError(error.message);
            setSuccess('');
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className='card mt-4' style={{ width: '450px', height:'450px'}}>
                <div className='card-header'>
                    <h4 className="text-center">Register yourself firstly</h4>
                </div>
                <div className='card-body d-flex flex-column align-items-center' style={{ background: 'none', height: '300px' }}>
                    <form onSubmit={handleSignup} style={{ width: '100%' }}>
                        <h2 className='text-center'>Signup</h2>
                        <div className='w-100'>
                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br></br>
                        <div className='w-100'>
                            <input type="password" placeholder="Enter your password" className="form-control" size="25" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <br></br>
                        <div className='w-100'>
                            <input type="password" placeholder="Confirm password" className="form-control" size="25" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        <div id="registerbutton" className='mt-2 d-flex justify-content-center'>
                            <button type="submit" className='btn btn-success'>Signup</button>
                        </div>
                    </form>
                    <div className='mt-4'><Link to='/'>login</Link> to your account</div>
                </div>
            </div>
        </div>

    );
};

export default Signup;
