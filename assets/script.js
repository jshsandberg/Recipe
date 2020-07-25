function match(str1){
    var numbers={
      containsNumber : /\d+/
    }
    var expMatch = {};
    expMatch.containsNumber = numbers.containsNumber.test(str1);
    return expMatch.containsNumber;
}

$("#search-button").on("click", function(event) {
// WHATEVER THE SEARCH INPUT ID IS
let str = $(`#search`).val();

  
  //console.log("The match:"+ JSON.stringify(match(str)));
  //console.log(JSON.stringify(match(str)));
  var x= JSON.stringify(match(str));
  console.log(x);
  if(x){
    $(document).ready(function(){
        $('.modal').modal();
    });
  }
  

console.log(typeof str);


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
        console.log(response.count);
        console.log(response);
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
    console.log(drinkIngr5);
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
        console.log(recipeURL)
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeImg = (response.hits[random].recipe.image);
        console.log(recipeImg);
        //NEED TO APPEND OR TEXT TO A CARD
        let recipeLabel = (response.hits[random].recipe.label);
        console.log(recipeLabel);
        //NEED TO APPEND OR TEXT TO A CARD
        console.log(response);

    });
});
    
    