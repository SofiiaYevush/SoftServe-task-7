const btn = document.getElementById('btn');
const textContainer = document.getElementById('textContainer');

btn.onclick = () => {textContainer.innerHTML += '<p>I was pressed!</p>'};
btn.onmouseover= () => {textContainer.innerHTML += '<p>Mouse on me!</p>'};
btn.onmouseleave= () => {textContainer.innerHTML += '<p>Mouse is not on me!</p>'};