const display = document.querySelector('.display-text');
let currentOperations = "";
let answer = 0;

function reset(e){
    display.textContent = "";
    currentOperations = "";
    answer = 0;
}
function backSpace(e){
    display.textContent = display.textContent.slice(0,-1);
    currentOperations = currentOperations.slice(0,-1);
}

function calculate(e){

}
function keyPress(e){

    if(e.key >= 0 && e.key <= 9 || e.key == '.' || e.key == "-" || e.key == '+' || e.key == "/" || e.key == "*" || e.key == "="){
        display.textContent = display.textContent + e.key;
        currentOperations += `${e.key}`;
    }else if(e.key == "Backspace"){
        backSpace(e);
    }
    console.log("pressed/clicked: " + e.key);
    console.log("current: " + currentOperations)
}

function buttonClick(e){
    if(e.path[0].attributes[1].value == "="){
        calculate();
    }else{
        display.textContent = display.textContent + e.path[0].attributes[1].value;
        currentOperations += e.path[0].attributes[1].value;
    }
    console.log("pressed/clicked: " + e.path[0].attributes[1].value);
    console.log("current: " + currentOperations)
    }
    

function init(){
    const btns = document.querySelectorAll(".button");
    document.body.addEventListener('keydown', keyPress);
    btns.forEach(e => {
        if(e.attributes[1].value == "="){
            e.addEventListener('keydown', calculate);
        }
        e.addEventListener('click', buttonClick);
    });
    const backBtn = document.querySelector(".back");
    const clear = document.querySelector(".clear");
    clear.addEventListener('click', reset);
    backBtn.addEventListener('click', backSpace);
}



init();