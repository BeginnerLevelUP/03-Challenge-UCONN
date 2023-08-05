const testing=document.getElementById('testing');
const testing2=document.getElementById('testing2');

// All the characters needed to make a password placed inside an object
const passwordObject={
 alphabetUpper : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
alphabeLower : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'],
 numbersArray : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 

};


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

removeElementsFromArray(passwordCharacter, passwordObject.alphabeLower);
removeElementsFromArray(passwordCharacter, passwordObject.alphabeLower);

// Ammount
const ammount=128;
let passwordRandomize = randomizePassword([...passwordCharacter]);
if (ammount >= passwordCharacter.length) {

  passwordRandomize = passwordRandomize.slice(0, ammount);
} else {

  passwordRandomize = passwordRandomize.slice(0, ammount);
}

testing.innerHTML = passwordRandomize.join('');
testing2.innerHTML = passwordCharacter//passwordRandomize.length;




