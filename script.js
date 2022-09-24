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
let list = document.querySelector("#list");



// START NEW GAME

newGame.addEventListener("click", () => {
    if (player1 !== "" && player2 !== ""){
        start.style.display = "none";
        game.style.display = "flex";
    }

});



// CREATE A LIST OF CATEGORIES

const categories = [
    ["Clothes", "Vehicles", "Jobs", "Things of the Universe", "Movie characters"],
    ["Animals", "Movies", "TV series", "Something yellow", "Videogames"],
    ["Furniture", "Books", "Natural spaces", "Verbs", "Buildings"],
    ["Relationships", "Sports", "Something red", "In a big company", "Ecology"],
    ["Emotions", "Weapons", "Healthy lifestyle", "Cities", "Sport equipment"],
    ["Tools", "Climate", "Adjectives", "Insects", "Strengths"],
    ["In the kitchen", "Recreational activities", "Agriculture", "Technology", "Toodler things"],
    ["Plants", "Elder things", "Food", "In the city", "Countries"],
    ["In the countryside", "Science", "Romantic things", "Trees", "Music"],
    ["Art", "Flowers", "Subjects", "In a stationer's shop", "Geniuses (science, art, music...)"]
]
