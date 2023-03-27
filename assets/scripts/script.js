// Assignment Code
var generateBtn = document.querySelector("#generate");

// Options section and buttons variables
var optionsList = document.getElementById("options")
var submit_options = document.getElementById("submit-options")


//Initialize visibility to hidden and set a flag corresponding to said state
optionsList.style.visibility = 'hidden';


//Set options to false by default
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


function setOptions(){

  //Get all the checked box statuses 
  var lowercase = document.getElementById('lowercase').checked;
  var uppercase = document.getElementById('uppercase').checked;
  var numeric = document.getElementById('numeric').checked;
  var special = document.getElementById('special').checked;

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


  //If there if at least one character type allowed 
  if(possibleChars.length != 0){
    generatePassword();
    generateBtn.removeAttribute('disabled')
    optionsList.style.visibility = 'hidden';
  }
}


function generatePassword(){
  var password = ''
  //Generate length randomly
  pLength = Math.floor(Math.random() * (128 - 8) + 8);

  //Get a random char from the list of possible chars until it is as long as the randomized password length
  for(var i = 0; i < pLength; i++){
    password = password + possibleChars.charAt(Math.floor(Math.random() * pLength))
  }

  console.log(pLength);
  console.log(password);

  //Insert the text into the HTML password textarea
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Write password to the #password input
function writePassword() {
  optionsList.style.visibility = 'visible'
  generateBtn.setAttribute('disabled', true)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
submit_options.addEventListener("click", setOptions);
