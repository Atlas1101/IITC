//1 Comparison operators are used in logical statements to determine equality or difference between variables or values. The two types I believe the question refers to are "comparison" and "strict comparison" 
console.log(4+3)

//2 == checks for equality but not type (if the two things being compared are different types it does type coercion). "===" checks for both value and type.

//3 "!=" & "!=="s

//4 Greater than

//5 Less than

//6 >=
//7<=

//8 true

//9 true

//10 true

//11 
let string = "cheese "
let stringier = "stringierCheese"

console.log("string">"stringier")
console.log("string"<"stringier")

let stringa = "a"
let stringb = "b"
let stringc = "c"

let stringaa = "aa"
let stringab = "ab"
//It runs alphabetically subsequent letters are greater than their predecessor (the letters a processed by their unicode
console.log(stringa>stringb)
console.log(stringa<stringb)
console.log(stringb>stringc)
console.log(stringb<stringc)
console.log("if the first letter is the same it proceeds to the next")
console.log(stringaa<stringab)
console.log(stringaa>stringab)

//12
let stringapp = "apple"
let stringban = "banana"

console.log(stringapp<stringban)
console.log(stringapp>stringban)

//13
//!== means strictly not equal

//14
console.log(5!=="5")
//it proves to be true because an integer is being compared to a string as !== compares both value and type not equal proves to be true.
//The following should prove as true as it only compares value
console.log(5=="5")

//15
//Js will attempt to covert strings intp numbers true and false will be converted to one and zero. If it is unable to perform type coercion there are some cases where it will out put Nan(not a number)





