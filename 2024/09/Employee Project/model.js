import { makeId, saveToStorage, getFromStorage } from "./utils.js";
import { employeeData } from "./employee.js";

const EMPLOYEE_STORAGE_KEY = "employeeData";

let _gemployeeData = getFromStorage(EMPLOYEE_STORAGE_KEY) || [];

if (!_gemployeeData || _gemployeeData.length === 0) {
    _gemployeeData = employeeData;
    saveToStorage(EMPLOYEE_STORAGE_KEY, _gemployeeData);
}
console.log("wowowowowo");

function addEmployee(firstName, lastName, age, department, startDate, salary) {
    const Employee = {
        id: makeId(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        startDate: startDate,
        department: department,
        salary: salary,
    };

    _gemployeeData.push(Employee);
    console.log(_gemployeeData);
    console.log(EMPLOYEE_STORAGE_KEY);

    saveToStorage(EMPLOYEE_STORAGE_KEY, _gemployeeData);
}


function editEmployee(firstName, lastName, age, department, startDate, salary) {
    const employeeToEdit = theChosenEmp
    
    console.log(employeeToEdit);
    
    const currentEmployee = {
    id: theChosenEmp.id,
    firstName: document.getElementById('fnameE').value,
    lastName: document.getElementById('lnameE').value,
    age: document.getElementById('ageE').value,
    department: document.getElementById('departmentE').value,
    startDate: document.getElementById('start-dateE').value,
    salary: document.getElementById('salaryE').value,
    };

    const replacement = _gemployeeData.findIndex((emp) => emp.id === currentEmployee.id);
    if (replacement !== -1) {
    _gemployeeData[replacement] = currentEmployee;
  }

    
    console.log(_gemployeeData);
    console.log(EMPLOYEE_STORAGE_KEY);

    saveToStorage(EMPLOYEE_STORAGE_KEY, _gemployeeData);
}


let theChosenEmp = null;

function chosenone(laemployee) {
    theChosenEmp = laemployee;
}

const theList = document.getElementById("employee-list");

function selectItem(selectedItem) {
    const currentSelectedEmployee = theList.querySelector(".selected");
    let idForView = selectedItem.id;

    let laemployee = _gemployeeData.find((emp) => emp.id === idForView);
    chosenone(laemployee);

    console.log(laemployee.department);
    
    // console.log(selectedItem.textContent);
    // console.log(selectedItem.id);
    
    

    if (currentSelectedEmployee === selectedItem) {
        selectedItem.classList.toggle("selected");
    } else {
        currentSelectedEmployee?.classList.remove("selected");
        selectedItem.classList.add("selected");
    }
}

function deleteEmployee() {
    const currentSelectedEmployee = theList.querySelector(".selected");

    if (!currentSelectedEmployee) {
        return;
    } else {
        const itemToDeleteIndex = _gemployeeData.findIndex(
            (emp) => emp.id === currentSelectedEmployee.id
        );
        if (itemToDeleteIndex !== -1) {
            _gemployeeData.splice(itemToDeleteIndex, 1);
            console.log(
                `employee ${currentSelectedEmployee.fname} has taken a permenant vocation`
            );
        }
    }
    saveToStorage(EMPLOYEE_STORAGE_KEY, _gemployeeData);
}

let isFilterMode = false;
let arraytoRender = []

function filterSetter(lachoice, filterlist) {
    isFilterMode = lachoice;
    arraytoRender = filterlist
    // console.log(arraytoRender);
    // console.log(isFilterMode);
    
    

}

function filteredEmployees() {
    const filterChoice = document.getElementById("fdepartment").value;
    console.log(filterChoice);

    let lachoice = false
    let filterlist = []


    if ((!filterChoice)) {
        console.log("filter is set to all");
        lachoice = false;
        filterSetter(lachoice);
    } else {
        const filteredEmployees = _gemployeeData.filter(
            (emp) => emp.department === filterChoice
        );

        lachoice = true;
        filterlist = filteredEmployees
        filterSetter(lachoice,filterlist);

        // console.log(filteredEmployees);

        
    }
}



export {
    _gemployeeData,
    addEmployee,
    selectItem,
    theChosenEmp,
    deleteEmployee,
    filteredEmployees,
    isFilterMode,
    arraytoRender,
    editEmployee,
    
};
