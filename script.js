const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

const stars = [];
const countStarsInput = document.querySelector('.params');
const generateButton = document.getElementById('generate');
const colorStarsInput = document.getElementById('colorStars');
const colorBackInput = document.getElementById('colorBack');
const sizeInput = document.getElementById('size');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initStars() {

    for (let i = 0; i < Math.abs(countStarsInput.value); i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * Math.abs(sizeInput.value),
            speed: Math.random() + 0.1
        });
    }

}

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.background = colorBackInput.value;

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

generateButton.addEventListener('click', () => { initStars();} )
document.addEventListener('keydown', (event) => {
    if (event.keyCode == '32') {
        countStarsInput.classList.toggle('hidden');
        colorStarsInput.classList.toggle('hidden');
        generateButton.classList.toggle('hidden');
        colorBackInput.classList.toggle('hidden');
        sizeInput.classList.toggle('hidden');
    }
})