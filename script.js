function getRandomNumbers(range, count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * range) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function generateEurodreams() {
    const mainNumbers = getRandomNumbers(40, 6);
    const dream = getRandomNumbers(5, 1)[0];
    displayResult(`Eurodreams\nNúmeros: ${mainNumbers.join(", ")}\nSueño: ${dream}`);
}

function generatePrimitiva() {
    const mainNumbers = getRandomNumbers(40, 6);
    const reintegro = Math.floor(Math.random() * 10);
    displayResult(`Primitiva\nNúmeros: ${mainNumbers.join(", ")}\nReintegro: ${reintegro}`);
}

function generateBonoloto() {
    const bet1 = getRandomNumbers(40, 6);
    const bet2 = getRandomNumbers(40, 6);
    displayResult(`Bonoloto\nApuesta 1: ${bet1.join(", ")}\nApuesta 2: ${bet2.join(", ")}`);
}

function generateEuromillon() {
    const mainNumbers = getRandomNumbers(50, 5);
    const luckyStars = getRandomNumbers(12, 2);
    displayResult(`Euromillón\nNúmeros: ${mainNumbers.join(", ")}\nEstrellas: ${luckyStars.join(", ")}`);
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}