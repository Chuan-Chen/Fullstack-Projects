import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {createContact} from "./contact.js";


export function createHeader(mainBody){
    let a = [];

    const home = document.createElement("div");
    home.classList.add("home");
    home.textContent = "Home";
    home.addEventListener("click", createHome);

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.classList.add("menu");
    menu.addEventListener("click", createMenu)

    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.textContent = "Contact";
    contact.addEventListener("click", createContact);

    a.push(home);
    a.push(menu);
    a.push(contact);

    a.forEach(e =>{
        mainBody.append(e);
    });



    return a;
}