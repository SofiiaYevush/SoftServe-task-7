const btn = document.getElementById('btn');
const paragraph = document.getElementById('text');


function changeCSS(element) {
    element.style.color = 'orange';
    element.style.fontSize = '20px';
    element.style.fontFamily = 'Comic Sans MS';
}

btn.onclick = () => changeCSS(paragraph);