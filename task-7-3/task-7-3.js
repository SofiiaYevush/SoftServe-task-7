const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const linkId = document.getElementById('linkId');

// const openWindow = window.open('', '_self');

btn1.addEventListener('click', () => {document.body.style.backgroundColor = 'blue'});

btn2.addEventListener("dblclick", () => {document.body.style.backgroundColor = 'pink'});

btn3.addEventListener("mousedown", () => {document.body.style.backgroundColor = 'brown'});
btn3.addEventListener("mouseup", () => {document.body.style.backgroundColor = 'white'});

linkId.onmouseover = () => {document.body.style.backgroundColor = 'yellow'};
linkId.onmouseleave = () => {document.body.style.backgroundColor = 'white'};