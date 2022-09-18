class Clock{
    constructor(timeDiv){
        this.timeDiv = timeDiv;
    }
    clock(timeObject){
        const currentTime = new Date();
        
        this.timeObject.textContent = 
        `${pad(currentTime.getMonth()+1)}/${pad(currentTime.getDate())}  
         ${pad(convert24Hour(currentTime.getHours()))}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}`;
        setTimeout(clock, 1000);
    };
    
    
    static pad(n){
        if(n < 10) return `0${n}`;
        return n;
    }
    
    static convert24Hour(n){
        if(n > 12) return n - 12;
        return n;
    }
    init(){
        this.clock(timeDiv);
    }
}

export {Clock}