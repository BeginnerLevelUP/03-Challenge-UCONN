//Create Variables 

// All the characters needed to make a password placed inside an object
const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?']
const numbersArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,]

// HTML Elements for Select Logic
const upCase = document.querySelector('#upCase');
const lowCase = document.querySelector('#lowCase');
const special = document.querySelector('#special');
const num = document.querySelector('#num');
const checkBoxes = [upCase, lowCase, special, num];

//Other HTML Elements
const passwordText = document.querySelector("#password");
const generateBtn=document.querySelector('#generate')
const rangeInput=document.querySelector('#rangeInput')
const rangeValue=document.querySelector('#rangeValue')

// Object to create a new password
const goodPassword={
  upperCase:true,
  lowerCase:true,
  numbers:true,
  specialCharacters:true,
  dictionary:false
}
// Class To Create Multiple Passwords
class Password {
  constructor() {
    this._content = [];
    this._upperCase = NaN;
    this._lowerCase = NaN;
    this._numbers = NaN;
    this._specialCharacters = NaN;
    this._dictionary = NaN;
  }
  // get for length
  get length(){
    return this._content.length
  }

  //Generate Password
  generatePassword(array,repeat) {
    // Used for checkBoxes
    for(let i=0;i<repeat;i++){
      this._content.push(...array);
    }
    randomizePassword(this._content)
    
        // Ammount
        const ammount=rangeInput.val;
        if (ammount >= password._content.length) {
        
          password._content = password._content.slice(0, ammount);
        } else {
        
          password._content = password._content.slice(0, ammount);
        }
  }

}

// Class Instance
const password = new Password();

//---------------------------------------------------------------------------//
//Functions


      // Randomize an Array insipired from the website below
 function randomizePassword(passwordArray){
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
        for (let i = passwordArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
        }
        return passwordArray;
      } 

      // Add event listener to the generate button
      generateBtn.addEventListener('click', () => {
        checkBoxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
            password._content=[]
            if (upCase.checked) {
              password.generatePassword(alphabetUpper,5);
              password._upperCase=true;
            } else {
              password._content = password._content.filter(char => !alphabetUpper.includes(char));
              password._upperCase=false;
            }
        
            if (lowCase.checked) {
              password.generatePassword(alphabetLower,5);
              password._lowerCase=true;
            } else {
              password._content = password._content.filter(char => !alphabetLower.includes(char));
              password._lowerCase=false;
            }
        
            if (special.checked) {
              password.generatePassword(specialCharacters,5);
              password._specialCharacters=true
            } else {
              password._content = password._content.filter(char => !specialCharacters.includes(char));
              password._specialCharacters=false
            }
        
            if (num.checked) {
              password.generatePassword(numbersArray,13);
              password._numbers=true
            } else {
              password._conten = password._content.filter(char => !numbersArray.includes(char));
              password._numbers=false
            }
            
            console.log(password)
            
            //PassWord Strength Logic
            // GOOD PASSWORD CRITIERA 
            /* 1) At least a legth of 16 - If not met considered to be a BAD password (level 1)
              2)  Must have all character types - If only or only one some of them but not all considered to be a good password and passes level 1(Level 2)
              3) no words allowed ( Based on api dictionary - passed level 2 and now has no words from the dictionary api 
            */
           if(password.length>=16){ //LeveL ONe
            console.log('beat level one');

            if (password._upperCase && password._lowerCase && password._specialCharacters && password._numbers) { // Level Two
              console.log('beat level two');
              
             /* if(){// Level three

              }*/
          }
          else{// Level Two
            console.log('It is recommended that your password contains at all characters types for MAXIMUM security');
          }
           }
           else{ // Level one 
            console.log('It is recommended that your password is at least 16 characters long');
           }

          });
        });
        // Randomize the password content and update the passwordText element
        randomizePassword(password._content);
        passwordText.value = `${password._content.join('')} Password Length: ${password._content.length}`;
      });
      
    //Show the value of the range  make it appera above the range itself
   rangeInput.addEventListener('input',()=>{
   const value=rangeInput.value
   rangeValue.textContent=`Range Value: ${value}`;
 })

//---------------------------------------------------------------------------//   
