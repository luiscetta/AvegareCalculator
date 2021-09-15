const notas = {
    "nota1": '',
    "nota2": '',
    "nota3": '',
    "nota4": '',
}

function getGrades(e) {
    console.log(e.value)
    notas[e.id] = parseFloat(e.value);
}

function calculateGrades(e) {
    const media = 7;
    let somaDasNotas = 0;

    Object.values(notas).forEach((n) => somaDasNotas += n);
    const mediaDoAluno = Number((somaDasNotas / 4).toFixed(1));

    const resultado = mediaDoAluno >= media ? `Você foi APROVADO! Nota: ${mediaDoAluno}` : `REPROVADO! Chora não... Nota: ${mediaDoAluno}`;

    console.log(mediaDoAluno);

    const resultElement = document.getElementById('result01');
    resultElement.innerText = resultado;
    resultElement.hidden = false;
}

function typeWriter(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * i);
    });
};

const title = document.querySelector('h1');
typeWriter(title);