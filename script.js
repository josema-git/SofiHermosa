document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const questions = [
        {
            question: "¿Qué tipo de material genético pueden contener los virus?",
            answers: {
                a: "Tanto ADN como ARN",
                b: "Solo ADN",
                c: "Solo ARN",
                d: "ADN o ARN, pero no ambos"
            },
            correctAnswer: "d"
        },
        {
            question: "¿Cuál es el rango de tamaño típico de los virus?",
            answers: {
                a: "20-300 nm",
                b: "300-1000 nm",
                c: "1-2 micrones",
                d: "10-20 micrones"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál de los siguientes virus está basado en ADN?",
            answers: {
                a: "Influenza",
                b: "Rotavirus",
                c: "Hepatitis B",
                d: "Rabia"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál es el virus más comúnmente transmitido sexualmente?",
            answers: {
                a: "VIH",
                b: "Rotavirus",
                c: "Influenza",
                d: "Dengue"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el principal receptor al que el VIH se une en las células huésped?",
            answers: {
                a: "CD8",
                b: "CD4",
                c: "ICAM",
                d: "MHC"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál de los siguientes virus se transmite por la ruta fecal-oral?",
            answers: {
                a: "Herpes Simplex Virus",
                b: "Enterovirus",
                c: "Hepatitis C",
                d: "Varicella-zoster"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Con cuál de las siguientes enfermedades está asociado el virus Epstein-Barr (VEB)?",
            answers: {
                a: "Leucoplasia oral vellosa",
                b: "Rabia",
                c: "Dengue Fever",
                d: "Influenza"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el principal método diagnóstico para identificar infecciones virales?",
            answers: {
                a: "Gram Staining",
                b: "PCR",
                c: "Ultrasound",
                d: "X-ray diffraction"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué significa el término 'virus latente'?",
            answers: {
                a: "Un virus que inmediatamente causa síntomas",
                b: "Un virus que es permanentemente inactivo",
                c: "Un virus que entra en un estado de latencia y puede reactivarse más tarde",
                d: "Un virus que solo afecta a huéspedes no humanos"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál familia de virus es responsable de la mayoría de los cánceres inducidos por virus?",
            answers: {
                a: "Herpesviridae",
                b: "Rhabdoviridae",
                c: "Retroviridae",
                d: "Flaviviridae"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el modo de transmisión típico de los arbovirus?",
            answers: {
                a: "Sexual",
                b: "Respiratoria",
                c: "Fecal-oral",
                d: "Vectores artrópodos"
            },
            correctAnswer: "d"
        },
        {
            question: "¿Qué técnica diagnóstica es el estándar de oro para confirmar una infección por herpes simple?",
            answers: {
                a: "Cultivo",
                b: "Tinción de Tzanck",
                c: "PCR",
                d: "Serología"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Cuál virus puede permanecer latente en los ganglios sensoriales?",
            answers: {
                a: "Virus Varicela-Zóster",
                b: "Hepatitis A",
                c: "Norovirus",
                d: "Dengue Virus"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es el sitio típico de latencia del CMV?",
            answers: {
                a: "B células",
                b: "T células",
                c: "Monocitos",
                d: "Neuronas"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué virus está asociado con el desarrollo del linfoma de Burkitt?",
            answers: {
                a: "Virus del Papiloma Humano",
                b: "Virus Epstein-Barr",
                c: "Virus Herpes Simplex",
                d: "Influenza"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el método diagnóstico más utilizado para diagnosticar rotavirus?",
            answers: {
                a: "PCR",
                b: "Microscopía electrónica",
                c: "ELISA para la detección de antígenos",
                d: "Cultivo en fibroblastos"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué tipo de virus está más comúnmente asociado con causar el resfriado común?",
            answers: {
                a: "Rotavirus",
                b: "Coronavirus",
                c: "Rinovirus",
                d: "Varicella-zoster"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué enfermedad viral presenta manchas de Koplik en la boca?",
            answers: {
                a: "Paperas",
                b: "Sarampión",
                c: "Rubéola",
                d: "Varicela"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el resultado más grave de una infección por polio?",
            answers: {
                a: "Vómitos",
                b: "Encefalitis",
                c: "Parálisis",
                d: "Erupción"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué virus es conocido por causar crup en niños?",
            answers: {
                a: "Virus Respiratorio Sincitial (VRS)",
                b: "Influenza",
                c: "Virus de Inmunodeficiencia Humana",
                d: "Dengue"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es la edad recomendada para la primera dosis de la vacuna MMR?",
            answers: {
                a: "Al nacer",
                b: "1 año",
                c: "5 años",
                d: "10 años"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cómo se transmite principalmente el virus del Ébola?",
            answers: {
                a: "Gotas respiratorias",
                b: "Contacto con fluidos corporales",
                c: "Picaduras de mosquitos",
                d: "Inhalación de aerosoles"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué virus es una zoonosis transmitida principalmente por camellos?",
            answers: {
                a: "SARS-CoV-2",
                b: "MERS-CoV",
                c: "Rabia",
                d: "Ébola"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cuál es el componente estructural clave que diferencia un virus desnudo de un virus envuelto?",
            answers: {
                a: "Presencia de una envoltura lipídica",
                b: "Tipo de ácido nucleico",
                c: "Tipo de cápside",
                d: "Tamaño del virus"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Qué familia de virus incluye los que causan la gripe común?",
            answers: {
                a: "Herpesviridae",
                b: "Rhabdoviridae",
                c: "Orthomyxoviridae",
                d: "Picornaviridae"
            },
            correctAnswer: "c"
        },
        {
            question: "¿Qué virus causa más comúnmente gastroenteritis en niños pequeños en todo el mundo?",
            answers: {
                a: "Rotavirus",
                b: "Hepatitis A",
                c: "Influenza",
                d: "Virus Herpes Simplex"
            },
            correctAnswer: "a"
        },
        {
            question: "¿Cuál es la principal ruta de transmisión del virus de la hepatitis A?",
            answers: {
                a: "Contacto sexual",
                b: "Ruta fecal-oral",
                c: "Gotas respiratorias",
                d: "Picaduras de mosquitos"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Cómo difieren los priones de los virus?",
            answers: {
                a: "Contienen ARN",
                b: "No tienen material genético",
                c: "Son visibles bajo un microscopio óptico",
                d: "Contienen tanto ADN como ARN"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué enfermedad es causada por priones?",
            answers: {
                a: "SIDA",
                b: "Enfermedad de Creutzfeldt-Jakob",
                c: "Dengue",
                d: "Influenza"
            },
            correctAnswer: "b"
        },
        {
            question: "¿Qué virus está más estrechamente relacionado con el sarcoma de Kaposi?",
            answers: {
                a: "Virus Epstein-Barr",
                b: "Herpesvirus Humano 8",
                c: "Citomegalovirus",
                d: "Varicella-Zoster"
            },
            correctAnswer: "b"
        }
    ];
    function highlightAnswers() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            for (letter in currentQuestion.answers) {
                const answerElement = answerContainer.querySelector(`input[value=${letter}]`).parentElement;
                if (letter === currentQuestion.correctAnswer) {
                    answerElement.style.color = 'green';
                } else if (letter === userAnswer) {
                    answerElement.style.color = 'red';
                }
            }

            if (userAnswer === currentQuestion.correctAnswer) {
                answerContainer.previousElementSibling.style.color = 'green';
            } else {
                answerContainer.previousElementSibling.style.color = 'red';
            }
        });
    }

    submitButton.addEventListener('click', () => {
        showResults();
        highlightAnswers();
    });

    function displayQuiz() {
        const output = [];
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label style="display: block; margin-bottom: 8px; margin-left: 20px;">
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question" style="margin-bottom: 20px; text-align: left; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
                    <strong style="font-size: 1.5em;">${currentQuestion.question}</strong>
                </div>
                <div class="answers" style="margin-bottom: 20px; text-align: left;"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainer.querySelector(selector).parentElement.style.color = 'green';
            } else {
                if (userAnswer) {
                    answerContainer.querySelector(selector).parentElement.style.color = 'red';
                }
            }
        });

        resultsContainer.innerHTML = `${numCorrect} de ${questions.length} respuestas correctas`;
    }

    displayQuiz();
    submitButton.addEventListener('click', showResults);
});
