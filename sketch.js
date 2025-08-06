// Variáveis ----------
let tela = 0; 
let xJogador = [0, 0, 0, 0];
let yJogador = [300, 370, 440, 510];
let jogador = ["🚜", "🚲", "🏙️", "🌾"];
let teclas = ["a", "s", "d", "f"];
let vencedor = "";
let quantidade = jogador.length;

// Funções básicas ----------
function setup() {
  createCanvas(500, 650);
  textAlign(CENTER, CENTER);
}

// Telas ----------
function draw() {
  if (tela == 0) {
    menu();
  }
  if (tela == 1) {
    jogo();
  }
  if (tela == 2) {
    fim();
  }
}

// Menu ----------
function menu() {
  background(200, 250, 200);
  fill(0);
  textFont('georgia');
  textSize(37);
  text("Festejando a conexão\nCampo e Cidade", width/2, 150);
  
  textFont('Verdana');
  textSize(13);
  text("Para jogar, utilize as seguintes teclas:", width/2, 260);
  textSize(17);
  text("A - 🚜 | S - 🚲 | D - 🏙️ | F - 🌾", width/2, 300);
  
  fill(255, 204, 0);
  rect(200, 400, 100, 50);
  fill(0);
  textFont('Courier New');
  text("Iniciar", 250, 425);
}

// Cenário ----------
function cenario() {
  // Céu
  background(135, 206, 235);
  fill(255, 223, 0);
  ellipse(450, 60, 50, 50);
  
  // Campo e cidade
  fill(34, 139, 34);
  rect(0, 250, 250, 400);
  fill(169, 169, 169);
  rect(250, 250, 250, 400);
  
  // Linha divisória
  stroke(0);
  line(250, 250, 650);
}

// Jogo ----------
function jogo() {
  cenario();
  jogadores();
  chegada();
  dicas();
  verificar();
}

function jogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function chegada() {
  fill("white");
  rect(450, 250, 10, 400); 
  fill("black");
  for (let y = 250; y < 650; y += 20) {
    rect(450, y, 10, 10);
  }
}

function dicas() {
  fill(255);
  textFont('Verdana');
  textSize(14);
  text("Pressione a sua tecla para correr!", width/2, 30);
}

function verificar() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 450 && vencedor == "") {
      vencedor = jogador[i];
      tela = 2;
    }
  }
}

// Fim do Jogo ----------
function fim() {
  background(255, 255, 200);
  fill(0);
   textFont('Courier New');
  textSize(25);
  text(vencedor + " venceu!\nO campo e a Cidade se conectaram!", width/2, 300);
  textSize(15);
  text("Clique para jogar novamente", width/2, 380);
}

// Tela de reiniciar ----------
function mousePressed() {
  if (tela == 0) {
    if (mouseX > 200 && mouseX < 300 &&
        mouseY > 400 && mouseY < 450) {
      tela = 1;
    }
  } else if (tela == 2) {
    xJogador = [0, 0, 0, 0];
    vencedor = "";
    tela = 0;
  }
}

function keyReleased() {
  if (tela == 1) {
    for (let i = 0; i < quantidade; i++) {
      if (key == teclas[i]) {
        xJogador[i] += random(10, 25);
      }
    }
  }
}