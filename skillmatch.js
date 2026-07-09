//Dados do candidado

const candidato = {
    nome: "Thaize Bertelli",
    area: ["Front-End", "UX/UI Design"],
    habilidades: ["JavaScript", "GitHub", "Figma", "HTML", "CSS"],
    experienciaMeses: 8,
    estudandoAtualmente: true,
};

//Classe principal das vagas

class Vaga {

    constructor(id, empresa, cargo, requisitos, salario, modalidade, beneficios, ativa) {

        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
        this.beneficios = beneficios;
        this.ativa = ativa;
    }

    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`;
    }
}

//Classe vagas front-end

class VagaFrontEnd extends Vaga {

    constructor( id, empresa, cargo, requisitos, salario, modalidade, beneficios, ativa, nivel) {

        super(id, empresa, cargo, requisitos, salario, modalidade, beneficios, ativa);

        this.nivel = nivel;
    }

    exibirNivel() {
        return `Nível da vaga: ${this.nivel}`;
    }
}

//Lista de vagas

const vagas = [

    new VagaFrontEnd(
        1,
        "TechStart",
        "Desenvolvedor Front-End Júnior",
        ["Kanban", "Lógica de Programação"],
        2800,
        "Remoto",
        ["Vale alimentação", "Plano de saúde", "Auxílio home office"],
        true,
        "Júnior"
    ),

    new VagaFrontEnd(
        2,
        "CodeLab",
        "Estágio Front-End",
        ["JavaScript", "Kanban", "HTML"],
        1200,
        "Híbrido",
        ["Vale Transporte", "Curso interno"],
        true,
        "Estágio"
    ),

    new VagaFrontEnd(
        3,
        "WebSolutions",
        "Programador Front-end Júnior",
        ["JavaScript", "Figma", "HTML", "CSS"],
        2500,
        "Presencial",
        ["Vale alimentação", "Plano de saúde", "Vale transporte", "Gympass"],
        false,
        "Júnior"
    )

];

//Promise para simular análise das vagas

function analisarVagasSimuladas() {

    return new Promise((resolve) => {

        console.log("Analisando compatibilidade das vagas...");

        setTimeout(() => {

            const resultadosAnalise = vagas.map(vaga =>
                analisarCompatibilidade(candidato, vaga)
            );

            resolve(resultadosAnalise);

        }, 2000);

    });
}

//Função análise de compatibilidade

function analisarCompatibilidade(candidato, vaga){

    //Habilidades possuidas
    const habilidadesPossuidas = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito));

    //habilidades faltantes
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
    
    //cálculo porcentagem
    const compatibilidade = (habilidadesPossuidas.length / vaga.requisitos.length) * 100;

    //Classificação
    let classificacao = "";

    if (compatibilidade >= 80){
        classificacao = "Alta compatibilidade"
    } else if (compatibilidade >= 50){
        classificacao = "Média compatibilidade"
    } else {
        classificacao = "Baixa compatibilidade"
    }

    //Retorno Informações
    return {
        empresa:vaga.empresa,
        cargo:vaga.cargo,
        compatibilidade: compatibilidade.toFixed(0),
        habilidadesPossuidas,
        habilidadesFaltantes,
        classificacao
    };
}

//Gerar resultados para analisar a vaga com maior compatibilidade

const resultados = vagas.map(vaga =>
    analisarCompatibilidade(candidato, vaga)
);

//Analisar vaga com maior compatibilidade

const melhorVaga = resultados.reduce((melhor, atual) => {
    if (Number(atual.compatibilidade) > Number(melhor.compatibilidade)){
        return atual;
    } else{
        return melhor;
    }
});

//Gerar lista das habilidades que faltam

const habilidadesParaEstudar = [
    ...new Set(
        resultados.flatMap(resultado => resultado.habilidadesFaltantes))
];

//Resultado da compatibilidade

async function iniciarSistema() {

    const resultados = await analisarVagasSimuladas();

console.log("-----Análise de Vagas carregas com sucesso!-----");

vagas.forEach(vaga => {

    let resultado = analisarCompatibilidade(candidato, vaga);

    console.log(vaga.exibirResumo());
    console.log(vaga.exibirNivel());

    console.log(`COMPATIBILIDADE: ${resultado.compatibilidade}%
CLASSIFICAÇÃO: ${resultado.classificacao}
                
HABILIDADE POSSUIDAS: ${resultado.habilidadesPossuidas.join(" - ")}
                
HABILIDADES FALTANTES: ${resultado.habilidadesFaltantes.join(" - ")}
----------------------------`
     );
});

//Resultado da melhor vaga

console.log(`-----Melhor Vaga-----
    
EMPRESA: ${melhorVaga.empresa}
CARGO: ${melhorVaga.cargo}
COMPATIBILIDADE: ${melhorVaga.compatibilidade}%
----------------------------`
)

//Resultado da recomendação de estudos

console.log(`-----Recomendação de Estudos-----

Habilidades que aparecem nas vagas que você não possui: ${habilidadesParaEstudar.join(" - ")}`
);

//Função com callback

function finalizarAnalise(nomeCandidato, callback) {

    console.log("Análise finalizada com sucesso!");

    callback(nomeCandidato);
}

//Mensagem final

function exibirMensagemFinal(nome) {

    console.log(`${nome}, revise as habilidades faltantes e continue evoluindo seus estudos Front-End!`);
}

//Closure para contar análises

function criarContadorDeAnalises() {

    let totalAnalises = 0;

    return function () {

        totalAnalises++;

        return totalAnalises;
    };
}

const contadorAnalises = criarContadorDeAnalises();

//Execução  Callback e Closure

finalizarAnalise(candidato.nome, exibirMensagemFinal);

console.log(`Total de análises realizadas: ${contadorAnalises()}`);

}


iniciarSistema();