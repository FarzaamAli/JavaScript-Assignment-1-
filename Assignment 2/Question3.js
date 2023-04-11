//Question 3 

//Option 1
function createPara(myString){
    let myDiv = document.getElementById("addPara");
    myDiv.style.position = "absolute";
    myDiv.style.bottom = "0px";
    myDiv.style.fontSize = "30px";

    myDiv.innerHTML = `<p><b>${myString}</b></p>`;
}

createPara("hi this is new para");

//OPtion 2
function createNewPara(mystring){

    let newPara = document.createElement("p");
    newPara.append(`${mystring}`)
    newPara.style.position = "absolute";
    newPara.style.bottom = "0px";
    newPara.style.padding = "30px"
    newPara.style.width = "500px"
    let myDiv = document.getElementById("addPara");
    myDiv.append(newPara)
}

createNewPara("This is alternative way to add para!")