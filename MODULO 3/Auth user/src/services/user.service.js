import { extraConfig } from "./serviceApiUser.config";

/**
 *
 * @param {*} formData  -> es el body con la forma de clave valor que le asignamos en el back
 * @returns -> en el return lo que devuelve es la respuesta en caso de ser un 200 y en caso de ser los 400 o 500 devuelve un error
 */
//! ------------------------------- REGISTER -----------------------------------
export const registerUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------- CHECK CODE ---------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//!  ------------------------------- RESEND CODE -------------------------------

export const resendCodeConfirmationUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- AUTOLOGIN ----------------------------------

export const autologinUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- LOGIN -------------------------------------

export const loginUserService = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ CAMBIO CONTRASEÑA SIN TOKEN-------------

export const forgotPasswordUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------BORRADO DEL USUARIO----------------------

export const deleteUserService = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete("/users/")
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------- CAMBIO CONTRASEÑA CUANDO ESTAS LOGAGO----
export const changePasswordUserToken = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/changepassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------ UPDATE USER -----------------------

export const updateUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/update/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res)
    .catch((error) => error);
};
