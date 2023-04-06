let NoOfLines = prompt("Enter how much lines you want to print");
let myString = "" ;
for(let x = 0; x <= (Number(NoOfLines)); x++){
    for(let y = 0; y < x; y++){
        myString += "*";
    }
    myString += "\n";
}
console.log(myString);