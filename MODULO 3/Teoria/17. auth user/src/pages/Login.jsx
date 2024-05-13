import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { loginUserService } from "../services/user.service"
import { useLoginError } from "../hooks/useLoginError";
//import { useLoginError } from "../hooks"

export const Login = () => {
    //! estados 
    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [loginOk, setLoginOk] = useState(false);
    const { login, setUser } = useAuth();

    //! 1) funcion que gestiona los datos del formulario
    const formSubmit = async (formData) => {
        // llamada al backend
        setSend(true);
        setRes(await loginUserService(formData));
        setSend(false);
    };

    //! 2) hooks que gestiona los errores
    useEffect(() => {
        useLoginError(res, setRes, login, setLoginOk)
    }, [res])

    //! 3) estados de navegacion
    if (loginOk) {
        if (res.data.user.check == false) {
            return <Navigate to="/verifyCode"/>
        } else {
            return <Navigate to="/dashboard"/>
        }
    }

    return (
        <>
            <div className="form-wrap">
            <h1>Sign In</h1>
            <p>We are happy to see you again 💌</p>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="email_container form-group">
                <input
                    className="input_user"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="false"
                    {...register("email", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                    email
                </label>
    
                <div className="password_container form-group">
                    <input
                    className="input_user"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="false"
                    {...register("password", { required: true })}
                    />
                    <label htmlFor="custom-input" className="custom-placeholder">
                    password
                    </label>
                </div>
                </div>
    
                <div className="btn_container">
                <button
                    className="btn"
                    type="submit"
                    disabled={send}
                    style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                >
                    LOGIN
                </button>
                </div>
                <p className="bottom-text">
                <small>
                    Have you forgotten the password?
                    <Link to="/forgotpassword" className="anchorCustom">
                    Change password
                    </Link>
                </small>
                </p>
            </form>
            </div>
            <div className="footerForm">
            <p className="parrafoLogin">
                Are you not registered? <Link to="/register">Register Here</Link>
            </p>
            </div>
        </>
    )
}
