export function getWindDirection(n){
    if(n > 315 && n < 45){
        return "North"
    }else if(n >= 45 && n < 135){
        return "East";
    }else if(n >= 135 && n < 180){
        return "South";
    }else{
        return "West";
    }

}