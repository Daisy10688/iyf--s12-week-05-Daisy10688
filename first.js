
let todos = [];
let currentFilter = "all";
let nextId = 1;
let editingId = null;
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "toggle";
    checkbox.checked = todo.completed;

    if (editingId === todo.id) {
    const editInput = document.createElement("input");
    editInput.className = "edit";
    editInput.value = todo.text;
    li.append(editInput);
} else {
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    li.append(span);
}
    const button = document.createElement("button");
    button.type = "button";
    button.className = "delete";
    button.textContent = "✕";
    button.setAttribute("aria-label", `Delete "${todo.text}"`);

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.append(checkbox, button);

    return li;
}

function visibleTodos() {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        return todos.filter(todo => todo.completed);
    }

    return todos;
}

function render() {
    todoList.replaceChildren(...visibleTodos().map(createTodoElement));
    updateStats();
}


function updateStats() {
    const count = todos.filter(todo => !todo.completed).length;

    itemsLeft.textContent =
        `${count} item${count !== 1 ? "s" : ""} left`;
}

function addTodo(text) {
    todos.push({
        id: nextId++,
        text: text,
        completed: false
    });

    render();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        formError.textContent = "Type a task first.";
        return;
    }

    formError.textContent = "";
    addTodo(text);
    input.value = "";
    input.focus();
});

function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }

    render();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    render();
}

todoList.addEventListener("click", (event) => {
    const item = event.target.closest(".todo-item");

    if (!item) return;

    const id = Number(item.dataset.id);

    if (event.target.closest(".delete")) {
        deleteTodo(id);
        return;
    }

    if (event.target.closest(".toggle")) {
        toggleTodo(id);
    }
});
todoList.addEventListener("dblclick", (event) => {
    const span = event.target.closest(".todo-text");

    if (!span) return;

    const item = span.closest(".todo-item");
    editingId = Number(item.dataset.id);

    render();

    const editInput = todoList.querySelector(".edit");

    if (editInput) {
        editInput.focus();
        editInput.select();
    }
});
function filterTodos(filter) {
    currentFilter = filter;

    filters.forEach(btn => {
        const isActive = btn.dataset.filter === filter;

        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive);
    });

    render();
}

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filterTodos(btn.dataset.filter);
    });
});
todoList.addEventListener("keydown", (event) => {
    if (!event.target.matches(".edit")) return;

    const item = event.target.closest(".todo-item");
    const id = Number(item.dataset.id);

    if (event.key === "Enter") {
        const text = event.target.value.trim();
        const todo = todos.find(todo => todo.id === id);

        if (todo && text !== "") {
            todo.text = text;
        }

        editingId = null;
        render();
    }

    if (event.key === "Escape") {
        editingId = null;
        render();
    }
});

function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    render();
}

clearCompletedBtn.addEventListener("click", clearCompleted);
