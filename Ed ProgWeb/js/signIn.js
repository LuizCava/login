document.getElementById('signForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    const user = userData[0];

    if (username === user.name && password === user.password) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
});

