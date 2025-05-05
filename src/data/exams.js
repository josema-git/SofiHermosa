export const exams = {
    "examFarmacologiaII": {
      "id": "examFarmacologiaII",
      "title": "Farmacología II - Parcial #5",
      "description": "Examen basado en el documento 'Farmacología II #5 parcial.pdf', cubriendo temas de hipertensión arterial, diuréticos, calcio antagonistas, bloqueadores adrenérgicos y manejo de falla cardíaca.",
      "questions": [
        {
          "question": "1. Según la clasificación proporcionada, ¿qué cifras tensionales definen la Hipertensión Grado 1? [cite: 3]",
          "answers": {
            "a": "Sistólica <120 Y Diastólica < 80",
            "b": "Sistólica 120-129 Y Diastólica 80-84",
            "c": "Sistólica 130-139 Y/O Diastólica 85/89",
            "d": "Sistólica 140-159 Y/O Diastólica 90-99",
            "e": "Sistólica >= 180 Y/O Diastólica >= 110"
          },
          "correctAnswer": "d",
          "explanation": "El documento define la Hipertensión Grado 1 como cifras de presión sistólica entre 140-159 mmHg Y/O diastólica entre 90-99 mmHg[cite: 3]."
        },
        {
          "question": "2. ¿Cuál es el principal receptor por el cual la Angiotensina II ejerce sus efectos predominantes en humanos? [cite: 8, 9]",
          "answers": {
            "a": "AT2",
            "b": "MasR",
            "c": "AT1",
            "d": "AT4",
            "e": "PRR/ATP6AP2"
          },
          "correctAnswer": "c",
          "explanation": "El documento indica que expresamos más el receptor AT1 y que nuestra respuesta fisiológica a la Angiotensina II es explicada principalmente por este receptor[cite: 9]."
        },
        {
          "question": "3. ¿Qué efecto tiene la activación de los receptores AT1 en los vasos sanguíneos? [cite: 12]",
          "answers": {
            "a": "Vasodilatación",
            "b": "Disminución de la actividad de PKC",
            "c": "Vasoconstricción",
            "d": "Aumento de la producción de Óxido Nítrico",
            "e": "Inhibición de endotelina"
          },
          "correctAnswer": "c",
          "explanation": "La activación de los receptores AT1 en los vasos sanguíneos produce vasoconstricción, asociada a receptores Gq y estímulo de la actividad de PKC[cite: 12]."
        },
        {
          "question": "4. Además de convertir Angiotensina I en Angiotensina II, ¿qué otra función importante tiene la ECA (Enzima Convertidora de Angiotensina)? [cite: 23]",
          "answers": {
            "a": "Degradar aldosterona",
            "b": "Activar la renina",
            "c": "Degradar (inactivar) bradiquininas",
            "d": "Sintetizar endotelina",
            "e": "Liberar ADH"
          },
          "correctAnswer": "c",
          "explanation": "La ECA también puede degradar (inactivar) bradiquininas, que son sustancias vasodilatadoras[cite: 23]."
        },
        {
          "question": "5. ¿Cuál de los siguientes fármacos es un inhibidor de la ECA (IECA) del grupo sulfhidrilo, asociado a reacciones inmunológicas? [cite: 24]",
          "answers": {
            "a": "Enalapril",
            "b": "Ramipril",
            "c": "Lisinopril",
            "d": "Captopril",
            "e": "Fosinopril"
          },
          "correctAnswer": "d",
          "explanation": "El Captopril pertenece al grupo sulfhidrilo y se menciona que este grupo puede causar reacciones inmunológicas[cite: 24]."
        },
         {
          "question": "6. ¿Cuál es el efecto adverso más frecuente asociado a los IECA, relacionado con el metabolismo de las bradiquininas? [cite: 30, 31]",
          "answers": {
            "a": "Hipercalemia",
            "b": "Disfunción renal",
            "c": "Tos",
            "d": "Angioedema",
            "e": "Hipotensión"
          },
          "correctAnswer": "c",
          "explanation": "La tos es el efecto adverso más frecuente de los IECA, causado por la acumulación de bradiquininas al no ser metabolizadas por la ECA, especialmente en el pulmón[cite: 30, 31]."
        },
        {
          "question": "7. ¿En qué situación están contraindicados los IECA y los ARA II? [cite: 35]",
          "answers": {
            "a": "Pacientes con falla cardíaca",
            "b": "Pacientes con diabetes",
            "c": "Mujeres embarazadas o en edad fértil",
            "d": "Pacientes con hipercolesterolemia",
            "e": "Pacientes con enfermedad renal crónica leve"
          },
          "correctAnswer": "c",
          "explanation": "Los IECA y ARA II están contraindicados en mujeres embarazadas o en edad fértil debido al riesgo de complicaciones como oligohidramnios, anuria y retardo en el crecimiento intrauterino[cite: 35]."
        },
        {
          "question": "8. ¿Cuál es el mecanismo de acción principal de los ARA II (Antagonistas de los Receptores de Angiotensina II) como el Losartán? [cite: 36]",
          "answers": {
            "a": "Inhibir la enzima ECA",
            "b": "Bloquear los receptores AT2 únicamente",
            "c": "Bloquear los receptores AT1",
            "d": "Inhibir la liberación de renina",
            "e": "Aumentar la degradación de bradiquininas"
          },
          "correctAnswer": "c",
          "explanation": "Los ARA II actúan como inhibidores del receptor AT1, aunque también pueden inhibir AT2, tienen mayor afinidad por AT1[cite: 36]."
        },
        {
          "question": "9. ¿Por qué los ARA II tienen menor riesgo de producir tos en comparación con los IECA? [cite: 37]",
          "answers": {
            "a": "Porque inhiben la renina",
            "b": "Porque bloquean los receptores AT2",
            "c": "Porque no inhiben la ECA y no afectan el metabolismo de las bradiquininas",
            "d": "Porque son profármacos",
            "e": "Porque tienen mayor eliminación biliar"
          },
          "correctAnswer": "c",
          "explanation": "Los ARA II no inhiben la ECA, por lo tanto, no interfieren con la degradación de bradiquininas, que es la causa de la tos asociada a los IECA[cite: 37]."
        },
        {
          "question": "10. ¿Qué combinación farmacológica, inhibidora del SRAA y de la neprilisina, ha demostrado mayor eficacia en la prevención de la falla cardíaca con fracción de eyección reducida? [cite: 47, 48]",
          "answers": {
            "a": "Enalapril + Hidroclorotiazida",
            "b": "Losartán + Amlodipina",
            "c": "Sacubitril + Valsartán",
            "d": "Captopril + Furosemida",
            "e": "Ramipril + Espironolactona"
          },
          "correctAnswer": "c",
          "explanation": "La combinación Sacubitril (inhibidor de neprilisina) + Valsartán (ARA II) (ARNI) ha mostrado mayor eficacia en la prevención de la falla cardíaca con fracción de eyección reducida[cite: 47, 48]."
        },
        {
          "question": "11. ¿En qué segmento de la nefrona actúan principalmente los diuréticos de ASA como la Furosemida? [cite: 58]",
          "answers": {
            "a": "Túbulo contorneado proximal",
            "b": "Rama descendente del asa de Henle",
            "c": "Porción ascendente gruesa del asa de Henle",
            "d": "Túbulo contorneado distal",
            "e": "Túbulo colector"
          },
          "correctAnswer": "c",
          "explanation": "Los diuréticos de ASA actúan inhibiendo el cotransportador Na+-K+-2Cl- en la porción ascendente gruesa del asa de Henle[cite: 58, 62]."
        },
        {
          "question": "12. ¿Cuál de los siguientes desequilibrios electrolíticos NO es un efecto adverso característico de los diuréticos de ASA? [cite: 67]",
          "answers": {
            "a": "Hiponatremia",
            "b": "Hipopotasemia",
            "c": "Hipocalcemia",
            "d": "Hipermagnesemia",
            "e": "Hipomagnesemia"
          },
          "correctAnswer": "d",
          "explanation": "Los diuréticos de ASA causan pérdida de Na+, K+, Ca++ y Mg++, por lo que pueden producir hiponatremia, hipopotasemia, hipocalcemia e hipomagnesemia, pero no hipermagnesemia[cite: 61, 67]."
        },
        {
          "question": "13. ¿Qué tipo de diurético es considerado de primera línea para el manejo de la Hipertensión Arterial Sistólica Aislada? [cite: 74, 81, 83]",
          "answers": {
            "a": "Diuréticos de ASA",
            "b": "Diuréticos Tiazídicos",
            "c": "Ahorradores de potasio (Inhibidores de ENaC)",
            "d": "Antagonistas de aldosterona",
            "e": "Diuréticos osmóticos"
          },
          "correctAnswer": "b",
          "explanation": "Los diuréticos tiazídicos son usados como antihipertensivos, especialmente en H.T.A. sistólica aislada, debido a su efecto vasodilatador que perdura en el tiempo[cite: 74, 81, 83]."
        },
         {
          "question": "14. ¿Cuál es el mecanismo de acción de los diuréticos tiazídicos como la Hidroclorotiazida? [cite: 75]",
          "answers": {
            "a": "Inhibir el simporte Na+-K+-2Cl- en el asa de Henle",
            "b": "Bloquear los canales de Na+ (ENaC) en el túbulo colector",
            "c": "Inhibir el cotransportador Na+/Cl- en el túbulo contorneado distal",
            "d": "Bloquear los receptores de aldosterona",
            "e": "Inhibir la anhidrasa carbónica en el túbulo proximal"
          },
          "correctAnswer": "c",
          "explanation": "Las tiazidas actúan inhibiendo el cotransportador Na+/Cl- localizado en la membrana luminal del túbulo contorneado distal[cite: 75]."
        },
        {
          "question": "15. ¿Qué efecto sobre los niveles séricos de Calcio tienen característicamente los diuréticos tiazídicos? [cite: 77, 79]",
          "answers": {
            "a": "Disminuyen el Calcio sérico (Hipocalcemia)",
            "b": "No afectan los niveles de Calcio",
            "c": "Aumentan el Calcio sérico (Hipercalcemia)",
            "d": "Aumentan la excreción urinaria de Calcio",
            "e": "Disminuyen la reabsorción de Calcio"
          },
          "correctAnswer": "c",
          "explanation": "Los diuréticos tiazídicos aumentan la reabsorción de Calcio en el túbulo distal, lo que puede llevar a un aumento del Calcio sérico (Hipercalcemia)[cite: 77, 79]."
        },
        {
          "question": "16. ¿Cuál es el principal uso clínico de los diuréticos ahorradores de potasio como Amilorida y Triamtereno? [cite: 92]",
          "answers": {
            "a": "Tratamiento de primera línea para HTA",
            "b": "Manejo de edema severo",
            "c": "Prevención de litiasis cálcica",
            "d": "Combinados con otros diuréticos para contrarrestar la pérdida de K+",
            "e": "Tratamiento de glaucoma"
          },
          "correctAnswer": "d",
          "explanation": "Su principal utilidad es combinarse con otros diuréticos (como tiazidas o de ASA) para disminuir la pérdida de potasio que estos inducen[cite: 92, 93]."
        },
         {
          "question": "17. ¿Qué fármaco es un antagonista del receptor mineralocorticoide con mayor afinidad por los receptores renales y menos efectos adversos hormonales que la Espironolactona? [cite: 94]",
          "answers": {
            "a": "Amilorida",
            "b": "Furosemida",
            "c": "Hidroclorotiazida",
            "d": "Eplerenona",
            "e": "Manitol"
          },
          "correctAnswer": "d",
          "explanation": "La Eplerenona es un antagonista del receptor mineralocorticoide más selectivo que la Espironolactona, con menos afinidad por receptores de progesterona y andrógenos, disminuyendo así los efectos adversos hormonales[cite: 94]."
        },
        {
          "question": "18. Además de su efecto diurético, ¿qué otro beneficio importante tienen los antagonistas del receptor mineralocorticoide en pacientes con falla cardíaca? [cite: 97, 99]",
          "answers": {
            "a": "Aumentar la frecuencia cardíaca",
            "b": "Inducir vasoconstricción arterial",
            "c": "Disminuir la fibrosis y remodelación cardíaca",
            "d": "Aumentar la excreción de potasio",
            "e": "Producir hiperglucemia"
          },
          "correctAnswer": "c",
          "explanation": "Los antagonistas de aldosterona disminuyen la fibrosis y la remodelación cardíaca, un efecto beneficioso en la falla cardíaca[cite: 97, 99]."
        },
        {
          "question": "19. ¿Cuál es el mecanismo de acción principal del Manitol como diurético osmótico? [cite: 101]",
          "answers": {
            "a": "Bloquea canales iónicos específicos",
            "b": "Inhibe la anhidrasa carbónica",
            "c": "Actúa como soluto no reabsorbible, extrayendo agua por ósmosis",
            "d": "Antagoniza receptores hormonales",
            "e": "Abre canales de potasio"
          },
          "correctAnswer": "c",
          "explanation": "El Manitol es un soluto que no se reabsorbe en los túbulos renales. Ejerce una fuerza osmótica que extrae agua y electrolitos del espacio intracelular y disminuye su reabsorción tubular[cite: 101]."
        },
        {
          "question": "20. ¿En qué condición clínica se utiliza principalmente la Acetazolamida por su capacidad de inhibir la anhidrasa carbónica en el ojo? [cite: 102, 103, 107]",
          "answers": {
            "a": "Hipertensión arterial",
            "b": "Falla cardíaca congestiva",
            "c": "Glaucoma",
            "d": "Edema pulmonar",
            "e": "Cirrosis hepática"
          },
          "correctAnswer": "c",
          "explanation": "La Acetazolamida inhibe la anhidrasa carbónica en el ojo, disminuyendo la producción de humor acuoso y, por ende, la presión intraocular, siendo útil en el tratamiento del glaucoma[cite: 102, 103, 107]."
        },
        {
          "question": "21. ¿Qué tipo de canales de Calcio son el blanco principal de los calcio antagonistas utilizados en HTA, como Nifedipina y Verapamilo? [cite: 110, 111]",
          "answers": {
            "a": "Canales tipo T",
            "b": "Canales tipo N",
            "c": "Canales tipo L",
            "d": "Canales tipo P/Q",
            "e": "Canales tipo R"
          },
          "correctAnswer": "c",
          "explanation": "Los calcio antagonistas usados en HTA actúan principalmente sobre los canales de Calcio tipo L (lentos, de umbral alto), presentes en el corazón y músculo liso vascular[cite: 111]."
        },
        {
          "question": "22. ¿Cuál es la principal diferencia farmacodinámica entre los calcio antagonistas dihidropiridínicos (DHP) como Amlodipina y los no-dihidropiridínicos (No-DHP) como Verapamilo y Diltiazem? [cite: 119, 141]",
          "answers": {
            "a": "Los DHP son más cardioselectivos que los No-DHP.",
            "b": "Los No-DHP tienen mayor efecto vasodilatador periférico que los DHP.",
            "c": "Los DHP tienen efectos inotrópicos y cronotrópicos negativos significativos, mientras que los No-DHP no.",
            "d": "Los No-DHP (Verapamilo, Diltiazem) tienen mayor efecto sobre el nodo SA y AV (cardioselectividad) que los DHP.",
            "e": "Los DHP inhiben la CYP3A4, mientras que los No-DHP no."
          },
          "correctAnswer": "d",
          "explanation": "Los No-DHP (Verapamilo y Diltiazem) son más cardioselectivos, ejerciendo mayores efectos sobre la conducción cardíaca (cronotropismo y dromotropismo negativos) en comparación con los DHP, que son predominantemente vasodilatadores vasculares[cite: 137, 141, 143]."
        },
        {
          "question": "23. ¿Cuál de los siguientes calcio antagonistas dihidropiridínicos tiene una vida media más larga y un inicio de acción más lento, lo que evita la activación simpática refleja? [cite: 120, 121]",
          "answers": {
            "a": "Nifedipina (liberación inmediata)",
            "b": "Nicardipina",
            "c": "Amlodipina",
            "d": "Clevidipina",
            "e": "Nimodipina"
          },
          "correctAnswer": "c",
          "explanation": "La Amlodipina se caracteriza por tener una vida media más larga y un inicio de acción lento, lo que minimiza la taquicardia refleja asociada a otros DHP de acción rápida como la Nifedipina[cite: 121]."
        },
        {
          "question": "24. ¿Qué efecto adverso común se asocia a los calcio antagonistas DHP debido a su potente efecto vasodilatador periférico? [cite: 132, 133]",
          "answers": {
            "a": "Bradicardia",
            "b": "Constipación",
            "c": "Edema de extremidades inferiores",
            "d": "Hipertrofia ventricular",
            "e": "Tos seca"
          },
          "correctAnswer": "c",
          "explanation": "El edema de extremidades inferiores es un efecto adverso frecuente de los DHP, relacionado con la vasodilatación arteriolar preferencial que aumenta la presión hidrostática capilar[cite: 133]."
        },
        {
          "question": "25. ¿En qué tipo de pacientes se debe administrar con precaución los calcio antagonistas No-DHP (Verapamilo, Diltiazem) debido a sus efectos cardíacos? [cite: 116, 138]",
          "answers": {
            "a": "Pacientes con migraña",
            "b": "Pacientes con Enfermedad de Raynaud",
            "c": "Pacientes con baja reserva cardíaca o trastornos de la conducción",
            "d": "Pacientes con hipertrofia prostática",
            "e": "Pacientes de raza negra"
          },
          "correctAnswer": "c",
          "explanation": "Debido a sus efectos inotrópicos, cronotrópicos y dromotrópicos negativos, los No-DHP deben usarse con precaución en pacientes con disfunción sistólica (baja reserva cardíaca) o trastornos preexistentes de la conducción AV[cite: 116, 138]."
        },
        {
          "question": "26. ¿Qué efecto principal tienen los beta-bloqueadores sobre la liberación de renina en el riñón?",
          "answers": {
            "a": "La aumentan significativamente",
            "b": "No tienen efecto sobre la renina",
            "c": "La disminuyen",
            "d": "La aumentan solo si son no selectivos",
            "e": "La disminuyen solo si son selectivos B1"
          },
          "correctAnswer": "c",
          "explanation": "Los beta-bloqueadores, especialmente al bloquear los receptores B1 en las células yuxtaglomerulares del riñón, disminuyen la liberación de renina."
        },
        {
          "question": "27. ¿Cuál de los siguientes beta-bloqueadores es cardio selectivo (B1 selectivo) y además promueve la liberación de Óxido Nítrico?",
          "answers": {
            "a": "Propranolol",
            "b": "Atenolol",
            "c": "Metoprolol",
            "d": "Carvedilol",
            "e": "Nebivolol"
          },
          "correctAnswer": "e",
          "explanation": "El Nebivolol es un beta-bloqueador cardio selectivo (B1) que adicionalmente tiene un efecto vasodilatador mediado por la liberación de Óxido Nítrico (ON)."
        },
        {
          "question": "28. ¿Qué tipo de fármacos son Carvedilol y Labetalol?",
          "answers": {
            "a": "Beta-bloqueadores B1 selectivos",
            "b": "Beta-bloqueadores no selectivos",
            "c": "Bloqueadores Alfa-1 selectivos",
            "d": "Bloqueadores Beta y Alfa-1",
            "e": "Calcio antagonistas DHP"
          },
          "correctAnswer": "d",
          "explanation": "Carvedilol y Labetalol son fármacos que bloquean tanto los receptores Beta (no selectivos o con cierta selectividad) como los receptores Alfa-1 adrenérgicos."
        },
        {
          "question": "29. ¿Por qué no se recomienda suspender abruptamente el tratamiento con beta-bloqueadores?",
          "answers": {
            "a": "Por riesgo de hipotensión severa",
            "b": "Porque causan daño renal agudo",
            "c": "Por el riesgo de una respuesta simpática exagerada (regulación al alza de receptores)",
            "d": "Porque inducen hiperglucemia",
            "e": "Porque generan tolerancia rápidamente"
          },
          "correctAnswer": "c",
          "explanation": "La suspensión abrupta puede desencadenar una respuesta simpática exagerada debido a la regulación al alza (aumento en el número) de los receptores beta durante el bloqueo crónico."
        },
        {
          "question": "30. ¿Cuál de los siguientes beta-bloqueadores se prefiere en el embarazo para el manejo de la HTA?",
          "answers": {
            "a": "Propranolol",
            "b": "Atenolol",
            "c": "Labetalol",
            "d": "Esmolol",
            "e": "Nebivolol"
          },
          "correctAnswer": "c",
          "explanation": "El Labetalol es uno de los beta-bloqueadores mencionados como opción para el manejo de la HTA durante el embarazo."
        },
        {
          "question": "31. ¿Cuál es el mecanismo de acción de los bloqueadores alfa-1 adrenérgicos como Prazosina?",
          "answers": {
            "a": "Estimulan los receptores alfa-2 presinápticos",
            "b": "Bloquean selectivamente los receptores beta-1",
            "c": "Bloquean selectiva y competitivamente los receptores alfa-1 postsinápticos",
            "d": "Inhiben la recaptación de norepinefrina",
            "e": "Bloquean los canales de calcio tipo L"
          },
          "correctAnswer": "c",
          "explanation": "Prazosina, Terazosina y Doxazosina son bloqueadores selectivos y competitivos de los receptores alfa-1 adrenérgicos postsinápticos."
        },
        {
          "question": "32. ¿Qué efecto adverso importante requiere iniciar el tratamiento con bloqueadores alfa-1 a dosis bajas y preferiblemente en la noche?",
          "answers": {
            "a": "Taquicardia refleja",
            "b": "Hiperglucemia",
            "c": "Hipotensión postural / Síncope de primera dosis",
            "d": "Tos seca",
            "e": "Broncoespasmo"
          },
          "correctAnswer": "c",
          "explanation": "Estos fármacos pueden causar hipotensión postural significativa (efecto de primera dosis) o síncope, por lo que se recomienda iniciar con dosis bajas por la noche."
        },
        {
          "question": "33. ¿Cuál es el mecanismo de acción de la Clonidina como antihipertensivo?",
          "answers": {
            "a": "Bloqueo de receptores alfa-1 postsinápticos",
            "b": "Estimulación de receptores alfa-2A adrenérgicos presinápticos y centrales",
            "c": "Bloqueo de receptores beta no selectivo",
            "d": "Inhibición directa de la renina",
            "e": "Apertura de canales de potasio"
          },
          "correctAnswer": "b",
          "explanation": "La Clonidina es un agonista (estimulante) de los receptores alfa-2A adrenérgicos a nivel presináptico y en el SNC, lo que disminuye el flujo simpático eferente."
        },
         {
          "question": "34. ¿Qué fármaco antihipertensivo actúa como un 'falso neurotransmisor', disminuyendo la síntesis de catecolaminas?",
          "answers": {
            "a": "Clonidina",
            "b": "Prazosina",
            "c": "Hidralazina",
            "d": "Alfa-metildopa",
            "e": "Minoxidil"
          },
          "correctAnswer": "d",
          "explanation": "La Alfa-metildopa actúa como un precursor que se convierte en un 'falso neurotransmisor' (alfa-metilnorepinefrina), que es menos potente que la norepinefrina y estimula los receptores alfa-2, disminuyendo el tono simpático."
        },
        {
          "question": "35. ¿Cuál es el mecanismo de acción del Minoxidil como vasodilatador?",
          "answers": {
            "a": "Liberación de óxido nítrico",
            "b": "Bloqueo de canales de calcio",
            "c": "Apertura de canales de potasio dependientes de ATP",
            "d": "Bloqueo de receptores alfa-1",
            "e": "Inhibición de la fosfodiesterasa"
          },
          "correctAnswer": "c",
          "explanation": "El Minoxidil actúa abriendo canales de potasio sensibles a ATP en las células del músculo liso vascular, causando hiperpolarización y relajación arterial."
        },
         {
          "question": "36. ¿Qué efecto adverso característico, no relacionado con la presión arterial, se asocia al uso de Minoxidil, especialmente sistémico?",
          "answers": {
            "a": "Ginecomastia",
            "b": "Hipertricosis",
            "c": "Fotosensibilidad",
            "d": "Ototoxicidad",
            "e": "Hiperuricemia"
          },
          "correctAnswer": "b",
          "explanation": "La hipertricosis (crecimiento excesivo de vello) es un efecto adverso conocido del Minoxidil."
        },
        {
          "question": "37. ¿Cuál es el metabolito activo responsable del efecto vasodilatador del Nitroprusiato de Sodio?",
          "answers": {
            "a": "Cianuro",
            "b": "Tiocianato",
            "c": "Óxido Nítrico (NO)",
            "d": "Nitrito",
            "e": "Metahemoglobina"
          },
          "correctAnswer": "c",
          "explanation": "El Nitroprusiato de Sodio es un profármaco que libera Óxido Nítrico (NO) in vivo, el cual es el responsable directo de la vasodilatación arterial y venosa."
        },
        {
          "question": "38. ¿Qué toxicidad puede ocurrir con el uso prolongado (más de 72 horas) o en pacientes con insuficiencia renal tratados con Nitroprusiato de Sodio?",
          "answers": {
            "a": "Toxicidad por acumulación de potasio",
            "b": "Toxicidad por cianuro y/o tiocianato",
            "c": "Nefrotoxicidad directa",
            "d": "Hepatotoxicidad severa",
            "e": "Cardiotoxicidad"
          },
          "correctAnswer": "b",
          "explanation": "El metabolismo del Nitroprusiato libera cianuro, que luego se metaboliza a tiocianato. El uso prolongado o la insuficiencia renal pueden llevar a la acumulación de estos compuestos y causar toxicidad."
        },
        {
          "question": "39. ¿Cuál es el mecanismo principal por el cual los Nitratos orgánicos (Nitroglicerina, Dinitrato de Isosorbide) ejercen su efecto antianginoso?",
          "answers": {
            "a": "Aumentan la contractilidad cardíaca",
            "b": "Producen vasodilatación arterial coronaria predominantemente",
            "c": "Reducen la frecuencia cardíaca",
            "d": "Producen venodilatación, reduciendo la precarga y el consumo de oxígeno miocárdico",
            "e": "Bloquean los canales de sodio"
          },
          "correctAnswer": "d",
          "explanation": "Los nitratos actúan principalmente sobre el lecho venoso, causando venodilatación. Esto reduce el retorno venoso (precarga) y la tensión de la pared ventricular, disminuyendo así el consumo de oxígeno del miocardio."
        },
        {
          "question": "40. ¿Qué fenómeno limita la eficacia de los nitratos en el tratamiento crónico de la angina y requiere esquemas de dosificación con periodos libres del fármaco?",
          "answers": {
            "a": "Taquifilaxia",
            "b": "Tolerancia",
            "c": "Resistencia",
            "d": "Hipersensibilidad",
            "e": "Acumulación tóxica"
          },
          "correctAnswer": "b",
          "explanation": "El desarrollo de tolerancia es un problema significativo con el uso continuo de nitratos, atribuido al agotamiento de grupos sulfhidrilo, generación de radicales libres y activación neurohormonal compensatoria. Se requieren intervalos libres de nitratos para restaurar la sensibilidad."
        },
        {
          "question": "41. ¿Con qué clase de fármacos está contraindicado el uso concomitante de Nitratos debido al riesgo de hipotensión severa?",
          "answers": {
            "a": "Inhibidores de la ECA",
            "b": "Beta-bloqueadores",
            "c": "Diuréticos tiazídicos",
            "d": "Inhibidores de la fosfodiesterasa tipo 5 (PDE5) (ej. Sildenafil)",
            "e": "Calcio antagonistas"
          },
          "correctAnswer": "d",
          "explanation": "La coadministración de nitratos con inhibidores de la PDE5 (usados para disfunción eréctil o hipertensión pulmonar) está contraindicada por el riesgo de una caída profunda y peligrosa de la presión arterial."
        },
        {
          "question": "42. ¿Cuál es el mecanismo de acción propuesto para la Hidralazina como vasodilatador?",
          "answers": {
            "a": "Liberación directa de óxido nítrico",
            "b": "Bloqueo de canales de calcio",
            "c": "Apertura de canales de potasio",
            "d": "Relajación del músculo liso arterial (mecanismo exacto no del todo claro, posible inhibición de oxidasa y reducción de ROS)",
            "e": "Bloqueo de receptores alfa-1"
          },
          "correctAnswer": "d",
          "explanation": "La Hidralazina reduce la resistencia vascular predominantemente en el lecho arterial. Aunque el mecanismo exacto no está completamente dilucidado, se sugiere que inhibe una oxidasa y reduce la producción de especies reactivas de oxígeno (ROS)."
        },
        {
          "question": "43. ¿En qué grupo de pacientes con falla cardíaca sistólica (FEr) se recomienda específicamente la combinación de Hidralazina + Nitratos (Dinitrato de Isosorbide)?",
          "answers": {
            "a": "Todos los pacientes con FEr como primera línea",
            "b": "Pacientes con intolerancia o contraindicación para IECA/ARA II",
            "c": "Pacientes con FEr y enfermedad renal crónica avanzada",
            "d": "Pacientes con FEr y diabetes mellitus",
            "e": "Pacientes jóvenes sin comorbilidades"
          },
          "correctAnswer": "b",
          "explanation": "La combinación Hidralazina + Nitratos se considera una alternativa, especialmente en pacientes con FEr que no toleran o tienen contraindicaciones para los inhibidores del SRAA (IECA/ARA II/ARNI), y también se menciona su beneficio en población afroamericana."
        },
        {
          "question": "44. ¿Cuál es el mecanismo de acción de la Ivabradina, utilizada en algunos pacientes con falla cardíaca y angina?",
          "answers": {
            "a": "Bloqueo de receptores beta-1",
            "b": "Inhibición de los canales If ('funny channels') en el nodo sinusal",
            "c": "Bloqueo de canales de calcio tipo L",
            "d": "Apertura de canales de potasio",
            "e": "Estimulación de la guanilato ciclasa"
          },
          "correctAnswer": "b",
          "explanation": "La Ivabradina inhibe selectivamente la corriente If en las células del nodo sinusal, lo que enlentece la despolarización diastólica y reduce la frecuencia cardíaca sin afectar la contractilidad."
        },
         {
          "question": "45. ¿Qué clase de fármacos, como la Dapagliflozina, han demostrado reducir hospitalizaciones por falla cardíaca tanto en pacientes con FE reducida (FEr) como preservada (FEp)?",
          "answers": {
            "a": "Antagonistas de aldosterona",
            "b": "ARNIs (Sacubitril/Valsartán)",
            "c": "Inhibidores de SGLT2",
            "d": "Beta-bloqueadores",
            "e": "Diuréticos de ASA"
          },
          "correctAnswer": "c",
          "explanation": "Los inhibidores del cotransportador sodio-glucosa tipo 2 (iSGLT2), como la Dapagliflozina, han demostrado beneficios cardiovasculares, incluyendo la reducción de hospitalizaciones por IC, en pacientes con y sin diabetes, y tanto en FEr como en FEp."
        },
        {
          "question": "46. En un paciente con Falla Cardíaca Aguda Descompensada que se presenta 'Frío y Húmedo' (hipoperfusión y congestión), ¿cuál sería el manejo inicial más apropiado según el esquema presentado?",
          "answers": {
            "a": "Solo diuréticos",
            "b": "Solo vasodilatadores",
            "c": "Vasopresor, Inotrópico y Diuréticos (posiblemente asistencia ventricular)",
            "d": "Líquidos intravenosos",
            "e": "Ajustar terapia oral únicamente"
          },
          "correctAnswer": "c",
          "explanation": "El perfil 'Frío y Húmedo' indica hipoperfusión tisular y congestión. El manejo requiere mejorar la perfusión (vasopresor/inotrópico) y aliviar la congestión (diuréticos), pudiendo requerir soporte avanzado."
        },
        {
          "question": "47. ¿Cuál es el fármaco de primera línea para el tratamiento crónico de la angina estable?",
          "answers": {
            "a": "Nitratos de acción prolongada",
            "b": "Beta-bloqueadores y/o Calcio antagonistas",
            "c": "Ivabradina",
            "d": "Ranolazina",
            "e": "Trimetazidina"
          },
          "correctAnswer": "b",
          "explanation": "La terapia de primera línea para el control de los síntomas en la angina crónica estable incluye beta-bloqueadores y/o calcio antagonistas."
        },
        {
          "question": "48. ¿Cuál es el mecanismo de acción de la Ranolazina, utilizada como antianginoso de segunda línea?",
          "answers": {
            "a": "Abre canales de potasio",
            "b": "Bloquea los canales If",
            "c": "Inhibe la 3-cetoacil-CoA tiolasa",
            "d": "Bloquea la corriente tardía de sodio (INa)",
            "e": "Libera óxido nítrico"
          },
          "correctAnswer": "d",
          "explanation": "La Ranolazina actúa bloqueando la corriente tardía de sodio en las células miocárdicas, lo que indirectamente reduce la sobrecarga de calcio intracelular durante la isquemia y mejora la relajación diastólica."
        },
        {
          "question": "49. ¿Cuál de los siguientes fármacos NO es un beta-bloqueador utilizado comúnmente en el manejo de la falla cardíaca con fracción de eyección reducida (FEr)?",
          "answers": {
            "a": "Metoprolol (succinato)",
            "b": "Carvedilol",
            "c": "Bisoprolol",
            "d": "Nebivolol",
            "e": "Atenolol"
          },
          "correctAnswer": "e",
          "explanation": "Mientras Metoprolol (succinato), Carvedilol, Bisoprolol y Nebivolol han demostrado beneficios en estudios clínicos en FEr, el Atenolol no es uno de los beta-bloqueadores preferidos o con evidencia robusta para esta indicación específica."
        },
        {
          "question": "50. ¿Qué efecto adverso se asocia específicamente con la Espironolactona debido a su interacción con receptores hormonales no mineralocorticoides?",
          "answers": {
            "a": "Hiperpotasemia",
            "b": "Hipotensión",
            "c": "Ginecomastia",
            "d": "Tos",
            "e": "Acidosis metabólica"
          },
          "correctAnswer": "c",
          "explanation": "La Espironolactona tiene similitud estructural con hormonas esteroideas y puede interactuar con receptores de progesterona y andrógenos, causando efectos adversos como ginecomastia, irregularidad menstrual e impotencia, a diferencia de la Eplerenona que es más selectiva."
        }
      ],
      "clinicalCases": [
            {
              "title": "Caso Clínico 1: HTA Recién Diagnosticada",
              "description": "Paciente masculino de 55 años, sin comorbilidades conocidas, acude a consulta y se le diagnostica Hipertensión Arterial Grado 1 (PA 148/94 mmHg).",
              "question": "¿Cuál sería una opción farmacológica inicial apropiada según las guías generales mencionadas?",
              "answers": {
                "a": "Nitroprusiato de sodio IV",
                "b": "Minoxidil oral",
                "c": "Un IECA (ej. Enalapril) o un ARA II (ej. Losartán)",
                "d": "Furosemida IV",
                "e": "Propranolol"
              },
              "correctAnswer": "c",
              "explanation": "En HTA Grado 1 sin comorbilidades significativas, los IECA o ARA II son considerados fármacos de primera línea, al igual que las tiazidas o calcio antagonistas DHP."
            },
            {
              "title": "Caso Clínico 2: HTA y Diabetes",
              "description": "Paciente femenina de 62 años con Diabetes Mellitus tipo 2 e Hipertensión Grado 2 (PA 165/102 mmHg). Presenta microalbuminuria.",
              "question": "¿Qué grupo farmacológico antihipertensivo ofrece un beneficio adicional en la prevención de la nefropatía diabética?",
              "answers": {
                "a": "Beta-bloqueadores no selectivos",
                "b": "Calcio antagonistas No-DHP (Verapamilo)",
                "c": "Diuréticos de ASA (Furosemida)",
                "d": "IECA o ARA II",
                "e": "Bloqueadores alfa-1"
              },
              "correctAnswer": "d",
              "explanation": "Los IECA y ARA II han demostrado reducir la progresión de la nefropatía diabética (reducción de microalbuminuria) además de controlar la PA."
            },
            {
              "title": "Caso Clínico 3: Tos Persistente con IECA",
              "description": "Paciente tratado con Enalapril por HTA desarrolla tos seca persistente que afecta su calidad de vida.",
              "question": "¿Cuál es la conducta farmacológica más adecuada?",
              "answers": {
                "a": "Aumentar la dosis de Enalapril",
                "b": "Añadir un antitusígeno como codeína",
                "c": "Cambiar Enalapril por Captopril",
                "d": "Suspender Enalapril y cambiar a un ARA II (ej. Valsartán)",
                "e": "Añadir un diurético tiazídico"
              },
              "correctAnswer": "d",
              "explanation": "La tos es un efecto adverso común de los IECA por acumulación de bradiquininas. Cambiar a un ARA II, que no inhibe la ECA, es la estrategia recomendada para resolver la tos."
            },
            {
              "title": "Caso Clínico 4: Angioedema",
              "description": "Paciente en tratamiento con Lisinopril presenta súbitamente edema facial y de vías respiratorias (angioedema).",
              "question": "Además de suspender el Lisinopril inmediatamente, ¿qué implicación tiene este evento para el futuro tratamiento antihipertensivo?",
              "answers": {
                "a": "Puede volver a usar Lisinopril a dosis más bajas",
                "b": "Debe evitarse el uso futuro de cualquier IECA y considerar los ARA II con precaución",
                "c": "Puede cambiarse a cualquier otro IECA sin problema",
                "d": "El angioedema no contraindica el uso futuro de IECA",
                "e": "Debe tratarse únicamente con beta-bloqueadores"
              },
              "correctAnswer": "b",
              "explanation": "El angioedema es una contraindicación absoluta para reintroducir cualquier IECA. Aunque el riesgo es menor con ARA II, se deben usar con precaución si hubo angioedema previo con IECA."
            },
            {
              "title": "Caso Clínico 5: Falla Cardíaca con FE Reducida",
              "description": "Paciente con Insuficiencia Cardíaca y Fracción de Eyección del 35% (FEr), ya en tratamiento con IECA y beta-bloqueador.",
              "question": "¿Qué grupo de fármacos se añadiría para mejorar el pronóstico y reducir la mortalidad, según las guías?",
              "answers": {
                "a": "Un calcio antagonista DHP (Amlodipina)",
                "b": "Un antagonista del receptor mineralocorticoide (Espironolactona o Eplerenona)",
                "c": "Digoxina",
                "d": "Un diurético de ASA a dosis altas",
                "e": "Un bloqueador alfa-1"
              },
              "correctAnswer": "b",
              "explanation": "Los antagonistas del receptor mineralocorticoide (ARM) son parte fundamental del tratamiento de la FEr, junto con IECA/ARAII/ARNI y beta-bloqueadores, para reducir mortalidad y hospitalizaciones."
            },
             {
              "title": "Caso Clínico 6: Edema por Sobrecarga",
              "description": "Paciente con Falla Cardíaca descompensada presenta edema importante en miembros inferiores, disnea y signos de congestión pulmonar.",
              "question": "¿Qué tipo de diurético es el más apropiado para manejar la sobrecarga de volumen aguda?",
              "answers": {
                "a": "Hidroclorotiazida",
                "b": "Espironolactona",
                "c": "Amilorida",
                "d": "Furosemida (Diurético de ASA)",
                "e": "Acetazolamida"
              },
              "correctAnswer": "d",
              "explanation": "Los diuréticos de ASA (como Furosemida) son los más potentes para eliminar volumen rápidamente y son de elección en estados de sobrecarga hídrica aguda como la IC descompensada."
            },
            {
              "title": "Caso Clínico 7: Hipopotasemia con Diurético",
              "description": "Paciente en tratamiento con Hidroclorotiazida por HTA presenta niveles bajos de potasio sérico (Hipopotasemia).",
              "question": "¿Qué estrategia farmacológica podría considerarse para manejar la hipopotasemia inducida por tiazida?",
              "answers": {
                "a": "Aumentar la dosis de Hidroclorotiazida",
                "b": "Añadir Furosemida",
                "c": "Añadir un diurético ahorrador de potasio (ej. Amilorida o Espironolactona)",
                "d": "Suspender todos los diuréticos",
                "e": "Añadir un beta-bloqueador"
              },
              "correctAnswer": "c",
              "explanation": "Los diuréticos ahorradores de potasio (inhibidores de ENaC o antagonistas de aldosterona) se usan frecuentemente en combinación con tiazidas o diuréticos de ASA para contrarrestar la pérdida de potasio."
            },
            {
              "title": "Caso Clínico 8: HTA y Gota",
              "description": "Paciente con antecedentes de Gota requiere tratamiento antihipertensivo.",
              "question": "¿Qué grupo de diuréticos debería usarse con precaución o evitarse debido a su potencial para aumentar los niveles de ácido úrico?",
              "answers": {
                "a": "Diuréticos de ASA",
                "b": "Diuréticos Tiazídicos",
                "c": "Ahorradores de potasio",
                "d": "Antagonistas de aldosterona",
                "e": "Diuréticos osmóticos"
              },
              "correctAnswer": "b",
              "explanation": "Los diuréticos tiazídicos pueden causar hiperuricemia al competir por la secreción tubular de ácido úrico y/o aumentar su reabsorción, lo que puede precipitar ataques de gota en pacientes susceptibles."
            },
            {
              "title": "Caso Clínico 9: HTA en Paciente de Raza Negra",
              "description": "Paciente afrodescendiente de 50 años es diagnosticado con HTA Grado 1.",
              "question": "¿Qué clases de antihipertensivos suelen ser más eficaces como monoterapia inicial en esta población?",
              "answers": {
                "a": "IECA",
                "b": "ARA II",
                "c": "Beta-bloqueadores",
                "d": "Diuréticos (Tiazidas) o Calcio antagonistas DHP",
                "e": "Bloqueadores alfa-1"
              },
              "correctAnswer": "d",
              "explanation": "El documento menciona que los pacientes de raza negra suelen responder mejor a diuréticos y calcio antagonistas, y pueden tener menor respuesta a IECA/ARA II como monoterapia (suelen ser hiporreninémicos)."
            },
             {
              "title": "Caso Clínico 10: Edema de Tobillos con Amlodipina",
              "description": "Paciente tratado con Amlodipina por HTA se queja de hinchazón en ambos tobillos que empeora al final del día.",
              "question": "¿Cuál es la causa más probable de este edema y qué ajuste se podría considerar?",
              "answers": {
                "a": "Retención de sodio por el fármaco; añadir Furosemida.",
                "b": "Vasodilatación arteriolar preferencial; considerar reducir dosis o añadir IECA/ARAII.",
                "c": "Insuficiencia cardíaca inducida por Amlodipina; suspender inmediatamente.",
                "d": "Reacción alérgica; administrar antihistamínicos.",
                "e": "Trombosis venosa profunda; realizar ecografía Doppler."
              },
              "correctAnswer": "b",
              "explanation": "El edema periférico es un efecto secundario común de los calcio antagonistas DHP, causado por vasodilatación arteriolar que aumenta la presión capilar. Reducir la dosis, cambiar a otra clase o añadir un IECA/ARAII (que causan venodilatación) puede ayudar."
            },
            {
              "title": "Caso Clínico 11: HTA y Asma",
              "description": "Paciente con Asma persistente requiere iniciar tratamiento antihipertensivo.",
              "question": "¿Qué clase de antihipertensivo debería evitarse o usarse con extrema precaución?",
              "answers": {
                "a": "IECA",
                "b": "Calcio antagonistas DHP",
                "c": "Diuréticos tiazídicos",
                "d": "Beta-bloqueadores (especialmente no selectivos)",
                "e": "ARA II"
              },
              "correctAnswer": "d",
              "explanation": "Los beta-bloqueadores, particularmente los no selectivos (que bloquean B2), pueden causar broncoconstricción y empeorar el asma. Incluso los B1 selectivos pueden perder selectividad a dosis altas."
            },
            {
              "title": "Caso Clínico 12: Bradicardia Sintomática",
              "description": "Paciente en tratamiento con Metoprolol y Verapamilo por HTA y Fibrilación Auricular presenta mareos y frecuencia cardíaca de 45 lpm.",
              "question": "¿Cuál es la interacción farmacodinámica más probable responsable de la bradicardia?",
              "answers": {
                "a": "Sinergia en el bloqueo alfa-1",
                "b": "Inhibición mutua del metabolismo CYP3A4",
                "c": "Efectos aditivos depresores sobre el nodo sinusal y AV (cronotropismo y dromotropismo negativos)",
                "d": "Competencia por la unión a proteínas plasmáticas",
                "e": "Aumento de la absorción de Verapamilo"
              },
              "correctAnswer": "c",
              "explanation": "Tanto los beta-bloqueadores (Metoprolol) como los calcio antagonistas No-DHP (Verapamilo) disminuyen la frecuencia cardíaca y la conducción AV. Su combinación puede causar bradicardia severa o bloqueo AV."
            },
            {
              "title": "Caso Clínico 13: Hipertrofia Prostática Benigna (HPB) e HTA",
              "description": "Paciente varón de 70 años con síntomas de HPB (dificultad miccional) e HTA.",
              "question": "¿Qué clase de antihipertensivo podría ofrecer un beneficio adicional para los síntomas de la HPB?",
              "answers": {
                "a": "Diuréticos de ASA",
                "b": "Beta-bloqueadores",
                "c": "Bloqueadores alfa-1 (ej. Doxazosina, Terazosina)",
                "d": "IECA",
                "e": "Calcio antagonistas DHP"
              },
              "correctAnswer": "c",
              "explanation": "Los bloqueadores alfa-1 relajan el músculo liso de la próstata y el cuello vesical (principalmente receptores alfa-1A), mejorando el flujo urinario y los síntomas de la HPB, además de bajar la PA."
            },
            {
              "title": "Caso Clínico 14: Crisis Hipertensiva",
              "description": "Paciente llega a urgencias con PA 220/130 mmHg, cefalea intensa y signos de daño orgánico agudo (encefalopatía).",
              "question": "¿Qué fármaco intravenoso de acción rápida podría usarse para reducir la PA de forma controlada en esta emergencia hipertensiva?",
              "answers": {
                "a": "Hidroclorotiazida oral",
                "b": "Amlodipina oral",
                "c": "Labetalol IV o Nitroprusiato de sodio IV",
                "d": "Enalapril oral",
                "e": "Losartán oral"
              },
              "correctAnswer": "c",
              "explanation": "En emergencias hipertensivas se requieren fármacos IV de acción rápida y titulable como Labetalol, Nitroprusiato, Nicardipina o Esmolol para bajar la PA de forma controlada y evitar mayor daño orgánico."
            },
            {
              "title": "Caso Clínico 15: Intoxicación por Cianuro",
              "description": "Paciente que ha recibido infusión de Nitroprusiato de sodio por 4 días desarrolla acidosis metabólica, confusión y convulsiones.",
              "question": "Además de suspender el Nitroprusiato, ¿cuál es un antídoto que puede administrarse?",
              "answers": {
                "a": "Naloxona",
                "b": "Flumazenil",
                "c": "Hidroxicobalamina (Vitamina B12) o Nitrito de sodio/Tiosulfato de sodio",
                "d": "Atropina",
                "e": "Protamina"
              },
              "correctAnswer": "c",
              "explanation": "La toxicidad por cianuro secundaria a Nitroprusiato se maneja con antídotos como la Hidroxicobalamina (forma cianocobalamina) o induciendo metahemoglobinemia con nitritos (que une cianuro) seguido de Tiosulfato de sodio (convierte cianuro en tiocianato)."
            },
            {
              "title": "Caso Clínico 16: Angina de Esfuerzo Estable",
              "description": "Paciente con enfermedad coronaria presenta dolor torácico predecible al caminar rápido, que cede con el reposo.",
              "question": "¿Qué fármaco sublingual es de elección para el alivio rápido del episodio agudo de angina?",
              "answers": {
                "a": "Aspirina",
                "b": "Metoprolol",
                "c": "Nitroglicerina sublingual",
                "d": "Amlodipina",
                "e": "Clopidogrel"
              },
              "correctAnswer": "c",
              "explanation": "La Nitroglicerina sublingual actúa rápidamente (en minutos) causando venodilatación, reduciendo la precarga y aliviando el dolor anginoso agudo. Es la primera opción para el manejo del episodio."
            },
             {
              "title": "Caso Clínico 17: Desarrollo de Tolerancia a Nitratos",
              "description": "Paciente con angina crónica en tratamiento con parches de Nitroglicerina 24 horas al día refiere que el fármaco ya no le alivia el dolor como antes.",
              "question": "¿Cuál es la causa más probable y qué ajuste se requiere?",
              "answers": {
                "a": "Progresión de la enfermedad; aumentar la dosis del parche.",
                "b": "Mala absorción del parche; cambiar a vía oral.",
                "c": "Desarrollo de tolerancia; implementar un intervalo libre de nitratos (ej. retirar parche por la noche).",
                "d": "Interacción con otro fármaco; suspender el otro fármaco.",
                "e": "Efecto placebo inicial; cambiar a beta-bloqueador."
              },
              "correctAnswer": "c",
              "explanation": "El uso continuo de nitratos lleva al desarrollo de tolerancia. Se necesita un período diario libre de nitratos (usualmente 8-12 horas, como retirar el parche durante la noche) para mantener su eficacia."
            },
            {
              "title": "Caso Clínico 18: Falla Cardíaca en Paciente Afroamericano",
              "description": "Paciente afroamericano con Falla Cardíaca clase funcional III-IV (NYHA) a pesar de tratamiento óptimo con IECA, beta-bloqueador y antagonista de aldosterona.",
              "question": "¿Qué combinación farmacológica ha demostrado beneficio particular en este grupo de pacientes?",
              "answers": {
                "a": "Ivabradina + Digoxina",
                "b": "Hidralazina + Dinitrato de Isosorbide",
                "c": "Amlodipina + Hidroclorotiazida",
                "d": "Sacubitril/Valsartán únicamente",
                "e": "Furosemida a dosis altas + Metolazona"
              },
              "correctAnswer": "b",
              "explanation": "La combinación de Hidralazina y Dinitrato de Isosorbide ha mostrado reducir la mortalidad y mejorar los resultados específicamente en pacientes afroamericanos con IC sistólica sintomática que ya reciben terapia estándar."
            },
            {
              "title": "Caso Clínico 19: HTA y Embarazo",
              "description": "Paciente embarazada de 28 semanas desarrolla HTA (PA 150/95 mmHg) sin proteinuria.",
              "question": "¿Cuál de los siguientes antihipertensivos se considera seguro y es de uso común durante el embarazo?",
              "answers": {
                "a": "Enalapril",
                "b": "Losartán",
                "c": "Atenolol",
                "d": "Labetalol o Alfa-metildopa",
                "e": "Espironolactona"
              },
              "correctAnswer": "d",
              "explanation": "Los IECA y ARA II están contraindicados en el embarazo. Labetalol y Alfa-metildopa son fármacos de elección para tratar la HTA gestacional. La Nifedipina de liberación prolongada también es una opción."
            },
            {
              "title": "Caso Clínico 20: Profilaxis de Migraña",
              "description": "Paciente sufre de episodios frecuentes de migraña y además tiene HTA leve.",
              "question": "¿Qué clase de antihipertensivo también tiene indicación como profiláctico para la migraña?",
              "answers": {
                "a": "Diuréticos tiazídicos",
                "b": "IECA",
                "c": "Beta-bloqueadores (ej. Propranolol) o algunos Calcio Antagonistas (ej. Verapamilo)",
                "d": "Bloqueadores alfa-1",
                "e": "ARA II"
              },
              "correctAnswer": "c",
              "explanation": "Algunos beta-bloqueadores como el Propranolol y calcio antagonistas como el Verapamilo (mencionado en el texto) son utilizados para la profilaxis de la migraña, además de su efecto antihipertensivo."
            },
            {
              "title": "Caso Clínico 21: Manejo de FEr con Ritmo Sinusal y FC > 70 lpm",
              "description": "Paciente con Falla Cardíaca con FE reducida, en ritmo sinusal, que persiste con FC en reposo > 70 lpm a pesar de dosis máximas toleradas de beta-bloqueador.",
              "question": "¿Qué fármaco podría añadirse para reducir la frecuencia cardíaca sin afectar la contractilidad?",
              "answers": {
                "a": "Digoxina",
                "b": "Amiodarona",
                "c": "Ivabradina",
                "d": "Diltiazem",
                "e": "Aumentar dosis de beta-bloqueador"
              },
              "correctAnswer": "c",
              "explanation": "La Ivabradina está indicada en pacientes con FEr sintomática, ritmo sinusal y FC ≥ 70 lpm en reposo que ya están con dosis óptimas de beta-bloqueador (o tienen contraindicación/intolerancia) para reducir hospitalizaciones."
            },
             {
              "title": "Caso Clínico 22: Riesgo de Hipercalemia",
              "description": "Paciente con Enfermedad Renal Crónica (TFG 40 ml/min) e Insuficiencia Cardíaca, tratado con Enalapril y Espironolactona.",
              "question": "¿Qué efecto adverso electrolítico requiere monitorización estricta en este paciente?",
              "answers": {
                "a": "Hiponatremia",
                "b": "Hipocalcemia",
                "c": "Hipercalemia",
                "d": "Hipomagnesemia",
                "e": "Alcalosis metabólica"
              },
              "correctAnswer": "c",
              "explanation": "La combinación de un IECA (o ARA II) con un antagonista de aldosterona (ahorrador de K+), especialmente en presencia de disfunción renal, aumenta significativamente el riesgo de hipercalemia."
            },
            {
              "title": "Caso Clínico 23: Vasodilatador para Alopecia",
              "description": "Paciente consulta por pérdida de cabello (alopecia androgénica).",
              "question": "¿Qué fármaco vasodilatador, originalmente antihipertensivo, se utiliza tópicamente para tratar la alopecia?",
              "answers": {
                "a": "Hidralazina",
                "b": "Nitroprusiato",
                "c": "Minoxidil",
                "d": "Nicorandil",
                "e": "Prazosina"
              },
              "correctAnswer": "c",
              "explanation": "El Minoxidil, un potente vasodilatador arterial que abre canales de K+, se utiliza ampliamente en solución tópica para estimular el crecimiento del cabello en la alopecia androgénica."
            },
            {
              "title": "Caso Clínico 24: Selección de IECA en Urgencias",
              "description": "Se necesita administrar un IECA de acción relativamente rápida y que no sea profármaco en un servicio de urgencias.",
              "question": "¿Cuál de los siguientes IECA cumple estas características?",
              "answers": {
                "a": "Enalapril",
                "b": "Ramipril",
                "c": "Lisinopril",
                "d": "Captopril",
                "e": "Fosinopril"
              },
              "correctAnswer": "d",
              "explanation": "El Captopril es un IECA activo (no profármaco) con una vida media corta, lo que lo hace útil en situaciones agudas o de urgencia donde se requiere un inicio de acción más rápido y menor duración."
            },
            {
              "title": "Caso Clínico 25: Falla Cardíaca con FE Preservada (FEp)",
              "description": "Paciente de 75 años con disnea de esfuerzo, signos de congestión y ecocardiograma que muestra FEVI del 55% con disfunción diastólica.",
              "question": "¿Qué clase de fármacos ha demostrado recientemente reducir hospitalizaciones por IC en pacientes con FEp?",
              "answers": {
                "a": "Digoxina",
                "b": "Sacubitril/Valsartán",
                "c": "Inhibidores de SGLT2 (ej. Dapagliflozina, Empagliflozina)",
                "d": "Nitratos de acción prolongada",
                "e": "Beta-bloqueadores"
              },
              "correctAnswer": "c",
              "explanation": "Estudios recientes (mencionados en la tabla de recomendaciones para HFpEF) han mostrado que los inhibidores de SGLT2 pueden ser beneficiosos para disminuir hospitalizaciones por IC y mortalidad cardiovascular en pacientes con FEp."
            },
             {
              "title": "Caso Clínico 26: Contraindicación de Tiazidas",
              "description": "Paciente con HTA y una Tasa de Filtración Glomerular (TFG) estimada de 25 ml/min/1.73m2.",
              "question": "¿Por qué los diuréticos tiazídicos generalmente pierden eficacia en este paciente?",
              "answers": {
                "a": "Porque causan hipercalemia severa a este nivel de TFG.",
                "b": "Porque requieren una función renal mínima (usualmente TFG > 30 ml/min) para alcanzar su sitio de acción tubular.",
                "c": "Porque inducen alcalosis metabólica pronunciada.",
                "d": "Porque aumentan el riesgo de ototoxicidad.",
                "e": "Porque interactúan con los IECA a TFG bajas."
              },
              "correctAnswer": "b",
              "explanation": "Los diuréticos tiazídicos son menos efectivos cuando la TFG cae por debajo de 30 ml/min, ya que su secreción al túbulo renal disminuye. En estos casos, se prefieren los diuréticos de ASA si se necesita diuresis potente."
            },
            {
              "title": "Caso Clínico 27: Inicio de ARA II",
              "description": "Se inicia tratamiento con Losartán a un paciente hipertenso.",
              "question": "Comparado con un IECA, ¿qué efecto adverso es significativamente MENOS probable que ocurra con Losartán?",
              "answers": {
                "a": "Hipotensión",
                "b": "Hipercalemia",
                "c": "Disfunción renal",
                "d": "Tos",
                "e": "Mareo"
              },
              "correctAnswer": "d",
              "explanation": "Debido a que los ARA II no inhiben la degradación de bradiquininas mediada por la ECA, la incidencia de tos es mucho menor en comparación con los IECA."
            },
            {
              "title": "Caso Clínico 28: Uso de Diurético en Hipercalcemia",
              "description": "Paciente presenta hipercalcemia sintomática.",
              "question": "¿Qué tipo de diurético puede ser útil (junto con hidratación salina) para aumentar la excreción urinaria de calcio?",
              "answers": {
                "a": "Hidroclorotiazida",
                "b": "Clortalidona",
                "c": "Furosemida (Diurético de ASA)",
                "d": "Espironolactona",
                "e": "Amilorida"
              },
              "correctAnswer": "c",
              "explanation": "Los diuréticos de ASA inhiben la reabsorción de calcio en el asa de Henle, aumentando su excreción urinaria. Se usan (tras asegurar una adecuada hidratación) en el manejo de la hipercalcemia."
            },
            {
              "title": "Caso Clínico 29: Tratamiento Antihipertensivo y Función Sexual",
              "description": "Paciente varón joven tratado por HTA refiere disminución de la líbido y disfunción eréctil desde que inició un nuevo fármaco.",
              "question": "¿Qué clase de antihipertensivos (especialmente los más antiguos o no vasodilatadores) se asocia más frecuentemente con disfunción sexual?",
              "answers": {
                "a": "IECA",
                "b": "ARA II",
                "c": "Beta-bloqueadores (no vasodilatadores) y Diuréticos Tiazídicos",
                "d": "Calcio antagonistas DHP",
                "e": "Bloqueadores alfa-1"
              },
              "correctAnswer": "c",
              "explanation": "La disfunción sexual (impotencia, disminución de líbido) es un efecto adverso reportado con mayor frecuencia con beta-bloqueadores (excepto los vasodilatadores como Nebivolol) y diuréticos tiazídicos."
            },
            {
              "title": "Caso Clínico 30: Fármaco Antianginoso que Inhibe Metabolismo de Ácidos Grasos",
              "description": "Paciente con angina crónica estable que no responde adecuadamente a beta-bloqueadores y calcio antagonistas.",
              "question": "¿Qué fármaco antianginoso actúa inhibiendo la enzima 3-cetoacil-CoA tiolasa, optimizando el metabolismo energético del miocardio?",
              "answers": {
                "a": "Nicorandil",
                "b": "Ivabradina",
                "c": "Ranolazina",
                "d": "Trimetazidina",
                "e": "Nitroglicerina"
              },
              "correctAnswer": "d",
              "explanation": "La Trimetazidina es un agente metabólico que inhibe la beta-oxidación de ácidos grasos (inhibiendo la 3-KAT), favoreciendo la oxidación de glucosa, que requiere menos oxígeno, mejorando así la eficiencia energética del miocardio isquémico."
            }
          ]
    },

    "examMicrobiologiaVirus": {
    "id": "examMicrobiologiaVirus",
    "title": "Microbiología - Parcial #5 Virus (Preguntas 1-50)",
    "description": "Examen basado en 'MICRO 5 PARCIAL VIRUS 2.pdf', cubriendo Hepatitis, Retrovirus, Virus Respiratorios y Arbovirus.",
    "questions": [
      {
        "question": "1. ¿Cuáles de los siguientes virus de la hepatitis son considerados oncogénicos y pueden causar estado de portador crónico?",
        "answers": {
          "a": "VHA y VHE",
          "b": "VHB, VHC y VHD (cuando coexiste con VHB)",
          "c": "VHA y VHB",
          "d": "VHE y VHC",
          "e": "VHG"
        },
        "correctAnswer": "b",
        "explanation": "El documento indica que VHB, VHC y VHD (cuando se asocia con VHB) son crónicos, malignos, oncogénicos y pueden llevar a un estado de portador. VHA y VHE son agudos, benignos y no dejan cronicidad ni estado de portador."
      },
      {
        "question": "2. En la hepatitis aguda, ¿cuál es el periodo que precede a la ictericia y se caracteriza por malestar general, mialgias, artralgias y aumento de AST/ALT?",
        "answers": {
          "a": "Periodo ictérico",
          "b": "Periodo de recuperación",
          "c": "Periodo prodrómico o preictérico",
          "d": "Periodo de cronicidad",
          "e": "Periodo fulminante"
        },
        "correctAnswer": "c",
        "explanation": "El periodo prodrómico o preictérico se describe con síntomas como malestar general, mialgias, fatiga, anorexia, náuseas, vómito y aumento de transaminasas, ocurriendo antes de la aparición de la ictericia."
      },
      {
        "question": "3. ¿Qué característica distingue principalmente a la Hepatitis A (VHA) de la Hepatitis B (VHB)?",
        "answers": {
          "a": "El VHA es un virus ADN y el VHB es ARN.",
          "b": "El VHA se transmite principalmente por vía parenteral y el VHB por vía fecal-oral.",
          "c": "El VHA causa infección aguda autolimitada sin cronicidad, mientras que el VHB puede cronificar.",
          "d": "El VHA es envuelto y el VHB es desnudo.",
          "e": "El VHA es frecuentemente oncogénico, a diferencia del VHB."
        },
        "correctAnswer": "c",
        "explanation": "El documento especifica que el VHA (Picornavirus, ARN desnudo) causa una enfermedad benigna, autolimitada, rara vez fulminante y no oncogénica ni crónica. El VHB (Hepadnavirus, ADN envuelto) puede cronificar y es oncogénico."
      },
      {
        "question": "4. Para el diagnóstico de Hepatitis A aguda, ¿qué marcador serológico es el más útil y persiste positivo hasta 4-6 meses después de la infección?",
        "answers": {
          "a": "Ag Fecal VHA",
          "b": "IgG anti-VHA",
          "c": "IgM anti-VHA",
          "d": "Ac totales (IgM + IgG) anti-VHA",
          "e": "PCR para ARN de VHA"
        },
        "correctAnswer": "c",
        "explanation": "La IgM anti-VHA es el marcador diagnóstico clave de la infección aguda por VHA, permaneciendo positiva hasta 4-6 meses después del inicio."
      },
      {
        "question": "5. ¿En qué grupo de pacientes la Hepatitis E (VHE) tiene un riesgo significativamente mayor de evolucionar a una forma fulminante?",
        "answers": {
          "a": "Niños menores de 6 años",
          "b": "Adultos mayores de 60 años",
          "c": "Pacientes inmunosuprimidos",
          "d": "Mujeres embarazadas",
          "e": "Pacientes con Hepatitis B crónica"
        },
        "correctAnswer": "d",
        "explanation": "El texto menciona que la Hepatitis E puede ser fulminante, y esta complicación es más frecuente en mujeres embarazadas."
      },
      {
        "question": "6. ¿Cuál es la vía de transmisión más común de la Hepatitis C (VHC)?",
        "answers": {
          "a": "Fecal-oral",
          "b": "Contacto sexual",
          "c": "Vertical (madre-hijo)",
          "d": "Parenteral (ej. agujas contaminadas, transfusiones)",
          "e": "Gotitas respiratorias"
        },
        "correctAnswer": "d",
        "explanation": "La transmisión principal del VHC (Flavivirus, ARN envuelto) es parenteral, asociada a agujas, transfusiones, tatuajes y perforaciones. Las vías sexual y vertical son infrecuentes."
      },
      {
        "question": "7. En la infección por Hepatitis B (VHB), ¿qué antígeno indica replicación viral activa y alta infectividad?",
        "answers": {
          "a": "AgHBs (Antígeno de superficie)",
          "b": "AgHBc (Antígeno del core)",
          "c": "AgHBe (Antígeno e)",
          "d": "Ac IgM anti-HBc",
          "e": "Ac IgG anti-HBs"
        },
        "correctAnswer": "c",
        "explanation": "La presencia del AgHBe en sangre indica que el virus se está replicando activamente y el paciente es altamente infeccioso, tanto en fase aguda como crónica."
      },
      {
        "question": "8. ¿Qué significa la presencia del antígeno de superficie de la Hepatitis B (AgHBs) por más de 6 meses?",
        "answers": {
          "a": "Infección aguda por VHB resuelta.",
          "b": "Inmunidad por vacunación.",
          "c": "Hepatitis crónica por VHB (estado de portador).",
          "d": "Coinfección con VHD.",
          "e": "Fase de ventana inmunológica."
        },
        "correctAnswer": "c",
        "explanation": "La persistencia del AgHBs en sangre por más de 6 meses define la hepatitis crónica por VHB y el estado de portador (sea sano o enfermo crónico)."
      },
      {
        "question": "9. ¿Cuál es la característica principal del Virus de la Hepatitis D (VHD)?",
        "answers": {
          "a": "Es un virus ADN.",
          "b": "Se transmite principalmente por vía fecal-oral.",
          "c": "Es un virus defectivo que requiere la presencia del VHB para replicarse.",
          "d": "No causa enfermedad crónica.",
          "e": "Existe una vacuna específica para VHD."
        },
        "correctAnswer": "c",
        "explanation": "El VHD es descrito como un virus defectivo que necesita la co-infección o sobreinfección con VHB para poder completar su ciclo y causar enfermedad, a menudo empeorando el pronóstico del VHB."
      },
      {
        "question": "10. La detección de IgM anti-HBc positiva junto con AgHBs positivo indica:",
        "answers": {
          "a": "Infección crónica por VHB.",
          "b": "Inmunidad por vacunación.",
          "c": "Infección aguda por VHB.",
          "d": "Infección pasada resuelta por VHB.",
          "e": "Portador sano de VHB."
        },
        "correctAnswer": "c",
        "explanation": "La presencia de IgM anti-HBc es el marcador serológico clave de la infección aguda por VHB. El AgHBs también está presente en la fase aguda."
      },
      {
        "question": "11. ¿A qué familia pertenece el VIH (Virus de la Inmunodeficiencia Humana)?",
        "answers": {
          "a": "Oncoviridae",
          "b": "Spumavirinae",
          "c": "Hepadnaviridae",
          "d": "Flaviviridae",
          "e": "Lentiviridae"
        },
        "correctAnswer": "e",
        "explanation": "El VIH-1 y VIH-2 pertenecen a la familia Lentiviridae, dentro de los Retrovirus, asociados a enfermedades neurológicas e inmunosupresoras."
      },
      {
        "question": "12. ¿Qué enzima característica de los retrovirus, como el VIH, transcribe el genoma ARN viral en ADN?",
        "answers": {
          "a": "Proteasa",
          "b": "Integrasa",
          "c": "Polimerasa (Transcriptasa Inversa)",
          "d": "Helicasa",
          "e": "Neuraminidasa"
        },
        "correctAnswer": "c",
        "explanation": "La Transcriptasa Inversa (TR), también llamada polimerasa de ADN dependiente de ARN, es la enzima distintiva de los retrovirus que realiza la transcripción inversa del ARN genómico a ADN proviral."
      },
      {
        "question": "13. ¿Qué proteína de la envoltura del VIH (gp120) es responsable de la unión inicial al receptor CD4 en las células T helper?",
        "answers": {
          "a": "gp41",
          "b": "p24",
          "c": "Integrasa",
          "d": "Transcriptasa Inversa (p66/p51)",
          "e": "gp120"
        },
        "correctAnswer": "e",
        "explanation": "La glicoproteína de superficie gp120 del VIH es la que se une específicamente al receptor CD4 presente en linfocitos T helper, macrófagos, células dendríticas y microglía."
      },
      {
        "question": "14. Además del receptor CD4, ¿qué correceptores (receptores de quimioquinas) utiliza el VIH para fusionarse con la membrana celular, siendo CCR5 importante en macrófagos?",
        "answers": {
          "a": "CXCR4 solamente",
          "b": "CCR5 solamente",
          "c": "CCR5 (en macrófagos) y CXCR4 (en linfocitos)",
          "d": "CD8",
          "e": "MHC-I"
        },
        "correctAnswer": "c",
        "explanation": "El VIH necesita unirse a un correceptor de quimioquinas además del CD4 para la fusión. Los principales son CCR5 (predominante en macrófagos y en etapas tempranas) y CXCR4 (predominante en linfocitos T y en etapas tardías)."
      },
      {
        "question": "15. ¿Qué gen regulador del VIH es esencial para transportar el ARNm viral desde el núcleo al citoplasma?",
        "answers": {
          "a": "TAT",
          "b": "REV",
          "c": "NEF",
          "d": "Vpr",
          "e": "Vpu"
        },
        "correctAnswer": "b",
        "explanation": "El gen REV codifica una proteína que regula y facilita el transporte de los ARNm virales (especialmente los no completamente empalmados) desde el núcleo al citoplasma para su traducción."
      },
      {
        "question": "16. ¿Qué es el 'provirus' en el ciclo de vida del VIH?",
        "answers": {
          "a": "El virión maduro liberado de la célula.",
          "b": "El ARN genómico dentro de la cápside viral.",
          "c": "El ADN viral integrado en el genoma de la célula huésped.",
          "d": "La proteína p24 de la cápside.",
          "e": "El complejo de preintegración en el citoplasma."
        },
        "correctAnswer": "c",
        "explanation": "Después de la transcripción inversa, el ADN viral es transportado al núcleo e integrado en el ADN de la célula huésped por la enzima integrasa. Esta forma integrada se denomina provirus."
      },
      {
        "question": "17. Durante la infección primaria por VIH, ¿qué ocurre característicamente?",
        "answers": {
          "a": "El recuento de CD4 aumenta significativamente.",
          "b": "Hay una alta carga viral (viremia) y posible síndrome retroviral agudo.",
          "c": "Los anticuerpos anti-VIH son detectables inmediatamente.",
          "d": "El virus permanece exclusivamente en los ganglios linfáticos.",
          "e": "El paciente desarrolla SIDA inmediatamente."
        },
        "correctAnswer": "b",
        "explanation": "La fase aguda o infección primaria se caracteriza por una alta replicación viral (alta carga viral o viremia), diseminación del virus y, en muchos casos, un síndrome retroviral agudo similar a la mononucleosis. Los anticuerpos tardan semanas en aparecer (seroconversión)."
      },
      {
        "question": "18. ¿Cuál es el principal mecanismo por el cual el gen NEF del VIH ayuda al virus a evadir la respuesta inmune?",
        "answers": {
          "a": "Aumenta la producción de CD4.",
          "b": "Induce la producción de anticuerpos neutralizantes.",
          "c": "Facilita la integración del provirus.",
          "d": "Disminuye la expresión de CD4 y MHC-I en la superficie celular.",
          "e": "Bloquea la acción de la transcriptasa inversa."
        },
        "correctAnswer": "d",
        "explanation": "La proteína Nef disminuye la expresión del receptor CD4 y de las moléculas MHC clase I en la superficie de la célula infectada, dificultando así el reconocimiento por los linfocitos T CD4 y CD8 respectivamente."
      },
      {
        "question": "19. ¿Qué define la categoría clínica C en la clasificación de la infección por VIH?",
        "answers": {
          "a": "Infección asintomática o linfadenopatía generalizada.",
          "b": "Infecciones sintomáticas que no definen SIDA, como candidiasis orofaríngea.",
          "c": "Presencia de enfermedades definitorias de SIDA, como neumonía por Pneumocystis jirovecii o Sarcoma de Kaposi.",
          "d": "Recuento de CD4 entre 200-499 células/mm³.",
          "e": "Seroconversión reciente."
        },
        "correctAnswer": "c",
        "explanation": "La categoría C incluye condiciones clínicas graves que son definitorias de SIDA, indicando un defecto severo en la inmunidad celular. Ejemplos dados son Neumonía por P. jirovecii, Criptococosis, Sarcoma de Kaposi, etc."
      },
      {
        "question": "20. ¿Qué prueba se utiliza comúnmente como cribado inicial para la detección de anticuerpos contra VIH-1/2 y el antígeno p24?",
        "answers": {
          "a": "Western Blot",
          "b": "PCR para ARN viral (Carga Viral)",
          "c": "Cultivo viral",
          "d": "ELISA de 4ª o 5ª generación",
          "e": "Recuento de Linfocitos T CD4"
        },
        "correctAnswer": "d",
        "explanation": "Las pruebas ELISA de 4ª o 5ª generación son las recomendadas para el cribado inicial, ya que detectan tanto anticuerpos (IgM/IgG) contra VIH-1 y VIH-2 como el antígeno p24, acortando el periodo ventana."
      },
      {
        "question": "21. ¿Qué mide la prueba de Carga Viral en un paciente con VIH?",
        "answers": {
          "a": "La cantidad de anticuerpos anti-VIH.",
          "b": "El número de linfocitos T CD4.",
          "c": "La cantidad de genoma ARN viral en la sangre.",
          "d": "La presencia del antígeno p24.",
          "e": "La resistencia a los antirretrovirales."
        },
        "correctAnswer": "c",
        "explanation": "La carga viral mide la cantidad de ARN del VIH presente en el plasma sanguíneo (usualmente en copias/mL) y sirve para monitorizar la progresión de la infección y la eficacia del tratamiento."
      },
      {
        "question": "22. ¿Cuál de los siguientes virus es la causa más común de resfriado común?",
        "answers": {
          "a": "Adenovirus",
          "b": "Virus Respiratorio Sincitial (VRS)",
          "c": "Rinovirus",
          "d": "Virus Influenza",
          "e": "Coronavirus (no SARS-CoV-2)"
        },
        "correctAnswer": "c",
        "explanation": "El documento menciona que los Rinovirus (Picornavirus, ARN+) causan infecciones del tracto respiratorio superior no complicadas, como el resfriado común, siendo leves y autolimitadas."
      },
      {
        "question": "23. ¿Qué manifestación clínica es característica de algunos serotipos de Adenovirus, especialmente en preadolescentes y en forma de brotes?",
        "answers": {
          "a": "Bronquiolitis",
          "b": "Cistitis hemorrágica",
          "c": "Resfriado común simple",
          "d": "Fiebre faringoconjuntival",
          "e": "Gastroenteritis"
        },
        "correctAnswer": "d",
        "explanation": "La fiebre faringoconjuntival (conjuntivitis serosa, faringitis, fiebre) es una manifestación característica asociada a Adenovirus, particularmente en brotes y en preadolescentes."
      },
      {
        "question": "24. ¿Cuál es la principal causa de enfermedad respiratoria grave (neumonía y bronquiolitis) en lactantes menores de 1 año?",
        "answers": {
          "a": "Rinovirus",
          "b": "Adenovirus",
          "c": "Virus Parainfluenza",
          "d": "Virus Respiratorio Sincitial (VRS)",
          "e": "Virus Influenza A"
        },
        "correctAnswer": "d",
        "explanation": "El VRS (Paramixoviridae) es descrito como la principal causa de enfermedad respiratoria grave, incluyendo neumonía y bronquiolitis, en lactantes <1 año, debido al pequeño calibre de sus vías aéreas."
      },
      {
        "question": "25. ¿Qué proteínas del Virus Respiratorio Sincitial (VRS) son cruciales para la entrada (fusión) y anclaje a la célula huésped, respectivamente?",
        "answers": {
          "a": "H y N",
          "b": "F (fusión) y G (anclaje)",
          "c": "NS1 y NS2",
          "d": "M1 y M2",
          "e": "gp120 y gp41"
        },
        "correctAnswer": "b",
        "explanation": "El texto indica que la proteína F (fusión) facilita la entrada, mientras que la proteína G (anclaje) une el virus a la célula huésped en el VRS."
      },
      {
        "question": "26. ¿Qué enfermedad es característicamente producida con mayor frecuencia por el Virus Parainfluenza en niños menores de 5 años?",
        "answers": {
          "a": "Neumonía grave",
          "b": "Resfriado común",
          "c": "Crup (Laringotraqueítis)",
          "d": "Fiebre faringoconjuntival",
          "e": "Otitis media"
        },
        "correctAnswer": "c",
        "explanation": "Se menciona que el Virus Parainfluenza es el que más produce Crup (laringotraqueítis aguda, con tos perruna) en niños menores de 5 años."
      },
      {
        "question": "27. ¿Qué tipos de Virus Influenza afectan principalmente a los humanos y tienen reservorio humano, siendo el Tipo A el responsable de pandemias?",
        "answers": {
          "a": "Tipos A, B, C y D",
          "b": "Solo Tipo A",
          "c": "Solo Tipos A y B",
          "d": "Tipos A, B y C",
          "e": "Solo Tipo C y D"
        },
        "correctAnswer": "c",
        "explanation": "El documento clasifica los tipos de Influenza. El A afecta humanos, aves y mamíferos, causa pandemias. El B afecta principalmente humanos (y focas), causa epidemias menos frecuentes. El C causa casos esporádicos. El D afecta solo animales (cerdos)."
      },
      {
        "question": "28. ¿Qué proteínas de superficie del Virus Influenza Tipo A son altamente variables, determinan los subtipos (ej. H1N1, H3N2) y son el blanco principal de la respuesta inmune neutralizante?",
        "answers": {
          "a": "M1 y M2",
          "b": "NS1 y NS2",
          "c": "Hemaglutinina (H) y Neuraminidasa (N)",
          "d": "Proteína F y Proteína G",
          "e": "Proteína S y Proteína E"
        },
        "correctAnswer": "c",
        "explanation": "Las proteínas de superficie Hemaglutinina (H) y Neuraminidasa (N) del Influenza A son inestables, mutan constantemente (deriva y cambio antigénico), definen los subtipos (HxNy) y son los principales blancos de los anticuerpos neutralizantes inducidos por infección o vacunación."
      },
      {
        "question": "29. El fenómeno de 'deriva antigénica' (antigenic drift) en el Virus Influenza A, responsable de las epidemias anuales, se debe principalmente a:",
        "answers": {
          "a": "Recombinación genética entre virus humanos y animales.",
          "b": "Cambios mayores en las proteínas H y N (cambio antigénico).",
          "c": "Mutaciones puntuales acumuladas en los genes de H y N.",
          "d": "Intercambio de segmentos genómicos completos.",
          "e": "Latencia viral en las células huésped."
        },
        "correctAnswer": "c",
        "explanation": "La deriva antigénica (variación antigénica menor) se explica por cambios puntuales en la secuencia de aminoácidos de H y N, lo que hace que los anticuerpos previos pierdan parcialmente su capacidad de reconocimiento y neutralización, causando epidemias anuales."
      },
      {
        "question": "30. El 'cambio antigénico' (antigenic shift) en el Virus Influenza A, que puede causar pandemias, ocurre por:",
        "answers": {
          "a": "Mutaciones puntuales lentas.",
          "b": "Errores de la transcriptasa inversa.",
          "c": "Reasociación genética (intercambio de segmentos de ARN) entre virus de diferentes especies (ej. humano y aviar) en un huésped intermedio (ej. cerdo) o adaptación directa de un virus animal al humano.",
          "d": "Activación de provirus latentes.",
          "e": "Glucosilación de la proteína H."
        },
        "correctAnswer": "c",
        "explanation": "El cambio antigénico (variación antigénica mayor) implica cambios drásticos en las proteínas H y/o N, generalmente por reasociación genética entre virus de distintas especies o por adaptación directa de un virus animal (ej. aviar) al humano, generando un virus nuevo frente al cual la población tiene poca o ninguna inmunidad."
      },
      {
        "question": "31. ¿Cuál es la función principal de la proteína Neuraminidasa (N) en el ciclo de replicación del Virus Influenza?",
        "answers": {
          "a": "Unirse al receptor de ácido siálico para entrar a la célula.",
          "b": "Facilitar el desnudamiento del virus dentro de la célula.",
          "c": "Integrar el genoma viral al ADN celular.",
          "d": "Facilitar la liberación de los nuevos viriones de la célula infectada.",
          "e": "Transcribir el ARN viral a ADN."
        },
        "correctAnswer": "d",
        "explanation": "La Neuraminidasa (N) es esencial para que los nuevos viriones puedan salir de la célula infectada, rompiendo la unión entre la Hemaglutinina viral y el ácido siálico celular, y evitando la autoagregación viral."
      },
      {
        "question": "32. ¿Qué tipo de complicación es frecuente después de una infección por Influenza, especialmente en pacientes con factores de riesgo, y a menudo es causada por bacterias como Streptococcus pneumoniae o Staphylococcus aureus?",
        "answers": {
          "a": "Meningitis viral",
          "b": "Miocarditis",
          "c": "Neumonía bacteriana secundaria",
          "d": "Hepatitis fulminante",
          "e": "Síndrome de Guillain-Barré"
        },
        "correctAnswer": "c",
        "explanation": "La neumonía bacteriana secundaria es una complicación común de la influenza. El daño al epitelio respiratorio por el virus facilita la sobreinfección por bacterias como S. pneumoniae, S. aureus y S. pyogenes."
      },
      {
        "question": "33. ¿A qué familia pertenecen los Coronavirus, incluyendo el SARS-CoV-2?",
        "answers": {
          "a": "Paramyxoviridae",
          "b": "Orthomyxoviridae",
          "c": "Coronaviridae",
          "d": "Flaviviridae",
          "e": "Retroviridae"
        },
        "correctAnswer": "c",
        "explanation": "El documento indica que los Coronavirus pertenecen a la familia Coronaviridae."
      },
      {
        "question": "34. ¿Cuál es el receptor celular principal al que se une la proteína S (espiga) del SARS-CoV-2 para ingresar a las células humanas?",
        "answers": {
          "a": "CD4",
          "b": "CCR5",
          "c": "ACE2 (Enzima Convertidora de Angiotensina 2)",
          "d": "Ácido Siálico",
          "e": "Receptor CAR"
        },
        "correctAnswer": "c",
        "explanation": "La proteína S (Spike o espiga) del SARS-CoV-2 se une principalmente al receptor ACE2, que se encuentra en la superficie de muchas células, especialmente en el tracto respiratorio."
      },
      {
        "question": "35. La fase hiperinflamatoria de la COVID-19, que ocurre unas 2-4 semanas después del inicio, se caracteriza principalmente por:",
        "answers": {
          "a": "Alta replicación viral como causa principal de los síntomas.",
          "b": "Una respuesta inmune sistémica desmedida que causa daño orgánico.",
          "c": "Latencia viral en los ganglios linfáticos.",
          "d": "Síntomas leves y autolimitados.",
          "e": "Seroconversión con producción de anticuerpos protectores."
        },
        "correctAnswer": "b",
        "explanation": "La fase hiperinflamatoria se atribuye a una respuesta inmune exagerada y desregulada, con liberación masiva de citoquinas (tormenta de citoquinas), que conduce a complicaciones graves como neumonía severa, SDRA, trastornos tromboembólicos y daño multiorgánico."
      },
      {
        "question": "36. Para el diagnóstico confirmatorio de COVID-19 en la fase activa (primeras 2 semanas), ¿cuál es la prueba de elección?",
        "answers": {
          "a": "Detección de IgM",
          "b": "Detección de IgG",
          "c": "PCR (Reacción en Cadena de la Polimerasa) para ARN viral",
          "d": "Prueba rápida de antígeno únicamente",
          "e": "Cultivo viral"
        },
        "correctAnswer": "c",
        "explanation": "La PCR para detectar el ARN viral es la prueba confirmatoria estándar de oro durante la fase activa de la infección por SARS-CoV-2, especialmente en las primeras dos semanas."
      },
      {
        "question": "37. ¿Qué característica comparten los Arbovirus como el Zika, Dengue, Fiebre Amarilla y Chikungunya?",
        "answers": {
          "a": "Son todos virus ADN.",
          "b": "Se transmiten principalmente por vía respiratoria.",
          "c": "Son transmitidos por vectores artrópodos (mosquitos).",
          "d": "Causan principalmente enfermedades gastrointestinales.",
          "e": "Pertenecen todos a la familia Togaviridae."
        },
        "correctAnswer": "c",
        "explanation": "Arbovirus es un término ecológico para virus que son transmitidos por vectores artrópodos. Los ejemplos dados (Zika, Dengue, Fiebre Amarilla - Flavivirus; Chikungunya - Togavirus) son transmitidos por mosquitos."
      },
      {
        "question": "38. ¿Cuál es el vector principal del virus de la Fiebre Amarilla en el ciclo urbano?",
        "answers": {
          "a": "Mosquito Haemagogus",
          "b": "Mosquito Anopheles",
          "c": "Mosquito Culex",
          "d": "Mosquito Aedes aegypti",
          "e": "Garrapatas"
        },
        "correctAnswer": "d",
        "explanation": "Mientras que Haemagogus es el vector en el ciclo selvático, Aedes aegypti es el vector responsable del ciclo urbano de la Fiebre Amarilla, transmitiendo el virus entre humanos."
      },
      {
        "question": "39. La forma grave de la Fiebre Amarilla se caracteriza por la fase de intoxicación o icterohemorrágica. ¿Qué hallazgo histopatológico es mencionado como característico en el hígado?",
        "answers": {
          "a": "Cuerpos de Negri",
          "b": "Cuerpos de Cowdry tipo A",
          "c": "Cuerpos de Councilman (o Kotschnigov)",
          "d": "Células de Reed-Sternberg",
          "e": "Placas seniles"
        },
        "correctAnswer": "c",
        "explanation": "El texto menciona los 'Cuerpos de kolsiman' (probablemente refiriéndose a los Cuerpos de Councilman, que son hepatocitos apoptóticos eosinofílicos) como un hallazgo histopatológico en la infección hepática por Fiebre Amarilla."
      },
      {
        "question": "40. ¿Qué es el signo de Faget, mencionado como una posible manifestación en la fase de infección de la Fiebre Amarilla?",
        "answers": {
          "a": "Ictericia intensa.",
          "b": "Hemorragia gingival.",
          "c": "Pulso lento (bradicardia relativa) a pesar de la fiebre alta.",
          "d": "Rigidez de nuca.",
          "e": "Rash cutáneo macular."
        },
        "correctAnswer": "c",
        "explanation": "El signo de Faget se refiere a la disociación entre el pulso y la temperatura, donde el pulso es relativamente lento (bradicardia) para el grado de fiebre que presenta el paciente."
      },
      {
        "question": "41. ¿Cuántos serotipos conocidos tiene el virus del Dengue?",
        "answers": {
          "a": "1",
          "b": "2",
          "c": "3",
          "d": "4 (DEN-1, DEN-2, DEN-3, DEN-4)",
          "e": "5"
        },
        "correctAnswer": "d",
        "explanation": "Existen cuatro serotipos del virus del Dengue: DEN-1, DEN-2, DEN-3 y DEN-4."
      },
      {
        "question": "42. ¿Por qué una reinfección con un serotipo diferente del virus del Dengue suele ser más grave?",
        "answers": {
          "a": "Porque el segundo serotipo siempre es más virulento.",
          "b": "Debido a la falta de inmunidad cruzada completa y a la posible amplificación dependiente de anticuerpos (ADE).",
          "c": "Porque el sistema inmune no reconoce el segundo serotipo.",
          "d": "Debido a la coinfección con otros virus.",
          "e": "Porque el vector es diferente en la segunda infección."
        },
        "correctAnswer": "b",
        "explanation": "La inmunidad contra un serotipo de Dengue no protege completamente contra los otros. Se cree que los anticuerpos preexistentes de la primera infección, al unirse al nuevo serotipo sin neutralizarlo completamente, pueden facilitar la entrada del virus a las células (ADE) y amplificar la respuesta inflamatoria, llevando a formas más graves."
      },
      {
        "question": "43. Según la clasificación del Dengue, ¿cuál de los siguientes NO es un signo de alarma?",
        "answers": {
          "a": "Dolor abdominal intenso y continuo.",
          "b": "Vómito persistente.",
          "c": "Sangrado de mucosas (ej. gingivorragia).",
          "d": "Fiebre alta (39-40°C).",
          "e": "Aumento del hematocrito con caída rápida de plaquetas."
        },
        "correctAnswer": "d",
        "explanation": "La fiebre alta es parte de la definición de caso probable y del dengue sin signos de alarma. Los signos de alarma incluyen dolor abdominal, vómito persistente, acumulación de líquidos (ascitis, derrame pleural), sangrado de mucosas, letargo, hipotensión postural, hepatomegalia y cambios hematológicos específicos (aumento Hto, caída plaquetas)."
      },
      {
        "question": "44. ¿En qué fase de la enfermedad del Dengue ocurre la caída abrupta de la temperatura y es más probable la extravasación severa de plasma y el shock?",
        "answers": {
          "a": "Fase febril (primeros 3 días)",
          "b": "Fase crítica (alrededor del día 5-6, tras la defervescencia)",
          "c": "Fase de recuperación",
          "d": "Periodo de incubación",
          "e": "Fase de convalecencia tardía"
        },
        "correctAnswer": "b",
        "explanation": "La fase crítica del dengue coincide con la caída de la fiebre (defervescencia) y es cuando ocurre el aumento máximo de la permeabilidad vascular, la extravasación de plasma, el riesgo de shock y hemorragias severas."
      },
      {
        "question": "45. ¿Qué prueba diagnóstica es útil para confirmar el Dengue en los primeros 5 días de la enfermedad?",
        "answers": {
          "a": "Detección de anticuerpos IgM anti-Dengue.",
          "b": "Detección de anticuerpos IgG anti-Dengue.",
          "c": "Hemograma completo únicamente.",
          "d": "Detección del antígeno NS1 o PCR para ARN viral.",
          "e": "Biopsia de ganglio linfático."
        },
        "correctAnswer": "d",
        "explanation": "En los primeros 5 días (fase virémica), las pruebas directas como la detección del antígeno NS1 (una proteína no estructural del virus) o la RT-PCR para el ARN viral son las más útiles para el diagnóstico."
      },
      {
        "question": "46. ¿Cuál es el síntoma más característico y a menudo debilitante del Chikungunya, que puede persistir por meses o años?",
        "answers": {
          "a": "Fiebre alta",
          "b": "Rash cutáneo",
          "c": "Conjuntivitis",
          "d": "Artralgia severa (dolor articular)",
          "e": "Linfadenopatía"
        },
        "correctAnswer": "d",
        "explanation": "Aunque comparte síntomas iniciales con Dengue y Zika, el Chikungunya (Togavirus) se caracteriza por artralgias muy intensas, que pueden volverse crónicas y persistir mucho tiempo después de la fase aguda."
      },
      {
        "question": "47. ¿Cuál es una complicación neurológica importante asociada a la infección por el virus Zika, tanto en adultos como resultado de la infección congénita?",
        "answers": {
          "a": "Meningitis bacteriana",
          "b": "Encefalitis por Herpes",
          "c": "Síndrome de Guillain-Barré (adultos) y Microcefalia (congénita)",
          "d": "Enfermedad de Creutzfeldt-Jakob",
          "e": "Esclerosis múltiple"
        },
        "correctAnswer": "c",
        "explanation": "El virus Zika se ha asociado con un aumento de casos de Síndrome de Guillain-Barré en adultos tras la infección, y con microcefalia y otros defectos congénitos en bebés nacidos de madres infectadas durante el embarazo."
      },
      {
        "question": "48. ¿Cuál es la principal vía de transmisión del Rinovirus?",
        "answers": {
          "a": "Fecal-oral",
          "b": "Parenteral",
          "c": "Contacto directo con secreciones nasofaríngeas y fómites",
          "d": "Vector (mosquitos)",
          "e": "Vertical (madre-hijo)"
        },
        "correctAnswer": "c",
        "explanation": "El resfriado común causado por Rinovirus se transmite eficientemente por contacto directo con secreciones respiratorias (gotitas, manos contaminadas) o superficies (fómites)."
      },
      {
        "question": "49. La vacuna contra la Fiebre Amarilla es de tipo:",
        "answers": {
          "a": "Virus inactivado (muerto)",
          "b": "Virus atenuado (vivo debilitado)",
          "c": "Subunidades proteicas",
          "d": "ARN mensajero",
          "e": "Vector viral (Adenovirus)"
        },
        "correctAnswer": "b",
        "explanation": "La vacuna contra la Fiebre Amarilla (cepa 17D) es una vacuna de virus vivos atenuados, altamente eficaz y que generalmente confiere inmunidad de por vida con una sola dosis."
      },
      {
        "question": "50. ¿Qué consideración importante se menciona sobre la vacunación contra el Dengue con la vacuna tetravalente atenuada (QDENGA)?",
        "answers": {
          "a": "Solo se administra a mayores de 60 años.",
          "b": "Requiere 5 dosis para ser efectiva.",
          "c": "Está contraindicada en áreas endémicas.",
          "d": "Se recomienda un cribado previo de anticuerpos, ya que vacunar a seronegativos podría inducir cuadros graves en la primoinfección.",
          "e": "Solo protege contra el serotipo DEN-2."
        },
        "correctAnswer": "d",
        "explanation": "Debido al riesgo potencial de enfermedad más grave en la primera infección natural después de la vacunación en personas seronegativas (similar al riesgo en infecciones secundarias), se menciona la necesidad de un cribado previo para detectar anticuerpos contra el dengue antes de administrar la vacuna QDENGA."
      }
    ],
    "clinicalCases": [
      {
        "title": "Caso Clínico 1: Hepatitis Aguda Ictérica",
        "description": "Mujer de 25 años con ictericia, coluria, acolia y síntomas generales tras comer mariscos crudos hace 3 semanas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis B aguda",
          "b": "Hepatitis A aguda",
          "c": "Dengue con compromiso hepático",
          "d": "Hepatitis E aguda",
          "e": "Intoxicación alimentaria bacteriana"
        },
        "correctAnswer": "b",
        "explanation": "La presentación aguda con ictericia y el antecedente de consumo de mariscos crudos (transmisión feco-oral) son característicos de la Hepatitis A."
      },
      {
        "title": "Caso Clínico 2: Hepatitis Aguda en UDVP",
        "description": "Hombre de 30 años, usuario de drogas IV, con síntomas de hepatitis aguda. Serología: HBsAg (+), Anti-HBc IgM (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis A aguda",
          "b": "Hepatitis C aguda",
          "c": "Hepatitis B aguda",
          "d": "Hepatitis D aguda",
          "e": "Hepatitis E aguda"
        },
        "correctAnswer": "c",
        "explanation": "La presencia de HBsAg y Anti-HBc IgM confirma una infección aguda por Hepatitis B, concordante con el factor de riesgo (uso de drogas IV)."
      },
      {
        "title": "Caso Clínico 3: Hallazgo Incidental de Hepatitis",
        "description": "Hombre de 45 años, asintomático, con Anti-VHC (+) y ARN de VHC detectable en screening de donación. Antecedente de transfusión pre-1992.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis B crónica",
          "b": "Portador inactivo de Hepatitis B",
          "c": "Hepatitis C crónica",
          "d": "Hepatitis A resuelta",
          "e": "Hepatitis E crónica"
        },
        "correctAnswer": "c",
        "explanation": "La positividad de Anti-VHC y ARN de VHC en un paciente asintomático, con antecedente de transfusión antigua, es típica de Hepatitis C crónica."
      },
      {
        "title": "Caso Clínico 4: Falla Hepática Aguda sobre Crónica",
        "description": "Hombre de 38 años con Hepatitis B crónica conocida presenta deterioro súbito con ictericia, ascitis y encefalopatía. Anti-VHD (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis D (sobreinfección) resultando en hepatitis fulminante",
          "b": "Reactivación de Hepatitis B crónica",
          "c": "Hepatitis A aguda sobreimpuesta",
          "d": "Carcinoma hepatocelular",
          "e": "Hepatitis E aguda"
        },
        "correctAnswer": "a",
        "explanation": "La sobreinfección por Hepatitis D en un paciente con Hepatitis B crónica puede causar un deterioro agudo y falla hepática fulminante."
      },
      {
        "title": "Caso Clínico 5: Hepatitis Fulminante en Embarazada",
        "description": "Mujer embarazada de 30 semanas, residente en zona rural, con falla hepática aguda. Serologías VHA, VHB, VHC negativas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis A aguda fulminante",
          "b": "Preeclampsia severa con síndrome HELLP",
          "c": "Hepatitis B aguda fulminante",
          "d": "Hepatitis E aguda fulminante",
          "e": "Hígado graso agudo del embarazo"
        },
        "correctAnswer": "d",
        "explanation": "La Hepatitis E puede causar hepatitis fulminante, siendo una complicación especialmente frecuente y grave durante el embarazo."
      },
      {
        "title": "Caso Clínico 6: Complicación Tardía de Hepatitis C",
        "description": "Hombre de 55 años con VHC crónica sin seguimiento presenta pérdida de peso, fatiga, hepatomegalia nodular y lesión hepática en ecografía.",
        "question": "¿Cuál es la complicación más probable?",
        "answers": {
          "a": "Hepatitis A aguda",
          "b": "Cirrosis y sospecha de carcinoma hepatocelular",
          "c": "Hepatitis B aguda",
          "d": "Absceso hepático",
          "e": "Dengue"
        },
        "correctAnswer": "b",
        "explanation": "La Hepatitis C crónica es una causa principal de cirrosis y carcinoma hepatocelular, como sugiere la presentación clínica y ecográfica."
      },
      {
        "title": "Caso Clínico 7: Hepatitis en Niño de Guardería",
        "description": "Niño de 8 años con fiebre baja, anorexia, dolor abdominal e ictericia leve. Hubo brote de hepatitis en su guardería. Anti-VHA IgM (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis A aguda",
          "b": "Hepatitis B aguda",
          "c": "Mononucleosis infecciosa",
          "d": "Hepatitis C aguda",
          "e": "Gastroenteritis viral"
        },
        "correctAnswer": "a",
        "explanation": "El cuadro clínico leve/ictérico en un niño, el contexto epidemiológico (brote en guardería) y la serología (Anti-VHA IgM +) confirman Hepatitis A."
      },
      {
        "title": "Caso Clínico 8: Portador Inactivo de Hepatitis B",
        "description": "Hombre de 40 años, asintomático, con HBsAg (+), Anti-HBc IgG (+), HBeAg (-), Anti-HBe (+) y ADN de VHB bajo en chequeo.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis B aguda",
          "b": "Hepatitis B crónica activa (HBeAg positivo)",
          "c": "Infección crónica por VHB, HBeAg negativo (Portador inactivo)",
          "d": "Hepatitis B resuelta (curada)",
          "e": "Vacunación previa contra Hepatitis B"
        },
        "correctAnswer": "c",
        "explanation": "Este perfil serológico (HBsAg+, HBeAg-, Anti-HBe+, ADN VHB bajo) en un paciente asintomático corresponde a una infección crónica por VHB en fase inactiva (portador)."
      },
      {
        "title": "Caso Clínico 9: Hepatitis B Crónica Activa",
        "description": "Mujer de 32 años con fatiga persistente, múltiples parejas sexuales. Serología: HBsAg (+), Anti-HBc IgG (+), HBeAg (+), ADN de VHB elevado.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis C crónica",
          "b": "Hepatitis A aguda",
          "c": "Infección crónica por VHB, HBeAg negativo (Portador inactivo)",
          "d": "Hepatitis B crónica activa (HBeAg positivo)",
          "e": "Hepatitis autoinmune"
        },
        "correctAnswer": "d",
        "explanation": "La presencia de HBsAg, HBeAg y ADN viral elevado indica una infección crónica por Hepatitis B en fase activa (replicativa)."
      },
      {
        "title": "Caso Clínico 10: Hepatitis del Viajero",
        "description": "Hombre de 28 años con hepatitis aguda ictérica tras viajar a Asia Central y consumir agua no embotellada. VHA y VHB negativas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis A aguda",
          "b": "Hepatitis B aguda",
          "c": "Malaria con ictericia",
          "d": "Leptospirosis",
          "e": "Hepatitis E aguda"
        },
        "correctAnswer": "e",
        "explanation": "La Hepatitis E es endémica en Asia Central y se transmite por agua contaminada. Es una causa importante de hepatitis aguda en viajeros a zonas endémicas, especialmente si VHA/VHB son negativas."
      },
      {
        "title": "Caso Clínico 11: Fiebre Quebrantahuesos",
        "description": "Mujer de 22 años en zona endémica con fiebre alta, cefalea intensa, dolor retroocular, mialgias/artralgias severas y rash. PCR Dengue (+) día 3.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Dengue clásico (sin signos de alarma)",
          "b": "Chikungunya agudo",
          "c": "Zika",
          "d": "Influenza",
          "e": "Leptospirosis"
        },
        "correctAnswer": "a",
        "explanation": "La combinación de fiebre alta, cefalea, dolor retroocular y mialgias/artralgias intensas ('quebrantahuesos') es característica del Dengue clásico. La PCR confirma el diagnóstico en fase temprana."
      },
      {
        "title": "Caso Clínico 12: Dengue con Signos de Peligro",
        "description": "Niño de 10 años con fiebre por 4 días, al ceder presenta dolor abdominal intenso, vómitos, letargia, sangrado de encías, plaquetopenia y hemoconcentración.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Dengue clásico",
          "b": "Dengue con signos de alarma",
          "c": "Chikungunya severo",
          "d": "Fiebre tifoidea",
          "e": "Hepatitis A fulminante"
        },
        "correctAnswer": "b",
        "explanation": "La aparición de dolor abdominal intenso, vómitos persistentes, letargia, sangrado y signos de extravasación plasmática (hemoconcentración) tras la defervescencia indican Dengue con signos de alarma."
      },
      {
        "title": "Caso Clínico 13: Artralgia Incapacitante Aguda",
        "description": "Hombre de 40 años con fiebre súbita y artralgias incapacitantes (manos/muñecas/tobillos) con hinchazón marcada, cefalea y rash. PCR Chikungunya (+) día 4.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Dengue clásico",
          "b": "Zika",
          "c": "Infección aguda por Chikungunya",
          "d": "Artritis reactiva",
          "e": "Artritis reumatoide de inicio agudo"
        },
        "correctAnswer": "c",
        "explanation": "La artralgia severa, a menudo incapacitante y con edema articular, es el síntoma más distintivo de la infección aguda por Chikungunya."
      },
      {
        "title": "Caso Clínico 14: Dolor Articular Persistente Post-Viaje",
        "description": "Mujer de 50 años con dolores articulares en manos/rodillas desde hace 6 meses, iniciado tras cuadro febril agudo con artralgias intensas en viaje al Caribe.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Artritis reumatoide",
          "b": "Artrosis",
          "c": "Fibromialgia",
          "d": "Artralgia crónica post-Chikungunya",
          "e": "Dengue crónico"
        },
        "correctAnswer": "d",
        "explanation": "Las artralgias crónicas, que pueden persistir meses o años, son una complicación frecuente y característica de la infección por Chikungunya."
      },
      {
        "title": "Caso Clínico 15: Fiebre, Rash y Conjuntivitis",
        "description": "Mujer de 28 años con fiebre baja, rash maculopapular pruriginoso y conjuntivitis no purulenta. Pareja tuvo síntomas similares tras viaje a Brasil. PCR Zika (+) día 3.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Infección aguda por Zika",
          "b": "Dengue leve",
          "c": "Chikungunya leve",
          "d": "Rubeola",
          "e": "Sarampión"
        },
        "correctAnswer": "a",
        "explanation": "La tríada de fiebre leve, rash maculopapular y conjuntivitis no purulenta es muy sugestiva de infección por Zika, confirmada por PCR en fase temprana."
      },
      {
        "title": "Caso Clínico 16: Debilidad Ascendente Post-Febril",
        "description": "Hombre de 60 años con debilidad muscular ascendente y arreflexia 3 semanas después de cuadro febril con rash. LCR con disociación albuminocitológica. IgM Zika (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Mielitis transversa",
          "b": "Síndrome de Guillain-Barré post-infección por Zika",
          "c": "Poliomielitis",
          "d": "Miastenia gravis",
          "e": "Encefalitis por Dengue"
        },
        "correctAnswer": "b",
        "explanation": "El Síndrome de Guillain-Barré (debilidad ascendente, arreflexia, disociación albuminocitológica en LCR) es una complicación neurológica conocida asociada a la infección previa por Zika."
      },
      {
        "title": "Caso Clínico 17: Exposición a Zika en Embarazo",
        "description": "Mujer embarazada de 12 semanas, asintomática, con serología IgM e IgG positivas para Zika tras viajar a zona endémica.",
        "question": "¿Cuál es el diagnóstico y principal preocupación?",
        "answers": {
          "a": "Dengue en el embarazo, riesgo de parto prematuro",
          "b": "Chikungunya en el embarazo, riesgo de artritis neonatal",
          "c": "Infección por Zika durante el embarazo, riesgo de microcefalia fetal",
          "d": "Hepatitis E en el embarazo, riesgo de falla hepática materna",
          "e": "Infección pasada por Zika sin riesgo actual"
        },
        "correctAnswer": "c",
        "explanation": "La infección por Zika durante el embarazo, especialmente en el primer trimestre, se asocia a un riesgo significativo de microcefalia y otras malformaciones congénitas en el feto."
      },
      {
        "title": "Caso Clínico 18: Dengue con Sangrado Leve",
        "description": "Hombre de 35 años con fiebre, cefalea, mialgias. Día 5 presenta epistaxis, petequias, prueba del torniquete (+). Plaquetas 80,000/mm³. Sin shock.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Dengue con manifestaciones hemorrágicas",
          "b": "Dengue grave (shock)",
          "c": "Chikungunya con trombocitopenia",
          "d": "Púrpura trombocitopénica idiopática (PTI)",
          "e": "Leucemia aguda"
        },
        "correctAnswer": "a",
        "explanation": "La presencia de manifestaciones hemorrágicas (epistaxis, petequias, torniquete +) junto con trombocitopenia, sin signos de shock, clasifica el caso como Dengue con manifestaciones hemorrágicas."
      },
      {
        "title": "Caso Clínico 19: Shock en Adolescente con Dengue",
        "description": "Adolescente de 16 años en shock, tras 4 días de fiebre que cedió hoy. Equimosis, hematemesis, plaquetopenia severa, hemoconcentración.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Dengue con signos de alarma",
          "b": "Dengue grave (Síndrome de Shock por Dengue)",
          "c": "Shock séptico",
          "d": "Hepatitis fulminante",
          "e": "Chikungunya con complicaciones"
        },
        "correctAnswer": "b",
        "explanation": "El cuadro de shock (hipotensión, pulso débil, piel fría) asociado a extravasación severa de plasma (hemoconcentración) y trombocitopenia profunda define el Síndrome de Shock por Dengue, la forma más grave de la enfermedad."
      },
      {
        "title": "Caso Clínico 20: Diagnóstico Serológico Tardío de Dengue",
        "description": "Turista de 30 años con fiebre, rash, conjuntivitis tras viaje. PCR Dengue/Zika (día 3) negativa. IgM Dengue (día 7) positiva.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Zika",
          "b": "Chikungunya",
          "c": "Dengue",
          "d": "Malaria",
          "e": "Rickettsiosis"
        },
        "correctAnswer": "c",
        "explanation": "La PCR puede ser negativa si se toma después de los primeros días de fiebre. La serología (detección de IgM) se positiviza después del día 5-7 y es útil para confirmar el diagnóstico de Dengue en esta etapa."
      },
      {
        "title": "Caso Clínico 21: Descompensación de Cirrosis por VHC",
        "description": "Hombre de 50 años con cirrosis conocida por VHC presenta ascitis, edema e ictericia leve.",
        "question": "¿Cuál es el estado actual del paciente?",
        "answers": {
          "a": "Cirrosis hepática descompensada secundaria a Hepatitis C crónica",
          "b": "Hepatitis A aguda sobreimpuesta",
          "c": "Hepatitis B crónica activa",
          "d": "Dengue con compromiso hepático",
          "e": "Carcinoma hepatocelular"
        },
        "correctAnswer": "a",
        "explanation": "La aparición de ascitis, edema o ictericia en un paciente con cirrosis indica una descompensación de la enfermedad hepática crónica (en este caso, por VHC)."
      },
      {
        "title": "Caso Clínico 22: Accidente Ocupacional con Riesgo Biológico",
        "description": "Trabajadora de salud sufre pinchazo con aguja usada en paciente HBsAg (+). Recibe HBIG y vacuna VHB.",
        "question": "¿Qué situación describe este caso?",
        "answers": {
          "a": "Hepatitis B aguda confirmada",
          "b": "Manejo post-exposición ocupacional a Hepatitis B",
          "c": "Hepatitis C aguda por pinchazo",
          "d": "Reacción alérgica a la aguja",
          "e": "Profilaxis pre-exposición para Hepatitis B"
        },
        "correctAnswer": "b",
        "explanation": "El pinchazo con material contaminado con VHB requiere profilaxis post-exposición inmediata con inmunoglobulina específica (HBIG) y vacunación para prevenir la infección."
      },
      {
        "title": "Caso Clínico 23: Prevención Transmisión Vertical VHB",
        "description": "Bebé nacido de madre HBsAg (+) y HBeAg (+) recibe HBIG y vacuna VHB al nacer.",
        "question": "¿Qué describe esta intervención?",
        "answers": {
          "a": "Tratamiento de Hepatitis B neonatal",
          "b": "Diagnóstico de Hepatitis B congénita",
          "c": "Profilaxis para prevenir transmisión vertical de Hepatitis B",
          "d": "Vacunación de rutina sin relación con el estado materno",
          "e": "Tratamiento para Hepatitis C materna"
        },
        "correctAnswer": "c",
        "explanation": "La administración de HBIG y la primera dosis de vacuna VHB en las primeras 12 horas de vida es la medida estándar para prevenir la transmisión de Hepatitis B de madre a hijo (transmisión vertical)."
      },
      {
        "title": "Caso Clínico 24: Artritis Crónica Post-Infección",
        "description": "Hombre de 48 años con poliartritis simétrica persistente 1 año después de cuadro agudo de fiebre y artralgias intensas. IgG Chikungunya (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Artritis reumatoide",
          "b": "Dengue crónico",
          "c": "Artrosis generalizada",
          "d": "Artritis crónica post-Chikungunya",
          "e": "Fibromialgia"
        },
        "correctAnswer": "d",
        "explanation": "La persistencia de síntomas articulares inflamatorios (artritis) meses o años después de la fase aguda es una secuela reconocida de la infección por Chikungunya."
      },
      {
        "title": "Caso Clínico 25: Síndrome Febril en Zona Endémica",
        "description": "Mujer de 31 años en área con Aedes aegypti presenta fiebre, rash, conjuntivitis y artralgias leves autolimitadas.",
        "question": "¿Cuál es el diagnóstico más probable (clínico/epidemiológico)?",
        "answers": {
          "a": "Gripe común",
          "b": "Faringoamigdalitis viral",
          "c": "Hepatitis A",
          "d": "Infección urinaria",
          "e": "Síndrome febril indiferenciado (Probable arbovirosis)"
        },
        "correctAnswer": "e",
        "explanation": "En zonas endémicas, un cuadro febril agudo con rash y/o artralgias/mialgias, sin un foco claro, es a menudo clasificado clínicamente como una probable arbovirosis (Dengue, Zika o Chikungunya) pendiente de confirmación."
      },
      {
        "title": "Caso Clínico 26: Seguimiento Hepatitis B Crónica",
        "description": "Hombre de 65 años con Hepatitis B crónica bajo tratamiento antiviral. Asintomático, ADN de VHB indetectable, ALT normal.",
        "question": "¿Cuál es el estado del paciente?",
        "answers": {
          "a": "Hepatitis B crónica controlada bajo tratamiento",
          "b": "Curación de Hepatitis B",
          "c": "Reactivación de Hepatitis B",
          "d": "Sobreinfección por Hepatitis D",
          "e": "Hepatitis C crónica"
        },
        "correctAnswer": "a",
        "explanation": "El objetivo del tratamiento antiviral en Hepatitis B crónica es suprimir la replicación viral (ADN indetectable) y normalizar las transaminasas, logrando un control de la enfermedad."
      },
      {
        "title": "Caso Clínico 27: Hepatitis Aguda Post-Fiesta",
        "description": "Joven de 19 años con cuadro ictérico agudo 4 semanas después de consumir alimentos de preparación dudosa en una fiesta. Anti-VHA IgM (+).",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis B aguda",
          "b": "Hepatitis A aguda",
          "c": "Hepatitis C aguda",
          "d": "Hepatitis E aguda",
          "e": "Gastroenteritis por Salmonella"
        },
        "correctAnswer": "b",
        "explanation": "El cuadro clínico, el antecedente epidemiológico (consumo de alimentos potencialmente contaminados) y la serología (Anti-VHA IgM +) son consistentes con Hepatitis A aguda."
      },
      {
        "title": "Caso Clínico 28: Hallazgo Incidental Hepatitis C",
        "description": "Hombre de 42 años con fatiga vaga. Anti-VHC (+) y PCR VHC (+) descubiertos en chequeo laboral. Niega factores de riesgo claros.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "answers": {
          "a": "Hepatitis A crónica",
          "b": "Hepatitis B crónica",
          "c": "Hepatitis C crónica",
          "d": "Falso positivo para VHC",
          "e": "Hepatitis autoinmune"
        },
        "correctAnswer": "c",
        "explanation": "La Hepatitis C a menudo cursa de forma asintomática o con síntomas leves durante años, siendo frecuente su diagnóstico incidental. La positividad de Anti-VHC y PCR confirma la infección crónica."
      },
      {
        "title": "Caso Clínico 29: Polineuropatía Aguda",
        "description": "Mujer de 58 años con debilidad muscular simétrica y parestesias 1 semana después de cuadro gripal. Sospecha de Guillain-Barré.",
        "question": "¿Qué infección viral previa es una causa reconocida de este síndrome?",
        "answers": {
          "a": "Hepatitis A",
          "b": "Hepatitis B",
          "c": "Chikungunya",
          "d": "Zika",
          "e": "Hepatitis E"
        },
        "correctAnswer": "d",
        "explanation": "La infección por Zika (así como Dengue y otros virus) se ha asociado como desencadenante del Síndrome de Guillain-Barré."
      },
      {
        "title": "Caso Clínico 30: Arbovirosis con Síntomas Solapados",
        "description": "Hombre de 27 años regresando de zona endémica con fiebre alta, cefalea intensa, dolor retroocular, mialgias y artralgias moderadas. Rash. PCR Dengue (+).",
        "question": "¿Cuál es el diagnóstico confirmado?",
        "answers": {
          "a": "Dengue clásico",
          "b": "Chikungunya",
          "c": "Zika",
          "d": "Coinfección Dengue/Chikungunya",
          "e": "Malaria"
        },
        "correctAnswer": "a",
        "explanation": "Aunque los síntomas de Dengue, Chikungunya y Zika pueden solaparse (fiebre, rash, artralgias), la PCR positiva para Dengue confirma este diagnóstico. El dolor retroocular es más típico de Dengue."
      }
    ]    
  }
};




