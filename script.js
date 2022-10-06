
// VARIABLES

    // PAGE 1

const 
    page1 = document.querySelector("#page1"),
    startGame = document.querySelector("#startGame"),
    help = document.querySelector("#help"),
    credits = document.querySelector("#credits");

    // PAGE 2

const 
    page2 = document.querySelector("#page2"),
    start = document.querySelector("#start");

let 
    player1 = document.querySelector("#player1"),
    player2 = document.querySelector("#player2");

    // PAGE 3

const 
    page3 = document.querySelector("#page3"),
    name1 = document.querySelector("#name1"),
    name2 = document.querySelector("#name2"),
    score1 = document.querySelector("#score1"),
    score2 = document.querySelector("#score2");

let
    letter = document.querySelector("#letter"),
    list = document.querySelector("#list");

    // PAGE 4

const 
    page4 = document.querySelector("#page4"),
    setScore = document.querySelector("#setScore");

let
    result1 = document.querySelector("#result1"),
    result2 = document.querySelector("#result2");



// START NEW GAME

newGame.addEventListener("click", (event) => {
    if (player1.value !== "" && player2.value !== ""){
    /*     names.style.display = "none";
        finish.style.display = "none"; */
        game.style.display = "flex";
        name1.innerText = `${player1.value}: `;
        name2.innerText = `${player2.value}: `;

        let newList = getList();
        newList.forEach((el) => {
            let li = document.createElement("li");
            li.innerText = el;
            list.appendChild(li);
        });
    }
});



// CREATE A LIST OF CATEGORIES

const categories = [
    "Clothes", "Vehicles", "Jobs", "Things of the Universe", "Movie characters",
    "Animals", "Movies", "TV series", "Something yellow", "Videogames",
    "Furniture", "Books", "Natural spaces", "Verbs", "Buildings",
    "Relationships", "Sports", "Something red", "In a big company", "Ecology",
    "Emotions", "Weapons", "Healthy lifestyle", "Cities", "Sport equipment",
    "Tools", "Climate", "Adjectives", "Insects", "Strengths",
    "In the kitchen", "Recreational activities", "Agriculture", "Technology", "Toodler things",
    "Plants", "Elder things", "Food", "In the city", "Countries",
    "In the countryside", "Science", "Romantic things", "Trees", "Music",
    "Art", "Flowers", "Subjects", "In a stationer's shop", "Geniuses (science, art, music...)"
]



// RANDOM ITEMS FROM THE CATEGORIES LIST

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}

function getList() {

    let list = [];

    while (list.length <= 5) {
        let category = "";
        category = random(categories);
        if (!list.includes(category)) {
            list.push(category);
        }
    }

    let newList = [categories[list[0]], categories[list[1]], categories[list[2]], categories[list[3]], categories[list[4]]];

    return newList;
}

console.log(getList());
