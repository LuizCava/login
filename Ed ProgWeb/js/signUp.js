document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = Number(document.getElementById('password').value);


    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    
    const user = userData.map((user) => {return user.name === username});

        if (user.length === 0) {
            
            localStorage.setItem('user', `[{"id":1,"name":"${username}","password":${password}}]`);
            
        }else {
            console.log('User already exists');
            userData.push({ id: userData.length + 1, name: username, password: password });
        }
        window.location.href = 'home.html';
  
});