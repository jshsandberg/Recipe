$("#veggie").on("click", function(event) {

    //let str = $(`#searchItem`).val();
    let queryURL_2 = "https://api.edamam.com/search?q=Vegetarian&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free"
    $.ajax({
        url: queryURL_2,
        method: "GET"
    }).then(function(response) {
        for(let i = 0; i < 10; i++) {
            let recipeURL = (response.hits[i].recipe.url);
            console.log(recipeURL)
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[i].recipe.image);
            console.log(recipeImg);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeLabel = (response.hits[i].recipe.label);
            console.log(recipeLabel);
            //NEED TO APPEND OR TEXT TO A CARD
            // console.log(response);
            // console.log(response.count);
        }
    });
    
    
});

$("#meat").on("click", function(event) {

    let str = $(`#searchItem`).val();
    let queryURL_2 = "https://api.edamam.com/search?q=meat&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free"
    $.ajax({
        url: queryURL_2,
        method: "GET"
    }).then(function(response) {
        for(let i = 0; i < 10; i++) {
            let recipeURL = (response.hits[i].recipe.url);
            console.log(recipeURL)
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[i].recipe.image);
            console.log(recipeImg);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeLabel = (response.hits[i].recipe.label);
            console.log(recipeLabel);
            //NEED TO APPEND OR TEXT TO A CARD
            //console.log(response);
        }
    });
    
    
});

$("#calories").on("click", function(event) {

    let str = $(`#searchItem`).val();
    let queryURL_2 = "https://api.edamam.com/search?q=snack&calories=100-300&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free"
    $.ajax({
        url: queryURL_2,
        method: "GET"
    }).then(function(response) {
        for(let i = 0; i < 10; i++) {
            let recipeURL = (response.hits[i].recipe.url);
            console.log(recipeURL)
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[i].recipe.image);
            console.log(recipeImg);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeLabel = (response.hits[i].recipe.label);
            console.log(recipeLabel);
            //NEED TO APPEND OR TEXT TO A CARD
            //console.log(response);
        }
    });
    
    
});

$("#drinks").on("click", function(event) {

    let queryURL_1 ="https://www.thecocktaildb.com/api/json/v1/1/random.php";
     
    
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
    