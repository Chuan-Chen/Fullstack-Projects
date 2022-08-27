let user = function(name){
    this.users = [];
    this.users.push(name);
    this.print = function(){
        console.log(this.users);
    }
    this.add = function(name){
        this.users.push(name);
    }
}

let usernames = new user("John Smith");

usernames.print();
usernames.add("John Cena");
usernames.print();