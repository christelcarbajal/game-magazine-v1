window.addEventListener('load', init);

// Global variables
let gamesContainer;
let gameDetails;
let currentTarget;
const games = [
    //Playstation 4
    {
        name: "Assassin's Creed Odyssey",
        image: "images/AC1.jpg",
        description: "Oddysey",
        year: "2018",
        console: "Playstation 4",
        tags: ['Mode: Single player', 'Type: Action Role-playing', 'year: 2018']
    },
    {
        name: "Assassin's Creed Origins",
        image: "images/ACOrigins.jpg",
        description: "Origins",
        year: "2017",
        console: "Playstation 4",
        tags: ['Mode: Single player', 'Type: Action Role-playing', 'year: 2017']
    },
    {
        name: "Ark: Survival Evolved",
        image: "images/ark.jpg",
        description: "Ark",
        year: "2015",
        console: "Playstation 4",
        tags: ['Mode: Single player & Multiplayer', 'Type: Action / Adventure', 'year: 2015']
    },
    {
        name: "Crash Bandicoot 4: It's About Time",
        image: "images/Crash4.jpg",
        description: "CrashB",
        year: "2020",
        console: "Playstation 4",
        tags: ['Mode: Single player', 'Type: Adventure', 'year: 2020']
    },
    {
        name: "Detroit Become Human",
        image: "images/Detroit.jpg",
        description: "Detroit",
        year: "2018",
        console: "Playstation 4",
        tags: ['testing', '5', 'etc']
    },
    {
        name: "Final Fantasy XV",
        image: "images/FFXVROYAL_EDITION.jpg",
        description: "FF XV",
        year: "2016",
        console: "Playstation 4",
        tags: ['testing', '6', 'etc']
    },
    {
        name: "Hogwarts Legacy",
        image: "images/hogwartsLegacy.jpg",
        description: "Hogwarts Legacy",
        year: "2022",
        console: "Playstation 4",
        tags: ['testing', '7', 'etc']
    },
    {
        name: "Tom Clancy's The Division",
        image: "images/THE_DIVISION.jpg",
        description: "The Division",
        year: "2016",
        console: "Playstation 4",
        tags: ['testing', '8', 'etc']
    },
    {
        name: "Tom Clancy's The Division 2",
        image: "images/tcdiv2.jpg",
        description: "The Division 2",
        year: "2019",
        console: "Playstation 4",
        tags: ['testing', '9', 'etc']
    },
    {
        name: "The Witcher 3",
        image: "images/TheWitcher3.jpg",
        description: "The Witcher 3",
        year: "2016",
        console: "Playstation 4",
        tags: ['testing', '10', 'etc']
    }
]
let game;

// Initialize after DOM is ready
function init() {
    gamesContainer = document.querySelector("#gameCollection"); //Container of Games
    gamesContainer.addEventListener('click', gamesContainerClickHandler); // ClickHandler for games
    addGame(game);

    gameDetails = document.querySelector("#gameDetails"); //Game Details

    // let webserviceURL = 'webservice/index.php';
}

// Create DOM Elements
// Add game to HTML with all the available information
function addGame(game, i) {
    for (let game of games) {

        //Div Game Container
        const gameDiv = document.createElement("div"); // Creates card in intern memory and does not add to HTML
        gameDiv.classList.add("games");
        gameDiv.dataset.index = i;
        gameDiv.setAttribute("id", game.id);
        gamesContainer.appendChild(gameDiv); //gameDiv attached to parent-object gameContainer

        // Game Title
        const title = document.createElement("h3");
        // gameTitle.innerText = "Assassin's Creed Odyssey"
        title.innerText = game.name;
        gameDiv.appendChild(title);

        // Game Image
        const img = document.createElement("img");
        // img.src = "./images/AC1.jpg"
        img.setAttribute('src', game.image);
        img.dataset.index = i;
        gameDiv.appendChild(img);

        //Description Btn
        let descriptionBtn = document.createElement('button');
        descriptionBtn.classList.add('button');
        descriptionBtn.classList.add('details');
        descriptionBtn.innerHTML = 'Show Description';
        // descriptionBtn.innerHTML = [game.description, game.year, game.console, game.tags];
        descriptionBtn.dataset.id = game.name;
        gameDiv.appendChild(descriptionBtn);


        //Favorite Btn
        let favoriteBtn = document.createElement('button');
        favoriteBtn.classList.add('button');
        favoriteBtn.classList.add('favorite');
        favoriteBtn.dataset.index = i;
        favoriteBtn.innerHTML = 'Add to Favorite';
        gameDiv.appendChild(favoriteBtn);

    }


    // // Game Details
    // let description = document.createElement('description');
    // description.innerHTML = [game.description, game.year, game.console, game.tags];
    // descriptionBtn.appendChild(description);
    // gameDiv.appendChild(description);

    /*
    //Extra information example
    //How to show on HTML , If added new information to object "Cat"
    if(cat.movie){
        nameDiv.innerText = cat.name + "movie: " + cat.movie
    }
    */


}


