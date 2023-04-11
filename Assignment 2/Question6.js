//Question 6
// I clear local storage because ther eso many object so hard to access specific key.
localStorage.clear();
function saveToLocalStorage(key,obj){
    if (!key || !obj) {
        console.error("Key and object are not entered or Invalid.");
        return;
    }
    const stringJson = JSON.stringify(obj);
    localStorage.setItem(key,stringJson);
}

const profile = {name : "Farzaam", age : "20", occupation : "student"};

saveToLocalStorage("myInfo",profile);