let body = document.body

// creating a element
let div = document.createElement('div');
div.innerHTML = "Meow"
div.className = "meow"

body.append(div); //append used to add element to a parent
// body.remove(div) //removes a element

// Cloning
let div2 = div.cloneNode(true)
console.log("CLoned div", div2.innerHTML = "as");



// SEARCHING ELEMENT : 

// document.getElementById or just id
let first = document.getElementById('first')
first.style.color = "red"
first.innerText = "First"

// querySelectorAll - returns all elements for the given CSS selector
let elements = document.querySelectorAll('ul li:first-child');
console.log(elements)

// querySelector - returns first element for the given CSS selector
let elements_query = document.querySelector('ul li');
console.log(elements_query)

// getElementsByTagName() - looks for element with the given tag
// getElementByClassName() - returns element that have the given CSS selector


let form = document.getElementsByName("my-form")[0]
console.log(form);
//[0] is used , because the 0th index has the form

let box = document.getElementsByClassName("box");
console.log(box.length)
let cart_ele = []
for (let i = 0; i < box.length; i++) {
    let current_box = box[i]
    current_box.addEventListener('click', (event) => {
        event.target.style.color = "Red"
        setTimeout(() => event.target.style.color = "", 1000)
        console.log("BOx Element", event.target.innerHTML)
        cart_ele.push(event.target.innerHTML)
        console.log("Cart Element", cart_ele);
    })
}



// STYLES AND CLASSES
//ClassList is used to ad, remove, toggle classes to a tag
// Methods in ClassList
// 1.) classList.add/remove("class")
// 2.) classList.toggle("class") - adds class if it doesn't exist , else removes it
// 3.) classList.contain("class") - checks for the given class, return true/false



// Resetting the style property
document.body.style.backgroundColor = "none";
setTimeout(() => document.body.style.backgroundColor = "teal", 3000);
// after 3 sec the bg color of the body changes


// // Element Size and Scrolling :
// Elements have the following geometry properties:

// offsetParent – is the nearest positioned ancestor or td, th, table, body.
// offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
// offsetWidth/offsetHeight – “outer” width/height of an element including borders.
// clientLeft/clientTop – the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.
// clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
// scrollWidth/scrollHeight – the width/height of the content, just like clientWidth/clientHeight, but also include scrolled-out, invisible part of the element.
// scrollLeft/scrollTop – width/height of the scrolled out upper part of the element, starting from its upper-left corner.



// Window sizes and scrolling
// To get window width and height, we can use the clientWidth/clientHeight of document.documentElement:
console.log(document.body.clientWidth);






// Bubbling - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// In home.html line28-32 , onclick is added, when a event is added to the child, child reacts then parent reacts, then all the ancestors reacts to it
// By adding event.target

let parent = document.getElementById('parent')
console.log(parent)
parent.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "yellow"
    console.log("Element", event.target)
    setTimeout(() => event.target.style.backgroundColor = "", 1000)
})



// -------------------------------------------


//