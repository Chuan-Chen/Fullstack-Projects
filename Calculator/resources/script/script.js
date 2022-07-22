const display = document.querySelector('.display-text');
let currentOperations = [ ];
let previousE = "";
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
}
function backSpace(e){
    display.textContent = display.textContent.slice(0,-1);
    currentOperations.pop();
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

function reduce(array){
    let a = [];
    let num = "0";
    for(let i = 0; i < array.length; i++){
        if(!isSymbol(array[i]) || array[i] == "."){
            num+=String(array[i]);
        }else{
            a.push(num);
            num = "";
            a.push(array[i]);
        }
    }
    a.push(num);
    return a;
}

function calculate(e){
    function calculate(someArr){
        let array = someArr;
        while(array.length != 1){
            let index = -1;
            if(findIndex("*") != -1){
                index = findIndex("*");
                array[index] = multiply(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }else if(findIndex("/")!= -1){
                index = findIndex("/");
                if(array[index+1] == 0){
                    array = ["Really?"];
                }else{
                    array[index] = divide(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                    array.splice(index+1,1);
                    array.splice(index-1,1);
                }
            }else if(findIndex("+") != -1) {
                index = findIndex("+");
                array[index] = add(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }else if(findIndex("-") != -1){
                index = findIndex("-");
                array[index] = subtract(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }
        }
        return array;
    }
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a, b){
    return (a.toPrecision(2) / b.toPrecision(2));
}
function multiply(a, b){
    
    return (a.toPrecision(2) * b.toPrecision(2));
}

function isSymbol(e){1
    if(e == '.' ||  e == '-' ||  e == '+' ||  e == '*' || e == '/'){
        return true;
    }
    return false;
}

// currentOperations[currentOperations.length-1] >= 0 && currentOperations[currentOperations.length-1] <=9 ||
function keyPress(e){ 
    if(e.key >= 0 && e.key <= 9 || e.key == '.' ||  e.key == '-' ||  e.key == '+' ||  e.key == '*' || e.key == '/'){
        /**
         let previousElement = currentOperations[currentOperations.length-1];
        if(previousElement == '.' ||  previousElement == '-' ||  previousElement == '+' ||  previousElement== '*' || previousElement == '/'){
            currentOperations[currentOperations.length-1] = e.key;
            updateDisplay();
        }


         */
        previousE = e.key;
        if(isSymbol(previousE) && currentOperations>=1){
            currentOperations.pop();
        }
        currentOperations.push(`${e.key}`);
        updateDisplay();
    }else if(e.key == "Backspace"){
        backSpace(e);
    }else if(e.key == "Enter"){
        calculate();
    }
    console.log("press/clicked: " + e.key);
    console.log("current: " + currentOperations)
}

function buttonClick(e){
    previousE = e.path[0].attributes[1].value;
    if(e.path[0].attributes[1].value == "="){
        display.textContent = "";
        display.textContent = display.textContent + calculate(e);
    }else{
        currentOperations.push(`${e.path[0].attributes[1].value}`);
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