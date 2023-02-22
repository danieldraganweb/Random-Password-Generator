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
}
function newRandomPassword() {
  generatedPasswordOne = generateRandomPassword();
  generatedPasswordTwo = generateRandomPassword();
  inputElOne.value = generatedPasswordOne;
  inputElTwo.value = generatedPasswordTwo;
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

// Function to include all characters
function includeAllCharacters() {
  characters.splice(
    0,
    94,
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
    "/"
  );
  console.log(characters);
  newRandomPassword();
}

// Function to include only symbols
function includeOnlySymbols() {
  characters.splice(
    0,
    94,
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
    "/"
  );
  console.log(characters);
  newRandomPassword();
}

// Function to include only numbers

function includeOnlyNumbers() {
  characters.splice(0, 94, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  console.log(characters);
  newRandomPassword();
}

// Function to include only lower case letters
function includeOnlyLowerLetters() {
  characters.splice(
    0,
    94,
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
    "z"
  );
  console.log(characters);
  newRandomPassword();
}

// Function to include only upper case letters
function includeOnlyUpperLetters() {
  characters.splice(
    0,
    94,
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
    "Z"
  );
  console.log(characters);
  newRandomPassword();
}

// Function to include only upper and lower case letters
function includeOnlyUpperAndLowerLetters() {
  characters.splice(
    0,
    94,
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
    "z"
  );
  console.log(characters);
  newRandomPassword();
}

// Function to include only upper and lower case letters and numbers
function includeOnlyUpperAndLowerLettersAndNumbers() {
  characters.splice(
    0,
    94,
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
    "9"
  );
  console.log(characters);
  newRandomPassword();
}
