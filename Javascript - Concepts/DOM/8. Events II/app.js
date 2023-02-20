'use strict'

// Send
const button1 = document.querySelector('input');
const evento = () =>{
    console.log(`Number of clicks`);
}
button1.addEventListener('click', evento);

//Name
const button2 = document.getElementById("name");
const evento2 = () => {console.log(`Number of letter`);}
button2.addEventListener('input', evento2);


// Remote Events in the nodes
// if i wanted to delete evento2
button2.removeEventListener('input', evento2);