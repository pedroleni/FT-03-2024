import Swal from 'sweetalert2'
export const useLoginError = (res, setRes, login, setLoginOk) => {
  
  //! -----------------200

  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      _id: res.data.user._id,
    };

    const stringUser = JSON.stringify(dataCustom);
    login(stringUser);
    setLoginOk(() => true);

    Swal.fire({
      icon: "success",
      title: "Welcome to my Page",
      text: "Login ok ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ----------------- 404: 'User no register'

  if (res?.response?.data?.includes("User no register")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Unregistered user ❎",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //!------------------ 404: 'password dont match'

  if (res?.response?.data?.includes("password dont match")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password dont match ❎",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ----------------- 500
  if (res?.response?.status == 500) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
