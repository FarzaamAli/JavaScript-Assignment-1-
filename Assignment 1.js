//Question 1
console.log("Question 1 : ");
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

//Question 2
let num3 = prompt("Enter a number : ");
if(Number(num3)>=0){
    alert("The sign is : +");
}else{
    alert("The sign is : -");
}


//Question 3
console.log("Question 3 : ");
let number1 = parseInt(prompt("Enter Number 1 :"));
let number2 = parseInt(prompt("Enter Number 2 :"));
let number3 = parseInt(prompt("Enter Number 3 :"));
let number4 = parseInt(prompt("Enter Number 4 :"));
let number5 = parseInt(prompt("Enter Number 5 :"));

if((number1>number2) && (number1>number3) && (number1>number4) && (number1>number5))
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

//Question 4
console.log("Question 4 : ");
for(let x = 0; x <= 15; x++){
    if(x % 2 == 0){
        console.log('"' + x + ' is even"');
    }else{
        console.log('"' + x + ' is odd"');
    }
}

//Question 5
console.log("Question 5 : ");
let sub1 = parseInt(prompt("Enter Number of subject 1 :"));
let sub2 = parseInt(prompt("Enter Number of subject 2 :"));
let sub3 = parseInt(prompt("Enter Number of subject 3 :"));
let sub4 = parseInt(prompt("Enter Number of subject 4 :"));
let sub5 = parseInt(prompt("Enter Number of subject 5 :"));

let sum = (sub1 + sub2 + sub3 + sub4 + sub5);
let avg = sum / 5;


if((avg<=100) && (avg>90)){
    console.log("The Grade is A");
}
else if((avg<=90) && (avg>80)){
    console.log("The Grade is B");
}
else if((avg<=80) && (avg>70)){
    console.log("The Grade is C");
}
else if((avg<=70) && (avg>60)){
    console.log("The Grade is D");
}
else if((avg<=60)){
    console.log("The Grade is F");
}

//Question 6
console.log("Question 6 : ");
for(let x = 0; x<=100; x++){
    if((x % 5 == 0) && (x % 3 == 0)){
        console.log("Fizz");
    }
    else if(x % 5 == 0){
        console.log("Buzz");
    }
    else if(x % 3 == 0){
        console.log("FizzBuzz");
    }
    else{
        console.log(x);
    }

}

//Question 7 
console.log("Question 7 : ");
let NoOfLines = prompt("Enter how much lines you want to print");
let myString = "" ;
for(let x = 0; x <= (Number(NoOfLines)); x++){
    for(let y = 0; y < x; y++){
        myString += "*";
    }
    myString += "\n";
}
console.log(myString);