var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li")
var done = document.querySelectorAll("li").classList.toggle("done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addDoneClass() {
	done.addEventListener("click"), function() {
		console.log();
	}
}

function createDeleteButton() {
	var done = document.createElement("button");
	// li.appendChild(document.create(input.value));
	ul.appendChild(li);
	// input.value = "";
}

// function addDoneClass() {
// 	li.
// }

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

lis.addEventListener("click", classList.toggle = "done");