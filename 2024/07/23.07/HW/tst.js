let firstName = "Aharon";

let lastName = "Cohen";

let age = 26;

let isStudent = true;

let isAdult = (age>=18);
console.log("isAdult is", isAdult);

let isJohn = firstName === "John";
console.log("is John is",isJohn);
console.log(`is John ${isJohn}`);


function greeta(firstName, lastName){
let fullName = firstName.toUpperCase() + " "+lastName.toUpperCase();
return(`Hello ${fullName}! Welcome to the IITC Bootcamp`);
}
console.log(greeta("Aharon","Cohen"));


function greet(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return "Hello "+ fullName +"! Welcome to the IITC Bootcamp." ;
}
let x= greet("aharon","cohen");
console.log(x);


function checkAge(age){
if (age<13){
  return("You are a child");

}else if (age>=13 && age<=17){
  return("You are a teenager");

}else if(age>=18 && age <=64){
  return("You are an adult");

}else{
  return("You are a senior");
}
}
console.log(checkAge(12))
console.log(checkAge(17))
console.log(checkAge(24))
console.log(checkAge(90))