// CARRINHO DE COMPRAS
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Variável global para armazenar os IDs dos produtos no carrinho
let cartProductIds = [];

//ABRIR O CARRINHO DE COMPRAS
cartIcon.onclick = () => {
    cart.classList.add('active');
};
//FECHAR O CARRINHO DE COMPRAS
closeCart.onclick = () => {
    cart.classList.remove('active');
};

//FUNCIONAMENTO DO CARRINHO DE COMPRAS
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Fazer funcionar
function  ready() {
    //REMOVER ITENS DO CARRINHO
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i <  removeCartButtons.length; i++) {
        var button =  removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i <  quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i <  addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }

}

function redirectToPedido() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var listaProdutos = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;
        var productTitle = cartBox.getElementsByClassName('cart-product-title')[0].innerText;
        var productPrice = cartBox.getElementsByClassName('cart-price')[0].innerText;
        var productQuantity = cartBox.getElementsByClassName('cart-quantity')[0].value;

        listaProdutos.push({
            nome: productTitle,
            preco: productPrice,
            quantidade: productQuantity,
            imagem: productImg
        });
    }

    // Redireciona o usuário para a página de pedido com os dados do carrinho
    window.location.href = '/pedido?produtos=' + encodeURIComponent(JSON.stringify(listaProdutos));
}

//quantity changes
function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

//REMOVER ITEM 
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Adicionar ao carrinho
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Adicionar produto ao carrinho
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i <  cartItemsNames.length; i++) {
        if(cartItemsNames[i].innerText == title){
            alert('Você ja adicionou esse item ao carrinho');
            return;
        }
        
    }
    var cartBoxContent = `
                            <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <!-- REMOVER COMPRAS -->
                            <i class='bx bxs-trash-alt cart-remove' ></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

//ATUALIZAR TOTAL
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i <  cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('R$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    //Se o preco conter valores em centavos
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = 'R$' + total;
}

// SLIDER
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide
var timer = setInterval(changeSlide, interval);


function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' activer', '');
    }

    currentImg = (currentImg + 1) % imgs.length; // update the index number

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' activer';
}