
let modal2 = document.getElementById('miModal2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('abrir2');
let close2 = document.getElementById('close2');

abrir2.addEventListener('click', function(){
    modal2.style.display = 'block';
});
close2.addEventListener('click', function(){
    modal2.style.display = 'none';
});
window.addEventListener('click',function (e){
    if (e.target == flex2){
    modal2.style.display = 'none';
    }
});
