

const data = localStorage.getItem('user');  
const user = JSON.parse(data);
if (user === null || user.length === 0) {
    window.location.href = '../index.html'; 
}

function signOut() {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
}