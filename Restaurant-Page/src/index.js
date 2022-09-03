import styles from "./style.css";
import {clear} from "./delete.js"
import {createMenu} from "./menu.js";
import {content} from "./content.js";
import {contact} from "./contact.js";





const mainBody = document.querySelector("#content");
createMenu(mainBody);
console.log(mainBody)
