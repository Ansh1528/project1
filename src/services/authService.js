const API_URL = 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
    }
    return data;
};

export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await handleResponse(response);
        
        // Store user data in localStorage if login successful
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        
        return data;
    } catch (error) {
        throw error;
    }
};

export const signup = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await handleResponse(response);

        // Store user data in localStorage if signup successful
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};