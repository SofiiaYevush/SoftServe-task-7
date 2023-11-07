const btn = document.getElementById('btn');
const dropDown = document.getElementById('dropDown');

btn.onclick = () => {
    const output = dropDown.options[dropDown.selectedIndex];
    if (output) dropDown.remove(output.index);
}