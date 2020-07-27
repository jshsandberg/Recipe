let homeShow = $("#home-page").show();
let homeHide = $("#home-page").hide();

let resultsShow = $("#result-page").show();
let resultsHide = $("#result-page").hide();

let recipeShow = $("#recipe-page").show();
let recipeHide = $("#recipe-page").hide();

$("#search-button").on("click", function(){
  $("#home-page").hide();
  $("#recipe-page").hide();
  $("#result-page").show();
})

$("#CARD-BUTTON-ID").on("click", function(){
  $("#result-page").hide();
  $("#home-page").hide();
  $("#recipe-page").show();
})

$("#BRAND-LOGO").on("click", function(){
  $("#result-page").hide();
  $("#recipe-page").hide();
  $("#home-page").show();
})

$("#RECIPE-NAV").on("click", function(){
  $("#result-page").hide();
  $("#recipe-page").hide();
  $("#home-page").show();
})

$("#RANDOM-NAV").on("click", function(){
  $("#result-page").hide();
  $("#home-page").hide();
  $("#recipe-page").show();
})
