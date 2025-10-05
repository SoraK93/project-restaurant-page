import "../css/styles.css";
import "../template.html";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
content.appendChild(menu);

document.querySelector("nav").addEventListener("click", (e) => {
  e.stopPropagation();

  let button = e.target.innerText;
  console.log("pressed");
  switch (button) {
    case "Home":
      console.log("home");
      content.innerHTML = "";
      content.appendChild(home);
      break;
    case "Menu":
      content.innerHTML = "";
      content.appendChild(menu);
      break;
    case "Contact Us":
      content.innerHTML = "";
    //   content.appendChild(contact);
      break;
  }
});
