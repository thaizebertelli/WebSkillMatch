import { carregarVagas, salvarPerfil, recuperarPerfil } from "./dados.js";

import {
    criarVagas,
    ordenarResultados,
    encontrarMelhorVaga
} from "./motor.js";

import {
  criarAreas,
  criarHabilidades,
  mostrarLogo,
  mostrarCarregando,
  mostrarErro,
  mostrarSemVagas,
  mostrarResultados,
  renderizarVagas,
  renderizarRecomendacao,
  preencherFormulario,
  obterDadosFormulario,
  validarFormulario,
  eventoFormulario,
  iniciarDropdowns,
  atualizarTextoDropdowns,
} from "./ui.js";

// ===============================
// INICIAR SISTEMA
// ===============================

async function iniciarSistema() {
  mostrarLogo();

  iniciarDropdowns();

  atualizarTextoDropdowns();

  try {
    //Carrega vagas do JSON

    const dadosJSON = await carregarVagas();

    //Transforma em objetos da classe

    const vagas = criarVagas(dadosJSON);

    //Lista de áreas

    const areas = [...new Set(vagas.map((vaga) => vaga.area))];

    criarAreas(areas);

    //Lista de habilidades

    const habilidades = [...new Set(vagas.flatMap((vaga) => vaga.requisitos))];

    criarHabilidades(habilidades);

    //Recupera perfil salvo

    const perfilSalvo = recuperarPerfil();

    if (perfilSalvo) {
      preencherFormulario(perfilSalvo);
    }

    //Evento do formulário

    eventoFormulario(() => {
      analisar(vagas);
    });
  } catch {
    mostrarErro();
  }
}

iniciarSistema();

// ===============================
// ANALISAR
// ===============================

function analisar(vagas) {
  const candidato = obterDadosFormulario();

  if (!validarFormulario(candidato)) {
    return;
  }

  salvarPerfil(candidato);

  mostrarCarregando();

  let resultados = vagas.map(vaga =>
    vaga.analisarCompatibilidade(candidato)
);

  resultados = ordenarResultados(resultados);

  if (resultados.length === 0) {
    mostrarSemVagas();

    return;
  }

  const melhorVaga = encontrarMelhorVaga(resultados);

  const habilidadesParaEstudar = [
    ...new Set(
      resultados.flatMap((resultado) => resultado.habilidadesFaltantes),
    ),
  ];

  mostrarResultados();

  renderizarVagas(resultados, melhorVaga);

  renderizarRecomendacao(
    candidato.nome,

    habilidadesParaEstudar,
  );
}
