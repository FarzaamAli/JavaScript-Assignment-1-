//Question 1
function addnum (numToAdd){
    return function(num){
        return num + numToAdd;
    }
}

let add5 = addnum(5);
let result = add5(15);
console.log(result);