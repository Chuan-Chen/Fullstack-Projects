let board = [[-1, -1, -1],
             [-1, -1, -1], 
             [0, 0, 0]];

let yes = [0,0,0];

function checkBoard(array){
    array.forEach(element => {
        if(element == yes){
            console.log(0, 0, 0);
        }
    });
}

//checkBoard(board);


if([0,0,0] == [0,0,0]){
    console.log("yes6")
}