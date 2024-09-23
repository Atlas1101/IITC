// let count= 1

// const addItemButton = document.getElementById('addItem');

// addItemButton.addEventListener("click",function(){
//     addItem()
//     console.log("addItembutton clicked..Noice");
//     count++

// })

// function addItem(){
//     const theList = document.getElementById("itemList")
//     const newThing = document.createElement("li")
//     newThing.addEventListener("click",selectItem)
//     newThing.textContent = `new item ${count}`;
//     theList.appendChild(newThing)
// }

// // function selectItem(event){
// //     const clickedItem = event.target
// //     clickedItem.classList.toggle("selected")
// // }

// const removeFirstButton = document.getElementById('removeFirst');

// removeFirstButton.addEventListener("click",function(){
//     removeFirstItem()
//     console.log("you removed the first item..Noice");
// })

// function removeFirstItem(){
//     const theList = document.getElementById("itemList")
//     const itemToRemove = theList.querySelectorAll("li")[0]
//     theList.removeChild(itemToRemove)
// }

// const removeLastButton = document.getElementById('removeLast');
// const removeSelectedButton = document.getElementById('removeSelected');

//-------------------------------------------------------------//

let count = 1;

const theList = document.getElementById("itemList");

theList.addEventListener("click", function (ev) {
    selectItem2(ev.target);
});

function selectItem2(selectedItem) {
    const currentSelectedItems = theList.querySelector(".selected");
    if (currentSelectedItems === selectedItem) {
        selectedItem.classList.toggle("selected");
    } else {
        currentSelectedItems?.classList.remove("selected");
        selectedItem.classList.add("selected");
    }
}


//to select multiple//
// function selectItem2(selectedItem) {
//     const currentSelectedItems = theList.querySelector(".selected");
    
//         selectedItem.classList.toggle("selected");
// }

const addItemButton = document.getElementById("addItem");

addItemButton.addEventListener("click", function () {
    addItem();
    console.log("addItembutton clicked..Noice");
    count++;
});

function addItem() {
    const newThing = document.createElement("li");
    newThing.textContent = `new item ${count}`;
    theList.appendChild(newThing);
}

const removeFirstButton = document.getElementById("removeFirst");

removeFirstButton.addEventListener("click", function () {
    removeFirstItem();
    console.log("you removed the first item..Noice");
});

function removeFirstItem() {
    const theList = document.getElementById("itemList");
    const itemToRemove = theList.querySelectorAll("li")[0];
    theList.removeChild(itemToRemove);
}

const removeLastButton = document.getElementById("removeLast");

removeLastButton.addEventListener("click", function () {
    removeLastItem();
    console.log("you removed the last item..Noice");
});

function removeLastItem() {
    const theList = document.getElementById("itemList");
    const lastItemToRemove =
        theList.querySelectorAll("li")[theList.querySelectorAll("li").length - 1];
    theList.removeChild(lastItemToRemove);
}




const removeSelectedButton = document.getElementById("removeSelected");

function byeSelected() {
    const theList = document.getElementById("itemList");
    const goodbye = theList.querySelector(".selected");
    if(goodbye){

        theList.removeChild(goodbye)
    }
}


/////////to remove multiple selected//
// function byeSelected() {
//     const theList = document.getElementById("itemList");
//     const goodbye = theList.querySelectorAll(".selected");
//     goodbye.forEach(item => {
//         theList.removeChild(item)     
//     });
// }



removeSelectedButton.addEventListener("click", function () {
    byeSelected();
    console.log("you choose you remove..Noice");
});
