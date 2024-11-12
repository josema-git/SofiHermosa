export const exams = {
  acidobaseestella: {
    id: "acidobaseestella",
    title: "Examen de acido-base-estella",
    description: "Cuestionario de acido-base-estella",
    questions: [
      {
        question: "¿Qué sucede cuando el CO2 entra en contacto con el agua?",
        answers: {
          a: "Se forma directamente HCO3",
          b: "Se forma H2CO3 que luego se disocia en HCO3 y H+",
          c: "Se forma solo H+",
          d: "No ocurre ninguna reacción",
          e: "Se forma solo agua",
        },
        correctAnswer: "b",
        explanation:
          "El CO2 al entrar en contacto con el agua forma H2CO3 que posteriormente se disocia en HCO3 y H+",
      },
      {
        question: "¿Cuál es el valor del pKa del ácido carbónico?",
        answers: {
          a: "7.4",
          b: "5.1",
          c: "6.1",
          d: "8.1",
          e: "4.1",
        },
        correctAnswer: "c",
        explanation: "El pKa del ácido carbónico es 6.1",
      },
      {
        question:
          "¿Qué representa un trastorno pulmonar en el equilibrio ácido-base?",
        answers: {
          a: "Cambios en el HCO3",
          b: "Cambios en el CO2",
          c: "Cambios en el K+",
          d: "Cambios en el Na+",
          e: "Cambios en el Cl-",
        },
        correctAnswer: "b",
        explanation:
          "Lo que tenga que ver con CO2 es pulmonar en el equilibrio ácido-base",
      },
      {
        question:
          "¿Qué representa un trastorno metabólico en el equilibrio ácido-base?",
        answers: {
          a: "Cambios en el HCO3",
          b: "Cambios en el CO2",
          c: "Cambios en el K+",
          d: "Cambios en el Na+",
          e: "Cambios en el pH",
        },
        correctAnswer: "a",
        explanation:
          "Lo que tenga que ver con HCO3 es metabólico en el equilibrio ácido-base",
      },
      {
        question: "¿Cuál es el pH normal de la sangre?",
        answers: {
          a: "7.0",
          b: "7.2",
          c: "7.4",
          d: "7.6",
          e: "6.8",
        },
        correctAnswer: "c",
        explanation: "El pH normal de la sangre es 7.4",
      },
      {
        question: "En una compensación ácido-base, ¿qué sucede con el pH?",
        answers: {
          a: "Siempre vuelve a 7.4",
          b: "Nunca cambia",
          c: "Se acerca a 7.4 pero no llega",
          d: "Siempre llega a 6.1",
          e: "Se aleja más de 7.4",
        },
        correctAnswer: "c",
        explanation:
          "La compensación evita cambios drásticos en el pH pero no lo lleva a 7.4",
      },
      {
        question:
          "¿Cuánto debe caer el CO2 por cada mEq de HCO3 que cae en una compensación?",
        answers: {
          a: "0.5 mmHg",
          b: "1 mmHg",
          c: "1.25 mmHg",
          d: "2 mmHg",
          e: "2.5 mmHg",
        },
        correctAnswer: "c",
        explanation: "Por cada mEq de HCO3 que cae, el CO2 debe caer 1.25mmHg",
      },
      {
        question: "¿Cuál NO es un buffer temporal en sangre?",
        answers: {
          a: "Hemoglobina",
          b: "Albúmina",
          c: "Fosfatos",
          d: "Amonio",
          e: "Glucosa",
        },
        correctAnswer: "e",
        explanation: "La glucosa no es un buffer temporal en sangre",
      },
      {
        question: "¿Cómo se calcula el anión gap?",
        answers: {
          a: "(Na + K) - (Cl + HCO3)",
          b: "(Na + Cl) - (K + HCO3)",
          c: "(Na + HCO3) - (Cl + K)",
          d: "(K + Cl) - (Na + HCO3)",
          e: "Na - (Cl + HCO3)",
        },
        correctAnswer: "a",
        explanation: "El anión gap se calcula como (Na + K) - (Cl + HCO3)",
      },
      {
        question: "¿Cuál es el valor normal aproximado del anión gap?",
        answers: {
          a: "6",
          b: "8",
          c: "10",
          d: "12",
          e: "14",
        },
        correctAnswer: "d",
        explanation: "El anión gap normal es aproximadamente 12",
      },
      {
        question: "¿Qué representa principalmente el anión gap?",
        answers: {
          a: "Sodio y potasio",
          b: "Cloro y bicarbonato",
          c: "Albúmina y fosfatos",
          d: "Calcio y magnesio",
          e: "Urea y creatinina",
        },
        correctAnswer: "c",
        explanation:
          "El anión gap representa principalmente las cargas negativas de albúmina y fosfatos",
      },
      {
        question: "¿Cuántas cargas negativas aporta 1g de albúmina?",
        answers: {
          a: "1",
          b: "1.5",
          c: "2",
          d: "2.5",
          e: "3",
        },
        correctAnswer: "d",
        explanation: "1g de albúmina aporta 2.5 cargas negativas",
      },
      {
        question: "¿Cuántas cargas negativas aporta 1mmol de fosfato?",
        answers: {
          a: "0.25",
          b: "0.5",
          c: "1",
          d: "1.5",
          e: "2",
        },
        correctAnswer: "b",
        explanation: "1mmol de fosfato aporta 0.5 cargas negativas",
      },
      {
        question:
          "En una acidosis metabólica por diarrea, ¿cómo se comporta el anión gap?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece normal",
          d: "Se vuelve negativo",
          e: "No se puede calcular",
        },
        correctAnswer: "c",
        explanation:
          "La diarrea produce una acidosis metabólica con anión gap normal (hiperclorémica)",
      },
      {
        question:
          "¿Qué sucede con el cloro en una acidosis metabólica hiperclorémica?",
        answers: {
          a: "Disminuye",
          b: "Permanece igual",
          c: "Aumenta",
          d: "Se vuelve negativo",
          e: "No se puede determinar",
        },
        correctAnswer: "c",
        explanation:
          "En una acidosis metabólica hiperclorémica, el cloro aumenta para mantener la electroneutralidad",
      },
      {
        question:
          "¿Cuál es el mecanismo más rápido para compensar una acidosis metabólica?",
        answers: {
          a: "Aumento de la excreción renal de H+",
          b: "Disminución de la excreción renal de HCO3-",
          c: "Hiperventilación",
          d: "Aumento de la producción de amonio",
          e: "Disminución de la producción de ácido láctico",
        },
        correctAnswer: "c",
        explanation:
          "La hiperventilación es el mecanismo más rápido para compensar una acidosis metabólica, eliminando CO2",
      },
      {
        question:
          "¿Qué sucede con el bicarbonato en una acidosis respiratoria crónica?",
        answers: {
          a: "Disminuye",
          b: "Aumenta",
          c: "Permanece igual",
          d: "Se vuelve negativo",
          e: "No se puede determinar",
        },
        correctAnswer: "b",
        explanation:
          "En una acidosis respiratoria crónica, el bicarbonato aumenta como mecanismo de compensación",
      },
      {
        question:
          "¿Cuál NO es una causa común de acidosis metabólica con anión gap elevado?",
        answers: {
          a: "Cetoacidosis diabética",
          b: "Acidosis láctica",
          c: "Intoxicación por metanol",
          d: "Diarrea",
          e: "Insuficiencia renal",
        },
        correctAnswer: "d",
        explanation:
          "La diarrea causa acidosis metabólica con anión gap normal, no elevado",
      },
      {
        question:
          "¿Qué sucede con el potasio sérico en una acidosis metabólica aguda?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece igual",
          d: "Se vuelve negativo",
          e: "No se puede determinar",
        },
        correctAnswer: "a",
        explanation:
          "En una acidosis metabólica aguda, el potasio sérico tiende a aumentar debido al intercambio con H+ intracelular",
      },
      {
        question: "¿Cuál es el principal buffer intracelular?",
        answers: {
          a: "Bicarbonato",
          b: "Fosfato",
          c: "Proteínas",
          d: "Amonio",
          e: "Hemoglobina",
        },
        correctAnswer: "c",
        explanation: "Las proteínas son el principal buffer intracelular",
      },
      {
        question:
          "¿Qué sucede con la producción de amonio en una acidosis metabólica crónica?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece igual",
          d: "Se detiene completamente",
          e: "No se puede determinar",
        },
        correctAnswer: "a",
        explanation:
          "En una acidosis metabólica crónica, la producción de amonio aumenta como mecanismo de compensación renal",
      },
      {
        question: "¿Cuál es el rango normal de bicarbonato en sangre?",
        answers: {
          a: "18-22 mEq/L",
          b: "22-26 mEq/L",
          c: "26-30 mEq/L",
          d: "30-34 mEq/L",
          e: "34-38 mEq/L",
        },
        correctAnswer: "b",
        explanation:
          "El rango normal de bicarbonato en sangre es de 22-26 mEq/L",
      },
      {
        question: "¿Cuál es el rango normal de PaCO2?",
        answers: {
          a: "25-35 mmHg",
          b: "35-45 mmHg",
          c: "45-55 mmHg",
          d: "55-65 mmHg",
          e: "65-75 mmHg",
        },
        correctAnswer: "b",
        explanation: "El rango normal de PaCO2 es de 35-45 mmHg",
      },
      {
        question:
          "¿Qué sucede con la excreción de H+ en orina en una acidosis metabólica?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece igual",
          d: "Se vuelve negativa",
          e: "No se puede determinar",
        },
        correctAnswer: "a",
        explanation:
          "En una acidosis metabólica, la excreción de H+ en orina aumenta como mecanismo de compensación renal",
      },
      {
        question:
          "¿Cuál es el principal mecanismo de compensación en una alcalosis respiratoria aguda?",
        answers: {
          a: "Aumento de la excreción renal de HCO3-",
          b: "Disminución de la excreción renal de H+",
          c: "Hipoventilación",
          d: "Aumento de la producción de ácidos orgánicos",
          e: "Disminución de la producción de amonio",
        },
        correctAnswer: "a",
        explanation:
          "En una alcalosis respiratoria aguda, el principal mecanismo de compensación es el aumento de la excreción renal de HCO3-",
      },
      {
        question:
          "¿Qué sucede con el cloro sérico en una alcalosis metabólica?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece igual",
          d: "Se vuelve negativo",
          e: "No se puede determinar",
        },
        correctAnswer: "b",
        explanation:
          "En una alcalosis metabólica, el cloro sérico tiende a disminuir",
      },
      {
        question: "¿Cuál NO es una causa común de alcalosis metabólica?",
        answers: {
          a: "Vómitos prolongados",
          b: "Uso excesivo de diuréticos",
          c: "Hiperaldosteronismo",
          d: "Ingesta excesiva de antiácidos",
          e: "Diarrea crónica",
        },
        correctAnswer: "e",
        explanation:
          "La diarrea crónica causa acidosis metabólica, no alcalosis",
      },
      {
        question:
          "¿Qué sucede con la reabsorción de calcio en una acidosis metabólica crónica?",
        answers: {
          a: "Aumenta",
          b: "Disminuye",
          c: "Permanece igual",
          d: "Se detiene completamente",
          e: "No se puede determinar",
        },
        correctAnswer: "b",
        explanation:
          "En una acidosis metabólica crónica, la reabsorción de calcio disminuye, lo que puede llevar a hipercalciuria",
      },
      {
        question:
          "¿Cuál es el principal mecanismo de compensación en una acidosis respiratoria crónica?",
        answers: {
          a: "Aumento de la excreción renal de H+",
          b: "Disminución de la excreción renal de HCO3-",
          c: "Hiperventilación",
          d: "Aumento de la reabsorción renal de HCO3-",
          e: "Disminución de la producción de amonio",
        },
        correctAnswer: "d",
        explanation:
          "En una acidosis respiratoria crónica, el principal mecanismo de compensación es el aumento de la reabsorción renal de HCO3-",
      },
      {
        question:
          "¿Qué efecto tiene la hipopotasemia en el equilibrio ácido-base?",
        answers: {
          a: "Causa acidosis metabólica",
          b: "Causa alcalosis metabólica",
          c: "Causa acidosis respiratoria",
          d: "Causa alcalosis respiratoria",
          e: "No tiene efecto en el equilibrio ácido-base",
        },
        correctAnswer: "b",
        explanation:
          "La hipopotasemia tiende a causar alcalosis metabólica debido al intercambio de K+ por H+ en las células tubulares renales",
      },
    ],
    clinicalCases: [
      {
        title: "Caso 1: Diarrea Aguda",
        description:
          "Paciente presenta diarrea aguda con los siguientes valores:\nHCO3: 14 mEq/L (Normal: 24)\nCO2: 27.5 mmHg (Normal: 40)\npH: 7.32",
        question: "¿Qué tipo de alteración ácido-base presenta el paciente?",
        answers: {
          a: "Acidosis metabólica compensada",
          b: "Acidosis metabólica con compensación respiratoria parcial",
          c: "Alcalosis respiratoria",
          d: "Trastorno mixto",
          e: "Acidosis respiratoria",
        },
        correctAnswer: "b",
        explanation:
          "Es una acidosis metabólica (HCO3 bajo) con compensación respiratoria parcial (CO2 disminuido según la fórmula: por cada mEq de HCO3 que cae, el CO2 debe caer 1.25mmHg)",
      },
      {
        title: "Caso 2: Diarrea con Alteración Mixta",
        description:
          "Paciente con diarrea presenta:\nHCO3: 14 mEq/L\nCO2: 23 mmHg\npH: 7.40",
        question: "¿Qué tipo de trastorno presenta el paciente?",
        answers: {
          a: "Acidosis metabólica pura",
          b: "Alcalosis respiratoria pura",
          c: "Trastorno mixto: acidosis metabólica + alcalosis respiratoria",
          d: "Trastorno compensado",
          e: "Ninguna alteración",
        },
        correctAnswer: "c",
        explanation:
          "El pH normal con valores alterados de HCO3 y CO2 indica un trastorno mixto: acidosis metabólica por la diarrea y alcalosis respiratoria",
      },
      {
        title: "Caso 3: Cetoacidosis Diabética",
        description:
          "Paciente diabético con:\npH: 7.1\nHCO3: 8 mEq/L\nCO2: 20 mmHg\nNa: 135 mEq/L\nCl: 100 mEq/L\nK: 5 mEq/L",
        question: "¿Cuál es el anión gap y qué indica?",
        answers: {
          a: "12, normal",
          b: "22, elevado",
          c: "32, elevado",
          d: "42, elevado",
          e: "52, elevado",
        },
        correctAnswer: "c",
        explanation:
          "Anión gap = (Na + K) - (Cl + HCO3) = (135 + 5) - (100 + 8) = 32. Está elevado, indicando una acidosis metabólica con anión gap elevado, típico de cetoacidosis diabética.",
      },
      {
        title: "Caso 4: EPOC Descompensado",
        description:
          "Paciente con EPOC presenta:\npH: 7.30\nHCO3: 32 mEq/L\nCO2: 65 mmHg",
        question: "¿Qué tipo de trastorno ácido-base presenta?",
        answers: {
          a: "Acidosis respiratoria aguda",
          b: "Acidosis respiratoria crónica descompensada",
          c: "Acidosis metabólica",
          d: "Alcalosis metabólica",
          e: "Trastorno mixto",
        },
        correctAnswer: "b",
        explanation:
          "El CO2 elevado indica acidosis respiratoria, el HCO3 elevado sugiere cronicidad, pero el pH bajo indica descompensación aguda.",
      },
      {
        title: "Caso 5: Vómitos Prolongados",
        description:
          "Paciente con vómitos de 3 días presenta:\npH: 7.50\nHCO3: 35 mEq/L\nCO2: 42 mmHg\nCl: 90 mEq/L",
        question: "¿Qué tipo de alteración ácido-base presenta?",
        answers: {
          a: "Acidosis metabólica",
          b: "Alcalosis metabólica",
          c: "Acidosis respiratoria",
          d: "Alcalosis respiratoria",
          e: "Sin alteración",
        },
        correctAnswer: "b",
        explanation:
          "El pH elevado con HCO3 alto y Cl bajo indica una alcalosis metabólica, típica de pérdida de ácido por vómitos prolongados.",
      },
      {
        title: "Caso 6: Intoxicación por Salicilatos",
        description:
          "Paciente ingiere gran cantidad de aspirina. Presenta:\npH: 7.45\nHCO3: 18 mEq/L\nCO2: 25 mmHg",
        question: "¿Qué trastorno ácido-base presenta?",
        answers: {
          a: "Acidosis metabólica pura",
          b: "Alcalosis respiratoria pura",
          c: "Acidosis metabólica y alcalosis respiratoria",
          d: "Alcalosis metabólica",
          e: "Sin alteración",
        },
        correctAnswer: "c",
        explanation:
          "La intoxicación por salicilatos produce un trastorno mixto: acidosis metabólica (HCO3 bajo) y alcalosis respiratoria (CO2 bajo con pH elevado).",
      },
      {
        title: "Caso 7: Insuficiencia Renal Crónica",
        description:
          "Paciente con IRC presenta:\npH: 7.32\nHCO3: 16 mEq/L\nCO2: 32 mmHg\nK: 5.5 mEq/L",
        question:
          "¿Qué alteración ácido-base presenta y cuál es su causa probable?",
        answers: {
          a: "Acidosis metabólica por acumulación de ácidos",
          b: "Acidosis respiratoria por hipoventilación",
          c: "Alcalosis metabólica por vómitos",
          d: "Alcalosis respiratoria por hipoxemia",
          e: "Sin alteración significativa",
        },
        correctAnswer: "a",
        explanation:
          "Presenta acidosis metabólica (pH y HCO3 bajos) probablemente por acumulación de ácidos debido a la insuficiencia renal crónica.",
      },
      {
        title: "Caso 8: Uso Excesivo de Diuréticos",
        description:
          "Paciente usando furosemida presenta:\npH: 7.48\nHCO3: 30 mEq/L\nCO2: 40 mmHg\nK: 3.2 mEq/L\nCl: 95 mEq/L",
        question: "¿Qué alteración ácido-base presenta y cuál es su mecanismo?",
        answers: {
          a: "Acidosis metabólica por pérdida de bicarbonato",
          b: "Alcalosis metabólica por pérdida de cloro e hipokalemia",
          c: "Alcalosis respiratoria por hiperventilación",
          d: "Acidosis respiratoria por hipoventilación",
          e: "Sin alteración significativa",
        },
        correctAnswer: "b",
        explanation:
          "Presenta alcalosis metabólica (pH y HCO3 elevados) por pérdida de cloro e hipokalemia secundaria al uso de diuréticos de asa.",
      },
      {
        title: "Caso 9: Sepsis",
        description:
          "Paciente con sepsis presenta:\npH: 7.30\nHCO3: 14 mEq/L\nCO2: 28 mmHg\nLactato: 4 mmol/L",
        question: "¿Qué tipo de acidosis presenta y cuál es su causa probable?",
        answers: {
          a: "Acidosis metabólica con anión gap normal",
          b: "Acidosis metabólica con anión gap elevado por lactato",
          c: "Acidosis respiratoria",
          d: "Alcalosis metabólica",
          e: "Trastorno mixto",
        },
        correctAnswer: "b",
        explanation:
          "Presenta acidosis metabólica (pH y HCO3 bajos) con anión gap elevado, probablemente debido a la acumulación de lactato en el contexto de sepsis.",
      },
      {
        title: "Caso 10: Alcalosis Respiratoria por Ansiedad",
        description:
          "Paciente con crisis de ansiedad presenta:\npH: 7.50\nHCO3: 22 mEq/L\nCO2: 28 mmHg",
        question: "¿Qué alteración ácido-base presenta y cuál es su mecanismo?",
        answers: {
          a: "Acidosis metabólica por acumulación de ácidos",
          b: "Alcalosis metabólica por pérdida de ácidos",
          c: "Acidosis respiratoria por hipoventilación",
          d: "Alcalosis respiratoria por hiperventilación",
          e: "Sin alteración significativa",
        },
        correctAnswer: "d",
        explanation:
          "Presenta alcalosis respiratoria (pH elevado y CO2 bajo) debido a hiperventilación causada por la crisis de ansiedad.",
      },
    ],
  },
  AlcalosisMetabolica: {
    "id": "AlcalosisMetabolica",
    "title": "Examen de Alcalosis Metabólica",
    "description": "Seleccione la opción incorrecta en cada pregunta",
    "questions": [
      {
        "question": "Respecto a la alcalosis metabólica:",
        "answers": {
          "a": "Se caracteriza por un aumento en el bicarbonato",
          "b": "Puede ser causada por la secreción de H+ a la luz de sistemas tubulares",
          "c": "Siempre indica un aumento primario del HCO3 en sangre",
          "d": "Puede ser causada por pérdida de hidrogeniones",
          "e": "El vómito es una causa común"
        },
        "correctAnswer": "c",
        "explanation": "No siempre indica un aumento primario del HCO3 en sangre, ya que puede haber un aumento compensatorio en acidosis respiratoria crónica."
      },
      {
        "question": "En relación a la diferenciación entre alcalosis metabólica y acidosis respiratoria crónica:",
        "answers": {
          "a": "La alcalosis metabólica primaria tiene pH alcalino",
          "b": "La acidosis respiratoria crónica tiene pH ácido",
          "c": "El HCO3 puede estar elevado en ambas condiciones",
          "d": "La acidosis respiratoria crónica generalmente no tiene HCO3 por encima de 40",
          "e": "La alcalosis metabólica siempre tiene HCO3 por debajo de 40"
        },
        "correctAnswer": "e",
        "explanation": "En la alcalosis metabólica primaria, el HCO3 puede subir por encima de 40, a diferencia de la acidosis respiratoria crónica."
      },
      {
        "question": "Sobre la fisiopatología de la alcalosis metabólica:",
        "answers": {
          "a": "Es importante identificar qué la genera",
          "b": "Es crucial entender qué la perpetúa",
          "c": "El riñón es muy eficiente en eliminar el exceso de HCO3",
          "d": "Las enfermedades que causan alcalosis metabólica generalmente producen más de 1000mEq de HCO3 al día",
          "e": "Debe haber un impedimento en la excreción renal de HCO3 para que se mantenga"
        },
        "correctAnswer": "d",
        "explanation": "Las enfermedades que causan alcalosis metabólica generalmente producen menos de 1000mEq de HCO3 al día."
      },
      {
        "question": "Los factores perpetuadores de la alcalosis metabólica incluyen:",
        "answers": {
          "a": "Hipovolemia",
          "b": "Hipocalemia",
          "c": "Hipocloremia",
          "d": "Aldosterona elevada",
          "e": "Hipercalcemia"
        },
        "correctAnswer": "e",
        "explanation": "La hipercalcemia no es uno de los factores perpetuadores mencionados en el texto. Los cuatro factores son hipovolemia, hipocalemia, hipocloremia y aldosterona elevada."
      },
      {
        "question": "En relación a la hipovolemia como perpetuador de la alcalosis metabólica:",
        "answers": {
          "a": "Puede ser causada por vómito",
          "b": "Activa el sistema renina-angiotensina-aldosterona",
          "c": "Puede incluir estados edematosos",
          "d": "Aumenta la reabsorción neta de HCO3",
          "e": "Disminuye la actividad del intercambiador Na/H+ en el túbulo proximal"
        },
        "correctAnswer": "e",
        "explanation": "La hipovolemia aumenta la actividad del intercambiador Na/H+ en el túbulo proximal, no la disminuye."
      },
      {
        "question": "Sobre el mecanismo de perpetuación de la alcalosis metabólica en el túbulo proximal:",
        "answers": {
          "a": "El intercambiador Na/H+ está estimulado por el sistema simpático",
          "b": "La angiotensina II estimula el intercambiador Na/H+",
          "c": "El objetivo principal es mantener la volemia",
          "d": "La alcalosis intracelular estimula el intercambiador Na/H+",
          "e": "Este mecanismo es cuantitativamente insuficiente para explicar todo el aumento de HCO3"
        },
        "correctAnswer": "d",
        "explanation": "La alcalosis intracelular deprime el intercambiador Na/H+, no lo estimula."
      },
      {
        "question": "En el túbulo distal, durante la alcalosis metabólica perpetuada por hipovolemia:",
        "answers": {
          "a": "El hiperaldosteronismo secundario estimula los ENaC",
          "b": "Se activan los canales ROMK",
          "c": "Aumenta la actividad de la bomba Na/K",
          "d": "Se inhibe la SGK1",
          "e": "Se crea un lumen negativo que favorece la secreción de H+ y K+"
        },
        "correctAnswer": "d",
        "explanation": "La SGK1 se estimula, no se inhibe, en esta situación."
      },
      {
        "question": "Respecto a la hipocloremia en la alcalosis metabólica:",
        "answers": {
          "a": "Es uno de los factores perpetuadores más importantes",
          "b": "Puede ser causada por vómito",
          "c": "Puede ser causada por diuréticos",
          "d": "Afecta el funcionamiento del cotransportador Na-K-2Cl en el asa de Henle",
          "e": "Aumenta la reabsorción de Na y Cl en el asa de Henle"
        },
        "correctAnswer": "e",
        "explanation": "La hipocloremia disminuye la reabsorción de Na y Cl en el asa de Henle, no la aumenta."
      },
      {
        "question": "En relación a los mecanismos de la hipocloremia en la alcalosis metabólica:",
        "answers": {
          "a": "Afecta el cotransportador Na-K-2Cl en el asa de Henle",
          "b": "Disminuye la reabsorción de Na y Cl en el asa de Henle",
          "c": "Aumenta el flujo de Na y agua al nefrón distal",
          "d": "Estimula la actividad de ENaC y ROMK en el túbulo distal",
          "e": "Inhibe la secreción de aldosterona"
        },
        "correctAnswer": "e",
        "explanation": "La hipocloremia no inhibe la secreción de aldosterona; de hecho, puede aumentarla indirectamente al estimular el sistema renina-angiotensina-aldosterona."
      },
      {
        "question": "Sobre la hipocalemia en la alcalosis metabólica:",
        "answers": {
          "a": "Es uno de los factores perpetuadores",
          "b": "Puede ser causada por vómito",
          "c": "Puede ser causada por diuréticos",
          "d": "Aumenta la reabsorción de HCO3 en el túbulo proximal",
          "e": "Disminuye la secreción de H+ en el túbulo distal"
        },
        "correctAnswer": "e",
        "explanation": "La hipocalemia aumenta la secreción de H+ en el túbulo distal, no la disminuye."
      },
      {
        "question": "En relación al papel de la aldosterona en la alcalosis metabólica:",
        "answers": {
          "a": "Su aumento es uno de los factores perpetuadores",
          "b": "Estimula los canales ENaC",
          "c": "Activa la bomba Na/K",
          "d": "Inhibe la secreción de H+ en las células intercaladas alfa",
          "e": "Puede ser secundaria a la hipovolemia"
        },
        "correctAnswer": "d",
        "explanation": "La aldosterona estimula la secreción de H+ en las células intercaladas alfa, no la inhibe."
      },
      {
        "question": "Sobre los mecanismos de compensación en la alcalosis metabólica:",
        "answers": {
          "a": "El riñón es muy eficiente en eliminar el exceso de HCO3",
          "b": "La hipovolemia impide la excreción renal de HCO3",
          "c": "La hipocloremia favorece la reabsorción de HCO3",
          "d": "La hipocalemia aumenta la secreción de H+",
          "e": "La aldosterona disminuye la reabsorción de Na"
        },
        "correctAnswer": "e",
        "explanation": "La aldosterona aumenta la reabsorción de Na, no la disminuye."
      },
      {
        "question": "En relación a la fisiopatología de la alcalosis metabólica:",
        "answers": {
          "a": "El vómito puede ser una causa generadora",
          "b": "Los diuréticos pueden ser una causa generadora",
          "c": "La hipovolemia puede ser un factor perpetuador",
          "d": "La hipercloremia es un factor perpetuador",
          "e": "El hiperaldosteronismo puede ser un factor perpetuador"
        },
        "correctAnswer": "d",
        "explanation": "La hipocloremia, no la hipercloremia, es un factor perpetuador de la alcalosis metabólica."
      },
      {
        "question": "Sobre el papel del túbulo proximal en la alcalosis metabólica:",
        "answers": {
          "a": "El intercambiador Na/H+ está estimulado por el sistema simpático",
          "b": "La angiotensina II estimula el intercambiador Na/H+",
          "c": "La alcalosis intracelular estimula el intercambiador Na/H+",
          "d": "Su función principal es mantener la volemia",
          "e": "Su contribución a la reabsorción de HCO3 es debatida"
        },
        "correctAnswer": "c",
        "explanation": "La alcalosis intracelular deprime el intercambiador Na/H+, no lo estimula."
      },
      {
        "question": "En relación al túbulo distal en la alcalosis metabólica:",
        "answers": {
          "a": "El hiperaldosteronismo secundario estimula los ENaC",
          "b": "Se activan los canales ROMK",
          "c": "Aumenta la actividad de la bomba Na/K",
          "d": "Se inhibe la SGK1",
          "e": "La célula intercalada alfa aumenta la secreción de H+"
        },
        "correctAnswer": "d",
        "explanation": "La SGK1 se estimula, no se inhibe, en esta situación."
      },
      {
        "question": "Sobre los efectos de la hipocloremia en el asa de Henle:",
        "answers": {
          "a": "Afecta el cotransportador Na-K-2Cl",
          "b": "Disminuye la reabsorción de Na y Cl",
          "c": "Aumenta el flujo de Na y agua al nefrón distal",
          "d": "Estimula la actividad de ENaC y ROMK en el túbulo distal",
          "e": "Aumenta la reabsorción de K+"
        },
        "correctAnswer": "e",
        "explanation": "La hipocloremia disminuye la reabsorción de K+ en el asa de Henle, no la aumenta."
      },
      {
        "question": "En relación a los factores perpetuadores de la alcalosis metabólica:",
        "answers": {
          "a": "La hipovolemia es uno de ellos",
          "b": "La hipocalemia es otro factor",
          "c": "La hipocloremia juega un papel importante",
          "d": "El hiperaldosteronismo puede ser un factor",
          "e": "La hipercalcemia es un factor clave"
        },
        "correctAnswer": "e",
        "explanation": "La hipercalcemia no se menciona como un factor perpetuador de la alcalosis metabólica en el texto."
      },
      {
        "question": "Sobre la hipovolemia en la alcalosis metabólica:",
        "answers": {
          "a": "Activa el sistema renina-angiotensina-aldosterona",
          "b": "Puede ser causada por vómito",
          "c": "Aumenta la reabsorción de HCO3 en el túbulo proximal",
          "d": "Disminuye la actividad del intercambiador Na/H+",
          "e": "Puede incluir estados edematosos"
        },
        "correctAnswer": "d",
        "explanation": "La hipovolemia aumenta la actividad del intercambiador Na/H+, no la disminuye."
      },
      {
        "question": "En relación a la hipocalemia en la alcalosis metabólica:",
        "answers": {
          "a": "Es uno de los factores perpetuadores",
          "b": "Puede ser causada por vómito",
          "c": "Puede ser causada por diuréticos",
          "d": "Aumenta la reabsorción de HCO3 en el túbulo proximal",
          "e": "Disminuye la secreción de H+ en el túbulo colector"
        },
        "correctAnswer": "e",
        "explanation": "La hipocalemia aumenta la secreción de H+ en el túbulo colector, no la disminuye."
      },
      {
        "question": "Sobre el papel de la aldosterona en la alcalosis metabólica:",
        "answers": {
          "a": "Su aumento es uno de los factores perpetuadores",
          "b": "Estimula los canales ENaC",
          "c": "Activa la bomba Na/K",
          "d": "Inhibe la secreción de H+ en las células intercaladas alfa",
          "e": "Puede ser secundaria a la hipovolemia"
        },
        "correctAnswer": "d",
        "explanation": "La aldosterona estimula la secreción de H+ en las células intercaladas alfa, no la inhibe."
      },
      {
        "question": "En relación a los mecanismos de compensación en la alcalosis metabólica:",
        "answers": {
          "a": "El riñón es muy eficiente en eliminar el exceso de HCO3",
          "b": "La hipovolemia impide la excreción renal de HCO3",
          "c": "La hipocloremia favorece la reabsorción de HCO3",
          "d": "La hipocalemia aumenta la secreción de H+",
          "e": "La aldosterona disminuye la reabsorción de Na"
        },
        "correctAnswer": "e",
        "explanation": "La aldosterona aumenta la reabsorción de Na, no la disminuye."
      },
      {
        "question": "Sobre el cotransportador Na-K-2Cl en el asa de Henle:",
        "answers": {
          "a": "Es inhibido por el AMPc",
          "b": "Es estimulado por el ácido araquidónico",
          "c": "Requiere concentraciones adecuadas de Na, K y Cl para funcionar",
          "d": "No se ve afectado por la hipocloremia",
          "e": "Su función disminuye en la alcalosis metabólica"
        },
        "correctAnswer": "b",
        "explanation": "El ácido araquidónico inhibe el cotransportador Na-K-2Cl, no lo estimula."
      },
      {
        "question": "En relación a la célula principal del túbulo distal en la alcalosis metabólica:",
        "answers": {
          "a": "Aumenta la actividad de ENaC",
          "b": "Aumenta la actividad de ROMK",
          "c": "Aumenta la actividad de la bomba Na/K",
          "d": "Disminuye la actividad de SGK1",
          "e": "Crea un lumen negativo"
        },
        "correctAnswer": "d",
        "explanation": "La actividad de SGK1 aumenta, no disminuye, en la alcalosis metabólica."
      },
      {
        "question": "Sobre la célula intercalada alfa en la alcalosis metabólica:",
        "answers": {
          "a": "Aumenta la secreción de H+",
          "b": "Disminuye la actividad de la ATPasa de H+",
          "c": "Es estimulada por la aldosterona",
          "d": "Aumenta la reabsorción de HCO3",
          "e": "No se ve afectada por el lumen negativo"
        },
        "correctAnswer": "b",
        "explanation": "La actividad de la ATPasa de H+ aumenta, no disminuye, en la alcalosis metabólica."
      },
      {
        "question": "En relación a los efectos de la hipocloremia en la alcalosis metabólica:",
        "answers": {
          "a": "Disminuye la función del cotransportador Na-K-2Cl",
          "b": "Aumenta la reabsorción de Na en el asa de Henle",
          "c": "Disminuye el flujo de Na al nefrón distal",
          "d": "Estimula la actividad de ENaC y ROMK",
          "e": "No afecta la secreción de K+"
        },
        "correctAnswer": "b",
        "explanation": "La hipocloremia disminuye la reabsorción de Na en el asa de Henle, no la aumenta."
      },
      {
        "question": "Sobre los efectos de la hipocalemia en la alcalosis metabólica:",
        "answers": {
          "a": "Aumenta la reabsorción de HCO3 en el túbulo proximal",
          "b": "Disminuye la secreción de H+ en el túbulo distal",
          "c": "No afecta la actividad de la bomba Na/K",
          "d": "Estimula la actividad de ROMK",
          "e": "Puede ser causada por diuréticos"
        },
        "correctAnswer": "b",
        "explanation": "La hipocalemia aumenta la secreción de H+ en el túbulo distal, no la disminuye."
      },
      {
        "question": "En relación a los efectos de la aldosterona en la alcalosis metabólica:",
        "answers": {
          "a": "Estimula la reabsorción de Na",
          "b": "Aumenta la secreción de K+",
          "c": "Estimula la secreción de H+",
          "d": "Inhibe la actividad de SGK1",
          "e": "No afecta la actividad de ENaC"
        },
        "correctAnswer": "d",
        "explanation": "La aldosterona estimula la actividad de SGK1, no la inhibe."
      },
      {
        "question": "Sobre los mecanismos de compensación renal en la alcalosis metabólica:",
        "answers": {
          "a": "El riñón es ineficiente en eliminar el exceso de HCO3",
          "b": "La hipovolemia favorece la excreción renal de HCO3",
          "c": "La hipocloremia disminuye la reabsorción de HCO3",
          "d": "La hipocalemia disminuye la secreción de H+",
          "e": "El hiperaldosteronismo secundario aumenta la reabsorción de Na"
        },
        "correctAnswer": "a",
        "explanation": "El riñón es muy eficiente en eliminar el exceso de HCO3, no ineficiente."
      },
      {
        "question": "En relación a la fisiopatología de la alcalosis metabólica:",
        "answers": {
          "a": "Siempre hay un aumento primario de HCO3",
          "b": "Puede ser causada por pérdida de H+",
          "c": "El vómito es una causa común",
          "d": "Los diuréticos pueden causarla",
          "e": "No requiere factores perpetuadores"
        },
        "correctAnswer": "e",
        "explanation": "La alcalosis metabólica sí requiere factores perpetuadores para mantenerse."
      },
      {
        "question": "Sobre el papel del túbulo proximal en la alcalosis metabólica:",
        "answers": {
          "a": "El intercambiador Na/H+ está inhibido por el sistema simpático",
          "b": "La angiotensina II inhibe el intercambiador Na/H+",
          "c": "La alcalosis intracelular estimula el intercambiador Na/H+",
          "d": "Su función principal es mantener el equilibrio ácido-base",
          "e": "Su contribución a la reabsorción de HCO3 es significativa"
        },
        "correctAnswer": "c",
        "explanation": "La alcalosis intracelular inhibe el intercambiador Na/H+, no lo estimula."
      },
      {
        "question": "En relación al túbulo distal en la alcalosis metabólica:",
        "answers": {
          "a": "El hiperaldosteronismo secundario inhibe los ENaC",
          "b": "Se inactivan los canales ROMK",
          "c": "Disminuye la actividad de la bomba Na/K",
          "d": "Se estimula la SGK1",
          "e": "La célula intercalada alfa disminuye la secreción de H+"
        },
        "correctAnswer": "e",
        "explanation": "La célula intercalada alfa aumenta la secreción de H+, no la disminuye."
      },
      {
        "question": "Sobre los efectos de la hipocloremia en el asa de Henle:",
        "answers": {
          "a": "No afecta el cotransportador Na-K-2Cl",
          "b": "Aumenta la reabsorción de Na y Cl",
          "c": "Disminuye el flujo de Na y agua al nefrón distal",
          "d": "Inhibe la actividad de ENaC y ROMK en el túbulo distal",
          "e": "Disminuye la reabsorción de K+"
        },
        "correctAnswer": "b",
        "explanation": "La hipocloremia disminuye la reabsorción de Na y Cl en el asa de Henle, no la aumenta."
      },
      {
        "question": "En relación a los factores perpetuadores de la alcalosis metabólica:",
        "answers": {
          "a": "La hipervolemia es uno de ellos",
          "b": "La hipercalemia es otro factor",
          "c": "La hipercloremia juega un papel importante",
          "d": "El hipoaldosteronismo puede ser un factor",
          "e": "La hipocalemia es un factor clave"
        },
        "correctAnswer": "e",
        "explanation": "La hipocalemia es un factor perpetuador de la alcalosis metabólica, las otras opciones son incorrectas."
      },
      {
        "question": "Sobre la hipovolemia en la alcalosis metabólica:",
        "answers": {
          "a": "Inhibe el sistema renina-angiotensina-aldosterona",
          "b": "No puede ser causada por vómito",
          "c": "Disminuye la reabsorción de HCO3 en el túbulo proximal",
          "d": "Aumenta la actividad del intercambiador Na/H+",
          "e": "No incluye estados edematosos"
        },
        "correctAnswer": "c",
        "explanation": "La hipovolemia aumenta la reabsorción de HCO3 en el túbulo proximal, no la disminuye."
      },
      {
        "question": "En relación a la hipocalemia en la alcalosis metabólica:",
        "answers": {
          "a": "No es un factor perpetuador",
          "b": "No puede ser causada por vómito",
          "c": "No puede ser causada por diuréticos",
          "d": "Disminuye la reabsorción de HCO3 en el túbulo proximal",
          "e": "Aumenta la secreción de H+ en el túbulo colector"
        },
        "correctAnswer": "d",
        "explanation": "La hipocalemia aumenta la reabsorción de HCO3 en el túbulo proximal, no la disminuye."
      },
      {
        "question": "Sobre el papel de la aldosterona en la alcalosis metabólica:",
        "answers": {
          "a": "Su disminución es uno de los factores perpetuadores",
          "b": "Inhibe los canales ENaC",
          "c": "Inactiva la bomba Na/K",
          "d": "Estimula la secreción de H+ en las células intercaladas alfa",
          "e": "No puede ser secundaria a la hipovolemia"
        },
        "correctAnswer": "a",
        "explanation": "El aumento de aldosterona, no su disminución, es uno de los factores perpetuadores de la alcalosis metabólica."
      },
      {
        "question": "En relación a los mecanismos de compensación en la alcalosis metabólica:",
        "answers": {
          "a": "El riñón es ineficiente en eliminar el exceso de HCO3",
          "b": "La hipovolemia favorece la excreción renal de HCO3",
          "c": "La hipocloremia disminuye la reabsorción de HCO3",
          "d": "La hipocalemia disminuye la secreción de H+",
          "e": "La aldosterona aumenta la reabsorción de Na"
        },
        "correctAnswer": "b",
        "explanation": "La hipovolemia impide la excreción renal de HCO3, no la favorece."
      },
      {
        "question": "Sobre el cotransportador Na-K-2Cl en el asa de Henle:",
        "answers": {
          "a": "Es estimulado por el AMPc",
          "b": "Es inhibido por el ácido araquidónico",
          "c": "No requiere concentraciones adecuadas de Na, K y Cl para funcionar",
          "d": "Se ve afectado por la hipocloremia",
          "e": "Su función aumenta en la alcalosis metabólica"
        },
        "correctAnswer": "e",
        "explanation": "La función del cotransportador Na-K-2Cl disminuye en la alcalosis metabólica, no aumenta."
      },
      {
        "question": "En relación a la célula principal del túbulo distal en la alcalosis metabólica:",
        "answers": {
          "a": "Disminuye la actividad de ENaC",
          "b": "Disminuye la actividad de ROMK",
          "c": "Disminuye la actividad de la bomba Na/K",
          "d": "Aumenta la actividad de SGK1",
          "e": "Crea un lumen positivo"
        },
        "correctAnswer": "e",
        "explanation": "La célula principal crea un lumen negativo, no positivo, en la alcalosis metabólica."
      },
      {
        "question": "Sobre la célula intercalada alfa en la alcalosis metabólica:",
        "answers": {
          "a": "Disminuye la secreción de H+",
          "b": "Aumenta la actividad de la ATPasa de H+",
          "c": "Es inhibida por la aldosterona",
          "d": "Disminuye la reabsorción de HCO3",
          "e": "No se ve afectada por el lumen negativo"
        },
        "correctAnswer": "c",
        "explanation": "La célula intercalada alfa es estimulada, no inhibida, por la aldosterona en la alcalosis metabólica."
      },
      {
        "question": "En relación a los efectos de la hipocloremia en la alcalosis metabólica:",
        "answers": {
          "a": "Aumenta la función del cotransportador Na-K-2Cl",
          "b": "Disminuye la reabsorción de Na en el asa de Henle",
          "c": "Aumenta el flujo de Na al nefrón distal",
          "d": "Inhibe la actividad de ENaC y ROMK",
          "e": "No afecta la secreción de K+"
        },
        "correctAnswer": "e",
        "explanation": "La hipocloremia sí afecta la secreción de K+, aumentándola indirectamente al estimular la actividad de ROMK."
      },
      {
        "question": "Sobre los efectos de la hipocalemia en la alcalosis metabólica:",
        "answers": {
          "a": "Disminuye la reabsorción de HCO3 en el túbulo proximal",
          "b": "Aumenta la secreción de H+ en el túbulo distal",
          "c": "No afecta la actividad de la bomba Na/K",
          "d": "Inhibe la actividad de ROMK",
          "e": "Puede ser causada por diuréticos"
        },
        "correctAnswer": "d",
        "explanation": "La hipocalemia estimula la actividad de ROMK, no la inhibe."
      },
      {
        "question": "En relación a los mecanismos compensatorios renales:",
        "answers": {
          "a": "El riñón normalmente elimina el exceso de HCO3",
          "b": "La compensación renal es independiente de la volemia",
          "c": "Los perpetuadores no son necesarios para mantener la alcalosis",
          "d": "La hipocloremia facilita la eliminación de HCO3",
          "e": "La hipovolemia activa mecanismos de retención de HCO3"
        },
        "correctAnswer": "d",
        "explanation": "La hipocloremia dificulta, no facilita, la eliminación de HCO3."
      },
      {
        "question": "Sobre el sistema renina-angiotensina-aldosterona en la alcalosis metabólica:",
        "answers": {
          "a": "Se activa en respuesta a la hipovolemia",
          "b": "La angiotensina II estimula el intercambiador Na/H+",
          "c": "La aldosterona aumenta la secreción de H+",
          "d": "Contribuye a la reabsorción de Na",
          "e": "Disminuye la actividad del ENaC"
        },
        "correctAnswer": "e",
        "explanation": "El sistema aumenta, no disminuye, la actividad del ENaC."
      },
      {
        "question": "En relación al túbulo proximal en la alcalosis metabólica:",
        "answers": {
          "a": "El intercambiador Na/H+ está estimulado por el sistema simpático",
          "b": "La alcalosis intracelular aumenta su actividad",
          "c": "Su función principal es mantener la volemia",
          "d": "La angiotensina II estimula su función",
          "e": "Su contribución a la reabsorción de HCO3 es significativa"
        },
        "correctAnswer": "b",
        "explanation": "La alcalosis intracelular disminuye, no aumenta, la actividad del intercambiador Na/H+."
      },
      {
        "question": "Sobre los factores perpetuadores en la alcalosis metabólica:",
        "answers": {
          "a": "Son necesarios cuatro factores principales",
          "b": "La hipovolemia es uno de ellos",
          "c": "La hipocloremia contribuye significativamente",
          "d": "La hipocalemia juega un papel importante",
          "e": "La hipercalcemia es fundamental"
        },
        "correctAnswer": "e",
        "explanation": "La hipercalcemia no es un factor perpetuador de la alcalosis metabólica."
      }
    ]
  }
};




