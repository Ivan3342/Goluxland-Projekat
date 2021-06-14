let staklobtn = document.getElementById("staklo");
let plastikabtn = document.getElementById("plastika");
let papirbtn = document.getElementById("papir");

staklobtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output').value = input * 100;
})

plastikabtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output').value = input * 90;
})

papirbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output').value = input * 60;
})