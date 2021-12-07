
let requestURL5 = "https://api.spoonacular.com/recipes/716627/information?apiKey=d36a471d9db14cc08f52bc29bf84c8a7"
let ingredientsShowHRB = ""
let ingredientNamesHRB = []
let tempGLAHRB = ""
let tempGLDHRB = ""
let message3 = []

function onXHRLoadHRB() {
  let message = ""
  let ingredients = JSON.parse(this.responseText)
  ingredientsShowHRB = ingredients
  console.log(ingredientsShowHRB)
    for (i = 0; i <= ingredientsShowHRB.extendedIngredients.length - 1; i++) {
      ingredientNamesHRB = ingredientNamesHRB + ingredients.extendedIngredients[i].name + ","
    }
    
    let newIngredientNamesHRB = ingredientNamesHRB.split(',')
    // console.log(newIngredientNames)
    rdoHRB.addItem(` ${newIngredientNamesHRB[0]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[1]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[2]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[3]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[4]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[5]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[6]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[7]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[8]}`, true)
    rdoHRB.addItem(` ${newIngredientNamesHRB[9]}`, true)
    
  for (i = 0; i <= ingredientsShowHRB.extendedIngredients.length - 1; i++) {
    // console.log(`${ingredients.extendedIngredients[i].original}`)
    message = message + ingredients.extendedIngredients[i].original + "\n"
  }
  txtaHRB.value = message
}

function callAPIHRB(URL) {
  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', URL)

  Headers
  // if you need to set the returned data type, use this line of code: 
  xhttp.setRequestHeader('Content-Type', 'application/json')

  // make the API request
  xhttp.addEventListener('load', onXHRLoadHRB)
  xhttp.send()
}

HRB.onshow=function(){
  callAPIHRB(requestURL5)
}

btnAddHRB.onclick=function(){
  message3 = ""
  tempGLAHRB = (`${$("input[name=rdoHRB]:checked").prop("value")}`)
  // clear the user choice off the screen
  $("#rdoHRB_" + rdoHRB.value).prop("checked", false)
  groceryList.push(tempGLAHRB)
  console.log(groceryList)
  message3 = groceryList
  // Tried innerHTML, content, and value as well as <br /> and \n to get items on seperate lines but won't work
  txtaGLHRB.value = message3  + "\n"
}



btnDietsHRB.onclick=function(){
  ChangeForm(diets)
}

btnVegMeals.onclick=function(){
  ChangeForm(vegetarian)
}

btnGS2.onclick=function(){
  ChangeForm(groceryStore)
}

btnRemoveHRB.onclick=function(){
    let indexFound2 = ""
  tempGLDHRB = (`${$("input[name=rdoHRB]:checked").prop("value")}`)
  indexFound2 = groceryList.indexOf(tempGLDHRB)
  if (indexFound2 !== -1) {
  groceryList.splice(indexFound2, 1)
  console.log(groceryList)
  message3 = groceryList
  txtaGLHRB.value = message3  + "\n"
  $("#rdoHRB_" + rdoHRB.value).prop("checked", false)
  }
}
