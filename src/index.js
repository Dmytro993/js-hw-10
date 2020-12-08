import css from "./styles.css";
import hbs from "../templates/post.hbs"
import menu from "../src/menu.json"



const ul = document.querySelector(".js-menu")
const myButton = document.querySelector("#theme-switch-toggle")
const body = document.querySelector("body")

ul.insertAdjacentHTML("beforeend", hbs(menu))


myButton.addEventListener("change", e =>{
   if(e.target.checked){
      body.classList.remove("light-theme")
      body.classList.add("dark-theme")
      localStorage.setItem("my-theme", "dark")
   }
   if(!e.target.checked){
      body.classList.remove("dark-theme")
      body.classList.add("light-theme")
      localStorage.setItem("my-theme", "light")
   }
})
 
function localStore(){
    const theme = localStorage.getItem("my-theme")
    if(theme === "dark"){
        body.classList.add("dark-theme")
        myButton.checked = true;
    }
    if(theme === "light"){
        body.classList.add("light-theme")
        myButton.checked = false;
    }
}
localStore()