// Make Games Clickable
function gamesContainerClickHandler(e) {
    // To prevent standard event
    e.preventDefault();

    currentTarget = e.target;

    // Check first if clicked area contains class "details", otherwise return no value
    if (currentTarget.classList.contains('button details')) {
        addGame(currentTarget.dataset.id);
    }

    console.log(currentTarget);

   // //Check if image was clicked
   //  if (currentTarget.nodeName !== "IMG"){
   //      return ;
   //  }
}


















// // If Clicked on "Fav"
// else if (currentTarget === "favButton") {
//     addToFavorites(e);
// }
// // If Clicked on "Removed of Fav"
// else if (currentTarget === "removeFavButton") {
//     removeFromFavorites(e);
// }


// function getInfo(){
//     ajaxRequest(showInfo);
// }

// function showInfo(data){
//     //FOR loop for games
//     for (let i = 0 ; i < data.length; i++){
//         let game = data[i];
//
//         //Created DOM Element for Game Information Side-bar
//         let infoDiv = createDomElement(
//             {tagName: 'div',
//             attributes: {class: 'game'}});
//         let infoTitle = createDomElement(
//             {tagName: 'h2',
//                 attributes: {class: 'title'},
//                 content: game.name});
//         infoDiv.appendChild(infoTitle); // attached InfoTitle to parent InfoDiv
//
//
//         //Check if Favorite
//         favorite = checkFavorite(game.id);
//         let favText = 'Add to favorites';
//
//         if (favorite) {
//         infoDiv.classList.add('favorite');
//         favText = 'Remove from favorites';
//         }
//
//         // Add Favorite Button
//         let addFavoriteButton = createDomElement(
//             {tagName: 'a', attributes:
//                 {href: '#', class: 'toggle-favorite'},
//             content: favText, dataset: {id: game.id}
//         })
//         infoDiv.appendChild(addFavoriteButton);
//
//         // Add Detail Button
//         let detailsButton = createDomElement(
//             {tagName: 'a', attributes:
//                     {href: '#', class: 'show-details'},
//             content: 'Read More..',
//             dataset: {id: game.id}
//             })
//         infoDiv.appendChild(detailsButton);
//     }
//
// }
//
// function dishClickHandler(e){
//
// }
//
// function addFavorite(target, id){
//
// }
//
// function removeFavorite(target, id){
//
// }

// function checkFavorite(id){
//     let favoriteCheck = getFavoriteFromLocalStorage();
//     return favoriteCheck.indexOf(id) > -1;
// }

// function getFavoriteFromLocalStorage() {
//     let localFavorite = localStorage.getItem('favorite');
//     return localFavorite === null ? [] : JSON.parse(localFavorite);
// }
//
// function getDishDetails(target){
//
// }
//
// function showDishDetails(data){
//
// }

// // Generic AJAX handler
// function ajaxRequest(ajaxSuccessHandler, data) {
//     let urlParameters = "";
//     if (data) {
//         urlParameters = object.keys(data).map(function (k ) {
//             return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
//         }).join('&');
//     }
//
//     fetch('webservice/?' + urlParameters)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
//         .then(ajaxSuccessHandler)
//         .catch(ajaxErrorHandler);
// }
//
//     function ajaxErrorHandler(data) {
//     console.log(data);
// }
//




