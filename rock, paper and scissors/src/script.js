let jogadas = ["pedra", "papel", "tesoura"];
let pontosJogador = 0;
let pontosComputador = 0;
let limitePontos = 3;

const selecaoPedra = document.querySelector("img#pedra");
const selecaoPapel = document.querySelector("img#papel");
const selecaoTesoura = document.querySelector("img#tesoura");

const mensagem = document.querySelector("#mensagem");
const pontuacaoComputador = document.querySelector("#pontos-computador");
const pontuacaoJogador = document.querySelector("#pontos-jogador");
const body = document.querySelector("body");
const modal = document.createElement("div");

function jogo(evento) {
  let valorSorteado = jogadas[Math.floor(Math.random() * jogadas.length)];
  let jogadaUsuario = evento.target.id;

  console.log("Computador: " + valorSorteado);
  console.log("Usuário: " + jogadaUsuario);

  if (jogadaUsuario == valorSorteado) {
    mensagem.innerHTML = `<p class="flex justify-center">Empatou!</p>`;
  } else if (
    (jogadaUsuario == "pedra" && valorSorteado == "tesoura") ||
    (jogadaUsuario == "papel" && valorSorteado == "pedra") ||
    (jogadaUsuario == "tesoura" && valorSorteado == "papel")
  ) {
    mensagem.innerHTML = `<p class="flex justify-center">Você ganhou, "${jogadaUsuario}" ganha de "${valorSorteado}".</p>`;
    pontosJogador++;
    pontuacaoJogador.innerHTML = `Pontos: ${pontosJogador}`;
  } else {
    mensagem.innerHTML = `<p class="flex justify-center">Você perdeu, "${jogadaUsuario}" perde para "${valorSorteado}".</p>`;
    pontosComputador++;
    pontuacaoComputador.innerHTML = `Pontos: ${pontosComputador}`;
  }

  if (pontosJogador == limitePontos || pontosComputador == limitePontos) {
    modal.innerHTML = `<div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  Fim de jogo!
                </h3>
                <div class="mt-2">
                  <p id="modal-text" class="text-sm text-gray-500">
                    Foi atingida a pontuação máxima do jogo, clique no botão
                    abaixo para jogar novamente!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:justify-center sm:px-6"
          >
            <button
              id="botao-reiniciar"
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-green-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Jogar novamente!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    body.appendChild(modal);
    const botaoJogarNovamente = document.querySelector("#botao-reiniciar");

    botaoJogarNovamente.addEventListener("click", () => {
      location.reload();
    });
  }

  console.log(pontosComputador);
  console.log(pontosJogador);
}

selecaoPedra.addEventListener("click", jogo);
selecaoPapel.addEventListener("click", jogo);
selecaoTesoura.addEventListener("click", jogo);
