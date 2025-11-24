// Variáveis
const btnJogar = document.querySelector("#btnJogar");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = gerarNumero() ;
let attempts = 1;

// Eventos
btnJogar.addEventListener("click", Jogar);
btnReset.addEventListener("click", resetGame );

// Funções
function Jogar(event) {
    event.preventDefault();
   
    const inputNumber = document.querySelector("#inputName");

    console.log("O número digitado foi: " + inputNumber.value);

    if (Number(inputNumber.value) === randomNumber) {
        toggleScreen();

        console.log("Acertou!");
        document.querySelector(".screen2 h2").innerText = `Acertou em ${attempts} tentativas!`;
    }

    attempts++;

}

function resetGame() {
    toggleScreen();
    attempts = 1;
    randomNumber = gerarNumero();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function gerarNumero() {
    return Math.floor(Math.random() * 10);
}