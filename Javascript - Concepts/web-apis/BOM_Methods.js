'use strict'

// window.alert("Alert");
// window.confirm("Confimation");
// window.prompt("Prompt");

// alert("Alert");
// confirm("Confimation");
// prompt("Prompt");


const $btnOpen = document.getElementById("open-window"),
$btnClose = document.getElementById("close-window"),
$btnPrint = document.getElementById("print-window");

$btnOpen.addEventListener("click", e => {
    window.open("https://youtube.com"); 
});
$btnClose.addEventListener("click", e => {
    window.close();
});
$btnPrint.addEventListener("click", e => {
    window.print();
});