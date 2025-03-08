import axios from 'axios';

const API_URL = 'https://quickdelbackend.onrender.com/api/admin'; // Update this if needed

export const registerAdmin = async (adminData) => {
    return await axios.post(`${API_URL}/register`, adminData);
};

export const loginAdmin = async (adminData) => {
    return await axios.post(`${API_URL}/login`, adminData);
};