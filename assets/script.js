let key = ["98c8efd70f465afc9daf96764bb14136"];
let app_id = ["d8247746"];
let veggie=false;
let meat=false;
let calories=false;
let str="";
let search = false;

$(document).ready(function(){
    //Initial functions
    cards();
    $("#result-page").hide();
    $("#recipe-page").hide();
    $(`#random-page`).hide();
    $("#home-page").show();
    //All materialze functions below
    // Parallax Code
    $(".parallax").parallax();
    //Dropdown menu 
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        coverTrigger = true;
        closeOnClick=true;
        let instances = M.Dropdown.init(elems, coverTrigger);
        instances = M.Dropdown.init(elems, closeOnClick);
        alignment = 'right';
        instances = M.Dropdown.init(elems, alignment);
    });

    //Modal code
    function match(str1){
        let numbers={
        containsNumber : /\d+/
        }
        let expMatch = {};
        expMatch.containsNumber = numbers.containsNumber.test(str1);
        return expMatch.containsNumber;
    }
    //End materilize functions

    //Nav-bar Hide-Show functions
    $("#brand-btn").on("click", function(){
        $("#result-page").hide();
        $("#random-page").hide();
        $("#home-page").show();
    })
    $("#recipe-btn").on("click", function(){
        $("#result-page").hide();
        $("#home-page").hide();
        $("#recipe-page").show();
    })

    $("#veggie").on("click", function(event){
        meat=false;
        calories=false;
        veggie=true;
    });
    $("#meat").on("click", function(event){
        veggies=false;
        calories=false;
        meat=true;
    });
    $("#calories").on("click", function(event){
        veggies=false;
        meat=false;
        calories=true;
    });

    $(".veggies").on("click", function(event){
        veggie=true;
    })
    $(".meats").on("click", function(event){
        meat=true;
    })
    $(".calories").on("click",function(event){
        calories=true;
    })
    //function for queryURL
    let queryURL_N ="";
    function queryURLs(user_input){
        
        if(veggie){
            queryURL_N= "https://api.edamam.com/search?q=Vegetarian "+user_input+"&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free";
            console.log(queryURL_N);
            console.log("clicked");
            console.log(user_input);
        }
        if(meat){
            queryURL_N="https://api.edamam.com/search?q=meat "+ user_input+"&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free";
            console.log(queryURL_N);
            console.log("clicked");
            console.log(user_input);
        }
        if(calories){
            queryURL_N="https://api.edamam.com/search?q=snack "+ user_input+"&calories=100-300&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free";
        }
        if(search && !meat && !calories && !veggie){
            queryURL = "https://api.edamam.com/search?q=" + user_input + "&app_id=" + app_id + "&app_key=" + key;
            console.log(user_input);
        }
        // if(!veggie && meat && calories) {
        //     queryURL_N= "https://api.edamam.com/search?q=meat calories"+user_input+"&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free";
            
        // }
        // if(veggie && !meat && calories) {
        //     queryURL_N= "https://api.edamam.com/search?q=Vegetarian calories"+user_input+"&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10&health=alcohol-free";
            
        // }
        return queryURL_N;
        
    }
    queryURLs(str);
    
    //Main Search button shows results
    $("#search-button").on("click", function(event) {
    // WHATEVER THE SEARCH INPUT ID IS
        search=true;
        let key = ["98c8efd70f465afc9daf96764bb14136"];
        let app_id = ["d8247746"];
        str = $("#search").val().trim();
        let x= match(str);
        console.log(x);
        console.log("type of the return: " + typeof(match(str)));
        $("#results").empty();
        $("#typed-result").text(str);

        if(x===false){
            $("#home-page").hide();
            $("#random-page").hide();
            $("#result-page").show();
            $("#search-button").removeClass("modal-trigger");
            let queryURL = "https://api.edamam.com/search?q=" + str + "&app_id=" + app_id + "&app_key=" + key;

            $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                console.log(response);
                for(let i = 0; i < 99; i++) {
                  let recipeURL = (response.hits[i].recipe.url);
                  let recipeImg = (response.hits[i].recipe.image);
                  let recipeName = (response.hits[i].recipe.label);
                  let rowDiv = $("<div>");
                  let contentDiv = $("<div>");
                  let title = $("<h4>");
                  let anchorUrl = $("<a>");
                  let imgTag = $("<img>");
                  let ingredientList = $("<ul>");
            
                  //append row div to results
                  rowDiv.addClass("row");
                  $("#results").append(rowDiv);
                  //make content div with proper class
                  contentDiv.addClass("result-content col s9");
                  rowDiv.append(contentDiv);
                  //append title with anchor to the top of the new div
                  contentDiv.append(title);
                  anchorUrl.attr("href", recipeURL);
                  anchorUrl.text(recipeName);
                  title.append(anchorUrl);
                  //image below the title
                  imgTag.attr("src", recipeImg);
                  contentDiv.append(imgTag);
                  //list of ingredients under the picture
                  ingredientList.addClass("ingredient-list");
                  contentDiv.append(ingredientList);
                  for (let index = 0; index < response.hits[i].recipe.ingredientLines.length; index++){
                  let ingredient = response.hits[i].recipe.ingredientLines[index];
                  let newIngredient = $("<li>");
                  newIngredient.addClass("result-list")
                  newIngredient.text(ingredient);
                  ingredientList.append(newIngredient);
                  }
                }
              });
        }
        else{
            $("#search-button").addClass("modal-trigger");
            $('.modal').modal();
        }
    });


    // This is the random dish search function



        
    $("#randomDish").on("click", function(event) {
        let randomItem = ["chicken", "beef", "pasta", "cake", "tofu", "steak", "potatos", "mushrooms", "jello", "seafood"];
        function randomStr(){
            return randomItem[Math.floor(Math.random() * randomItem.length)];
            }
        let answer = randomStr();
        $("#result-page").hide();
        $("#home-page").hide();
        $("#random-page").show();
        let feelinLucky = "https://api.edamam.com/search?q=" + answer + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";
        let random = Math.floor((Math.random() * 10) + 1);
            
        $.ajax({
            url: feelinLucky,
            method: "GET"
        }).then(function(response) {
            let recipeURL = (response.hits[random].recipe.url);
            let recipeImg = (response.hits[random].recipe.image);
            let recipeName = (response.hits[random].recipe.label);
            let rowDiv = $("<div>");
            let contentDiv = $("<div>");
            let title = $("<h4>");
            let anchorUrl = $("<a>");
            let imgTag = $("<img>");
            let ingredientList = $("<ul>");
      
            //append row div to results
            rowDiv.addClass("row");
            $("#results").append(rowDiv);
            //make content div with proper class
            contentDiv.addClass("result-content col s9");
            rowDiv.append(contentDiv);
            //append title with anchor to the top of the new div
            contentDiv.append(title);
            anchorUrl.attr("href", recipeURL);
            anchorUrl.text(recipeName);
            title.append(anchorUrl);
            //image below the title
            imgTag.attr("src", recipeImg);
            contentDiv.append(imgTag);
            //list of ingredients under the picture
            ingredientList.addClass("ingredient-list");
            contentDiv.append(ingredientList);
            for (let index = 0; index < response.hits[random].recipe.ingredientLines.length; index++){
            let ingredient = response.hits[random].recipe.ingredientLines[index];
            let newIngredient = $("<li>");
            newIngredient.addClass("result-list");
            newIngredient.text(ingredient);
            ingredientList.append(newIngredient);
            }
        });
    });


    function cards() {
        let randomItem = ["steak"]; 
        let key = ["e7241b29fc9ae4ee4298c87a337cc0e7"];
        let appID = ["6d9844ca"];
        let homeURL = "https://api.edamam.com/search?q=" + randomItem + "&app_id=" + appID + "&app_key=" + key + "&from=0&to=10";

        $.ajax({
            url: homeURL,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#steakURL`).attr(`href`, recipeURL);
            //console.log(recipeURL)
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#r-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#r-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let randomItem1 = ["pasta"]; 
        let homeURL1 = "https://api.edamam.com/search?q=" + randomItem1 + "&app_id=" + appID + "&app_key=" + key + "&from=0&to=10";

        $.ajax({
            url: homeURL1,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#pastaURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#t-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#t-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let randomItem2 = ["vegetables"]; 
        let homeURL2 = "https://api.edamam.com/search?q=" + randomItem2 + "&app_id=" + appID + "&app_key=" + key + "&from=0&to=10";

        $.ajax({
            url: homeURL2,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#vegiURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#s-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#s-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let chocolate = ["chocolate"]; 
        let queryURL_chocolate = "https://api.edamam.com/search?q=" + chocolate + "&app_id=" + appID + "&app_key=" + key + "&from=0&to=10";

        $.ajax({
            url: queryURL_chocolate,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#chocolateURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#u-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#u-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let chicken = ["chicken"]; 
        let queryURL_chicken = "https://api.edamam.com/search?q=" + chicken + "&app_id=69290d96&app_key=5e7e48ad2e70c5227338b513e6a544d9&from=0&to=10";

        $.ajax({
            url: queryURL_chicken,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#chickenURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD

    
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            //let chickenImg=$("#v-img", this).attr("src");
            //$("#v-img", this).attr("src",chickenImg.replace("https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612","https://mamadips.com/wp-content/uploads/2016/11/defimage.gif"));
            //let newSrc = $(`#v-img`).attr(`src`, img.replace("https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612"));
            //$(`#v-img`).attr(`src`, newSrc);
            //console.log($(`#v-img`))
            $(`#v-img`).attr(`src`, recipeImg);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#v-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let pizza = ["pizza"]; 
        let queryURL_pizza = "https://api.edamam.com/search?q=" + pizza + "&app_id=6d9844ca&app_key=e7241b29fc9ae4ee4298c87a337cc0e7&from=0&to=10";

        $.ajax({
            url: queryURL_pizza,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#pizzaURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#w-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#w-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let fish = ["tuna"]; 
        let queryURL_fish = "https://api.edamam.com/search?q=" + fish + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

        $.ajax({
            url: queryURL_fish,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#tunaURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#x-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#x-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let sandwhich = ["sandwhich"]; 
        let queryURL_sandwhich = "https://api.edamam.com/search?q=" + sandwhich + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

        $.ajax({
            url: queryURL_sandwhich,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#sandwhichURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#y-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#y-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });

        let breakfest = ["tacos"]; 
        let queryURL_breakfest = "https://api.edamam.com/search?q=" + breakfest + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=10";

        $.ajax({
            url: queryURL_breakfest,
            method: "GET"
        }).then(function(response) {
            let index = Math.floor((Math.random() * 10) + 0);
            //console.log(index)
            let recipeURL = (response.hits[index].recipe.url);
            $(`#tacoURL`).attr(`href`, recipeURL);
            // let cookTime = (response.hits[index].recipe.totalTime);
            // $(`#r-description`).text(`${cookTime} minutes`);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[index].recipe.image);
            //console.log(recipeImg);
            $(`#z-img`).attr(`src`, `${recipeImg}`);
            let recipeLabel = (response.hits[index].recipe.label);
            //console.log(recipeLabel);
            $(`#z-title`).text(recipeLabel);
            //console.log(response.count);
            //console.log(response);
        });




        let tequila = [`tequila`];
        let queryURL_tequila ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + tequila + "";


        $.ajax({
        url: queryURL_tequila,
        method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 5) + 0);
            let drinkImg = (response.drinks[i].strDrinkThumb);
            $(`#drinkimg1`).attr(`src`, `${drinkImg}`);
            //console.log(drinkImg);
            let drinkName = (response.drinks[i].strDrink);
            $(`#drinktitle1`).text(drinkName);
            $(`#drinktitle15`).text(drinkName);
            let drinkInstr = (response.drinks[i].strInstructions);
            //console.log(drinkInstr);
            $(`#drinkIngD`).text(drinkInstr);
            let drinkIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#drinkIng1`).text(drinkIngr1);
            let drinkIngr2 = (response.drinks[i].strIngredient2);
            $(`#drinkIng2`).text(drinkIngr2);
            //console.log(drinkIngr2);
            let drinkIngr3 = (response.drinks[i].strIngredient3);
            $(`#drinkIng3`).text(drinkIngr3);
            //console.log(drinkIngr3);
            let drinkIngr4 = (response.drinks[i].strIngredient4);
            $(`#drinkIng4`).text(drinkIngr4);
            //console.log(drinkIngr4);
            let drinkIngr5 = (response.drinks[i].strIngredient5);
            $(`#drinkIng5`).text(drinkIngr5);
            //console.log(drinkIngr5);
            //console.log(response)
        });



        let whiskey = [`rum`]
        let queryURL_whiskey ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + whiskey + "";


        $.ajax({
        url: queryURL_whiskey,
        method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 10) + 0);
            let whiskeyImg = (response.drinks[i].strDrinkThumb);
            $(`#whiskeyimg1`).attr(`src`, `${whiskeyImg}`);
            //console.log(drinkImg);
            let whiskeyName = (response.drinks[i].strDrink);
            $(`#whiskeytitle1`).text(whiskeyName);
            $(`#whiskeytitle15`).text(whiskeyName);
            let whiskeyInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#whiskeyIngD`).text(whiskeyInstr);
            let whiskeyIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#whiskeyIng1`).text(whiskeyIngr1);
            let whiskeyIngr2 = (response.drinks[i].strIngredient2);
            $(`#whiskeyIng2`).text(whiskeyIngr2);
            //console.log(drinkIngr2);
            let whiskeyIngr3 = (response.drinks[i].strIngredient3);
            $(`#whiskeyIng3`).text(whiskeyIngr3);
            //console.log(drinkIngr3);
            let whiskeyIngr4 = (response.drinks[i].strIngredient4);
            $(`#whiskeyIng4`).text(whiskeyIngr4);
            //console.log(drinkIngr4);
            let whiskeyIngr5 = (response.drinks[i].strIngredient5);
            $(`#whiskeyIng5`).text(whiskeyIngr5);
            //console.log(drinkIngr5);
            //console.log(response)
        });


        let gin = [`gin`];
        let queryURL_gin ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + gin + "";
            

        $.ajax({
            url: queryURL_gin,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 10) + 0);
            let ginImg = (response.drinks[i].strDrinkThumb);
            $(`#ginimg1`).attr(`src`, `${ginImg}`);
            //console.log(drinkImg);
            let ginName = (response.drinks[i].strDrink);
            $(`#gintitle1`).text(ginName);
            $(`#gintitle15`).text(ginName);
            let ginInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#ginIngD`).text(ginInstr);
            let ginIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#ginIng1`).text(ginIngr1);
            let ginIngr2 = (response.drinks[i].strIngredient2);
            $(`#ginIng2`).text(ginIngr2);
            //console.log(drinkIngr2);
            let ginIngr3 = (response.drinks[i].strIngredient3);
            $(`#ginIng3`).text(ginIngr3);
            //console.log(drinkIngr3);
            let ginIngr4 = (response.drinks[i].strIngredient4);
            $(`#ginIng4`).text(ginIngr4);
            //console.log(drinkIngr4);
            let ginIngr5 = (response.drinks[i].strIngredient5);
            $(`#ginIng5`).text(ginIngr5);
        })




        let vodka = [`vodka`];
        let queryURL_vodka ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + vodka + "";
            

        $.ajax({
            url: queryURL_vodka,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 6) + 0);
            let vodkaImg = (response.drinks[i].strDrinkThumb);
            $(`#vodkaimg1`).attr(`src`, `${vodkaImg}`);
            //console.log(drinkImg);
            let vodkaName = (response.drinks[i].strDrink);
            $(`#vodkatitle1`).text(vodkaName);
            $(`#vodkatitle15`).text(vodkaName);
            let vodkaInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#vodkaIngD`).text(vodkaInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#vodkaIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#vodkaIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#vodkaIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#vodkaIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#vodkaIng5`).text(vodkaIngr5);
        })

        let scotch = [`anis`];
        let queryURL_scotch ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + scotch + "";
            

        $.ajax({
            url: queryURL_scotch,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 1) + 0);
            let scotchImg = (response.drinks[i].strDrinkThumb);
            $(`#scotchimg1`).attr(`src`, `${scotchImg}`);
            //console.log(drinkImg);
            let scotchName = (response.drinks[i].strDrink);
            $(`#scotchtitle1`).text(scotchName);
            $(`#scotchtitle15`).text(scotchName);
            let scotchInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#scotchIngD`).text(scotchInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#scotchIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#scotchIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#scotchIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#scotchIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#scotchIng5`).text(vodkaIngr5);
        })

        let soju = [`brandy`];
        let queryURL_soju ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + soju + "";
            

        $.ajax({
            url: queryURL_soju,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 4) + 0);
            let scotchImg = (response.drinks[i].strDrinkThumb);
            $(`#sojuimg1`).attr(`src`, `${scotchImg}`);
            //console.log(drinkImg);
            let scotchName = (response.drinks[i].strDrink);
            $(`#sojutitle1`).text(scotchName);
            $(`#sojutitle15`).text(scotchName);
            let scotchInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#sojuIngD`).text(scotchInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#sojuIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#sojuIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#sojuIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#sojuIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#sojuIng5`).text(vodkaIngr5);
        })

        let l = [`l`];
        let queryURL_l ="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + l + "";
            

        $.ajax({
            url: queryURL_l,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 5) + 0);
            let scotchImg = (response.drinks[i].strDrinkThumb);
            $(`#limg1`).attr(`src`, `${scotchImg}`);
            //console.log(drinkImg);
            let scotchName = (response.drinks[i].strDrink);
            $(`#ltitle1`).text(scotchName);
            $(`#ltitle15`).text(scotchName);
            let scotchInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#lIngD`).text(scotchInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#lIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#lIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#lIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#lIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#lIng5`).text(vodkaIngr5);
        })

        let tea = [`tea`];
        let queryURL_tea ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + tea + "";
            

        $.ajax({
            url: queryURL_tea,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 5) + 0);
            let scotchImg = (response.drinks[i].strDrinkThumb);
            $(`#teaimg1`).attr(`src`, `${scotchImg}`);
            //console.log(drinkImg);
            let scotchName = (response.drinks[i].strDrink);
            $(`#teatitle1`).text(scotchName);
            $(`#teatitle15`).text(scotchName);
            let scotchInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#teaIngD`).text(scotchInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#teaIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#teaIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#teaIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#teaIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#teaIng5`).text(vodkaIngr5);
        })
        
        let t = [`tropical`];
        let queryURL_t ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + t + "";
            

        $.ajax({
            url: queryURL_tea,
            method: "GET"
        }).then(function(response) {
            let i = Math.floor((Math.random() * 5) + 0);
            let scotchImg = (response.drinks[i].strDrinkThumb);
            $(`#timg1`).attr(`src`, `${scotchImg}`);
            //console.log(drinkImg);
            let scotchName = (response.drinks[i].strDrink);
            $(`#ttitle1`).text(scotchName);
            $(`#ttitle15`).text(scotchName);
            let scotchInstr = (response.drinks[i].strInstructions);
            //console.log(whiskeyInstr);
            $(`#tIngD`).text(scotchInstr);
            let vodkaIngr1 = (response.drinks[i].strIngredient1);
            //console.log(drinkIngr1);
            $(`#tIng1`).text(vodkaIngr1);
            let vodkaIngr2 = (response.drinks[i].strIngredient2);
            $(`#tIng2`).text(vodkaIngr2);
            //console.log(drinkIngr2);
            let vodkaIngr3 = (response.drinks[i].strIngredient3);
            $(`#tIng3`).text(vodkaIngr3);
            //console.log(drinkIngr3);
            let vodkaIngr4 = (response.drinks[i].strIngredient4);
            $(`#tIng4`).text(vodkaIngr4);
            //console.log(drinkIngr4);
            let vodkaIngr5 = (response.drinks[i].strIngredient5);
            $(`#tIng5`).text(vodkaIngr5);
        })
        
    };


//End of documetn ready function brackets
//DO NOT DELETE
});
