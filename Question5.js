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