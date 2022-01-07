const removeTask = (e) => {
    // e.target.remove(li);
    console.log(e.target)
}

document.querySelectorAll('.btn--medium').forEach(btn => btn.addEventListener('click', removeTask));
const li = document.querySelectorAll('list__item');