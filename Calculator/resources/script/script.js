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

function findIndex(item, array){
    let i = -1;
    array.find(function(search, index){
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

function calculate(someArr){
    let array = someArr;
        while(array.length != 1){
            let index = -1;
            if(findIndex("*" , array) != -1){
                index = findIndex("*", array);
                array[index] = multiply(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }else if(findIndex("/" , array)!= -1){
                index = findIndex("/", array);
                if(array[index+1] == 0){
                    array = ["Really?"];
                    return array;
                }else{
                    array[index] = divide(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                    array.splice(index+1,1);
                    array.splice(index-1,1);
                }
            }else if(findIndex("+" , array) != -1) {
                index = findIndex("+" ,array);
                array[index] = add(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }else if(findIndex("-" , array) != -1){
                index = findIndex("-" , array);
                array[index] = subtract(parseFloat(array[index - 1]), parseFloat(array[index + 1]));
                array.splice(index+1,1);
                array.splice(index-1,1);
            }
        }
        //currentOperations[0] = currentOperations[0].toFixed(2);
        return array;
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a, b){
    return (a / b).toFixed(2);
}
function multiply(a, b){
    
    return (a * b).toFixed(2);
}

function isSymbol(e){
    //e == '.' ||
    if(e == '-' ||  e == '+' ||  e == '*' || e == '/'){
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
        currentOperations = reduce(currentOperations);
        currentOperations = calculate(currentOperations);
        display.textContent = "";
        updateDisplay();
    }
    console.log("press/clicked: " + e.key);
    console.log("current: " + currentOperations)
}
function buttonClick(e){
    let key = e.path[0].attributes[1].value;
    if(key == "="){
        display.textContent = "";
        currentOperations = reduce(currentOperations);
        currentOperations = calculate(currentOperations);
        updateDisplay();
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
