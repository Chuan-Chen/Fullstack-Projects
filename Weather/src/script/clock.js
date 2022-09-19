export class Clock{
    constructor(time){
        this.timeObj = time;
        this.init();
    }
    pad = (n) => {
        if(n < 10) return `0${n}`;
        return n
    }
    convert24Hour = (n) => {
        if(n > 12) return n - 12;
        return n;
    }
    clock = () => {
        const currentTime = new Date();
        this.timeObj.textContent = 
        `${this.pad(currentTime.getMonth()+1)}/${this.pad(currentTime.getDate())}  
         ${this.pad(this.convert24Hour(currentTime.getHours()))}:${this.pad(currentTime.getMinutes())}:${this.pad(currentTime.getSeconds())}`;
        setTimeout(this.clock, 1000);
    }
    init = () => {
        this.clock();
    }
}