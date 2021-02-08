const textInput = document.querySelector(".input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".list");
const options = document.querySelectorAll(".options");
const dropdowns = document.querySelectorAll(".dropdown");

addBtn.addEventListener("click", addItem);

function addItem() {
  const text = textInput.value;
  const li = document.createElement("li");

  if (text !== "") {
    li.innerHTML = `
     <span><input type="checkbox" id="checkbox" />${text}</span>
                <div class="dropdown">
                    <button class="btn btn-dropdown dropdown-toggle" data-toggle="dropdown"></button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><button id="edit">Edit <i class="far fa-edit"></i></button></a>
                       <a class="dropdown-item" href="#"><button id="remove">Remove <i class="far fa-trash-alt"></i></button></a>
                    </div>
                </div>`;

    ul.appendChild(li);
    console.log(document.querySelectorAll(".options"));
    textInput.value = "";
  } else {
    alert("Field is empty.");
  }
}