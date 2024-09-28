const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomIndex() {
  return Math.floor(Math.random() * alphabet.length);
}

let randomWord = "";

for (i = 0; i < 4; i++) {
  const randomLIndex = getRandomIndex();
  randomWord = randomWord + alphabet[randomLIndex];
}
console.log(randomWord);
