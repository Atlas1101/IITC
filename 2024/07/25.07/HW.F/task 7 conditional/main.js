//1
let age = 12
let canVote = (age >= 18)
console.log(canVote);

//2
let temperature = -12;
let weather = "";
if (temperature < 0) {
    weather = "Freezing"
}
else {
    weather = "Not freezing"

}

console.log(weather);

//3

let score = 60
let result = ""
if (score >= 60) {
    result = "Pass"
} else {
    result = "Fail"
}

console.log(result);

//4

let grade = 80
let letterGrade = ""
if (grade >= 90) {
    result = "A"
} else if (grade >= 80) {
    result = "B"
} else result = "C"

console.log(result);

//5
let number = 33
let evenSteven = number % 2
let isEven = undefined
if (evenSteven === 0) {
    isEven = true

} else {
    isEven = false
}

console.log(isEven);

//6
let year = 40
let leaper = year % 4
let isLeapYear = undefined
if (leaper === 0) {
    isLeapYear = true

} else {
    isLeapYear = false
}

console.log(isLeapYear);

//7


let hour = 23;
let period = undefined;
if (hour < 12) {
    period = "AM";

} else {
    period = "PM";
}

console.log(period);

//8

let dayNumber = 7
let dayName = undefined

if (dayNumber === 1) {
    dayName = "Sunday";
} else if (dayNumber === 2) {
    dayName = "Monday"
} else if (dayNumber === 3) {
    dayName = "Tuesday";
} else if (dayNumber === 4) {
    dayName = "Wednesday";
} else if (dayNumber === 5) {
    dayName = "Thursday";
} else if (dayNumber === 6) {
    dayName = "Friday";
} else if (dayNumber === 7) {
    dayName = "Saturday";
} else {
    dayName = "Invalid day number";
}
console.log(dayName);

//9

let nameA = "das"
let hasName = undefined
if (nameA === "") {
    hasName = false

} else {
    hasName = true
}

console.log(hasName);

//10

let amount = 23;
let shipping = undefined;
if (amount > 1000) {
    shipping = 0;

} else {
    shipping = 5;
}

console.log(shipping);

//11
let password = "secret123"
let isLoggedIn = undefined
if (password === "secret12s3") {
    isLoggedIn = true

} else {
    isLoggedIn = false
}

console.log(isLoggedIn);

//12

let month = "June"
let season = ""

if (month === "January" || month === "February" || month === "December") {
    season = "WINTER"

} else if (month === "March" || month === "April" || month === "May") {
    season = "SPRING"

} else if (month === "June" || month === "July" || month === "August") {
    season = "SUMMER"

} else if (month === "September" || month === "October" || month === "November") {
    season = "Autumn"
} else season = "Invalid Month"

console.log(season)

//13
let income = 1203;
let creditScore = 12322;
let loanApproved = true;

if (income > 5000 && creditScore > 700) {
    loanApproved = true;
} else {
    loanApproved = false;
}
console.log(loanApproved);

//14
let ageA = 12
let discount = 0
if (ageA < 18 || ageA > 65) {
    discount = 0.2
}
else { discount = 0 }
console.log(discount);

//15
let numberA = 12
let inRange = false
if (numberA >= 1 && numberA <= 10) {
    inRange = true
}
else { inRange = false }
console.log(inRange);

//16
dayNumberA = 7;
switch (dayNumberA) {
    case 1:
        day = "Sunday";
        console.log("Sunday");
        break;
    case 2:
        day = "Monday";
        console.log("Monday");
        break;
    case 3:
        day = "Tuesday";
        console.log("Tuesday");
        break;
    case 4:
        day = "Wednesday";
        console.log("Wednesday")
        break;
    case 5:
        day = "Thursday";
        console.log("Thursday");
        break;
    case 6:
        day = "Friday";
        console.log("Friday");
        break;
    case 7:
        day = "Saturday";
        console.log("Saturday");
}

