export function init(domObjects){
    conversion(domObjects.conversion);
    createCard(domObjects.content);
    search(domObjects.search);
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

function search(search){
    search.addEventListener('keydown', (e)=>{
        if(e.keyCode == 13 && search.value != ""){
            console.log(search.value);
        }
    });
}


function createCard(content){
    let div = document.createElement("div");
    div.classList.add("card");
    content.append(div);
}