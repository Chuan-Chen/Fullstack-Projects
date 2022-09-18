
(()=>{
    if(!navigator.geolocation){
        console.log("no geolocation")
        return;
    }
    navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos); console.log(new Date(pos.timestamp))}, (err)=>{console.log(err)});
})();

function clock(){
    const currentTime = new Date();
    const time = document.querySelector(".time");
    time.textContent = 
    `${pad(currentTime.getMonth()+1)}/${pad(currentTime.getDate())}  
     ${pad(currentTime.getHours())}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}`;
    setTimeout(clock, 100);
};
clock();

function pad(n){
    if(n < 10) return `0${n}`;
    return n;
}


async function getLat(){

}

async function getLon(){

}


