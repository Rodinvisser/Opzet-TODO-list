
// hier kan ik verbinden met html
const todoList = document.querySelector('#todoList');
const form = document.getElementById("form");
const log = document.getElementById("log");


// een variable is 1 ding wat je kan opslaan met verschillende datatypes.
const name =  "Rodin";
const age =  22;


// een array is een doosje waar je dingen in kan opslaan
const todos = [
    'Basketbal',
    'Coderen',
    'De was doen'
];



console.log(todos.length)

// begin bij 0,1,2 
// als i lager is dan de totale lengte van todos
// i++ 

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

// een li html element maken en toevoegen aan de html.

function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;

    let input = document.querySelector('#todoInput');

    console.log(input.value);
    event.preventDefault();
  }
  

  // een ding wat gebeurt waar we naar luisteren
  form.addEventListener("submit", logSubmit);

console.log(todoList);