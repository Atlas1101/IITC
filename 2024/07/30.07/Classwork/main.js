"use strict";

// // loop for 1-20

// function countToTwenty(){
// for(let i=1;i<=20;i++){
//     console.log(`i: ${i}`);
// }

// }
// countToTwenty()

// function countToFrom(from,to){
//     for (let i =from; i <=to;i++)
//             console.log(`i: ${i}`);



// }
// countToFrom(1,5)


// function calc(){
// let sum = 0
// //for (let i =1; i<=3;i++){
//  for(let i = from; i<=to;i++)   
//     sum+=i



// }
// console.log("sum", sum);

// calc(1,3),

// calc(3,5)




//----------------------------------------------------------------------
//nested loops

function countChar(str,char){
    let count = 0;
for(let i=0; i< str.length; i++){
    let currentChar= str[i];
    if(char === currentChar) {
        count++;
    }
}
    // if(char=== str[i]){
    //     count ++
    // }




console.log(`count of ${char}: ${count} in  ${str}`);
}
countChar("hello","l")


// count char in strings array


function countCharInArray(elements, chari){

    let count = 0;

    for(let i=0;i <elements.length; i++){
        let currentElement = elements[i]
        for(let j = 0; j <currentElement.length; j++){
            let currentChar = currentElement[j]
            if(chari === currentChar){
                count ++
            }
        }
    }
    console.log(`count of ${chari}: ${count} `);
}


let names= ["sasha" , "omer" , "sason" , "shai" , "s"]
countCharInArray(names, "s")

///////////////////////////////////////////////////////////////////////

function sumInArray(nums){
let count = 0

for(let i = 0; i< nums.length;i++){
    console.log("i",i);
    let currentNumber = nums[i]
    console.log("currentNumber", currentNumber);
    count+= currentNumber;
    
}

console.log(`count is: ${count}`);
}
let numbers  =  [3,4,12]
sumInArray(numbers)


/////////////////////////////////////////////////////////////////////
function sumNestedNumbersArrays(nesetedNumbers){
    let sum = 0
for(let i = 0; i<nesetedNumbers.length;i++){
    let currentArray = nesetedNumbers[i]

    console.log("currentArray:", currentArray);
    for(let j = 0; j <currentArray.length; j++){
        let currentNum = currentArray[j]
        
    console.log("currentNum:", currentNum);
    sum = sum+ currentNum
    sum += currentNum
    console.log("sum",sum);
    }
        
}

    console.log(`sum is: ${sum}`);

}

sumNestedNumbersArrays([[5,2], [3,20,10], [1]])





