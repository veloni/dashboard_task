
const loadDiv = document.getElementById("js-add-new-task");
const mainDiv = document.getElementById("js-where-add-element");

const newDiv = document.createElement("div");

let div = loadDiv.cloneNode(true); //скопировали


mainDiv.appendChild(div);


