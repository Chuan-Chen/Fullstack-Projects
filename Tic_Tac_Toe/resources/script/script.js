
    function player(name, score){
        this.playerName = name; 
        this.playerScore = score;
    }

    let Game = {
        gameBoard: [],
        players:[],

        init: function(){
            this.bindEvent();
            this.cache();

        },
        render: function(){

        },
        cache: function(){
            this.player1 = new player(document.querySelector("player1").textContent, 0);
            this.player2 = new player(document.querySelector("player2").textContent, 0);
        },
        bindEvent: function(){
            
        }


    }
    Game.init();
