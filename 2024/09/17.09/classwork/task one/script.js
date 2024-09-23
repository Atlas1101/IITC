let A = document.getElementById("content")
A.style.backgroundColor = "lightBlue"
A.style.color="red"

let ListItems = document.querySelectorAll("#list li");

for (let i = 0; i< ListItems.length; i++) {
    let CurrentItem = ListItems[i]
    
    CurrentItem.style.backgroundColor = "yellow"
}

