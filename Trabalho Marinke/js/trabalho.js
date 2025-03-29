const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Ajusta o canvas para ocupar toda a janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Conjunto de caracteres para o efeito
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charArr = chars.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array de gotas - uma por coluna
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = canvas.height;
}

function draw() {
    // Fundo com leve transparência para efeito de fade-out
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // cor verde
    ctx.font = fontSize + "px monospace";

    // Itera por cada coluna e desenha um caractere aleatório
    for (let i = 0; i < drops.length; i++) {
    const text = charArr[Math.floor(Math.random() * charArr.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reseta a gota de forma aleatória quando ela ultrapassa a altura do canvas
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
    }
    drops[i]++;
    }
}

// Atualiza o efeito a cada 33 milissegundos (aprox. 30 FPS)
setInterval(draw, 33);