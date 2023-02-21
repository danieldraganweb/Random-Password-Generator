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
const generatedPasswordOne = generateRandomPassword();
const generatedPasswordTwo = generateRandomPassword();

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLenght; i++) {
    randomPassword += getRandomCharacter();
    inputElOne.value = randomPassword;
    inputElTwo.value = randomPassword;
  }
  if (randomPassword.length > 15) {
    randomPassword = randomPassword.slice(0, 15);
  }
  return randomPassword;
}

console.log(
  "Here is two random passwords: ",
  generatedPasswordOne,
  " and",
  generatedPasswordTwo
);
function copyPasswordOne() {
  inputElOne.select();
  document.execCommand("copy");
  inputElOne.value = "Copied!";
}
function copyPasswordTwo() {
  inputElTwo.select();
  document.execCommand("copy");
  inputElTwo.value = "Copied!";
}
