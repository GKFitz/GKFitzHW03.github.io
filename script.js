// Assignment Code
var generateBtn = document.querySelector("#generate");
// List the arrays containing numbers from 0 to 1, upper and lower case letters and special character
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// This variable is an empty array and will be used to concatinate the variables within the if statements within the generatePassword function.
var passOptions = [];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // This next line of code is used to tell the user to add a value, and if they don't add a correct value. They will be reminded.
  //The While statement effectively blocks the length portion
  while (true) {
    var passlength = prompt("How long would you like your password to be? Choose between 8 to 128 characters.");
    if (!passlength) {
      alert("Please add a value");
    } else if (passlength < 8 || passlength > 128) {
      prompt("Password must be higher than 8 or lower than 128 characters");
    } else {
      break;
    }
  }

  // After picking the length of the password, this next line of code is used to ask the user what characters they would like their password. It is still part of the generatePassword function
  if (confirm("Click ok if you want numbers in your password")) {
    passOptions = passOptions.concat(numbers);
  }
  if (confirm("Click ok if you want upper case characters in your password")) {
    passOptions = passOptions.concat(upperCase);
  }
  if (confirm("Click ok if you want lower case characters in your password")) {
    passOptions = passOptions.concat(lowerCase);
  }
  if (confirm("Click ok if you want special characters in your password")) {
    passOptions = passOptions.concat(specialChar);
  }
  // This next line of code is used in case no option has been chosen for the password generator
  if (passOptions.length == 0) {
    alert("Please choose a criteria");
  }

  // This is the empty array that will contain the new random password
  var randomPassword = [];
  // This next line of code is the loop required for the generation of the password, and the ramdom picks from the arrays.
  for (var i = 0; i < passlength; i++) {
    var allPassOptions = passOptions[Math.floor(Math.random() * passOptions.length)];
    randomPassword.push(allPassOptions);
  }
  return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);