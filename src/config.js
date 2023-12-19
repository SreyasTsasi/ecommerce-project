import axios from "axios";

export default function config() {
    axios.defaults.baseURL = location.origin;
    if(import.meta.env.MODE == "development") {
        axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;
    }
}