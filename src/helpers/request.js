import axios from "axios";

export function getProfile(token) {
    if(token) {
        return axios.get("/api/profile",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

export function register(data) {
    return axios.post("/api/register", data);
}

export function login(data) {
    return axios.post("/api/login", data);
}

