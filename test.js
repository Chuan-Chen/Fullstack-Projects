
(function(){
    let object = {
        
        createVar: function(){this.name = "william"},
        init: function(){
            this.createVar();
            console.log(this.name)
        }

    }
    object.init();
})()
