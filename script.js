let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        const currentDate = new Date();
        const task = {
            name: taskName,
            completed: false,
            timestamp: currentDate.toLocaleString() 
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = "";
        showTextBox(taskName); 
        tasks.push(task);
        renderTasks();
        taskInput.value = "";

    
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <span>${task.name} - ${task.timestamp}</span>
            <input type="checkbox" onchange="toggleTaskCompletion(${index})" ${task.completed ? "checked" : ""}>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(taskElement);
    });
}




function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTaskName = prompt("Editar tarea", tasks[index].name);
    if (newTaskName !== null) {
        tasks[index].name = newTaskName.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function searchTasks() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
    tasks = filteredTasks;
    renderTasks();
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function searchTasks() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim().toLowerCase();
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByClassName("task");
    
    Array.from(tasks).forEach(task => {
        const taskName = task.getElementsByTagName("span")[0].textContent.toLowerCase();
        if (taskName.includes(searchTerm)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
    searchTasks();
}



