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
    [0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,],
    [0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,],
    [0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,],
    [0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,],
    [0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,],
    [0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,],
    [0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
];
const size = canvas.width / 19;
let pacmanX = 9;
let pacmanY = 17;
let ghostX = 9;
let ghostY = 8;
let score = 0;
const scoreTag = document.getElementById('score');

function drawMap(start) {
    for(let y = 0; y < mapa.length; y++) {
        for(let x = 0; x < mapa[y].length; x++) {
            objMapa = mapa[y][x];
            
            if(start === false) {
                drawPacman(9, 16);
                start = true;

            }

            if(objMapa === 0) ctx.fillStyle = 'cadetblue';
            if(objMapa === 3) ctx.fillStyle = 'black';

            if(objMapa === 1) {
                ctx.beginPath();
                ctx.arc(x*size+(size/2), y*size+(size/2), 3, 0, 2*Math.PI);
                ctx.fillStyle = 'yellow';
                ctx.fill()

            } else {
                ctx.fillRect(x*size, y*size, size, size);
            }
            
        }
    }
}

function drawPacman(pacmanX, pacmanY) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(pacmanX*size, pacmanY*size, size, size);
}

function movePacman(pacmanX, pacmanY) {
    document.querySelector('body').addEventListener('keydown', (e) => {
        key = e.key.toLowerCase();

        if(key === 'w' || key === 'arrowup') pacmanY -= 1;
        if(key === 'a' || key === 'arrowleft') pacmanX -= 1;
        if(key === 's' || key === 'arrowdown') pacmanY += 1;
        if(key === 'd' || key === 'arrowright') pacmanX += 1;

        if(mapa[pacmanY][pacmanX] === 1 || mapa[pacmanY][pacmanX] === 3 && pacmanX >= 0 && pacmanX <= mapa[0].length && pacmanY >= 0 && pacmanY <= mapa.length) {
            if(mapa[pacmanY][pacmanX] === 1) {
                score += 1;
                scoreTag.innerHTML = `Score: ${score}`;
            }
            mapa[pacmanY][pacmanX] = 3;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawMap()
            drawPacman(pacmanX, pacmanY);
        } else {
            if(key === 'w' || key === 'arrowup') pacmanY += 1;
            if(key === 'a' || key === 'arrowleft') pacmanX += 1;
            if(key === 's' || key === 'arrowdown') pacmanY -= 1;
            if(key === 'd' || key === 'arrowright') pacmanX -= 1;
        }
    })
}

drawMap();

    ctx.fillStyle = 'yellow';
    ctx.fillRect(9*size, 17*size, size, size);

movePacman(pacmanX, pacmanY);


function movePacman(pacmanX, pacmanY) {
    document.querySelector('body').addEventListener('keydown', (e) => {
        key = e.key.toLowerCase();

        if(key === 'w' || key === 'arrowup') pacmanY -= 1;
        if(key === 'a' || key === 'arrowleft') pacmanX -= 1;
        if(key === 's' || key === 'arrowdown') pacmanY += 1;
        if(key === 'd' || key === 'arrowright') pacmanX += 1;

        if(mapa[pacmanY][pacmanX] === 1 || mapa[pacmanY][pacmanX] === 3 && pacmanX >= 0 && pacmanX <= mapa[0].length && pacmanY >= 0 && pacmanY <= mapa.length) {
            if(mapa[pacmanY][pacmanX] === 1) {
                score += 1;
                scoreTag.innerHTML = `Score: ${score}`;
            }
            mapa[pacmanY][pacmanX] = 3;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawMap()
            drawPacman(pacmanX, pacmanY);
        } else {
            if(key === 'w' || key === 'arrowup') pacmanY += 1;
            if(key === 'a' || key === 'arrowleft') pacmanX += 1;
            if(key === 's' || key === 'arrowdown') pacmanY -= 1;
            if(key === 'd' || key === 'arrowright') pacmanX -= 1;
        }
    })
}
