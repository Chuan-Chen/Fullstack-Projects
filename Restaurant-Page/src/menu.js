import {clear} from './delete.js'

export function createMenu(mainBody){
    let content = mainBody.children[3]
    clear(content);
    console.log('creating menu');
    content.textContent = "menu";
}