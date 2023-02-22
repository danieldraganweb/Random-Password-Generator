const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLenght = 15;
let inputElOne = document.getElementById("input-el-1");
console.log(inputElOne.textContent);
let inputElTwo = document.getElementById("input-el-2");
console.log(inputElTwo.textContent);
let generatedPasswordOne = generateRandomPassword();
let generatedPasswordTwo = generateRandomPassword();
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";
let darkMode = true;
let upCaseCheck = document.getElementById("upCaseCheck");
let lowCaseCheck = document.getElementById("lowCaseCheck");
let symbolCheck = document.getElementById("symbolCheck");
let numbersCheck = document.getElementById("numbersCheck");

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLenght; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function generatePassword() {
  inputElOne.value = generateRandomPassword();
  inputElTwo.value = generateRandomPassword();
}
if (generatedPasswordOne && generatedPasswordTwo) {
  inputElOne.value = generatedPasswordOne;
  inputElTwo.value = generatedPasswordTwo;
} else {
  inputElOne.value = "Error";
  inputElTwo.value = "Error";
}

function newRandomPassword() {
  if (upCaseCheck.checked) {
    getUppercase();
    characters.push(getUppercase());
  } else {
    generatedPasswordOne = generateRandomPassword();
    generatedPasswordTwo = generateRandomPassword();
    inputElOne.value = generatedPasswordOne;
    inputElTwo.value = generatedPasswordTwo;
    return newRandomPassword();
  }
  if (lowCaseCheck.checked) {
    getLowercase();
    characters.push(getLowercase());
  } else {
    generatedPasswordOne = generateRandomPassword();
    generatedPasswordTwo = generateRandomPassword();
    inputElOne.value = generatedPasswordOne;
    inputElTwo.value = generatedPasswordTwo;
    return newRandomPassword();
  }
  if (numbersCheck.checked) {
    getNumber();
    characters.push(getNumber());
  } else {
    generatedPasswordOne = generateRandomPassword();
    generatedPasswordTwo = generateRandomPassword();
    inputElOne.value = generatedPasswordOne;
    inputElTwo.value = generatedPasswordTwo;
    return newRandomPassword();
  }

  if (symbolCheck.checked) {
    getSymbol();
    characters.push(getSymbol());
  } else {
    generatedPasswordOne = generateRandomPassword();
    generatedPasswordTwo = generateRandomPassword();
    inputElOne.value = generatedPasswordOne;
    inputElTwo.value = generatedPasswordTwo;
    return newRandomPassword();
  }
}

console.log(
  "Here is two random passwords: ",
  generatedPasswordOne,
  " and",
  generatedPasswordTwo
);

function copyPasswordOne() {
  inputElOne.select();
  navigator.clipboard.writeText(inputElOne.value);
  inputElOne.value = "Copied!";
}

function copyPasswordTwo() {
  inputElTwo.select();
  navigator.clipboard.writeText(inputElTwo.value);
  inputElTwo.value = "Copied!";
}

// Toggle Light Mode
let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked === true && darkMode === true) {
    document.body.style.backgroundColor = "#FEFBF3";
    document.body.style.color = "#4caf50";
    document.getElementById("input-el-1").style.backgroundColor = "white";
    document.getElementById("input-el-1").style.color = "#4caf50";
    document.getElementById("input-el-2").style.backgroundColor = "white";
    document.getElementById("input-el-2").style.color = "#4caf50";
    document.getElementById("input-el-1").style.border = "1px solid #4caf50";
    document.getElementById("input-el-2").style.border = "1px solid #4caf50";
    document.getElementById("input-el-1").style.outline = "none";
    document.getElementById("input-el-2").style.outline = "none";
    document.getElementById("container-el").style.backgroundColor = "gainsboro";
    document.getElementById("container-el").style.color = "#4caf50";
    document.getElementById("container-el").style.border = "5px solid #4caf50";
    document.getElementById("container-el").style.outline = "none";
    document.getElementById("container-el").style.boxShadow = "#4caf50";
    document.getElementById("upCaseCheck").style.backgroundColor = "#4caf50";
    document.getElementById("upCaseCheck").style.color = "white";
    document.getElementById("lowCaseCheck").style.backgroundColor = "#4caf50";
    document.getElementById("lowCaseCheck").style.color = "white";
    document.getElementById("numbersCheck").style.backgroundColor = "#4caf50";
    document.getElementById("numbersCheck").style.color = "white";
    document.getElementById("symbolCheck").style.backgroundColor = "#4caf50";
    document.getElementById("symbolCheck").style.color = "white";
  }
  //revert to dark mode
  if (!this.checked && darkMode === true) {
    document.body.style.backgroundColor = "#1f2937";
    document.body.style.color = "#5F939A";
    document.getElementById("input-el-1").style.backgroundColor = "#273549";
    document.getElementById("input-el-1").style.color = "#4caf50";
    document.getElementById("input-el-2").style.backgroundColor = "#273549";
    document.getElementById("input-el-2").style.color = "#4caf50";
    document.getElementById("input-el-1").style.border = "1px solid #1b252a";
    document.getElementById("input-el-2").style.border = "1px solid #1b252a";
    document.getElementById("input-el-1").style.outline = "none";
    document.getElementById("input-el-2").style.outline = "none";
    document.getElementById("container-el").style.backgroundColor = "#1b252a";
    document.getElementById("container-el").style.color = "#4caf50";
    document.getElementById("container-el").style.border = "5px solid #6096b4";
    document.getElementById("container-el").style.outline = "none";
    document.getElementById("container-el").style.boxShadow = "#4caf50";
    document.getElementById("upCaseCheck").style.backgroundColor = "#273549";
    document.getElementById("upCaseCheck").style.color = "white";
    document.getElementById("lowCaseCheck").style.backgroundColor = " #273549";
    document.getElementById("lowCaseCheck").style.color = "white";
    document.getElementById("numbersCheck").style.backgroundColor = " #273549";
    document.getElementById("numbersCheck").style.color = "white";
    document.getElementById("symbolCheck").style.backgroundColor = "#273549";
    document.getElementById("symbolCheck").style.color = "white";
  } else {
    return darkMode;
  }
});
