import toast from "react-hot-toast";

const usernameRegExp = /^[a-zA-Z0-9_]{4,8}$/;
const phoneRegExp = /^[0-9]{10}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function registerValidate(values) {
    const errors = {};
    if(!usernameRegExp.test(values.username)) {
        errors.username = toast.error("Please enter a valid username");
    } else if(!phoneRegExp.test(values.phone)) {
        errors.phone = toast.error("Please enter a valid phone number");
    } else if(!passwordRegExp.test(values.password)) {
        errors.password = toast.error("Please enter a valid password");
    } else if(values.password != values.cpassword) {
        errors.password = toast.error("Password does not match!")
    }
    return errors;
}

export function loginValidate(values) {
    const errors = {};
    if(!values.username) {
        errors.username = toast.error("Username cannot be empty!")
    } else if(!values.password) {
        errors.password = toast.error("Password cannot be empty!")
    }
    return errors;
}