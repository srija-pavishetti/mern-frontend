import { axiosi } from '../../config/axios';

const handleRequest = async (method, url, data = null) => {
    try {
        const res = await axiosi[method](url, data);
        return res.data;
    } catch (error) {
        if (error.response) {
            // If response is available, throw its data
            throw error.response.data;
        } else {
            // Otherwise, throw a generic error
            throw new Error('An error occurred while processing the request');
        }
    }
};

export const signup = (cred) => handleRequest('post', 'auth/signup', cred);
export const login = (cred) => handleRequest('post', 'auth/login', cred);
export const verifyOtp = (cred) => handleRequest('post', 'auth/verify-otp', cred);
export const resendOtp = (cred) => handleRequest('post', 'auth/resend-otp', cred);
export const forgotPassword = (cred) => handleRequest('post', 'auth/forgot-password', cred);
export const resetPassword = (cred) => handleRequest('post', 'auth/reset-password', cred);
export const checkAuth = () => handleRequest('get', 'auth/check-auth');
export const logout = () => handleRequest('get', 'auth/logout');
