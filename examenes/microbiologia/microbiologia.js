document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const casosContainer = document.getElementById('casos');

  const questions = [
    {
      question: "¿Qué tipo de material genético pueden contener los virus?",
      answers: {
        a: "Tanto ADN como ARN",
        b: "Solo ADN",
        c: "Solo ARN",
        d: "ADN o ARN, pero no ambos",
      },
      correctAnswer: "d",
    },
    {
      question: "¿Cuál es el rango de tamaño típico de los virus?",
      answers: {
        a: "20-300 nm",
        b: "300-1000 nm",
        c: "1-2 micrones",
        d: "10-20 micrones",
      },
      correctAnswer: "a",
    },
    {
      question: "¿Cuál de los siguientes virus está basado en ADN?",
      answers: {
        a: "Influenza",
        b: "Rotavirus",
        c: "Hepatitis B",
        d: "Rabia",
      },
      correctAnswer: "c",
    },
    {
      question: "¿Cuál es el virus más comúnmente transmitido sexualmente?",
      answers: {
        a: "VIH",
        b: "Rotavirus",
        c: "Influenza",
        d: "Dengue",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál es el principal receptor al que el VIH se une en las células huésped?",
      answers: {
        a: "CD8",
        b: "CD4",
        c: "ICAM",
        d: "MHC",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de los siguientes virus se transmite por la ruta fecal-oral?",
      answers: {
        a: "Herpes Simplex Virus",
        b: "Enterovirus",
        c: "Hepatitis C",
        d: "Varicella-zoster",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Con cuál de las siguientes enfermedades está asociado el virus Epstein-Barr (VEB)?",
      answers: {
        a: "Leucoplasia oral vellosa",
        b: "Rabia",
        c: "Dengue Fever",
        d: "Influenza",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál es el principal método diagnóstico para identificar infecciones virales?",
      answers: {
        a: "Gram Staining",
        b: "PCR",
        c: "Ultrasound",
        d: "X-ray diffraction",
      },
      correctAnswer: "b",
    },
    {
      question: "¿Qué significa el término 'virus latente'?",
      answers: {
        a: "Un virus que inmediatamente causa síntomas",
        b: "Un virus que es permanentemente inactivo",
        c: "Un virus que entra en un estado de latencia y puede reactivarse más tarde",
        d: "Un virus que solo afecta a huéspedes no humanos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál familia de virus es responsable de la mayoría de los cánceres inducidos por virus?",
      answers: {
        a: "Herpesviridae",
        b: "Rhabdoviridae",
        c: "Retroviridae",
        d: "Flaviviridae",
      },
      correctAnswer: "a",
    },
    {
      question: "¿Cuál es el modo de transmisión típico de los arbovirus?",
      answers: {
        a: "Sexual",
        b: "Respiratoria",
        c: "Fecal-oral",
        d: "Vectores artrópodos",
      },
      correctAnswer: "d",
    },
    {
      question:
        "¿Qué técnica diagnóstica es el estándar de oro para confirmar una infección por herpes simple?",
      answers: {
        a: "Cultivo",
        b: "Tinción de Tzanck",
        c: "PCR",
        d: "Serología",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál virus puede permanecer latente en los ganglios sensoriales?",
      answers: {
        a: "Virus Varicela-Zóster",
        b: "Hepatitis A",
        c: "Norovirus",
        d: "Dengue Virus",
      },
      correctAnswer: "a",
    },
    {
      question: "¿Cuál es el sitio típico de latencia del CMV?",
      answers: {
        a: "B células",
        b: "T células",
        c: "Monocitos",
        d: "Neuronas",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Qué virus está asociado con el desarrollo del linfoma de Burkitt?",
      answers: {
        a: "Virus del Papiloma Humano",
        b: "Virus Epstein-Barr",
        c: "Virus Herpes Simplex",
        d: "Influenza",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál es el método diagnóstico más utilizado para diagnosticar rotavirus?",
      answers: {
        a: "PCR",
        b: "Microscopía electrónica",
        c: "ELISA para la detección de antígenos",
        d: "Cultivo en fibroblastos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Qué tipo de virus está más comúnmente asociado con causar el resfriado común?",
      answers: {
        a: "Rotavirus",
        b: "Coronavirus",
        c: "Rinovirus",
        d: "Varicella-zoster",
      },
      correctAnswer: "c",
    },
    {
      question: "¿Qué enfermedad viral presenta manchas de Koplik en la boca?",
      answers: {
        a: "Paperas",
        b: "Sarampión",
        c: "Rubéola",
        d: "Varicela",
      },
      correctAnswer: "b",
    },
    {
      question: "¿Cuál es el resultado más grave de una infección por polio?",
      answers: {
        a: "Vómitos",
        b: "Encefalitis",
        c: "Parálisis",
        d: "Erupción",
      },
      correctAnswer: "c",
    },
    {
      question: "¿Qué virus es conocido por causar crup en niños?",
      answers: {
        a: "Virus Respiratorio Sincitial (VRS)",
        b: "Influenza",
        c: "Virus de Inmunodeficiencia Humana",
        d: "Dengue",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál es la edad recomendada para la primera dosis de la vacuna MMR?",
      answers: {
        a: "Al nacer",
        b: "1 año",
        c: "5 años",
        d: "10 años",
      },
      correctAnswer: "b",
    },
    {
      question: "¿Cómo se transmite principalmente el virus del Ébola?",
      answers: {
        a: "Gotas respiratorias",
        b: "Contacto con fluidos corporales",
        c: "Picaduras de mosquitos",
        d: "Inhalación de aerosoles",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Qué virus es una zoonosis transmitida principalmente por camellos?",
      answers: {
        a: "SARS-CoV-2",
        b: "MERS-CoV",
        c: "Rabia",
        d: "Ébola",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál es el componente estructural clave que diferencia un virus desnudo de un virus envuelto?",
      answers: {
        a: "Presencia de una envoltura lipídica",
        b: "Tipo de ácido nucleico",
        c: "Tipo de cápside",
        d: "Tamaño del virus",
      },
      correctAnswer: "a",
    },
    {
      question: "¿Qué familia de virus incluye los que causan la gripe común?",
      answers: {
        a: "Herpesviridae",
        b: "Rhabdoviridae",
        c: "Orthomyxoviridae",
        d: "Picornaviridae",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Qué virus causa más comúnmente gastroenteritis en niños pequeños en todo el mundo?",
      answers: {
        a: "Rotavirus",
        b: "Hepatitis A",
        c: "Influenza",
        d: "Virus Herpes Simplex",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál es la principal ruta de transmisión del virus de la hepatitis A?",
      answers: {
        a: "Contacto sexual",
        b: "Ruta fecal-oral",
        c: "Gotas respiratorias",
        d: "Picaduras de mosquitos",
      },
      correctAnswer: "b",
    },
    {
      question: "¿Cómo difieren los priones de los virus?",
      answers: {
        a: "Contienen ARN",
        b: "No tienen material genético",
        c: "Son visibles bajo un microscopio óptico",
        d: "Contienen tanto ADN como ARN",
      },
      correctAnswer: "b",
    },
    {
      question: "¿Qué enfermedad es causada por priones?",
      answers: {
        a: "SIDA",
        b: "Enfermedad de Creutzfeldt-Jakob",
        c: "Dengue",
        d: "Influenza",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Qué virus está más estrechamente relacionado con el sarcoma de Kaposi?",
      answers: {
        a: "Virus Epstein-Barr",
        b: "Herpesvirus Humano 8",
        c: "Citomegalovirus",
        d: "Varicella-Zoster",
      },
      correctAnswer: "b",
    },
  ];

  const casosClinicos = [
    {
      case: "Caso clínico 1: Un paciente de 32 años acude al hospital con fiebre, fatiga extrema, dolor de garganta, linfadenopatía y manchas blancas en las amígdalas. Se le realizan pruebas serológicas y sale positivo para anticuerpos heterófilos. El médico sospecha de un virus comúnmente asociado a estas manifestaciones.",
      question: "¿Qué virus es el más probable causante de esta condición?",
      answers: {
        a: "Citomegalovirus (CMV)",
        b: "Virus Epstein-Barr (VEB)",
        c: "Virus de la Varicela-Zóster",
        d: "Virus del Papiloma Humano (VPH)",
      },
      correctAnswer: "b",
      explanation:
        "Virus Epstein-Barr (VEB): El VEB es el causante más común de la mononucleosis infecciosa, que se caracteriza por fiebre, linfadenopatía y faringitis. La prueba de anticuerpos heterófilos es diagnóstica.",
    },
    {
      case: "Caso clínico 2: Un niño de 5 años presenta fiebre alta, tos seca, congestión nasal y manchas de Koplik en la mucosa bucal. Al tercer día, aparece una erupción cutánea rojiza que comienza en la cara y se extiende al resto del cuerpo.",
      question: "¿Cuál es el diagnóstico más probable en este paciente?",
      answers: {
        a: "Varicela",
        b: "Rubéola",
        c: "Sarampión",
        d: "Escarlatina",
      },
      correctAnswer: "c",
      explanation:
        "Sarampión: Las manchas de Koplik en la boca, junto con la erupción cutánea y los síntomas respiratorios, son características del sarampión, un virus altamente contagioso.",
    },
    {
      case: "Caso clínico 3: Una mujer de 29 años, embarazada de 15 semanas, acude a consulta preocupada por haber tenido contacto con una persona que tuvo varicela. Aunque ella tuvo varicela en la infancia, está preocupada por su bebé.",
      question: "¿Qué respuesta se le debe dar a esta paciente?",
      answers: {
        a: "Está en alto riesgo de transmisión vertical y debe ser vigilada estrechamente",
        b: "Debe vacunarse inmediatamente",
        c: "No hay riesgo para ella ni su bebé ya que tiene inmunidad previa",
        d: "Debe recibir inmunoglobulina para prevenir complicaciones",
      },
      correctAnswer: "c",
      explanation:
        "No hay riesgo para ella ni su bebé ya que tiene inmunidad previa: Si la mujer ya ha tenido varicela, tiene inmunidad de por vida, por lo que ni ella ni su bebé corren riesgo.",
    },
    {
      case: "Caso clínico 4: Un hombre de 45 años presenta una erupción cutánea dolorosa y en banda en un solo lado del tórax. El paciente refiere haber tenido varicela en la infancia.",
      question:
        "¿Cuál es el agente causal más probable de este cuadro clínico?",
      answers: {
        a: "Citomegalovirus",
        b: "Virus del Papiloma Humano",
        c: "Virus Varicela-Zóster",
        d: "Virus Epstein-Barr",
      },
      correctAnswer: "c",
      explanation:
        "Virus Varicela-Zóster: Este virus puede reactivarse años después de la varicela inicial, causando herpes zóster, que se manifiesta como una erupción dolorosa en banda en una sola parte del cuerpo.",
    },
    {
      case: "Caso clínico 5: Una mujer de 34 años acude con síntomas de fiebre, dolor abdominal, ictericia y fatiga. Es trabajadora de un restaurante y menciona que varios compañeros de trabajo han presentado síntomas similares.",
      question: "¿Qué virus es el más probable causante de estos síntomas?",
      answers: {
        a: "Virus de la Hepatitis B",
        b: "Virus de la Hepatitis A",
        c: "Virus de la Hepatitis C",
        d: "Virus de Epstein-Barr",
      },
      correctAnswer: "b",
      explanation:
        "Virus de la Hepatitis A: La hepatitis A es común en trabajadores de restaurantes y se transmite por la ruta fecal-oral, causando fiebre, ictericia y síntomas gastrointestinales.",
    },
    {
      case: "Caso clínico 6: Un hombre de 26 años acude a urgencias con fiebre, dolor de cabeza severo y rigidez en el cuello. El análisis del líquido cefalorraquídeo revela pleocitosis linfocitaria y niveles elevados de proteínas, pero niveles normales de glucosa.",
      question:
        "¿Cuál de los siguientes virus es la causa más probable de esta condición?",
      answers: {
        a: "Virus de la Rabia",
        b: "Virus de la Hepatitis B",
        c: "Enterovirus",
        d: "Virus del Dengue",
      },
      correctAnswer: "c",
      explanation:
        "Enterovirus: Los enterovirus son la causa más común de meningitis aséptica, caracterizada por pleocitosis linfocitaria en el líquido cefalorraquídeo y niveles normales de glucosa.",
    },
    {
      case: "Caso clínico 7: Una mujer de 40 años presenta fiebre, dolor en las articulaciones, sarpullido en la piel y fatiga intensa. Ella acaba de regresar de un viaje a una zona tropical.",
      question: "¿Cuál es el diagnóstico más probable?",
      answers: {
        a: "Dengue",
        b: "Sarampión",
        c: "Virus de la Influenza",
        d: "Fiebre amarilla",
      },
      correctAnswer: "a",
      explanation:
        "Dengue: El dengue es una enfermedad viral transmitida por mosquitos en zonas tropicales y se caracteriza por fiebre, dolor articular, sarpullido y fatiga.",
    },
    {
      case: "Caso clínico 8: Un recién nacido desarrolla ictericia severa, microcefalia y petequias poco después del nacimiento. La madre refiere no haber tenido síntomas durante el embarazo, pero fue diagnosticada con mononucleosis en el primer trimestre.",
      question:
        "¿Qué virus es el más probable causante de los síntomas del recién nacido?",
      answers: {
        a: "Virus de Epstein-Barr",
        b: "Citomegalovirus",
        c: "Virus de la Rubéola",
        d: "Virus de la Hepatitis B",
      },
      correctAnswer: "b",
      explanation:
        "Citomegalovirus: El CMV es una de las principales causas de infecciones congénitas y puede causar ictericia, microcefalia y petequias en los recién nacidos.",
    },
    {
      case: "Caso clínico 9: Un paciente de 23 años consulta por aparición de verrugas genitales. Al examen físico se observan varias lesiones papulares en la región perineal. Refiere haber tenido múltiples parejas sexuales.",
      question: "¿Cuál es el agente etiológico más probable en este caso?",
      answers: {
        a: "Virus del Papiloma Humano (VPH)",
        b: "Virus del Herpes Simplex",
        c: "Citomegalovirus",
        d: "Virus Epstein-Barr",
      },
      correctAnswer: "a",
      explanation:
        "Virus del Papiloma Humano (VPH): El VPH es la causa más común de verrugas genitales y se transmite por contacto sexual.",
    },
    {
      case: "Caso clínico 10: Un paciente de 56 años con antecedentes de VIH presenta pérdida de peso, fiebre y lesiones cutáneas violáceas en las extremidades. Una biopsia de piel revela proliferación de células fusiformes y vasos sanguíneos irregulares.",
      question: "¿Cuál es el diagnóstico más probable?",
      answers: {
        a: "Sarampión",
        b: "Leucoplasia oral vellosa",
        c: "Sarcoma de Kaposi",
        d: "Linfoma de Burkitt",
      },
      correctAnswer: "c",
      explanation:
        "Sarcoma de Kaposi: Este tipo de cáncer está asociado con el herpesvirus humano 8 y es más común en pacientes inmunocomprometidos, como los que tienen VIH.",
    },
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