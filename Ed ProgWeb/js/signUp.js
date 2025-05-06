document.getElementById('signForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //pegando dados do usuario 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //pegando dados do usuario na memoria
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    
    const user = userData.map((user) => {return user.name === username});
    //se nao houver um usuario crie se nao adicione 
        if (user.length === 0) {
            
            localStorage.setItem('user', `[{"id":1,"name":"${username}","password":"${password}"}]`);
            
        }else {
            userData.push({ id: userData.length + 1, name: username, password: password });
        }
        window.location.href = 'home.html';
  
});