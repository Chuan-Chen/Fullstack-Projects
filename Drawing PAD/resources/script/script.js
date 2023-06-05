let size = 33;
let tileSize = 20;

const main = document.querySelector('.container');
const pad_size = document.querySelector('#pad-size').addEventListener("mouseup", function(e){
    //size = parseInt(e.path[0].value);
    size = parseInt(e.target.value);
    //remove();
    remove(main);
    update();
    
});
const reset = document.querySelector('.resetBtn').addEventListener('click', function(e){
    size = 33;
    document.querySelector('#pad-size').value = size;
    remove(main);
    update();
});

function remove(parent){
    while(parent.firstChild){
        parent.removeChild(parent.lastChild);
    }
}

function changeBlock(e){
    e.target.classList.add("color");
}

function update(){
    let acutal_size = size * size;
    main.style.width = `${(size*tileSize) + size}px`;
 
    
    for(let i = 0; i < acutal_size; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeBlock);
        div.classList.add("tile");
        main.append(div);
    }
    

}

update();
