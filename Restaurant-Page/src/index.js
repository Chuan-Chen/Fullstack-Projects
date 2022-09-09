import styles from "./style.css";
import {createHeader} from './header.js';
import { createHome } from "./home";

const mainBody = document.querySelector("#content");
const header = createHeader(mainBody);

const content = document.createElement("div");
content.classList.add("content");
mainBody.append(content);

createHome(mainBody);