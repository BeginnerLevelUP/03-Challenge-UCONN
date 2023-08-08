// All the characters needed to make a password placed inside an object
const passwordObject={
  alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 alphabetLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
  numbersArray : [0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
 };



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


 //Show the value of the range
 const rangeInput=document.querySelector('#rangeInput')

 const rangeValue=document.querySelector('#rangeValue')
 
 rangeInput.addEventListener('input',()=>{
   const value=rangeInput.value
   rangeValue.textContent=value;
 })


 // Assignment Code
 var generateBtn = document.querySelector("#generate");
 const specifyBtn=document.querySelector('#specify')
 // Write password to the #password input
 function writePassword() {
 
   var password = generatePassword(rangeInput.value);
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password+ ' '+password.length;
 
 }
 
 // Add event listener to generate button
 specifyBtn.addEventListener('click',()=>{
   const prompt=document.querySelector('.prompt')
   prompt.style.display='block'
 })
 generateBtn.addEventListener("click", writePassword);


//pass word strength
// Object with good critera search on google match it against password generated if good create a span that wraps around broder and grows and chanes color based on critera