// let person = {
//     thePerson: "me",
//     age: 26,
//     city: "Ramat Gan",
//     currentLocation: "Ramat Gan",
//     locationInFiveHours: "Ramat Gan",
//     isStudent: false




// }



// console.log(person.thePerson);
// console.log(person.age);
// person.isStudent =true
// console.log(person.isStudent);

// // let car = {

// //     make: "Honda",
// //     model: "civic",
// //     year: 2006,


// // }

// // console.log(car.model,car.make);
// // car.year =9123478324


// let fruit = {

//     name: "Papaya",
//     colour: "caribbean Green",
//     sweetness: 3,


// // }

// // console.log(car.model,car.make);
// // car.year =9123478324




// ////

// let book = {
//     title: "Papaya",
//     author: "caribbean Green",
//     paged: 3,
// }

// console.log(book.title,book.author);
// book.pages = 50


// //

let car = {
    
    make: "Laborghini",
    model: "Aventador",
    year: 2006,
    
}



console.log(car.make,car.model);
car.year = 2012
car.colour = "red"
let details = Object.values(car)
console.log(details);


let key = Object.keys(car)
console.log(key);

for(let i =0;i <key.length;i++ ){
    let keyProcessor = key[i]
    console.log(keyProcessor + "=" + car[keyProcessor]);
}

