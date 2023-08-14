// All the characters needed to make a password placed inside an object
const passwordObject={
  alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 alphabetLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
  numbersArray : [0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
 };

  let passwordCharacter=[];
//Generate Password
 const generatePassword=(length)=>{

 // Randomize an Array insipired from the website below
 const randomizePassword=(passwordArray)=> {
   //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
   for (let i = passwordArray.length - 1; i > 0; i--) {
     const randomIndex = Math.floor(Math.random() * (i + 1));
     [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
   }
   return passwordArray;
 } 

 // Ammount
 const ammount=length;
 let passwordRandomize = randomizePassword([...passwordCharacter]);
 if (ammount >= passwordCharacter.length) {
 
   passwordRandomize = passwordRandomize.slice(0, ammount);
 } else {
 
   passwordRandomize = passwordRandomize.slice(0, ammount);
 }

 return passwordRandomize.join('')
 }

 // Assignment Code
 var generateBtn = document.querySelector("#generate");
 const specifyBtn=document.querySelector('#specify')
 // Write password to the #password input
 function writePassword() {
  const lengthPrompt=prompt('What is the desired length of your password (8-128)')
  if(lengthPrompt<128 || lengthPrompt>0){
    alert(`Your Password will have ${lengthPrompt} ammount of characters`)
  }
  else if(lengthPrompt!=passwordObject.numbersArray){
    alert('Invalid length')
  }
  
  const specifyPrompt = prompt('Choose a character type (all/uppercase/lowercase/special/numbers)').toLowerCase();
  switch (specifyPrompt){
    case 'all':
      alert('All Character Types Will Be Added To The Password')
      passwordCharacter=passwordCharacter.concat(passwordObject.alphabetLower,passwordObject.alphabetUpper,passwordObject.numbersArray,passwordObject.specialCharacters)
      break;
    case 'uppercase':
      alert('Only UpperCase Characters Will Be Added To Your Password')
      repeat(5,passwordObject.alphabetUpper)
      break;
    case 'lowercase':
        alert('Only LowerCase Characters Will Be Added To Your Password')
        repeat(5,passwordObject.alphabetLower)
        break;  
    case 'special':
          alert('Only Special Characters Will Be Added To Your Password')
          repeat(5,passwordObject.specialCharacters)
          break; 
    case 'numbers':
            alert('Only Numbers Will Be Added To Your Password')
            repeat(13,passwordObject.numbersArray)
            break;
    default:
      alert('Invalid Character')
  }
   var password = generatePassword(lengthPrompt);
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password+ ' '+password.length;
 
 }
 generateBtn.addEventListener("click", writePassword);
