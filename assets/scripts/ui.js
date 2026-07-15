// ===============================
// ELEMENTOS DA PÁGINA
// ===============================

const formulario = document.getElementById("formPerfil");

const nome = document.getElementById("nome");
const experiencia = document.getElementById("experiencia");

const areaInicial = document.getElementById("areaInicial");

const mensagemSistema = document.getElementById("mensagemSistema");

const resultadoVagas = document.getElementById("resultadoVagas");

const listaVagas = document.getElementById("listaVagas");

const recomendacao = document.getElementById("recomendacao");

const textoRecomendacao = document.getElementById("textoRecomendacao");

const dropdownArea = document.getElementById("dropdownArea");
const dropdownHabilidades = document.getElementById("dropdownHabilidades");

const botaoArea = document.getElementById("botaoArea");
const botaoHabilidades = document.getElementById("botaoHabilidades");

const listaAreas = document.getElementById("listaAreas");
const listaHabilidades = document.getElementById("listaHabilidades");

// ===============================
// PEGAR DADOS DO FORMULÁRIO
// ===============================

export function obterDadosFormulario() {
  const areas = [...document.querySelectorAll(".area:checked")].map(
    (area) => area.value,
  );

  const habilidades = [...document.querySelectorAll(".habilidade:checked")].map(
    (habilidade) => habilidade.value,
  );

  return {
    nome: nome.value.trim(),

    area: areas,

    habilidades,

    experienciaMeses: Number(experiencia.value),
  };
}

// ===============================
// PREENCHER FORMULÁRIO
// ===============================

export function preencherFormulario(candidato) {
  if (!candidato) return;

  nome.value = candidato.nome;

  experiencia.value = candidato.experienciaMeses;

  document.querySelectorAll(".area").forEach((item) => {
    item.checked = candidato.area.includes(item.value);
  });

  document.querySelectorAll(".habilidade").forEach((item) => {
    item.checked = candidato.habilidades.includes(item.value);
  });
}

// ===============================
// MOSTRAR LOGO
// ===============================

export function mostrarLogo() {
  areaInicial.style.display = "flex";

  mensagemSistema.style.display = "none";

  resultadoVagas.style.display = "none";

  recomendacao.style.display = "none";
}

// ===============================
// MOSTRAR MENSAGEM
// ===============================

export function mostrarMensagem(texto) {
  areaInicial.style.display = "none";

  resultadoVagas.style.display = "none";

  recomendacao.style.display = "none";

  mensagemSistema.style.display = "block";

  mensagemSistema.textContent = texto;
}

// ===============================
// MOSTRAR RESULTADOS
// ===============================

export function mostrarResultados() {
  areaInicial.style.display = "none";

  mensagemSistema.style.display = "none";

  resultadoVagas.style.display = "block";

  recomendacao.style.display = "block";
}

// ===============================
// LIMPAR CARDS
// ===============================

export function limparCards() {
  listaVagas.innerHTML = "";
}

// ===============================
// EVENTO DO FORMULÁRIO
// ===============================

export function eventoFormulario(callback) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    callback();
  });
}

// ===============================
// LISTA DE ÁREAS
// ===============================

export function criarAreas(areas) {
  listaAreas.innerHTML = "";

  areas.forEach((area) => {
    const label = document.createElement("label");

    label.innerHTML = `
            <input
                type="checkbox"
                class="area"
                value="${area}">
            ${area}
        `;

    listaAreas.appendChild(label);
  });
}

// ===============================
// LISTA DE HABILIDADES
// ===============================

export function criarHabilidades(habilidades) {
  listaHabilidades.innerHTML = "";

  habilidades.forEach((habilidade) => {
    const label = document.createElement("label");

    label.innerHTML = `
            <input
                type="checkbox"
                class="habilidade"
                value="${habilidade}">
            ${habilidade}
        `;

    listaHabilidades.appendChild(label);
  });
}

// ===============================
// DROPDOWNS
// ===============================

export function iniciarDropdowns() {
  botaoArea.addEventListener("click", () => {
    dropdownArea.classList.toggle("ativo");
  });

  botaoHabilidades.addEventListener("click", () => {
    dropdownHabilidades.classList.toggle("ativo");
  });
}

// ===============================
// ATUALIZAR BOTÕES
// ===============================

