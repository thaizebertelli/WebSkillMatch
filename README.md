# SkillMatch Web

Aplicação web desenvolvida em HTML, CSS e JavaScript puro para analisar a compatibilidade entre o perfil de um candidato e vagas da área de tecnologia.

O sistema permite que o usuário informe seu perfil profissional, compare suas habilidades com os requisitos das vagas e receba uma recomendação personalizada de estudos.

---

## Objetivo

O projeto foi desenvolvido como Projeto Final do Módulo 01 do curso de JavaScript Avançado da SCTEC/SENAI.

O objetivo foi transformar o projeto desenvolvido anteriormente em console (SkillMatch JS) em uma aplicação web completa, utilizando HTML, CSS e JavaScript, aplicando os conceitos estudados durante o módulo.

---

## Funcionalidades

- Cadastro do perfil do candidato
- Seleção de uma ou mais áreas de atuação
- Seleção de múltiplas habilidades
- Informação do tempo de experiência em meses
- Carregamento das vagas através de arquivo JSON utilizando Fetch API
- Cálculo automático da compatibilidade entre candidato e vagas
- Ordenação automática das vagas da maior para a menor compatibilidade
- Destaque para a vaga mais compatível
- Exibição das habilidades encontradas e faltantes
- Recomendação personalizada de estudos
- Persistência dos dados do candidato utilizando Local Storage
- Interface responsiva
- Tratamento dos estados de carregamento, erro e ausência de vagas

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Flexbox
- Fetch API
- Local Storage
- Módulos ES (Import/Export)
- JSON

---

## Conceitos aplicados

Durante o desenvolvimento foram utilizados os principais conceitos trabalhados durante o módulo:

- Variáveis (const e let)
- Condicionais
- Operadores
- Arrays
- Métodos de Arrays
  - map()
  - filter()
  - reduce()
  - flatMap()
- Objetos
- Classes
- Herança
- this
- Callback
- Closure
- Async/Await
- Promises
- Fetch API
- Manipulação do DOM
- Eventos
- Validação de Formulários
- Local Storage
- Responsividade
- HTML Semântico
- SEO Básico
- Acessibilidade

---

## Estrutura do projeto

```
webskillmatch/
│
├── index.html
├── README.md
│
└── assets
    ├── dados
    │   └── vagas.json
    │
    ├── img
    │
    ├── scripts
    │   ├── main.js
    │   ├── motor.js
    │   ├── dados.js
    │   └── ui.js
    │
    └── styles
        └── index.style.css
```

---

## Demonstração

A aplicação pode ser acessada em:

https://thaizebertelli.github.io/WebSkillMatch/

---

## Funcionamento

1. O usuário informa seu nome.
2. Seleciona uma ou mais áreas de atuação.
3. Seleciona suas habilidades.
4. Informa o tempo de experiência.
5. O sistema busca as vagas cadastradas.
6. As vagas são ordenadas automaticamente da maior para a menor compatibilidade.
7. A vaga mais compatível recebe um destaque visual.
8. O sistema apresenta uma recomendação personalizada de estudos.

---

## Organização do código

O projeto foi dividido em módulos para facilitar sua manutenção.

### main.js

Responsável por controlar o fluxo principal da aplicação.

### motor.js

Contém toda a lógica de negócio:

- Classes
- Herança
- Compatibilidade
- Melhor vaga
- Ordenação
- Recomendação

### dados.js

Responsável por:

- carregar o JSON
- utilizar Fetch API
- salvar e recuperar informações do Local Storage

### ui.js

Responsável pela interface:

- criação dos cards
- manipulação do DOM
- formulários
- mensagens
- renderização dos resultados

---

## Persistência

O perfil do candidato é salvo utilizando o Local Storage.

Assim, ao recarregar a página, os dados anteriormente preenchidos permanecem disponíveis.

---

## Acessibilidade

A aplicação foi desenvolvida utilizando:

- HTML semântico
- labels associadas aos campos
- foco visível
- atributos aria-label
- textos alternativos (alt)
- estrutura adequada de títulos

---

## SEO

Foram utilizados:

- title descritivo
- meta description
- estrutura semântica
- hierarquia correta de títulos

---

## Responsividade

A interface foi desenvolvida utilizando:

- Flexbox
- Media Queries
- imagens responsivas

---

## Depuração

Durante o desenvolvimento foi utilizado o Debugger do navegador (DevTools) para acompanhar a execução do código, inspecionar variáveis e validar o cálculo da compatibilidade entre candidatos e vagas.

---

## Controle de versão

O desenvolvimento foi realizado utilizando Git e GitHub, seguindo a estratégia de branches:

- main
- develop

Foram utilizados commits descritivos durante toda a evolução do projeto.

---

## Kanban

O gerenciamento das atividades foi realizado utilizando um quadro Kanban no Trello, organizando as tarefas em:

- Backlog
- A Fazer
- Em Andamento
- Concluído

Link para o Quadro:

https://trello.com/b/fjFc83iK/skillmatch-projeto-final

---

## Melhorias futuras

- Tema claro/escuro
- Busca por empresa
- Cadastro dinâmico de vagas
- Integração com API pública de empregos

---

## Desenvolvido por

**Thaize de Paula Bertelli**

Projeto Final — JavaScript Avançado

SCTEC / SENAI

Julho • 2026
