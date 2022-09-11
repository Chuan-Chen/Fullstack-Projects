
class tooDo{
    constructor(title, description, finished){
        this.title = title;
        this.description = description;
        this.finished = finished;
    }
}

class Projects{
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = [];
    }
}



let p1 = new Projects('default');
console.log(p1);