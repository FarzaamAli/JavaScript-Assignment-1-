//Question 1
console.log("Question 1 : ")
let num1 = prompt("Enter a number : ");
let num2 = prompt("Enter a second number : ");
if(Number(num1)>Number(num2)){
    console.log("Number 1 : '" + num1 + "' is greater");
}
else if(Number(num2)>Number(num1)){
    console.log("Number 2 : '" + num2 + "' is greater");
}
else{
    console.log("Both Numbers are equal")
}