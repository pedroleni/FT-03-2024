import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import {
  checkCodeConfirmationUser,
  resendCodeConfirmationUser,
} from "../services/user.service";

import { Navigate } from "react-router-dom";
import { useAutoLogin, useCheckCodeError, useResendCodeError } from "../hooks";

export const CheckCode = () => {
  const { allUser, login, logout } = useAuth();
  const { register, handleSubmit } = useForm();
  // EL RES Va a ser para el check cdel code
  const [res, setRes] = useState({});
  // resResend va a ser para gestionar el renvio del codigo de confirmacion
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  /**
   * Cuando el user no mete bien el codigo se borra el perfil en el back y tenemos que avisar a la pagina
   * que mande al user al register o al login
   */
  const [okDeleteUser, setOkDeleteUser] = useState(false);

  /**
   * El siguiente estado es porque cuando recargo la pagina se borra el allUser por lo cual no tengo la info para
   * poder checkear el codigo y tengo que hacer navegar el user al login
   */
  const [userNotFound, setUserNotFound] = useState(false);

  // ---------> FUNCIONES QUE GESTIONAN LOS FORMULARIOS

  const formSubmit = (formData) => {
    const fetching = async (body) => {
      setSend(true);
      setRes(await checkCodeConfirmationUser(body));
      setSend(false);
    };
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      /// entramos por el register
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: allUser.data.user.email,
      };
      fetching(custFormData);
    } else {
      // estamos entrando por el login
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      fetching(customFormData);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem("user");

    if (userLocal != null) {
      // viene el USER DEL LOGIN

      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendCodeConfirmationUser(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendCodeConfirmationUser(customFormData));
      setSend(false);
    }
  };

  // ------> controla cuando cambie el estado res
  useEffect(() => {
    console.log("😍", res);
    useCheckCodeError(
      res,
      setRes,
      setOkCheck,
      setOkDeleteUser,
      login,
      setUserNotFound
    );
  }, [res]);

  // ------> controla cuando cambie el estado resResend
  useEffect(() => {
    console.log("resend", resResend);
    useResendCodeError(resResend, setResResend, setUserNotFound);
  }, [resResend]);

  // -----------> ESTADO DE SABER SI ESTAN OK O NO LA FUNCIONALIDAD DE LA PAGINA

  if (okCheck) {
    /// aqwui vamos a hacer  el autologin para cuando viene del register
    // para cuando viene del login lo gestionamos en el usecheckCodeError ---> modificamos el localstorage y el user del contexto
    if (!localStorage.getItem("user")) {
      useAutoLogin(allUser, login);
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  if (okDeleteUser) {
    // si borramos al useer por meter el codigo mal lo mandamos de nuevo a registrase
    logout();

    return <Navigate to="/register" />;
  }

  if (userNotFound) {
    /// lo mando al login porque aparece un 404 de user no found porque me ha recargado la pagina y se ha reseteado allUser
    // por lo cual no tengo acceso al email y no puedo reconocerlo en el back
    console.log("entrooo");
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Verify your code 👌</h1>
        <p>Write the code sent to your email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Registration code
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button>
          </div>
          <div className="btn_container">
            <button
              id="btnResend"
              className="btn"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => handleReSend()}
            >
              Resend Code
            </button>
          </div>

          <p className="bottom-text">
            <small>
              If the code is not correct ❌, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </form>
      </div>
    </>
  );
};
