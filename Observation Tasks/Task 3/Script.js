let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let emptyMessage = document.getElementById("emptyMessage");

addTask.onclick = function () {

    let task = taskInput.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    // Create task
    let li = document.createElement("li");

    li.innerHTML = task;

    // Create Complete button
    let completeButton = document.createElement("button");

    completeButton.innerHTML = "Complete";
    completeButton.className = "complete";

    // Complete task
    completeButton.onclick = function () {
        li.classList.toggle("completed");
    };

    // Create Delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";

    // Delete task
    deleteButton.onclick = function () {
        li.remove();

        if (taskList.children.length == 0) {
            emptyMessage.style.display = "block";
        }
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    emptyMessage.style.display = "none";
};