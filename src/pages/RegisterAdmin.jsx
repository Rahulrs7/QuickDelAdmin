// admin/src/pages/RegisterAdmin.jsx
import { useState } from 'react';
import { registerAdmin } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const RegisterAdmin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerAdmin({ name, email, password });
            alert('Registration successful!');
            navigate('/admin/login');
        } catch (error) {
            alert('Error registering admin');
        }
    };

    return (
        <div>
            <h1>Register as Admin</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterAdmin;