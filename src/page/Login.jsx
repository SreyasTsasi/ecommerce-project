import React, { memo, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import { loginValidate } from "../helpers/validate";
import { login } from "../helpers/request";
import { GlobalContext } from "../context";
import "./style.css";

function Login() {
    const {setGlobal} = useContext(GlobalContext);
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validate: loginValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            let loginPromise = login(values);
            toast.promise(loginPromise, {
                loading: "Logging in...",
                success: (res) => {
                    setGlobal({
                        username: values.username,
                        type: res.data.type,
                        isLoggrdin: true
                    })
                    localStorage.setItem("token", res.data.token);
                    res.data.type == "seller" ? navigate("/profile") : navigate("/");
                    return res.data.msg;
                },
                error: (error) => error.response.data.msg
            })
        }
    });
    return (
        <div className="form-container">
            <Toaster position="top-center" />
            <h3>Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <input {...formik.getFieldProps("username")} type="text" name="username" id="username" placeholder="username" /><br />
                <input {...formik.getFieldProps("password")} type="password" name="password" id="password" placeholder="password" /><br />
                <input type="submit" value="login" />
                <p>Don't have an account? <Link to={"/register"}>register</Link></p>
            </form>
        </div>
    )
}

export default memo(Login);