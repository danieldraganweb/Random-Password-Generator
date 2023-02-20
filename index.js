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

let password = "";
let passwordLenght = 15;
let inputElOne = document.querySelector("input-el-1");
console.log(inputEl1);
let inputElTwo = document.querySelector("input-el-2");
console.log(inputEl2);

function generateRandomPasswords() {
  for (let i = 0; i < characters.length; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    inputElOne.textContent = characters[randomIndexOne];
    inputElTwo.textContent = characters[randomIndexTwo];
  }
  if (inputElOne.textContent === inputElTwo.textContent) {
    generateRandomPasswords();
  } else {
    password = inputElOne.textContent + inputElTwo.textContent;
  }

  for (let i = 0; i < passwordLenght; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
}
