const container = document.querySelector(".container");
const textInput = document.querySelector(".input");
const addBtn = document.querySelector(".btn-add");
const todoContainer = document.querySelector(".to-do");
const list = document.querySelector(".list");
const editBtn = document.querySelector(".edit");
const removeBtn = document.querySelector(".remove");
const dropdownItems = document.querySelectorAll('.dropdown-item')

let listItems;
//adding items to list on click
addBtn.addEventListener("click", addItem);

//enter key pressed listener
textInput.addEventListener('keyup', (event) => {
  if(event.keyCode === 13) {
    addItem()
  }
})

function addItem() {
  const text = textInput.value;
  const item = document.createElement("div");
  item.classList.add("list-item");

  listItems = document.querySelectorAll(".list-item");
  let items = listItems.length + 1;
  if (text !== "") {
    item.innerHTML = `
     <span>
              <input type="checkbox" id="check${items}"/>
              <label for="check${items}">${text}</label>
            </span>
            <div class="dropdown">
              <button class="btn btn-dropdown dropdown-toggle" data-toggle="dropdown"></button>
              <div class="dropdown-menu">
                <a class="dropdown-item edit" href="#"><button id="edit">Edit</button></a>
                <a class="dropdown-item remove" href="#"><button id="remove">Remove</button></a>
              </div>
            </div>`;
    list.appendChild(item);
    textInput.value = "";
    console.log(list.childNodes);

  if(container.offsetHeight > 600){
    container.classList.add('extend')
  }
  } else {
    alert("Field is empty.");
  }


}
