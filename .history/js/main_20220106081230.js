const removeTask = () => {
    console.log('ok');
}

document.querySelectorAll('.list__item').forEach(item => item.addEventListener('click', removeTask));
document.querySelectorAll('.btn--medium').forEach(btn => btn.addEventListener('click', removeTask));