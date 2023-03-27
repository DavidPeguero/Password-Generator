// Assignment Code
var generateBtn = document.querySelector("#generate");

// Options section and buttons variables
var optionsList = document.querySelector("#options")
var submit_options = document.querySelector("#submit-options")


//Initialize visibility to hidden and set a flag corresponding to said state
optionsList.style.visibility = 'hidden';


//Set options to false by default
document.getElementById('password-length').value = ''
document.getElementById('lowercase').checked = false;
document.getElementById('uppercase').checked = false;
document.getElementById('numeric').checked = false;
document.getElementById('special').checked = false;

document.querySelector("#password").value = '';





//Option character: 
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '0123456789';
var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//Possible chars after options
var possibleChars = '';

//Sets Options and then generates password
function setOptions(){

  //Get all the checked box statuses 
  var lowercase = document.getElementById('lowercase').checked;
  var uppercase = document.getElementById('uppercase').checked;
  var numeric = document.getElementById('numeric').checked;
  var special = document.getElementById('special').checked;

  
  var desiredLength = document.getElementById('password-length').value;
  //Reset possible chars for password so last password options do not carry overgi
  possibleChars = '';

  //If checked add the possible chars for the pass to an array
  if(lowercase){
    possibleChars = possibleChars + lowercaseChars;
  }
  if(uppercase){
    possibleChars = possibleChars + uppercaseChars;
  }
  if(numeric){
    possibleChars = possibleChars + numericChars;
  }
  if(special){
    possibleChars = possibleChars + specialChars;
  }

  
  //If not valid length
  if(desiredLength < 8 || desiredLength > 128){
    alert('Desired Length Must be between 8 and 128 characters');
  }
  //If there is no character type allowed 
  else if(possibleChars.length === 0){
    alert('No character types selected');
    
  }
  else{
    //I'm passing in the desired length and converting it to a number as well
    generatePassword(desiredLength);
    generateBtn.removeAttribute('disabled');
    optionsList.style.visibility = 'hidden';
  }


}


function generatePassword(pLength){
  var password = ''

  //Get a random char from the list of possible chars until it is as long as the desired password length
  for(var i = 0; i < pLength; i++){
    password = password + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
  }

  //Insert the text into the HTML password textarea
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Begins the flow to write the password to screen
function writePassword() {
  optionsList.style.visibility = 'visible'
  generateBtn.setAttribute('disabled', true)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
submit_options.addEventListener("click", setOptions);
