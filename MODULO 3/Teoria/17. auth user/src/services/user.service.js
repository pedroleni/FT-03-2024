import { updateToken } from "../utils";
import { APIUser } from "./service.config";


//* ------------------------------- REGISTER -----------------------------------
export const registerUser = async (formData) => {
  return APIUser.post("/users/registerLargo", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//* -------------------------------- LOGIN -------------------------------------

export const loginUserService = async (formData) => {
  return APIUser.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//* ------------------------------- CHECK CODE ---------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return APIUser.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//*  ------------------------------- RESEND CODE -------------------------------

export const resendCodeConfirmationUser = async (formData) => {
  return APIUser.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//* -------------------------------- AUTOLOGIN ----------------------------------

export const autologinUser = async (formData) => {
  return APIUser.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ CAMBIO CONTRASEÑA SIN TOKEN-------------

export const forgotPasswordUser = async (formData) => {
  return APIUser.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------BORRADO DEL USUARIO----------------------

export const deleteUserService = async () => {
  return APIUser.delete("/users/", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------- CAMBIO CONTRASEÑA CUANDO ESTAS LOGUEADO ----
export const changePasswordUserToken = async (formData) => {
  return APIUser.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------ UPDATE USER -----------------------

export const updateUser = async (formData) => {
  return APIUser.patch("/users/update/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};