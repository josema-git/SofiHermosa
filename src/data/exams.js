// src/data/exams.js

export const exams = {
  microbiologia: {
    id: "microbiologia",
    title: "Examen de microbiologia",
    description: "Evaluación sobre microbiologia",
    questions: [
      {
        question:
          "¿Cuál de los siguientes NO es una característica general de los hongos?",
        answers: {
          a: "Son organismos eucariotas",
          b: "Son fotosintéticos",
          c: "Son heterótrofos",
          d: "Tienen pared celular con quitina",
          e: "La mayoría son aerobios",
        },
        correctAnswer: "b",
        explanation:
          "Los hongos NO son fotosintéticos, esta es una característica que los diferencia de las plantas.",
      },
      {
        question: "Sobre la estructura de los hongos, ¿cuál es FALSA?",
        answers: {
          a: "La quitina da rigidez a la pared celular",
          b: "El ergosterol da fluidez a la membrana citoplasmática",
          c: "La quitina se encuentra en la membrana citoplasmática",
          d: "El ergosterol es un blanco terapéutico farmacológico",
          e: "La quitina garantiza la integridad de la célula micótica",
        },
        correctAnswer: "c",
        explanation:
          "La quitina se encuentra en la pared celular, no en la membrana citoplasmática.",
      },
      {
        question: "Sobre los hongos dimórficos, ¿cuál es CORRECTA?",
        answers: {
          a: "Crecen como levaduras en el medio ambiente",
          b: "Dentro del individuo crecen como mohos",
          c: "A temperatura ambiente crecen como mohos",
          d: "A 37°C crecen como mohos",
          e: "No pueden cambiar su forma de crecimiento",
        },
        correctAnswer: "c",
        explanation:
          "Los hongos dimórficos crecen como mohos a temperatura ambiente y como levaduras a 37°C dentro del organismo.",
      },
      {
        question: "¿Cuál NO es una vía de infección común para los hongos?",
        answers: {
          a: "Traumática",
          b: "Inhalatoria",
          c: "Deglución",
          d: "Transmisión sexual",
          e: "Transfusional",
        },
        correctAnswer: "e",
        explanation:
          "Las principales vías de infección son traumática, inhalatoria y deglución. La vía transfusional no es una vía común de infección fúngica.",
      },
      {
        question: "Sobre el diagnóstico de las micosis, ¿cuál es INCORRECTA?",
        answers: {
          a: "El KOH es uno de los exámenes directos más comunes",
          b: "Las IDRs confirman infección activa",
          c: "Los cultivos se realizan en agar Sabouraud",
          d: "La luz de Wood puede ayudar a identificar lesiones superficiales",
          e: "La histopatología es útil en el diagnóstico",
        },
        correctAnswer: "b",
        explanation:
          "Las IDRs (Intradermoreacciones) solo determinan contacto previo con el hongo, NO confirman infección activa.",
      },
      {
        question: "Sobre la tiña capitis, ¿cuál es CORRECTA?",
        answers: {
          a: "Es más común en adultos",
          b: "La tiña microspórica es endotrix",
          c: "La tiña tricofítica produce 'puntos negros'",
          d: "La tiña inflamatoria siempre es reversible",
          e: "Es causada principalmente por Candida",
        },
        correctAnswer: "c",
        explanation:
          "La tiña tricofítica produce 'puntos negros' característicos por ser endotrix, cortando el cabello más distal.",
      },
      {
        question:
          "¿Cuál es la característica principal de la pitiriasis versicolor?",
        answers: {
          a: "Lesiones con borde activo eritematoso",
          b: "Placas hipo o hipercrómicas de aspecto cartográfico",
          c: "Lesiones nodulares dolorosas",
          d: "Úlceras profundas",
          e: "Lesiones vesiculares pruriginosas",
        },
        correctAnswer: "b",
        explanation:
          "La pitiriasis versicolor se caracteriza por placas hipo o hipercrómicas de aspecto cartográfico, dependiendo del tono de piel del paciente.",
      },
      {
        question:
          "¿Cuál es el principal factor de riesgo para la mucormicosis?",
        answers: {
          a: "VIH/SIDA",
          b: "Diabetes descontrolada",
          c: "Embarazo",
          d: "Edad avanzada",
          e: "Trauma cutáneo",
        },
        correctAnswer: "b",
        explanation:
          "La diabetes descontrolada, especialmente con cetoacidosis, es el principal factor de riesgo para mucormicosis, particularmente la forma rinocerebral.",
      },
      {
        question: "Sobre la criptococosis, ¿cuál es FALSA?",
        answers: {
          a: "Es causada por un hongo capsulado",
          b: "Se asocia con heces de palomas",
          c: "El KOH es el mejor método diagnóstico",
          d: "Afecta principalmente el SNC en pacientes con VIH",
          e: "La tinta china es útil para su diagnóstico",
        },
        correctAnswer: "c",
        explanation:
          "El KOH NO es el método diagnóstico de elección para criptococosis; la tinta china es el método directo preferido para visualizar la cápsula característica.",
      },
      {
        question: "¿Cuál es la presentación más común de la histoplasmosis?",
        answers: {
          a: "Infección pulmonar asintomática",
          b: "Meningitis",
          c: "Lesiones cutáneas",
          d: "Artritis",
          e: "Endocarditis",
        },
        correctAnswer: "a",
        explanation:
          "La forma más común de histoplasmosis es la infección pulmonar primaria asintomática o con síntomas leves tipo gripales.",
      },
      {
        question:
          "¿Cuál es el principal factor protector contra las micosis en mujeres?",
        answers: {
          a: "Mayor producción de melanina",
          b: "Presencia de estrógenos",
          c: "Mayor grosor de la piel",
          d: "Sistema inmune más activo",
          e: "Menor exposición a traumas",
        },
        correctAnswer: "b",
        explanation:
          "Los estrógenos pueden crear protección contra algunos hongos, lo que explica la menor frecuencia de ciertas micosis en mujeres.",
      },
      {
        question: "Sobre la paracoccidioidomicosis, ¿cuál es FALSA?",
        answers: {
          a: "Es endémica de Suramérica",
          b: "Afecta principalmente a mujeres",
          c: "Se asocia con trabajo agrícola",
          d: "Puede presentar el 'cuello de búfalo'",
          e: "Afecta frecuentemente la mucosa orofaríngea",
        },
        correctAnswer: "b",
        explanation:
          "La paracoccidioidomicosis afecta principalmente a hombres en una proporción de 13:1 respecto a mujeres.",
      },
      {
        question: "En la candidiasis, ¿cuál NO es un factor de riesgo?",
        answers: {
          a: "Uso prolongado de antibióticos",
          b: "Diabetes mellitus",
          c: "Uso de catéteres",
          d: "Exposición a palomas",
          e: "Embarazo",
        },
        correctAnswer: "d",
        explanation:
          "La exposición a palomas es un factor de riesgo para criptococosis, no para candidiasis.",
      },
      {
        question:
          "¿Cuál es la característica microscópica distintiva del Cryptococcus?",
        answers: {
          a: "Hifas septadas",
          b: "Cápsula polisacárida",
          c: "Pseudohifas",
          d: "Esférulas con endosporas",
          e: "Hifas cenocíticas",
        },
        correctAnswer: "b",
        explanation:
          "Cryptococcus es el único hongo patógeno que presenta una cápsula polisacárida característica, visible con tinta china.",
      },
      {
        question: "Sobre la tiña pedis, ¿cuál es INCORRECTA?",
        answers: {
          a: "La forma interdigital es la más común",
          b: "Puede complicarse con infección bacteriana",
          c: "El calzado cerrado es un factor predisponente",
          d: "Solo afecta a deportistas",
          e: "Puede presentar forma vesiculosa",
        },
        correctAnswer: "d",
        explanation:
          "La tiña pedis puede afectar a cualquier persona, no solo a deportistas, aunque el uso de calzado cerrado es un factor predisponente.",
      },
      {
        question:
          "¿Cuál es la principal diferencia entre las tiñas antropofílicas y zoofílicas?",
        answers: {
          a: "Las antropofílicas son más inflamatorias",
          b: "Las zoofílicas tienen menor contagiosidad",
          c: "Las antropofílicas producen cuadros más severos",
          d: "Las zoofílicas producen cuadros más inflamatorios",
          e: "Las antropofílicas solo afectan el cuero cabelludo",
        },
        correctAnswer: "d",
        explanation:
          "Las especies zoofílicas tienden a producir cuadros más inflamatorios y severos que las antropofílicas.",
      },
      {
        question:
          "En la aspergilosis, ¿cuál manifestación NO requiere invasión tisular?",
        answers: {
          a: "Aspergilosis pulmonar invasiva",
          b: "Aspergilosis broncopulmonar alérgica",
          c: "Aspergilosis diseminada",
          d: "Sinusitis invasiva",
          e: "Endocarditis por Aspergillus",
        },
        correctAnswer: "b",
        explanation:
          "La aspergilosis broncopulmonar alérgica es una reacción de hipersensibilidad que no requiere invasión tisular por el hongo.",
      },
      {
        question:
          "¿Cuál es el hallazgo característico en el examen directo de mucormicosis?",
        answers: {
          a: "Hifas septadas en ángulo de 45°",
          b: "Hifas cenocíticas en ángulo de 90°",
          c: "Levaduras encapsuladas",
          d: "Esférulas con endosporas",
          e: "Pseudohifas",
        },
        correctAnswer: "b",
        explanation:
          "La mucormicosis se caracteriza por hifas cenocíticas (sin septos) que se ramifican en ángulo recto (90°).",
      },
      {
        question: "Sobre la coccidioidomicosis, ¿cuál es CORRECTA?",
        answers: {
          a: "Es más común en zonas húmedas",
          b: "El eritema nodoso indica mal pronóstico",
          c: "Prefiere zonas áridas y desérticas",
          d: "No afecta el sistema nervioso central",
          e: "Es más grave en hombres que en embarazadas",
        },
        correctAnswer: "c",
        explanation:
          "La coccidioidomicosis es característica de zonas áridas y desérticas, como la Guajira.",
      },
      {
        question: "¿Cuál es la característica microscópica de la piedra negra?",
        answers: {
          a: "Levaduras gemantes",
          b: "Hifas septadas pigmentadas",
          c: "Nódulos duros adheridos al pelo",
          d: "Artroconidias en cadena",
          e: "Pseudohifas",
        },
        correctAnswer: "c",
        explanation:
          "La piedra negra se caracteriza por nódulos duros adheridos al tallo del pelo, causados por Piedraia hortae.",
      },
    ],
    clinicalCases: [
      {
        title: "Caso 1: Lesiones en Pliegues",
        description:
          "Paciente masculino de 45 años, obeso, acude por presentar lesiones eritematosas y pruriginosas en pliegues submamarios y axilares. Las lesiones son descamativas y presentan pequeñas lesiones satélite. Refiere sudoración excesiva.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Dermatofitosis",
          b: "Candidiasis cutánea",
          c: "Pitiriasis versicolor",
          d: "Criptococosis cutánea",
          e: "Blastomicosis",
        },
        correctAnswer: "b",
        explanation:
          "La presentación clínica es típica de candidiasis cutánea intertriginosa, favorecida por la humedad, obesidad y sudoración excesiva. Las lesiones satélite son características.",
      },
      {
        title: "Caso 2: Lesión Pulmonar en Paciente VIH",
        description:
          "Paciente masculino de 35 años con VIH/SIDA (CD4 < 100), presenta tos seca, fiebre y disnea progresiva. La radiografía muestra infiltrados intersticiales bilaterales con patrón en vidrio despulido.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Aspergilosis pulmonar",
          b: "Histoplasmosis pulmonar",
          c: "Neumocistosis",
          d: "Criptococosis pulmonar",
          e: "Mucormicosis",
        },
        correctAnswer: "c",
        explanation:
          "En pacientes con VIH/SIDA y CD4 < 100, la neumonía por Pneumocystis jirovecii es común, presentándose con infiltrados intersticiales y patrón en vidrio despulido característico.",
      },
      {
        title: "Caso 3: Lesiones en Cuero Cabelludo",
        description:
          "Niño de 8 años presenta múltiples áreas de alopecia en cuero cabelludo, con pequeños puntos negros visibles. Las lesiones son pequeñas y múltiples. No hay inflamación significativa.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Tiña microspórica",
          b: "Tiña tricofítica",
          c: "Tiña inflamatoria",
          d: "Piedra negra",
          e: "Alopecia areata",
        },
        correctAnswer: "b",
        explanation:
          "La presencia de múltiples lesiones pequeñas con puntos negros es característica de la tiña tricofítica, causada por Trichophyton, que produce una infección endotrix.",
      },
      {
        title: "Caso 4: Paciente Diabético con Lesión Facial",
        description:
          "Paciente masculino de 55 años, diabético descompensado con cetoacidosis, presenta lesión necrótica de rápida progresión en región facial y orbital, con compromiso del seno maxilar. Tiene fiebre y mal estado general.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Aspergilosis invasiva",
          b: "Mucormicosis rinocerebral",
          c: "Criptococosis diseminada",
          d: "Histoplasmosis diseminada",
          e: "Blastomicosis cutánea",
        },
        correctAnswer: "b",
        explanation:
          "La presentación aguda de lesión necrótica facial en un paciente diabético con cetoacidosis es altamente sugestiva de mucormicosis rinocerebral, una emergencia médica.",
      },
      {
        title: "Caso 5: Lesiones Orales en VIH",
        description:
          "Paciente con VIH/SIDA presenta placas blanquecinas en lengua y mucosa oral que pueden desprenderse dejando una superficie eritematosa. Refiere dificultad para tragar.",
        question:
          "¿Cuál es el diagnóstico más probable y qué estudio confirmaría?",
        answers: {
          a: "Histoplasmosis oral - cultivo",
          b: "Candidiasis oral - KOH",
          c: "Criptococosis oral - tinta china",
          d: "Aspergilosis oral - cultivo",
          e: "Mucormicosis oral - biopsia",
        },
        correctAnswer: "b",
        explanation:
          "Las placas blanquecinas desprendibles son características de candidiasis oral (muguet), común en VIH/SIDA. El KOH mostrará levaduras y pseudohifas características.",
      },
      {
        title: "Caso 6: Lesiones Cutáneas Verrucosas",
        description:
          "Agricultor de 50 años presenta lesiones verrucosas en miembros inferiores de varios meses de evolución. Las lesiones son elevadas, de aspecto coliforme y algunas están ulceradas.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Esporotricosis",
          b: "Cromoblastomicosis",
          c: "Blastomicosis",
          d: "Histoplasmosis cutánea",
          e: "Coccidioidomicosis",
        },
        correctAnswer: "b",
        explanation:
          "Las lesiones verrucosas de aspecto coliforme en miembros inferiores, con historia de trauma por material vegetal, son típicas de cromoblastomicosis.",
      },
      {
        title: "Caso 7: Lesión Lineal Ascendente",
        description:
          "Jardinero de 40 años presenta lesión nodular en mano con trayecto lineal ascendente por el brazo, siguiendo el drenaje linfático. Refiere trauma previo con espina de rosa.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Esporotricosis linfangítica",
          b: "Leishmaniasis",
          c: "Cromoblastomicosis",
          d: "Micetoma",
          e: "Nocardiosis",
        },
        correctAnswer: "a",
        explanation:
          "La historia de trauma con material vegetal seguido de lesión nodular con progresión linfangítica es característica de esporotricosis en su forma linfangítica.",
      },
      {
        title: "Caso 8: Paciente con Neutropenia Febril",
        description:
          "Paciente de 45 años en tratamiento por leucemia presenta fiebre, tos y dolor torácico. TAC muestra lesión pulmonar con signo del halo. Tiene neutropenia severa.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Mucormicosis pulmonar",
          b: "Aspergilosis pulmonar invasiva",
          c: "Criptococosis pulmonar",
          d: "Histoplasmosis pulmonar",
          e: "Neumocistosis",
        },
        correctAnswer: "b",
        explanation:
          "El signo del halo en TAC pulmonar en un paciente neutropénico es altamente sugestivo de aspergilosis pulmonar invasiva.",
      },
      {
        title: "Caso 9: Lesiones Hipopigmentadas",
        description:
          "Adolescente de 16 años presenta manchas hipopigmentadas en tronco y brazos, levemente descamativas, no pruriginosas. Las lesiones aumentan con la exposición solar.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Tiña corporis",
          b: "Pitiriasis versicolor",
          c: "Candidiasis cutánea",
          d: "Dermatitis seborreica",
          e: "Vitiligo",
        },
        correctAnswer: "b",
        explanation:
          "Las manchas hipopigmentadas en tronco, más evidentes con el sol, son características de pitiriasis versicolor, causada por Malassezia.",
      },
      {
        title: "Caso 10: Lesión en Pie",
        description:
          "Paciente de 35 años presenta aumento de volumen en pie derecho con múltiples nódulos y fístulas que drenan material purulento con 'granos'. Tiene historia de trauma con espina hace 6 meses.",
        question: "¿Cuál es el diagnóstico más probable?",
        answers: {
          a: "Micetoma",
          b: "Esporotricosis",
          c: "Cromoblastomicosis",
          d: "Actinomicosis",
          e: "Botriomicosis",
        },
        correctAnswer: "a",
        explanation:
          "La presencia de aumento de volumen con fístulas que drenan material con 'granos' es característico de micetoma o 'pie de Madura'.",
      },
    ],
  },
}; // src/data/exams.js