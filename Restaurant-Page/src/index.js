import styles from "./style.css";
import {clear} from "./delete.js"
import {createMenu} from "./menu.js";


let pages = [];



const mainBody = document.querySelector("#content");
pages.push(createMenu(mainBody));

