loginUsername = ""

btnLogin.onclick = function() {
  loginUsername = inptLoginUsername.value
  loginPassword = inptLoginPassword.value
  query = "SELECT username, password FROM customer WHERE username = '" + loginUsername + "' AND password = '" + loginPassword + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText) 
    console.log(results)
    if (results.length == 0) 
      lblMessage.value = "Incorrect Username or Password, please try again!"
    else
      ChangeForm(diets)
  } else
    lblMessage.value = "This did not reach the database"
}