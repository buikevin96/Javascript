/*
// Single element selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1")); // will only select first one


// Multiple element selectors
    //console.log(document.querySelectorAll(".item")); // Selects more than one
const items = document.querySelectorAll(".items");

items.forEach((item) => console.log(item));


const ul = document.querySelector(".items");
const btn = document.querySelector(".btn");

//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Fuck</h1>";

btn.style.background = "red";
btn.addEventListener("mouseout", (e) =>{
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector('body').classList.add("bg-dark");
    document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello</h1>";
})
*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === "k" || emailInput.value === ""){
       msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
    }
}





