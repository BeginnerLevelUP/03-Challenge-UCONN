// All the characters needed to make a password placed inside an object
const passwordObject={
  alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 alphabetLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
  numbersArray : [0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
  
 
 };
 
 const generatePassword=(length)=>{
 //ALL Characters placed into an array
 let passwordCharacter = [...passwordObject.alphabetLower, ...passwordObject.specialCharacters, ...passwordObject.numbersArray,...passwordObject.alphabetUpper,...passwordObject.alphabetLower, ...passwordObject.specialCharacters, ...passwordObject.numbersArray];
 
 // Randomize an Array insipired from the website below
 const randomizePassword=(passwordArray)=> {
   //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
   for (let i = passwordArray.length - 1; i > 0; i--) {
     const randomIndex = Math.floor(Math.random() * (i + 1));
     [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
   }
   return passwordArray;
 } 
 
 const upCase=document.querySelector('#upCase')
  // Function to remove elements from an array/CheckBox Specifications
  const removeElementsFromArray = (input,array, elements) => {
    input.addEventListener('change',()=>{
      if(input.checked){
        elements.forEach((element) => {
          const index = array.indexOf(element);
          if (index !== -1) {
            array.splice(index, 1);
          }
        });
      }
      }
)
  }
  removeElementsFromArray(upCase,passwordCharacter,passwordObject.alphabetUpper)
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
 //rangeInput.value=0; //(Default Value at 0)
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
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 specifyBtn.addEventListener('click',()=>{
   const prompt=document.querySelector('.prompt')
   prompt.style.display='block'
 })
 generateBtn.addEventListener("click", writePassword);


//pass word strength
// Object with good critera search on google match it against password generated if good create a span that wraps around broder and grows and chanes color based on critera