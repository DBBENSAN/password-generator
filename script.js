
var charaBank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()"
var getLowerChara = charaBank.slice(0, 26)
var getUpperChara = charaBank.slice(27, 52)
var getNumsChara = charaBank.slice(53, 62)
var getSpecialChara = charaBank.slice(63, 73)
var allowedCharas = "";
if (includeLower == true) {
  allowedCharas += getLowerChara;
} 
if (includeUpper == true) {
  allowedCharas += getUpperChara;
} 
if (includeNums == true) {
  allowedCharas += getNumsChara;
} 
if (includeSpecial == true) {
  allowedCharas += getSpecialChara;
} return allowedCharas;

function getPassLength() { 
  var passwordLength = prompt("Choose a password length:\n(8 - 128)", "Input a number between 8-128");
  if (isNaN(passwordLength)) {
    window.alert("Invalid input, please choose a whole number between 8-128\n Press cancel to abort.");
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length, please make sure that the lenght chosen is between 8-128"); getPasslength();
  } else return passwordLength;
}
    
function getPassPara() {
  var includeLower = window.confirm("Include lower case characters?\n Confirm for Yes\n Cancel for No");
  var includeUpper = window.confirm("Include upper case characters?\n Confirm for Yes\n Cancel for No");
  var includeSpecial =window.confirm("Include special case characters?\n Confirm for Yes\n Cancel for No");
  var includeNums = window.confirm("Include number characters?\n Confirm for Yes\n Cancel for No");
  if (includeLower === false && includeUpper === false && includeSpecial === false && includeNums === false); {
    window.alert("Must include at least 1 criteria"); getPassPara();
  } else { 
    generatePassword; 
  }
}

var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

function writePassword() {
  getPassLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;  
  generatePassword = function() {
    passwordGen = "";
    for (var i = 0; i < passwordLength; i++); 
      var index = allowedCharas.charAt(Math.floor(Math.random() * passwordGen.length))
    } 
  }

generateBtn.addEventListener("click", writePassword);

