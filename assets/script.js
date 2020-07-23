$(document).ready(function(){
    //All materialze functions below
    // Parallax Code
    $(".parallax").parallax();
    //Dropdown menu 
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        coverTrigger = true;
        closeOnClick=true;
        var instances = M.Dropdown.init(elems, coverTrigger);
        instances = M.Dropdown.init(elems, closeOnClick);
        alignment = 'right';
        instances = M.Dropdown.init(elems, alignment);
    });

    //End materilize functions


    cards();

$("#search-button").on("click", function(event) {
// WHATEVER THE SEARCH INPUT ID IS
let str = $(`#search`).val();
let queryURL = "https://api.edamam.com/search?q=" + str + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        for(let i = 0; i < 99; i++) {
        let recipeURL = (response.hits[i].recipe.url);
        console.log(recipeURL)
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeImg = (response.hits[i].recipe.image);
        console.log(recipeImg);
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeLabel = (response.hits[i].recipe.label);
        console.log(recipeLabel);
        //NEED TO APPEND OR TEXT TO A CARD
        //console.log(response.count);
        //console.log(response);
        }
    });
});


$("#searchBtn1").on("click", function(event) {

let drink = $(`#searchDrink`).val();
let queryURL_1 ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink + "";
 

$.ajax({
    url: queryURL_1,
    method: "GET"
}).then(function(response) {
    for(let i = 0; i < 10; i++) {
    let drinkImg = (response.drinks[i].strDrinkThumb)
    console.log(drinkImg);
    let drinkName = (response.drinks[i].strDrink);
    console.log(drinkName);
    let drinkInstr = (response.drinks[i].strInstructions);
    console.log(drinkInstr);
    let drinkIngr1 = (response.drinks[i].strIngredient1);
    console.log(drinkIngr1);
    let drinkIngr2 = (response.drinks[i].strIngredient2);
    console.log(drinkIngr2);
    let drinkIngr3 = (response.drinks[i].strIngredient3);
    console.log(drinkIngr3);
    let drinkIngr4 = (response.drinks[i].strIngredient4);
    console.log(drinkIngr4);
    let drinkIngr5 = (response.drinks[i].strIngredient5);
    //console.log(drinkIngr5);
    //console.log(response)
    }
    });


});

let randomItem = ["chicken", "beef", "pasta", "cake", "tofu", "steak", "potatos", "mushrooms", "jello", "seafood"];
function randomStr(){
    return randomItem[Math.floor(Math.random() * randomItem.length)];
    }
let answer = randomStr();

// Need to make a Feeling Lucky Button and then put it in the call
$("#search-button").on("click", function(event) {

    let feelinLucky = "https://api.edamam.com/search?q=" + answer + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";
    let random = Math.floor((Math.random() * 10) + 1);
        
    $.ajax({
        url: feelinLucky,
        method: "GET"
    }).then(function(response) {
        //for(let i = 0; i < 10; i++) {
        let recipeURL = (response.hits[random].recipe.url);
        //console.log(recipeURL)
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeImg = (response.hits[random].recipe.image);
        //console.log(recipeImg);
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeLabel = (response.hits[random].recipe.label);
        //console.log(recipeLabel);
        //NEED TO APPEND OR TEXT TO A CARD
        //console.log(response);

    });
});
    
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    coverTrigger = true;
    closeOnClick=true;
    var instances = M.Dropdown.init(elems, coverTrigger);
    instances = M.Dropdown.init(elems, closeOnClick);
    alignment = 'right';
    instances = M.Dropdown.init(elems, alignment);
  });
 
//
function cards() {
        let randomItem = ["steak"]; 
        let homeURL = "https://api.edamam.com/search?q=" + randomItem + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

            $.ajax({
                url: homeURL,
                method: "GET"
            }).then(function(response) {
                let index = Math.floor((Math.random() * 10) + 0);
                console.log(index)
                let recipeURL = (response.hits[index].recipe.url);
                console.log(recipeURL)
                // let cookTime = (response.hits[index].recipe.totalTime);
                // $(`#r-description`).text(`${cookTime} minutes`);
                //NEED TO APPEND OR TEXT TO A CARD
                let recipeImg = (response.hits[index].recipe.image);
                //console.log(recipeImg);
                $(`#r-img`).attr(`src`, `${recipeImg}`);
                let recipeLabel = (response.hits[index].recipe.label);
                console.log(recipeLabel);
                $(`#r-title`).text(recipeLabel);
                //console.log(response.count);
                console.log(response);
            });

        let randomItem1 = ["pasta"]; 
        let homeURL1 = "https://api.edamam.com/search?q=" + randomItem1 + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

            $.ajax({
                url: homeURL1,
                method: "GET"
            }).then(function(response) {
                let index = Math.floor((Math.random() * 10) + 0);
                console.log(index)
                let recipeURL = (response.hits[index].recipe.url);
                console.log(recipeURL)
                // let cookTime = (response.hits[index].recipe.totalTime);
                // $(`#r-description`).text(`${cookTime} minutes`);
                //NEED TO APPEND OR TEXT TO A CARD
                let recipeImg = (response.hits[index].recipe.image);
                //console.log(recipeImg);
                $(`#t-img`).attr(`src`, `${recipeImg}`);
                let recipeLabel = (response.hits[index].recipe.label);
                console.log(recipeLabel);
                $(`#t-title`).text(recipeLabel);
                //console.log(response.count);
                console.log(response);
            });

        let randomItem2 = ["vegetables"]; 
        let homeURL2 = "https://api.edamam.com/search?q=" + randomItem2 + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

            $.ajax({
                url: homeURL2,
                method: "GET"
            }).then(function(response) {
                let index = Math.floor((Math.random() * 10) + 0);
                console.log(index)
                let recipeURL = (response.hits[index].recipe.url);
                console.log(recipeURL)
                // let cookTime = (response.hits[index].recipe.totalTime);
                // $(`#r-description`).text(`${cookTime} minutes`);
                //NEED TO APPEND OR TEXT TO A CARD
                let recipeImg = (response.hits[index].recipe.image);
                //console.log(recipeImg);
                $(`#s-img`).attr(`src`, `${recipeImg}`);
                let recipeLabel = (response.hits[index].recipe.label);
                console.log(recipeLabel);
                $(`#s-title`).text(recipeLabel);
                //console.log(response.count);
                console.log(response);
            });
    
    }

//End of ready function
})
