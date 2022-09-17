
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
    time.textContent = `${currentTime.getMonth()+1}/${currentTime.getDate()}  ${currentTime.getHours()-12}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    setTimeout(clock, 100);
};
clock();

async function getLat(){

}

async function getLon(){

}


