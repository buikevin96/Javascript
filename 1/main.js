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
    });

    console.log(todoCompleted);