export function atualizarTextoDropdowns() {
  document.addEventListener("change", () => {
    const areasSelecionadas = [
      ...document.querySelectorAll(".area:checked"),
    ].map((item) => item.value);

    botaoArea.textContent = areasSelecionadas.length
      ? areasSelecionadas.join(", ")
      : "Selecione";

    const habilidadesSelecionadas = [
      ...document.querySelectorAll(".habilidade:checked"),
    ].map((item) => item.value);

    botaoHabilidades.textContent = habilidadesSelecionadas.length
      ? habilidadesSelecionadas.join(", ")
      : "Selecione";
  });
}

document.addEventListener("click", function (evento) {
  if (!dropdownArea.contains(evento.target)) {
    dropdownArea.classList.remove("ativo");
  }

  if (!dropdownHabilidades.contains(evento.target)) {
    dropdownHabilidades.classList.remove("ativo");
  }
});

// ===============================
// RENDERIZAR VAGAS
// ===============================

export function renderizarVagas(resultados, melhorVaga) {
  listaVagas.innerHTML = "";

  resultados.forEach((resultado) => {
    const card = document.createElement("article");

    card.classList.add("card");

    if (resultado.classificacao === "Alta") {
      card.classList.add("alta");
    } else if (resultado.classificacao === "Média") {
      card.classList.add("media");
    } else {
      card.classList.add("baixa");
    }

    if (resultado.vaga.id === melhorVaga.vaga.id) {
      const destaque = document.createElement("span");

      destaque.className = "melhor-vaga";

      destaque.textContent = "★ Melhor compatibilidade";

      card.appendChild(destaque);
    }

    card.innerHTML += `

            <h3>${resultado.vaga.cargo}</h3>

            <p class="card-info">

                ${resultado.vaga.empresa} •
                ${resultado.vaga.estado} •
                ${resultado.vaga.modalidade} •
                R$ ${resultado.vaga.salario}
                

            </p>

            <div class="card-conteudo">

                <div class="card-coluna">

                    <h4>Habilidades possuídas</h4>

                    <p>${resultado.habilidadesPossuidas.join(" • ") || "-"}</p>

                </div>

                <div class="card-coluna">

                    <h4>Habilidades faltantes</h4>

                    <p>${resultado.habilidadesFaltantes.join(" • ") || "-"}</p>

                </div>

            </div>

            <p class="compatibilidade">

                Compatibilidade: ${resultado.compatibilidade}%

            </p>

        `;

    listaVagas.appendChild(card);
  });
}

// ===============================
// RECOMENDAÇÃO DE ESTUDO
// ===============================

export function renderizarRecomendacao(nome, habilidades) {
  textoRecomendacao.innerHTML = "";

  if (habilidades.length === 0) {
    textoRecomendacao.innerHTML = `
            <strong>${nome}</strong>, parabéns! Você atende todos os requisitos das vagas cadastradas.
        `;

    return;
  }

  textoRecomendacao.innerHTML = `

        <strong>${nome}</strong>, para aumentar sua compatibilidade com as vagas,
        recomendamos estudar:

        <br><br>

        <strong>

        ${habilidades.join(" • ")}

        </strong>

    `;
}

// ===============================
// VALIDAR FORMULÁRIO
// ===============================

export function validarFormulario(candidato) {
  if (candidato.nome === "") {
    mostrarMensagem("Informe seu nome.");

    return false;
  }

  if (candidato.area.length === 0) {
    mostrarMensagem("Selecione pelo menos uma área.");

    return false;
  }

  if (candidato.habilidades.length === 0) {
    mostrarMensagem("Selecione pelo menos uma habilidade.");

    return false;
  }

  return true;
}

// ===============================
// CARREGANDO
// ===============================

export function mostrarCarregando() {
  mostrarMensagem("Carregando vagas...");
}

// ===============================
// ERRO
// ===============================

export function mostrarErro() {
  mostrarMensagem("Não foi possível carregar as vagas. Tente novamente.");
}

// ===============================
// NENHUMA VAGA
// ===============================

export function mostrarSemVagas() {
  mostrarMensagem("Nenhuma vaga encontrada para os filtros selecionados.");
}

// ===============================
// ATUALIZAR BOTÕES
// ===============================

export function atualizarBotoesDropdown() {
  const areasSelecionadas = [...document.querySelectorAll(".area:checked")].map(
    (item) => item.value,
  );

  botaoArea.textContent = areasSelecionadas.length
    ? areasSelecionadas.join(", ")
    : "Selecione";

  const habilidadesSelecionadas = [
    ...document.querySelectorAll(".habilidade:checked"),
  ].map((item) => item.value);

  botaoHabilidades.textContent = habilidadesSelecionadas.length
    ? habilidadesSelecionadas.join(", ")
    : "Selecione";
}
