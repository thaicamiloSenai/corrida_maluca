/* DOM -> Document (index.html); Object; Manipulation*/
// getElementById (pegar elemento pelo Id): funções prontas do java 

const carro1 = document.getElementById("carro1"); 
// está pegando o elemento que tem o "id = carro1" e colocando na variável carro1
const carro2 = document.getElementById("carro2");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const reiniciar = document.getElementById("reiniciar");

const mensagem = document.getElementById("mensagem");
const chegada = document.querySelector(".chegada"); 
// ".chegada" -> o ponto se refere a classe

let position1 = 0;
let position2 = 0;
let terminou = false;
// diferença CONST e LET:
//CONST -> variável que não muda 
//LET -> variável que muda, escopo local (só é vista dentro de onde foi criada)
//escopo global: consegue ser vista no código todo 

function acelerar(jogador){
    if(terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);
    //Diferença da largura da chegada até o carro, e o início até o carro
    
    if(jogador === 1){
        position1 = Math.min(position1 + 15, limite);
        //Pega o valor mínimo da posição dele mais quinze ou a posição dele dependendo de qual é maior 
        carro1.style.left = `${position1}px`;

        if(position1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 venceu";
            terminou = true;
        }
    }

    if(jogador === 2){
        position2 = Math.min(position2 + 15, limite);
        //Pega o valor mínimo da posição dele mais quinze ou a posição dele dependendo de qual é maior
        carro2.style.left = `${position2}px`;

        if(position2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 venceu";
            terminou = true;
        }
    }
}

botao1.addEventListener("click", function() {acelerar(1)});
botao2.addEventListener("click", function() {acelerar(2)});

document.addEventListener("keydown", function (evento) {
    if(evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if(tecla === "a") {
        acelerar(1);
    }

    if(tecla === "l") {
        acelerar(2);
    }
});

reiniciar.addEventListener("click", function () {
    position1 = 0;
    position2 = 0; 
    terminou = false;

    carro1.style.left = "0px";
    carro2.style.left = "0px";

    mensagem.textContent = "Preparar, apontar, já!";
});

