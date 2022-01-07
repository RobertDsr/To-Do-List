const input = document.querySelector('.search');
const ul = document.querySelector('.list');
const liElements = document.querySelectorAll('.list__item');
const form = document.querySelector('.add-task');
const taskNumber = document.querySelector('.count-task');
const inputAddTask = document.querySelector('.add-task__input');

// Wyszukiwarka
const searchTask = (e) => {
    const searchTekst = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchTekst));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchTask);

// Usuwanie elementów z listy
const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
    document.querySelector(`button[data-key="${index}"]`).remove();
}

document.querySelectorAll('.btn--medium ').forEach(btn => btn.addEventListener('click', removeTask));
const li = document.querySelectorAll('.list__item');

// Dodawanie elementów listy

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAddTask.value;
    if(titleTask === "") return;
    const taskElements = document.createElement('li');
    taskElements.className = 'list__item';
    taskElements.innerHTML = titleTask;
    ul.appendChild(taskElements);
    const btnElements = document.createElement('button');
    btnElements.className
    // ul.innerHTML = "<button class='btn btn--medium'>Wykonane</button>";
    inputAddTask.value = "";
}

form.addEventListener('submit', addTask);