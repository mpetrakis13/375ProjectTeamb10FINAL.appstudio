let req = ""
let query = ""
let results = ""
let netID = "map40414"
let pw = "Password"
let databaseSchema = "375groupb10"

// This is your blank starting team project - Dr. C
btnRegister.onclick=function(){
  let registerUsername = inptRegisterUsername.value
  let registerPassword = inptRegisterPassword.value
  let registerName = inptRegisterName.value
  query = "INSERT INTO customer (username,password,name) VALUES ('" + registerUsername + "', '" + registerPassword + "', '" + registerName + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
  ChangeForm(diets)
}



btnLoginForm.onclick=function(){
  ChangeForm(login)
}
