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
    const searchTeskste.target.value.toLowerCase();
}

input.addEventListener('input', searchTask);