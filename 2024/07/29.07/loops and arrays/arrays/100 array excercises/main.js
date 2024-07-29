//Questions1,14,16,21

let fruits = []
console.log(fruits[2]);
const index = 0
const newElement = "pears"
fruits[index] = newElement
console.log(fruits[0]);
//21
fruits.push("orange")
console.log(fruits);



//Questions 2,11,13,17,18,22

// finding middle index is /2 and math.floor

let numbers = [1,2,3,4,5]


// console.log(numbers[0]);
// let middleValue = numbers.length/2
// let middleElement =Math.floor(middleValue)
// console.log(numbers[middleElement]);

// //17 workings
// const lastIndex = numbers.length -1
// const newLast = 10
// numbers[lastIndex] =newLast
// console.log(numbers);

// //18 workings
// const indexdb = 2
// const doubledIndex = numbers[indexdb]*2
// numbers[indexdb] = doubledIndex
// console.log(numbers[2]);


let removed = numbers.pop()
console.log(removed);
console.log(numbers);





//3,15,19,23
let colours = ["red","green", "blue"]
console.log(colours[0]);
console.log(`the second colours is ${colours[1]}`);

//19 working
for(i=0; i<colours.length;i++){
    colours[i] = colours[i].toUpperCase()
}
console.log(colours);

//23
colours.push("yellow","purple"," brown")
console.log(colours);


//4
let mixed = [2,"spaghetti",true]
console.log(mixed[1]);




//5,12,20

let seasons = new Array("spring","summer","autumn","winter")
//console.log(seasons[-1]);

//20 workings
let seasonHolder = seasons[seasons.length-1]
console.log(seasonHolder);

seasons[seasons.length-1] = seasons[0]

console.log(seasons[seasons.length-1]);


seasons[0] = seasonHolder
console.log(seasons);



    //6 Write a statement to print the length of the numbers array. Hint: Use the length property of the array.

let dynamic = [1,2,3,4,5,]
dynamic.push(6)
    console.log(dynamic.length)

dynamic.pop()
    console.log(dynamic.length)

    //7 Create an array emptyCheck and write an if statement to check if it's empty. Hint: An empty array has a length of 0.
let emptyArray =[]
let empty = emptyArray.length ===0
console.log(empty);

    //8 Initialize an array dynamic with 5 elements and print its length. Hint: The length will be equal to the number of elements.
//see Q6
    //9 Add an element to dynamic and print the new length. Hint: Adding an element increases the length by 1.

//see Q6


    //10 Remove an element from dynamic and print the updated length. Hint: Removing an element decreases the length by 1.
//see Q6


//24

let blank =[]
for(i=0;i<=4;i++){
    blank[i] = blank.push(i+1)
}
console.log(blank);

//25