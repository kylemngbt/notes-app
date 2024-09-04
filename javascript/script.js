const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function createNote() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
}

function deleteNote(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", createNote);
notesContainer.addEventListener("click", deleteNote);