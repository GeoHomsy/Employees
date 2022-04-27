class Employee{

    empList = [];

    constructor (name,number){
        this.name = name;
        this.number = number;
    }

    addNewEmployee(Employee) {
        this.empList.push(Employee);
    }

    getAllEmployee() {
        this.empList.pop();
    }
}

module.exports = Employee