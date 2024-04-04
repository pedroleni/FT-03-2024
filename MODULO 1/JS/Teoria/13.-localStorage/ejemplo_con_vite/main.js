import "./style.css";
import Swal from "sweetalert2";

const createInput = () => {
  const input = document.createElement("input");
  input.id = "loginInput";
  const label = document.createElement("label");
  /** si no funciona el innerText utilizar la propiedad textContent */
  label.innerText = "Meta su nombre para hacer el login";
  return {
    input,
    label,
  };
};

const createButtonbuttons = () => `
<div class="containerBtns">
    <button id="btn_login">LOGIN</button>
    <button id="btn_logout">LOGOUT</button>
</div>
    
`;

const PrintComponents = () => {
  // pintamos el label y el input
  const app = document.getElementById("app");
  const { input, label } = createInput();
  app.append(label, input);

  // pintar los contenedores de los botones
  app.innerHTML += createButtonbuttons();

  listeners();
};

const listeners = () => {
  const buttonLogin = document.getElementById("btn_login");

  buttonLogin.addEventListener(
    "click",
    /** callback que maneja el evento */ () => {
      const input = document.querySelector("input");
      const value = input.value;

      if (value.trim() == "") {
        return Swal.fire({
          position: "center",
          icon: "error",
          title: `Por favor ponga un nombre válido`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const objectUser = {
        name: value.trim(),
      };

      const userString = JSON.stringify(objectUser);
      localStorage.setItem("userLogin", userString);
      input.value = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Gracias por logarte ${value} 😍 `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  );
  const buttonLogout = document.getElementById("btn_logout");

  buttonLogout.addEventListener("click", () => {
    const logado = localStorage.getItem("userLogin");
    const input = document.querySelector("input");
    const value = input.value;

    if (logado) {
      localStorage.removeItem("userLogin");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Adios ${value} 🥲 `,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `No hay nadie logado 🥲 `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

const init = () => {
  PrintComponents();
};

init();
