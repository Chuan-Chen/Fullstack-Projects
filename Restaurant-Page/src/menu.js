
let menuBtn = [];

export function createMenu(mainBody){
    menu = document.createElement("div");
    content = document.createElement("div");
    contact = document.createElement("div");


    menuBtn.push(menu);
    menuBtn.push(content);
    menuBtn.push(contact);

    menuBtn.forEach(e => {
        console.log(e);
    })
    

    console.log("worked");
}