const toggleButtons = document.querySelectorAll('.toggleButton');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            button.textContent = 'Скрыть ответ';
            button.style.background = 'red'
        } else {
            answer.style.display = 'none';
            button.textContent = 'Показать ответ';
            button.style.background = 'cyan'
        }
    });
});
