
let restaurants = ""

let URL4 = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBSQm0wFw0JV8EEPXzqKtv5NIlwQIz9jzQ&query=Grocery Stores&location= 41.265331,-95.949364&radius=5000&type=Grocery"

let getData = () => 
       fetch(URL4).then(response => response.json()).then(({results}) => results)

// create a function to put the api data into the projects' global variable 'restaurant'
 function freeData(apiData) {
     restaurants = apiData  
}
    
//  ***Main Program *** //

// call the API call function getData() to start the process
getData().then(data => {
    freeData(data)           // when getData() is done, call freeData with the api data that was returned
    // console.log(data)
    restaurants = data
})

btnGoToShowData.onclick=function(){
  // go to showData form and see API data that was put into global variable 'restaurants'
  console.log(restaurants)
  lblShowData.value = `The nearest grocery store is ${restaurants[0].name}, the second nearest grocery store is ${restaurants[1].name}.`
}

groceryStore.onshow=function(){
 txtaGLS.value = groceryList
}

