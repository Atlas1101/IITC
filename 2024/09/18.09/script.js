
const tasks = [
    {
        task: "Polish bust collection",
        taskId: "csscsc ",
        completed: true,
        display: true,
    },
];

function clearInput() {
    let input1 = document.getElementById("task");
    input1.value = "";
}

function idMaker() {
    const uniqueId = Date.now() + "-" + Math.floor(Math.random() * 1000);
    return uniqueId;
}

const addItemButton = document.getElementById("submitTaskButton");

addItemButton.addEventListener("click", function () {
    addItemArray();
    clearInput();

    console.log("add Item button pushed");
});

function addItemArray() {
    const newId = idMaker();
    
    const taskToAdd = document.getElementById("task").value;
    
    
    if(taskToAdd.length<3){alert("input valid task")}
    else{


        const newTask = {
            task: taskToAdd,
            taskId: newId,
            completed: false,
            display: true,
        };
    
        tasks.push(newTask);
        renderArray();
    }

    
}

function renderArray() {
    const theList = document.getElementById("list");
    theList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const currentElement = tasks[i];
        const currentElementTask = currentElement.task;
        const currentElementId = currentElement.taskId;
        const currentElementStatus = currentElement.completed;
        const currentElementDisplay = currentElement.display;
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = currentElementTask;

        newTaskItem.addEventListener("click", function () {
            toggleCompletion(currentElement.taskId);
        });
        

        if (currentElementStatus === true) {
            newTaskItem.setAttribute("class", "completed");
        } else if (currentElementStatus === false) {
            newTaskItem.setAttribute("class", "uncompleted");
        }
        if (currentElementDisplay === true) {
            theList.appendChild(newTaskItem);
        }

        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "🗑";
        newTaskItem.appendChild(deleteButton);
        deleteButton.addEventListener("click", function (event) {
            event.stopPropagation();
            deleteDat(currentElementId);
            console.log("delete Dat button pushed");
        });



        
const editButton = document.createElement("button");
        editButton.className = "editButton";
        editButton.textContent = "✏";
        newTaskItem.appendChild(editButton);
        editButton.addEventListener("click", function (event) {
            event.stopPropagation();
            edit(currentElement.taskId);
            console.log("edit Dat button pushed");
        })
    }
}

function deleteDat(currentElementId) {
    const itemToDeleteIndex = tasks.findIndex(
        (task) => task.taskId === currentElementId
    );
    if (itemToDeleteIndex !== -1) {
        tasks.splice(itemToDeleteIndex, 1);
    }
    renderArray();
}


function toggleCompletion(taskId) {
    const task1 = tasks.find((t) => t.taskId === taskId);
    if (task1.completed) {
        task1.completed = false;
    } else if (!task1.completed) {
        task1.completed = true;
    }
    renderArray();
}

const compButton = document.getElementById("comp");
compButton.addEventListener("click", function () {
    showMeComp();
    renderArray();
});

function showMeComp() {
    tasks.forEach((task) => {
        task.display = task.completed;
    });
}

const allButton = document.getElementById("all");
allButton.addEventListener("click", function () {
    showMeAll();
    renderArray();
});

function showMeAll() {
    tasks.forEach((task) => {
        task.display = true;
    });
}

const uncompButton = document.getElementById("uncomp");
uncompButton.addEventListener("click", function () {
    showMeNonComp();
    renderArray();
});

function showMeNonComp() {
    tasks.forEach((task) => {
        task.display = !task.completed;
    });
}

function edit(taskId1) {
    const taskUpdate = prompt("Please enter new task")
    const taskEdit = tasks.find((t) => t.taskId === taskId1);
    if(taskUpdate.length>2){
        taskEdit.task = taskUpdate
    }
    else {
        taskEdit.task = taskEdit.task
    }


    renderArray();
}
renderArray()

