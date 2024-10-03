let intervalo;
let segundos = 0;

const cronometroDisplay = document.getElementById('cronometro');
const botaoIniciar = document.getElementById('iniciar');
const botaoParar = document.getElementById('parar');
const botaoResetar = document.getElementById('resetar');

botaoIniciar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        segundos++;
        atualizarCronometro();
    }, 1000);
});

botaoParar.addEventListener('click', () => {
    clearInterval(intervalo);
});

botaoResetar.addEventListener('click', () => {
    clearInterval(intervalo);
    segundos = 0;
    atualizarCronometro();
});

function atualizarCronometro() {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const secs = String(segundos % 60).padStart(2, '0');
    cronometroDisplay.textContent = `${horas}:${minutos}:${secs}`;
}