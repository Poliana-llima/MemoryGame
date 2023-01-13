const input = document.querySelector ('.login_input');
const button = document.querySelector ('.login_button');
const form = document.querySelector ('.login-form');

const validateImput = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'PAGES/game.html';
}

input.addEventListener('input', validateImput);
form.addEventListener('submit', handleSubmit);