//17
let gradeA = "E"
switch (gradeA) {
    case "A":
        console.log("Wowowow");
        break;
    case "B":
        console.log("Wow");
        break;
    case "C":
        console.log("Wowish");
        break;
    case "D":
        console.log("Not so wow");
        break;
    case "E":
        console.log("Not wow at all");
        break;
    case "F":
        console.log("Anti wow");
        break;

}

//18
let numberB = 0
sign = ""

if (numberB < 0) {
    sign = "-ve"
} else if (numberB === 0) {
    sign = " 0 "
} else if (numberB > 0) {
    sign = "+ve"
}
console.log(sign);

//19

let yearA = 1220
let isCenturyLeapYear = false
if (yearA % 100 === 0 && yearA % 400 === 0) {
    isCenturyLeapYear = true
} else {
    isCenturyLeapYear = false
}
console.log(isCenturyLeapYear);

//20
let monthA = 2;
let daysInMonth = "";

switch (monthA) {
    case 1:
        daysInMonth = 31;
        break;
    case 2:
        daysInMonth = 28;
        break;
    case 3:
        daysInMonth = 31;
        break;
    case 4:
        daysInMonth = 30;
        break;
    case 5:
        daysInMonth = 31;
        break;
    case 6:
        daysInMonth = 30;
        break;
    case 7:
        daysInMonth = 31;
        break;
    case 8:
        daysInMonth = 31;
        break;
    case 9:
        daysInMonth = 30;
        break;
    case 10:
        daysInMonth = 31;
        break;
    case 11:
        daysInMonth = 30;
        break;
    case 12:
        daysInMonth = 31;
        break;
    default:
        daysInMonth = "Invalid month";
}

console.log(daysInMonth);

//21
let numberC = 0
sign = ""

if (numberC <= 0) {
    if (numberC === 0) {
        sign = "0"
    } else { sign = "-ve" }
} else sign = "+ve"

//22

let scoreA = 22
let attendance = 79
let gradeB = ""
if (scoreA < 80) {
    gradeB = "your work is un-gradable"

} else if (scoreA >= 90) {
    if (attendance < 80) {
        gradeB = "B- A grade lower due to poor attendance"
    } else gradeB = "A - well deserved grade"
}
else if (scoreA >= 80 && scoreA < 90) {
    if (attendance < 80) {
        gradeB = "C -A grade lower due to poor attendance"
    } else gradeB = "B -A well deserved grade"
}
console.log(gradeB);

//23 see question 19

//24
let personAge = 74;
let employment = "employed";
let category = "";

if (personAge <= 24) {
    if (employment === "unemployed") {
        category = "Student";
    } else category = " Young worker";
}


if (personAge >= 25 && personAge <= 70) {
    if (employment === "unemployed") {
        category = "Unemployed Adult";
    } else category = " Employed Adult";
}


if (personAge >= 71) {
    if (employment === "unemployed") {
        category = "Retiree";
    } else category = "No rest for the wicked";
}
console.log(category);


//25

let monthB = 4;
let seasonA = "";

switch (monthB) {
    case 12:
    case 1:
    case 2:
        seasonA = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        seasonA = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        seasonA = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        seasonA = "Autumn";
        break;
    default:
        seasonA = "Invalid month";
}

console.log(seasonA);

//26
let xx = 1
let yy = 2
let quadrant =0

if (xx>0 && yy>0){
    quadrant = 2
} else if (xx>0 && yy<0){
    quadrant = 1
}else if (xx<0 && yy<0){
    quadrant = 3

}else if (xx<0 && yy>0){
    quadrant = 4
}else if (xx===0 || yy===0){
    quadrant = 1234


//27
let temp= ""
let pressure = ""
let state =""


if (pressure === "High") {
    if (temp === "High") {
        state = "gas";
    } else if (temp === "Low") {
        state = "solid";
    } else if (temp === "Medium") {
        state = "liquid";
    }
} else if (pressure === "Low") {
    if (temp === "High") {
        state = "gas";
    } else if (temp === "Low") {
        state = "solid";
    } else if (temp === "Medium") {
        state = "liquid";
    }
} else {
    state = "Unknown pressure";
}
}

console.log(state);

//28 see question 20

//29


