import { Navigate } from "react-router-dom";

export function Auth({ children }) {
    let token = localStorage.getItem("token");
    if(!token) {
        return <Navigate to={"/login"} replace={true}> </Navigate>
    }
    return children;
}