const li = document.querySelectorAll('list__item');

const removeTask = (e) => {
    e.target.remove(li);
}

document.querySelectorAll('.btn--medium').forEach(btn => btn.addEventListener('click', removeTask));
