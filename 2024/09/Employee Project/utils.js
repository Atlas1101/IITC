
function makeId() {
    let id = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

function capitalise(str){
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}



function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export {
    makeId,
    getFromStorage,
    saveToStorage,
    capitalise
}