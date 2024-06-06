import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/app');
        } catch (error) {
            setError(error.message);
        }
    };

    
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ Height: '500px' }}>
            <div className='card mt-4' style={{ width: '450px' }}>
                <div className='card-header'>
                    <h4 className="text-center">Enter details for signin</h4>
                </div>
                <div className='card-body d-flex flex-column align-items-center' style={{ background: 'none', height: '230px' }}>
                    <form onSubmit={handleLogin} style={{ width: "100%" }}>
                        <h2 className="text-center">Login</h2>
                        
                        <div className='w-100 mb-3'>
                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='w-100'>
                            <input type="password" placeholder="Enter your password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {error && <p className="text-center mt-2" style={{ color: 'red' }}>{error}</p>}
                        <div className="d-flex justify-content-center mt-3" >
                            <button type="submit" className="w-25 btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='body-footer'>
                <div className='text-center my-2'><p>newuser ? create new account </p>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
