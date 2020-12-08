import "./styles.css";
import hbs from "./templates/post.hbs"
import menu from "./menu.json"



const ul = document.querySelector(".js-menu")
const myButton = document.querySelector("#theme-switch-toggle")
const body = document.querySelector("body")

ul.insertAdjacentHTML("beforeend", hbs(menu))


myButton.addEventListener("change", e =>{
   if(e.target.checked){
      removeClass("light-theme")
      addClass("dark-theme")
      setMyItem("my-theme", "dark")
   }
   if(!e.target.checked){
      removeClass("dark-theme")
      addClass("light-theme")
      setMyItem("my-theme", "light")
   }
})
 
function localStore(){
    const theme = localStorage.getItem("my-theme")
    if(theme === "dark"){
        addClass("dark-theme")
        myButton.checked = true;
    }
    if(theme === "light"){
        addClass("light-theme")
        myButton.checked = false;
    }
}
 localStore()

function addClass( myClass){
return body.classList.add(myClass)
}
function removeClass(reClass){
return body.classList.remove(reClass)
}
function setMyItem (key , value){
return localStorage.setItem(key, value)
}
