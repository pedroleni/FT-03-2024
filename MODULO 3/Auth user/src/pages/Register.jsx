import "./Register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Uploadfile } from "../components";
import { useEffect, useState } from "react";
import { registerUser } from "../services/user.service";
import { useRegisterError } from "../hooks";
import { useAuth } from "../context/authContext";
export const Register = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setOkRegister] = useState(false);

  //todo -------- no olvidar el deleteUser del contexto --> ya lo explicaremos
  const { allUser, setAllUser, bridgeData, setDeleteUser } = useAuth();

  //! ------------------------------------------------------------------------------
  //? 1) funcion que se encarga del formulario - de la data del formulario
  //! ------------------------------------------------------------------------------

  const formSubmit = async (formData) => {
    console.log("formData", formData);
    const inputFile = document.getElementById("file-upload").files;
    if (inputFile.length != 0) {
      const customBody = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(customBody));
      setSend(false);
    } else {
      setSend(true);
      setRes(await registerUser(formData));
      setSend(false);
    }
  };

  //! ------------------------------------------------------------------------------
  //? 2) useEffect que gestionamos la respuesta y sus errores
  //! ------------------------------------------------------------------------------

  useEffect(() => {
    useRegisterError(res, setOkRegister, setRes);
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);

  useEffect(() => {
    console.log("😍", allUser);
  }, [allUser]);

  useEffect(() => {
    setDeleteUser(() => false);
  }, []);

  //! ------------------------------------------------------------------------------
  //? 3) Estados de navegacion ----> lo veremos en siguiente proyectos
  //! ------------------------------------------------------------------------------
  if (okRegister) {
    return <Navigate to="/verifyCode" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
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

            <div className="sexo">
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="hombre" className="label-radio hombre">
                Hombre
              </label>
              <input
                type="radio"
                name="sexo"
                id="mujer"
                value="mujer"
                {...register("gender")}
              />
              <label htmlFor="mujer" className="label-radio mujer">
                Mujer
              </label>
            </div>
            <Uploadfile />
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              Register
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <Link className="anchorCustom">Terms & Conditions</Link> and{" "}
              <Link className="anchorCustom">Privacy Policy</Link>.
            </small>
          </p>
        </form>
      </div>
      <div className="footerForm">
        <p className="parrafoLogin">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </>
  );
};
