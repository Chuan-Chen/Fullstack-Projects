let currentOperations = [4, "." , "5" ,"*",3, "+" ,1, "/", 1];


function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a - b
}
function divide(a, b){
    return (a.toPrecision(2) / b.toPrecision(2));
}
function multiply(a, b){
    
    return (a.toPrecision(2) * b.toPrecision(2));
}

function isSymbol(e){
    if(e == '.' ||  e == '-' ||  e == '+' ||  e == '*' || e == '/'){
        return true;
    }
    return false;
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

currentOperations = reduce(currentOperations);
console.log(calculate(currentOperations));

