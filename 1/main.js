/*
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");
*/

// Var, let, const


// String, Numbers, Boolean, null, undefined, Symbol

// const s = "technology, computers, it, code";
// console.log(s.split(', '));

// Arrays - variables that hold multiple values
    // const fruits = ["apples", "oranges", "pears"];
    // fruits[3] = "grapes"
    // console.log(fruits);
    // fruits.push("mangos");
    // fruits.unshift("strawberries"); // Goes to beginning of array
    // fruits.pop();// Pops the last thing in the array out

    // console.log("Oranges is in index " + fruits.indexOf("oranges"));

// Object Literals
    // const person =  {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 30,
    //     hobbies: ["music", "movies", "sports"],
    //     address: {
    //         street: "2015 Aberglen Drive",
    //         city: "Charlotte",
    //         state: "NC"
    //     }
    // }

    // console.log(person.firstName, person.lastName);
    // console.log(person.hobbies[1]);
    // console.log(person.address.city);

    // const {firstName, lastName, address:{city}} = person; // Pulls it out
    // console.log(city);

    // person.email = "John@gmail.com"; // Adds email to person object
    // console.log(person);

 /*   
        const todos = [
            { 
                id: 1,
                text: "Take out trash",
                isCompleted: true
            },
            {
                id: 2,
                text: "Meeting with boss",
                isCompleted: true
            },
            {
                id: 3,
                text: "Dentist appt",
                isCompleted: false
            }
        ];

        // const todoJSON = JSON.stringify(todos);
        // console.log(todoJSON);

// For Loops
for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i<10){
    console.log(`While loop number: ${i}`);
    i++;
}

// For loop
for(let i =0; i<todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter
    todos.forEach(function(todo){
        console.log(todo.text);
    });

    const todoText = todos.map(function(todo){
        return todo.text;
    });

    console.log(todoText);

    const todoCompleted = todos.filter(function(todo){
        return todo.isCompleted === true;
    }).map(function(todo){
        return todo.text;
    });

    console.log(todoCompleted);
*/

/*
const x = 10;
const y = 10;

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
} else if (x > 10){
    console.log("x is greater than 10")
}   else {
    console.log("x is NOT 10");
}

*/

/*
const x = 10;

// Ternary operator
// if x is greater than 10, then set to red, else, blue
    const color = x > 10 ? 'red' : ; 'blue';

    switch(){
        case "red":
            console.log("color is red");
            break;
        case "blue":
            console.log("color is blue");
            break;
        default:
            console.log("Color is not red or blue");
            break;
    }
*/

/*
// Functions

    function addNums(num1, num2) =>{
        return (num1 + num2);
    }

    console.log(addNums(5,4));
*/

// Constructor Function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // method
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate object
const person1 = new Person("Kevin", "Bui", "2-10-1996");
console.log(person1.getBirthYear());
console.log(person1.getFullName());