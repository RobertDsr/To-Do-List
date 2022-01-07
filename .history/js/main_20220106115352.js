// Usuwanie elementów z listy
const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
    document.querySelector(`button[data-key="${index}"]`).remove();
}

document.querySelectorAll('.btn--medium ').forEach(btn => btn.addEventListener('click', removeTask));
const li = document.querySelectorAll('.list__item');

// Wyszukiwarka
const input = document.querySelector('.search');
const ul = document.querySelector('.list');
const liElements = document.querySelectorAll('.list__item');

const searchTask = (e) => {
    const searchTekst = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchTekst));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild)
    // console.log(tasks);
}

input.addEventListener('input', searchTask);