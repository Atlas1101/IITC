import { _gemployeeData,theChosenEmp,isFilterMode,arraytoRender } from "./model.js";
import { capitalise } from "./utils.js";

// import { utilsexp } from "./utils.js";

function toggleaddMenuDisplay() {
    // const addmenu = document.getElementById("addPanel");
    document.getElementById("dropContent").classList.toggle("show");
}
// function toggleFilterMenuDisplay() {
//     // const addmenu = document.getElementById("addPanel");
//     document.getElementById("dropContentFilter").classList.toggle("show");
//     console.log("toggle filter is called");
// }


function toggleFilterMenuDisplay() {
    console.log(document.getElementById("dropContentFilter").classList);
    document.getElementById("dropContentFilter").classList.toggle("show");
    console.log(document.getElementById("dropContentFilter").classList);
}

function toggleEditMenuDisplay() {
    if(theChosenEmp === null){
        alert("Please select an employee to edit")
        return
    }
    document.getElementById("dropContentEdit").classList.toggle("show");
}
function fillEditForm() {
  const currentEmployee = theChosenEmp
  if(currentEmployee === null) return
  document.getElementById('fnameE').value = currentEmployee.firstName;
  document.getElementById('lnameE').value = currentEmployee.lastName;
  document.getElementById('ageE').value = currentEmployee.age;
  document.getElementById('departmentE').value = currentEmployee.department;
  document.getElementById('start-dateE').value = currentEmployee.startDate;
  document.getElementById('salaryE').value = currentEmployee.salary;
}



function renderEmployeeList() {
     
    
    let arraytoprint = []
    const entireList = _gemployeeData
   
    

    if(isFilterMode === true){
        arraytoprint = arraytoRender
    } else arraytoprint = entireList

    const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";

    for (let i = 0; i < arraytoprint.length; i++) {
        let currentEmployee = arraytoprint[i];
        const employee = document.createElement("li");
        employee.textContent =
            currentEmployee.firstName + " " + currentEmployee.lastName;
        employee.setAttribute("id", currentEmployee.id);

        employeeList.appendChild(employee);
    }
}

function renderView() {
    const cardDisplay = document.getElementById("detailsV");
  cardDisplay.innerHTML = "";

  if (theChosenEmp !== null) {
   
      Object.entries(theChosenEmp).forEach(([key, value])=> {
          const vDetail = document.createElement("li");
          const vValue = document.createElement("div");
          
          
          let detailStringed = String(key);
          vDetail.textContent = capitalise(detailStringed);
          cardDisplay.appendChild(vDetail);
          let valueStringed = String(value);
          vValue.setAttribute("id", key);
          vValue.textContent = capitalise(valueStringed);
          
          vDetail.appendChild(vValue);
       

          
        });
        
          
        
     
    }
  
}



export {
    toggleaddMenuDisplay,
    toggleFilterMenuDisplay,
    toggleEditMenuDisplay,
    renderEmployeeList,
    renderView,
    fillEditForm,
};
