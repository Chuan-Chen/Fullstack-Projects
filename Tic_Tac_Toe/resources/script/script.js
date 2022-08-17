
    function player(name, score){
        this.playerName = name; 
        this.playerScore = score;
    }

    let Game = {
        playerTurn: true,
        gameBoard: [],
        players: [],
        counter: 0,
        init: function(){
            this.cache();
            this.initGameBoard(3);
            this.bindEvent();
            this.render();

        },
        cache: function(){
            this.gameArea = document.querySelector(".gameBoard");
            this.gameBody = document.querySelector(".game");
            this.player1 = document.querySelector(".player1");
            this.player1Display = document.querySelector(".player1-display");
            this.player1Score = document.querySelector(".player1-score");
            this.player2 = document.querySelector(".player2");
            this.player2Display = document.querySelector(".player2-display");
            this.player2Score = document.querySelector(".player2-score");
            this.startMenu = document.querySelector(".start-screen");
        },
        bindEvent: function(){
            this.gameBoard.forEach(e =>{
                e.forEach(element => {
                    element.div.addEventListener("click",   this.buttonClick.bind(this));
                });
            })
            let playerTurn = this.playerTurn;
            let start = this.startMenu;
            let players = this.players;
            let player1 = this.player1;
            let player1Display = this.player1Display;
            let player1Score = this.player1Score;
            let player2 = this.player2;
            let player2Display = this.player2Display;
            let player2Score = this.player2Score
            start.children[0].children[0].addEventListener('click', function(e){
                if(player1.value != "" && player2.value != ""){
                    start.classList.add("no-display");
                    players.push({player: player1.value, score: 0, sign: playerTurn, scoreDisplay: player1Score});
                    player1Display.textContent = player1.value;
                    players.push({player: player2.value, score: 0, sign: !playerTurn, scoreDisplay: player2Score});
                    player2Display.textContent = player2.value;
                }
            });
            player1.addEventListener("keyup", function(e){
                if(player1.value != ""){
                    player1.classList.remove("invalid-border");
                }
            });
            player2.addEventListener("keyup", function(e){
                if(player2.value != ""){
                    player2.classList.remove("invalid-border");
                }
            });
        },
        render: function(){
            this.gameBoard.forEach(e => {
                e.forEach(element => {
                    if(element.value == true && element.value != -1){
                        element.div.textContent = 'O'
                    }else if(element.value ==  false && element.value != -1){
                        element.div.textContent = 'X'
                    }
                });
            });
            this.players.forEach(e => {
                e.scoreDisplay.textContent = "Score: " + e.score;
            });
        },
        buttonClick: function(e){
            let i = e.path[0].classList[0].charAt(1);
            let j = e.path[0].classList[1].charAt(1);
            if(this.gameBoard[i][j].value != -1) return;
            this.playerTurn = !this.playerTurn;
            this.gameBoard[i][j].player = this.players[+ this.playerTurn];
            this.gameBoard[i][j].value = this.playerTurn;
            //console.log(i, j);
            //console.log(this.gameBoard);
            if(this.checkBoard(this.gameBoard, i, j)){
                this.players[+ this.playerTurn].score++;
                this.resetBoard();
            }
            this.counter++;
            if(this.counter == 9){
                this.resetBoard();
            }
            console.log(this.counter);
            this.render();
        },
        initGameBoard: function(size){
            for(let i = 0; i < size; i++){
                let array = [];
                for(let j = 0; j < size; j++){
                    const div = document.createElement("div");
                    div.classList.add("i"+i, 'j'+j);
                    array.push({div, value: -1, player: null});
                    this.gameBody.append(div);
                }
                this.gameBoard.push(array);
                array = [];
            }
        },
        checkBoard:function(array, r, c){

            function checkH(array, r, c){
                let value = array[r][c].value;
                for(let i = 0; i < array[r].length; i++){
                    if(value != array[r][i].value){
                        return false;
                    }
                }
                return true;
            }
            
            function checkV(array, r, c){
                let value = array[r][c].value;
                for(let i = 0; i < array[c].length; i++){
                    if(value != array[i][c].value){
                        return false;
                    }
                }
                return true;
            }
        
            function checkD(array){
                
                    let a = "";
                    let b = "";
                
                    let winnerA = "truetruetrue"
                    let winnerB = "falsefalsefalse"
                
                    if(array[0][0] == -1 || array[2][2] == -1)return false;
                    for(let i = 0; i < array.length; i++){
                        for(let j = 0; j < array[i].length; j++){
                            if(j == i){
                                a+=array[i][j].value;
                            }
                            if(array.length-1 - j == i){
                                b+=array[i][j].value;
                            }
                        }
                    } 
                    if(a === winnerA || b === winnerA || a === winnerB || b === winnerB){
                        return true;
                    }
                return false;
            }
            
            
            if(checkV(array, r, c) || checkH(array, r, c) || checkD(array)){
                
                return true;
            }
            return false;
        },
        resetBoard: function(){
            this.counter = 0;
            this.gameBoard.forEach(e => {
                e.forEach(element => {
                    element.div.textContent = "";
                    element.value = -1;
                });
            });
            this.render();
        }
    }
    Game.init();
