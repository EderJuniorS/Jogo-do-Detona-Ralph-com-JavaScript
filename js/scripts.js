const state = {
    view: {
        quadrado: document.querySelectorAll(".quadrado"),
        enemy: document.querySelector(".enemy"),
        tempoRestante: document.querySelector("#tempo-restante"),
        pontos: document.querySelector("#pontos"),
    },
    valeus: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

function countDown() {
    state.valeus.curretTime--;
    state.view.tempoRestante.textContent = state.valeus.curretTime;

    if (state.valeus.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over: O seu resultado foi: " + state.valeus.result);
    }
}

function playSound(audioName) {
    let audio = new Audio(`./audio/${audioName}.mp3`);
    audio.volume = 0.2;
    audio.play();
}

function randomSquare() {
    state.view.quadrado.forEach((quadrado) => {
        quadrado.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.quadrado[randomNumber];
    randomSquare.classList.add("enemy");
    state.valeus.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.quadrado.forEach((quadrado) => {
        quadrado.addEventListener("mousedown", () => {
            if(quadrado.id === state.valeus.hitPosition){
                state.valeus.result++
                state.view.pontos.textContent = state.valeus.result;
                state.valeus.hitPosition = null;
                playSound("Dano");
            }
        });
    });
}

function initialize() {
    addListenerHitBox();
}

initialize();