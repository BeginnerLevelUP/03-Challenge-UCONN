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
const checkBtn=document.querySelector('#check')
const rangeInput=document.querySelector('#rangeInput')
const rangeValue=document.querySelector('#rangeValue')
const copy=document.querySelector('#copy')
const prev=document.querySelector('#prev')
const lcheck=document.querySelector('.lengthCheck')
const tcheck=document.querySelector('.typeCheck')

// Class To Create Multiple Passwords
class Password {
  constructor() {
    this._content = [];
    this._upperCase = NaN;
    this._lowerCase = NaN;
    this._numbers = NaN;
    this._specialCharacters = NaN;
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
        const ammount=rangeInput.value;
        if (ammount >= password._content.length) {
        
          password._content = password._content.slice(0, ammount);
        } else {
        
          password._content = password._content.slice(0, ammount);
        }
  }

}

// Class Instance
const password = new Password();

const userPasswrord= new Password()
userPasswrord._content=''
//---------------------------------------------------------------------------//
//Functions
      //Copy to clipboard
      
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard:', text);
    })
    .catch(err => {
      console.error('Error copying text to clipboard:', err);
    });
}



    
      // Randomize an Array insipired from the website below
 function randomizePassword(passwordArray){
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array//
        for (let i = passwordArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
        }
        return passwordArray;
      } 

    //Show the value of the range  make it appera above the range itself
rangeInput.addEventListener('input',()=>{
  const value=rangeInput.value
  rangeValue.textContent=`Length of password: ${value}`;
            });

    
    //PassWord Strength Logic
function passwordStrength(passWordObject){
  // GOOD PASSWORD CRITIERA 
      /* 1) At least a legth of 16 - If not met considered to be a BAD password (level 1)
      2)  Must have all character types - If only or only one some of them but not all considered to be a good password and passes level 1(Level 2)
      3) no words allowed ( Based on api dictionary - passed level 2 and now has no words from the dictionary api 
       */
        if(passWordObject.length>16){ //LeveL ONe
          //statusPassword.setAttribute('style','color:green;')
          lcheck.setAttribute('style','color:green;')
          tcheck.setAttribute('style','color:green;')
          passwordText.setAttribute('style','color:green;')
                    
         if (passWordObject._upperCase && passWordObject._lowerCase && passWordObject._specialCharacters && passWordObject._numbers) { // Level Two
          lcheck.textContent=`Length: ` 
          tcheck.textContent=`All Types: `
          lcheck.textContent=`${lcheck.textContent}  ✅` 
          tcheck.textContent=`${tcheck.textContent}  ✅` 

        }
        else{// Level Two
        lcheck.textContent=`Length: ` 
        tcheck.textContent=`All Types: `
        lcheck.textContent=`${lcheck.textContent}  ✅` 
        tcheck.textContent=`${tcheck.textContent}  ❌`
        lcheck.setAttribute('style','color:orange;')
        tcheck.setAttribute('style','color:orange;')
        passwordText.setAttribute('style','color:orange;')
        }
       } 
      else{ // Level one 
      lcheck.textContent=`Length: ` 
      tcheck.textContent=`All Types: `
      lcheck.textContent=`${lcheck.textContent}  ❌` 
      tcheck.textContent=`${tcheck.textContent}  ❌`
      lcheck.setAttribute('style','color:red;')
      tcheck.setAttribute('style','color:red;')
      passwordText.setAttribute('style','color:red;')
      }
    }    


    // Logic For TextBoxes
function genSelect(){
                  password._content=[];
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
                    password._content = password._content.filter(char => !numbersArray.includes(char));
                    password._numbers=false
                  }
                  randomizePassword(password._content);
                  passwordText.value = `${password._content.join('')} Password Length: ${password.length}`;
                  passwordStrength(password);

}

    // Logic to generate a password with all character types if no checkbox is click
function gen(){
  
              // Set all properties to trre
              password._upperCase=true
              password._lowerCase=true
              password._numbers=true
              password._specialCharacters=true
            // If checkboxes arent clicked passwords can still be generated
            password.generatePassword(alphabetUpper,5);
            password.generatePassword(alphabetLower,5);
            password.generatePassword(numbersArray,5);
            password.generatePassword(specialCharacters,5);

          // Randomize the password content and update the passwordText element
          randomizePassword(password._content);
          passwordText.value = `${password._content.join('')} Password Length: ${password._content.length}`;
          passwordStrength(password);


}

// Function to handle the Generate button click event
function handleGenerateClick() {
  if (upCase.checked || lowCase.checked || num.checked || special.checked) {
    genSelect();
    copy.addEventListener('click', function() {
      copyToClipboard(password._content.join(''));
    });
  } 
  else {
    gen();
    copy.addEventListener('click', function() {
      copyToClipboard(password._content.join(''));
    });
  }
  
}

// Add event listener to the Generate button
generateBtn.addEventListener('click', handleGenerateClick);

    //User Input 
    passwordText.addEventListener('keyup',()=>{
      passwordText.removeAttribute('readonly')
      passwordText.placeholder='Type Your Own Password'

      
      
      userPasswrord._content=passwordText.value 
      // Add if Statements to change boolean properties |

      alphabetUpper.forEach(element=>{
        if(passwordText.value.includes(element)){
          userPasswrord._upperCase=true;
        }
      })

      alphabetLower.forEach(element=>{
        if(passwordText.value.includes(element)){
          userPasswrord._lowerCase=true;
        }
      })

      specialCharacters.forEach(element=>{
        if(passwordText.value.includes(element)){
          userPasswrord._specialCharacters=true;
        }
      })
      
      numbersArray.forEach(element=>{
        if(passwordText.value.includes(element)){
          userPasswrord._numbers=true;
        }
      })
      
      copy.addEventListener('click', function() {
        copyToClipboard(passwordText.value);
      });
      rangeValue.textContent=`Length of password: ${userPasswrord.length}`
      rangeInput.value=userPasswrord.length
      passwordStrength(userPasswrord)
    })

    // Previous Icon
    prev.addEventListener('click',()=>{

    })
    
//---------------------------------------------------------------------------//   

