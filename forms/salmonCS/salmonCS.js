/*
could have possible recipe summary here!!!
look at the summarize recipe tab on the API browser
*/

let requestURL2 = "https://api.spoonacular.com/recipes/646512/information?apiKey=d36a471d9db14cc08f52bc29bf84c8a7"
let ingredientsShow = ""
let ingredientNames = []
let groceryList = []
let tempGLA = ""
let tempGLD = ""
let test = "michael"
let message2 = []

function onXHRLoad() {
  let message = ""
  let ingredients = JSON.parse(this.responseText)
  ingredientsShow = ingredients
  console.log(ingredientsShow)
    for (i = 0; i <= ingredientsShow.extendedIngredients.length - 1; i++) {
      ingredientNames = ingredientNames + ingredients.extendedIngredients[i].name + ","
    }
    
    let newIngredientNames = ingredientNames.split(',')
    // console.log(newIngredientNames)
    rdoCS.addItem(` ${newIngredientNames[0]}`, true)
    rdoCS.addItem(` ${newIngredientNames[1]}`, true)
    rdoCS.addItem(` ${newIngredientNames[2]}`, true)
    rdoCS.addItem(` ${newIngredientNames[3]}`, true)
    rdoCS.addItem(` ${newIngredientNames[4]}`, true)
    rdoCS.addItem(` ${newIngredientNames[5]}`, true)
    rdoCS.addItem(` ${newIngredientNames[6]}`, true)
    rdoCS.addItem(` ${newIngredientNames[7]}`, true)
    rdoCS.addItem(` ${newIngredientNames[8]}`, true)
    rdoCS.addItem(` ${newIngredientNames[9]}`, true)
    
  for (i = 0; i <= ingredientsShow.extendedIngredients.length - 1; i++) {
    // console.log(`${ingredients.extendedIngredients[i].original}`)
    message = message + ingredients.extendedIngredients[i].original + "\n"
  }
  txtaCS.value = message
}

function callAPI(URL) {
  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', URL)

  Headers
  // if you need to set the returned data type, use this line of code: 
  xhttp.setRequestHeader('Content-Type', 'application/json')

  // make the API request
  xhttp.addEventListener('load', onXHRLoad)
  xhttp.send()
}

salmonCS.onshow = function() {
  txtaCS_contents.style.height = "125px"
  txtaCS_contents.style.length = "200px"
  callAPI(requestURL2)
  txtaGL_contents.style.height = "200px"
  // radioButton()
}

btnAddCS.onclick = function() {
  message2 = ""
  tempGLA = (`${$("input[name=rdoCS]:checked").prop("value")}`)
  // clear the user choice off the screen
  $("#rdoCS_" + rdoCS.value).prop("checked", false)
  groceryList.push(tempGLA)
  console.log(groceryList)
  message2 = groceryList
  // Tried innerHTML, content, and value as well as <br /> and \n to get items on seperate lines but won't work
  txtaGL.value = message2  + "\n"
}

btnRemoveCS.onclick = function() {
  let indexFound = ""
  tempGLD = (`${$("input[name=rdoCS]:checked").prop("value")}`)
  indexFound = groceryList.indexOf(tempGLD)
  if (indexFound !== -1) {
  groceryList.splice(indexFound, 1)
  console.log(groceryList)
  message2 = groceryList
  txtaGL.value = message2  + "\n"
  $("#rdoCS_" + rdoCS.value).prop("checked", false)
  }
}
  /*let found = false
  // groceryList.splice(0,1)
  // console.log(`grocery list after splice/delete done: ${groceryList}`)
  tempGLD = (`${$("input[name=rdoCS]:checked").prop("value")}`)
  // console.log(tempGLD)
  for (i = 0; i < groceryList.length; i++) {
    switch (true) {
      case (tempGLD == "Caesar Salad Dressing"):
        groceryList.splice(i, 1)
        found = true
        break
      case (tempGLD == "Lemon Juice"):
        groceryList.splice(i, 1)
        found = true
        break
    }
    if (found == true){
       found == false
      break
      }
  }
  $("#rdoCS_" + rdoCS.value).prop("checked", false)
  */
btnGS.onclick=function(){
  ChangeForm(groceryStore)
}

btnGoToKeto2.onclick=function(){
  ChangeForm(keto)
}
