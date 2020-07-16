
// Login

// let modal = document.getElementById('miModal');
// let flex = document.getElementById('flex');
// let abrir = document.getElementById('abrir');
// let close = document.getElementById('close');

// abrir.addEventListener('click', function () {
//     modal.style.display = 'block';
// });
// close.addEventListener('click', function () {
//     modal.style.display = 'none';
// });
// window.addEventListener('click', function (e) {
//     if (e.target == flex) {
//         modal.style.display = 'none';
//     }
// });

// Register


// let modal2 = document.getElementById('miModal2');
// let flex2 = document.getElementById('flex2');
// let abrir2 = document.getElementById('abrir2');
// let close2 = document.getElementById('close2');

// abrir2.addEventListener('click', function(){
//     modal2.style.display = 'block';
// });
// close2.addEventListener('click', function(){
//     modal2.style.display = 'none';
// });
// window.addEventListener('click',function (e){
//     if (e.target == flex2){
//     modal2.style.display = 'none';
//     }
// });

// Carrito de compras

// let openCart = document.getElementById('open-cart');
// let showCart = document.getElementById('show-cart');
// let closeCart = document.getElementById('close-cart');

// openCart.addEventListener('click', function () {
//     showCart.style.display = 'block';
// });
// closeCart.addEventListener('click', function () {
//     showCart.style.display = 'none';
// });

// Menú mobile

let openMobileMenu = document.getElementById('open-mobile-menu');
let showMobileMenu = document.getElementById('show-mobile-menu');
let closeMobil = document.getElementById('close-mobile-menu');
let openLogin = document.getElementById('open-login');
let openRegistration = document.getElementById('open-registration')


openMobileMenu.addEventListener('click', function () {
    showMobileMenu.style.display = 'flex'
});

closeMobil.addEventListener('click', function () {
    showMobileMenu.style.display = 'none'
});

openLogin.addEventListener('click', function() {
    showMobileMenu.style.display = 'none'
    modal.style.display = 'block';
});

openRegistration.addEventListener('click', function() {
    showMobileMenu.style.display = 'none'
    modal2.style.display = 'block';
})
