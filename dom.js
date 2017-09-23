var button = document.getElementById("button")

var itemList = document.querySelector("#items")
// ParentNode

//console.log(itemList.parentNode)

//console.log(itemList.childNodes)

//console.log(itemList.children);
//console.log(itemList.children[0].textContent)
//
//// First Child
//
//console.log(itemList.firstChild)
//
//// Frist element child
//
//console.log(itemList.firstElementChild.innerHTML)

//console.log(itemList.lastElementChild.innerHTML)

//console.log(itemList.nextElementSibling)


//console.log(itemList.previousElementSibling);

// CreateElement

// Create Div

//var newDiv = document.createElement("div");
//
//// Add class
//newDiv.className = "hello";
//
//// Add id
//
//newDiv.id = "hello1"
//
//// Add attribute
//
//newDiv.setAttribute("title", "HelloDiv");
//
//// Create text node
//
//var newDivText = document.createTextNode("hello world");
//
//// Add text to div
//
//newDiv.appendChild(newDivText);
//
//var container = document.querySelector("header .container");
//var h1 = document.querySelector("header h1");
//
//console.log(newDiv);
//
//container.insertBefore(newDiv, h1)

var output = document.getElementById("output");

// Events
var button = document.getElementById("button");
var box = document.getElementById("box");
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var selector= document.querySelector("select");


//var button = document.createElement("button");
//button.className = "btn btn-primary"
//button.textContent = "Click Here"
//
//var container = document.getElementById("list-container");
//container.appendChild(button)

//itemInput.addEventListener("keyup", runEvent)
//itemInput.addEventListener("focus", runEvent)
//itemInput.addEventListener("blur", runEvent)
//
//itemInput.addEventListener("cut", runEvent)
//itemInput.addEventListener("paste", runEvent)

//
//button.addEventListener("mouseover", runEvent)
//
//function buttonClicked(event) {
////	console.log(24)
//	console.log(event.target.id)
//	console.log(event.target.className)
//	console.log(event.clientX)
//
////	console.log(e.type)
//}
//

//box.addEventListener("mouseenter", runEvent)
//box.addEventListener("mouseleave", runEvent)
//box.addEventListener("keyup", runEvent)

//selector.addEventListener("change", runEvent)

form.addEventListener("submit", runEvent)

function runEvent(e) {
	e.preventDefault()
	console.log(e.target)
	console.log(e.target.value)
//	output.textContent = "MouseX: " + e.offsetX + ", MouseY: " + e.offsetY;
//	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

