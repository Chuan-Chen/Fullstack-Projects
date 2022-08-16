let board = [[0, 0, 2],
             [2, 0, 0], 
             [2, 2, 0]];
let size = board.length;

let yes = [0,0,0];

function checkH(array, r, c){
    let value = array[r][c];
    for(let i = 0; i < array[r].length; i++){
        if(value != array[r][i]){
            return false;
        }
    }
    return true;
}

function checkV(array, r, c){
    let value = array[r][c];
    for(let i = 0; i < array[c].length; i++){
        if(value != array[i][c]){
            return false;
        }
    }
    return true;
}

function checkD(array){
    let a = "";
    let b = "";

    let winnerA = "000"
    let winnerB = "111"

    if(array[0][0] == -1 || array[2][2] == -1)return false;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(j == i){
                a+=array[i][j];
            }
            if(array.length-1 - j == i){
                b+=array[i][j];
            }
        }
    } 
    if(a === winnerA || b === winnerA || a === winnerB || b === winnerB){
        return true;
    }
    return false;
}

function checkBoard(array, r, c){
    if(checkV(array, r, c) || checkH(array, r, c) || checkD(array, r, c)){
        return true;
    }
    return false;
}
// 141833794472
// pin - 6262

console.log(checkBoard(board, 1, 1));