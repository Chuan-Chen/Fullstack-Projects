
(()=>{
    getCoords();
    clock();
})();

function clock(){
    const currentTime = new Date();
    const time = document.querySelector(".time");
    time.textContent = 
    `${pad(currentTime.getMonth()+1)}/${pad(currentTime.getDate())}  
     ${pad(convert24Hour(currentTime.getHours()))}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}`;
    setTimeout(clock, 1000);
};


function pad(n){
    if(n < 10) return `0${n}`;
    return n;
}

function convert24Hour(n){
    if(n > 12) return n - 12;
    return n;
}

async function getCoords(){
    if(!navigator.geolocation){
        console.log("no geolocation")
        return;
    }
    let coords = await navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos.coords.latitude, pos.coords.longitude); 
        console.log(new Date(pos.timestamp)); 
        return {lat: pos.coords.latitude, lon: pos.coords.longitude};
    }, (err)=>{console.log(err)});
    return coords
}



