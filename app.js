let Btn1 = document.querySelector(".btn");
let taskInput = document.querySelector("#Task");
let worksList = document.querySelector("#works");
let clr = document.querySelector(".clrbtn");

let todo = [];

clr.addEventListener("click", () => {
    // let task1 = taskInput.value; // Get the value of the input field

    // if (task1) { // Check if the input is not empty
        taskInput.value = ''; // Clear the input field
    // 
});

Btn1.addEventListener("click", () => {
    let task = taskInput.value; // Get the value of the input field

    if (task) { // Check if the input is not empty
        todo.push(task); // Add the task to the todo array
        taskInput.value = ''; // Clear the input field
        displayTodos(); // Update the displayed list
    }
});

function displayTodos() {
    worksList.innerHTML = ''; // Clear the current list

    for (let i = 0; i < todo.length; i++) {
        let li = document.createElement("li");
        let newbtn = document.createElement("button"); // Create a new button

        newbtn.setAttribute("class", "delbtn"); // Set class for the button
        newbtn.innerText = "Delete"; // Set the text of the button
        newbtn.addEventListener("click", () => {
            todo.splice(i, 1); // Remove the task from the todo array
            displayTodos(); // Update the displayed list
        });

        li.innerText = todo[i]; // Set the text of the list item
        li.appendChild(newbtn); // Add the delete button to the list item
        worksList.appendChild(li); // Add the list item to the worksList
    }
}

// Initial display of the todo list
displayTodos();
