
// VARIABLES

    // MENU

const 
    menuIcon = document.querySelector("#menuIcon"),
    fullScreen = document.querySelector("#fullScreen"),
    darkMode = document.querySelector("#darkMode"),
    helpMenu = document.querySelector("#helpMenu"),
    initialPage = document.querySelector("#initialPage"),
    menuButton = document.querySelector("#menuButton"),
    menuDiv = document.querySelector("#menuDiv");

    // HELP AND CREDITS PAGES

const
    helpPage = document.querySelector("#helpPage"),
    creditsPage = document.querySelector("#creditsPage");

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
    score2 = document.querySelector("#score2"),
    setResults = document.querySelector("#setResults");

let
    letter = document.querySelector("#letter"),
    list = document.querySelector("#list");

    // PAGE 4

const 
    page4 = document.querySelector("#page4"),
    setScore = document.querySelector("#setScore"),
    endGame = document.querySelector("#endGame");

let
    result1 = document.querySelector("#result1"),
    result2 = document.querySelector("#result2");
    resultTitle1 = document.querySelector("#resultTitle1");
    resultTitle2 = document.querySelector("#resultTitle2");

    // PAGE 5

    const 
        winner = document.querySelector("#winner"),
        result = document.querySelector("#result"),
        endScore = document.querySelector("#endScore"),
        page5 = document.querySelector("#page5"),
        home = document.querySelector("#home");

    // LOGICAL PURPOSES

let 
    scoreOne = 0,
    scoreTwo = 0;



// MENU

menuIcon.addEventListener("click", () => {
    menuDiv.style.display = "none";
    menu.style.display = "flex";
});

back.addEventListener("click", () => {
    menuDiv.style.display = "flex";
    menu.style.display = "none";
});

fullScreen.addEventListener("click", () => {
   
});

darkMode.addEventListener("click", () => {
  
});

helpMenu.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    menu.style.display = "none";
    helpPage.style.display = "flex";
    creditsPage.style.display = "none";
    menuDiv.style.display = "flex";
});

initialPage.addEventListener("click", () => {
    page1.style.display = "flex";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    menu.style.display = "none";
    helpPage.style.display = "none";
    creditsPage.style.display = "none";
    menuDiv.style.display = "flex";
});



// PAGE 1 - START

startGame.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    menu.style.display = "none";
    helpPage.style.display = "none";
    creditsPage.style.display = "none";
    menuDiv.style.display = "flex";

    scoreOne = 0;
    scoreTwo = 0;
    score1.textContent = "";
    score2.textContent = "";
    player1.value = "";
    player2.value = "";
});

help.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    menu.style.display = "none";
    helpPage.style.display = "flex";
    creditsPage.style.display = "none";
    menuDiv.style.display = "flex";
});

credits.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    menu.style.display = "none";
    helpPage.style.display = "none";
    creditsPage.style.display = "flex";
    menuDiv.style.display = "flex";
});



// PAGE 2 - NAMES

start.addEventListener("click", () => {
    if (player1.value !== "" && player2.value !== ""){

        page2.style.display = "none";
        page3.style.display = "flex";

        name1.innerText = `${player1.value}: `;
        name2.innerText = `${player2.value}: `;

        score1.textContent = `${scoreOne}`;
        score2.textContent = `${scoreTwo}`;

        let newList = getList();
        newList.forEach((el) => {
            let li = document.createElement("li");
            li.innerText = el;
            list.appendChild(li);
        });

        let newLetter = getLetter();
        letter.innerText = newLetter;
    }
});



// PAGE 3 - GAME

setResults.addEventListener("click", () => {
    page3.style.display = "none";
    page4.style.display = "flex";

    resultTitle1.innerText = `${player1.value}: `;
    resultTitle2.innerText = `${player2.value}: `;
});



// PAGE 4 - SET SCORE AND END

setScore.addEventListener("click", () => {
    if (result1.validity.valid && result2.validity.valid) {
        scoreOne += Number(result1.value);
        scoreTwo += Number(result2.value);
    
        score1.textContent = `${scoreOne}`;
        score2.textContent = `${scoreTwo}`;

        result1.value = "";
        result2.value = "";
    
        page3.style.display = "flex";
        page4.style.display = "none";

        list.textContent = "";

        let newList = getList();
        newList.forEach((el) => {
            let li = document.createElement("li");
            li.innerText = el;
            list.appendChild(li);
        });

        let newLetter = getLetter();
        letter.innerText = newLetter;
    }
});

endGame.addEventListener("click", () => {
    if (result1.validity.valid && result2.validity.valid) {

        page5.style.display = "flex";
        page4.style.display = "none";

        scoreOne += Number(result1.value);
        scoreTwo += Number(result2.value);

        score1.textContent = `${scoreOne}`;
        score2.textContent = `${scoreTwo}`;

        name1.innerText = `${player1.value}: `;
        name2.innerText = `${player2.value}: `;

        if (scoreOne > scoreTwo) {

            result.innerText = "The winner is";

            winner.innerText = `${player1.value}`;

            endScore.innerText = `${player1.value}:  ${scoreOne}
            ${player2.value}:  ${scoreTwo}`;

        } else if (scoreTwo > scoreOne) {

            result.innerText = "The winner is";

            winner.innerText = `${player2.value}`;

            endScore.innerText = `${player2.value}:  ${scoreTwo}
            ${player1.value}:  ${scoreOne}`;

        } else {

            winner.innerText = "You were tied";

            endScore.innerText = `${player1.value}:  ${scoreOne}
            ${player2.value}:  ${scoreTwo}`;
        }

        scoreOne = 0;
        scoreTwo = 0;
    
        score1.textContent = "";
        score2.textContent = "";

        player1.value = "";
        player2.value = "";
    }
});



//  PAGE 5 - THE WINNER IS

home.addEventListener("click", () => {
    page1.style.display = "flex";
    page5.style.display = "none";
})




// FUNCTIONS

    // LIST OF CATEGORIES AND LIST OF LETTERS

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
    "Art", "Flowers", "Subjects", "In a stationer's shop", "Geniuses (science, art, music...)", "Elements", "climate"
]

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



    // GET A RANDOM ITEM FROM AN ARRAY

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}



    // GET A RANDOM LIST OF CATEGORIES

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



    // GET A RANDOM LETTER

function getLetter() {
    return letters[random(letters)];
}
