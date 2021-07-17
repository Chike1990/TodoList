 //import { dragStart, drop } from "./dragAndDrop";
 //import { updateCompleted } from "./update";
 const todos = JSON.parse(localStorage.getItem("todo")) || [];
 console.log(todos);
 const todoEl = document.querySelector(".todo");
 const todoInputEl = document.querySelector(".todo-input");
 
 displayTodos();
 
 document.addEventListener("keydown", (e) => {
   if (e.code === "Enter") {
     console.log("Hi there")
     const todoDescription = todoInputEl.value.trim();
     if (!todoInputEl.value)
       return console.log("Todo description must not be empty");
     createTodo(todos, todoDescription);
     localStorage.setItem("todo", JSON.stringify(todos));
     todoInputEl.value = "";
     displayTodos();
     console.log(todos);
   }
 });
 
 document.addEventListener("change", function (event) {
   updateCompleted(event);
   localStorage.setItem("todo", JSON.stringify(todos));
 });
 
 function displayTodos() {
   todoEl.innerHTML = "";
   todos.forEach((todo) => {
     todoEl.innerHTML += `
         <li class="todo__list-item">
             <div>
                 <input ${
                   todo.completed ? "checked" : ""
                 } type="checkbox" id="todo-list-${
       todo.index
     }" class="todo__list-input" />
                 <label for="todo-list-${todo.index}">${todo.description}</label>
             </div>
             <i class="fas fa-ellipsis-v todo__list-menu-icon" id="${
               todo.index
             }"></i>
         </li>
         `;
   });
 }
 
 let dragged;
 
 document.addEventListener(
   "dragstart",
   function (event) {
     dragStart(event);
   },
   false
 );
 
 /* events fired on the drop targets */
 document.addEventListener(
   "dragover",
   function (event) {
     // prevent default to allow drop
     event.preventDefault();
   },
   false
 );
 
 document.addEventListener(
   "drop",
   function (event) {
     drop(event);
   },
   false
 );
 