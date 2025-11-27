const randomNumber = Math.random();
const numberStr = String(randomNumber);
const randomId = numberStr.split(".").join("").slice(1, 6);
console.log(randomId);
