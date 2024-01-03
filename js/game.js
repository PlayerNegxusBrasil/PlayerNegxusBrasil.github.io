let jogador = {
  nivel: 1,
  vida: 100,
  vidaMaxima: 100,
  ataque: 10,
  experiencia: 0
};

let dragoes = {
  quantidade: 3,
  vida: 50
};

function atacarDragao() {
  const dano = calcularDanoJogador();
  dragoes.vida -= dano;

  if (dragoes.vida <= 0) {
    jogador.experiencia += 20;
    jogadorSubirNivel();
    dragoes.quantidade--;

    if (dragoes.quantidade > 0) {
      dragoes.vida = 50;
      alert("Você derrotou um dragão! Continue a batalha.");
    } else {
      alert("Você derrotou todos os dragões! Vitória!");
      reiniciarJogo();
    }
  } else {
    const danoDragao = calcularDanoDragao();
    jogador.vida -= danoDragao;

    atualizarUI();

    if (jogador.vida <= 0) {
      alert("Você foi derrotado pelos dragões. Fim de jogo!");
      reiniciarJogo();
    }
  }
}

function curarJogador() {
  const quantidadeCura = 20;
  jogador.vida += quantidadeCura;

  if (jogador.vida > jogador.vidaMaxima) {
    jogador.vida = jogador.vidaMaxima;
  }

  atualizarUI();
}

function calcularDanoJogador() {
  return Math.floor(Math.random() * jogador.ataque) + 1;
}

function calcularDanoDragao() {
  return Math.floor(Math.random() * 15) + 1;
}

function reiniciarJogo() {
  jogador = {
    nivel: 1,
    vida: 100,
    vidaMaxima: 100,
    ataque: 10,
    experiencia: 0
  };

  dragoes = {
    quantidade: 3,
    vida: 50
  };

  atualizarUI();
}

function atualizarUI() {
  document.getElementById("player-level").innerText = `Nível: ${jogador.nivel}`;
  document.getElementById("player-health").innerText = `Vida: ${jogador.vida}/${jogador.vidaMaxima}`;
  document.getElementById("player-attack").innerText = `Ataque: ${jogador.ataque}`;
  document.getElementById("player-experience").innerText = `Experiência: ${jogador.experiencia}`;
  document.getElementById("dragon-count").innerText = `Dragões Restantes: ${dragoes.quantidade}`;
  document.getElementById("dragon-health").innerText = `Vida do Dragão: ${dragoes.vida}`;
}

function jogadorSubirNivel() {
  if (jogador.experiencia >= 50 * jogador.nivel) {
    jogador.nivel++;
    jogador.ataque += 5;
    jogador.vidaMaxima += 20;
    jogador.vida = jogador.vidaMaxima;
    jogador.experiencia = 0;
    alert(`Você subiu de nível! Agora está no nível ${jogador.nivel}.`);
  }
  atualizarUI();
}

atualizarUI();
