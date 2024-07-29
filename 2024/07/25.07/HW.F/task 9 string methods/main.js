//1

let string = "feassdasdasdf"
function stringLength(string){

   return string.length
}
let theLength = stringLength(string)
console.log(theLength);

//2
let stringA = "sfdgsdfg"
function stringUpper(stringA){
    
   return stringA.toUpperCase()
}
let theUpper = stringUpper(stringA)
console.log(theUpper);

//3

let stringB = "AFDGADFGS";

function stringLower(stringB) {
   return stringB.toLowerCase();
}

let theLower = stringLower(stringB);
console.log(theLower);

//4

let word = "Babara";
function getFirstChar(word){
return word.charAt(0);


}
let firstLetter =getFirstChar(word)
console.log(firstLetter);

//5

let wordA = "Babara";
function substring(wordA){
return wordA.substring(1,4);


}
let substr =substring(wordA)
console.log(substr);

//6
let wordReplace = "tomatoes are vegetables"
function replacer(wordReplace){
return wordReplace.replace("vegetables", "fruit")
}
let replaced = replacer(wordReplace)
console.log(replaced);

//7

let whiteSpace = "      SPACE      "
function noSpace(whiteSpace){
return whiteSpace.trim();
}
let trimmedString = noSpace(whiteSpace);
console.log(trimmedString);

//8 & 9

let ender = "cabbage"
function whatIsTheEnd(ender){
return ender.endsWith("e")
//return ender.startsWith("c")

}
let endsWithE = whatIsTheEnd(ender);
console.log(endsWithE);
///let startsWithE = whatIsTheEnd(ender);
//10

let indexer= "aaaaaaaaaaba"

function indexA(indexer){
    return indexer.indexOf("b")

}
let indexed = indexA(indexer)
console.log(indexed); 

//11

let toBeSplit = "apple-orange-banana-peach"
function splitter(toBeSplit){
return toBeSplit.split("-")

}
let splitted = splitter(toBeSplit)
console.log(splitted);

//12
let toRepeat = "are we there yet, "
function repeater(toRepeat){
    return toRepeat.repeat(6)
}
let reper = repeater(toRepeat)
console.log(reper);

//13 let firstName = "Smithson"
let lastName = "Bob"
let firstName = "Bobby"
function getFullName(firstName,lastName){
let theFullName = `The name is ${firstName},${lastName} ${firstName} `
return theFullName
}
let theFullName = getFullName(firstName,lastName)
console.log(theFullName);

//14
let needPadding = "M"
function padder(needPadding){
    return needPadding.padStart(10,"O").padEnd(20,"G")
}
let padded = padder(needPadding)
console.log(padded);

//15
let needSlicing = "BREAD!!!!"
function slicer(needSlicing){
    return needSlicing.slice(1)

}
let sliced = slicer(needSlicing)
console.log(sliced);

//16

let wordReplaceOne = "tea, tea, tea, tea, tea, tea,"
function replacer(wordReplaceOne){
return wordReplaceOne.replace("tea", "coffee")
}
let replacee = replacer(wordReplaceOne)
console.log(replacee);

//17
let included = "aaaaabcccccccccc"
function include(included){
return included.includes("a")
}
let itIncludes = include(included)
console.log(itIncludes);

//18 
let lastLetter = "aaaaaaaaaaaaaaaaaab"
function laster(lastLetter){
    return lastLetter.slice(-1)
    
}
let last = laster(lastLetter)
console.log(last);


//19

let stringer = ""
function empty(stringer){
let howLong = stringer.length
return howLong ===0

}
let emptyStr = empty(stringer)
console.log(emptyStr);s

//20
let sliceAgain = "more bread"

function precisionSlicer(sliceAgain){
    return sliceAgain.slice(5,10)
}
let nowsliced = precisionSlicer(sliceAgain)
console.log(nowsliced); 

