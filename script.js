// 2 players, they can choose the name
// Several lists with categories
// A table with the results
// New game button
// Score marker



// VARIABLES

    // DOM SELECTORS

const newGame = document.querySelector("#newGame");
const start = document.querySelector("#start");
const game = document.querySelector("#game");

let player1 = document.querySelector("#name1");
let player2 = document.querySelector("#name2");

    // LOGICAL PURPOSES





// START NEW GAME

newGame.addEventListener("click", () => {
    if (player1 !== "" && player2 !== ""){
        start.style.display = "none";
        game.style.display = "flex";
    }

});

