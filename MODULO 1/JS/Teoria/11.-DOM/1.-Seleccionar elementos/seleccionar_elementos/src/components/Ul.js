const template = () => `
<ul class="lista">
        <li>Numero 1</li>
        <li>Numero 2</li>
        <li>Numero 3</li>
    
</ul>
`;

export const PrintUl = () => {
  document.querySelector("#app").innerHTML += template();
  const ul = document.querySelector("ul");
  ul.id = "listID";
};

/**
 * INNERHTML ---> nos sirve para inyectar un componente que es un template string
 */

//document.getElementById("app").innerHTML += template()
