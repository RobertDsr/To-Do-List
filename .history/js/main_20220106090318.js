const removeTask = (e) => {
    const index = e.target.dataset.key;
    // console.log(index);
    (document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll('.btn--medium').forEach(btn => btn.addEventListener('click', removeTask));
// const li = document.querySelectorAll('.list__item');