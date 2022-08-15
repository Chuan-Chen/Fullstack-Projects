
    function player(name, score){
        this.playerName = name; 
        this.playerScore = score;
    }

    let Game = {
        playerTurn: true,
        gameBoard: [],
        players: [],
        init: function(){
            this.cache();
            this.initGameBoard(3);
            this.bindEvent();
            this.render();

        },
        cache: function(){
            this.gameArea = document.querySelector(".gameBoard");
            this.gameB = document.querySelector(".game");
            this.player1 = document.querySelector(".player1");
            this.player2 = document.querySelector(".player2");
            this.startMenu = document.querySelector(".start-screen");
        },
        bindEvent: function(){
            this.gameBoard.forEach(e =>{
                e.forEach(element => {
                    element.div.addEventListener("click",   this.buttonClick.bind(this));
                });
            })
            let start = this.startMenu;
            let players = this.players;
            let player1 = this.player1;
            let player2 = this.player2;
            start.children[0].children[0].addEventListener('click', function(e){
                if(player1.value != "" && player2.value != ""){
                    start.classList.add("no-display");
                    players.push({player: player1.value, score: 0});
                    players.push({player: player2.value, score: 0});
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
        },
        buttonClick: function(e){
            let i = e.path[0].classList[0].charAt(1);
            let j = e.path[0].classList[1].charAt(1);
            this.playerTurn = !this.playerTurn;
            this.gameBoard[i][j].value = this.playerTurn;
            console.log(this.gameBoard[i][j].value);
            this.render();
        },
        initGameBoard: function(size){
            for(let i = 0; i < size; i++){
                let array = [];
                for(let j = 0; j < size; j++){
                    const div = document.createElement("div");
                    div.classList.add("i"+i, 'j'+j);
                    array.push({div, value: -1});
                    this.gameB.append(div);
                }
                this.gameBoard.push(array);
                array = [];
            }
        },


    }
    Game.init();
