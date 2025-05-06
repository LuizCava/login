
//Verificando a existencia do usuario
const data = localStorage.getItem('user');  
const user = JSON.parse(data);
if (user === null || user.length === 0) {
    window.location.href = '../index.html'; 
}
//Navegar para pagina do carrinho
function goCar() {
    window.location.href = 'car.html'; 
}
//Navegar para pagina do de login e remover usuaria da memoria
function signOut() {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
}
//Lista de items cadastrada
const itemsStore = [{
    id: 1,
    name: "Tênis Estiloso",
    price: 999,
    image: "../assets/tenis.png",
},
{
    id: 2,
    name: "Tênis Estiloso",
    price:999,
    image: "../assets/tenis.png",
},
{
    id: 3,
    name: "Tênis Estiloso",
    price: 999,
    image: "../assets/tenis.png",
},
{
    id: 4,
    name: "Tênis Estiloso",
    price: 999,
    image: "../assets/tenis.png",
},
{
    id: 5,
    name: "Tênis Estiloso",
    price: 999,
    image: "../assets/tenis.png",
},]

//Listar os items da loja
const  list = document.querySelector('.product-list');
itemsStore.map((item) => {
    //Montando a parte visual do Item
    const itemElement = document.createElement('div');
    itemElement.classList.add('product-item');
    itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" width="200" height="200">
                    <h3>${item.name}</h3>
                    <div class="product-details">
                        <p>R$ ${item.price}</p>
                        <button type="button" onClick={add(${item.id})} class="add-to-cart-button">Buy</button>
                    </div>
    `;
    list.appendChild(itemElement);


});

//FeedBack para o usuario ,o item foi adicionado ao carrinho
const buttons = document.querySelectorAll('.add-to-cart-button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        button.style.background = "blue"
        setTimeout(() => {
             button.style.background = "black"
        }, 99);
    });
});

// Adicionando o item no carrinho
const car = localStorage.setItem('car','[]');
function add(id) {
        const carlist = JSON.parse(localStorage.getItem('car'))

        itemsStore.map((iten)=>{
            if (iten.id == id) {
                carlist.push(iten) 
                
                localStorage.setItem('car',JSON.stringify(carlist));  
            }
        })
}