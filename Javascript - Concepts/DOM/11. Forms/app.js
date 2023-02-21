'use strict'

const form = document.getElementById("form");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = document.getElementById('email-form').value;
    console.log(email);
})