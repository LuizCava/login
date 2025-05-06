document.getElementById('signForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //pegando dados do usuario 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //pegando dados do usuario na memoria
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    const user = userData[0];

    //varificando se ele existe ou nao
    if (username === user.name && password === user.password) {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
});

