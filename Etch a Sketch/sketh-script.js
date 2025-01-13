const container = document.querySelector('.container');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', ()=> {
    container.textContent = '';
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;
    for (let i = 0; i < input.value ** 2; i++) {
        createCell();
} } );

function createCell() {  
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', ()=> div.style.background = 'blue');
    container.appendChild(div); 
}







