document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const casosContainer = document.getElementById('casos');

    const questions = [
        {
            question: "¿Cuál es el principal mecanismo de acción de la isoniazida?",
            answers: {
                a: "Inhibición de la RNA polimerasa",
                b: "Inhibición de la síntesis de ácidos micólicos",
                c: "Inhibición de la síntesis de proteínas",
                d: "Inhibición de la síntesis de ácidos nucleicos"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué efecto adverso está más relacionado con la rifampicina?",
            answers: {
                a: "Neuropatía periférica",
                b: "Hepatotoxicidad",
                c: "Neuritis óptica",
                d: "Hiperuricemia"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el fármaco más hepatotóxico en el tratamiento antituberculoso?",
            answers: {
                a: "Etambutol",
                b: "Rifampicina",
                c: "Isoniazida",
                d: "Pirazinamida"
            },
            correctAnswer: "d"
        },
        {
            question: "¿Cuál de los siguientes fármacos antituberculosos no requiere ajuste de dosis en insuficiencia renal?",
            answers: {
                a: "Pirazinamida",
                b: "Isoniazida",
                c: "Etambutol",
                d: "Rifampicina"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el efecto adverso más grave relacionado con el uso de etambutol?",
            answers: {
                a: "Hepatotoxicidad",
                b: "Neuritis óptica",
                c: "Hiperuricemia",
                d: "Hipersensibilidad"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué combinación de fármacos es utilizada en la fase inicial del tratamiento de la tuberculosis pulmonar?",
            answers: {
                a: "Rifampicina y pirazinamida",
                b: "Rifampicina, isoniazida, pirazinamida y etambutol",
                c: "Isoniazida y etambutol",
                d: "Rifampicina y etambutol"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué mecanismo de resistencia es común en Mycobacterium tuberculosis?",
            answers: {
                a: "Mutación en el gen KatG",
                b: "Alteración de las proteínas de membrana",
                c: "Sobreexpresión de la bomba de eflujo",
                d: "Mutación en la RNA polimerasa"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el efecto adverso más común de la pirazinamida?",
            answers: {
                a: "Neuritis óptica",
                b: "Hepatitis fulminante",
                c: "Hiperuricemia",
                d: "Fotosensibilidad"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál de los siguientes antituberculosos es el más adecuado para tratar formas intracelulares de la bacteria?",
            answers: {
                a: "Etambutol",
                b: "Rifampicina",
                c: "Pirazinamida",
                d: "Isoniazida"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué fármaco utilizado en el tratamiento antituberculoso es un profármaco que necesita activación en el organismo?",
            answers: {
                a: "Rifampicina",
                b: "Isoniazida",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué condición puede predisponer a la toxicidad de la isoniazida?",
            answers: {
                a: "Ser un acetilador rápido",
                b: "Ser un acetilador lento",
                c: "Insuficiencia renal",
                d: "Insuficiencia hepática"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es la principal vía de eliminación de la rifampicina?",
            answers: {
                a: "Bilis",
                b: "Orina",
                c: "Sudor",
                d: "Heces"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué antituberculoso tiene actividad sobre los bacilos en las cavidades pulmonares?",
            answers: {
                a: "Isoniazida",
                b: "Etambutol",
                c: "Rifampicina",
                d: "Pirazinamida"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué mecanismo de acción tiene la pirazinamida?",
            answers: {
                a: "Interfiere con el metabolismo del bacilo en un ambiente ácido",
                b: "Inhibe la RNA polimerasa",
                c: "Inhibe la síntesis de proteínas",
                d: "Inhibe la síntesis de ácidos nucleicos"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué medicamento está contraindicado en pacientes con daño renal severo?",
            answers: {
                a: "Isoniazida",
                b: "Rifampicina",
                c: "Etambutol",
                d: "Pirazinamida"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué fármaco antituberculoso puede causar elevación de la bilirrubina conjugada?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Pirazinamida",
                d: "Isoniazida"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué antituberculoso puede causar daño hepático irreversible en menos del 1% de los pacientes?",
            answers: {
                a: "Etambutol",
                b: "Pirazinamida",
                c: "Isoniazida",
                d: "Rifampicina"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es la dosis estándar de pirazinamida en el tratamiento de tuberculosis?",
            answers: {
                a: "50 mg/kg",
                b: "5 mg/kg",
                c: "25 mg/kg",
                d: "10 mg/kg"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es la razón principal para agregar etambutol en el esquema inicial de tratamiento de tuberculosis?",
            answers: {
                a: "Prevenir la aparición de resistencias",
                b: "Aumentar la eficacia del tratamiento",
                c: "Reducir la toxicidad hepática",
                d: "Mejorar la tolerancia gastrointestinal"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué fármaco antituberculoso es más activo sobre las formas extracelulares de Mycobacterium tuberculosis?",
            answers: {
                a: "Pirazinamida",
                b: "Etambutol",
                c: "Rifampicina",
                d: "Isoniazida"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es la duración de la fase inicial del tratamiento estándar de tuberculosis?",
            answers: {
                a: "4 meses",
                b: "2 meses",
                c: "6 meses",
                d: "3 meses"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué fármaco debe ser administrado junto con vitamina B6 para prevenir neuropatía periférica?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Pirazinamida",
                d: "Isoniazida"
            },
            correctAnswer: "d"
        },
        {
            question: "¿Cuál es el fármaco de elección para el tratamiento de tuberculosis latente?",
            answers: {
                a: "Isoniazida",
                b: "Rifampicina",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el principal efecto adverso relacionado con el uso prolongado de rifampicina?",
            answers: {
                a: "Neuropatía",
                b: "Nefrotoxicidad",
                c: "Hepatotoxicidad",
                d: "Neuritis óptica"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué característica farmacocinética es común entre rifampicina e isoniazida?",
            answers: {
                a: "Buena distribución a todos los tejidos",
                b: "Eliminación predominantemente renal",
                c: "Larga vida media",
                d: "Eliminación predominantemente por sudor"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué fármaco antituberculoso se metaboliza predominantemente por N-acetiltransferasa?",
            answers: {
                a: "Rifampicina",
                b: "Isoniazida",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál de los siguientes efectos secundarios es común con la pirazinamida?",
            answers: {
                a: "Neuritis óptica",
                b: "Reacciones cutáneas",
                c: "Anemia hemolítica",
                d: "Hiperuricemia"
            },
            correctAnswer: "d"
        },
        {
            question: "¿Qué medicamento debe ser monitorizado por el riesgo de toxicidad ocular?",
            answers: {
                a: "Isoniazida",
                b: "Etambutol",
                c: "Rifampicina",
                d: "Pirazinamida"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál de los siguientes medicamentos no debe administrarse en pacientes con insuficiencia renal?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Isoniazida",
                d: "Pirazinamida"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué fármaco antituberculoso produce coloración naranja de los fluidos corporales?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Isoniazida",
                d: "Pirazinamida"
            },
            correctAnswer: "a"
        }
    ];

    const casosClinicos = [
        {
            case: "Caso clínico 1: Un paciente de 35 años diagnosticado con tuberculosis pulmonar inicia tratamiento con el esquema estándar de 4 fármacos. Después de 3 semanas, presenta dolor en el ojo derecho y visión borrosa. Al examen físico, se observa disminución de la agudeza visual y alteraciones en la percepción de colores.",
            question: "¿Cuál es el medicamento responsable de estos síntomas?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Pirazinamida",
                d: "Isoniazida"
            },
            correctAnswer: "b",
            explanation: "Etambutol: El etambutol puede causar neuritis óptica, afectando la agudeza visual y la percepción de colores."
        },
        {
            case: "Caso clínico 2: Una mujer de 50 años, fumadora y con antecedentes de alcoholismo crónico, es diagnosticada con tuberculosis. Inicia tratamiento con rifampicina, isoniazida, pirazinamida y etambutol. Después de 2 meses de tratamiento, presenta ictericia, fatiga y dolor abdominal.",
            question: "¿Qué medicamento es el más probable causante de estos síntomas?",
            answers: {
                a: "Etambutol",
                b: "Isoniazida",
                c: "Rifampicina",
                d: "Pirazinamida"
            },
            correctAnswer: "b",
            explanation: "Isoniazida: La isoniazida es hepatotóxica, especialmente en pacientes con factores de riesgo como el alcoholismo."
        },
        {
            case: "Caso clínico 3: Un paciente de 27 años con diagnóstico de tuberculosis extrapulmonar inicia tratamiento con el esquema estándar. Tras un mes de tratamiento, desarrolla artralgias en las manos y los pies, sin signos de inflamación.",
            question: "¿Qué medicamento está más relacionado con este efecto adverso?",
            answers: {
                a: "Isoniazida",
                b: "Rifampicina",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "c",
            explanation: "Pirazinamida: La pirazinamida está relacionada con artralgias, un efecto adverso común en el tratamiento."
        },
        {
            case: "Caso clínico 4: Una mujer de 40 años con diagnóstico de tuberculosis multirresistente inicia tratamiento con un esquema prolongado que incluye quinolonas y bedaquilina. Después de un control de rutina, se detecta prolongación del intervalo QT en el electrocardiograma.",
            question: "¿Qué medicamento es el más probable causante de esta alteración?",
            answers: {
                a: "Rifampicina",
                b: "Linezolid",
                c: "Bedaquilina",
                d: "Clofazimina"
            },
            correctAnswer: "c",
            explanation: "Bedaquilina: La bedaquilina puede prolongar el intervalo QT, lo que aumenta el riesgo de arritmias."
        },
        {
            case: "Caso clínico 5: Un niño de 7 años inicia tratamiento para tuberculosis latente con isoniazida. A las 6 semanas, sus padres notan que el niño tiene dificultad para caminar y presenta una marcha inestable.",
            question: "¿Cuál es el efecto adverso más probable relacionado con este síntoma?",
            answers: {
                a: "Hepatotoxicidad",
                b: "Neuropatía periférica",
                c: "Neuritis óptica",
                d: "Hiperuricemia"
            },
            correctAnswer: "b",
            explanation: "Neuropatía periférica: La isoniazida puede causar neuropatía periférica, especialmente si no se administra junto con vitamina B6."
        },
        {
            case: "Caso clínico 6: Un hombre de 55 años con insuficiencia renal crónica y tuberculosis pulmonar es tratado con rifampicina, isoniazida, pirazinamida y etambutol. A las pocas semanas, experimenta pérdida de visión gradual.",
            question: "¿Qué medicamento es el responsable de este efecto adverso?",
            answers: {
                a: "Rifampicina",
                b: "Etambutol",
                c: "Pirazinamida",
                d: "Isoniazida"
            },
            correctAnswer: "b",
            explanation: "Etambutol: El etambutol está relacionado con toxicidad ocular, especialmente en pacientes con insuficiencia renal."
        },
        {
            case: "Caso clínico 7: Una mujer de 32 años embarazada, diagnosticada con tuberculosis pulmonar, inicia tratamiento con rifampicina, isoniazida y etambutol. Posteriormente, desarrolla náuseas intensas y vómitos.",
            question: "¿Cuál es el medicamento más probable causante de estos síntomas?",
            answers: {
                a: "Rifampicina",
                b: "Isoniazida",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "b",
            explanation: "Isoniazida: La isoniazida puede causar náuseas y vómitos, especialmente en pacientes embarazadas."
        },
        {
            case: "Caso clínico 8: Un hombre de 45 años con tuberculosis meníngea recibe un esquema de tratamiento que incluye rifampicina, isoniazida, pirazinamida y etambutol. A las pocas semanas, presenta erupciones cutáneas y fiebre.",
            question: "¿Qué medicamento es el más probable causante de estos efectos adversos?",
            answers: {
                a: "Rifampicina",
                b: "Isoniazida",
                c: "Pirazinamida",
                d: "Etambutol"
            },
            correctAnswer: "a",
            explanation: "Rifampicina: La rifampicina puede causar reacciones cutáneas y fiebre como efectos adversos inmunológicos."
        },
        {
            case: "Caso clínico 9: Un paciente con diagnóstico de tuberculosis multirresistente es tratado con linezolid y bedaquilina. Tras varias semanas de tratamiento, desarrolla neuropatía periférica.",
            question: "¿Qué medicamento es el responsable de este efecto adverso?",
            answers: {
                a: "Linezolid",
                b: "Bedaquilina",
                c: "Clofazimina",
                d: "Quinolonas"
            },
            correctAnswer: "a",
            explanation: "Linezolid: El linezolid es conocido por causar neuropatía periférica en tratamientos prolongados."
        },
        {
            case: "Caso clínico 10: Una mujer de 35 años con diagnóstico de tuberculosis inicia tratamiento con el esquema estándar. A los pocos meses, presenta hiperuricemia y dolor en las articulaciones.",
            question: "¿Qué medicamento es el responsable de estos síntomas?",
            answers: {
                a: "Isoniazida",
                b: "Rifampicina",
                c: "Etambutol",
                d: "Pirazinamida"
            },
            correctAnswer: "d",
            explanation: "Pirazinamida: La pirazinamida inhibe la excreción de ácido úrico, lo que puede llevar a hiperuricemia y artralgias."
        }
    ];
    


function displayQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function displayCasosClinicos() {
    const output = [];
    casosClinicos.forEach((currentCase, caseNumber) => {
        const answers = [];
        for (letter in currentCase.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="case${caseNumber}" value="${letter}">
                    ${letter}: ${currentCase.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="case">
                <strong>${currentCase.case}</strong>
                <div class="question">${currentCase.question}</div>
                <div class="answers">${answers.join('')}</div>
                <p class="explanation" style="display: none;"><strong>Explicación:</strong> ${currentCase.explanation}</p>
            </div>`
        );
    });
    casosContainer.innerHTML = output.join('');
}


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const caseContainers = casosContainer.querySelectorAll('.case');
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });

    // Mostrar explicaciones después de enviar respuestas
    caseContainers.forEach((caseContainer) => {
        caseContainer.querySelector('.explanation').style.display = 'block';
    });

    resultsContainer.innerHTML = `${numCorrect} de ${questions.length} respuestas correctas`;
}

displayQuiz();
displayCasosClinicos();

submitButton.addEventListener('click', showResults);
});