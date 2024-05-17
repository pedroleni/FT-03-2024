import { createContext, useContext, useMemo, useState } from "react";

//! 1 ) crear el contexto y guardarlo en una variable
const AuthContext = createContext();

//! 2) la funcion  que nos provee del contexto

// funcion  puente

export const AuthContextProvider = ({ children }) => {
  // 1) El estado del user autenticado

  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  });

  const [allUser, setAllUser] = useState({
    data: {
      confirmationCode: "",
      user: {
        password: "",
        email: "",
      },
    },
  });

  const [deleteUser, setDeleteUser] = useState(false);

  //! -----------------------------------------------------------------------
  //? -------- PUENTE PARA CUANDO TENGAMOS PROBLEMAS DE ASYNCRONIA ----------
  //! -----------------------------------------------------------------------

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");

        break;

      default:
        break;
    }
  };

  // 2) Funciones que utlizamos en el contexto

  const login = (data) => {
    // esta data viene en string
    localStorage.setItem("user", data);
    const parseUser = JSON.parse(data);
    setUser(parseUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // 3) Memorizar los valores que vamos a proveer

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      allUser,
      setAllUser,
      bridgeData,
      deleteUser,
      setDeleteUser,
    }),
    [user, allUser, deleteUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//! 3) CUSTOM HOOK PARA UTLIZAR EL CONTEXTO DE FORMA MAS SENCILLA

export const useAuth = () => useContext(AuthContext);
