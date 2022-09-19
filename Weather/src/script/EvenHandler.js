export function init(domObjects){
    conversion(domObjects.conversion);
    search(domObjects);
}


function conversion(conversion){
    conversion.addEventListener('click', () => {
        if(conversion.textContent == "Fahrenheit"){
            conversion.dataset.unit = "";
            conversion.textContent = "Celcius";
        }else{
            conversion.dataset.unit = "&temperature_unit=fahrenheit"
            conversion.textContent = "Fahrenheit";
        }
        
    });
}

function search(domObjects){
    domObjects.search.addEventListener('keydown',(e)=>{
        if(e.keyCode == 13 && domObjects.search.value != ""){
            createCard(domObjects.content);
        }
    });
}


export function createCard(content){
    let div = document.createElement("div");
    div.classList.add("card");
    content.append(div);
}