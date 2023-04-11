//Question 7
localStorage.clear();
function getFromLocalStorage(key){
    const dataJson = localStorage.getItem(key);
    if(!dataJson){
        console.error("No data found of key : " + key);
    } 
    const data = JSON.parse(dataJson);
    return data;
}

let myinfo = getFromLocalStorage("myInfo");
console.log(myinfo);