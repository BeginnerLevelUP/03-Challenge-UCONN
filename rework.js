// All the characters needed to make a password placed inside an object

const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?']
 numbersArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,]


const goodPassword={
 length:16,
 upperCase:true,
 lowerCase:true,
 numbers:true,
 specialCharacters:true,
 dictionary:false
}

class Password{
 constructor(){
   this._content=[]
   this._length=this._content.length
   this._upperCase=true
   this._lowerCase=true
   this._numbers=true
   this._specialCharacters=true
   this._dictionary=true
 }
 
 add(array) {
   this._content.push(...array);
 }
 
}


const password = new Password();

const check = document.querySelector('#work');
check.addEventListener('change', () => {
 if (check.checked) {
   password.add(alphabetLower);
 }
});
console.log(password)

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


