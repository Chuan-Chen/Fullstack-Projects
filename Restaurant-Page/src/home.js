import {clear} from './delete.js'
export function createHome(mainBody){
    let content = mainBody.children[1]
    clear(content);
    console.log('creating home');
    content.textContent = "Home";
}