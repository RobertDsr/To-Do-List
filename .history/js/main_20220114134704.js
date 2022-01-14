
const toDoList = [];

const input = document.querySelector('.search');
const ul = document.querySelector('.list');
const liElements = document.getElementsByClassName('list__item');
const form = document.querySelector('.add-task');
const taskNumber = document.querySelector('.count-task');
const inputAddTask = document.querySelector('.add-task__input');
const li = document.querySelectorAll('.list__item');

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
    e.target.parentNode.remove();
    const index = e.target.dataset.key;
    // console.log(index);
    // document.querySelector(`li[data-key="${index}"]`).remove();
    // document.querySelector(`button[data-key="${index}"]`).remove();

    toDoList.splice(index, 1);

    renderList();
}




// Dodawanie elementów listy

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAddTask.value;
    if(titleTask === "") return;
    const taskElements = document.createElement('li');
    taskElements.className = 'list__item';
    taskElements.innerHTML = titleTask + '<button class="btn btn--medium">WYKONANE</button>';
    toDoList.push(taskElements);
    ul.textContent = "";
    renderList();
    ul.appendChild(taskElements);

    inputAddTask.value = "";

    // taskNumber.textContent = liElements.length;

    taskElements.querySelector('.btn--medium ').addEventListener('click', removeTask);
}

const renderList = () => {
    toDoList.forEach(( toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

form.addEventListener('submit', addTask);