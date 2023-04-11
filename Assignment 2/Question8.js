//Question 8

localStorage.clear();
let profile = {
    name : "Farzaam",
    age : 20,
    profession : "student"
}

function saveToLocalStorageAsIndiviual(obj){
    if (typeof obj !== 'object' || obj === null) {
       console.error('Invalid Object!');
    }
    for(let item in obj){
        localStorage.setItem(item,JSON.stringify(obj[item]));
    }
    
    const newObj = {};
    for (let x = 0; x < localStorage.length; x++){
        const key = localStorage.key(x);
        newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
}




let newProfile = saveToLocalStorageAsIndiviual(profile);
console.log(newProfile);

