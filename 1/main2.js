/*
// Single element selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1")); // will only select first one


// Multiple element selectors
    //console.log(document.querySelectorAll(".item")); // Selects more than one
const items = document.querySelectorAll(".items");

items.forEach((item) => console.log(item));
*/

const ul = document.querySelector(".items");
const btn = document.querySelector(".btn");

//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Fuck</h1>";

btn.style.background = "red";
btn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("click");
})


