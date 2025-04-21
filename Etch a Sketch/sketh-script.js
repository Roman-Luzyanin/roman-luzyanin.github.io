const container = document.querySelector('.container');
const btn = document.querySelector('button');
const input = document.querySelector('input');
let isDown = false;

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
    container.appendChild(div); 
}

function draw(e) {
    if (!isDown) return;
    e.target.style.backgroundColor = 'blue';
}

container.addEventListener('mousedown', function(e) {
    isDown = true;
    draw(e);
});
container.addEventListener('mouseup', ()=> isDown = false);
container.addEventListener('mousemove', draw);





