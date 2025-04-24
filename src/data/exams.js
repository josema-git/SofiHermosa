export const exams = {
  antibioticsExam_partial1: {
    "examId": "antibioticsExam_partial1",
    "title": "Examen de Antibióticos (Muestra Parcial 1)",
    "description": "Primer bloque de 25 preguntas de selección múltiple sobre antibióticos basadas en las fuentes proporcionadas.",
    "questions": [
      {
        "question": "El mecanismo de acción del Linezolid se distingue de otros inhibidores de la síntesis proteica al unirse a la subunidad 50S y específicamente evitar:",
        "answers": {
          "a": "La producción de proteínas incorrectas",
          "b": "El ensamblaje de las subunidades ribosomales, alterando su inicio",
          "c": "La translocación del peptidil-tRNA",
          "d": "La unión del aminoacil-tRNA al sitio A",
          "e": "La liberación de la cadena peptídica"
        },
        "correctAnswer": "b",
        "explanation": "El Linezolid inhibe la síntesis proteica uniéndose a la subunidad 50s, evitando que se ensamblen las subunidades ribosomales y alterando su inicio [1]."
      },
      {
        "question": "Debido a su alta liposolubilidad, el Linezolid se distribuye muy bien en los tejidos. ¿Cuál es una implicación clínica de esta propiedad farmacocinética?",
        "answers": {
          "a": "Es el fármaco de elección para bacteriemias severas.",
          "b": "Se retiene muy poco en la sangre.",
          "c": "Requiere ajuste de dosis en pacientes obesos.",
          "d": "Alcanza concentraciones subóptimas en el líquido cefalorraquídeo.",
          "e": "Es propenso a interacciones medicamentosas a nivel de las glicoproteínas."
        },
        "correctAnswer": "b",
        "explanation": "El Linezolid tiene una biodisponibilidad oral e IV del 100% y es muy liposoluble, lo que causa que se distribuya a todos los tejidos y se retenga muy poco en la sangre [2]. Esto lo hace útil en infecciones de tejidos, pero poco útil en bacteriemias [2]."
      },
      {
        "question": "El Linezolid es conocido por algunos efectos secundarios relacionados con la duración del tratamiento. ¿Cuál de los siguientes efectos adversos se asocia principalmente con el uso de Linezolid por más de un mes?",
        "answers": {
          "a": "Trombocitopenia",
          "b": "Dolor gastrointestinal",
          "c": "Neuropatías sensitivas (extremidades u ojo)",
          "d": "Hipertensión",
          "e": "Acidosis láctica"
        },
        "correctAnswer": "c",
        "explanation": "La mielosupresión (principalmente trombocitopenia) por Linezolid se asocia con el uso mayor a 2 semanas [3]. Las neuropatías sensitivas en extremidades y ojo se asocian con el uso mayor a 1 mes [3]."
      },
      {
        "question": "El mecanismo de acción de los Macrólidos implica la inhibición de la síntesis proteica al unirse a la subunidad ribosomal 50S. Específicamente, este mecanismo bloquea el proceso de:",
        "answers": {
          "a": "Ensamblaje ribosomal",
          "b": "Terminación de la cadena peptídica",
          "c": "Translocación del peptidil-tRNA",
          "d": "Corte del DNA bacteriano",
          "e": "Síntesis de la pared celular"
        },
        "correctAnswer": "c",
        "explanation": "Los Macrólidos inhiben la síntesis proteica de la subunidad 50s, específicamente inhibiendo el proceso de translocación [4]."
      },
      {
        "question": "Para pacientes con infecciones por Haemophilus influenzae que presentan reacciones de hipersensibilidad a las penicilinas y cefalosporinas de primera/segunda generación, los Macrólidos (como Azitromicina o Claritromicina) pueden ser una alternativa. Sin embargo, el tratamiento de elección para H. influenzae, cuando es sensible, suele ser:",
        "answers": {
          "a": "Vancomicina",
          "b": "Trimetoprim-sulfametoxazol",
          "c": "Cefalosporinas de tercera generación",
          "d": "Ampicilina-sulbactam",
          "e": "Gentamicina"
        },
        "correctAnswer": "d",
        "explanation": "Aunque los Macrólidos son una alternativa para H. influenzae, las fuentes mencionan que las opciones de elección suelen ser Cefalosporinas de 2ª generación o Ampicilina-sulbactam [5]."
      },
      {
        "question": "Uno de los principales mecanismos de resistencia de los Macrólidos en bacterias Gram positivas y Gram negativas es la producción de enzimas que metilan el ribosoma en la posición 23S RNAr, afectando el sitio de unión del antibiótico. Este mecanismo está codificado principalmente por el gen:",
        "answers": {
          "a": "gyrA",
          "b": "erm",
          "c": "rpoB",
          "d": "msrA",
          "e": "parC"
        },
        "correctAnswer": "b",
        "explanation": "La resistencia a Macrólidos por metilación ribosomal (afectando la unión del antibiótico) se asocia con el gen erm, común en bacterias Gram positivas y Gram negativas [6]."
      },
      {
        "question": "Aunque la Clindamicina y los Macrólidos comparten el mismo sitio diana (subunidad ribosomal 50S), las fuentes desaconsejan su uso concomitante debido a:",
        "answers": {
          "a": "Un aumento del riesgo de nefrotoxicidad.",
          "b": "Posible interferencia en sus mecanismos de acción.",
          "c": "Un incremento significativo del riesgo de prolongación del QTc.",
          "d": "Potenciación del bloqueo neuromuscular.",
          "e": "Un aumento del metabolismo hepático de ambos fármacos."
        },
        "correctAnswer": "b",
        "explanation": "La Clindamicina y los Macrólidos tienen diferentes sitios de unión en la subunidad 50S, pero NO se recomienda su uso concomitante ya que pueden tener interferencia en su mecanismo de acción [7]."
      },
      {
        "question": "En el tratamiento de infecciones por Staphylococcus aureus resistente a Meticilina (SAMR), especialmente en entornos extrahospitalarios o como alternativa, la Clindamicina puede ser considerada. En el ámbito hospitalario, el fármaco de elección para SAMR suele ser:",
        "answers": {
          "a": "Penicilina G",
          "b": "Ciprofloxacino",
          "c": "Gentamicina",
          "d": "Vancomicina",
          "e": "Azitromicina"
        },
        "correctAnswer": "d",
        "explanation": "La Clindamicina se usa usualmente para S. aureus MR [8]. Sin embargo, la Vancomicina es el uso de elección hospitalaria para S. aureus MR [8]."
      },
      {
        "question": "En la Prueba D (D-test), si hay crecimiento bacteriano a las 24 horas en presencia de Eritromicina y la Clindamicina muestra un halo de inhibición achatado ('aplanado'), ¿qué mecanismo de resistencia se sugiere en la bacteria?",
        "answers": {
          "a": "Resistencia constitutiva del gen erm.",
          "b": "Presencia de bombas de eflujo (gen msrA).",
          "c": "Inactivación enzimática del antibiótico.",
          "d": "Resistencia inducible del gen erm.",
          "e": "Alteración en la permeabilidad de la membrana."
        },
        "correctAnswer": "d",
        "explanation": "Según la interpretación de la Prueba D, si la Clindamicina tiene un halo de inhibición achatado en presencia de Eritromicina, esto sugiere una resistencia inducible mediada por el gen erm [9]."
      },
      {
        "question": "La Clindamicina se metaboliza principalmente en el hígado y se excreta por vía biliar, manteniendo actividad en las heces por varios días luego de suspender el medicamento. Esta propiedad farmacocinética explica su asociación con el sobrecrecimiento de:",
        "answers": {
          "a": "Escherichia coli",
          "b": "Pseudomonas aeruginosa",
          "c": "Clostridioides difficile",
          "d": "Enterococcus faecium",
          "e": "Staphylococcus aureus"
        },
        "correctAnswer": "c",
        "explanation": "La excreción biliar de la Clindamicina y su actividad prolongada en las heces propician el sobrecrecimiento de Clostridium difficile, causa de diarrea y colitis pseudomembranosa [10]."
      },
      {
        "question": "¿Cuál de los siguientes Aminoglucósidos se menciona específicamente como de uso tópico debido a su alta toxicidad sistémica?",
        "answers": {
          "a": "Gentamicina",
          "b": "Amikacina",
          "c": "Estreptomicina",
          "d": "Tobramicina",
          "e": "Paromomicina"
        },
        "correctAnswer": "d",
        "explanation": "Las fuentes listan Tobramicina, Neomicina, y Netilmicina como Aminoglucósidos de uso tópico que son muy tóxicos sistémicamente [11]."
      },
      {
        "question": "Los Aminoglucósidos cubren principalmente bacterias Gram negativas aerobias debido a su mecanismo de ingreso a través de la membrana celular, el cual es:",
        "answers": {
          "a": "Difusión pasiva",
          "b": "Transportadores dependientes de ATP",
          "c": "Bombas de eflujo",
          "d": "Sistema de secreción tipo III",
          "e": "Difusión facilitada por porinas"
        },
        "correctAnswer": "b",
        "explanation": "En las bacterias Gram negativas, después de pasar por las porinas, la membrana celular es atravesada por medio de transportadores dependientes de ATP, lo que explica que cubran más a las aerobias [12]."
      },
      {
        "question": "Aunque los Aminoglucósidos son primariamente activos contra Gram negativos aerobios, también pueden ser útiles contra algunos Gram positivos en terapia combinada. ¿Con qué tipo de antibióticos se suelen combinar los Aminoglucósidos para tratar ciertas infecciones por Gram positivos como S. aureus o Enterococos?",
        "answers": {
          "a": "Macrólidos",
          "b": "Quinolonas",
          "c": "Tetraciclinas",
          "d": "Inhibidores de la pared celular (ej: Vancomicina)",
          "e": "Nitroimidazoles"
        },
        "correctAnswer": "d",
        "explanation": "Los Aminoglucósidos son útiles en Gram positivos en terapia combinada con inhibidores de la pared, como la Vancomicina, para tratar Staphylococcus aureus o Enterococos [13]."
      },
      {
        "question": "¿Cuál de los siguientes sitios del cuerpo es mencionado en las fuentes como uno al que los Aminoglucósidos NO penetran fácilmente, aunque pueden ser aceptables en recién nacidos?",
        "answers": {
          "a": "Riñón",
          "b": "Oído interno",
          "c": "Líquido cefalorraquídeo (SNC)",
          "d": "Sangre",
          "e": "Hueso"
        },
        "correctAnswer": "c",
        "explanation": "Los Aminoglucósidos no penetran fácilmente tejidos como pulmón, ojo o SNC (aunque puede ser aceptable en recién nacidos) [14]. Se concentran en riñón y oído interno [15]."
      },
      {
        "question": "Los Aminoglucósidos se concentran en el riñón y el oído interno debido a la presencia de transportadores y canales específicos. En el riñón, ¿a qué estructuras celulares se unen principalmente para ser filtrados e internalizados?",
        "answers": {
          "a": "Glomérulos",
          "b": "Podocitos",
          "c": "Células tubulares proximales (vía receptores de megalina)",
          "d": "Asa de Henle",
          "e": "Conductos colectores"
        },
        "correctAnswer": "c",
        "explanation": "La nefrotoxicidad por Aminoglucósidos ocurre porque en las células tubulares (renales), el medicamento se filtra y entra por transportadores con receptores de megalina y cubulina [16]."
      },
      {
        "question": "¿Cuál Aminoglucósido es específicamente señalado en las fuentes como el más tóxico a nivel coclear (pérdida de audición, especialmente a altas frecuencias)?",
        "answers": {
          "a": "Gentamicina",
          "b": "Estreptomicina",
          "c": "Amikacina",
          "d": "Neomicina",
          "e": "Tobramicina"
        },
        "correctAnswer": "c",
        "explanation": "Respecto a la ototoxicidad coclear de los Aminoglucósidos, las fuentes indican que la Amikacina es la más tóxica [17]."
      },
      {
        "question": "El mecanismo de acción de las Tetraciclinas implica la unión a la subunidad ribosomal 30S. Además de esto, ¿qué otro proceso clave de la síntesis proteica bacteriana alteran?",
        "answers": {
          "a": "La formación de la cadena peptídica.",
          "b": "La liberación de los factores de liberación.",
          "c": "El sitio de reconocimiento de la ARN transferasa.",
          "d": "El ensamblaje de las subunidades ribosomales 30S y 50S.",
          "e": "La unión de los factores de inicio."
        },
        "correctAnswer": "c",
        "explanation": "Las Tetraciclinas se unen a la subunidad 30s y alteran el sitio de reconocimiento de la ARN transferasa [18]."
      },
      {
        "question": "Las Tetraciclinas de segunda generación (Doxiciclina y Minociclina) son particularmente útiles contra gérmenes intracelulares. ¿Cuál de los siguientes patógenos intracelulares es un objetivo terapéutico común para estas tetraciclinas?",
        "answers": {
          "a": "Mycobacterium tuberculosis",
          "b": "Plasmodium falciparum",
          "c": "Legionella pneumophila",
          "d": "Cryptococcus neoformans",
          "e": "Pneumocystis jiroveci"
        },
        "correctAnswer": "c",
        "explanation": "Las fuentes listan a Legionella, Chlamydia, Mycoplasma pneumoniae y Ureaplasma como gérmenes intracelulares cubiertos por las Tetraciclinas de segunda generación [19]."
      },
      {
        "question": "La Tigeciclina (tercera generación de Tetraciclinas) tiene un espectro ampliado útil contra bacterias multirresistentes. ¿Contra cuál de los siguientes patógenos es activa la Tigeciclina, incluso cuando presenta resistencia a otros antibióticos?",
        "answers": {
          "a": "Pseudomonas aeruginosa",
          "b": "Proteus mirabilis",
          "c": "Acinetobacter",
          "d": "Morganella morganii",
          "e": "Stenotrophomonas maltophila"
        },
        "correctAnswer": "c",
        "explanation": "La Tigeciclina cubre Enterobacterias (excepto Proteus-Morganella-Prov), Acinetobacter, Aeromona e Burkholderia [20]. Las fuentes especifican que NO cubre Pseudomonas [21]."
      },
      {
        "question": "Las Tetraciclinas orales tienen afinidad por cationes divalentes como el Calcio y el Magnesio. ¿Cuál es la principal recomendación al administrar Tetraciclinas orales para evitar una reducción significativa de su absorción?",
        "answers": {
          "a": "Administrar siempre con alimentos.",
          "b": "Tomar con jugos cítricos.",
          "c": "Evitar la ingesta concomitante de productos lácteos o antiácidos que contengan Calcio o Magnesio.",
          "d": "Administrar sublingualmente.",
          "e": "Tomar con bebidas carbonatadas."
        },
        "correctAnswer": "c",
        "explanation": "Las Tetraciclinas tienen afinidad por cargas positivas como el Ca o el Mg (presentes en lácteos o antiácidos), que pueden unirse a la tetraciclina y alterar su absorción. No se recomienda tomarlas con lácteos [22]."
      },
      {
        "question": "El uso de Tetraciclinas, especialmente las vencidas, se ha asociado con un síndrome tubular renal adquirido conocido como Síndrome de Fanconi-Like. ¿Cuál de los siguientes es un hallazgo característico de este síndrome?",
        "answers": {
          "a": "Alcalosis metabólica",
          "b": "Hiperpotasemia",
          "c": "Hematuria macroscópica",
          "d": "Glucosuria y aminoaciduria con normoglicemia",
          "e": "Proteinuria masiva (rango nefrótico)"
        },
        "correctAnswer": "d",
        "explanation": "Cuando se administra medicamento vencido (Tetraciclinas), puede producirse el Síndrome Fanconi Like, caracterizado por acidosis, glucosuria, aminoaciduria e hipofosfatemia [23]."
      },
      {
        "question": "¿Cuál de los siguientes medicamentos pertenecientes al grupo de las Sulfas se utiliza comúnmente en formulaciones tópicas para el tratamiento de quemaduras, con el fin de evitar la colonización de infecciones?",
        "answers": {
          "a": "Sulfametoxazol",
          "b": "Sulfadiazina de plata",
          "c": "Sulfacetamida",
          "d": "Sulfadoxina",
          "e": "Sulfasalazina"
        },
        "correctAnswer": "b",
        "explanation": "Entre los medicamentos del grupo Sulfa, la Sulfadiazina de plata se utiliza tópicamente para quemaduras, evitando la colonización de infecciones [24]."
      },
      {
        "question": "El Trimetoprim-Sulfametoxazol (TSM) es una combinación bactericida. ¿Cómo se metabolizan principalmente los componentes de esta combinación, según las fuentes?",
        "answers": {
          "a": "Por hidrólisis enzimática.",
          "b": "Por acetilación en el hígado.",
          "c": "Por conjugación con ácido glucurónico.",
          "d": "Principalmente sin cambios por vía renal.",
          "e": "Por oxidación mediada por la enzima PFOR."
        },
        "correctAnswer": "b",
        "explanation": "El metabolismo hepático del Sulfametoxazol y el Trimetoprim ocurre principalmente por acetilación (mediada por CYP2C9 y 3A4) [25, 26]."
      },
      {
        "question": "El Trimetoprim y el Sulfametoxazol inhiben la enzima CYP2C9. Esta interacción farmacológica puede ser relevante en pacientes que reciben medicamentos metabolizados por esta vía. ¿Cuál de los siguientes medicamentos es mencionado como uno cuyo efecto hipoglucemiante puede verse aumentado por el TSM?",
        "answers": {
          "a": "Metadona",
          "b": "Warfarina",
          "c": "Clozapina",
          "d": "Sulfonilureas",
          "e": "Rifampicina"
        },
        "correctAnswer": "d",
        "explanation": "Las fuentes mencionan que el TSM inhibe el CYP2C9 y que interacciones incluyen el aumento del efecto hipoglucemiante de las Sulfonilureas [27]."
      },
      {
        "question": "Las Quinolonas de segunda generación, como la Ciprofloxacina, son activas contra varios patógenos. ¿Para cuál de los siguientes patógenos intracelulares se menciona la Ciprofloxacina como una opción de elección?",
        "answers": {
          "a": "Chlamydia trachomatis",
          "b": "Mycoplasma pneumoniae",
          "c": "Rickettsia rickettsii",
          "d": "Legionella pneumophila",
          "e": "Coxiella burnetii"
        },
        "correctAnswer": "d",
        "explanation": "Las fuentes listan a Legionella como un patógeno para el cual las Quinolonas de segunda generación son una opción de elección [28]."
      },
      {
        "question": "¿Cuál es la combinación medicamento-efecto adverso MENOS PROBABLE según las fuentes?",
        "answers": {
          "a": "Moxifloxacino y disfunción renal",
          "b": "Metronidazol y efecto antabuse",
          "c": "Estreptomicina y tinitus",
          "d": "Clindamicina y colitis pseudomembranosa",
          "e": "TSM y anemia por deficiencia de folatos"
        },
        "correctAnswer": "a",
        "explanation": "Según las fuentes, la respuesta correcta identificada es Moxifloxacino y disfunción renal [1]. Otras combinaciones como Metronidazol y efecto antabuse [2], Estreptomicina y tinitus (ototoxicidad coclear) [3], Clindamicina y colitis pseudomembranosa [4], y TSM y anemia por deficiencia de folatos [5] son efectos adversos conocidos."
      },
      {
        "question": "La presencia de cationes divalentes suelen disminuir la eficacia de los siguientes medicamentos, ya sea por alterar la absorción, la distribución o el espectro de actividad o incluso, en algunos casos podrían ser responsables de toxicidad. Se exceptúa UNO de ellos, ya que no se ve afectada la eficacia o la seguridad por la presencia de estos cationes. ¿Cuál es?",
        "answers": {
          "a": "Amikacina",
          "b": "Trimetoprim sulfa-metoxazol",
          "c": "Ciprofloxacino",
          "d": "Doxiciclina",
          "e": "Tigeciclina"
        },
        "correctAnswer": "b",
        "explanation": "Según las fuentes, el Trimetoprim sulfa-metoxazol es la excepción; su eficacia o seguridad no se ve afectada por la presencia de cationes divalentes [1, 6]. Otros medicamentos como Ciprofloxacino [7], Doxiciclina [8], y Tigeciclina [8] (si se dieran por VO) pueden tener su absorción alterada por cargas positivas. La Amikacina es un aminoglucósido y su absorción oral es mala [9], aunque la interacción con cationes no se menciona explícitamente en este contexto."
      },
      {
        "question": "Las sulfas tienen hoy día una alta probabilidad de resistencia debido a que, entre otras cosas, las bacterias suelen:",
        "answers": {
          "a": "Producir mutaciones de la tetrahidrofolato reductasa",
          "b": "Aumentar la producción de ácido para-aminobenzoico",
          "c": "Aumentar la síntesis de enzimas que degradan a las sulfas",
          "d": "Disminuir la síntesis de purinas",
          "e": "Oxidar al glutatión"
        },
        "correctAnswer": "b",
        "explanation": "Según las fuentes, uno de los mecanismos de resistencia de las sulfas es la sobreproducción de PABA (ácido para-aminobenzoico) [10]. Las sulfas actúan como análogos del PABA inhibiendo la síntesis de ácido fólico [11]."
      },
      {
        "question": "Ciertas interacciones medicamentosas son comunes cuando se prescriben antibióticos. Una de las siguientes relaciones antibiótico-mecanismo de interacción es CORRECTA:",
        "answers": {
          "a": "Trimetoprim-sulfametoxazol: interacción por competencia en la secreción tubular",
          "b": "Rifampicina: interacción por inhibición de la CYP 1A2",
          "c": "Ciprofloxacino: interacción por inducción de la CYP 1A2",
          "d": "Metronidazol: interacción por inhibir la alcohol deshidrogenasa",
          "e": "Minociclina: interacción por inhibir a la glicoproteína p"
        },
        "correctAnswer": "a",
        "explanation": "Según las fuentes, la interacción correcta es Trimetoprim-sulfametoxazol por competencia en la secreción tubular [12, 13]. El Trimetoprim compite con la eliminación de K+ porque las sulfas se secretan [12]. El Metronidazol causa efecto antabuse por inhibir enzimas como la alcohol deshidrogenasa, pero la fuente indica 'Metronidazol: interacción por inhibir la alcohol deshidrogenasa' como incorrecta en el examen [13]. La Ciprofloxacino inhibe la CYP1A2, no la induce [7]. La Rifampicina induce CYP3A4, 1A2, 2C, 2D6, no inhibe la CYP1A2 [14]. La interacción de Minociclina con glicoproteína p no se menciona explícitamente en las fuentes."
      },
      {
        "question": "Medicamento que tienen mayor capacidad de inducir reacciones tipo Lupus:",
        "answers": {
          "a": "Sulfa",
          "b": "Gentamicina",
          "c": "Metronidazol",
          "d": "Moxifloxacino",
          "e": "Minociclina"
        },
        "correctAnswer": "a",
        "explanation": "Las fuentes indican que las sulfas pueden inducir LUPUS [5]. La Minociclina también puede causar reacciones inmunológicas como LES (Lupus Eritematoso Sistémico) [15, 16]. Sin embargo, la respuesta correcta identificada en el examen es Sulfa [17]."
      },
      {
        "question": "Factor de riesgo para presentar lesiones tendinosas por quinolonas:",
        "answers": {
          "a": "Uso concomitante con esteroides",
          "b": "Recibir concomitantemente clindamicina",
          "c": "Tratamiento de pseudomona",
          "d": "Uso concomitante con aminoglucósidos",
          "e": "Uso intravenoso"
        },
        "correctAnswer": "a",
        "explanation": "Los factores de riesgo para tendinitis y ruptura tendinosa por quinolonas incluyen ser mayor de 60 años, uso de esteroides y ser recipiente de trasplante [17-19]."
      },
      {
        "question": "Una de las siguientes condiciones facilita la eficacia de los nitroimidazoles:",
        "answers": {
          "a": "Consumo de etanol",
          "b": "Uso concomitantemente de vitamina B6",
          "c": "Tener infección por gérmenes con baja oxigenación",
          "d": "Que la bacteria tenga deficiencias en la nitro-reductasa NADPH",
          "e": "El uso concomintante con aminoglucósidos"
        },
        "correctAnswer": "c",
        "explanation": "El mecanismo de acción de los nitroimidazoles implica la reducción de sus grupos nitro por la enzima PFOR, que se activan en medios anaerobios (baja oxigenación) [19-21]."
      },
      {
        "question": "Medicamento cuyo mecanismo de acción NO SE CARACTERIZA por interactuar con las subunidades ribosomales directamente:",
        "answers": {
          "a": "Doxiciclina",
          "b": "Estreptomicina",
          "c": "Claritromicina",
          "d": "Ciprofloxacino",
          "e": "Linezolid"
        },
        "correctAnswer": "d",
        "explanation": "La Doxiciclina [22], Estreptomicina [23], Claritromicina (un macrólido) [24], y Linezolid [25] actúan inhibiendo la síntesis proteica al unirse directamente a subunidades ribosomales (30s o 50s). El Ciprofloxacino (una quinolona) inhibe la DNA girasa y la topoisomerasa IV, enzimas relacionadas con el ADN, no con los ribosomas [21, 26]."
      },
      {
        "question": "En infecciones por Borrelia se prefiere el uso de:",
        "answers": {
          "a": "Clindamicina",
          "b": "Trimetoprim sulfametoxazol",
          "c": "Linezolid",
          "d": "Doxiciclina",
          "e": "Delafloxacina"
        },
        "correctAnswer": "d",
        "explanation": "Según las fuentes, la Doxiciclina es una opción (casos leves) [27] y se identifica como la respuesta correcta preferida en el examen [21]."
      },
      {
        "question": "Elija la combinación medicamento-efecto adverso MÁS PROBABLE",
        "answers": {
          "a": "Clindamicina--síndrome del hombre rojo",
          "b": "Ciprofloxacino- ruptura del tendón de Aquiles",
          "c": "Linezolid-Lupus inducido por fármacos",
          "d": "Trimetoprim sulfametoxazol - inducción del SOME",
          "e": "Minociclina - fibrosis pulmonar"
        },
        "correctAnswer": "b",
        "explanation": "Según las fuentes, la ruptura del tendón de Aquiles es un efecto adverso conocido del Ciprofloxacino (una quinolona) [18, 28]. El síndrome del hombre rojo se asocia a Vancomicina (no cubierta en detalle en estas fuentes). El Linezolid puede causar mielosupresión o neuropatías, no se asocia a Lupus [25, 29]. El Trimetoprim sulfametoxazol se asocia a Lupus inducido por sulfas [5], no a inducción del SOME (Micobacterias oportunistas relacionadas con S. aureus, no un efecto adverso per se). La fibrosis pulmonar no se menciona como un efecto adverso principal de la Minociclina en estas fuentes."
      },
      {
        "question": "Las tetraciclinas se parecen a los aminoglucósidos en que:",
        "answers": {
          "a": "Se unen irreversiblemente a la misma subunidad ribosomal",
          "b": "Tienen efecto post-antibiótico",
          "c": "Tienen mayor eliminación sin cambios por orina",
          "d": "Producen bloqueo neuromuscular",
          "e": "Tienen cobertura para anaerobios"
        },
        "correctAnswer": "b",
        "explanation": "Tanto las Tetraciclinas [8] como los Aminoglucósidos [30] tienen efecto post-antibiótico. Las Tetraciclinas se unen a la subunidad 30s [22], los Aminoglucósidos se unen irreversiblemente a la subunidad 30s [23]; la unión irreversible es específica de Aminoglucósidos. Las Tetraciclinas tienen bajas concentraciones en orina [15], mientras que los Aminoglucósidos se eliminan principalmente sin cambios por vía renal [9]. El bloqueo neuromuscular es un efecto adverso raro de los Aminoglucósidos [31] y no se menciona para las Tetraciclinas. Las Tetraciclinas tienen cubrimiento variable para algunos anaerobios [32, 33], mientras que los Aminoglucósidos tienen actividad limitada o nula en medios anaerobios [23, 34]."
      },
      {
        "question": "En el diagnóstico de neumonía por Streptococo pneumoniae resistente a penicilinas, tiene utilidad el uso de:",
        "answers": {
          "a": "Moxifloxacino",
          "b": "Claritromicina",
          "c": "Clindamicina",
          "d": "Ciprofloxacino",
          "e": "Doxiciclina"
        },
        "correctAnswer": "a",
        "explanation": "Las fuentes indican que las quinolonas de tercera generación como Moxifloxacino tienen actividad contra neumococo penicilino resistente [35]. La Claritromicina (macrólido) se usa para neumococos sensibles a penicilinas [24] o como alternativa para Streptococcus [36]; la Clindamicina se usa para Estreptococos pero no mucho y no se menciona específicamente para resistentes [37]; la Doxiciclina es una alternativa para Streptococcus pneumoniae [22]; Ciprofloxacino tiene menos actividad sobre gram positivos que Moxifloxacino [26]."
      },
      {
        "question": "La infusión rápida de aminoglucósidos suele producir mayor riesgo de:",
        "answers": {
          "a": "Sordera",
          "b": "Nefrotoxicidad",
          "c": "Bloqueo neuromuscular",
          "d": "Compromiso vestibular",
          "e": "Bradicardia"
        },
        "correctAnswer": "c",
        "explanation": "El bloqueo neuromuscular, por inhibición de la liberación presináptica de acetilcolina, puede ocurrir con infusión rápida de aminoglucósidos, especialmente en niños [31, 38, 39]."
      },
      {
        "question": "Con relación a los mecanismos de acción de los antibióticos es CIERTO que:",
        "answers": {
          "a": "Linezolid inhibe la transpeptidasa bacteriana",
          "b": "Tigeciclina inhibe la transglicosidasa",
          "c": "Metronidazol inhibe la RNA polimerasa",
          "d": "Moxifloxacino inhibe la síntesis del DNA",
          "e": "Rifampicina aumenta la síntesis de ROS",
          "f": "Tobramicina inhibe la síntesis proteica al inhibir la subunidad ribosomal 50 S"
        },
        "correctAnswer": "d",
        "explanation": "El Moxifloxacino (una quinolona) inhibe la síntesis del DNA al afectar la DNA girasa y la topoisomerasa IV [26, 39, 40]. Linezolid [25] y Tigeciclina [22] (una tetraciclina de 3ra gen) inhiben la síntesis proteica. El Metronidazol daña el DNA, pero no inhibe la RNA polimerasa [20]. La Rifampicina inhibe la RNA polimerasa [41], no aumenta la síntesis de ROS (radicales libres de oxígeno), aunque las quinolonas los generan [26]. Tobramicina (un aminoglucósido) inhibe la síntesis proteica al unirse a la subunidad 30S, no la 50S [23]."
      },
      {
        "question": "Es CIERTO QUE:",
        "answers": {
          "a": "La amikacina está contraindicada en encefalopatía hepática",
          "b": "Metronidazol se comporta como profármaco",
          "c": "La claritromicina inhibe la CYP 2C9",
          "d": "El principal mecanismo de resistencia de la clindamicina consiste en producir enzimas que degraden al fármaco",
          "e": "El mecanismo de nefrotoxicidad por amikacina principal está explicado porque produce glomerulopatía"
        },
        "correctAnswer": "b",
        "explanation": "Según las fuentes, el Metronidazol tiene grupos nitro que se reducen por enzimas bacterianas para activarse, comportándose como un profármaco [20, 40]. La Amikacina (un aminoglucósido) no se menciona como contraindicada en encefalopatía hepática; la Rifaximina se usa para la encefalopatía hepática [42]. La Claritromicina inhibe la CYP3A4, no la 2C9 (aunque el SMX/TMP sí inhibe la 2C9) [5, 10]. El principal mecanismo de resistencia de la clindamicina es la alteración del sitio de unión ribosomal (gen erm), no la degradación enzimática [43]. La nefrotoxicidad por amikacina se explica por toxicidad tubular, no por glomerulopatía [44]."
      },
      {
        "question": "Uno de los siguientes enunciados es VERDADERO. Señálelo.",
        "answers": {
          "a": "La clindamicina cubre al Clostridium difficile",
          "b": "El trimetoprim inhibe la dihidropteroato sintasa",
          "c": "Los aminoglucósidos antagonizan a la acción de las penicilinas",
          "d": "Los aminoglucósidos tienen penetrabilidad deficiente en medio ácido",
          "e": "La rifaximina aumenta el riesgo de recurrencias en infecciones por C. difficile"
        },
        "correctAnswer": "d",
        "explanation": "Según las fuentes, la acción de los aminoglucósidos se repela e inhibe en medios anaerobios que tienen muchas cargas positivas (H+), es decir, medios ácidos [23, 34, 45]. La Clindamicina puede causar sobrecrecimiento de C. difficile [4] y el C. difficile resistente está mencionado como una opción [37]; el tratamiento de C. difficile incluye Metronidazol, Vancomicina oral, Fidaxomicina y Rifaximina para recurrencias [33, 46]. El trimetoprim inhibe la folato reductasa (dihidrofolato reductasa), mientras que el sulfametoxazol inhibe la dihidropteroato sintasa [11, 47]. Los aminoglucósidos se usan en terapia combinada con inhibidores de la pared (como penicilinas/vancomicina) para algunos Gram +, no antagonizan [34]."
      },
      {
        "question": "Pueden ser útiles en infecciones en piel por Staphylococcus aureus meticilino resistente (puede haber una o varias respuestas):",
        "answers": {
          "a": "Delafloxacina",
          "b": "Trimetoprim sulfametoxazol",
          "c": "Linezolid",
          "d": "Eritromicina",
          "e": "Ciprofloxacino",
          "f": "Clindamicina"
        },
        "correctAnswer": ["a", "b", "c", "f"],
        "explanation": "Las fuentes mencionan que Linezolid es útil para infecciones por SAMR, incluyendo infecciones de piel [25, 29]. Delafloxacina es útil en infecciones de piel [20]. Trimetoprim sulfametoxazol puede ser útil para S. aureus (sensibilidad variable) [48]. Clindamicina se usa para Staphylococcus aureus MS y MR (usualmente) [4, 37]. Eritromicina se usa para SAMS [24]. Ciprofloxacino no se usa para SAMS [49], y no se menciona específicamente para SAMR."
      },
      {
        "question": "En una infección en la que se sospecha co-infección con Bacteroides fragilis y Fusobacterium puede ser útil uno de los siguientes fármacos:",
        "answers": {
          "a": "Amikacina",
          "b": "Ampicilina-sulbactam",
          "c": "Vancomicina",
          "d": "Doxiciclina",
          "e": "Trimetoprim sulfa-metoxazol"
        },
        "correctAnswer": "b",
        "explanation": "Según las fuentes, para Bacteroides fragilis y Fusobacterium, que son anaerobios Gram negativos [43, 50, 51], las opciones de tratamiento incluyen Betalactámicos con IBL (como Ampicilina-sulbactam), Carbapenems, Clindamicina y Metronidazol [51]. La Amikacina es para aerobios Gram negativos [34]. La Vancomicina es para Gram positivos [25]. La Doxiciclina cubre algunos anaerobios como Cutibacterium acnes [22] pero no se menciona como de elección para B. fragilis o Fusobacterium. El TSM no tiene cobertura para anaerobios [52]."
      },
      {
        "question": "Si un paciente tiene una neumonía por Mycoplasma pneumoniae, entre los siguientes medicamentos, ¿cuál es menos probable que sea útil?",
        "answers": {
          "a": "Linezolid",
          "b": "Levofloxacino",
          "c": "Doxiciclina",
          "d": "Claritromicina",
          "e": "Minociclina"
        },
        "correctAnswer": "a",
        "explanation": "Mycoplasma pneumoniae es un germen intracelular/atípico [27, 53]. Los medicamentos útiles incluyen Macrólidos (Claritromicina [24, 36]), Tetraciclinas (Doxiciclina [27], Minociclina [27]) y Quinolonas (Levofloxacino [49]). Linezolid es útil para cocos gram positivos, incluyendo neumococos resistentes y micobacterias, Listeria y nocardia [25], pero no se menciona específicamente para Mycoplasma pneumoniae en las fuentes."
      },
      {
        "question": "Paciente con infección por Listeria. El tratamiento de elección serían las penicilinas, sin embargo, en pacientes con alergias mediadas por IgE sería más recomendable usar:",
        "answers": {
          "a": "Trimetoprim sulfametoxazol",
          "b": "Amikacina",
          "c": "Minociclina",
          "d": "Ciprofloxacino",
          "e": "Clindamicina"
        },
        "correctAnswer": "a",
        "explanation": "Para Listeria monocytogenes, las fuentes mencionan TSM como alternativa en alergias a penicilinas [48, 52, 54] y también se menciona como cubierta por Rifampicina [41]. Los Aminoglucósidos (Amikacina) se usan en terapia combinada para Listeria [34]. Minociclina es una tetraciclina de 2da generación que no se menciona específicamente para Listeria. Ciprofloxacino (quinolona) no se menciona para Listeria. Clindamicina es para gram positivos aerobios y anaerobios [37, 55], pero Listeria no se lista entre sus usos principales."
      },
      {
        "question": "¿Cuál o cuáles de los siguientes medicamentos tiene o tienen cobertura para anaerobios? Puede haber más de una respuesta.",
        "answers": {
          "a": "TSM",
          "b": "Ampicilina sulbactam",
          "c": "Piptazo",
          "d": "Amikacina",
          "e": "Clindamicina"
        },
        "correctAnswer": ["b", "c", "e"],
        "explanation": "Las fuentes indican que Clindamicina es la primera opción para anaerobios [37, 52]. Betalactámicos con IBL (como Ampicilina sulbactam y Piptazo/Carbapenem) se usan para anaerobios como Bacteroides fragilis [51, 56]. TSM no tiene cobertura para anaerobios [52]. Amikacina (un aminoglucósido) tiene acción limitada en medios anaerobios [23, 34, 52]."
      },
      {
        "question": "Hombre de 25 años al que se le sospecha absceso cerebral por anaerobios gramnegativos. Entre los siguientes, el tratamiento que mejor cubriría estos gérmenes sería:",
        "answers": {
          "a": "Amikacina",
          "b": "Clindamicina",
          "c": "Trimetoprim sulfametoxazol",
          "d": "Meropenem",
          "e": "Vancomicina"
        },
        "correctAnswer": "d",
        "explanation": "Los abscesos cerebrales por extensión de sinusitis, otitis o mastoiditis pueden ser por anaerobios Gram negativos como Fusobacterium y Prevotella [57, 58]. Las opciones para anaerobios incluyen Betalactámicos con IBL y Carbapenems [51]. Meropenem es un Carbapenem. La Clindamicina cubre anaerobios [37], pero puede tener penetración variable al SNC [59]. Amikacina es para aerobios [34]. TSM no cubre anaerobios [52]. Vancomicina es para Gram positivos [25]."
      },
      {
        "question": "Uno de los siguientes medicamentos NO tiene actividad antipseudomona:",
        "answers": {
          "a": "Tigeciclina",
          "b": "Ciprofloxacino",
          "c": "Levofloxacino",
          "d": "Amikacina"
        },
        "correctAnswer": "a",
        "explanation": "Las fuentes indican que la Tigeciclina NO cubre Pseudomona [60, 61]. Ciprofloxacino [49], Levofloxacino [26], y Amikacina [34] sí tienen actividad contra Pseudomona aeruginosa (Amikacina y Ciprofloxacino se mencionan específicamente)."
      },
      {
        "question": "Según las fuentes, ¿cuál es una característica distintiva de los antibióticos que inhiben la síntesis proteica en bacterias en comparación con las células humanas?",
        "answers": {
          "a": "Se unen a las subunidades ribosomales 80s humanas.",
          "b": "Son afines a las subunidades ribosomales bacterianas 30s y 50s, que se ensamblan en ribosomas 70s.",
          "c": "Inhiben la síntesis de peptidoglicano en la pared celular.",
          "d": "Afectan la síntesis de ADN bacteriano.",
          "e": "Se metabolizan rápidamente en el hígado humano."
        },
        "correctAnswer": "b",
        "explanation": "La mayoría de los medicamentos que inhiben la síntesis proteica son afines a los ribosomas bacterianos, específicamente a las subunidades 30s y 50s que se ensamblan en un ribosoma 70s, que son diferentes de los ribosomas humanos [62]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción antibiótico del Linezolid, según las fuentes?",
        "answers": {
          "a": "Inhibe la síntesis de la pared celular bacteriana.",
          "b": "Se une a la subunidad ribosomal 50s, evitando el ensamblaje de las subunidades y alterando el inicio de la síntesis proteica.",
          "c": "Inhibe la DNA girasa y la topoisomerasa IV.",
          "d": "Inhibe la RNA polimerasa dependiente de DNA.",
          "e": "Altera la síntesis de ácido fólico."
        },
        "correctAnswer": "b",
        "explanation": "El Linezolid inhibe la síntesis proteica uniéndose a la subunidad 50s, lo que evita que se ensamblen las subunidades ribosomales y altera su inicio [25]."
      },
      {
        "question": "Según las fuentes, ¿en qué tipo de infección por Enterococcus es particularmente útil el Linezolid?",
        "answers": {
          "a": "Enterococcus faecalis sensible a penicilinas.",
          "b": "Enterococcus faecium resistente a vancomicina.",
          "c": "Cualquier infección por Enterococcus.",
          "d": "Enterococcus resistente únicamente a fosfomicina.",
          "e": "Enterococcus que afecta el tracto gastrointestinal."
        },
        "correctAnswer": "b",
        "explanation": "El Linezolid es útil en infecciones por Enterococcus faecium resistentes a vancomicina [25]."
      },
      {
        "question": "¿Cuál es un efecto secundario importante del Linezolid con el uso prolongado (mayor a 2 semanas) según las fuentes?",
        "answers": {
          "a": "Hepatitis colestásica.",
          "b": "Bloqueo neuromuscular.",
          "c": "Cristaluria.",
          "d": "Mielosupresión, principalmente trombocitopenia.",
          "e": "Ruptura tendinosa."
        },
        "correctAnswer": "d",
        "explanation": "Uno de los efectos secundarios del Linezolid con el uso mayor a 2 semanas es la mielosupresión, principalmente trombocitopenia [29]."
      },
      {
        "question": "Según las fuentes, ¿cómo es la distribución tisular del Linezolid?",
        "answers": {
          "a": "Se retiene principalmente en la sangre y tiene baja liposolubilidad.",
          "b": "Tiene baja biodisponibilidad oral e intravenosa.",
          "c": "Es muy liposoluble, se distribuye a todos los tejidos y se retiene poco en la sangre, siendo útil en infecciones de tejidos.",
          "d": "Alcanza altas concentraciones en la orina, siendo útil en infecciones urinarias.",
          "e": "Penetra fácilmente el SNC y es la primera opción para meningitis."
        },
        "correctAnswer": "c",
        "explanation": "El Linezolid tiene biodisponibilidad oral e IV del 100%, es muy liposoluble y se distribuye a todos los tejidos, reteniéndose poco en la sangre, lo que lo hace útil en infecciones de tejidos [63]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción de los Macrólidos, como la Eritromicina, Claritromicina y Azitromicina, según las fuentes?",
        "answers": {
          "a": "Inhiben la síntesis de ácido fólico bacteriano.",
          "b": "Inhiben la síntesis de la pared celular.",
          "c": "Inhiben la subunidad ribosomal 50s, específicamente el proceso de translocación.",
          "d": "Inhiben la subunidad ribosomal 30s, alterando el sitio de reconocimiento del ARNt.",
          "e": "Dañan directamente el ADN bacteriano en medios anaerobios."
        },
        "correctAnswer": "c",
        "explanation": "Los Macrólidos inhiben la síntesis proteica al unirse a la subunidad ribosomal 50s, inhibiendo específicamente el proceso de translocación [24]."
      },
      {
        "question": "Las fuentes mencionan usos específicos de los Macrólidos en neumonías. ¿Para cuáles agentes etiológicos son de elección o tienen cubrimiento, especialmente en neumonías atípicas?",
        "answers": {
          "a": "Staphylococcus aureus meticilino sensible.",
          "b": "Pseudomona aeruginosa.",
          "c": "Enterococcus faecalis.",
          "d": "Legionella, Mycoplasma, Chlamydophila.",
          "e": "Bacteroides fragilis."
        },
        "correctAnswer": "d",
        "explanation": "Los Macrólidos se usan para neumonías atípicas causadas por Legionella, Mycoplasma y Chlamydophila, donde los beta-lactámicos no son útiles [36, 53]."
      },
      {
        "question": "Según las fuentes, ¿cuál es un efecto adverso raro pero grave asociado al uso de Macrólidos?",
        "answers": {
          "a": "Diarrea y colitis pseudomembranosa.",
          "b": "Nefrotoxicidad.",
          "c": "Hepatotoxicidad colestásica.",
          "d": "Reacciones tipo Lupus.",
          "e": "Bloqueo neuromuscular."
        },
        "correctAnswer": "c",
        "explanation": "Un efecto adverso raro pero más grave de los Macrólidos es la hepatitis colestásica, que implica la inflamación de las vías de drenaje de la bilirrubina conjugada [64, 65]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción de la Clindamicina según las fuentes?",
        "answers": {
          "a": "Inhibe la síntesis de ácido fólico.",
          "b": "Daña el ADN bacteriano en condiciones anaerobias.",
          "c": "Inhibe la subunidad ribosomal 50s, inhibiendo la translocación.",
          "d": "Inhibe la DNA girasa.",
          "e": "Inhibe la síntesis de la pared celular."
        },
        "correctAnswer": "c",
        "explanation": "La Clindamicina inhibe la subunidad ribosomal 50s, inhibiendo la translocación [55]."
      },
      {
        "question": "¿Para qué tipo de infecciones bacterianas son los Lincosamidas (Clindamicina) la primera opción en un tratamiento probabilístico, según las fuentes?",
        "answers": {
          "a": "Gérmenes gram + aerobios como Staphylococcus aureus meticilino sensible.",
          "b": "Gérmenes gram - aerobios como E. coli.",
          "c": "Gérmenes anaerobios.",
          "d": "Micobacterias no tuberculosas.",
          "e": "Gérmenes intracelulares como Chlamydia."
        },
        "correctAnswer": "c",
        "explanation": "La Clindamicina es la primera opción cuando se habla de un tratamiento probabilístico para gérmenes anaerobios [37]."
      },
      {
        "question": "Según las fuentes, ¿qué gen está implicado en el mecanismo de resistencia de la Clindamicina y los Macrólidos en gram positivos, que lleva a la metilación ribosomal?",
        "answers": {
          "a": "gyrA.",
          "b": "parC.",
          "c": "erm.",
          "d": "msrA.",
          "e": "rpoB."
        },
        "correctAnswer": "c",
        "explanation": "El gen erm en los gram positivos es un mecanismo de resistencia que produce metilasa, la cual protege al ribosoma impidiendo la unión del antibiótico, un mecanismo compartido con otros antibióticos [43]."
      },
      {
        "question": "¿Cuál es el efecto adverso más frecuente asociado al uso de Clindamicina según las fuentes?",
        "answers": {
          "a": "Nefrotoxicidad.",
          "b": "Ototoxicidad.",
          "c": "Diarrea, que puede progresar a colitis pseudomembranosa por C. difficile.",
          "d": "Hepatitis.",
          "e": "Neuropatías."
        },
        "correctAnswer": "c",
        "explanation": "La diarrea es el efecto adverso más frecuente (20% de los pacientes), la cual puede progresar a colitis pseudomembranosa causada por la toxina de C. difficile [4]."
      },
      {
        "question": "Según las fuentes, ¿cómo es la distribución de la Clindamicina a los tejidos?",
        "answers": {
          "a": "Mala distribución a todos los tejidos, incluyendo leucocitos, abscesos y hueso.",
          "b": "Buena distribución a tejidos como leucocitos, abscesos y hueso, pero excepto al SNC.",
          "c": "Alcanza altas concentraciones en la orina y el riñón.",
          "d": "Se retiene principalmente en la sangre.",
          "e": "Baja distribución, requiriendo administración tópica para la mayoría de las infecciones."
        },
        "correctAnswer": "b",
        "explanation": "La Clindamicina tiene buena distribución a tejidos (leucocitos, abscesos, hueso) excepto al SNC (para tratar bacterias) [59]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción de los Aminoglucósidos según las fuentes?",
        "answers": {
          "a": "Inhiben la síntesis de la pared celular bacteriana.",
          "b": "Inhiben la síntesis de ácido fólico bacteriano.",
          "c": "Se unen irreversiblemente a la subunidad ribosomal 30s, bloqueando la síntesis proteica y produciendo proteínas incorrectas.",
          "d": "Inhiben la RNA polimerasa bacteriana.",
          "e": "Dañan el ADN bacteriano mediante radicales libres en medios anaerobios."
        },
        "correctAnswer": "c",
        "explanation": "Los Aminoglucósidos inhiben la síntesis proteica mediante la unión irreversible a la subunidad 30s en el ribosoma, bloqueando la síntesis proteica y produciendo proteínas incorrectas [23]."
      },
      {
        "question": "Según las fuentes, ¿por qué los Aminoglucósidos cubren más a las bacterias aerobias y tienen acción limitada en medios anaerobios o ácidos?",
        "answers": {
          "a": "Su ingreso a la bacteria a través de la membrana celular requiere transportadores dependientes de ATP, que funcionan mejor en condiciones aerobias, y en medios anaerobios hay cargas positivas (H+) que repelen su acción.",
          "b": "Son inactivados por las porinas presentes en las bacterias anaerobias.",
          "c": "Solo pueden unirse a ribosomas 70s que se forman en presencia de oxígeno.",
          "d": "Requieren pH ácido para su acción, el cual se inhibe en medios neutros o alcalinos.",
          "e": "Actúan principalmente sobre la síntesis de la pared celular, que es diferente en aerobios y anaerobios."
        },
        "correctAnswer": "a",
        "explanation": "Los Aminoglucósidos atraviesan la membrana celular por transportadores dependientes de ATP, por eso cubren más a las aerobias. En medios anaerobios, las muchas cargas positivas (H+) repelen y inhiben su acción [23]. También penetran mejor en gram - aerobios por las porinas [23, 34]."
      },
      {
        "question": "¿Cuáles son los dos efectos adversos sistémicos principales y potencialmente irreversibles de los Aminoglucósidos según las fuentes?",
        "answers": {
          "a": "Hepatotoxicidad y trastornos gastrointestinales.",
          "b": "Mielosupresión y neuropatías.",
          "c": "Nefrotoxicidad y ototoxicidad (vestibular y coclear).",
          "d": "Síndrome de Stevens-Johnson y reacciones de hipersensibilidad.",
          "e": "Falla hepática y colitis pseudomembranosa."
        },
        "correctAnswer": "c",
        "explanation": "Los principales efectos adversos de los Aminoglucósidos son la nefrotoxicidad y la ototoxicidad (vestibular y coclear), los cuales pueden ser irreversibles, especialmente con la exposición a varias dosis [3, 44, 66]."
      },
      {
        "question": "Según las fuentes, ¿cómo causan nefrotoxicidad los Aminoglucósidos a nivel celular en el riñón?",
        "answers": {
          "a": "Inhiben la síntesis de ADN en las células tubulares renales.",
          "b": "Dañan directamente los glomérulos renales.",
          "c": "Se filtran en las células tubulares a través de transportadores con receptores de megalina/cubulina, se concentran y producen disfunciones de proteínas, necrosis y apoptosis tubular.",
          "d": "Precipitan en los túbulos renales causando cristaluria.",
          "e": "Inhiben la reabsorción de agua en los conductos colectores."
        },
        "correctAnswer": "c",
        "explanation": "En las células tubulares renales, el medicamento se filtra por transportadores con receptores de megalina y cubulina para entrar, se concentra tanto que produce disfunciones de proteínas a nivel tubular, llevando a disfunción tubular, necrosis y apoptosis [44]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción de las Tetraciclinas, como la Doxiciclina y Minociclina, según las fuentes?",
        "answers": {
          "a": "Inhiben la síntesis de ácido fólico.",
          "b": "Se unen a la subunidad ribosomal 50s.",
          "c": "Se unen a la subunidad ribosomal 30s, alterando el sitio de reconocimiento de la ARN transferasa.",
          "d": "Inhiben la DNA girasa.",
          "e": "Inhiben la RNA polimerasa bacteriana."
        },
        "correctAnswer": "c",
        "explanation": "Las Tetraciclinas se unen a la subunidad ribosomal 30s y alteran el sitio de reconocimiento de la ARN transferasa [22]."
      },
      {
        "question": "Según las fuentes, ¿por qué están contraindicadas las Tetraciclinas durante el embarazo?",
        "answers": {
          "a": "Causan neurotoxicidad y pseudotumor.",
          "b": "Inducen enzimas hepáticas que metabolizan hormonas.",
          "c": "Cruzan la placenta y se pegan a los huesos por su afinidad a cargas +, causando alteraciones óseas y dientes malformados en los fetos.",
          "d": "Aumentan el riesgo de colitis pseudomembranosa en la madre.",
          "e": "Producen anemia megaloblástica por deficiencia de folatos."
        },
        "correctAnswer": "c",
        "explanation": "Las Tetraciclinas cruzan la placenta, se pegan a los huesos por su afinidad a las cargas positivas, y causan alteraciones óseas (huesos largos) y dientes malformados (forma y color) en los fetos [15, 16]. Por ello están contraindicadas en el embarazo [15]."
      },
      {
        "question": "¿Qué tipo de sustancias, al ser ingeridas junto con Tetraciclinas por vía oral, pueden alterar su absorción según las fuentes?",
        "answers": {
          "a": "Sustancias ácidas.",
          "b": "Alimentos ricos en grasas.",
          "c": "Cargas positivas, como el Calcio de la leche o el Magnesio de los antiácidos.",
          "d": "Carbohidratos complejos.",
          "e": "Fibras dietéticas."
        },
        "correctAnswer": "c",
        "explanation": "Cuando las Tetraciclinas se administran por vía oral, tienen atracción a las cargas positivas (cationes), como el Calcio de la leche o el Magnesio del sulfato de Mg (antiácido), lo que puede unirse a la tetraciclina y alterar su absorción. No se recomienda tomarlas con lácteos [8]."
      },
      {
        "question": "¿Cuál es el mecanismo de acción de las Sulfas (Sulfametoxazol) según las fuentes?",
        "answers": {
          "a": "Inhiben la síntesis de la pared celular bacteriana.",
          "b": "Son análogos del PABA e inhiben la enzima dihidropteroato sintasa, bloqueando la síntesis de ácido fólico bacteriano.",
          "c": "Se unen a la subunidad ribosomal 30s.",
          "d": "Inhiben la DNA girasa bacteriana.",
          "e": "Dañan el ADN bacteriano."
        },
        "correctAnswer": "b",
        "explanation": "Las Sulfas son análogos del PABA (precursor de la síntesis de ácido fólico en las bacterias) e inhiben la enzima dihidropteroato sintasa, evitando la síntesis del ácido fólico bacteriano [11]."
      },
      {
        "question": "Según las fuentes, ¿para cuál de las siguientes infecciones es el Trimetoprim-Sulfametoxazol (TSM) el tratamiento de elección?",
        "answers": {
          "a": "Infecciones por Pseudomona aeruginosa.",
          "b": "Toxoplasmosis (cuando no hay sulfadiazina).",
          "c": "Infecciones por Nocardia.",
          "d": "Infecciones por Staphylococcus aureus meticilino resistente.",
          "e": "Neumonía por Mycoplasma pneumoniae."
        },
        "correctAnswer": "c",
        "explanation": "El TSM es el tratamiento de elección para infecciones por Nocardia y Pneumocystis carinii (jirovecci) [48, 67]. También para Isospora belli [48, 67] y Stenotrophomona maltophila [67, 68]. Toxoplasmosis es una alternativa si no hay sulfadiazina [67]."
      },
      {
        "question": "¿Cuál de los siguientes efectos adversos es un riesgo asociado al uso prolongado de Trimetoprim-Sulfametoxazol (TSM) debido a su interferencia con el metabolismo del ácido fólico?",
        "answers": {
          "a": "Nefrotoxicidad.",
          "b": "Ototoxicidad.",
          "c": "Mielosupresión, específicamente anemia megaloblástica por deficiencia de folatos.",
          "d": "Ruptura tendinosa.",
          "e": "Colitis pseudomembranosa."
        },
        "correctAnswer": "c",
        "explanation": "El uso prolongado de TSM puede causar anemia megaloblástica por deficiencia de folatos, ya que afecta la síntesis de purinas (ADN), y se debe dar ácido folínico [5, 12, 47, 69]."
      },
      {
        "question": "Según las fuentes, ¿cuál es el mecanismo de acción principal de las Quinolonas, como la Ciprofloxacina y Levofloxacina, en bacterias Gram negativas y Gram positivas?",
        "answers": {
          "a": "Inhibición de la síntesis de la pared celular.",
          "b": "Inhibición de la subunidad ribosomal 30s.",
          "c": "Inhibición de la DNA girasa (en Gram -) y la topoisomerasa IV (en Gram +), ambas enzimas clave en la replicación del ADN.",
          "d": "Inhibición de la RNA polimerasa.",
          "e": "Daño directo al ADN sin necesidad de activación metabólica."
        },
        "correctAnswer": "c",
        "explanation": "Las Quinolonas inhiben la DNA girasa en bacterias Gram negativas y la topoisomerasa IV en bacterias Gram positivas. Ambas enzimas son análogas y cruciales para la replicación del ADN bacteriano, inhibiendo el corte de cadenas hijas y generando radicales libres [26]."
      },
      {
        "question": "¿Cuál es un efecto adverso musculoesquelético importante asociado al uso de Quinolonas, especialmente en pacientes mayores, que usan esteroides o recipientes de trasplante?",
        "answers": {
          "a": "Artralgias.",
          "b": "Miositis.",
          "c": "Osteomielitis.",
          "d": "Tendinitis y ruptura tendinosa.",
          "e": "Debilidad muscular generalizada."
        },
        "correctAnswer": "d",
        "explanation": "Las Quinolonas pueden causar tendinitis y ruptura tendinosa, especialmente en pacientes mayores de 60 años, con uso de esteroides o recipientes de trasplante. El tendón de Aquiles es comúnmente afectado [18]."
      },
      {
        "question": "Según las fuentes, ¿qué enzima bacteriana es el blanco principal del mecanismo de acción de las Rifamicinas como la Rifampicina?",
        "answers": {
          "a": "DNA girasa.",
          "b": "Dihidropteroato sintasa.",
          "c": "RNA polimerasa dependiente de DNA (subunidad beta).",
          "d": "Aminoacil-ARNt sintetasa.",
          "e": "Transpeptidasa (PBPs)."
        },
        "correctAnswer": "c",
        "explanation": "Las Rifamicinas inhiben la subunidad beta de la RNA polimerasa (dependiente de DNA) de procariotas, impidiendo el inicio en la síntesis del RNA bacteriano [41]."
      },
      {
        "question": "Según las fuentes, ¿cuál es una indicación importante para el uso de Rifampicina en combinación con otros fármacos?",
        "answers": {
          "a": "Infecciones urinarias no complicadas.",
          "b": "Infecciones por Clostridiosis difficile resistentes.",
          "c": "Brucelosis.",
          "d": "Neumonías atípicas por Mycoplasma.",
          "e": "Infecciones por Bacteroides fragilis."
        },
        "correctAnswer": "c",
        "explanation": "La Rifampicina se usa en tratamientos combinados para Brucella o Bartonella (combinado con tetraciclinas) [30] y Brucelosis (combinado con otros fármacos, ejemplo: doxiciclina más rifampicina) [70]."
      },
      {
        "question": "Según las fuentes, ¿cuál es un efecto adverso característico de la Rifampicina que afecta los fluidos corporales?",
        "answers": {
          "a": "Hepatitis colestásica.",
          "b": "Coloración roja-naranja de la orina, saliva, esputo.",
          "c": "Cristaluria.",
          "d": "Ototoxicidad.",
          "e": "Mielosupresión."
        },
        "correctAnswer": "b",
        "explanation": "La Rifampicina produce coloración roja-naranja de los fluidos corporales como la orina, saliva y esputo [71]."
      },
      {
        "question": "Según las fuentes, ¿cuál es un uso principal de la Rifaximina, un tipo de Rifamicina con poca absorción oral?",
        "answers": {
          "a": "Meningitis por meningococo.",
          "b": "Infecciones sistémicas por Staphylococcus aureus.",
          "c": "Encefalopatía hepática y diarrea del viajero.",
          "d": "Tuberculosis pulmonar.",
          "e": "Infecciones óseas y articulares."
        },
        "correctAnswer": "c",
        "explanation": "Debido a su absorción despreciable [14], la Rifaximina se usa principalmente para infecciones o condiciones localizadas en el tracto gastrointestinal, como la encefalopatía hepática, infecciones por Clostridium difficile recurrentes, diarrea del viajero (E coli) y síndrome de intestino irritable con diarrea [42]."
      },
      {
        "question": "Según las fuentes, ¿para cuál de las siguientes bacterias anaerobias es el Metronidazol el tratamiento de elección o una opción preferida?",
        "answers": {
          "a": "Clostridium perfringens.",
          "b": "Cutibacterium acnes (sistémico).",
          "c": "Bacteroides fragilis.",
          "d": "Clostridium tetani.",
          "e": "Lactobacillus."
        },
        "correctAnswer": "d",
        "explanation": "Las fuentes indican que se prefiere metronidazol para anaerobios como C. tetani en comparación con penicilinas G [42, 51]. Para C. perfringens, la elección es penicilina G [46]. Para Cutibacterium acnes sistémico, las opciones incluyen penicilina, clindamicina, moxifloxacino [32]. Para Bacteroides fragilis, las opciones incluyen Betalactámicos con IBL, Carbapenems, Clindamicina, Metronidazol [51]. Para Lactobacillus, la elección son penicilinas [46, 51]."
      },
      {
        "question": "Según las fuentes, ¿en qué tipo de infecciones se suele considerar la presencia de gérmenes anaerobios?",
        "answers": {
          "a": "Infecciones urinarias no complicadas.",
          "b": "Neumonía por neumococo sensible.",
          "c": "Infecciones dentales, abscesos abdominales post-quirúrgicos, neumonía aspirativa.",
          "d": "Infecciones de transmisión sexual por Neisseria gonorrhoeae.",
          "e": "Infecciones por Yersinia pestis (Peste)."
        },
        "correctAnswer": "c",
        "explanation": "Las fuentes listan varias situaciones en las que se debe pensar en anaerobios, incluyendo infecciones dentales, peritonitis o infecciones post quirúrgicas abdominales, neumonía aspirativa, infecciones crónicas del oído o senos paranasales, infecciones de extremidades en diabéticos, infecciones ginecológicas, infecciones tras mordeduras de animales, abscesos cerebrales y abscesos pulmonares [32]."
      },
      {
        "question": "Según las fuentes, ¿cuál es un efecto adverso neurológico importante del Metronidazol con el uso prolongado (mayor a 1 mes)?",
        "answers": {
          "a": "Ruptura tendinosa.",
          "b": "Ototoxicidad.",
          "c": "Neuropatías sensitivas y ataxia.",
          "d": "Pseudotumor cerebral.",
          "e": "Bloqueo neuromuscular."
        },
        "correctAnswer": "c",
        "explanation": "Cuando se usa Metronidazol más allá de 1 mes, puede causar neurotoxicidad manifestada como ataxia, encefalopatía, disartria, síndromes convulsivos, meningitis aséptica o neuropatías sensitivas [2]."
      },
      {
        "question": "Los Dicloroacetamidas, como Teclozan y Etofamida, se mencionan en las fuentes para el tratamiento de:",
        "answers": {
          "a": "Infecciones sistémicas por Bacteroides fragilis.",
          "b": "Infecciones por Clostridium difficile.",
          "c": "Formas luminales de amibiasis.",
          "d": "Infecciones por Toxoplasma gondii.",
          "e": "Micobacterias no tuberculosas."
        },
        "correctAnswer": "c",
        "explanation": "Los Dicloroacetamidas (Teclozan, Etofamida) se usan en el tratamiento de formas luminales de amibiasis [72]."
      },
      {
        "question": "Según las fuentes, ¿cuál es la principal característica farmacocinética de los Dicloroacetamidas como Teclozan y Etofamida?",
        "answers": {
          "a": "Buena absorción oral y amplia distribución tisular, incluyendo acción tisular.",
          "b": "Absorción oral despreciable y carece de acción tisular, excretándose principalmente por heces.",
          "c": "Eliminación renal rápida y altas concentraciones en orina.",
          "d": "Metabolismo hepático extenso con metabolitos activos sistémicos.",
          "e": "Capacidad de cruzar la barrera hematoencefálica."
        },
        "correctAnswer": "b",
        "explanation": "Los Dicloroacetamidas carecen de acción tisular y tienen poca absorción por vía oral, la mayor parte se excreta por las heces [72]."
      }
    ]
  },
    antibioticosExamen3: {
    "examId": "antibioticosExamen3",
    "title": "Examen Parcial #3 - Antibióticos II",
    "description": "Examen basado en el documento 'PARCIAL #3 - Antibioticos II.pdf', cubriendo Oxazolidinonas, Macrólidos, Lincosamidas, Aminoglucósidos, Tetraciclinas, Sulfas, Quinolonas, Nitroimidazoles, Dicloroacetamidas y Rifamicinas[cite: 1, 5, 65, 98, 123, 162, 186, 195, 199].", // Descripción basada en el contenido del documento
    "questions": [
      {
        "question": "1. ¿Cuál es el mecanismo de acción antibiótico principal del Linezolid?",
        "answers": {
          "a": "Inhibición de la DNA girasa",
          "b": "Unión a la subunidad 30s ribosomal",
          "c": "Inhibición de la síntesis proteica uniéndose a la subunidad 50s y evitando el ensamblaje inicial",
          "d": "Inhibición de la síntesis de la pared celular",
          "e": "Inhibición de la MAO"
        },
        "correctAnswer": "c",
        "explanation": "El Linezolid inhibe la síntesis proteica al unirse a la subunidad 50s, impidiendo el ensamblaje de las subunidades ribosomales y alterando el inicio de la traducción[cite: 7]."
      },
      {
        "question": "2. ¿Para qué tipo de gérmenes es principalmente útil el Linezolid?",
        "answers": {
          "a": "Bacilos Gram negativos aerobios",
          "b": "Cocos Gram positivos, incluyendo cepas resistentes",
          "c": "Anaerobios estrictos",
          "d": "Espiroquetas",
          "e": "Hongos"
        },
        "correctAnswer": "b",
        "explanation": "Linezolid tiene un espectro similar a la vancomicina, siendo útil contra cocos Gram +, incluyendo Enterococcus resistentes a vancomicina, SAMR y neumococos resistentes[cite: 8]."
      },
      {
        "question": "3. ¿Cuál de las siguientes afirmaciones sobre la farmacocinética del Linezolid es CORRECTA?",
        "answers": {
          "a": "Tiene baja biodisponibilidad oral.",
          "b": "Presenta alta unión a proteínas plasmáticas.",
          "c": "Atraviesa mal la barrera hematoencefálica.",
          "d": "Tiene eliminación exclusivamente renal.",
          "e": "Posee excelente biodisponibilidad oral e IV (100%) y atraviesa bien el SNC."
        },
        "correctAnswer": "e",
        "explanation": "Linezolid tiene una biodisponibilidad oral e IV del 100%, baja unión a proteínas, y atraviesa bien el SNC y las secreciones pulmonares[cite: 15, 16]."
      },
      {
        "question": "4. ¿Qué efecto adverso importante se asocia al uso prolongado (> 2 semanas) de Linezolid?",
        "answers": {
          "a": "Nefrotoxicidad",
          "b": "Ototoxicidad",
          "c": "Mielosupresión (principalmente trombocitopenia)",
          "d": "Hepatotoxicidad",
          "e": "Fotosensibilidad"
        },
        "correctAnswer": "c",
        "explanation": "La mielosupresión, especialmente la trombocitopenia, es un efecto adverso significativo del Linezolid con el uso prolongado (> 2 semanas)[cite: 21]."
      },
      {
        "question": "5. ¿Cuál es el mecanismo de acción de los macrólidos como la Azitromicina?",
        "answers": {
          "a": "Inhibición de la subunidad 30s",
          "b": "Inhibición de la translocación en la subunidad 50s",
          "c": "Inhibición de la DNA girasa",
          "d": "Inhibición de la síntesis de ácido fólico",
          "e": "Alteración de la membrana celular"
        },
        "correctAnswer": "b",
        "explanation": "Los macrólidos inhiben la síntesis proteica al unirse a la subunidad 50s e inhibir el proceso de translocación[cite: 23]."
      },
      {
        "question": "6. ¿Cuál de los siguientes macrólidos tiene una vida media más larga, permitiendo esquemas de dosis única en algunas infecciones?",
        "answers": {
          "a": "Eritromicina",
          "b": "Claritromicina",
          "c": "Azitromicina",
          "d": "Fidaxomicina",
          "e": "Lincomicina"
        },
        "correctAnswer": "c",
        "explanation": "La Azitromicina tiene una vida media larga (2-4 días), lo que permite su administración en dosis única para ciertas infecciones como la otitis media[cite: 36, 40]."
      },
      {
        "question": "7. ¿Qué efecto adverso cardíaco pueden producir los macrólidos?",
        "answers": {
          "a": "Acortamiento del intervalo QT",
          "b": "Bradicardia sinusal",
          "c": "Bloqueo auriculoventricular",
          "d": "Prolongación del intervalo QTc",
          "e": "Fibrilación auricular"
        },
        "correctAnswer": "d",
        "explanation": "Los macrólidos pueden prolongar el intervalo QTc en el electrocardiograma, aumentando el riesgo de arritmias[cite: 42]."
      },
      {
        "question": "8. ¿Cuál de las siguientes infecciones NO suele ser una indicación principal para los macrólidos?",
        "answers": {
          "a": "Neumonías atípicas (Legionella, Mycoplasma)",
          "b": "Infecciones por Chlamydia trachomatis",
          "c": "Tosferina (Bordetella pertussis)",
          "d": "Infecciones urinarias por E. coli",
          "e": "Erradicación de Helicobacter pylori (en combinación)"
        },
        "correctAnswer": "d",
        "explanation": "Los macrólidos son clave en neumonías atípicas, ITS por Chlamydia, tosferina y H. pylori[cite: 25, 27, 29, 31], pero no son tratamiento de elección para ITU por E. coli."
      },
      {
        "question": "9. ¿Cuál es el mecanismo de acción de la Clindamicina?",
        "answers": {
          "a": "Inhibición de la subunidad 30s",
          "b": "Inhibición de la translocación en la subunidad 50s",
          "c": "Inhibición de la DNA girasa",
          "d": "Inhibición de la síntesis de la pared",
          "e": "Inhibición de la RNA polimerasa"
        },
        "correctAnswer": "b",
        "explanation": "La Clindamicina, una lincosamida, inhibe la subunidad 50s, interfiriendo con la translocación, aunque en un sitio diferente a los macrólidos[cite: 47]."
      },
      {
        "question": "10. ¿Cuál es una indicación importante de la Clindamicina debido a su espectro?",
        "answers": {
          "a": "Infecciones urinarias complicadas",
          "b": "Meningitis bacteriana",
          "c": "Infecciones por anaerobios (ej. abscesos pulmonares, infecciones dentales)",
          "d": "Neumonías por Pseudomonas aeruginosa",
          "e": "Infecciones por enterococos resistentes a vancomicina"
        },
        "correctAnswer": "c",
        "explanation": "La Clindamicina tiene excelente actividad contra muchos anaerobios Gram + y Gram -, siendo una opción clave para infecciones donde estos predominan[cite: 51, 62]."
      },
      {
        "question": "11. ¿Qué efecto adverso gastrointestinal grave se asocia con el uso de Clindamicina?",
        "answers": {
          "a": "Estreñimiento severo",
          "b": "Gastritis erosiva",
          "c": "Colitis pseudomembranosa por Clostridioides difficile",
          "d": "Pancreatitis aguda",
          "e": "Íleo paralítico"
        },
        "correctAnswer": "c",
        "explanation": "La Clindamicina es conocida por propiciar el sobrecrecimiento de C. difficile, pudiendo causar colitis pseudomembranosa[cite: 75, 76]."
      },
      {
        "question": "12. La prueba D se realiza para detectar un tipo específico de resistencia a Clindamicina. ¿Qué mecanismo detecta una prueba D positiva?",
        "answers": {
          "a": "Bombas de eflujo (msrA)",
          "b": "Resistencia constitutiva por metilación ribosomal (gen erm)",
          "c": "Resistencia inducible por metilación ribosomal (gen erm)",
          "d": "Inactivación enzimática",
          "e": "Alteración de porinas"
        },
        "correctAnswer": "c",
        "explanation": "Una prueba D positiva (halo achatado alrededor de clindamicina cerca de eritromicina) sugiere resistencia inducible mediada por el gen erm[cite: 56, 59, 61]."
      },
      {
        "question": "13. ¿Cuál es el mecanismo de acción principal de los aminoglucósidos como la Gentamicina y Amikacina?",
        "answers": {
          "a": "Unión irreversible a la subunidad 50s",
          "b": "Unión irreversible a la subunidad 30s, causando lectura errónea del mRNA",
          "c": "Inhibición de la DNA girasa",
          "d": "Inhibición de la RNA polimerasa",
          "e": "Inhibición de la síntesis de peptidoglicano"
        },
        "correctAnswer": "b",
        "explanation": "Los aminoglucósidos se unen irreversiblemente a la subunidad 30s, bloqueando la síntesis proteica y produciendo proteínas incorrectas, lo que contribuye a su efecto bactericida[cite: 69, 70]."
      },
      {
        "question": "14. ¿Por qué los aminoglucósidos son MENOS efectivos en ambientes anaerobios?",
        "answers": {
          "a": "Son rápidamente hidrolizados por enzimas anaerobias.",
          "b": "Su transporte a través de la membrana celular depende de oxígeno y ATP.",
          "c": "El pH ácido del medio anaerobio los inactiva.",
          "d": "Las bacterias anaerobias carecen de ribosomas 30s.",
          "e": "Se unen irreversiblemente a componentes de la pared celular anaerobia."
        },
        "correctAnswer": "b",
        "explanation": "El paso de los aminoglucósidos a través de la membrana celular requiere un sistema de transporte dependiente de ATP y potencial de membrana, procesos inhibidos en anaerobiosis[cite: 67, 68]."
      },
      {
        "question": "15. ¿Cuáles son las dos toxicidades MÁS importantes asociadas a los aminoglucósidos?",
        "answers": {
          "a": "Hepatotoxicidad y Cardiotoxicidad",
          "b": "Nefrotoxicidad y Ototoxicidad",
          "c": "Mielosupresión y Neurotoxicidad central",
          "d": "Toxicidad pulmonar y Reacciones cutáneas graves",
          "e": "Nefrotoxicidad y Mielosupresión"
        },
        "correctAnswer": "b",
        "explanation": "La nefrotoxicidad (acumulación en túbulos renales) y la ototoxicidad (daño coclear y/o vestibular, a menudo irreversible) son las toxicidades limitantes de dosis más significativas de los aminoglucósidos[cite: 85, 86, 97, 98, 92]."
      },
      {
        "question": "16. ¿En qué tipo de infecciones se usan principalmente los aminoglucósidos?",
        "answers": {
          "a": "Infecciones por cocos Gram positivos resistentes",
          "b": "Infecciones por anaerobios",
          "c": "Infecciones graves por bacilos Gram negativos aerobios",
          "d": "Neumonías atípicas",
          "e": "Infecciones de piel y tejidos blandos no complicadas"
        },
        "correctAnswer": "c",
        "explanation": "Los aminoglucósidos son primordiales en el tratamiento de infecciones graves causadas por bacilos Gram negativos aerobios, como enterobacterias y Pseudomonas[cite: 71, 95]. También se usan en combinación para algunas infecciones por Gram positivos[cite: 78]."
      },
      {
        "question": "17. ¿Cuál es el mecanismo de acción de las Tetraciclinas (ej. Doxiciclina)?",
        "answers": {
          "a": "Unión a la subunidad 50s inhibiendo la translocación",
          "b": "Unión a la subunidad 30s alterando el sitio de reconocimiento del ARNt",
          "c": "Inhibición de la DNA girasa",
          "d": "Inhibición de la síntesis de ácido fólico",
          "e": "Fragmentación del DNA bacteriano"
        },
        "correctAnswer": "b",
        "explanation": "Las tetraciclinas se unen a la subunidad ribosomal 30s e interfieren con la unión del aminoacil-ARNt al sitio A del complejo ribosoma-ARNm, inhibiendo la adición de aminoácidos[cite: 101]."
      },
      {
        "question": "18. ¿Por qué se debe evitar la administración de tetraciclinas con lácteos o antiácidos que contengan cationes multivalentes (Ca++, Mg++, Al++)?",
        "answers": {
          "a": "Aumentan el riesgo de nefrotoxicidad.",
          "b": "Aceleran su metabolismo hepático.",
          "c": "Forman quelatos insolubles que disminuyen su absorción oral.",
          "d": "Incrementan el riesgo de fotosensibilidad.",
          "e": "Potencian su efecto sobre la flora intestinal."
        },
        "correctAnswer": "c",
        "explanation": "Las tetraciclinas tienen afinidad por cationes multivalentes como el calcio y magnesio, formando complejos (quelatos) que no se absorben bien en el tracto gastrointestinal[cite: 114]."
      },
      {
        "question": "19. ¿Qué efecto adverso importante contraindica el uso de tetraciclinas en niños menores de 8 años y embarazadas?",
        "answers": {
          "a": "Ototoxicidad irreversible",
          "b": "Mielosupresión severa",
          "c": "Hepatitis fulminante",
          "d": "Afectación del desarrollo óseo y dental (coloración, hipoplasia)",
          "e": "Síndrome de Stevens-Johnson"
        },
        "correctAnswer": "d",
        "explanation": "Las tetraciclinas se depositan en huesos y dientes en calcificación, pudiendo causar deformidades, inhibición del crecimiento óseo y coloración permanente de los dientes. Por ello, están contraindicadas en menores de 8 años y durante el embarazo[cite: 116, 118]."
      },
      {
        "question": "20. ¿Cuál de las siguientes es una indicación característica para la Doxiciclina?",
        "answers": {
          "a": "Infección urinaria por Pseudomonas",
          "b": "Meningitis por Neisseria meningitidis",
          "c": "Tratamiento de enfermedades transmitidas por garrapatas (Rickettsia, Borrelia, Ehrlichia)",
          "d": "Endocarditis por Enterococcus faecalis",
          "e": "Infección por Clostridioides difficile"
        },
        "correctAnswer": "c",
        "explanation": "La Doxiciclina es de elección o una alternativa importante para varias zoonosis y enfermedades transmitidas por vectores, incluyendo rickettsiosis, enfermedad de Lyme (Borrelia), ehrlichiosis/anaplasmosis y también brucelosis o carbunco[cite: 106, 107, 108, 109]."
      },
      {
        "question": "21. ¿Cuál es el mecanismo de acción de las Sulfonamidas (ej. Sulfametoxazol)?",
        "answers": {
          "a": "Inhibición de la DNA girasa",
          "b": "Inhibición de la síntesis proteica (subunidad 30s)",
          "c": "Inhibición competitiva de la dihidropteroato sintasa, bloqueando la síntesis de ácido fólico",
          "d": "Inhibición de la RNA polimerasa",
          "e": "Daño al DNA por radicales libres"
        },
        "correctAnswer": "c",
        "explanation": "Las sulfonamidas son análogos estructurales del PABA y compiten por la enzima dihidropteroato sintasa, esencial para la síntesis de ácido fólico en bacterias[cite: 130, 131]."
      },
      {
        "question": "22. ¿Cuál es el mecanismo de acción del Trimetoprim?",
        "answers": {
          "a": "Inhibición de la dihidropteroato sintasa",
          "b": "Inhibición de la dihidrofolato reductasa",
          "c": "Inhibición de la DNA girasa",
          "d": "Inhibición de la subunidad 50s",
          "e": "Inhibición de la translocación"
        },
        "correctAnswer": "b",
        "explanation": "El Trimetoprim inhibe la dihidrofolato reductasa, el siguiente paso en la vía de activación del ácido fólico, actuando de forma sinérgica con las sulfonamidas[cite: 128, 131]."
      },
      {
        "question": "23. ¿Para cuál de las siguientes infecciones el Trimetoprim-Sulfametoxazol (TSM) es considerado tratamiento de elección?",
        "answers": {
          "a": "Infección por Pseudomonas aeruginosa",
          "b": "Neumonía por Streptococcus pneumoniae",
          "c": "Neumonía por Pneumocystis jirovecii (PCP)",
          "d": "Infección por Enterococcus faecium resistente a Vancomicina (ERV)",
          "e": "Faringitis por Streptococcus pyogenes"
        },
        "correctAnswer": "c",
        "explanation": "El TSM es el tratamiento de elección para la neumonía causada por el hongo oportunista Pneumocystis jirovecii, común en pacientes inmunocomprometidos (VIH)[cite: 135, 161]."
      },
      {
        "question": "24. ¿Qué efecto adverso hematológico puede ocurrir con el uso prolongado de TSM, especialmente en pacientes con deficiencia de folato?",
        "answers": {
          "a": "Trombocitosis",
          "b": "Policitemia",
          "c": "Anemia megaloblástica",
          "d": "Leucocitosis neutrofílica",
          "e": "Anemia aplásica"
        },
        "correctAnswer": "c",
        "explanation": "Debido a la inhibición de la vía del folato, el uso prolongado de TSM puede causar anemia megaloblástica, que se previene o trata con ácido folínico (no fólico)[cite: 149, 154]."
      },
      {
        "question": "25. ¿Qué precaución importante se debe tener al administrar TSM a pacientes con deficiencia de G6PD?",
        "answers": {
          "a": "Riesgo aumentado de nefrotoxicidad",
          "b": "Riesgo de hemólisis aguda",
          "c": "Riesgo de hepatotoxicidad severa",
          "d": "Riesgo de prolongación del QTc",
          "e": "Riesgo de reacciones anafilácticas"
        },
        "correctAnswer": "b",
        "explanation": "Las sulfonamidas pueden inducir estrés oxidativo en los eritrocitos. En pacientes con deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD), esto puede desencadenar hemólisis aguda[cite: 154, 155]."
      },
      {
        "question": "26. ¿Cuál es el mecanismo de acción de las Quinolonas (ej. Ciprofloxacina, Levofloxacina)?",
        "answers": {
          "a": "Inhibición de la síntesis proteica (subunidad 50s)",
          "b": "Inhibición de la síntesis de la pared celular",
          "c": "Inhibición de las topoisomerasas bacterianas (DNA girasa y Topoisomerasa IV)",
          "d": "Inhibición de la RNA polimerasa",
          "e": "Inhibición de la vía del ácido fólico"
        },
        "correctAnswer": "c",
        "explanation": "Las quinolonas inhiben la DNA girasa (principalmente en Gram -) y la topoisomerasa IV (principalmente en Gram +), enzimas esenciales para la replicación, transcripción y reparación del DNA bacteriano[cite: 166, 167]."
      },
      {
        "question": "27. ¿Qué generación de quinolonas incluye a Ciprofloxacina y Norfloxacina, con buena actividad contra bacilos Gram negativos aerobios, incluyendo Pseudomonas?",
        "answers": {
          "a": "Primera generación (Ácido nalidíxico)",
          "b": "Segunda generación",
          "c": "Tercera generación (Levofloxacina, Moxifloxacina)",
          "d": "Cuarta generación",
          "e": "Generación 'respiratoria'"
        },
        "correctAnswer": "b",
        "explanation": "La segunda generación, que incluye Norfloxacina y Ciprofloxacina, se caracteriza por su potente actividad contra bacilos Gram negativos aerobios, incluyendo P. aeruginosa[cite: 163, 164, 169]."
      },
      {
        "question": "28. Las quinolonas de tercera generación (Levofloxacina, Moxifloxacina) se diferencian de la segunda generación principalmente por:",
        "answers": {
          "a": "Tener menor actividad contra Pseudomonas",
          "b": "Tener mejor actividad contra cocos Gram positivos (incluyendo neumococo resistente) y algunos atípicos",
          "c": "Ser exclusivamente de administración parenteral",
          "d": "Tener un mecanismo de acción completamente diferente",
          "e": "Carecer de efectos adversos sobre el tendón"
        },
        "correctAnswer": "b",
        "explanation": "Las quinolonas de tercera generación (llamadas a veces 'respiratorias') mantienen actividad contra Gram negativos pero ganan potencia contra Gram positivos como S. pneumoniae (incluso resistente a penicilina) y patógenos atípicos[cite: 165, 173]."
      },
      {
        "question": "29. ¿Qué efecto adverso grave, aunque raro, se asocia con el uso de quinolonas, especialmente en pacientes mayores, con uso de corticoides o trasplantados?",
        "answers": {
          "a": "Ototoxicidad",
          "b": "Nefrotoxicidad tubular aguda",
          "c": "Anemia aplásica",
          "d": "Tendinitis y ruptura tendinosa (ej. tendón de Aquiles)",
          "e": "Hepatitis colestásica"
        },
        "correctAnswer": "d",
        "explanation": "Las quinolonas tienen una advertencia sobre el riesgo de tendinitis y ruptura de tendón, particularmente el de Aquiles, siendo factores de riesgo la edad avanzada, el uso concomitante de esteroides y el estado post-trasplante[cite: 181]."
      },
      {
        "question": "30. ¿Cuál de las siguientes quinolonas tiene una eliminación predominantemente hepática, a diferencia de las otras que son mayoritariamente renales?",
        "answers": {
          "a": "Ciprofloxacina",
          "b": "Levofloxacina",
          "c": "Norfloxacina",
          "d": "Moxifloxacina",
          "e": "Ácido nalidíxico"
        },
        "correctAnswer": "d",
        "explanation": "Mientras que la mayoría de las fluoroquinolonas se eliminan principalmente por vía renal, la Moxifloxacina tiene un metabolismo hepático significativo y una menor excreción renal[cite: 177]."
      },
      {
        "question": "31. ¿Cuál es el mecanismo de acción del Metronidazol?",
        "answers": {
          "a": "Inhibición de la síntesis proteica",
          "b": "Inhibición de la DNA girasa",
          "c": "Generación de radicales libres y daño al DNA tras reducción del grupo nitro en anaerobiosis",
          "d": "Inhibición de la síntesis de la pared celular",
          "e": "Bloqueo de la RNA polimerasa"
        },
        "correctAnswer": "c",
        "explanation": "El Metronidazol es un profármaco que requiere la reducción de su grupo nitro en condiciones anaerobias (por enzimas como PFOR); la molécula activada daña el DNA bacteriano y de protozoos[cite: 187, 188, 189]."
      },
      {
        "question": "32. ¿Para qué tipo de microorganismos es principalmente activo el Metronidazol?",
        "answers": {
          "a": "Cocos Gram positivos aerobios",
          "b": "Bacilos Gram negativos aerobios (ej. Pseudomonas)",
          "c": "Bacterias anaerobias y algunos protozoos (ej. Trichomonas, Giardia, Entamoeba)",
          "d": "Hongos levaduriformes",
          "e": "Micobacterias"
        },
        "correctAnswer": "c",
        "explanation": "El Metronidazol es fundamental para tratar infecciones por bacterias anaerobias (Bacteroides, Clostridium, Fusobacterium, etc.) y ciertos protozoos parásitos[cite: 190, 191, 195]."
      },
      {
        "question": "33. ¿Qué interacción importante ocurre si un paciente consume alcohol mientras está en tratamiento con Metronidazol?",
        "answers": {
          "a": "Disminución del efecto del metronidazol",
          "b": "Aumento del riesgo de nefrotoxicidad",
          "c": "Reacción tipo disulfiram (efecto Antabuse)",
          "d": "Aumento del riesgo de hepatotoxicidad",
          "e": "Disminución de la absorción del metronidazol"
        },
        "correctAnswer": "c",
        "explanation": "El Metronidazol puede inhibir la aldehído deshidrogenasa, llevando a la acumulación de acetaldehído si se consume alcohol, causando una reacción desagradable conocida como efecto Antabuse (náuseas, vómito, flushing, taquicardia)[cite: 193]."
      },
      {
        "question": "34. ¿Cuál es una indicación común para el Metronidazol en infecciones ginecológicas?",
        "answers": {
          "a": "Candidiasis vulvovaginal",
          "b": "Infección por Chlamydia trachomatis",
          "c": "Vaginosis bacteriana (Gardnerella vaginalis)",
          "d": "Herpes genital",
          "e": "Sífilis primaria"
        },
        "correctAnswer": "c",
        "explanation": "El Metronidazol es el tratamiento de elección para la vaginosis bacteriana, causada principalmente por Gardnerella vaginalis y otros anaerobios[cite: 191, 195]."
      },
      {
        "question": "35. ¿Qué ventaja tiene la Clindamicina sobre el Metronidazol en el tratamiento de abscesos pulmonares por aspiración?",
        "answers": {
          "a": "Mejor cobertura de bacilos Gram negativos aerobios",
          "b": "Mejor cobertura de cocos Gram positivos aerobios y anaerobios (Peptostreptococcus)",
          "c": "Menor riesgo de colitis por C. difficile",
          "d": "Administración una vez al día",
          "e": "Menor costo"
        },
        "correctAnswer": "b",
        "explanation": "Aunque ambos cubren anaerobios, la Clindamicina tiene mejor actividad contra cocos anaerobios Gram positivos (Peptostreptococcus) y aerobios Gram positivos (Staphylococcus, Streptococcus) que pueden estar implicados en infecciones pulmonares por aspiración, además de los anaerobios Gram negativos[cite: 49, 51, 216]."
      },
      {
        "question": "36. ¿Cuál es el mecanismo de acción de las Rifamicinas (ej. Rifampicina)?",
        "answers": {
          "a": "Inhibición de la DNA girasa",
          "b": "Inhibición de la síntesis proteica (subunidad 30s)",
          "c": "Inhibición de la subunidad beta de la RNA polimerasa dependiente de DNA",
          "d": "Daño a la membrana celular",
          "e": "Bloqueo de la síntesis de ácido fólico"
        },
        "correctAnswer": "c",
        "explanation": "Las rifamicinas inhiben la RNA polimerasa bacteriana dependiente de DNA, impidiendo el inicio de la transcripción[cite: 199]."
      },
      {
        "question": "37. ¿Cuál es una indicación fundamental de la Rifampicina, generalmente en terapia combinada?",
        "answers": {
          "a": "Infección urinaria no complicada",
          "b": "Tratamiento de la tuberculosis",
          "c": "Neumonía adquirida en la comunidad",
          "d": "Infecciones por hongos",
          "e": "Gastroenteritis viral"
        },
        "correctAnswer": "b",
        "explanation": "La Rifampicina es un pilar en el tratamiento de la tuberculosis, siempre usada en combinación con otros fármacos antituberculosos para prevenir la resistencia[cite: 200, 205]."
      },
      {
        "question": "38. ¿Qué efecto característico y benigno produce la Rifampicina en los fluidos corporales?",
        "answers": {
          "a": "Coloración azulada",
          "b": "Coloración roja-naranja",
          "c": "Olor a ajo",
          "d": "Sabor metálico",
          "e": "Espuma persistente"
        },
        "correctAnswer": "b",
        "explanation": "La Rifampicina y sus metabolitos tiñen los fluidos corporales (orina, lágrimas, saliva, sudor) de un color rojo-anaranjado; es un efecto esperado y benigno sobre el que hay que advertir al paciente[cite: 201]."
      },
      {
        "question": "39. ¿Cuál es una interacción farmacológica MUY importante de la Rifampicina debido a su efecto sobre el metabolismo hepático?",
        "answers": {
          "a": "Inhibición potente del CYP3A4",
          "b": "Inducción potente de múltiples enzimas CYP (ej. CYP3A4) y P-glicoproteína",
          "c": "Desplazamiento de fármacos unidos a albúmina",
          "d": "Quelación de cationes divalentes en el intestino",
          "e": "Bloqueo de la secreción tubular renal"
        },
        "correctAnswer": "b",
        "explanation": "La Rifampicina es un potente inductor de varias isoenzimas del citocromo P450 (especialmente CYP3A4) y de transportadores como la P-glicoproteína. Esto acelera el metabolismo de muchos otros fármacos, disminuyendo su efectividad (ej. anticoagulantes, anticonceptivos orales, antirretrovirales, etc.)[cite: 201]."
      },
      {
        "question": "40. ¿Para qué se utiliza principalmente la Rifaximina, una rifamicina no absorbible?",
        "answers": {
          "a": "Tratamiento de la tuberculosis pulmonar",
          "b": "Profilaxis de meningitis meningocócica",
          "c": "Infecciones osteoarticulares por Staphylococcus",
          "d": "Tratamiento de infecciones gastrointestinales (diarrea del viajero, encefalopatía hepática, C. difficile recurrente)",
          "e": "Infecciones urinarias complicadas"
        },
        "correctAnswer": "d",
        "explanation": "Debido a su mínima absorción oral, la Rifaximina actúa localmente en el tracto gastrointestinal y se usa para tratar la diarrea del viajero (E. coli), reducir la producción de amonio en la encefalopatía hepática y como opción en C. difficile recurrente[cite: 201, 207, 208]."
      },
      {
        "question": "41. ¿Cuál de los siguientes antibióticos es considerado de elección para el tratamiento de infecciones por Nocardia?",
        "answers": {
          "a": "Penicilina G",
          "b": "Vancomicina",
          "c": "Trimetoprim-Sulfametoxazol (TSM)",
          "d": "Gentamicina",
          "e": "Metronidazol"
        },
        "correctAnswer": "c",
        "explanation": "El Trimetoprim-Sulfametoxazol es el tratamiento de elección para las infecciones causadas por Nocardia spp[cite: 133, 161]."
      },
      {
        "question": "42. ¿Cuál es el tratamiento de elección para Stenotrophomonas maltophilia?",
        "answers": {
          "a": "Carbapenémicos (Imipenem, Meropenem)",
          "b": "Aminoglucósidos (Amikacina)",
          "c": "Cefalosporinas de tercera generación (Ceftriaxona)",
          "d": "Trimetoprim-Sulfametoxazol (TSM)",
          "e": "Vancomicina"
        },
        "correctAnswer": "d",
        "explanation": "Stenotrophomonas maltophilia es intrínsecamente resistente a muchos antibióticos, incluyendo carbapenémicos. El tratamiento de elección es Trimetoprim-Sulfametoxazol[cite: 133, 223]."
      },
      {
        "question": "43. En un paciente con una infección intraabdominal polimicrobiana (aerobios y anaerobios) secundaria a perforación de colon, ¿cuál de las siguientes opciones NO sería una monoterapia adecuada?",
        "answers": {
          "a": "Piperacilina-Tazobactam",
          "b": "Meropenem",
          "c": "Ceftriaxona",
          "d": "Moxifloxacina",
          "e": "Ampicilina-Sulbactam"
        },
        "correctAnswer": "c",
        "explanation": "La Ceftriaxona tiene excelente actividad contra muchos aerobios Gram negativos y algunos Gram positivos, pero carece de actividad fiable contra anaerobios importantes como Bacteroides fragilis. Las otras opciones (beta-lactámico/inhibidor, carbapenem, moxifloxacina) sí cubren ambos tipos de patógenos[cite: 218, 219, 220]."
      },
      {
        "question": "44. ¿Qué antibiótico se utiliza tópicamente (Sulfadiazina de plata) para prevenir infecciones en quemaduras?",
        "answers": {
          "a": "Neomicina",
          "b": "Mupirocina",
          "c": "Sulfadiazina de plata",
          "d": "Clindamicina tópica",
          "e": "Eritromicina tópica"
        },
        "correctAnswer": "c",
        "explanation": "La Sulfadiazina de plata es una preparación tópica utilizada ampliamente para prevenir la colonización e infección de heridas por quemadura[cite: 123]."
      },
      {
        "question": "45. ¿Cuál es el mecanismo de resistencia más común a las Tetraciclinas?",
        "answers": {
          "a": "Inactivación enzimática por beta-lactamasas",
          "b": "Mutación de la DNA girasa",
          "c": "Producción de bombas de eflujo y/o proteínas de protección ribosomal (PPR)",
          "d": "Metilación del sitio de unión ribosomal (gen erm)",
          "e": "Alteración de las porinas"
        },
        "correctAnswer": "c",
        "explanation": "La resistencia a tetraciclinas se debe principalmente a la adquisición de genes que codifican bombas de eflujo (que expulsan el antibiótico) o proteínas que protegen al ribosoma impidiendo la unión del fármaco[cite: 111]."
      },
      {
        "question": "46. ¿Qué grupo de antibióticos puede causar el 'Síndrome del hombre rojo' si se infunde rápidamente?",
        "answers": {
          "a": "Aminoglucósidos",
          "b": "Vancomicina (Glicopéptido)",
          "c": "Quinolonas",
          "d": "Macrólidos",
          "e": "Tetraciclinas"
        },
        "correctAnswer": "b",
        "explanation": "Aunque la Vancomicina no se detalla extensamente en este documento específico, es conocimiento farmacológico general que su infusión rápida puede causar liberación de histamina, resultando en flushing, eritema y prurito, conocido como 'Síndrome del hombre rojo'. El documento la menciona como comparador o tratamiento para ciertas resistencias[cite: 8, 9, 11, 13, 50, 78, 210, 222]."
      },
      {
        "question": "47. ¿Cuál de los siguientes antibióticos tiene actividad contra Clostridioides difficile y se administra por vía oral para tratar la colitis pseudomembranosa?",
        "answers": {
          "a": "Amoxicilina",
          "b": "Ciprofloxacina",
          "c": "Vancomicina oral",
          "d": "Gentamicina",
          "e": "Linezolid"
        },
        "correctAnswer": "c",
        "explanation": "La Vancomicina administrada por vía oral no se absorbe sistémicamente y alcanza altas concentraciones en el lumen intestinal, siendo un tratamiento de elección para la colitis por C. difficile (especialmente casos graves). Fidaxomicina es otra opción mencionada[cite: 44, 210, 212]."
      },
      {
        "question": "48. La combinación Trimetoprim-Sulfametoxazol está contraindicada en el primer trimestre del embarazo debido al riesgo de:",
        "answers": {
          "a": "Ototoxicidad fetal",
          "b": "Afectación del cartílago de crecimiento",
          "c": "Defectos del tubo neural",
          "d": "Coloración dental",
          "e": "Nefrotoxicidad fetal"
        },
        "correctAnswer": "c",
        "explanation": "Como antagonista del folato, el Trimetoprim (y por extensión la combinación TSM) interfiere con el desarrollo dependiente de folato, como el cierre del tubo neural, por lo que se evita en el primer trimestre[cite: 129, 159]."
      },
      {
        "question": "49. ¿Qué significa el término 'efecto postantibiótico' (EPA)?",
        "answers": {
          "a": "El efecto adverso que ocurre después de suspender el antibiótico.",
          "b": "La supresión persistente del crecimiento bacteriano después de que la concentración del antibiótico ha caído por debajo de la CIM.",
          "c": "La necesidad de administrar una dosis de carga del antibiótico.",
          "d": "La resistencia que aparece después de la exposición al antibiótico.",
          "e": "El efecto sinérgico cuando se combina con otro antibiótico."
        },
        "correctAnswer": "b",
        "explanation": "El efecto postantibiótico se refiere a la capacidad de algunos antibióticos (como aminoglucósidos, quinolonas, tetraciclinas[cite: 115], rifampicina [cite: 201]) de seguir inhibiendo el crecimiento bacteriano incluso cuando sus niveles séricos son indetectables o subinhibitorios."
      },
      {
        "question": "50. En el tratamiento de infecciones por Bacteroides fragilis, ¿cuál de los siguientes antibióticos generalmente NO es una buena opción debido a la alta prevalencia de resistencia?",
        "answers": {
          "a": "Metronidazol",
          "b": "Piperacilina-Tazobactam",
          "c": "Meropenem",
          "d": "Clindamicina",
          "e": "Ampicilina-Sulbactam"
        },
        "correctAnswer": "d",
        "explanation": "Aunque históricamente usada, la resistencia de Bacteroides fragilis a la Clindamicina ha aumentado significativamente en muchas áreas, haciendo que otras opciones como Metronidazol, beta-lactámicos/inhibidores o carbapenémicos sean preferibles para cobertura empírica fiable[cite: 212, 214, 221]."
      }
    ],
    "clinicalCases": [
      {
        "title": "Caso Clínico 1: Neumonía Nosocomial por SAMR",
        "description": "Paciente de 65 años en UCI con ventilación mecánica desarrolla neumonía. El cultivo de aspirado traqueal reporta Staphylococcus aureus resistente a meticilina (SAMR). El paciente tiene función renal normal.",
        "question": "Considerando que la Vancomicina puede tener pobre penetración pulmonar por el surfactante[cite: 10], ¿cuál de las siguientes sería una alternativa terapéutica adecuada según el documento?",
        "answers": {
          "a": "Ciprofloxacina",
          "b": "Amikacina",
          "c": "Linezolid",
          "d": "Clindamicina",
          "e": "Penicilina G"
        },
        "correctAnswer": "c",
        "explanation": "Linezolid es una alternativa a la vancomicina para infecciones por SAMR, incluyendo neumonías nosocomiales, y penetra bien en secreciones pulmonares[cite: 9, 10, 16]."
      },
      {
        "title": "Caso Clínico 2: Infección por Enterococcus faecium VRE",
        "description": "Paciente inmunosuprimido con bacteriemia por Enterococcus faecium resistente a Vancomicina (VRE). Se han descartado otras opciones como fosfomicina.",
        "question": "¿Qué antibiótico del grupo de las Oxazolidinonas sería una opción terapéutica viable en este caso[cite: 8, 11]?",
        "answers": {
          "a": "Daptomicina",
          "b": "Linezolid",
          "c": "Ceftarolina",
          "d": "Tigeciclina",
          "e": "Clindamicina"
        },
        "correctAnswer": "b",
        "explanation": "Linezolid es útil en infecciones por Enterococcus (faecium) resistentes a vancomicina[cite: 8, 11]."
      },
      {
        "title": "Caso Clínico 3: Tratamiento Prolongado con Linezolid",
        "description": "Paciente con osteomielitis por SAMR recibe tratamiento con Linezolid por 4 semanas.",
        "question": "¿Qué efecto adverso hematológico es MÁS probable que presente este paciente debido al uso prolongado (>2 semanas) de Linezolid[cite: 21]?",
        "answers": {
          "a": "Anemia hemolítica",
          "b": "Leucocitosis",
          "c": "Trombocitopenia",
          "d": "Policitemia",
          "e": "Neutrofilia"
        },
        "correctAnswer": "c",
        "explanation": "La mielosupresión, principalmente trombocitopenia (2.4%), es un efecto adverso asociado al uso de Linezolid por más de 2 semanas[cite: 21]."
      },
      {
        "title": "Caso Clínico 4: Neumonía Atípica",
        "description": "Paciente joven previamente sano presenta cuadro de tos seca, fiebre y mialgias. Radiografía de tórax muestra infiltrado intersticial difuso. Se sospecha neumonía atípica.",
        "question": "¿Qué grupo de antibióticos es de elección para cubrir los agentes etiológicos más comunes (Mycoplasma, Chlamydophila, Legionella) de neumonía atípica[cite: 25, 26, 31]?",
        "answers": {
          "a": "Aminoglucósidos",
          "b": "Cefalosporinas de 3ª generación",
          "c": "Macrólidos (Azitromicina, Claritromicina)",
          "d": "Penicilinas",
          "e": "Sulfonamidas"
        },
        "correctAnswer": "c",
        "explanation": "Los macrólidos son el tratamiento de elección para neumonías atípicas causadas por Mycoplasma, Chlamydophila y Legionella[cite: 25, 26, 31]."
      },
      {
        "title": "Caso Clínico 5: Interacción Farmacológica con Macrólidos",
        "description": "Paciente anticoagulado con Warfarina (INR estable en 2.5) inicia tratamiento con Claritromicina por una infección respiratoria.",
        "question": "¿Qué efecto se esperaría sobre el INR del paciente debido a la interacción[cite: 38, 39]?",
        "answers": {
          "a": "Disminución significativa del INR",
          "b": "Aumento significativo del INR",
          "c": "Ningún cambio en el INR",
          "d": "Fluctuación impredecible del INR",
          "e": "Necesidad de suspender la Warfarina"
        },
        "correctAnswer": "b",
        "explanation": "La Claritromicina es un inhibidor del CYP3A4[cite: 36], enzima que metaboliza la Warfarina. Su inhibición disminuye el metabolismo de la Warfarina, aumentando sus niveles y por ende el INR, incrementando el riesgo de sangrado[cite: 38, 39]."
      },
      {
        "title": "Caso Clínico 6: Otitis Media Aguda en Niños",
        "description": "Niño de 3 años con diagnóstico de Otitis Media Aguda. Se considera el uso de un macrólido.",
        "question": "¿Cuál macrólido, por su larga vida media, permite a menudo una dosificación única o de corta duración en esta indicación[cite: 40]?",
        "answers": {
          "a": "Eritromicina",
          "b": "Claritromicina",
          "c": "Azitromicina",
          "d": "Fidaxomicina",
          "e": "Clindamicina"
        },
        "correctAnswer": "c",
        "explanation": "La Azitromicina tiene una vida media larga (2-4 días) y buena penetración en el oído medio, lo que permite pautas cortas o de dosis única en otitis media[cite: 36, 40]."
      },
      {
        "title": "Caso Clínico 7: Infección de Piel y Tejidos Blandos Extrahospitalaria",
        "description": "Paciente con celulitis en miembro inferior, sin criterios de hospitalización. Se sospecha infección por Streptococcus pyogenes o Staphylococcus aureus Meticilino-Sensible (SAMS). El paciente es alérgico a penicilinas.",
        "question": "¿Qué Lincosamida sería una opción oral adecuada para esta infección[cite: 49, 50, 61]?",
        "answers": {
          "a": "Linezolid",
          "b": "Vancomicina",
          "c": "Clindamicina",
          "d": "Gentamicina",
          "e": "Azitromicina"
        },
        "correctAnswer": "c",
        "explanation": "La Clindamicina es una opción para infecciones de piel y tejidos blandos extrahospitalarias[cite: 61], cubriendo Streptococcus y Staphylococcus aureus sensible[cite: 49, 50]. Es una alternativa en alérgicos a beta-lactámicos."
      },
      {
        "title": "Caso Clínico 8: Resistencia Inducible a Clindamicina",
        "description": "Se aísla Staphylococcus aureus de una herida quirúrgica. El antibiograma reporta Resistencia a Eritromicina y Sensibilidad a Clindamicina, pero la Prueba D es Positiva.",
        "question": "¿Qué implica una Prueba D Positiva respecto al uso de Clindamicina[cite: 56, 59, 61]?",
        "answers": {
          "a": "Se puede usar Clindamicina sin problemas.",
          "b": "La resistencia es por bombas de eflujo y Clindamicina es segura.",
          "c": "Existe riesgo de fallo terapéutico por resistencia inducible (gen erm) y NO se debe usar Clindamicina.",
          "d": "Se debe combinar Clindamicina con Eritromicina.",
          "e": "La prueba D no es relevante en este contexto."
        },
        "correctAnswer": "c",
        "explanation": "Una Prueba D positiva indica la presencia del gen erm que confiere resistencia inducible a Clindamicina por metilación ribosomal[cite: 56, 61]. Aunque in vitro aparezca sensible, in vivo puede desarrollar resistencia rápidamente, por lo que no se recomienda su uso."
      },
      {
        "title": "Caso Clínico 9: Colitis por Clostridioides difficile",
        "description": "Paciente desarrolla diarrea severa, fiebre y dolor abdominal tras recibir Clindamicina por una infección dental. La prueba de toxina para C. difficile es positiva.",
        "question": "¿Qué antibiótico es conocido por propiciar frecuentemente el sobrecrecimiento de C. difficile[cite: 75, 76]?",
        "answers": {
          "a": "Vancomicina",
          "b": "Metronidazol",
          "c": "Linezolid",
          "d": "Clindamicina",
          "e": "Gentamicina"
        },
        "correctAnswer": "d",
        "explanation": "La Clindamicina altera significativamente la flora intestinal y tiene una fuerte asociación con el desarrollo de colitis pseudomembranosa por C. difficile[cite: 75, 76]."
      },
      {
        "title": "Caso Clínico 10: Infección Urinaria Complicada por Gram Negativo",
        "description": "Paciente hospitalizado con sonda vesical desarrolla fiebre y leucocitosis. Urocultivo reporta E. coli BLEE (productora de Beta-Lactamasas de Espectro Extendido). Se considera añadir un aminoglucósido al tratamiento.",
        "question": "¿Cuál aminoglucósido de uso hospitalario común sería una opción, asumiendo sensibilidad[cite: 65, 66]?",
        "answers": {
          "a": "Estreptomicina",
          "b": "Neomicina",
          "c": "Amikacina",
          "d": "Paromomicina",
          "e": "Tobramicina oftálmica"
        },
        "correctAnswer": "c",
        "explanation": "La Amikacina es un aminoglucósido de amplio uso hospitalario para infecciones por Gram negativos, incluyendo cepas resistentes[cite: 65]. La Gentamicina [cite: 65] es otra opción, pero la Amikacina suele tener mejor perfil de sensibilidad frente a enzimas inactivadoras."
      },
      {
        "title": "Caso Clínico 11: Monitorización de Aminoglucósidos",
        "description": "Paciente de 70 años con función renal límite (Cr 1.5 mg/dL) inicia tratamiento con Gentamicina por una bacteriemia por Klebsiella.",
        "question": "Dada la edad y función renal, ¿qué toxicidades principales deben monitorizarse estrechamente[cite: 86, 91, 97]?",
        "answers": {
          "a": "Hepatotoxicidad y Mielosupresión",
          "b": "Nefrotoxicidad y Ototoxicidad",
          "c": "Cardiotoxicidad y Neurotoxicidad",
          "d": "Fotosensibilidad y Reacciones cutáneas",
          "e": "Toxicidad pulmonar y Gastrointestinal"
        },
        "correctAnswer": "b",
        "explanation": "La nefrotoxicidad y la ototoxicidad son las toxicidades más significativas y limitantes de los aminoglucósidos. La edad avanzada y la enfermedad renal preexistente son factores de riesgo[cite: 91, 97]."
      },
      {
        "title": "Caso Clínico 12: Modo de Administración de Aminoglucósidos",
        "description": "Se decide administrar Amikacina por vía intravenosa a un paciente pediátrico.",
        "question": "¿Qué precaución debe tomarse durante la infusión IV para minimizar el riesgo de bloqueo neuromuscular, especialmente en niños[cite: 83, 95]?",
        "answers": {
          "a": "Administrar en bolo rápido (< 5 minutos)",
          "b": "Diluir en solución salina hipertónica",
          "c": "Administrar en infusión lenta (ej. 30 minutos)",
          "d": "Administrar conjuntamente con calcio IV",
          "e": "Monitorizar niveles de potasio"
        },
        "correctAnswer": "c",
        "explanation": "La infusión intravenosa rápida de aminoglucósidos se asocia a un mayor riesgo de bloqueo neuromuscular (por inhibición de liberación presináptica de acetilcolina), especialmente en niños[cite: 83, 95]. Se recomienda una infusión lenta, típicamente en 30 minutos."
      },
      {
        "title": "Caso Clínico 13: Enfermedad de Lyme",
        "description": "Paciente excursionista presenta eritema migrans característico tras picadura de garrapata en zona endémica. Se diagnostica Enfermedad de Lyme en fase temprana.",
        "question": "¿Qué Tetraciclina es tratamiento de elección para la Enfermedad de Lyme (Borrelia burgdorferi) en adultos[cite: 108]?",
        "answers": {
          "a": "Tetraciclina base",
          "b": "Oxitetraciclina",
          "c": "Minociclina",
          "d": "Doxiciclina",
          "e": "Tigeciclina"
        },
        "correctAnswer": "d",
        "explanation": "La Doxiciclina es el tratamiento de elección para las fases tempranas de la enfermedad de Lyme en adultos y niños mayores de 8 años[cite: 108]."
      },
      {
        "title": "Caso Clínico 14: Acné Moderado-Severo",
        "description": "Adolescente de 16 años con acné inflamatorio que no responde a tratamientos tópicos.",
        "question": "¿Qué Tetraciclina de segunda generación se utiliza frecuentemente por vía oral para el tratamiento del acné[cite: 107]?",
        "answers": {
          "a": "Doxiciclina",
          "b": "Minociclina",
          "c": "Tigeciclina",
          "d": "Oxitetraciclina",
          "e": "Tetraciclina base"
        },
        "correctAnswer": "b",
        "explanation": "Aunque la Doxiciclina también se usa, la Minociclina es una tetraciclina de segunda generación comúnmente prescrita por vía oral para el acné moderado-severo, debido a su actividad antiinflamatoria y contra Cutibacterium acnes[cite: 107]."
      },
      {
        "title": "Caso Clínico 15: Fotosensibilidad por Tetraciclinas",
        "description": "Paciente en tratamiento con Doxiciclina por una infección de transmisión sexual presenta eritema y quemaduras solares exageradas tras breve exposición al sol.",
        "question": "¿Qué efecto adverso común de las tetraciclinas explica este cuadro[cite: 119]?",
        "answers": {
          "a": "Reacción de Jarisch-Herxheimer",
          "b": "Síndrome de Stevens-Johnson",
          "c": "Fotosensibilidad",
          "d": "Urticaria",
          "e": "Dermatitis exfoliativa"
        },
        "correctAnswer": "c",
        "explanation": "La fotosensibilidad es un efecto adverso relativamente frecuente de las tetraciclinas, especialmente la Doxiciclina[cite: 119]. Los pacientes deben ser advertidos de usar protección solar."
      },
      {
        "title": "Caso Clínico 16: Uso de Tetraciclinas Vencidas",
        "description": "Paciente ingiere accidentalmente cápsulas de Tetraciclina que llevaban varios años vencidas.",
        "question": "¿Qué síndrome de disfunción tubular renal se asocia a la ingesta de tetraciclinas degradadas/vencidas[cite: 120]?",
        "answers": {
          "a": "Síndrome nefrótico",
          "b": "Síndrome de Bartter",
          "c": "Síndrome de Fanconi (o Fanconi-like)",
          "d": "Síndrome de Liddle",
          "e": "Acidosis tubular renal tipo IV"
        },
        "correctAnswer": "c",
        "explanation": "La ingesta de tetraciclinas vencidas o degradadas puede causar un síndrome de Fanconi-like, caracterizado por disfunción tubular renal proximal (acidosis, glucosuria, aminoaciduria, hipofosfatemia)[cite: 120]."
      },
      {
        "title": "Caso Clínico 17: ITU no complicada en mujer joven",
        "description": "Mujer de 25 años, sexualmente activa, presenta disuria, polaquiuria y urgencia miccional. Uroanálisis compatible con ITU. No embarazo, no comorbilidades.",
        "question": "Asumiendo sensibilidad local adecuada, ¿qué combinación es una opción de primera línea frecuente para ITU no complicada[cite: 128, 133, 171]?",
        "answers": {
          "a": "Amoxicilina-Clavulanato",
          "b": "Cefalexina",
          "c": "Trimetoprim-Sulfametoxazol",
          "d": "Gentamicina",
          "e": "Linezolid"
        },
        "correctAnswer": "c",
        "explanation": "Trimetoprim-Sulfametoxazol (TSM) es una opción de primera línea para ITU no complicada por E. coli, siempre que la resistencia local no sea alta[cite: 128, 133]. Nitrofurantoína y Fosfomicina son otras opciones comunes. Cipro/Norfloxacina también son opciones mencionadas[cite: 171]."
      },
      {
        "title": "Caso Clínico 18: Profilaxis para Pneumocystis jirovecii",
        "description": "Paciente con VIH y recuento de CD4 < 200 células/mm³.",
        "question": "¿Qué fármaco se utiliza como profilaxis primaria de elección para prevenir la neumonía por Pneumocystis jirovecii (PCP)[cite: 135, 161]?",
        "answers": {
          "a": "Azitromicina",
          "b": "Trimetoprim-Sulfametoxazol",
          "c": "Fluconazol",
          "d": "Atovacuona",
          "e": "Pentamidina inhalada"
        },
        "correctAnswer": "b",
        "explanation": "Trimetoprim-Sulfametoxazol es el fármaco de elección para la profilaxis y tratamiento de la infección por P. jirovecii en pacientes inmunocomprometidos, como aquellos con VIH y bajo recuento de CD4[cite: 135, 161]."
      },
      {
        "title": "Caso Clínico 19: Reacción Cutánea Grave a Sulfas",
        "description": "Paciente inicia tratamiento con TSM por una ITU y a los 10 días desarrolla fiebre alta, lesiones mucosas dolorosas y un exantema maculopapular confluente con despegamiento epidérmico.",
        "question": "¿Qué reacción de hipersensibilidad grave debe sospecharse[cite: 153]?",
        "answers": {
          "a": "Urticaria simple",
          "b": "Eritema multiforme menor",
          "c": "Síndrome de Stevens-Johnson (SSJ) / Necrólisis Epidérmica Tóxica (NET)",
          "d": "Dermatitis de contacto",
          "e": "Fotosensibilidad"
        },
        "correctAnswer": "c",
        "explanation": "Las sulfonamidas son fármacos frecuentemente implicados en reacciones cutáneas graves como el SSJ y la NET, que son emergencias dermatológicas[cite: 153]."
      },
      {
        "title": "Caso Clínico 20: ITU Complicada - Pielonefritis",
        "description": "Paciente diabético de 55 años presenta fiebre, escalofríos, dolor en flanco y urocultivo positivo para E. coli. Se diagnostica Pielonefritis aguda.",
        "question": "¿Qué Fluoroquinolona de administración oral y parenteral sería una opción adecuada para este tipo de ITU complicada, asumiendo sensibilidad[cite: 164, 183]?",
        "answers": {
          "a": "Norfloxacina",
          "b": "Ácido Nalidíxico",
          "c": "Ciprofloxacina",
          "d": "Moxifloxacina",
          "e": "Fidaxomicina"
        },
        "correctAnswer": "c",
        "explanation": "Ciprofloxacina (y Levofloxacina [cite: 165]) alcanzan buenas concentraciones séricas y urinarias, cubren E. coli y están indicadas para ITU complicadas como la pielonefritis[cite: 164, 183]. Norfloxacina se concentra bien en orina pero no alcanza buenos niveles sistémicos[cite: 163]."
      },
      {
        "title": "Caso Clínico 21: Gastroenteritis por Salmonella",
        "description": "Paciente presenta diarrea acuosa abundante, fiebre y dolor abdominal tras consumir alimentos contaminados. Coprocultivo identifica Salmonella enteritidis.",
        "question": "Además de Ceftriaxona o Ampicilina, ¿qué Fluoroquinolona es una alternativa de tratamiento mencionada en el documento[cite: 170]?",
        "answers": {
          "a": "Moxifloxacina",
          "b": "Norfloxacina",
          "c": "Levofloxacina",
          "d": "Ciprofloxacina",
          "e": "Ácido Nalidíxico"
        },
        "correctAnswer": "d",
        "explanation": "Para Salmonella, el documento menciona como opciones Ampicilina, Ceftriaxona o Ciprofloxacino[cite: 170]."
      },
      {
        "title": "Caso Clínico 22: Neurotoxicidad por Quinolonas",
        "description": "Paciente anciano con historial de epilepsia controlada inicia tratamiento con Ciprofloxacina por una infección ósea. Presenta un aumento en la frecuencia de crisis convulsivas.",
        "question": "¿Qué efecto adverso de las quinolonas podría explicar este cuadro[cite: 179]?",
        "answers": {
          "a": "Prolongación del QTc",
          "b": "Neurotoxicidad (posiblemente por inhibición de GABA)",
          "c": "Tendinitis",
          "d": "Nefrotoxicidad",
          "e": "Hepatotoxicidad"
        },
        "correctAnswer": "b",
        "explanation": "Las quinolonas pueden causar neurotoxicidad, incluyendo confusión, mareo, y en pacientes susceptibles (como epilépticos o ancianos), pueden disminuir el umbral convulsivo, posiblemente por antagonismo del receptor GABA[cite: 179]. Están contraindicadas o deben usarse con precaución en epilepsia[cite: 185]."
      },
      {
        "title": "Caso Clínico 23: Tratamiento de Giardiasis",
        "description": "Viajero regresa de zona endémica con diarrea crónica, esteatorrea y dolor abdominal. Examen de heces identifica quistes de Giardia lamblia.",
        "question": "¿Qué Nitroimidazol es el tratamiento de elección para la Giardiasis[cite: 190]?",
        "answers": {
          "a": "Secnidazol",
          "b": "Tinidazol",
          "c": "Metronidazol",
          "d": "Ornidazol",
          "e": "Nitazoxanida"
        },
        "correctAnswer": "c",
        "explanation": "Metronidazol es un tratamiento de primera línea para la infección sintomática por Giardia lamblia[cite: 190]. Tinidazol es otra opción eficaz[cite: 186]."
      },
      {
        "title": "Caso Clínico 24: Absceso Hepático Amebiano",
        "description": "Paciente con fiebre, dolor en hipocondrio derecho y hepatomegalia. Ecografía muestra lesión quística compatible con absceso hepático. Serología para Entamoeba histolytica positiva.",
        "question": "¿Qué fármaco es fundamental para tratar la forma invasiva (trofozoítos tisulares) de la amebiasis[cite: 191]?",
        "answers": {
          "a": "Paromomicina",
          "b": "Metronidazol",
          "c": "Yodoquinol",
          "d": "Diloxanida",
          "e": "Teclozan"
        },
        "correctAnswer": "b",
        "explanation": "Metronidazol es altamente efectivo contra los trofozoítos invasores de E. histolytica en los tejidos (como el hígado)[cite: 191]. Usualmente se complementa con un amebicida luminal (como Paromomicina o Yodoquinol) para erradicar los quistes en el intestino."
      },
      {
        "title": "Caso Clínico 25: Profilaxis Meningitis Meningocócica",
        "description": "Estudiante universitario ha tenido contacto estrecho (conviviente) con un caso confirmado de meningitis por Neisseria meningitidis.",
        "question": "¿Qué Rifamicina se utiliza como quimioprofilaxis de elección en esta situación[cite: 205]?",
        "answers": {
          "a": "Rifabutina",
          "b": "Rifapentina",
          "c": "Rifaximina",
          "d": "Rifampicina",
          "e": "Todas las anteriores son igualmente efectivas"
        },
        "correctAnswer": "d",
        "explanation": "La Rifampicina es uno de los fármacos de elección para la quimioprofilaxis de contactos cercanos de pacientes con enfermedad meningocócica invasiva[cite: 205]."
      },
      {
        "title": "Caso Clínico 26: Infección de Prótesis Articular",
        "description": "Paciente con prótesis de cadera presenta dolor e inflamación local. Se aísla Staphylococcus epidermidis (coagulasa negativo) en el líquido sinovial. Se sospecha infección protésica asociada a biofilm.",
        "question": "¿Qué antibiótico, añadido a otros como los beta-lactámicos, es útil en infecciones estafilocócicas asociadas a dispositivos por su capacidad de penetrar biofilms[cite: 204, 206]?",
        "answers": {
          "a": "Gentamicina",
          "b": "Ciprofloxacina",
          "c": "Rifampicina",
          "d": "Clindamicina",
          "e": "Linezolid"
        },
        "correctAnswer": "c",
        "explanation": "La Rifampicina tiene buena actividad contra estafilococos y es capaz de penetrar biopelículas[cite: 204], por lo que a menudo se añade al tratamiento (junto con otro fármaco para prevenir resistencia) de infecciones asociadas a dispositivos protésicos[cite: 206]."
      },
      {
        "title": "Caso Clínico 27: Encefalopatía Hepática",
        "description": "Paciente cirrótico descompensado presenta confusión, asterixis y niveles elevados de amonio en sangre.",
        "question": "¿Qué Rifamicina no absorbible se utiliza para reducir la flora intestinal productora de amonio[cite: 207]?",
        "answers": {
          "a": "Rifampicina",
          "b": "Rifabutina",
          "c": "Rifaximina",
          "d": "Rifapentina",
          "e": "Ninguna"
        },
        "correctAnswer": "c",
        "explanation": "La Rifaximina, al no absorberse, actúa en el lumen intestinal disminuyendo las bacterias productoras de amoniaco, siendo un tratamiento para la encefalopatía hepática[cite: 207]."
      },
      {
        "title": "Caso Clínico 28: Tratamiento Tétanos",
        "description": "Paciente no vacunado sufre herida punzante contaminada y desarrolla rigidez muscular, trismus y espasmos.",
        "question": "Además de la inmunoglobulina antitetánica y el manejo de soporte, ¿qué antibiótico se prefiere para erradicar Clostridium tetani[cite: 210, 212]?",
        "answers": {
          "a": "Penicilina G",
          "b": "Clindamicina",
          "c": "Metronidazol",
          "d": "Vancomicina",
          "e": "Cefazolina"
        },
        "correctAnswer": "c",
        "explanation": "Aunque la Penicilina G es activa, se prefiere Metronidazol para tratar la infección por C. tetani, ya que la Penicilina G podría teóricamente exacerbar los espasmos al inhibir GABA[cite: 210, 212]."
      },
      {
        "title": "Caso Clínico 29: Síndrome de Lemierre",
        "description": "Adolescente con faringitis reciente presenta fiebre alta, dolor cervical unilateral y evidencia de tromboflebitis de la vena yugular interna. Se sospecha síndrome de Lemierre.",
        "question": "¿Qué bacteria anaerobia es el agente causal clásico de este síndrome[cite: 211, 215]?",
        "answers": {
          "a": "Bacteroides fragilis",
          "b": "Clostridium perfringens",
          "c": "Fusobacterium necrophorum",
          "d": "Peptostreptococcus spp.",
          "e": "Actinomyces israelii"
        },
        "correctAnswer": "c",
        "explanation": "El síndrome de Lemierre es una tromboflebitis séptica de la vena yugular interna, usualmente secundaria a una infección orofaríngea, causada clásicamente por Fusobacterium necrophorum[cite: 211, 215]."
      },
      {
        "title": "Caso Clínico 30: Infección Polimicrobiana Postquirúrgica Abdominal",
        "description": "Paciente sometido a cirugía de colon electiva presenta fiebre, dolor abdominal y drenaje purulento por la herida al 5º día postoperatorio.",
        "question": "Considerando la alta probabilidad de infección polimicrobiana (aerobios Gram negativos y anaerobios), ¿cuál sería un régimen empírico inicial adecuado según las opciones mencionadas[cite: 218, 219, 220]?",
        "answers": {
          "a": "Vancomicina sola",
          "b": "Ceftriaxona sola",
          "c": "Piperacilina-Tazobactam",
          "d": "Clindamicina sola",
          "e": "Gentamicina sola"
        },
        "correctAnswer": "c",
        "explanation": "En infecciones intraabdominales postquirúrgicas se requiere cobertura de amplio espectro, incluyendo bacilos Gram negativos y anaerobios[cite: 219]. Piperacilina-Tazobactam ofrece esta cobertura[cite: 220]. Otras opciones mencionadas incluyen Carbapenems, Metronidazol (combinado), Ampicilina/Sulbactam, Moxifloxacino o Tigeciclina[cite: 220]."
      }
    ],    
    },
};




