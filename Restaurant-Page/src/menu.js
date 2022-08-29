let menu;

export function createMenu(mainBody){
    menu = document.createElement("div");
    menu.textContent = "hi";
    mainBody.append(menu);
    console.log("worked");
}