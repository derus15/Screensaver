const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

const stars = [];
const countStars = 200;
const colorStars = 'white';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < countStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        speed: Math.random() + 0.1
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = colorStars;
        ctx.fill();

        star.x -= star.speed;
        if (star.x < -star.size) {
            star.x = canvas.width + star.size;
        }
    }

    requestAnimationFrame(drawStars);
}

drawStars();