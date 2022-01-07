const removeTask = (e) => {
    const index = e.target.dataset.key;
    // console.log(index);
    console.log(document.querySelector('li[data-key="${index}"]'));
}

document.querySelectorAll('.btn--medium').forEach(btn => btn.addEventListener('click', removeTask));
const li = document.querySelectorAll('.list__item');