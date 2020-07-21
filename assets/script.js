$("#searchBtn").on("click", function(event) {
    // WHATEVER THE SEARCH INPUT ID IS
    let str = $(`#searchItem`).val();
    let queryURL = "https://api.edamam.com/search?q=" + str + "&app_id=83c5c1cd&app_key=85e70262b0dcd597d98c4f6d78dcc400&from=0&to=3&calories=591-722&health=alcohol-free";
    let queryURL_1 = "https://api.edamam.com/api/nutrition-details?app_id=2cce1868&app_key=1255ca12dfbbcc6cf86c6661cb754d60";
        
    
    $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            for(let i = 0; i < 10; i++) {
            let recipeURL = (response.hits[i].recipe.url);
            //console.log(recipeURL)
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeImg = (response.hits[i].recipe.image);
            //console.log(recipeImg);
            //NEED TO APPEND OR TEXT TO A CARD
            let recipeLabel = (response.hits[i].recipe.label);
            //console.log(recipeLabel);
            //NEED TO APPEND OR TEXT TO A CARD
            //console.log(response);
            }
        });
        $.ajax({
            url: queryURL_1,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
    });

    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.dropdown-trigger');
    //     var instances = M.Dropdown.init(elems, options);
    //   });
    
    //   // Or with jQuery
    
      $('.dropdown-trigger').dropdown();
            