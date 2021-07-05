// defines variables
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

// creates the list element, creates a delete button and appends it to list element.
// defines click, mouseover, mouseout functions.
function createListElement() {
  let deleteBtn = document.createElement("button");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + "   "));
  ul.appendChild(li);
  input.value = "";

  li.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Remove";

  deleteBtn.addEventListener("click", function (event) {
    this.parentNode.parentNode.removeChild(this.parentNode);
  });

  li.addEventListener("mouseover", function () {
    this.classList.add("selected");
  });

  li.addEventListener("mouseout", function () {
    this.classList.remove("selected");
  });

  li.addEventListener("click", function () {
    this.classList.toggle("done");
  });
}

// if the length of the input in the box is greater than 0, create a text node in li.
function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

// if the length of the input in the box is greater than 0, create a text node in li.
function addListAfterKeyPress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// adds an event listener for "click", if anyone clicks run this function.
button.addEventListener("click", addListAfterClick);

// if anyone ever presses this key run this function.
input.addEventListener("keypress", addListAfterKeyPress);
