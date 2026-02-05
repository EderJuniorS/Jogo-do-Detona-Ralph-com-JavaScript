<div align="center">
  <h1>🎮 Jogo do Detona Ralph</h1>
  
  <p>
    Um jogo arcade interativo desenvolvido para praticar conceitos fundamentais de 
    JavaScript, manipulação de DOM e Eventos.
  </p>

  <img src="https://img.shields.io/github/deployments/EderJuniorS/Jogo-do-Detona-Ralph-com-JavaScript/github-pages?label=Deploy&style=flat-square&logo=github">
  <img src="https://img.shields.io/github/last-commit/EderJuniorS/Jogo-do-Detona-Ralph-com-JavaScript?style=flat-square&color=blue">
  
  <br><br>

  <a href="https://ederjuniors.github.io/Jogo-do-Detona-Ralph-com-JavaScript">
    <img src="https://img.shields.io/badge/🕹️_Jogar_Agora-Online-success?style=for-the-badge" alt="Jogar Agora">
  </a>
</div>

<br>

<div align="center">
  <img src="img/Print_Jogo.png" alt="Preview do Jogo" width="700px" style="border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.5);">
</div>

<br>

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do bootcamp **Ri Happy - Front-end do Zero (DIO)**. O objetivo foi criar uma versão simplificada do estilo "Whack-a-Mole" (Acerte a Toupeira), onde o jogador deve reagir rapidamente para clicar no personagem antes que ele desapareça.

Embora lúdico, o projeto foca na lógica de **programação assíncrona** e gestão de estados (pontuação, tempo e vidas).

## 🚀 Funcionalidades & Regras

- **Temporizador:** O jogo possui um *countdown* de 60 segundos gerenciado via JavaScript.
- **Sistema de Pontuação:** Incremento em tempo real ao detectar o evento de `mousedown`.
- **Mecânica de Vidas:** O jogador possui 3 vidas.
- **Áudio Dinâmico:** Efeitos sonoros acionados por eventos de clique.
- **Design Arcade:** Estilização visual inspirada em jogos retrô 8-bits.

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto utiliza a tríade fundamental da web, focando na aplicação prática de lógica de programação:

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **Estrutura Semântica:** Organização dos elementos do painel e grid do jogo.
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3) **Estilização e Animações:** Uso de Flexbox para layout e transições de background.
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **Lógica do Jogo:**
    - `setInterval()`: Para controlar o tempo de jogo e a aparição aleatória do inimigo.
    - `addEventListener()`: Para capturar a interação do usuário (cliques).
    - `Math.random()`: Para gerar posições imprevisíveis no grid.
    - **Manipulação do DOM**: Seleção e alteração de classes CSS (`classList.add/remove`) dinamicamente.

## 📂 Estrutura do Projeto

```bash
/
├── img/                 # Assets visuais (Personagens, background)
├── sounds/              # Efeitos sonoros (.m4a)
├── src/
│   ├── scripts/
│   │   └── engine.js    # Lógica principal do jogo
│   └── styles/
│       └── main.css     # Estilos globais e responsividade
├── index.html           # Ponto de entrada
└── README.md            # Documentação
```

## 🏁 Como Executar Localmente
Clone o projeto:
```bash
git clone [https://github.com/EderJuniorS/Jogo-do-Detona-Ralph-com-JavaScript.git](https://github.com/EderJuniorS/Jogo-do-Detona-Ralph-com-JavaScript.git)
