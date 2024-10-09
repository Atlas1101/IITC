import {
    toggleaddMenuDisplay,
    toggleFilterMenuDisplay,
    toggleEditMenuDisplay,
    renderEmployeeList,
    renderView,
    fillEditForm,
} from "./view.js";
import {
    addEmployee,
    theChosenEmp,
    selectItem,
    deleteEmployee,
    filteredEmployees,
    editEmployee,
    // editItem,
} from "./model.js";

renderEmployeeList();
renderView();


// Add button functionality
const addmenu = document.getElementById("addPanelButton");
addmenu.addEventListener("click", function () {
    toggleaddMenuDisplay();
});

//Edit button functionality
const editmenu = document.getElementById("editPanelButton");
editmenu.addEventListener("click", function () {
    toggleEditMenuDisplay();
    fillEditForm();
    console.log(theChosenEmp);

});

const filterOption = document.getElementById("filter");
filterOption.addEventListener("click", function () {
    toggleFilterMenuDisplay();
    console.log("filte button pressed");

});
// submit form function
const submitButton = document.getElementById("submitEmpButton");

submitButton.addEventListener("click", function (ev) {
    ev.preventDefault();

    const inputData = [
        "fname",
        "lname",
        "age",
        "department",
        "start-date",
        "salary",
    ];
    const values = {};
    let isEmptyField = false;

    inputData.forEach((data) => {
        const input = document.getElementById(data);
        if (!input.value) {
            isEmptyField = true;
        }
        values[data] = input.value;
        input.value = "";
    });
    if (isEmptyField) {
        $('#error-message').text('Please fill all fields');
        return;
    }
    addEmployee(
        values["fname"],
        values["lname"],
        values["age"],
        values["department"],
        values["start-date"],
        values["salary"]
    );

    // const firstName = document.getElementById("fname")
    // const lastName = document.getElementById("lname")
    // const age = document.getElementById("age")
    // const department = document.getElementById("department")
    // const startDate = document.getElementById("start-date")
    // const salary = document.getElementById("salary")
    // modelexp.addEmployee(
    //     firstName.value,
    //     lastName.value,
    //     age.value,
    //     department.value,
    //     startDate.value,
    //     salary.value,
    // )

    renderEmployeeList();
});

const theList = document.getElementById("employee-list");
theList.addEventListener("click", function (ev) {
    selectItem(ev.target);
    renderView();
    console.log(theChosenEmp.department);
    console.log(theChosenEmp);

});
//Delete button functionality

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function () {
    deleteEmployee();
    renderEmployeeList();
});

//department filter button functionality

const depfilterButton = document.getElementById("submitDepButton");

depfilterButton.addEventListener("click", function () {
    filteredEmployees();
    renderEmployeeList();
    // console.log("filtered and rendered");

});


const editItemSubmitButton = document.getElementById("submitEmpEditButton");
editItemSubmitButton.addEventListener("submit", function (e) {
    if (!editItemSubmitButton.checkValidity()) {
        // Form is invalid, do something
    } else {
        // Form is valid, prevent default and submit manually
        e.preventDefault();
        // Your form submission logic here
    }
    editEmployee();
    renderEmployeeList();
    renderView();
})