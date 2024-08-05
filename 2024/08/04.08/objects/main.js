"use strict"

// let person = {
//   name: "John",
//   age: 17,
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// // TODO: Write a function to update the person's city
// function updateCity(person, newCity) {
// person.address.city = newCity
    
// }
// updateCity(person, "London");

// console.log("Updated Person:", person);



// let myProduct = {
//   name: "laptop",
//   price: 1000,
//   isAvailable: true,
//   categories: [
//     { id: "1", label: "electronics" },
//     { id: "2", label: "computers" },
//     { id: "3", label: "tech" },
//   ],
//   info: {
//     color: "#fff",
//     sizes: ["L", "MD"],
//   },
// };


// function productId(product,ID){

//    for(let i=0;i<product.categories.length;i++){
//     let currentCata = product.categories[i]
// console.log(currentCata);
//     if (currentCata.id === ID){
//         return currentCata.label
//    }
// }

// }

// let myLabel = productId(myProduct, "3")
// console.log(myLabel);



// function productLabel(product){
// let cataLabel = []
//    for(let i=0;i<product.categories.length;i++){
//     let label = product.categories[i].label.toUpperCase();
// cataLabel.push(label)



// }
// return cataLabel

// }

// let cataLabeler = productLabel(myProduct)
// console.log(cataLabeler);

let myProducts = [
  {
    id: "p1",
    name: "laptop",
    price: 1000,
    isAvailable: true,

    info: {
      color: "#fff",
      sizes: ["MD", "L"],
    },
  },
  {
    id: "p2",
    name: "mouse",
    price: 400,
    isAvailable: false,
    info: {
      color: "#000",
      sizes: ["S", "MD"],
    },
  },
  {
    id: "p3",
    name: "desk",
    price: 600,
    isAvailable: true,
    info: {
      color: "#000",
      sizes: ["L", "XL"],
    },
  },
];


function getSizeCount(product){

let sizeMap = {}



   for(let i=0;i<product.length;i++){
    let currentSizes = product.info[i].sizes
   for(let j=0; j<product.length;j++){



}
return cataLabel

}
}
let cataLabeler = productLabel(myProduct)
console.log(cataLabeler);