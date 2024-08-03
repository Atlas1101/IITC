console.log("test");
//1
for(let i = 1;i<=5;i++){
    let thing = ""

    for(j=1;j<=i;j++){
        thing +="*";
    }
    console.log(thing);
}

//2

for (let i = 1; i<=10; i++){
    let row = "" 
    for(j=1;j<=10;j++){
        row += i*j+" "


        
        
    }
   row += "\n"

   console.log(row);
}

//3 when setting loop condition with arrays, dont use <= only < as arrays are zero based index so the loop would run an extra time on <= and give an out of bounds error
function finder(target){
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

for (let i = 0; i<arr.length; i++){
  
   
    for(j=0; j<arr[i].length; j++){
         if (arr[i][j] === target){
            console.log(`${target} = found at position :[${i}] [${j}]`);
            return
         }
    }
    
}
}
finder(8)

//4 
function letterSorter(input){
    let vowels = "aeiouAEIOU"
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let i = 0; i<input.length; i++){
        let letter = input[i]
        let isVowel= false
        //console.log(input[i]);
        
        for(j=0; j<vowels.length; j++){
            //console.log(vowels[j]);
            let vowelLetter = vowels[j]
            if (letter === vowelLetter){
                vowelCount += 1
                isVowel = true
                break
            
            }
            
            

    }
    if (!isVowel){
                consonantCount += 1
            }
}
console.log(`vowel count = ${vowelCount} consonanat count = ${consonantCount}`);
}
letterSorter("abarakadabraaa")
console.log("sdfsd");










////////////////////////////////////////////////////////////////////////




//1
    for (let i = 0; i<1; i++){

        let row= ""


        for(j=0;j<=1;j++){

        row ="* *"

        console.log(row);
}
 
}


function gridBuilder(g){


    let grid= ""


 for (let i = 0; i<=g; i++){



        for(j=0;j<=g;j++){

        grid =" * "

    }
    
    grid += "\n"
    console.log(gridBuilder);
}
}
gridBuilder(10)



//2

    for (let i = 0; i<=1; i++){

        let row=""



        for(j=0;j<2;j++){
            let counter =i+1
        row +=1

        console.log(counter+row);
}
 
}



