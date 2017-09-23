
var button = document.getElementById("button")

//button.addEventListener("click", buttonClicked)

//function buttonClicked(a) {
////	alert(e.target.id)
////	alert(e.clientX)
//	
////	alert(e.altKey)
////	alert(e.shiftKey)
////	alert(e.ctrlKey)
//}

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

var newDiv = document.createElement("div");

// Add class
newDiv.className = "hello";

// Add id

newDiv.id = "hello1"

// Add attribute

newDiv.setAttribute("title", "HelloDiv");

// Create text node

var newDivText = document.createTextNode("hello world");

// Add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

container.insertBefore(newDiv, h1)
