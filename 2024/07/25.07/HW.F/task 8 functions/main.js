//1
function greet(){
console.log("Hello, World")

}
greet()

//2
let number =4;
let squared = 0;
function square(number){
let squared = number*number;
return squared;
}
squared = square(number);
console.log(squared);

//3
let oddEven =4;

function isEven(oddEven){
let oddOrEven = oddEven%2;
let    definitelyEven  = oddOrEven === 0;
return definitelyEven;
}
let definitelyEven = isEven(oddEven);
console.log(definitelyEven);

//4
let firstName = "Smithson"
let lastName = "Bob"

function getFullName(firstName,lastName){
let theFullName = `The name is ${firstName},${lastName} ${firstName} `
return theFullName
}
let theFullName = getFullName(firstName,lastName)
console.log(theFullName);

//5
let numberOne =6;
let numberTwo =4;
function sumTwo(numberOne,numberTwo){
return numberOne + numberTwo;

}
let theSum = sumTwo(numberOne,numberTwo);
console.log(theSum);

//6
let numberThree = 2;
let numberFour = 4;

function multiply(numberThree,numberFour){
    return numberThree*numberFour
}
let theMultiplier = multiply(numberThree,numberFour)
console.log(theMultiplier);

//7 see question 4

//8 
let absoluteNumber = 12312
function getAbsoluteValue(absoluteNumber){

  return  Math.abs(absoluteNumber)
  
}
let theAbsoluter = getAbsoluteValue(absoluteNumber)
console.log(theAbsoluter);

//9
let numberA = 3;
let numberB = 5;
function calculateAverage(numberA,numberB){
let addedNumbers = numberA+ numberB;
 return addedNumbers/2;
}
let averager = calculateAverage(numberA,numberB);
console.log(averager);

//10
let sentence ="the quick brown fox";
function convertToUpperCase(sentence){
    return sentence.toUpperCase();

}
let upper = convertToUpperCase(sentence);
console.log(upper);

//11
let numberAA =12

function isPositive(numberAA){
 let isPositive = numberAA>0;
 return isPositive;

}

let positiver = isPositive(numberAA);
console.log(positiver);

//12
let word = "Babara";
function getFirstChar(word){
return word.charAt(0);


}
let firstLetter =getFirstChar(word)
console.log(firstLetter);

//13 see question 6

//14

let numberS =12
let numberD =11.9
function remainderDivision(numberS,numberD){
    return numberS% numberD


}
let remiander = remainderDivision(numberS,numberD)
console.log(remiander);

//15
 let value = "fef"
function logType(value){
return typeof value

}
let whatisit = logType(value)
console.log(whatisit);

//16
let boolean = false
function invertBoolean(boolean){
 return !boolean

}
let invertB =invertBoolean(boolean)
console.log(invertB);

//17 
let stringOne = "oh "
let stringTwo = "wow"

function concatenateStrings(stringOne,stringTwo){
 return stringOne + stringTwo

}
let addedStrings = concatenateStrings(stringOne,stringTwo)
console.log(addedStrings);

//18
let numberZ = 111
let numberX = 12
function findSmaller(numberZ,numberX){
    if(numberZ>numberX){ return numberX}
        if(numberZ<numberX){ return numberZ}


}
let smaller = findSmaller(numberZ,numberX)
console.log(smaller);

//19

let firstNameA = "Smithson";
let lastNameA = undefined

function getFullName(firstNameA,lastNameA){
    if (firstNameA ===undefined || lastNameA === undefined){
        firstNameA = "Guest" ;
        lastNameA = "A";
    }
let theFullNameA = `The name is ${firstNameA},${lastNameA} ${firstNameA} `
return theFullNameA;
}
let theFullNameA = getFullName(firstNameA,lastNameA);
console.log(theFullNameA);


//20

 let longstring = "feasdasdasdasdasdf"
function isLongString(longstring){
let length =longstring.length
let isLong = length>10
return isLong
}
let howlong = " Woah that string is long = "+isLongString(longstring)
console.log(howlong);
