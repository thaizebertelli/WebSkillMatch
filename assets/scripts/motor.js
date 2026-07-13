// ===============================
// CLASSE VAGA
// ===============================

export class Vaga {
  constructor(
    id,
    empresa,
    cargo,
    area,
    estado,
    nivel,
    requisitos,
    salario,
    modalidade,
    beneficios,
    ativa,
  ) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.area = area;
    this.estado = estado;
    this.nivel = nivel;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    this.beneficios = beneficios;
    this.ativa = ativa;
  }

  exibirResumo() {
    return `${this.cargo} - ${this.empresa}`;
  }

  analisarCompatibilidade(candidato) {
    const habilidadesPossuidas = this.requisitos.filter((requisito) =>
      candidato.habilidades.includes(requisito),
    );

    const habilidadesFaltantes = this.requisitos.filter(
      (requisito) => !candidato.habilidades.includes(requisito),
    );

    const compatibilidade =
      (habilidadesPossuidas.length / this.requisitos.length) * 100;

    let classificacao = "";

    if (compatibilidade >= 80) {
      classificacao = "Alta";
    } else if (compatibilidade >= 50) {
      classificacao = "Média";
    } else {
      classificacao = "Baixa";
    }

    return {
      vaga: this,

      compatibilidade: Number(compatibilidade.toFixed(0)),

      classificacao,

      habilidadesPossuidas,

      habilidadesFaltantes,
    };
  }
}

// ===============================
// HERANÇA
// ===============================

export class VagaTecnologia extends Vaga {
  constructor(...dados) {
    super(...dados);
  }

  exibirResumo() {
    return `${this.cargo} • ${this.empresa} (${this.estado})`;
  }
}

// ===============================
// MELHOR VAGA
// ===============================

export function encontrarMelhorVaga(resultados) {
  return resultados.reduce((melhor, atual) =>
    atual.compatibilidade > melhor.compatibilidade ? atual : melhor,
  );
}

// ===============================
// RECOMENDAÇÃO
// ===============================

export function gerarRecomendacao(resultados) {
  return [
    ...new Set(
      resultados.flatMap((resultado) => resultado.habilidadesFaltantes),
    ),
  ];
}

// ===============================
// JSON → CLASSES
// ===============================

export function criarVagas(dados) {
  return dados.map(
    (vaga) =>
      new VagaTecnologia(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.area,
        vaga.estado,
        vaga.nivel,
        vaga.requisitos,
        vaga.salario,
        vaga.modalidade,
        vaga.beneficios,
        vaga.ativa,
      ),
  );
}
