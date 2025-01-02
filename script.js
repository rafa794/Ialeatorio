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

// Eurodreams
function generateEurodreams() {
    const mainNumbers = getRandomNumbers(40, 6).join(", ");
    const dream = getRandomNumbers(5, 1)[0];
    displayResult("Eurodreams", `
        <strong>Números:</strong> ${mainNumbers}<br>
        <strong>Sueño:</strong> ${dream}
    `);
}

// Primitiva
function generatePrimitiva() {
    const mainNumbers = getRandomNumbers(40, 6).join(", ");
    const reintegro = Math.floor(Math.random() * 10);
    displayResult("Primitiva", `
        <strong>Números:</strong> ${mainNumbers}<br>
        <strong>Reintegro:</strong> ${reintegro}
    `);
}

// Bonoloto 
function generateBonoloto() {
    const bet1 = getRandomNumbers(40, 6).join(", ");
    const bet2 = getRandomNumbers(40, 6).join(", ");
    displayResult("Bonoloto", `
        <strong>Apuesta 1:</strong> ${bet1}<br>
        <strong>Apuesta 2:</strong> ${bet2}
    `);
}

// Euromillón
function generateEuromillon() {
    const mainNumbers = getRandomNumbers(50, 5).join(", ");
    const luckyStars = getRandomNumbers(12, 2).join(", ");
    displayResult("Euromillón", `
        <strong>Números:</strong> ${mainNumbers}<br>
        <strong>Estrellas:</strong> ${luckyStars}
    `);
}

function displayResult(resultTitle, bets) {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h2>${resultTitle}</h2>
        <p>${bets}</p>
    `;
}