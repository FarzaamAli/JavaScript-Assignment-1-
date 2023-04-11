//Question 5

//Doing it by giving Element name
function changeBackgroundColor(element, color) {
   
    if (!element || !color) {
      console.error("Element and color are not provided or invalid.");
      return;
    }
    let changeElement = document.querySelector(`${element}`);
    changeElement.style.backgroundColor = color;
}

changeBackgroundColor("div","blue");

//Doing it by Giving ID name
function changeBackgroundColorByID(elementId, color) {
   
    if (!elementId || !color) {
      console.error("Element and color are not provided or invalid.");
      return;
    }
    let changeElement = document.getElementById(`${elementId}`);
    changeElement.style.backgroundColor = color;
}

changeBackgroundColorByID("addPara","gray");