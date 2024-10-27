document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");

  const questions = [
    {
      question:
        "La principal causa de la hipoxemia en los pacientes con EPOC cuando no están en un periodo de exacerbación es:",
      answers: {
        a: "Disminución del DLCO",
        b: "Hipoventilación generalizada",
        c: "Shunts alveolares",
        d: "Alteración en la difusión",
        e: "Relaciones V/Q bajas",
      },
      correctAnswer: "e",
    },
    {
      question:
        "Cuál de las siguientes no es característica de una enfermedad obstructiva moderada:",
      answers: {
        a: "El volumen de cierre aumenta",
        b: "Hay aumento en la constante de tiempo",
        c: "Hay disminución del volumen de isoflujo",
        d: "El ∆max50 disminuye",
        e: "La relación capacitancia dinámica/estática es menor de 1",
      },
      correctAnswer: "e",
    },
    {
      question:
        "Un paciente con un VEF1/CVF del 65% de lo predicho con un VEF1 del 45% de lo normal está clasificado como un EPOC estadio:",
      answers: {
        a: "II",
        b: "III",
        c: "IV",
        d: "I",
        e: "O",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Cuál de los siguientes factores es el más importante contribuyente al desarrollo de hipertensión pulmonar en el paciente con EPOC:",
      answers: {
        a: "Destrucción de los tabiques alveolares",
        b: "Hipoxia alveolar",
        c: "Hipercapnia",
        d: "Policitemia",
        e: "Acidemia",
      },
      correctAnswer: "b",
    },
    {
      question:
        "El fenotipo más común en una deficiencia severa en los niveles de alfa uno antitripsina es:",
      answers: {
        a: "MM",
        b: "SZ",
        c: "ZZ",
        d: "MZ",
        e: "SS",
        f: "Nulo-Nulo",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Tanto en el EPOC como en el asma puede existir atrapamiento de aire. Cual de las siguientes aseveraciones no es esperable de encontrar a nivel diafragmático:",
      answers: {
        a: "Mayor trabajo respiratorio",
        b: "Mayor tensión de las fibras para lograr una presión dada",
        c: "Aumento en el radio de curvatura del diafragma",
        d: "Componente insercional horizontalizado",
        e: "Disminución en el componente aposicional",
        f: "Alargamiento de las fibras",
      },
      correctAnswer: "f",
    },
    {
      question:
        "Una de las siguientes células no está claramente implicada en el EPOC:",
      answers: {
        a: "Células epiteliales",
        b: "Linfocitos T CD8+",
        c: "Macrófagos",
        d: "Neutrófilos",
        e: "Linfocitos TH2",
      },
      correctAnswer: "e",
    },
    {
      question:
        "Son células importantes implicadas en el proceso inflamatorio del asma excepto:",
      answers: {
        a: "Eosinófilos",
        b: "Mastocitos",
        c: "Linfocitos TH1",
        d: "Células dendríticas",
        e: "Neutrófilos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En la evolución de un EPOC usted podría encontrar las siguientes alteraciones en los volúmenes y capacidades pulmonares excepto una:",
      answers: {
        a: "Aumento del VR",
        b: "Aumento en CPT",
        c: "Aumento en CRF",
        d: "Aumento en PEF",
        e: "Disminución en CVF",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Son cambios estructurales que están implicados directamente en el remodelamiento de las vías aéreas en el asmático excepto:",
      answers: {
        a: "Hiperplasia de las células claras",
        b: "Fibrosis subepitelial",
        c: "Hipertrofia de músculo liso de las vías aéreas",
        d: "Hipersecreción de moco",
        e: "Proliferación de vasos sanguíneos",
        f: "Metaplasia e hiperplasia de células caliciformes",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Una de las siguientes citocinas no es característica del asma:",
      answers: {
        a: "IL4",
        b: "IL2",
        c: "IL5",
        d: "IL9",
        e: "IL13",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Cuál de los siguientes exámenes serviría como un posible indicador de un componente atópico en un paciente asmático:",
      answers: {
        a: "Histamina",
        b: "Metacolina",
        c: "Manitol",
        d: "Ejercicio",
        e: "Pruebas cutáneas de escarificación e intradermoreacción",
      },
      correctAnswer: "e",
    },
    {
      question: "Cuál de las siguientes aseveraciones es falsa:",
      answers: {
        a: "La prueba de dilución del Helio subvalora el CRF en un paciente obstructivo",
        b: "El enfisema típico por cigarrillo es panacinar y localizado en las bases",
        c: "La reversibilidad de una exacerbación asmática está marcada por un aumento en el VEF1 mayor o igual al 20% posterior al suministro de un broncodilatador",
        d: "La alfa uno antitripsina es la principal antielastasa de los neutrófilos",
        e: "La reparación defectuosa explicaría una de las teorías posibles del enfisema",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Cuál de las siguientes opciones es incorrecta en cuanto al enfisema:",
      answers: {
        a: "El cigarrillo causa una inhibición de la alfa uno antitripsina",
        b: "El cigarrillo aumenta la cantidad de elastasa de los neutrófilos presente en los pulmones",
        c: "Las metaloproteinasas de matriz están implicadas en el daño enfisematoso",
        d: "La alfa uno antitripsina es la principal serpina en plasma",
        e: "Las proteinasas cisteínicas son producidas normalmente por los macrófagos",
        f: "Las cistatinas son inhibidores de las proteasas tiolicas",
        g: "Las TIMPs son inhibidores tisulares de las metaloproteinasas",
        h: "La capacitancia dinámica está aumentada",
      },
      correctAnswer: "h",
    },
    {
      question:
        "Son indicaciones para estudiar un paciente en búsqueda de una deficiencia de alfa uno antitripsina excepto una:",
      answers: {
        a: "Bronquitis crónica con obstrucción en un no fumador",
        b: "Comienzo prematuro de EPOC (antes de los 40 años)",
        c: "Predominio de enfisema apical",
        d: "Cirrosis sin factores de riesgo aparentes",
        e: "Asma que no remite fácil al tratamiento en una persona menor de 50 años",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Favorecen el diagnóstico de asma alérgica o extrínseca excepto uno:",
      answers: {
        a: "Pruebas de escarificación e intradermoreacción positivas",
        b: "Niveles sanguíneos de IGE altos en sangre",
        c: "Historia de inicio temprano en la vida de ataques de asma",
        d: "Historia personal o familiar de rinitis y dermatitis",
        e: "Hipersensibilidad a la aspirina",
      },
      correctAnswer: "e",
    },
    {
      question:
        "La compresión dinámica de las vías aéreas del enfisema presenta las siguientes características excepto:",
      answers: {
        a: "La presión alveolar a un determinado volumen pulmonar es menor que en una persona normal debido a la disminución de retroceso elástico",
        b: "La localización del punto de igual presión está determinada principalmente por la diferencia entre la presión alveolar y la presión pleural",
        c: "La resistencia de las vías aéreas está aumentada por disminución en el retroceso elástico pulmonar",
        d: "El punto de igual presión ocurre más cercano a las vías aéreas centrales a medida que progresa la enfermedad",
        e: "Explica que una vía aérea pueda atrapar aire y produzca presión positiva al final de la espiración",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Paciente de 19 años con disnea, opresión precordial y sibilancias. Indique la opción falsa:",
      answers: {
        a: "Este paciente presenta pulso paradójico",
        b: "La utilización de músculos accesorios indica aplanamiento del diafragma",
        c: "Los gases arteriales indican un asma leve",
        d: "No hay signos de cor pulmonar",
        e: "La posición de trípode busca ventaja mecánica para los músculos accesorios",
        f: "La ingurgitación yugular se explica por aumento de presión intratorácica",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Paciente con parámetros pulmonares anormales. Diagnóstico probable:",
      answers: {
        a: "Asma",
        b: "Bronquitis crónica pura",
        c: "Enfisema puro",
        d: "Fibrosis pulmonar",
        e: "EPOC",
      },
      correctAnswer: "e",
    },
    {
      question:
        "Paciente con parámetros pulmonares tras un broncodilatador. Todo es cierto excepto:",
      answers: {
        a: "No presenta un cuadro restrictivo",
        b: "Presenta obstrucción moderada",
        c: "El cuadro es compatible con asma",
        d: "Presenta hiperinsuflación y atrapamiento de aire",
        e: "Puede ser compatible con EPOC con predominio de bronquitis crónica",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Paciente con parámetros tras inhalación de un beta2 adrenérgico. Indique la opción incorrecta:",
      answers: {
        a: "Presenta un componente enfisematoso",
        b: "El cuadro es compatible con EPOC",
        c: "Es compatible con atrapamiento de aire",
        d: "Hay reversibilidad al tratamiento con broncodilatadores",
        e: "No es compatible con fibrosis pulmonar",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Características del enfisema pulmonar puro sin bronquitis crónica asociada excepto:",
      answers: {
        a: "Aumento del DLCO",
        b: "Aumento de la capacitancia estática pulmonar",
        c: "Pérdida de capilares pulmonares",
        d: "Aumento del CPT",
        e: "Espacios muertos alveolares",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Al suministrar un broncodilatador a un paciente con asma, mejoraría todos los siguientes parámetros excepto uno:",
      answers: {
        a: "VEF1",
        b: "PEF",
        c: "VEF1/CVF",
        d: "CVF",
        e: "FEF25-75",
        f: "CRF",
      },
      correctAnswer: "f",
    },
    {
      question:
        "Paciente con historia de EPOC y gases arteriales anormales. Diagnóstico más correcto:",
      answers: {
        a: "Acidosis respiratoria crónica",
        b: "Acidosis respiratoria aguda",
        c: "Alcalosis metabólica",
        d: "Alcalosis respiratoria crónica",
        e: "Acidosis mixta",
      },
      correctAnswer: "a",
    },
    {
      question: "Datos que hacen pensar en cor pulmonar en un EPOC excepto:",
      answers: {
        a: "R3 acentuado con la espiración",
        b: "Ingurgitación yugular inspiratoria",
        c: "Edema en miembros inferiores",
        d: "Soplo holosistólico",
        e: "Reflujo hepatoyugular",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Parámetro típicamente aumentado en un paciente con enfisema puro:",
      answers: {
        a: "VEF1",
        b: "VRI",
        c: "PEF",
        d: "CVF",
        e: "VR",
      },
      correctAnswer: "e",
    },
    {
      question:
        "Paciente con asma desde la infancia sin síntomas recientes. Conducta más correcta:",
      answers: {
        a: "Tratamiento con esteroides por un año",
        b: "Tratamiento con broncodilatadores de larga acción",
        c: "No hacer nada, solo tranquilizarlo",
        d: "Practicar una espirometría y decidir la conducta",
        e: "Suministrar antileucotrienos",
      },
      correctAnswer: "d",
    },
    {
      question:
        "En cuanto a la hipótesis de la higiene del asma señale la opción falsa:",
      answers: {
        a: "Ciertas infecciones severas facilitan el desarrollo de Th2",
        b: "Ciertas infecciones favorecen el predominio de Th1",
        c: "Mejor higiene está relacionada con mayor prevalencia de asma",
        d: "Alergia respiratoria es frecuente en gente expuesta a microbios vía oro-fecal",
        e: "El ambiente fetal predispone a desarrollar Th2",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Aspecto de la fisiopatología del asma inducida por ejercicio excepto una:",
      answers: {
        a: "Genética",
        b: "Recalentamiento de las vías aéreas",
        c: "Pérdida de calor y vapor de agua",
        d: "Inflamación",
        e: "Leucotrienos",
        f: "IG E",
      },
      correctAnswer: "f",
    },
    {
      question: "Cual de las siguientes opciones es falsa sobre el asma:",
      answers: {
        a: "Cristales de Charcot-Leyden formados por lisofosfolipasa eosinofílica",
        b: "Espirales de Curshmann son tapones de moco",
        c: "Cuerpos de Creola son células epiteliales desprendidas",
        d: "Índice de Reid bajo indica bronquitis crónica",
        e: "Eosinófilos tienen menos participación en EPOC que en asma",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Alteraciones en una enfermedad restrictiva extraparenquimatosa de la pared excepto:",
      answers: {
        a: "VR aumentado",
        b: "CPT disminuido",
        c: "VEF1/CVF disminuido",
        d: "CV disminuido",
        e: "Presión espiratoria máxima normal",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Alteraciones en una enfermedad extraparenquimatosa con compromiso mixto muscular excepto:",
      answers: {
        a: "VR disminuido",
        b: "CV disminuido",
        c: "CPT disminuido",
        d: "VEF1/CVF disminuido",
        e: "Presión espiratoria disminuida",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una causa de hipoxemia hipoxémica?",
      answers: {
        a: "Shunt alveolar puro",
        b: "Hipoventilación alveolar",
        c: "Aumento de la frecuencia respiratoria",
        d: "Relaciones V/Q bajas",
      },
      correctAnswer: "c",
    },
    {
      question:
        "La función del surfactante en los alveolos incluye todas las siguientes EXCEPTO:",
      answers: {
        a: "Reducir la tensión superficial",
        b: "Facilitar el intercambio gaseoso",
        c: "Prevenir el colapso alveolar",
        d: "Incrementar la presión alveolar",
      },
      correctAnswer: "d",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una característica de la dinámica respiratoria en ventilación espontánea?",
      answers: {
        a: "La espiración es completamente pasiva",
        b: "El aire se mueve solo al final de la inspiración",
        c: "Requiere del uso de músculos espiratorios",
        d: "Depende del retroceso elástico del pulmón y la pared torácica",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En relación con el EPOC, ¿cuál de las siguientes NO es un factor de riesgo?",
      answers: {
        a: "Deficiencia de alfa-1 antitripsina",
        b: "Exposición a humo de biomasa",
        c: "Ejercicio aeróbico regular",
        d: "Fumadores pasivos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En el EPOC, el tipo de células implicadas en la inflamación NO incluye:",
      answers: {
        a: "Neutrófilos",
        b: "Macrófagos",
        c: "Células dendríticas",
        d: "Linfocitos TH2",
      },
      correctAnswer: "d",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre el diafragma NO es correcta?",
      answers: {
        a: "Se desplaza hacia abajo para aumentar el volumen torácico",
        b: "Es menos eficiente en CPT",
        c: "Desciende durante la espiración",
        d: "Participa en el incremento de la presión abdominal",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de los siguientes NO se considera un síntoma principal de EPOC?",
      answers: {
        a: "Disnea persistente",
        b: "Expectoración excesiva",
        c: "Dolor torácico intenso",
        d: "Tos crónica",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En la espirometría, ¿cuál de los siguientes parámetros NO es relevante para diagnosticar enfermedades obstructivas?",
      answers: {
        a: "VEF1",
        b: "Relación VEF1/CVF",
        c: "PIM",
        d: "FEF25-75",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En cuanto a las relaciones V/Q, ¿cuál de las siguientes afirmaciones es incorrecta?",
      answers: {
        a: "El espacio muerto alveolar corresponde a relaciones V/Q altas",
        b: "Relaciones V/Q bajas indican zonas con baja ventilación",
        c: "La relación ideal V/Q es 1 en todas las partes del pulmón",
        d: "V/Q indeterminado puede ocurrir en un shunt alveolar",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de los siguientes NO es un mecanismo de defensa antioxidante en el EPOC?",
      answers: {
        a: "Superóxido dismutasa",
        b: "Catalasa",
        c: "Glutatión peroxidasa",
        d: "Aumento de elastasa",
      },
      correctAnswer: "d",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre la presión transpulmonar (PL) es incorrecta?",
      answers: {
        a: "Es la diferencia entre la presión alveolar y la presión pleural",
        b: "Es mayor en la inspiración que en la espiración",
        c: "Es igual a la presión pleural en reposo",
        d: "Mantiene los pulmones abiertos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de los siguientes músculos NO se considera un músculo espiratorio?",
      answers: {
        a: "Intercostales internos",
        b: "Rectos abdominales",
        c: "Diafragma",
        d: "Oblicuos",
      },
      correctAnswer: "c",
    },
    {
      question:
        "El volumen de cierre en un paciente enfisematoso aumenta debido a todos los siguientes EXCEPTO:",
      answers: {
        a: "Reducción del retroceso elástico",
        b: "Mayor resistencia en las vías aéreas",
        c: "Aumento en la presión transmural",
        d: "Disminución de elastina",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre el volumen de reserva espiratorio (VRE) es incorrecta?",
      answers: {
        a: "Está disminuido en enfermedades obstructivas",
        b: "Es el aire que puede ser exhalado después de una espiración normal",
        c: "Aumenta en pacientes con EPOC",
        d: "Es menor en personas con atrapamiento de aire",
      },
      correctAnswer: "c",
    },
    {
      question: "La hiperventilación NO es característica de:",
      answers: {
        a: "Relaciones V/Q altas",
        b: "Hipoxia histotóxica",
        c: "Shock",
        d: "Hipoxemia",
      },
      correctAnswer: "b",
    },
    {
      question: "La función de la alfa-1 antitripsina NO incluye:",
      answers: {
        a: "Inhibir la elastasa de los neutrófilos",
        b: "Proteger el hígado del daño por tabaco",
        c: "Prevenir la destrucción de la elastina",
        d: "Evitar el enfisema en personas con su deficiencia",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de los siguientes parámetros NO aumenta en una enfermedad restrictiva pulmonar?",
      answers: {
        a: "Capacidad vital forzada (CVF)",
        b: "Relación VEF1/CVF",
        c: "Resistencia elástica",
        d: "Tensión en el tejido pulmonar",
      },
      correctAnswer: "a",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una característica del enfisema?",
      answers: {
        a: "Destrucción de los tabiques alveolares",
        b: "Aumento de la elastina",
        c: "Reducción del retroceso elástico",
        d: "Atrapamiento de aire",
      },
      correctAnswer: "b",
    },
    {
      question:
        "En una enfermedad pulmonar obstructiva, ¿cuál de las siguientes NO se esperaría encontrar en la espirometría?",
      answers: {
        a: "Aumento del volumen residual (VR)",
        b: "Reducción del VEF1",
        c: "Incremento en el volumen de reserva espiratorio",
        d: "Relación VEF1/CVF disminuida",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de los siguientes NO es un factor que contribuye a la hipertensión pulmonar en EPOC?",
      answers: {
        a: "Hipoxia alveolar",
        b: "Destrucción de tabiques alveolares",
        c: "Aumento del retroceso elástico",
        d: "Hipercapnia",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre el surfactante NO es cierta?",
      answers: {
        a: "Reduce la tensión superficial",
        b: "Es producido por neumocitos tipo I",
        c: "Previene la atelectasia",
        d: "Funciona como antiedema",
      },
      correctAnswer: "b",
    },
    {
      question: "La relación VEF1/CVF disminuida se observa principalmente en:",
      answers: {
        a: "Fibrosis pulmonar",
        b: "Enfisema",
        c: "Restricciones musculares",
        d: "Restricciones esqueléticas",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de las siguientes proteínas NO tiene actividad antioxidante en EPOC?",
      answers: {
        a: "Catalasa",
        b: "Superóxido dismutasa",
        c: "Elastasa",
        d: "Glutatión peroxidasa",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En el EPOC, ¿cuál de los siguientes NO es un desencadenante de exacerbaciones?",
      answers: {
        a: "Infecciones respiratorias",
        b: "Exposición a contaminantes",
        c: "Ejercicio moderado",
        d: "Climas fríos",
      },
      correctAnswer: "c",
    },
    {
      question: "La prueba de espirometría NO es útil para diagnosticar:",
      answers: {
        a: "Restricciones pulmonares",
        b: "EPOC",
        c: "Edema pulmonar",
        d: "Enfermedades obstructivas",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones NO es correcta sobre el asma y el EPOC?",
      answers: {
        a: "Ambos presentan limitación en el flujo aéreo",
        b: "El EPOC es irreversible mientras que el asma es reversible",
        c: "El EPOC es más común en jóvenes",
        d: "Ambos pueden causar disnea",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En EPOC, ¿cuál de las siguientes NO es una célula típicamente implicada?",
      answers: {
        a: "Macrófagos",
        b: "Linfocitos CD8+",
        c: "Neutrófilos",
        d: "Eosinófilos en todas las fases",
      },
      correctAnswer: "d",
    },
    {
      question:
        "La capacidad pulmonar total (CPT) disminuida NO es característica de:",
      answers: {
        a: "Fibrosis pulmonar",
        b: "EPOC",
        c: "Enfermedades restrictivas",
        d: "Restricciones extrapulmonares",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una consecuencia de la destrucción de tabiques alveolares en el enfisema?",
      answers: {
        a: "Reducción del área de intercambio gaseoso",
        b: "Aumento del retroceso elástico",
        c: "Atrapamiento de aire",
        d: "Disminución de la capacidad de difusión",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre la presión intrapleural es incorrecta?",
      answers: {
        a: "Es negativa en la inspiración",
        b: "Disminuye durante la espiración",
        c: "Evita el colapso pulmonar",
        d: "Es negativa en reposo",
      },
      correctAnswer: "b",
    },
    {
      question:
        "En una espirometría, ¿cuál de los siguientes NO es un parámetro que mide la función de vías aéreas grandes?",
      answers: {
        a: "VEF1",
        b: "PEF",
        c: "VRE",
        d: "Relación VEF1/CVF",
      },
      correctAnswer: "c",
    },
    {
      question:
        "En el asma inducida por ejercicio, ¿cuál de los siguientes NO es un factor contribuyente?",
      answers: {
        a: "Pérdida de vapor de agua",
        b: "Reducción de surfactante",
        c: "Enfriamiento de vías aéreas",
        d: "Liberación de leucotrienos",
      },
      correctAnswer: "b",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una característica de la histéresis pulmonar?",
      answers: {
        a: "Diferencia en la resistencia durante inspiración y espiración",
        b: "Mayor dificultad en la inspiración",
        c: "Desaparece en fibrosis pulmonar",
        d: "Depende de la tensión superficial",
      },
      correctAnswer: "c",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones sobre la curva flujo-volumen en la espirometría es incorrecta?",
      answers: {
        a: "El flujo espiratorio inicial depende del esfuerzo",
        b: "El FEF50 es más representativo de vías aéreas grandes",
        c: "La curva tiene un tramo independiente del esfuerzo",
        d: "El PEF mide el flujo máximo alcanzado",
      },
      correctAnswer: "b",
    },
  ];

  function displayQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (let letter in currentQuestion.answers) {
        answers.push(
          `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    questions.forEach((currentQuestion, questionNumber) => {
      const answerContainer =
        quizContainer.querySelectorAll(".answers")[questionNumber];
      const selectedOption = (
        quizContainer.querySelector(
          `input[name=question${questionNumber}]:checked`
        ) || {}
      ).value;

      // Marcar la respuesta correcta en verde
      answerContainer.querySelectorAll("label").forEach((label, index) => {
        const option = label.querySelector("input").value;
        if (option === currentQuestion.correctAnswer) {
          label.classList.add("correct");
        }
      });

      // Marcar la respuesta seleccionada en rojo si es incorrecta
      if (selectedOption && selectedOption !== currentQuestion.correctAnswer) {
        answerContainer
          .querySelector(`input[value=${selectedOption}]`)
          .parentElement.classList.add("incorrect");
      }
    });
  }

  submitButton.addEventListener("click", showResults);

  displayQuiz();
});
