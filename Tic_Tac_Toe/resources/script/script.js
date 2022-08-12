
    function player(name, score){
        this.playerName = name; 
        this.playerScore = score;
    }

    let Game = {
        playerTurn: true,
        gameBoard: [],
        players:[],
        init: function(){
            this.cache();
            this.initGameBoard(3);
            this.bindEvent();
            this.render();
            //console.log(this.gameArea.children);
        },
        cache: function(){
            this.gameArea = document.querySelector(".gameBoard");
            this.gameB = document.querySelector(".game");
            this.player1 = document.querySelector(".player1");
            this.player2 = document.querySelector(".player2");
            
        },
        bindEvent: function(){
            this.gameBoard.forEach(e =>{
                e.forEach(element => {
                    element.div.addEventListener("click",   this.buttonClick.bind(this));
                });
            })
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
