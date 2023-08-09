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

// Class To Create Multiple Passwords
class Password {
  constructor() {
    this._content = [];
    this._upperCase = true;
    this._lowerCase = true;
    this._numbers = true;
    this._specialCharacters = true;
    this._dictionary = true;
  }
  // get for length
  //Generate Password
  generatePassword(array,repeat) {
    // Used for checkBoxes
    for(let i=0;i<repeat;i++){
      this._content.push(...array);
    }
    randomizePassword(this._content)
    
        // Ammount
        const ammount=128
        if (ammount >= password._content.length) {
        
          password._content = ppassword._content.slice(0, ammount);
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

      generateBtn.addEventListener('click', () => {
        checkBoxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
            password._content=[]
            if (upCase.checked) {
              password.generatePassword(alphabetUpper,5);
            } else {
              password._content = password._content.filter(char => !alphabetUpper.includes(char));
            }
        
            if (lowCase.checked) {
              password.generatePassword(alphabetLower,5);
            } else {
              password._content = password._content.filter(char => !alphabetLower.includes(char));
            }
        
            if (special.checked) {
              password.generatePassword(specialCharacters,5);
            } else {
              password._content = password._content.filter(char => !specialCharacters.includes(char));
            }
        
            if (num.checked) {
              password.generatePassword(numbersArray,13);
            } else {
              password._content = password._content.filter(char => !numbersArray.includes(char));
            }
          });
        });
 
        // Randomize the password content and update the passwordText element
        randomizePassword(password._content);
        passwordText.value = `${password._content.join('')} Password Length: ${password._content.length}`;
      });

