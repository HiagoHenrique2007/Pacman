const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const mapa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,],
    [0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
    [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,],
    [0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,0,2,2,2,0,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,],
    [0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,],
    [0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,],
    [0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,],
    [0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,],
    [0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,],
    [0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
];
const size = canvas.width / 19;
let pacmanX = 9;
let pacmanY = 16;

function draw(pacmanX, pacmanY) {
    for(let y = 0; y < mapa.length; y++) {
        for(let x = 0; x < mapa[y].length; x++) {
            objMapa = mapa[y][x];

            ctx.fillStyle = 'yellow';
            ctx.fillRect(pacmanX*size, pacmanY*size, size, size);

            if(objMapa === 0) ctx.fillStyle = 'black';
            if(objMapa === 1) ctx.fillStyle = 'gray';
            if(objMapa === 2) ctx.fillStyle = 'red';

            ctx.fillRect(x*size, y*size, size, size);
            
        }
    }
}

function movePacman(pacmanX, pacmanY) {
    document.querySelector('body').addEventListener('keydown', (e) => {
        key = e.key.toLowerCase();
        let newPacmanX = pacmanX;
        let newPacmanY = pacmanY;

        if(key === 'w' || key === 'arrowup') newPacmanY -= 1;
        if(key === 'a' || key === 'arrowleft') newPacmanX -= 1;
        if(key === 's' || key === 'arrowdown') newPacmanY += 1;
        if(key === 'd' || key === 'arrowright') newPacmanX += 1;

        if(mapa[newPacmanY][newPacmanX] === 0 && newPacmanX >= 0 && newPacmanX <= mapa[0].length && newPacmanY >= 0 && newPacmanY <= mapa.length) {
            console.log('movel')
            draw(newPacmanX, newPacmanY);
        }
    })
}

draw(pacmanX, pacmanY);
movePacman(pacmanX, pacmanY)


