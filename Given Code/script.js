// All the characters needed to make a password placed inside an object
const passwordObject={
 alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
alphabeLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
 numbersArray : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 

};

const generatePassword=(length,remove)=>{
//ALL Characters placed into an array
let passwordCharacter = [...passwordObject.alphabetUpper,...passwordObject.alphabeLower, ...passwordObject.specialCharacters, ...passwordObject.numbersArray,...passwordObject.alphabetUpper,...passwordObject.alphabeLower, ...passwordObject.specialCharacters, ...passwordObject.numbersArray];

// Randomize an Array insipired from the website below
const randomizePassword=(passwordArray)=> {
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
  }
  return passwordArray;
} 

// Function to remove elements from an array
const removeElementsFromArray = (array, elements) => {
  elements.forEach((element) => {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  });
};

removeElementsFromArray(passwordCharacter, remove);
removeElementsFromArray(passwordCharacter, remove);

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
rangeInput.value=0; //(Default Value at 0)
const rangeValue=document.querySelector('#rangeValue')

rangeInput.addEventListener('input',()=>{
  const value=rangeInput.value
  rangeValue.textContent=value;
})


// CheckBox Specifications
const upCase=document.querySelector('upCase')
upCase.addEventListener('change',()=>{

})




// Assignment Code
var generateBtn = document.querySelector("#generate");
const specifyBtn=document.querySelector('#specify')
// Write password to the #password input
function writePassword() {

  var password = generatePassword(rangeValue.textContent,'');
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
specifyBtn.addEventListener('click',()=>{
  const prompt=document.querySelector('.prompt')
  prompt.style.display='block'
})
generateBtn.addEventListener("click", writePassword);





