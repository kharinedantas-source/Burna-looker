// Candidatos ao Governo do RJ
const candidatos = {
  "55": { nome: "Eduardo Paes", partido: "PSD", foto: "https://i.imgur.com/UpVRVTq.png" },
  "10": { nome: "Garotinho", partido: "REPUBLICANOS", foto: "https://i.imgur.com/6ucl5pa.png" },
  "22": { nome: "Douglas Ruas", partido: "PL", foto: "https://i.imgur.com/aJO7Kkr.png" },
  "50": { nome: "William Siri", partido: "PSOL", foto: "https://i.imgur.com/VaptRr5.png" },
  "29": { nome: "Luan Monteiro", partido: "PCO", foto: "https://i.imgur.com/QwTKhyu.png" },
  "80": { nome: "Juliete Pantoja", partido: "UP", foto: "https://i.imgur.com/ZC1939p.png" },
  "16": { nome: "Cyro Garcia", partido: "PSTU", foto: "https://i.imgur.com/YM0T21x.png" },
  "30": { nome: "André Marinho", partido: "NOVO", foto: "https://i.imgur.com/btCXvii.png" },
  "33": { nome: "Coronel Busnello", partido: "MISSÃO", foto: "https://i.imgur.com/8DaAYX8.png" }
};

let numeroDigitado = "";

function carregarLista() {
  const container = document.getElementById('lista-candidatos');
  if (!container) return;
  container.innerHTML = "";
  Object.keys(candidatos).forEach(num => {
    const cand = candidatos[num];
    container.innerHTML += `
      <div class="candidato-item">
        <span class="item-num">${num}</span>
        <span class="item-nome">${cand.nome}</span>
        <span class="item-partido">${cand.partido}</span>
      </div>
    `;
  });
}

window.inserirNumero = function(n) {
  if (numeroDigitado.length < 2) {
    numeroDigitado += n;
    atualizarTela();
  }
};

function atualizarTela() {
  document.getElementById('d1').innerText = numeroDigitado[0] || "";
  document.getElementById('d2').innerText = numeroDigitado[1] || "";

  const candNome = document.getElementById('cand-nome');
  const candPartido = document.getElementById('cand-partido');
  const foto = document.getElementById('foto-candidato');

  if (numeroDigitado.length === 2) {
    if (candidatos[numeroDigitado]) {
      const cand = candidatos[numeroDigitado];
      candNome.innerText = cand.nome;
      candPartido.innerText = cand.partido;
      foto.src = cand.foto;
      foto.style.display = "block";
    } else {
      candNome.innerText = "VOTO NULO";
      candPartido.innerText = "Número incorreto";
      foto.style.display = "none";
    }
  } else {
    candNome.innerText = "";
    candPartido.innerText = "";
    foto.style.display = "none";
  }
}

window.corrige = function() {
  numeroDigitado = "";
  atualizarTela();
  document.getElementById('tela-conteudo').style.display = "flex";
  document.getElementById('tela-fim').style.display = "none";
};

window.votarBranco = function() {
  numeroDigitado = "";
  atualizarTela();
  document.getElementById('cand-nome').innerText = "VOTO EM BRANCO";
  document.getElementById('cand-partido').innerText = "";
  document.getElementById('foto-candidato').style.display = "none";
};

window.confirma = function() {
  if (numeroDigitado.length === 2 || document.getElementById('cand-nome').innerText === "VOTO EM BRANCO") {
    document.getElementById('tela-conteudo').style.display = "none";
    document.getElementById('foto-candidato').style.display = "none";
    document.getElementById('tela-fim').style.display = "flex";

    setTimeout(() => {
      window.corrige();
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  carregarLista();
});
