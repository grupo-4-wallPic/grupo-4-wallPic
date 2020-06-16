
let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let close = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});
close.addEventListener('click', function(){
    modal.style.display = 'none';
});
window.addEventListener('click',function (e){
    if (e.target == flex){
    modal.style.display = 'none';
    }
});

let openCart = document.getElementById('open-cart');
let showCart = document.getElementById('show-cart');
let closeCart = document.getElementById('close-cart');

openCart.addEventListener('click', function(){
    showCart.style.display = 'block';
});
closeCart.addEventListener('click', function(){
    showCart.style.display = 'none';
});

