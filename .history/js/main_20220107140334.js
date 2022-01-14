const toDoList = [];

const input = document.querySelector('.search');
const ul = document.querySelector('.list');
const liElements = document.getElementsByClassName('list__item');
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
    // console.log(index);
    document.querySelector(`li[data-key="${index}"]`).remove();
    document.querySelector(`.btn--mediu[data-key="${index}"]`).remove();
    toDoList.splice(index, 1);

    toDoList.forEach(( toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
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
    toDoList.push(taskElements);
    ul.textContent = "";
    toDoList.forEach(( toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
    ul.appendChild(taskElements);

    const btnElements = document.createElement('button');
    btnElements.className = 'btn btn--medium';
    btnElements.innerText = "WYKONANE";
    toDoList.push(btnElements);
    ul.appendChild(btnElements);
    inputAddTask.value = "";

    taskNumber.textContent = liElements.length;

}

form.addEventListener('submit', addTask);