//Question 3
let number1 = parseInt(prompt("Enter Number 1 :"));
let number2 = parseInt(prompt("Enter Number 2 :"));
let number3 = parseInt(prompt("Enter Number 3 :"));
let number4 = parseInt(prompt("Enter Number 4 :"));
let number5 = parseInt(prompt("Enter Number 5 :"));


if((number1>number2) && (number>number3) && (number1>number4) && (number1>number5))
    {
    console.log("Number 1 : '" + number1 + "' is greatest");
}
else if((number2>number1) && (number2>number3) && (number2>number4) && (number2>number5)){
    console.log("Number 2 : '" + number2 + "' is greatest");
}
else if((number3>number1) && (number3>number2) && (number3>number4) && (number3>number5)){
    console.log("Number 3 : '" + number3 + "' is greatest");
}
else if((number4>number1) && (number4>number2) && (number4>number3) && (number4>number5)){
    console.log("Number 4 : '" + number4 + "' is greatest");
}
else if((number5>number1) && (number5>number2) && (number5>number4) && (number5>number3)){
    console.log("Number 5 : '" + number5 + "' is greatest");
}
else{
    console.log("ALL ARE EQUAL!!");
}
