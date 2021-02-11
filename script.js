const container = document.querySelector('.container')
const textInput = document.querySelector(".input");
const addBtn = document.querySelector(".btn-add");
const todoContainer = document.querySelector('.to-do')
const list = document.querySelector(".list");
const dropdowns = document.querySelectorAll(".dropdown");
let listItems;

addBtn.addEventListener("click", addItem);

function addItem() {
  const text = textInput.value;
  const item = document.createElement("div");
  item.classList.add("list-item");

  listItems = document.querySelectorAll(".list-item");
  let items = listItems.length + 1
  if (text !== "") {
    item.innerHTML = `
     <span>
              <input type="checkbox" id="check${items}"/>
              <label for="check${items}">${text}</label>
            </span>
            <div class="dropdown">
              <button class="btn btn-dropdown dropdown-toggle" data-toggle="dropdown"></button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#"><button id="edit">Edit</button></a>
                <a class="dropdown-item" href="#"><button id="remove">Remove</button></a>
              </div>
            </div>`;
    list.appendChild(item);
    textInput.value = "";
  } else {
    alert("Field is empty.");
  }

}
