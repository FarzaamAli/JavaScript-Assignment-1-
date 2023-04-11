//Question 4

function addListItem(myString){

    let ul = document.getElementById("list");
    let newli = document.createElement("li");
    newli.appendChild(document.createTextNode(`${myString}`));
    //newli.innerText = `${myString}`
    newli.setAttribute("id","3");
    ul.appendChild(newli);
}

addListItem("Mango");

