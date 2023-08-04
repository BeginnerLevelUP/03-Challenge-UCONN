// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// //const generatePassword=()=>{

// //}

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




const passwordOptions={
  alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
  numbersArray : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
    for(const passwordArrays in passwordOptions){
    // console.log(`${passwordArrays}:${passwordOptions[passwordArrays]}`)
     const generatePassword=passwordOptions[passwordArrays].toString()
     const randomIndex =Math.floor(Math.random()*generatePassword.length)
      const randomCharacter=generatePassword[randomIndex]
      console.log(randomCharacter)
    };