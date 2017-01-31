// event 1

var num1 = document.getElementById("num-one");
var num2 = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

num1.addEventListener("input", add );
num2.addEventListener("input", add );

function add() {
  var one = parseFloat(num1.value) || 0;
  var two = parseFloat(num2.value) || 0;
  addSum.innerHTML = one+two;
}

// event 2

var bird = document.getElementById("bird");
var dog = document.getElementById("dog");
var fish = document.getElementById("fish");

bird.addEventListener("click", picLink  );
dog.addEventListener("click", picLink  );
fish.addEventListener("click", picLink  );

function picLink() {

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  var allImages = document.querySelectorAll("img");

  if (pic.className === "special") {
    for(var i = 0; i < allImages.length; i++){
        allImages[i].className = "hide";
    }
    return false;
  }else {
    for(var i = 0; i < allImages.length; i++){
        allImages[i].className = "hide";
    }
  }

  if(pic.className === "hide") {
    pic.className = "special";
  } else if (pic.className === "special") {
    pic.className = "hide";
  } else {
    pic.className = "hide";
  }
}

// event 3

var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = ""; 
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}