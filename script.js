var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li")
// var done = document.querySelectorAll("li").classList.toggle("done");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}


// here we go, this is the right way. thanks stack overflow.
function toggleDone() {
	this.classList.toggle("done");
}

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", toggleDone);
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// lis.addEventListener("click", classList.toggle("done"));

// document.querySelectorAll("li").classList.toggle("done")