import {clear} from './delete.js'
export function createContact(mainBody){
    let content = mainBody.children[3]
    clear(content);
    console.log('creating Contact');
    content.textContent = "contact";
}