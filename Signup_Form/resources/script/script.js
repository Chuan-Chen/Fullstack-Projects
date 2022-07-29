const form = document.querySelector("#signup-form");
form.addEventListener("keyup", function(e){
    if(form.password.value != form.confirmPassword.value){
        form.confirmPassword.classList.add("invalid-color");
    }else{
        form.confirmPassword.classList.remove("invalid-color");
    }
});