

const  list = document.querySelector('#car-list');

//Listar os items do carrinho
const items = JSON.parse(localStorage.getItem('car'))
items.map((item) => {
    //Montando a parte visual do Item
    const itemElement = document.createElement('div');
    itemElement.classList.add('car-item');
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="200" height="200">
        <h3>${item.name}</h3>
        <p>R$:${item.price}</p>
        <button type="button" onClick={removeCar(${item.id})} class="remove-button">Remover</button>
    `;
    list.appendChild(itemElement);
});

//Remover Item do carrinho
function removeCar(id) {
    const carI = JSON.parse(localStorage.getItem('car'))
    carI.map((i,index)=>{
        if (i.id == id) {
            carI.splice(index,1)
            localStorage.setItem('car',JSON.stringify(carI))
        }
    })

    
}
//Remover Item do da lista
const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const itemElement = event.target.parentElement;
        list.removeChild(itemElement);
    });
});

// Soma os valor total do carrinho
const totalPrice = document.querySelector('#total-price');
const prices = items.map(item => item.price);
const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
totalPrice.innerHTML = `R$ ${total}`;


// Limpa o Carrinho e volta para home
function end() {
    localStorage.setItem('car',JSON.stringify([]))
    window.location.href = 'home.html';
}

