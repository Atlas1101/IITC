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

// let myProducts = [
//   {
//     id: "p1",
//     name: "laptop",
//     price: 1000,
//     isAvailable: true,

//     info: {
//       color: "#fff",
//       sizes: ["MD", "L"],
//     },
//   },
//   {
//     id: "p2",
//     name: "mouse",
//     price: 400,
//     isAvailable: false,
//     info: {
//       color: "#000",
//       sizes: ["S", "MD"],
//     },
//   },
//   {
//     id: "p3",
//     name: "desk",
//     price: 600,
//     isAvailable: true,
//     info: {
//       color: "#000",
//       sizes: ["L", "XL"],
//     },
//   },
// ];


// function getSizeCount(product){

// let sizeMap = {}



//    for(let i=0;i<product.length;i++){
//     let currentSizes = product[i].
//     info.sizes

//    for(let j=0; j<currentSizes.length;j++){
//     let currentSize = currentSizes[j]

//     if (sizeMap[currentSize]=== undefined){
//         sizeMap[currentSize] = 0

//     }
//  sizeMap[currentSize] ++

//    }
// }
// return sizeMap
   
// }

// let sizes = getSizeCount(myProducts);
// console.log("sizes", sizes);




/////////////////////////////////////////////////
//hw from the lesson on objects

// let student = {
//   name: "Alice",
//   age: 20,
// };


// function addProperty(student, key, value) {


//   student[key] = value
// }

// addProperty(student, "hobby", "Acrobatics");
// console.log("Updated Student:", student);

// TODO: Write a function to update a student's grade in a subject

// let school = {
//   name: "Greenwood High",
//   address: {
//     city: "Springfield",
//     zip: "12345",
//   },
//   students: [
//     { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
//     { id: 2, name: "Bob", grades: { math: 92, english: 88 } },{ id: 3, name: "chris", grades: { math: 12, english: 20 } },
//   ],
// };







// function updateStudentGrade(school, studentId, subject, newGrade) {

//   for(let i=0; i<school.students.length;i++){
//     let currentStudent =school.students[i]
//     if(currentStudent.id === studentId){
//          currentStudent.grades[subject]= newGrade  
    

//   }



// }
// }
// updateStudentGrade(school, 2, "emglish", 100);
// console.log("Updated School:", school);  



/////////////////////chat gpt q -similar

// let library = {
//   name: "City Library",
//   address: {
//     city: "Metropolis",
//     zip: "67890",
//   },
//   books: [
//     { id: 1, title: "Moby Dick", author: "Herman Melville", copies: 3 },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", copies: 5 },
//     { id: 3, title: "1984", author: "George Orwell", copies: 2 },
//   ],
// };

//Task:
// Write a function updateBookCopies(library, bookId, newCopies) that updates the number of copies available for a book with a specific bookId in the books array. If the book is found, update the copies property; otherwise, print a message indicating that the book was not found. If the newCopies is less than 0, s et it to 0.

// Requirements:
// Find the Book by ID: Use a loop to find the book with the matching bookId.
// Update Copies: Modify the copies property if the book is found.
// Handle Invalid Values: Ensure newCopies is set to 0 if it is less than 0.
// Print Appropriate Messages: Notify if the book is not found or if copies are updated.

// function updateBookCopies(library, bookId, newCopies){

//     for(let i=0; i<library.books.length;i++){
//         let currentBook = library.books[i]
//         if(currentBook.id === bookId){
            
        
//          if( newCopies <= 0){
//             currentBook.copies = 0
//         console.log(`Updated copies to 0`)}
//             else{currentBook.copies += newCopies
//                 console.log(`Updated to ${currentBook.copies} `)
//             }
//         }


//     }


// }
// updateBookCopies(library,2,100);
// console.log("Updated:",library);  

// console.log(` Book id${bookId} not found`)


// ques from chat gpt on mistakes

//1
// let student = { name: "John", address: { city: "New York", zip: "10001" } }

// function cityup(newCity){
//  student.address.city = newCity
 

// }
// cityup("london")
// console.log(student);

//2


// function up(object, key,value){
//     if(!(key in object)){
//         object[key] = value
    
//     }
//     else{
//         return
//     }

// }
// up(student,"name","black")
// console.log(student);

//3

// let library = { books: [ { id: 1, title: "1984", copies: 5 }, { id: 2, title: "Brave New World", copies: 3 } ] };





// function upd(library,id,coppa){
//     let found = false
//   for(let i=0;i<library.books.length;i++){
//     let currentBook =library.books[i]
// if(currentBook.id === id){
//     currentBook.copies += coppa
//      found = true
// }

// }
// if (!found){console.log("we cant fund your book mate");}
// }
// upd(library,3,122)
// console.log(library);


//4
// let car = { model: "Tesla", specs: { range: 300, battery: "100 kWh" } }

// car.specs.range.splice()



// ;, write code to extract and print the range value.