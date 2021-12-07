

// 1. *** use your own url copied from Postman ****
let requestURL4 = "https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=d36a471d9db14cc08f52bc29bf84c8a7"
let recipeData2 = ""

vegetarian.onshow=function(){
    drpdRecipesVeg.clear()
  function onXHRLoad3() {

    // 'this' is another name for the object returned from the API call
    let vegetarianRecipes = JSON.parse(this.responseText)
   recipeData2 = vegetarianRecipes
   console.log(vegetarianRecipes)
   console.log(recipeData2.results[0].title)
   for (i = 0; i <= recipeData2.results.length - 1; i++)
   drpdRecipesVeg.addItem(recipeData2.results[i].title)
    
    // 2. *** put your textarea control name here ****
   
    // if want to add to database call a function here that does that

}
function callAPI3(URL) {
    var xhttp = new XMLHttpRequest();
    
    // use this code to add the cors code to your url
    //xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + requestURL)
    
    // if you DON'T need cors use this code:
    xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    xhttp.setRequestHeader('Content-Type', 'application/json')

    // make the API request
    xhttp.addEventListener('load', onXHRLoad3)
    xhttp.send() 
}
  callAPI3(requestURL4)
}

drpdRecipesVeg.onclick=function(s){
    if (typeof(s) == "object"){
  return
} else {
  drpdRecipesVeg.value = s
  ChangeForm(HRB)
  console.log(`The user chose ${s} and .selection is ${drpdRecipesVeg.selection}.`)
  }
}
