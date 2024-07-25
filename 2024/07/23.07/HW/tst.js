let firstName = "Aharon";

let lastName = "Cohen";

let age = 26;

let isStudent = true;

//-----------------------------------------------------------------------

let isAdult = (age>=18);
console.log("isAdult is", isAdult);

//-----------------------------------------------------------------------

let isJohn = firstName === "John";
console.log("is John is",isJohn);
console.log(`is John ${isJohn}`);


//-----------------------------------------------------------------------
// Functions and String Methods

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


//-----------------------------------------------------------------------
//If and Else:

function checkAge(age){
if (age<13){
  return"You are a child";

}else if (age>=13 && age<=17){
  return"You are a teenager";

}else if(age>=18 && age <=64){
  return"You are an adult";

}else if(age>64){
  return"You are a senior";
}
}
console.log(checkAge(12));
console.log(checkAge(17));
console.log(checkAge(24));
console.log(checkAge(90));


//-----------------------------------------------------------------------
//Switch Statement:

function getDayMessage(dayOfWeek){
  switch(dayOfWeek){
  case "Monday":
  return "Today is Monday";
  break;

  case "Tuesday":
  return "Today is Tuesday";
  break;

  case "Wednesday":
  return"Today is Wednesday";
  break;

  case "Thursday":
  return"Today is Thursday";
  break;

  case "Friday":
  return"Today is Friday";
  break;

  case "Saturday":
  return"Today is Saturday";
  break;

  case "Sunday":
  return"Today is Sunday";
  break;

  default:
   return"Invalid day";
}
}
console.log(getDayMessage("Monday"));



//-----------------------------------------------------------------------


//Complex Conditions:


function checkEligibility(age, isStudent){

if (age<18 && isStudent){
  return"You are a minor student.";

}else if (age<18 && !isStudent){
  return"You are a minor non-student.";

}else if(age>=18 && age <=24 && isStudent){
  return"You are a young adult student.";

}else if(age>=18 && age <=24 && !isStudent){
  return"You are a young adult non-student.";

}else if(age>=25 && isStudent){
  return"You are an adult student.";

}else if(age>=25 && !isStudent){
  return"You are an adult non-student.";
}
}
//here it takes the isStudent variable from the global scope
console.log(checkEligibility(21,!isStudent));
//here it doesn't
console.log(checkEligibility(21,false));



//-----------------------------------------------------------------------
//String Comparison and Manipulation:
function formatName(name){

  let nameTrimmed =name.trim();
  let nameTrimmedLowered =nameTrimmed.toLowerCase();

  if (nameTrimmedLowered === "admin"){
  return "Welcome, Admin!";
  
  }else return `Hello, ${nameTrimmedLowered}!`;

}
console.log(formatName("                   adMin               "));




function formatNamea(name){

  if (name.toLowerCase().trim() === "admin"){
  return "Welcome, Admin!";
  
  }else return `Hello, ${name.toLowerCase().trim()}!`;

}
console.log(formatNamea("   BRIAN"));

//-----------------------------------------------------------------------
//Nested If Statements:
let isMember = true;



function checkDiscount(age,isMember){

  if (age<18){
    if(isMember){
    return "You get a 20% discount!";
    }
    else{
    return "You get a 10% discount!";
    }
  }


  else if (age>=18 && age <=64){
    if(isMember){
    return "You get a 10% discount!";
  }
  else{
  return "No discount for you!";
  }
}

  else if (age>=65){
    if(isMember){
    return "You get a 30% discount!";
    }
    else{
    return "You get a 20% discount!";
  }
}
}

console.log(checkDiscount(9,true));
console.log(checkDiscount(9,false));
console.log(checkDiscount(19,true));
console.log(checkDiscount(19,false));
console.log(checkDiscount(69,true));
console.log(checkDiscount(69,false));



//-----------------------------------------------------------------------
//Login Validation:
function validateLogin(username,password){

const storedUsername = "ImTheCorrectUsername";
const storedPassword = "superSecretPassword";

if(username === storedUsername && password === storedPassword)
  return "Login Successful!!!!!!!!!";
else{ return "Invalid username or password";
}
}

console.log(validateLogin("ImTheCorrectUsername","superSecretPassword"));

console.log(validateLogin("ImNotTheCorrectUsername","superSecretPassword"));

console.log(validateLogin("ImTheCorrectUsername","NotSoSecretPassword"));

console.log(validateLogin("wait","what?"));



//---------------------------------------------------------------------
// Substring Extraction:

function extractInitials(firstName,lastName){
return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;

}
console.log(extractInitials("james","bond"));



//-----------------------------------------------------------------------
//String Replacement:
let email = "example@example.com";

function emailMask(email) {
//Finds the index of "@"
const whereAt = email.indexOf('@');
//Creates a substring from the first letter of the email to @-index
const atIndex = email.substring(0,whereAt);
//replaces the created substring with "*****"
const masker = email.replace(atIndex,"*****");
return (masker)
}


console.log(emailMask("asdqwdqdss@hotmail.com"));
console.log(emailMask("asdqwdqdss@hottermail.com"));

//-----------------------------------------------------------------
// Nested if else
function gradeCalculator(score){
  if (score >=90){
      return "A";
    } else if (score >=80){ 
      return "B";
    } else if (score >=70){
      return "C";
    } else if (score >=60){
      return "D";
      }
else return "F";
}
console.log(gradeCalculator(91));
console.log(gradeCalculator(81));
console.log(gradeCalculator(71));
console.log(gradeCalculator(60));
console.log(gradeCalculator(22));

//---------------------------------------------------------------------
//complex boolean conditions
let  isCitizen = true
function canVote(age,isCitizen){
  if(age >=18 && isCitizen){
    return "You are eligible to vote"}
  else return "You are not eligible to vote"
}
console.log(canVote(12,isCitizen));
console.log(canVote(18,isCitizen));
console.log(canVote(12,!isCitizen));
console.log(canVote(18,!isCitizen));

//--------------------------------------------------------------------
// String number conversion

function convertToUpperCaseAndAddAge(aName,age){

let capitalize = aName.toUpperCase();
let numString = age.toString();
let nage = `${capitalize}${numString}`
return nage
}

console.log(convertToUpperCaseAndAddAge("fork",400))

//-----------------------------------------------------------------------
//Capitalize first letter

let word ="dog"
function capitalize(word){
let firstLtr = word.charAt()
let captLtr = firstLtr.toUpperCase()
let restOf = word.substring(1,)
return `${captLtr}${restOf}`


}
console.log(capitalize("cabbage"))

//-----------------------------------------------------------------
// Check substring


function containsSubstring(mainString,subString){

  let detector = mainString.includes(subString)

return "Substring found:"+ detector
}
console.log(containsSubstring("cabbages","abba"));