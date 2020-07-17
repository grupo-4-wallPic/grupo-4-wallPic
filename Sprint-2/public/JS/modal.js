
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


//********* Lógica de Admin ********

let btnNewPic = document.getElementById('btn-newpic')
let btnColor = document.getElementById('btn-color')
let btnSizes = document.getElementById('btn-sizes')
let btnCategories = document.getElementById('btn-categories')

let newPic = document.getElementById('admin-form-new')
let newColor = document.getElementById('admin-form-color')
let newSizes = document.getElementById('admin-form-sizes')
let newCategory = document.getElementById('admin-form-categories')



btnNewPic.addEventListener('click', function () {
    newPic.style.display = 'flex'
    newColor.style.display = 'none'
    newSizes.style.display = 'none'
    newCategory.style.display = 'none'
});

btnColor.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'flex'
    newSizes.style.display = 'none'
    newCategory.style.display = 'none'
});

btnSizes.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'flex'
    newCategory.style.display = 'none'
});

btnCategories.addEventListener('click', function () {
    newPic.style.display = 'none'
    newColor.style.display = 'none'
    newSizes.style.display = 'none'
    newCategory.style.display = 'flex'
});
