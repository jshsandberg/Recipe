$("#search-button").on("click", function(event) {

  let key = ["98c8efd70f465afc9daf96764bb14136"];
  let app_id = ["d8247746"]
  let str = $("#search").val();
  $("#results").empty();

  $("#home-page").hide();
  $("#recipe-page").hide();
  $("#result-page").show();

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
      newIngredient.text(ingredient);
      ingredientList.append(newIngredient);
      }
    }
  });
});