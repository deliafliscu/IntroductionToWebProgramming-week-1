import "./styles.css";

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  console.log("hello world!");
});

const myNotebook = document.getElementById("my-notebook");

myButton.addEventListener("click", function () {
  myNotebook.textContent = "My notebook";
});

const addData = document.getElementById("add-data");
const list = document.getElementById("list");
const textArea = document.getElementById("text-area");

addData.addEventListener("click", function () {
  const listElement = document.getElementById("list-element");
  listElement.textContent = textArea.value;
  list.appendChild(listElement);
});
