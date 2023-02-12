let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}






const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById ("phone" );
const message = document.getElementById ("message");
const email = document.getElementById("email");
form.addEventListener ("submit", (e) =>{
e.preventDefault();
if (form.checkValidity())
alert ("successful");
form.classList.add("was-validated");
});






