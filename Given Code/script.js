// All the characters needed to make a password placed inside an object
const passwordObject={
  alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 alphabetLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
  numbersArray : [0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
 };


/* 
Step one - create an object with good password criteria
Step two - create classes to generate objects for each password generate possible have those properties appear on the screen
Step three - A)create logic to evaluate objects that will then change the border status of the box 
              it can be given the property of 
              good
              bad 
              okay 
              and passes on the boolean value assigned to the property above the style of the broder will change
              will similary named clases good,bad,okay 
              B) use the dictionary api to evaluate if the password has any understandable word
step four - the user can now type into the box ( the reason for the classes one for human one for computer)
step 5 - get the last 5 generated passwords into a list 
*/

const goodPassword={
  length:16,
  upperCase:true,
  lowerCase:true,
  numbers:true,
  specialCharacters:true,
  dictionary:false
}

class Password{
  constructor(length,upperCase,lowerCase,numbers,specialCharacters,dictionary){
    this._length=length
    this._upperCase=upperCase
    this._lowerCase=lowerCase
    this._numbers=numbers
    this._specialCharacters=specialCharacters
    this._dictionary=dictionary
  }
}

//Logic to select
 let passwordCharacter = [];
 const upCase=document.querySelector('#upCase')
 const lowCase=document.querySelector('#lowCase')
 const special=document.querySelector('#special')
 const num=document.querySelector('#num')
 const checkBoxes=[upCase,lowCase,special,num]
 // Use A loop to add multiple iterations of the same array so it can match the 128 count 
function repeat(repeat,array){
  for(let i=0;i<repeat;i++){
    passwordCharacter = passwordCharacter.concat(array);
  }
 }

const select=()=>{
  checkBoxes.forEach(checkBoxes=>{
    checkBoxes.addEventListener('change',()=>{
      if (upCase.checked) {
          repeat(5,passwordObject.alphabetUpper)
      } else {
        passwordCharacter = passwordCharacter.filter(char => !passwordObject.alphabetUpper.includes(char));
      }
      
      if (lowCase.checked) {
        repeat(5,passwordObject.alphabetLower)
      } else {
        passwordCharacter = passwordCharacter.filter(char => !passwordObject.alphabetLower.includes(char));
      }
      
      if (special.checked) {
        repeat(5,passwordObject.specialCharacters)
      } else {
        passwordCharacter = passwordCharacter.filter(char => !passwordObject.specialCharacters.includes(char));
      }
      
      if (num.checked) {
       repeat(13,passwordObject.numbersArray)
      } else {
        passwordCharacter = passwordCharacter.filter(char => !passwordObject.numbersArray.includes(char));
      }
    })
  })
  }
select()


 //Show the value of the range  make it appera above the range itself
 const rangeInput=document.querySelector('#rangeInput')
 const rangeValue=document.querySelector('#rangeValue')
 rangeInput.addEventListener('input',()=>{
   const value=rangeInput.value
   rangeValue.textContent=`Range Value: ${value}`;
 })

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
 
   var password = generatePassword(rangeInput.value);
   var passwordText = document.querySelector("#password");
 
   passwordText.value = `${password} Password Legnth: ${password.length}`;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


//pass word strength
// Object with good critera search on google match it against password generated if good create a span that wraps around broder and grows and chanes color based on critera

//pass word evaluation
// make is so you can type into the text box and evalutate your own password


// show previous passwords

// use classes to create objects one for computer generate one for user and for computer


