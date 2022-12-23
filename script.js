
var charaBank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"

var getLowerChara = charaBank.slice(0, 26);
var getUpperChara = charaBank.slice(26, 52);
var getNumsChara = charaBank.slice(52, 63);
var getSpecialChara = charaBank.slice(63, 74);

var lowerCaseArr = getLowerChara.split('')
var upperCaseArr = getUpperChara.split('')
var numsArr = getNumsChara.split('')
var specialArr = getSpecialChara.split('')

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var allowedCharas = [];
  var finalPassword = [];
  var passwordLength = parseInt(prompt("Choose a password length:\n(8 - 128)", "Input a number between 8-128"));

  if (isNaN(passwordLength)) {
    window.alert("Invalid input, please choose a whole number between 8-128\n Press cancel to abort.");
    return null
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length, please make sure that the lenght chosen is between 8-128");
    return null;
  }

  var includeLower = window.confirm("Include lower case characters?\n Confirm for Yes\n Cancel for No");
  var includeUpper = window.confirm("Include upper case characters?\n Confirm for Yes\n Cancel for No");
  var includeSpecial = window.confirm("Include special case characters?\n Confirm for Yes\n Cancel for No");
  var includeNums = window.confirm("Include number characters?\n Confirm for Yes\n Cancel for No");

  if (includeLower === false && includeUpper === false && includeSpecial === false && includeNums === false) {
    window.alert("Must include at least 1 criteria");
    return null
  }

  if (includeLower === true) {
    allowedCharas = allowedCharas.concat(lowerCaseArr)
  }

  if (includeUpper === true) {
    allowedCharas = allowedCharas.concat(upperCaseArr)
  }

  if (includeNums === true) {
    allowedCharas = allowedCharas.concat(numsArr)
  }

  if (includeSpecial === true) {
    allowedCharas = allowedCharas.concat(specialArr)
  }

    for (var i = 0; i < passwordLength; i++){
      var character = random(allowedCharas)

      finalPassword.push(character)
    }
    
  return finalPassword.join('')
}

function random(arr){
return arr[Math.floor(Math.random() * arr.length)]
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

