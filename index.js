document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Botão 1 clicado!');
    });

    const secondButton = document.getElementById('mySecondButton');
    secondButton.addEventListener('click', () => {
        alert('Botão 2 clicado!');
    });
});