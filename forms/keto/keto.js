

// 1. *** use your own url copied from Postman ****
let requestURL = "https://api.spoonacular.com/recipes/complexSearch?diet=ketogenic&apiKey=d36a471d9db14cc08f52bc29bf84c8a7"
let recipeData = ""


function addToDatabase(meal) {
  query = "INSERT INTO meal (name) VALUES (recipes)"
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
}


keto.onshow=function(){
  drpdRecipes.clear()
  function onXHRLoad() {

    // 'this' is another name for the object returned from the API call
    let recipes = JSON.parse(this.responseText)
   recipeData = recipes
   // console.log(recipes.results[0].title)
   for (i = 0; i <= recipes.results.length - 1; i++)
   drpdRecipes.addItem(recipes.results[i].title)
    
    // 2. *** put your textarea control name here ****
   
    // if want to add to database call a function here that does that

}
function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // use this code to add the cors code to your url
    //xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + requestURL)
    
    // if you DON'T need cors use this code:
    xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    xhttp.setRequestHeader('Content-Type', 'application/json')

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send() 
}
  callAPI(requestURL)
}

drpdRecipes.onclick=function(s){
    if (typeof(s) == "object"){
  return
} else {
  drpdRecipes.value = s
  ChangeForm(salmonCS)
  console.log(`The user chose ${s} and .selection is ${drpdRecipes.selection}.`)
  }
}



