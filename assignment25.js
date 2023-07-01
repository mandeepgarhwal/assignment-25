import { employee } from "./myLibrary.js";

class Department extends employee{
    department;

    constructor(name, age, salary, department){
        super(name,age,salary);
        this.department = department
    }

    display(){
        super.details()
        var details4 = document.createElement("h3")
        details4.innerHTML = `Department: ${this.department}`
        document.body.appendChild(details4)
    }
}
function register(){
    var newname = document.getElementById("empname").value
    var newage = document.getElementById("empage").value
    var newsalary = document.getElementById("empsalary").value
    var newdepartment = document.getElementById("empdepartment").value

    var newcandidate = new Department(newname,newage,newsalary,newdepartment)
    newcandidate.display()
}

document.getElementById("registerbtn").addEventListener("click", register)
