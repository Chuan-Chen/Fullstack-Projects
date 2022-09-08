


export function createMenu(mainBody){
    let a = [];
    let Home = document.createElement("div");
    let Menu = document.createElement("div");
    let Contact = document.createElement("div");
    
    a.push({"home": Home});
    a.push({"menu": Menu});
    a.push({"contact": Contact});
    
    a.forEach(e =>{
        let name = Object.getOwnPropertyNames(e);
        console.log(name)
    });


    return a;
}