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

let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked && darkMode) {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#fff";
    document.getElementById("container-el").style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.getElementById("container-el").style.backgroundColor = "#1e1e1e";
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
