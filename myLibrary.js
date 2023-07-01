export class employee{
    name;
    age;
    salary;

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    details(){
        console.log(`Name: ${this.name},\n Age:${this.age},\n Salary: ${this.salary}`)
        var details1 = document.createElement("h3")
        details1.innerHTML = `Name: ${this.name}`
        document.body.appendChild(details1)
        var details2 = document.createElement("h3")
        details2.innerHTML = `Age: ${this.age}`
        document.body.appendChild(details2)
        var details3 = document.createElement("h3")
        details3.innerHTML = `Salary: ${this.salary}`
        document.body.appendChild(details3)
    }
}