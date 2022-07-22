const display = document.querySelector('.display-text');
let currentOperations = [];
let answer = 0;

function updateDisplay(){
    let str = "";
    for(let i = 0; i < currentOperations.length; i++){
        str += currentOperations[i];
    }
    display.textContent = str;
}


function reset(e){
    display.textContent = "";
    currentOperations = [];
    answer = 0;
    console.log("reset");
}
function backSpace(e){
    display.textContent = display.textContent.slice(0,-1);
    currentOperations.pop();
    console.log("backspace");
}

function findIndex(item){
    let i = -1;
    currentOperations.find(function(search, index){
        if(item == search){
            i = index;
        }
    });
    return i;
}

function calculate(e){
    let lastElement = currentOperations[currentOperations.length-1];

    if(currentOperations.length == 1){
        return lastElement;
    }else if(typeof(lastElement) != "number" && typeof(currentOperations[0] != "number")){
        return null;
    }
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function divide(a, b){
    return (a / b).toPrecision(2);
}
function multiply(a, b){
    return (a * b).toPrecision(2);
}

function isSymbol(e){1
    if(e == '.' ||  e == '-' ||  e == '+' ||  e == '*' || e == '/'){
        return true;
    }
    return false;
}

function keyPress(e){
    if(((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 97 && e.keyCode <= 105) || e.key == '.' ||  e.key == '-' ||  e.key == '+' ||  e.key == '*' || e.key == '/')){

        if(currentOperations.length == 0){
            currentOperations.push(`${e.key}`);
            updateDisplay();
        }else if(isSymbol(e.key) && isSymbol(currentOperations[currentOperations.length-1])){
            currentOperations.pop();
            currentOperations.push(`${e.key}`);
            updateDisplay();
        }else{
            currentOperations.push(`${e.key}`);
            updateDisplay();
        }

    }else if(e.keyCode == 8){
        backSpace(e);
    }else if(e.keyCode == 32){
        reset(e);
    }else if(e.keyCode == 13){
        calculate();
    }
    console.log("press/clicked: " + e.key);
    console.log("current: " + currentOperations)
}
function buttonClick(e){
    let key = e.path[0].attributes[1].value;
    if(key == "="){
        display.textContent = "";
        display.textContent = display.textContent + calculate(e);
    }else if(currentOperations.length == 0){
        currentOperations.push(`${key}`);
        updateDisplay();
    }else if(isSymbol(key) && isSymbol(currentOperations[currentOperations.length-1])){
        currentOperations.pop();
        currentOperations.push(`${key}`);
        updateDisplay();
    }else{
        currentOperations.push(`${key}`);
        updateDisplay(); 
    }
    
    console.log("press/clicked: " + e.path[0].attributes[1].value);
    console.log("current: " + currentOperations);
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
