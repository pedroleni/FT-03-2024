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

      const objectUser = {
        name: value,
      };

      const userString = JSON.stringify(objectUser);
      localStorage.setItem("userLogin", userString);
      input.value = "";
    }
  );
  const buttonLogout = document.getElementById("btn_logout");
};

const init = () => {
  PrintComponents();
};

init();
