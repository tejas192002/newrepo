import axios from "axios";
import * as jwtDecode from 'jwt-decode';

const _http = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

// Add a request interceptor to include the JWT token in the headers
_http.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            // If no token is found in local storage and the user is not on the login page, navigate to the login page
            if (window.location.pathname !== "/Login") {
                window.location.href = "/Login";
            }
            return Promise.reject("No token in local storage");
        }

        // Decode the JWT token to check its expiration
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem("jwtToken");
            // Token has expired, navigate to the login page
            window.location.href = "/Login";
            return Promise.reject(
                "Your session has expired. Please log in again to continue."
            );
        }

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default _http;
