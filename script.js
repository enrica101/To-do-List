const textInput = document.querySelector(".input");
const addBtn = document.querySelector(".add");
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
                    <button class="options">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-content hidden">
                        <button class="edit">Edit <i class="far fa-edit"></i></button>
                        <button class="remove">Remove <i class="far fa-trash-alt"></i></button>
                    </div>
                </div>`;

    ul.appendChild(li);
    console.log(document.querySelectorAll(".options"));
    textInput.value = "";
  } else {
    alert("Field is empty.");
  }

      console.log('hello');
    if (document.querySelectorAll(".options").length > 1) {
    console.log(true);
        document.querySelectorAll(".options").forEach(option => {
            option.addEventListener('click', (e) => {
                e.currentTarget.parentNode.querySelector('.dropdown-content').classList.toggle('hidden')
            })
        })
    }else if(document.querySelectorAll('.options').length <= 1){
        document.querySelector('.options').addEventListener('click', (e) => {
            e.currentTarget.parentNode.querySelector('.dropdown-content').classList.toggle('hidden')
        })
    }
}