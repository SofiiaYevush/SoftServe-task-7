const text = document.getElementById('textContainer');

window.addEventListener('resize', function () {
    text.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});