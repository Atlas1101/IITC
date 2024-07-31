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

// tar pattern

function starPattern(){

    for(let i =1; i<=5; i++){
        let stars="";
        for(let j =1; j <=i; j++){
            stars+= "*"
        }
        console.log(stars,i);
    }
}
starPattern()

////////////////////////////////////////////////////////////////////

function makeMultiTable(){

    for(let i=1; i<=10;i++){
   let row = ""
    for(let j = 1;j<=10;j++){
        row += i*j + " "
    }
    console.log(row);

}
}
makeMultiTable()


//2d array

function searchInArray(array_2D,target){
    let row =-1
    let col =-1
for(let i=0; i < array_2D.length; i++){
    let currentArray = array_2D[i];
console.log("current array", currentArray);

    for(let j=0; j< currentArray.length; j++){
        let currentNumber = currentArray[j]
    console.log("current number : ",currentNumber);
    if (currentNumber === target){
        row = i
        col = j
        break;
    }

}
if (row !== -1 && col !== -1){
    break;
}
}

console.log(`for target ${target}, output: Found at position (${row},${col})`);
}

let arr =[[1,2,3,],[4,5,6],[7,8,9],]
searchInArray(arr,4)



//////////////////////////////////////////////////

function vowelConsonantCounter(string){
    let consonantCount = 0

for(let i=0;i <=string.length-1; i++){
    
    let letter = string[i]
    console.log(letter);
    let vowels = ["a", "e" ,"i","o","u","A","E","I","O","U"]
    if(letter === vowels.includes(letter)){
        consonantCount +=1
        console.log(consonantCount);
    }
}
        


    for(let j=0; j<=letter.length;j++){
        let currentConsanent = letter[j]
        console.log(currentConsanent);
           let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    if(currentConsanent !== vowels){
        
               


        if(currentConsonent === vowels)
             consonantcount = consonant + currentNum

            sum += currentNum
    }





vowelConsonantCounter("abra")



// function vowelConsonantCounter(string){
//     let consonantCount = 0

// for(let i=0;i <=string.length; i++){
    
//     let letter = string[i]
//     console.log(letter);



//     for(let j=0; j<=vowels.length;j++){
//         let currentConsanent = letter[j]
//         console.log(currentConsanent);
//            let vowels = ["a","e","i","o","u","A","E","I","O","U"]
//     if(currentConsanent !== vowels){
        
               


        // if(currentConsonent === vowels)
        //      consonantcount = consonant + currentNum

        //     sum += currentNum
//     }


// }

// }
// }
// vowelConsonantCounter("abra")



//11 Instructions:
// Take a string as input.
// Use nested loops to compare characters from the beginning and end of the string.
// Print whether the string is a palindrome.
// Example Output:
// For input = "radar", output: Palindrome
// For input = "hello", output: Not a palindrome

function isPalindrome(str){
    
for(let i = 0 ;i< str.length; i++){
    let length = str.length
   for(let j = 0 ; j < 1 ;j++){
    if (str[i] !== str[length -1 - i]){
        return false
    }
   }
}

return true

}
console.log( isPalindrome("racecar"))
