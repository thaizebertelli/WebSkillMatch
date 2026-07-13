// ===============================
// CARREGAR VAGAS
// ===============================

export async function carregarVagas() {
  try {
    const resposta = await fetch("./assets/dados/vagas.json");

    if (!resposta.ok) {
      throw new Error("Erro ao carregar as vagas.");
    }

    const vagas = await resposta.json();

    return vagas;
  } catch (erro) {
    console.error(erro);

    throw erro;
  }
}

// ===============================
// SALVAR PERFIL
// ===============================

export function salvarPerfil(candidato) {
  localStorage.setItem("perfilCandidato", JSON.stringify(candidato));
}

// ===============================
// RECUPERAR PERFIL
// ===============================

export function recuperarPerfil() {
  const perfil = localStorage.getItem("perfilCandidato");

  if (perfil === null) {
    return null;
  }

  return JSON.parse(perfil);
}
