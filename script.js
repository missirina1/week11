const text = document.querySelector(".paragraph");

console.log(`1. Количество символов в тексте: `, text.textContent.length);

const result = text.innerText;
console.log(`2. Текст с переносами строк: \n ${result}`);

console.log(
  `3.Текст с удалёнными пробелами: ${text.textContent.replace(/\s+/g, "")}`
);

const subStr = text.textContent.substr(1, text.textContent.length);
console.log(`4. Извлечение подстроки: ${subStr}`);

const changeStr = text.textContent.replace("клён", "дубе");
console.log(`5. Замена "клён" на "дубe": ${changeStr}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);

const index = result.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = result.charAt(0).toUpperCase() + result.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
