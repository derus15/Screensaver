const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

const stars = [];
const back = document.getElementById('stars');
const starsInput = document.querySelector('.params');
const button = document.querySelector('.button');
const colorStarsInput = document.getElementById('colorStars');
const colorBackInput = document.getElementById('colorBack');
let countStars;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initStars() {

    countStars = starsInput.value || 200;

    for (let i = 0; i < countStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3,
            speed: Math.random() + 0.1
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    back.style.background = colorBackInput.value;

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = colorStarsInput.value;
        ctx.fill();

        star.x -= star.speed;
        if (star.x < -star.size) {
            star.x = canvas.width + star.size;
        }
    }

    requestAnimationFrame(drawStars);
}

initStars();
drawStars();

button.addEventListener('click', () => { initStars();} )
document.addEventListener('keydown', (event) => {
    if (event.keyCode == '32') {
        starsInput.classList.toggle('hidden');
        colorStarsInput.classList.toggle('hidden');
        button.classList.toggle('hidden');
        colorBackInput.classList.toggle('hidden');
    }
})