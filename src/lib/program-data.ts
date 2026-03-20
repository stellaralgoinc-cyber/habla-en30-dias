import type { DayContent } from "@/types/program.types";

export const PROGRAM_DATA: DayContent[] = [
  // ─────────────────────────────────────────────
  // SEMANA 1 — Conectar sin palabras
  // ─────────────────────────────────────────────
  {
    day: 1,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Juego de la Mirada",
    subtitulo: "El primer puente entre tú y tu hijo es una mirada",
    capitulo: 1,
    loEsencial:
      "Antes de que aparezca cualquier palabra, el lenguaje empieza con los ojos. Cuando tu hijo te busca con la mirada, te está diciendo: 'Aquí estoy, cuéntame algo.' Hoy aprenderás a sostener esa mirada con calidez, sin presión ni urgencia. No necesitas enseñar nada todavía. Solo necesitas estar presente y dejar que tus ojos le digan: 'Te veo, te escucho, estoy aquí contigo.' Eso es todo.",
    objetivoDia:
      "Practicar el contacto visual intencional durante al menos 3 momentos del día, usando tu rostro como el juguete más atractivo.",
    faseConexion: {
      nombre: "Nos encontramos",
      duracionMin: 5,
      descripcion:
        "Antes de comenzar cualquier juego, crea el momento de conexión. Baja al nivel de tu hijo, respira profundo y espera su mirada.",
      pasos: [
        "Busca un espacio tranquilo con pocas distracciones. Apaga la televisión y silencia el teléfono.",
        "Siéntate en el piso frente a tu hijo, a su misma altura. Deja que él note que llegaste.",
        "Espera en silencio con una sonrisa suave. No llames su nombre todavía — solo estate presente.",
        "Cuando sus ojos encuentren los tuyos, sonríe lentamente y di su nombre una vez, con ternura.",
      ],
      recordatorio:
        "Si no te mira de inmediato, está bien. Algunos niños necesitan 30 segundos. Sé paciente y no fuerces el contacto.",
    },
    faseJuego: {
      nombre: "El Espejo que Habla",
      duracionMin: 7,
      descripcion:
        "Convierte tu rostro en el juguete más interesante del mundo. Las expresiones exageradas atraen naturalmente la mirada del niño.",
      pasos: [
        "Sostén a tu hijo frente a ti o siéntalo en tus piernas mirándote.",
        "Haz una cara de sorpresa exagerada: ojos muy abiertos, boca abierta. Espera que te mire.",
        "Cuando te mire, di '¡Oooh!' con mucho entusiasmo y luego sonríe ampliamente.",
        "Cambia a una cara de 'mmm pensando': pon el dedo en la mejilla y mira al techo.",
        "Cada vez que tu hijo sostenga la mirada por 2 segundos, celebra con una carcajada o un abrazo breve.",
      ],
      recordatorio:
        "No necesita mirarte durante mucho tiempo. Dos segundos de contacto visual sostenido es un gran logro para comenzar.",
    },
    faseCierre: {
      nombre: "Guardamos el momento",
      duracionMin: 3,
      descripcion:
        "Termina la sesión de forma suave para que tu hijo asocie este tiempo contigo con algo placentero.",
      pasos: [
        "Baja el ritmo: habla más suave, muévete más lento.",
        "Dale un abrazo largo y di: 'Gracias por jugar conmigo hoy, [nombre].'",
        "Anota en tu Bitácora: ¿Cuántas veces te buscó con la mirada? ¿Qué expresión le hizo reír?",
      ],
      recordatorio:
        "La Bitácora no es una tarea escolar — es tu diario de victorias. Escribe incluso las cosas pequeñas.",
    },
    microjuegos: [
      {
        id: "d1-m1",
        nombre: "Escóndete y Aparece",
        objetivo: "Provocar búsqueda visual y anticipación",
        duracionMin: 3,
        materiales: ["Un pañuelo o trapo suave"],
        pasos: [
          "Cúbrete la cara con el pañuelo lentamente mientras dices '¿Dónde está mamá?'",
          "Espera 2-3 segundos en silencio.",
          "Quita el pañuelo y di '¡Aquí estoy!' con la cara más alegre que puedas.",
          "Repite 4-5 veces y luego cúbrele la cara a él para que sea su turno.",
        ],
        trucoPro:
          "Varía la velocidad: a veces aparece rápido, a veces muy despacio. La anticipación es lo que mantiene su atención.",
        variante:
          "Usa tus manos para cubrirte en lugar del pañuelo — es más fácil de controlar el ritmo.",
      },
      {
        id: "d1-m2",
        nombre: "Cosquillas con Mirada",
        objetivo: "Asociar el contacto visual con algo placentero",
        duracionMin: 2,
        pasos: [
          "Sostén las manos de tu hijo, mírale a los ojos y di: '¿Te hago cosquillas?'",
          "Espera que te mire. Cuando lo haga, hazle cosquillas suaves en la barriga.",
          "Para, míralo de nuevo y repite la pregunta.",
          "Esto enseña que mirar a mamá trae cosas buenas.",
        ],
        trucoPro:
          "Haz una pausa larga antes de las cosquillas — esa pausa de expectativa es cuando más te buscará con los ojos.",
      },
    ],
    checklist: [
      {
        id: "d1-c1",
        label: "Apagué las distracciones",
        descripcion: "TV y teléfono silenciados durante los 15 minutos de juego",
      },
      {
        id: "d1-c2",
        label: "Me puse a su altura",
        descripcion: "Me senté en el piso o me agaché para estar a nivel de sus ojos",
      },
      {
        id: "d1-c3",
        label: "Celebré cada mirada",
        descripcion: "Cada vez que me buscó con los ojos, respondí con calidez y entusiasmo",
      },
      {
        id: "d1-c4",
        label: "Anoté en la Bitácora",
        descripcion: "Escribí al menos una observación sobre su comportamiento hoy",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo te busca con los ojos cuando escucha tu voz",
      "Mantiene la mirada por 1-2 segundos antes de desviarla",
      "Sonríe o ríe en respuesta a tus expresiones faciales",
    ],
    consejoDia:
      "Si tu hijo parece ignorarte al principio, no lo interpretes como rechazo. Muchos niños con retraso de lenguaje tienen dificultad con el contacto visual. Sé constante y alegre. La conexión llegará.",
    fraseMotivacional:
      "Hoy no necesitas ser perfecta. Solo necesitas estar presente. Y eso, querida mamá, ya lo estás haciendo. Cada vez que bajas al piso y lo miras a los ojos, le estás diciendo al mundo entero que tu hijo vale la pena.",
    erroresComunes: [
      {
        error: "Llamar su nombre repetidamente cuando no responde",
        reencuadre:
          "Decir el nombre demasiadas veces lo vuelve ruido de fondo. Di su nombre una sola vez con calma, luego espera. El silencio es más poderoso de lo que crees.",
      },
      {
        error: "Sentirse frustrada si no hay contacto visual",
        reencuadre:
          "El contacto visual es una habilidad que se desarrolla con tiempo y confianza. Hoy plantaste una semilla. No busques frutos el primer día.",
      },
    ],
    imagePromptHint:
      "Warm LATAM mother sitting cross-legged on a colorful rug on the floor, face-to-face with her toddler (age 2), both smiling with eye contact, soft afternoon light through a window, cozy home setting, no toys visible, intimate moment.",
  },

  {
    day: 2,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Silencio Sonriente",
    subtitulo: "Estar sin hacer es también una forma de amar",
    capitulo: 1,
    loEsencial:
      "Vivimos en un mundo que nos pide llenar cada silencio con palabras. Pero para un niño que está aprendiendo a comunicarse, el silencio de una mamá presente y tranquila es más nutritivo que un río de instrucciones. Hoy practicarás algo difícil: observar sin intervenir, estar sin enseñar. Tu único trabajo es seguir el juego de tu hijo con la mirada, sonreír cuando él te mire, y dejar que la comunicación emerja de él, no de ti. Eso se llama presencia sin agenda.",
    objetivoDia:
      "Pasar al menos 10 minutos siguiendo el juego de tu hijo sin dar instrucciones, preguntas ni correcciones — solo observación cálida.",
    faseConexion: {
      nombre: "Llegamos despacio",
      duracionMin: 5,
      descripcion:
        "Antes de entrar en su mundo de juego, prepara tu cuerpo y tu mente para estar completamente presente.",
      pasos: [
        "Siéntate cerca de donde tu hijo juega, sin decir nada. Solo llega.",
        "Respira profundo tres veces. Con cada exhalación, suelta la urgencia de enseñar algo.",
        "Observa lo que está haciendo. ¿Qué objeto prefiere? ¿Cómo lo manipula?",
        "Si te mira, sonríe. Si no te mira, sigue observando con calidez.",
      ],
      recordatorio:
        "Tu presencia silenciosa le dice: 'Lo que haces es interesante. Confío en ti.' Eso es más valioso que cualquier instrucción.",
    },
    faseJuego: {
      nombre: "El Testigo Sonriente",
      duracionMin: 7,
      descripcion:
        "Sigue el juego libre de tu hijo sin dirigirlo. Cuando haga algo, nómbralo suavemente una vez, sin preguntar ni corregir.",
      pasos: [
        "Siéntate a su lado y observa. Si toma un bloque, di suavemente: 'Bloque.' Nada más.",
        "Si hace un sonido, repítelo con la misma entonación. Solo eso.",
        "Si intenta mostrarte algo, recíbelo con una sonrisa y di el nombre del objeto.",
        "Resiste la tentación de preguntar '¿Qué es esto?' o '¿Cómo se llama?'. Hoy no preguntas.",
        "Cada vez que él inicie comunicación contigo — con mirada, gesto o sonido — responde con calidez y sin demanda.",
      ],
      recordatorio:
        "Las preguntas ponen presión. Las observaciones abren puertas. Hoy eres la testigo más amorosa de su mundo.",
    },
    faseCierre: {
      nombre: "Qué hermoso lo que vi",
      duracionMin: 3,
      descripcion:
        "Cierra la sesión nombrando algo específico y hermoso que observaste en tu hijo hoy.",
      pasos: [
        "Dale un abrazo y di: '[Nombre], vi cómo jugabas con [objeto]. Me encantó.'",
        "Anota en la Bitácora: ¿Qué inició él sin que tú lo pidieras? ¿Qué sonidos o gestos usó?",
        "Toma un segundo para reconocer que hoy hiciste algo difícil: dejar espacio.",
      ],
      recordatorio:
        "Lo que anotas hoy será tu punto de comparación en 30 días. Sé específica y honesta.",
    },
    microjuegos: [
      {
        id: "d2-m1",
        nombre: "Yo Sigo, Tú Llegas",
        objetivo: "Practicar el seguimiento del turno del niño",
        duracionMin: 4,
        materiales: ["Cualquier juguete preferido del niño"],
        pasos: [
          "Coloca el juguete favorito de tu hijo en el suelo entre los dos.",
          "Espera que él lo tome. Cuando lo haga, di el nombre del juguete una vez.",
          "Si lo tira, di '¡Cayó!' Si lo aprieta, di '¡Aprieta!'",
          "Sigue nombrando sus acciones sin pedir que haga algo diferente.",
        ],
        trucoPro:
          "Nombra las acciones en tiempo presente: 'Empuja', 'Rueda', 'Tira'. No expliques, solo nombra. Esto activa el vocabulario de acción.",
      },
      {
        id: "d2-m2",
        nombre: "Sonido Paralelo",
        objetivo: "Crear conciencia sonora sin presión",
        duracionMin: 3,
        materiales: ["Dos objetos iguales o similares"],
        pasos: [
          "Toma el mismo tipo de objeto que tiene tu hijo.",
          "Haz lo mismo que él hace, en paralelo, sin exigir que te mire.",
          "Añade un sonido suave a tu acción: 'bum bum' al golpear, 'shhh' al deslizar.",
          "Espera. Si él repite el sonido, celebra con una gran sonrisa.",
        ],
        trucoPro:
          "Jugar en paralelo (al lado, no frente a frente) reduce la presión social. Es una estrategia usada en terapia de lenguaje.",
      },
    ],
    checklist: [
      {
        id: "d2-c1",
        label: "Observé sin intervenir",
        descripcion: "Pasé al menos 5 minutos viendo su juego sin dar instrucciones",
      },
      {
        id: "d2-c2",
        label: "No pregunté qué es o cómo se llama",
        descripcion: "Evité hacer preguntas de evaluación durante el juego libre",
      },
      {
        id: "d2-c3",
        label: "Nombré sus acciones (no las corregí)",
        descripcion: "Usé palabras para describir lo que él hacía, no para redirigirlo",
      },
      {
        id: "d2-c4",
        label: "Anoté sus iniciativas comunicativas",
        descripcion: "Registré en la Bitácora qué sonidos, gestos o miradas usó él espontáneamente",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo te mira para verificar tu reacción mientras juega",
      "Hace sonidos o gestos espontáneos durante el juego libre",
      "Acepta tu presencia sin ponerse tenso ni buscar alejarse",
    ],
    consejoDia:
      "Si te resulta difícil estar en silencio, es completamente normal. Estamos entrenadas para hacer, enseñar, corregir. Hoy estás aprendiendo una habilidad nueva: la presencia sin agenda. Es un músculo que se fortalece con la práctica.",
    fraseMotivacional:
      "Hay días en que simplemente estar al lado de tu hijo, sin palabras, es el regalo más grande que puedes darle. Hoy fuiste ese regalo. No lo subestimes, mamá — tu calma es su seguridad.",
    erroresComunes: [
      {
        error: "Llenar el silencio con preguntas como '¿Qué tienes ahí?' o '¿Cómo se llama eso?'",
        reencuadre:
          "Las preguntas de evaluación crean ansiedad en niños con retraso de lenguaje. En lugar de preguntar, nombra: 'Eso es un carro. Carro rojo.' La información sin presión entra mucho más fácil.",
      },
      {
        error: "Redirigir el juego hacia algo más 'educativo'",
        reencuadre:
          "Lo que tu hijo elige explorar ya es educativo. Confiar en sus elecciones le dice que su mundo interior tiene valor. Eso construye el puente de comunicación que necesitas.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting peacefully on a wooden floor beside her toddler who is playing independently with colorful blocks, mother has a soft smile watching him, natural light, calm home environment, child focused on toys, mother present but not interfering.",
  },

  {
    day: 3,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Tesoro Sonoro",
    subtitulo: "Tres objetos, tres mundos de sonido para explorar juntos",
    capitulo: 2,
    loEsencial:
      "El oído de tu hijo es una puerta enorme hacia el lenguaje. Antes de aprender palabras, los niños aprenden a distinguir sonidos, ritmos y texturas auditivas. Hoy crearás una pequeña caja de tesoros sonoros con objetos de tu casa y los explorarás juntos. No vas a nombrar todavía — solo vas a escuchar. La atención auditiva es el suelo fértil donde crecen las palabras. Dale tiempo a tu hijo de descubrir que el mundo suena diferente según dónde miras.",
    objetivoDia:
      "Explorar 3 objetos con sonidos distintos, observando la reacción de tu hijo ante cada uno y extendiendo su atención auditiva.",
    faseConexion: {
      nombre: "La caja secreta",
      duracionMin: 5,
      descripcion:
        "Prepara los materiales antes y usa la anticipación para captar la atención de tu hijo desde el inicio.",
      pasos: [
        "Pon 3 objetos sonoros en una caja o bolsa antes de la sesión: una botella con arroz, un par de llaves y una taza de plástico.",
        "Lleva la caja con misterio: agítala levemente y di '¿Qué hay aquí adentro?'",
        "Espera que tu hijo muestre curiosidad — puede acercarse, señalar o simplemente mirar.",
        "Ábrela despacio, como si fuera un tesoro.",
      ],
      recordatorio:
        "La anticipación es una herramienta de lenguaje poderosa. Cuando tu hijo espera algo con emoción, su cerebro está completamente encendido.",
    },
    faseJuego: {
      nombre: "Escuchamos Juntos",
      duracionMin: 7,
      descripcion:
        "Saca cada objeto uno a la vez. Produce el sonido, ponle cara de sorpresa y deja que tu hijo lo explore.",
      pasos: [
        "Saca la botella con arroz. Agítala suavemente, luego fuerte. Haz cara de 'oh, qué interesante' sin decir la palabra todavía.",
        "Pásale la botella. Observa cómo la explora. Si la agita, celebra con aplausos.",
        "Saca las llaves. Hazlas sonar. Luego ponlas cerca de su oído para que escuche diferente.",
        "Saca la taza. Golpéala suavemente con la mano. Golpéala en el suelo. Noten juntos que suena diferente.",
        "Al final, mezcla los tres objetos y deja que él elija cuál explorar.",
      ],
      recordatorio:
        "No hay respuesta correcta. Si quiere morder la taza o tirar las llaves, está explorando con todos sus sentidos. Permítelo con seguridad.",
    },
    faseCierre: {
      nombre: "El sonido favorito",
      duracionMin: 3,
      descripcion: "Termina nombrando los sonidos y guardando los objetos con ritual.",
      pasos: [
        "Toma cada objeto, hazlo sonar una última vez y di su nombre: 'Botella. Llaves. Taza.'",
        "Di: 'Vamos a guardar el tesoro.' Haz que él te ayude poniendo los objetos en la caja.",
        "Anota en la Bitácora cuál objeto captó más su atención y cuánto tiempo lo exploró.",
      ],
    },
    microjuegos: [
      {
        id: "d3-m1",
        nombre: "Adivina Quién Suena",
        objetivo: "Desarrollar discriminación auditiva",
        duracionMin: 3,
        materiales: ["Botella con arroz", "Llaves", "Taza de plástico"],
        pasos: [
          "Pon los tres objetos en fila frente a tu hijo.",
          "Escóndete detrás de él y produce el sonido de uno de los objetos.",
          "Pregúntale con la mirada o el gesto cuál fue — señala los tres con curiosidad.",
          "Si señala, celebra. Si no, muéstrale tú cuál fue y repite.",
        ],
        trucoPro:
          "Para niños muy pequeños (1-2 años), dos objetos son suficientes. Añade el tercero solo cuando domine dos.",
        variante:
          "Usa objetos de la cocina: una cuchara, un recipiente y una botella de agua. Varía los materiales para que el oído no se acostumbre.",
      },
    ],
    checklist: [
      {
        id: "d3-c1",
        label: "Preparé los 3 objetos sonoros",
        descripcion: "Reuní materiales de casa con sonidos claramente distintos",
      },
      {
        id: "d3-c2",
        label: "Usé la anticipación (caja secreta)",
        descripcion: "Introduje los objetos con misterio para captar su atención",
      },
      {
        id: "d3-c3",
        label: "Observé su preferencia sonora",
        descripcion: "Noté qué objeto o sonido captó más su atención",
      },
      {
        id: "d3-c4",
        label: "Nombré los objetos al final",
        descripcion: "Al cerrar, dije el nombre de cada objeto una vez, claramente",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo gira la cabeza o busca la fuente cuando escucha un sonido nuevo",
      "Explora activamente los objetos en lugar de ignorarlos",
      "Repite o intenta imitar alguno de los sonidos que produjiste",
    ],
    consejoDia:
      "Puedes repetir este juego con la misma caja durante toda la semana. La familiaridad con los objetos hará que la próxima vez se interese más en comunicarse sobre ellos.",
    fraseMotivacional:
      "Cada pequeño sonido que tu hijo escucha hoy es una semilla de vocabulario para mañana. No ves el árbol crecer en tiempo real, pero está creciendo. Tú eres la jardinera más dedicada que conozco.",
    erroresComunes: [
      {
        error: "Nombrar el objeto antes de que el niño lo explore",
        reencuadre:
          "La secuencia correcta es: explora primero, nombra después. Si llegas con la palabra antes de la curiosidad, la palabra no tiene a qué pegarse. Deja que la experiencia sensorial abra la puerta.",
      },
      {
        error: "Quitar el objeto cuando lo lleva a la boca",
        reencuadre:
          "Llevar objetos a la boca es una forma legítima de exploración sensorial para niños pequeños. Asegúrate de que los objetos sean seguros, y luego deja que explore. Puedes decir suavemente: 'Lo toca con la boca, mmmm.'",
      },
    ],
    imagePromptHint:
      "LATAM mother and 2-year-old toddler sitting together on a colorful floor mat, child holding and shaking a small clear bottle with rice inside, both looking at it with curiosity, other objects (keys, cup) nearby, warm lamp light, cozy kitchen or living room.",
  },

  {
    day: 4,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Eco Emocional",
    subtitulo: "Repite lo que dice tu hijo y dile que su voz importa",
    capitulo: 1,
    loEsencial:
      "Cuando tu hijo hace un sonido y tú lo repites con la misma emoción, estás haciendo algo extraordinario: le estás confirmando que su comunicación tiene efecto en el mundo. Esto se llama eco emocional, y es uno de los mecanismos más poderosos para motivar el habla. No importa si el sonido no es una palabra real. 'Babababa' repetido con alegría enseña más que diez flashcards. Hoy aprenderás a convertirte en el mejor espejo sonoro de tu hijo.",
    objetivoDia:
      "Imitar y amplificar los sonidos de tu hijo al menos 10 veces durante el día, respondiendo con la misma energía emocional que él usó.",
    faseConexion: {
      nombre: "Escucho tu voz",
      duracionMin: 5,
      descripcion:
        "Sintonízate con los sonidos de tu hijo antes de comenzar. Presta atención especial a cada vocalización, por pequeña que sea.",
      pasos: [
        "Siéntate frente a tu hijo con un espejo pequeño entre los dos si tienes uno. Si no, solo frente a frente.",
        "Di: '[Nombre], hoy voy a escuchar todo lo que dices.' Aunque no lo entienda, el tono le llega.",
        "Espera en silencio 30 segundos. Casi siempre hará algún sonido.",
        "Cuando lo haga, repítelo exactamente, con la misma intensidad y emoción.",
      ],
      recordatorio:
        "No corrijas, no mejores, no cambies el sonido. Solo repite. El eco exacto es la clave.",
    },
    faseJuego: {
      nombre: "La Conversación Sin Palabras",
      duracionMin: 7,
      descripcion:
        "Mantén una 'conversación' de turnos usando solo los sonidos que él produce. Esto entrena el patrón de turno comunicativo.",
      pasos: [
        "Cuando haga un sonido, espera un segundo y repítelo con alegría.",
        "Luego haz una pausa y espera que él responda. Si lo hace, vuelve a repetir.",
        "Si se queda callado, haz un sonido suave tuyo: 'aaaaah' y espera.",
        "Si señala algo, di el nombre del objeto y luego imita cualquier sonido que él emita al respecto.",
        "Mantén la 'conversación' yendo y viniendo al menos 5 intercambios seguidos.",
      ],
      recordatorio:
        "Una 'conversación' de sonidos tiene tanto valor como una de palabras. Estás entrenando el ritmo del diálogo.",
    },
    faseCierre: {
      nombre: "Tu voz es música",
      duracionMin: 3,
      descripcion: "Celebra los intercambios que tuvieron y cierra con una canción corta.",
      pasos: [
        "Canta 2 estrofas de cualquier canción que le guste. Deja pausas para que él intente completar.",
        "Al terminar, di: '[Nombre], me encanta tu voz.' Con toda la sinceridad del mundo.",
        "Anota en la Bitácora: ¿Qué sonidos repitió? ¿Cuántos intercambios de turno lograron?",
      ],
    },
    microjuegos: [
      {
        id: "d4-m1",
        nombre: "El Juego del Eco",
        objetivo: "Entrenar el turno comunicativo",
        duracionMin: 4,
        pasos: [
          "Siéntate frente a tu hijo y di un sonido simple: 'ba'.",
          "Espera que él lo repita. Si lo hace, celebra.",
          "Ahora espera que él inicie un sonido. Cuando lo haga, tú lo repites.",
          "Alterna: tú lideras, luego él lidera. Siempre celebra sus iniciativas.",
        ],
        trucoPro:
          "Si tu hijo no imita de inmediato, no repitas el sonido más de 2 veces. Pasa a otro sonido. El objetivo es que él se enganche, no que repita por obligación.",
        variante:
          "Usa sonidos de animales: muu, guau, miau. Son más divertidos y tienen una imagen mental que los ancla.",
      },
      {
        id: "d4-m2",
        nombre: "Espejo de Caras",
        objetivo: "Reforzar la imitación facial y sonora",
        duracionMin: 3,
        materiales: ["Un espejo pequeño irrompible (opcional)"],
        pasos: [
          "Pon el espejo entre los dos para que ambos puedan verse.",
          "Haz una expresión exagerada mirando al espejo.",
          "Nombra la expresión: 'Cara feliz', 'Cara de susto.'",
          "Invita a tu hijo a imitarte. Si lo hace, imítalo a él.",
        ],
        trucoPro:
          "Ver su propio rostro en el espejo aumenta la conciencia corporal y facilita la imitación. Muchos niños con retraso de lenguaje responden muy bien a esta actividad.",
      },
    ],
    checklist: [
      {
        id: "d4-c1",
        label: "Repetí sus sonidos con la misma emoción",
        descripcion: "Ecoicé sus vocalizaciones sin cambiarlas ni corregirlas",
      },
      {
        id: "d4-c2",
        label: "Logré al menos 3 intercambios de turno",
        descripcion: "Tuvimos un 'ida y vuelta' de sonidos o gestos al menos 3 veces",
      },
      {
        id: "d4-c3",
        label: "No corregí su pronunciación",
        descripcion: "Resistí el impulso de mejorar o ajustar los sonidos que hizo",
      },
      {
        id: "d4-c4",
        label: "Le dije que su voz me gusta",
        descripcion: "Le expresé verbalmente o con mi cara que su comunicación me importa",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo produce un sonido, te mira y espera tu reacción",
      "Repite o varía un sonido después de que tú lo ecoas",
      "Los intercambios de turno duran más de 2 veces consecutivas",
    ],
    fraseMotivacional:
      "Su voz, aunque todavía no sean palabras, ya es lenguaje. Ya es comunicación. Cada vez que la recibes con alegría, le dices que vale la pena seguir intentando. Eso, mamá, es exactamente lo que necesita.",
    erroresComunes: [
      {
        error: "Corregir 'eso no se dice así, di mamá'",
        reencuadre:
          "La corrección interrumpe el flujo comunicativo y puede hacer que el niño deje de intentar. Primero acepta lo que dice, luego modela la forma correcta de forma natural en la conversación.",
      },
      {
        error: "No responder porque 'no se entiende lo que dice'",
        reencuadre:
          "No necesitas entender el sonido para responderle. Responder a cualquier vocalización le enseña que comunicarse produce resultados. Ese es el motor del lenguaje.",
      },
    ],
    imagePromptHint:
      "Close-up of a LATAM mother and her toddler (18 months) face-to-face on a colorful blanket, both with mouths open making sounds, mother's eyes are full of delight and warmth, child looks engaged and excited, natural morning light.",
  },

  {
    day: 5,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Carrera de Palabras",
    subtitulo: "Dos juguetes favoritos, una carrera llena de emoción y palabras",
    capitulo: 2,
    loEsencial:
      "El juego físico con emoción es uno de los contextos más ricos para el lenguaje. Cuando un niño está emocionado, su cerebro absorbe palabras como esponja. La Carrera de Palabras usa dos juguetes favoritos para crear una situación de anticipación, expectativa y celebración — tres ingredientes perfectos para que las palabras aparezcan. Hoy no buscas que diga 'listo' ni '¡ya!'. Buscas que su cuerpo y su mente estén tan activados que las palabras quieran salir.",
    objetivoDia:
      "Usar la estructura de una carrera simple para introducir palabras de acción ('¡listo!', '¡ya!', '¡ganó!') en un contexto de alta emoción.",
    faseConexion: {
      nombre: "Elegimos los campeones",
      duracionMin: 5,
      descripcion: "Deja que tu hijo elija los dos juguetes que van a 'correr'. Esa elección ya es comunicación.",
      pasos: [
        "Muestra cuatro juguetes y di: '¿Cuáles van a correr hoy?' Espera que señale o tome dos.",
        "Si no puede elegir, toma tú dos y di sus nombres exageradamente: '¿El OSO o el CARRO?'",
        "Una vez elegidos, preséntalo como un gran evento: '¡Hoy compiten el oso y el carro!'",
        "Haz que cada juguete haga una pequeña reverencia o movimiento de presentación.",
      ],
      recordatorio:
        "Permitir que elija fortalece la agencia comunicativa. Cualquier forma de elección — señalar, mirar, tomar — es comunicación válida.",
    },
    faseJuego: {
      nombre: "¡En sus marcas!",
      duracionMin: 7,
      descripcion:
        "Crea la estructura de la carrera con suspense y celebración exagerada. Las palabras clave deben aparecer en momentos de máxima emoción.",
      pasos: [
        "Pon los dos juguetes en una línea de salida (una cinta, una hoja de papel, lo que tengas).",
        "Di lentamente: '¡En sus marcaaas…!' Pausa larga. Mira a tu hijo con suspense.",
        "Di: '¡Liiistas…!' Pausa más larga. Agárrate el corazón como si fuera emocionante.",
        "Di '¡YA!' y mueve ambos juguetes hacia la meta con entusiasmo.",
        "El que 'gana': levántalo en el aire y celebra: '¡Ganó el oso! ¡Ganó! ¡Yupi!'",
        "Repite 4-5 veces. Cada vez, deja que tu hijo mueva uno de los juguetes.",
      ],
      recordatorio:
        "Exagera la pausa antes del '¡YA!' — esa pausa de anticipación es cuando el niño más ganas tiene de gritar algo.",
    },
    faseCierre: {
      nombre: "Los campeones descansan",
      duracionMin: 3,
      descripcion: "Cierra la sesión con un ritual de premiación sencillo y cálido.",
      pasos: [
        "Haz una 'ceremonia': pon los dos juguetes uno al lado del otro y aplaude.",
        "Dale a tu hijo un aplauso también: '¡Y el campeón de hoy eres tú!'",
        "Anota: ¿Intentó decir 'ya' o alguna palabra durante la carrera? ¿Cómo celebró el que ganó?",
      ],
    },
    microjuegos: [
      {
        id: "d5-m1",
        nombre: "Rueda Rueda",
        objetivo: "Introducir vocabulario de movimiento",
        duracionMin: 3,
        materiales: ["Un carro de juguete o pelota"],
        pasos: [
          "Siéntate frente a tu hijo con espacio entre los dos.",
          "Empuja el carro hacia él diciendo '¡Rueda!' con entusiasmo.",
          "Espera que lo empuje de vuelta. Cuando lo haga: '¡Llegó! ¡Rueda!'",
          "Aumenta la emoción con cada intercambio.",
        ],
        trucoPro:
          "Si tiene un carro con sonido, mejor. El sonido del motor mientras rueda ancla la palabra 'rueda' a una experiencia sensorial completa.",
        variante:
          "Usa una pelota y varía el vocabulario: 'rueda', 'viene', 'va', 'atrápalo'.",
      },
    ],
    checklist: [
      {
        id: "d5-c1",
        label: "Dejé que eligiera los juguetes",
        descripcion: "Respeté su elección o facilité una elección entre dos opciones",
      },
      {
        id: "d5-c2",
        label: "Usé las palabras clave en momentos de emoción",
        descripcion: "Dije '¡listo!', '¡ya!' y '¡ganó!' en los picos de emoción del juego",
      },
      {
        id: "d5-c3",
        label: "Exageré las pausas de anticipación",
        descripcion: "Creé suspenso real antes del '¡ya!' para que quisiera completarlo",
      },
      {
        id: "d5-c4",
        label: "Repití la estructura al menos 4 veces",
        descripcion: "La repetición de la estructura ayuda al cerebro a predecir y anticipar las palabras",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo mueve el juguete en respuesta al '¡ya!'",
      "Muestra anticipación en el cuerpo (tensión, sonrisa) durante la pausa",
      "Intenta vocalizar durante el conteo o la celebración",
    ],
    consejoDia:
      "Esta estructura de 'en sus marcas, listos, ya' es una de las más poderosas para provocar lenguaje. Úsala también con otras actividades del día: antes de empujar el columpio, antes de tirar la pelota, antes de lanzarle la manta encima.",
    fraseMotivacional:
      "Ver a tu hijo emocionado es ver a su cerebro aprender. Esa risa, esa tensión antes del '¡ya!', ese saltito cuando gana — todo eso es lenguaje en construcción. Tú creaste ese momento, mamá. Nadie más.",
    erroresComunes: [
      {
        error: "Pedirle que diga '¡ya!' antes de empezar la carrera",
        reencuadre:
          "Pedir que diga la palabra antes de disfrutar el juego invierte la ecuación. La palabra debe ser consecuencia natural de la emoción, no el precio de entrada. Deja que la emoción llegue primero.",
      },
      {
        error: "Hacer la carrera muy rápido sin pausas",
        reencuadre:
          "La magia está en las pausas. La anticipación activa el lenguaje. Si vas demasiado rápido, pierdes el momento en que el niño quiere gritar algo.",
      },
    ],
    imagePromptHint:
      "LATAM mother on the floor with toddler, both leaning forward with big smiles, two small toy cars lined up on a strip of paper, child's hand reaching toward one car with excitement, living room with colorful rug, warm afternoon light.",
  },

  {
    day: 6,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "El Juego de la Sorpresa",
    subtitulo: "Esconder y revelar: la anticipación como puerta al lenguaje",
    capitulo: 2,
    loEsencial:
      "El juego de esconder y revelar es uno de los más antiguos y efectivos para el desarrollo del lenguaje. La anticipación que se crea entre 'esconder' y 'revelar' activa la corteza prefrontal del niño — la misma área que luego gestiona la intención comunicativa. Cuando tu hijo espera que algo aparezca, su cerebro está en el estado ideal para absorber y producir palabras. Hoy trabajarás con tres niveles de sorpresa: el objeto escondido, la cara escondida y el sonido escondido.",
    objetivoDia:
      "Usar la estructura de esconder-revelar para activar la anticipación y provocar vocalizaciones o gestos de petición.",
    faseConexion: {
      nombre: "El objeto misterioso",
      duracionMin: 5,
      descripcion: "Comienza escondiendo un objeto favorito bajo una tela o en tus manos. Crea el misterio.",
      pasos: [
        "Muestra un juguete favorito por un segundo, luego escóndelo detrás de tu espalda.",
        "Di '¿Dónde está?' con cara de genuina sorpresa.",
        "Espera que señale, haga un gesto, o se mueva hacia ti.",
        "Cualquier respuesta comunicativa (incluso solo mirarte a los ojos) es la señal para revelar el objeto.",
      ],
      recordatorio:
        "No reveles demasiado rápido. Tres segundos de espera es suficiente al principio. Con el tiempo, puede esperar más.",
    },
    faseJuego: {
      nombre: "Tres Sorpresas",
      duracionMin: 7,
      descripcion:
        "Juega tres variantes del juego de esconder-revelar: objeto bajo tela, cara con pañuelo, sonido detrás de la puerta.",
      pasos: [
        "Variante 1 — Objeto bajo tela: pon un juguete bajo un paño de colores. Golpea el paño y di '¿Qué hay?' Espera. Levanta la tela con '¡Sorpresa!'",
        "Variante 2 — Cara escondida: cúbrete la cara con tus manos. Di '¿Dónde está mamá?' Espera señal de él. Destápate con '¡Aquí estoy!'",
        "Variante 3 — Sonido escondido: ve al otro lado de la puerta con un juguete sonoro. Hazlo sonar. Pregunta: '¿Dónde está el sonido?' Aparece por la puerta.",
        "Repite la que más le haya gustado dos veces más.",
      ],
      recordatorio:
        "La variación mantiene el interés. El cerebro responde más ante la novedad que ante la repetición exacta.",
    },
    faseCierre: {
      nombre: "La gran sorpresa final",
      duracionMin: 3,
      descripcion: "Cierra con una sorpresa preparada de antemano que supere las anteriores.",
      pasos: [
        "Esconde un snack favorito o un juguete especial bajo la tela.",
        "Haz toda la ceremonia del '¿dónde está?' con el máximo suspenso.",
        "Al revelar, celebra enormemente y di: '¡La ÚLTIMA sorpresa! ¡Qué sorpresa tan rica!'",
        "Anota en la Bitácora: ¿Qué hizo para pedir que revelaras? ¿Señaló, vocalizó, jaló tu mano?",
      ],
    },
    microjuegos: [
      {
        id: "d6-m1",
        nombre: "El Túnel Misterioso",
        objetivo: "Crear anticipación espacial y vocabulario de posición",
        duracionMin: 4,
        materiales: ["Una manta o sábana", "Un juguete pequeño"],
        pasos: [
          "Haz un túnel con la sábana apoyada sobre dos cojines.",
          "Mete el juguete por un extremo lentamente, diciendo '¡Entra, entra, entra!'",
          "Espera que tu hijo se posicione en el otro extremo.",
          "Cuando el juguete salga: '¡Salió! ¡Ahí está!'",
        ],
        trucoPro:
          "Luego mete tu mano en el túnel y haz que el juguete te 'toque' — el absurdo y la sorpresa duplican la carcajada.",
        variante: "Haz que sea él quien meta el juguete mientras tú esperas al otro lado con cara de expectativa.",
      },
    ],
    checklist: [
      {
        id: "d6-c1",
        label: "Jugué las tres variantes de sorpresa",
        descripcion: "Objeto bajo tela, cara escondida, y sonido detrás de puerta",
      },
      {
        id: "d6-c2",
        label: "Esperé señales de comunicación antes de revelar",
        descripcion: "No revelé de inmediato — esperé gestos, mirada o sonido de su parte",
      },
      {
        id: "d6-c3",
        label: "Usé lenguaje de anticipación",
        descripcion: "Dije '¿dónde está?' y '¡sorpresa!' con emoción genuina",
      },
      {
        id: "d6-c4",
        label: "Noté cómo pidió que revelaras",
        descripcion: "Observé si señaló, jaló, vocalizó, o usó otro gesto para pedir",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo se acerca al lugar donde escondiste el objeto",
      "Jala tu mano o señala para pedirte que reveles",
      "Vocaliza o dice algo durante la pausa de expectativa",
    ],
    fraseMotivacional:
      "Cada juego que inventas con amor es una neurona nueva en el cerebro de tu hijo. No se ve todavía, pero está ahí, tejiendo conexiones que durarán toda la vida. Tú eres su mejor arquitecta.",
    erroresComunes: [
      {
        error: "Revelar antes de que el niño muestre señal de comunicación",
        reencuadre:
          "La espera es la parte más importante. Si revelas antes de que pida, pierdes la oportunidad de que practique la petición. Aguanta la incomodidad de la pausa — es donde ocurre el aprendizaje.",
      },
      {
        error: "Esconder objetos que le causan ansiedad",
        reencuadre:
          "Si tu hijo se angustia cuando algo desaparece, empieza con escondites casi visibles (la tela no cubre todo el objeto). Aumenta la ocultación gradualmente según su confort.",
      },
    ],
    imagePromptHint:
      "LATAM mother hiding behind a colorful cloth, peeking one eye out with a huge grin, toddler reaching toward the cloth with both hands laughing, bright playroom setting, soft toys scattered around, joyful energy.",
  },

  {
    day: 7,
    week: 1,
    weekTheme: "Conectar sin palabras",
    weekColor: "var(--color-accent-lavender)",
    titulo: "Día de Observación",
    subtitulo: "Hoy no hay juego nuevo — solo miras con ojos nuevos",
    capitulo: 1,
    loEsencial:
      "Después de seis días de juegos y conexión, hoy tienes una misión diferente y muy importante: observar sin intervenir. Tu hijo ha estado absorbiendo todo lo que hiciste esta semana. Hoy vas a notar lo que quedó, lo que emergió, lo que se está cocinando. Los gestos que usa espontáneamente, los sonidos que repite, los momentos en que te busca para comunicar algo — todo eso es evidencia de progreso. Aprende a leer el lenguaje de tu hijo antes de que tenga palabras.",
    objetivoDia:
      "Registrar en la Bitácora al menos 5 observaciones concretas sobre cómo se comunica tu hijo hoy: gestos, sonidos, miradas, iniciativas.",
    faseConexion: {
      nombre: "Ojos de mamá detective",
      duracionMin: 5,
      descripcion:
        "Antes de empezar el día, decide conscientemente que hoy eres observadora. Prepara tu Bitácora o el cuaderno con esto en mente.",
      pasos: [
        "Pon tu cuaderno de Bitácora en un lugar visible para que recuerdes anotar.",
        "Dite a ti misma: 'Hoy noto. No enseño. No corrijo. Solo veo.'",
        "Empieza con el desayuno — ese momento cotidiano está lleno de comunicación.",
        "Observa qué hace cuando quiere algo: ¿señala, jaló, mira, vocaliza?",
      ],
      recordatorio:
        "No tienes que hacer nada especial. Solo sé un poco más consciente de lo que ya ocurre naturalmente.",
    },
    faseJuego: {
      nombre: "El Inventario del Lenguaje",
      duracionMin: 7,
      descripcion:
        "Durante 7 minutos de juego libre, toma nota activa de todo lo que tu hijo hace para comunicarse.",
      pasos: [
        "Deja que elija el juego. No sugieras nada.",
        "Observa: ¿Muestra objetos? ¿Señala cosas fuera de su alcance? ¿Hace sonidos específicos para cosas específicas?",
        "Anota con palabras simples: 'señaló la puerta cuando quería salir', 'dijo baba cuando vio el biberón'.",
        "Si te busca para compartir algo (referencia conjunta), recíbelo con entusiasmo y escribe lo que ocurrió.",
        "Al final de los 7 minutos, cuenta cuántas veces inició comunicación contigo sin que tú lo pidieras.",
      ],
      recordatorio:
        "La 'referencia conjunta' — cuando señala algo para que tú también lo mires — es uno de los precursores más importantes del lenguaje.",
    },
    faseCierre: {
      nombre: "La semana que fue",
      duracionMin: 3,
      descripcion: "Cierra la primera semana con una revisión de tu Bitácora y un momento de celebración.",
      pasos: [
        "Lee las notas de los 7 días. Busca patrones: ¿qué sonidos aparecen más? ¿Qué juegos disfrutó más?",
        "Escribe una frase que resuma la semana: 'Esta semana vi que mi hijo [...]'",
        "Celebra tu propia constancia. Llegaste al día 7. Eso merece un momento de orgullo.",
      ],
    },
    microjuegos: [
      {
        id: "d7-m1",
        nombre: "Mapa de Comunicación",
        objetivo: "Crear un inventario visual de las formas en que el niño se comunica",
        duracionMin: 5,
        materiales: ["Papel", "Lapicero o marcadores"],
        pasos: [
          "Dibuja un círculo en el centro del papel y escribe el nombre de tu hijo.",
          "A su alrededor, escribe o dibuja cada forma de comunicación que observaste hoy.",
          "Incluye: gestos (señalar, jalar, mostrar), sonidos, miradas, expresiones.",
          "Guarda este mapa — en 3 semanas lo compararás con uno nuevo para ver el progreso.",
        ],
        trucoPro:
          "Toma una foto del mapa para tenerlo siempre a mano. Al final del programa harás uno nuevo y la diferencia te emocionará.",
      },
    ],
    checklist: [
      {
        id: "d7-c1",
        label: "Observé sin intervenir durante el juego libre",
        descripcion: "Dejé que él liderara sin sugerir ni corregir",
      },
      {
        id: "d7-c2",
        label: "Anoté al menos 5 comunicaciones espontáneas",
        descripcion: "Escribí gestos, sonidos o miradas que él usó para comunicarse sin que yo lo pidiera",
      },
      {
        id: "d7-c3",
        label: "Revisé la Bitácora de toda la semana",
        descripcion: "Leí mis notas de los días 1-6 y busqué patrones",
      },
      {
        id: "d7-c4",
        label: "Creé el Mapa de Comunicación",
        descripcion: "Dibujé o escribí el inventario de sus formas de comunicación actuales",
      },
    ],
    indicadoresProgreso: [
      "Puedes identificar al menos 3 formas en que tu hijo se comunica sin palabras",
      "Tu hijo tiene al menos 1 sonido consistente asociado a una cosa o persona",
      "Nuestros momentos de juego de esta semana generaron al menos una nueva conducta comunicativa",
    ],
    consejoDia:
      "La observación no es pasividad. Es la habilidad más avanzada de la crianza consciente. Cuando sabes cómo se comunica tu hijo, puedes responderle mejor. Y cuando le respondes bien, quiere comunicarse más.",
    fraseMotivacional:
      "Completaste una semana entera de conexión, de presencia, de amor hecho juego. No importa si hubo días difíciles o sesiones cortas. Lo que importa es que llegaste al día 7, mamá. Eso dice todo sobre quién eres.",
    erroresComunes: [
      {
        error: "Comparar el Mapa de Comunicación con el de otros niños",
        reencuadre:
          "Tu hijo no compite con nadie. Su mapa de comunicación es único y hermoso tal como es. El único punto de comparación válido es él mismo: el de hoy versus el de dentro de 30 días.",
      },
      {
        error: "Sentir que 'no pasó nada' esta semana",
        reencuadre:
          "Si llegaste al día 7 habiendo jugado con tu hijo, algo pasó. La conexión que construiste es invisible pero real. Las semillas tardan en brotar, pero el suelo ya está preparado.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting at a kitchen table with a small notebook, writing warmly while her toddler plays independently in the background on a mat, peaceful morning light, cup of coffee nearby, gentle smile on her face as she watches him.",
  },

  // ─────────────────────────────────────────────
  // SEMANA 2 — Jugar con significado
  // ─────────────────────────────────────────────
  {
    day: 8,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Tesoro Sonoro + Palabra",
    subtitulo: "Los mismos objetos de la semana pasada, ahora con su nombre",
    capitulo: 3,
    loEsencial:
      "Recuerdas la caja de tesoros sonoros del día 3? Esta semana la volvemos a abrir, pero con una diferencia importante: ahora añadimos la palabra. La exploración sensorial que hiciste la semana pasada preparó el terreno. Tu hijo ya conoce esos sonidos, ya tiene una representación mental de esos objetos. Ahora es el momento perfecto para poner una etiqueta verbal a esa representación. Este es el origen de todas las palabras: primero la experiencia, luego el nombre.",
    objetivoDia:
      "Asociar el nombre de 3 objetos a su sonido característico, repitiendo cada nombre en el momento de mayor atención auditiva.",
    faseConexion: {
      nombre: "Reconocemos el tesoro",
      duracionMin: 5,
      descripcion:
        "Recupera la caja de la semana 1. La familiaridad con los objetos hará que esta vez la atención sea más profunda.",
      pasos: [
        "Muestra la misma caja que usaste el día 3. Di: '¡Mira, es nuestra caja especial!'",
        "Deja que él la abra o saque los objetos sin intervenir.",
        "Observa si recuerda cómo funcionan. Si va directo a agitar la botella, eso es memoria.",
        "Una vez que los exploró un momento, comienza a nombrarlos.",
      ],
      recordatorio:
        "La familiaridad es aliada del lenguaje. Un objeto conocido es mucho más fácil de nombrar que uno nuevo.",
    },
    faseJuego: {
      nombre: "Nombre y Sonido",
      duracionMin: 7,
      descripcion:
        "Produce el sonido de cada objeto y di su nombre en el momento de mayor atención, justo cuando él escucha el sonido.",
      pasos: [
        "Toma la botella con arroz. Agítala y di inmediatamente: 'Botella. Suena la botella.'",
        "Pásasela. Cuando la agite, di de nuevo: 'Botella.' Señala el objeto mientras dices la palabra.",
        "Repite con las llaves: hazlas sonar, di 'Llaves', pásalas, celebra cuando suenen.",
        "Repite con la taza: golpéala, di 'Taza', pásala.",
        "Ahora mezcla los tres. Toma uno al azar, hazlo sonar, y espera 3 segundos antes de decir el nombre — a ver si él lo anticipa.",
      ],
      recordatorio:
        "Di la palabra en el pico de atención: el momento exacto en que el sonido ocurre. Ese es el instante en que el cerebro forma la asociación.",
    },
    faseCierre: {
      nombre: "¿Cuál es cuál?",
      duracionMin: 3,
      descripcion: "Pequeña revisión: nombra uno y espera que señale el correcto.",
      pasos: [
        "Pon los tres objetos en fila.",
        "Di el nombre de uno: 'Llaves.' Espera que señale. Si lo hace, celebra enormemente.",
        "Si no señala, toma tú las llaves y di: 'Las llaves, ¡aquí están!'",
        "Anota en la Bitácora: ¿Señaló algún objeto cuando dijiste su nombre?",
      ],
    },
    microjuegos: [
      {
        id: "d8-m1",
        nombre: "Ponle el Nombre",
        objetivo: "Asociar palabra a objeto en contexto lúdico",
        duracionMin: 4,
        materiales: ["Los 3 objetos de la caja de tesoros"],
        pasos: [
          "Esconde los tres objetos en diferentes lugares del cuarto.",
          "Di: 'Vamos a buscar la botella.' Ve con tu hijo a buscarla.",
          "Cuando la encuentre: '¡La botella! ¡La encontramos!' con mucho entusiasmo.",
          "Repite con cada objeto.",
        ],
        trucoPro:
          "La búsqueda activa (moverse para encontrar) ancla la palabra mucho más profundo que simplemente señalar desde quieto.",
        variante: "Escóndelos en una bolsa opaca y saca uno a la vez sin mirar.",
      },
    ],
    checklist: [
      {
        id: "d8-c1",
        label: "Usé los mismos objetos del Día 3",
        descripcion: "La familiaridad de los objetos facilitó la asociación con su nombre",
      },
      {
        id: "d8-c2",
        label: "Dije el nombre en el pico de atención",
        descripcion: "Nombré el objeto justo cuando producía su sonido, no antes ni después",
      },
      {
        id: "d8-c3",
        label: "Repetí cada nombre al menos 5 veces",
        descripcion: "La repetición en contexto es cómo el cerebro consolida el vocabulario",
      },
      {
        id: "d8-c4",
        label: "Observé si señaló cuando dije el nombre",
        descripcion: "Noté si reconoció alguna palabra y lo anoté en la Bitácora",
      },
    ],
    indicadoresProgreso: [
      "Al escuchar el nombre de un objeto, mira hacia él o lo señala",
      "Intenta imitar la palabra o produce un sonido aproximado",
      "Pide más veces el mismo objeto usando sonido o gesto",
    ],
    fraseMotivacional:
      "La primera palabra de un niño es el resultado de cientos de momentos como este. Tú estás construyendo esos momentos, uno a uno, con paciencia y amor. Cada repetición cuenta. Cada juego suma.",
    erroresComunes: [
      {
        error: "Decir el nombre demasiado rápido antes de que preste atención",
        reencuadre:
          "La secuencia correcta es: llama su atención con el sonido del objeto → espera que te mire → di el nombre. Si dices el nombre antes de tener su atención, la palabra cae en el vacío.",
      },
      {
        error: "Repetir el nombre demasiadas veces seguidas ('botella botella botella')",
        reencuadre:
          "La repetición espaciada es más efectiva que la inmediata. Di el nombre una vez, juega, y repítelo de nuevo en el siguiente momento natural. La frecuencia en el tiempo supera a la frecuencia en el instante.",
      },
    ],
    imagePromptHint:
      "LATAM mother holding up a small clear bottle with rice, pointing at it and saying something to her 2-year-old who is looking at the bottle with focused attention, warm afternoon light, colorful rug, other small objects visible nearby.",
  },

  {
    day: 9,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Rutina del Agua",
    subtitulo: "Cada sorbo, cada salpicada: una oportunidad para decir '¡Agua!'",
    capitulo: 3,
    loEsencial:
      "Las rutinas diarias son el mejor aula de lenguaje que existe. El agua acompaña a tu hijo muchas veces al día: al beber, al bañarse, al lavarse las manos. Cada uno de esos momentos es una oportunidad perfecta para anclar la palabra 'agua' a una experiencia real, sensorial y repetida. No necesitas una sesión especial — solo necesitas estar presente en los momentos que ya ocurren. La consistencia de la rutina hace el trabajo por ti.",
    objetivoDia:
      "Decir '¡Agua!' con entusiasmo en cada momento de contacto con agua durante todo el día, mínimo 6 veces.",
    faseConexion: {
      nombre: "El agua está en todas partes",
      duracionMin: 5,
      descripcion:
        "Comienza el día nombrando el agua desde el primer contacto — el lavado de manos en el desayuno.",
      pasos: [
        "Al abrir el grifo por primera vez, señala el agua y di con entusiasmo: '¡Agua! Mira, agua.'",
        "Deja que toque el chorro con la mano. Mientras lo hace: '¡Agua fría! Agua, agua.'",
        "Si reacciona (retira la mano, sonríe, mira), di: 'Sí, ¡agua!'",
        "Lleva este mismo ritual a cada lavado de manos del día.",
      ],
      recordatorio:
        "No tienes que exagerar como animadora. Una voz entusiasta pero natural es suficiente. El objetivo es que la palabra 'agua' aparezca varias veces en contextos auténticos.",
    },
    faseJuego: {
      nombre: "Exploración del Agua",
      duracionMin: 7,
      descripcion:
        "Crea un momento especial de juego con agua donde la palabra aparezca repetidamente con alegría.",
      pasos: [
        "Llena una palangana o recipiente grande con agua tibia y pon 2-3 objetos flotantes (tapa de botella, esponja, cuchara).",
        "Cuando meta la mano: '¡Agua! Qué rica el agua.'",
        "Cuando saque un objeto: '¡Salió del agua! Estaba en el agua.'",
        "Salpica suavemente y di: '¡Splash! Agua por todos lados.'",
        "Ofrécele el vaso de agua para beber durante el juego: '¿Agua? Toma agua.'",
      ],
      recordatorio:
        "Usa ropa que pueda mojarse o hazlo en el baño. La libertad de jugar sin preocupación por la ropa le permite explorar más.",
    },
    faseCierre: {
      nombre: "El agua y sus familias",
      duracionMin: 3,
      descripcion: "Conecta la palabra agua con todas las formas en que apareció hoy.",
      pasos: [
        "Con él en tus brazos, di: 'Hoy jugamos con agua. Tomaste agua. Te lavaste con agua.'",
        "Señala el grifo: '¿Dónde está el agua?' Espera que señale o se oriente.",
        "Anota en la Bitácora: ¿Cuántas veces dijo o intentó decir 'agua' hoy?",
      ],
    },
    microjuegos: [
      {
        id: "d9-m1",
        nombre: "Vacío y Lleno",
        objetivo: "Vocabulario de cantidad y acción",
        duracionMin: 4,
        materiales: ["Dos vasos de plástico", "Una palangana con agua"],
        pasos: [
          "Muestra el vaso vacío: 'Vacío. No hay agua.'",
          "Llénalo lentamente: 'Lleno. Hay agua. ¡Lleno!'",
          "Deja que él vierta de un vaso al otro.",
          "Nombra lo que pasa: 'Vierte', 'Cae', 'Lleno', 'Vacío'.",
        ],
        trucoPro:
          "El juego de verter es magnético para los niños pequeños. Una vez que empieza, puede durar 15 minutos solo. Úsalo para repetir vocabulario de forma completamente natural.",
        variante:
          "Añade colorante alimentario a uno de los vasos para que el agua de colores multiplique el interés.",
      },
    ],
    checklist: [
      {
        id: "d9-c1",
        label: "Dije 'agua' en al menos 6 momentos naturales del día",
        descripcion: "Al beber, al lavarse, al bañarse, al jugar con agua",
      },
      {
        id: "d9-c2",
        label: "Usé la palabra con entusiasmo genuino",
        descripcion: "No de forma mecánica, sino con expresión y calor",
      },
      {
        id: "d9-c3",
        label: "Creé un momento especial de juego con agua",
        descripcion: "La palangana o actividad de agua como sesión de vocabulario",
      },
      {
        id: "d9-c4",
        label: "Observé cualquier intento de imitar la palabra",
        descripcion: "Noté si produjo algún sonido como 'a', 'awa', 'aga' o similar",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo se orienta hacia el agua o el grifo cuando dices la palabra",
      "Hace un sonido que se aproxima a 'agua' en el contexto correcto",
      "Señala su vaso o el grifo para pedir agua",
    ],
    fraseMotivacional:
      "No necesitas materiales especiales ni juguetes caros. El agua del grifo de tu casa es hoy el mejor recurso de lenguaje del mundo. Y tú, mamá, eres la mejor maestra que tu hijo podría tener.",
    erroresComunes: [
      {
        error: "Dar el agua sin decir nada",
        reencuadre:
          "Cada vez que das algo sin nombrarlo, pierdes una oportunidad de vocabulario. No tienes que convertirte en una enciclopedia parlante, pero un simple '¡Agua!' antes de darle el vaso vale más de lo que imaginas.",
      },
      {
        error: "Esperar que la diga perfectamente antes de darle el agua",
        reencuadre:
          "Condicionar el acceso al agua o la comida al habla crea ansiedad. Primero da el agua, luego modela la palabra. La asociación positiva es siempre más poderosa que la privación.",
      },
    ],
    imagePromptHint:
      "LATAM mother and toddler at a small plastic basin of water outdoors or in a bathroom, child splashing with both hands laughing, mother pointing at the water with a big smile saying something, colorful cups floating in the water, warm daylight.",
  },

  {
    day: 10,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Canción de Dos Palabras",
    subtitulo: "Una frase cantada, una pausa, y la puerta abierta para que complete",
    capitulo: 5,
    loEsencial:
      "La música es la vía rápida al lenguaje. Cuando una palabra viene cantada, ocupa más espacio en el cerebro — tiene melodía, tiene ritmo, tiene emoción. Una canción simple de dos a cuatro palabras que se repite con una pausa estratégica al final se convierte en un andamio perfecto para que tu hijo complete. No importa que el resultado sea solo un sonido aproximado. Lo que importa es que su boca quiso participar.",
    objetivoDia:
      "Inventar o adaptar una canción simple de 2-4 palabras y cantarla con pausas para que tu hijo intente completar.",
    faseConexion: {
      nombre: "La voz que canta",
      duracionMin: 5,
      descripcion:
        "Comienza cantando una canción familiar sin pedir nada. Solo deja que tu voz cree el ambiente.",
      pasos: [
        "Canta cualquier canción que él conozca bien: 'Cucú cantaba la rana' o 'La vaca Lola'.",
        "No pidas que cante. Solo canta tú, con expresión y movimiento.",
        "Observa: ¿Mueve el cuerpo? ¿Sonríe? ¿Intenta vocalizar algo?",
        "Cuando termines, di: 'Otra vez?' y espera su reacción.",
      ],
      recordatorio:
        "Tu voz no tiene que ser perfecta. La voz imperfecta de mamá es más efectiva que cualquier grabación porque viene con contacto visual, calor y emoción.",
    },
    faseJuego: {
      nombre: "La Canción con Hueco",
      duracionMin: 7,
      descripcion:
        "Canta una frase corta repetida con una pausa al final. Esa pausa es la invitación a completar.",
      pasos: [
        "Inventa una canción de 3 palabras: 'Toma el agua, toma el agua, toma el agua, toma el ___' (pausa, señala el vaso).",
        "Canta las primeras 3 repeticiones completas. En la cuarta, para antes de la última palabra.",
        "Espera 3-4 segundos con cara expectante. Si dice algo, celebra enormemente.",
        "Si no completa, di tú la palabra con mucha alegría y continúa.",
        "Cambia a otra canción: 'Dame un beso, dame un beso, dame un ___' (pausa y señala tu mejilla).",
      ],
      recordatorio:
        "No pidas que cante. Crea la oportunidad y espera. La diferencia es enorme para un niño que siente presión.",
    },
    faseCierre: {
      nombre: "La canción de hoy",
      duracionMin: 3,
      descripcion: "Termina cantando la canción favorita de hoy una vez completa, sin pausas.",
      pasos: [
        "Canta la versión completa (sin pausa) como regalo: 'Esta vez la canto yo toda.'",
        "Añade movimientos corporales: palmadas, saltos, girar.",
        "Anota en la Bitácora: ¿Intentó completar alguna pausa? ¿Con qué sonido?",
      ],
    },
    microjuegos: [
      {
        id: "d10-m1",
        nombre: "Canción del Cuerpo",
        objetivo: "Vocabulario corporal con ritmo y movimiento",
        duracionMin: 4,
        pasos: [
          "Canta señalando partes del cuerpo: 'Esta es mi nariz, nariz, nariz. Esta es mi nariz, tócala así.'",
          "Guía su mano a tocar su nariz mientras cantas.",
          "Pausa antes de la última palabra la tercera vez: '¿Esta es mi...?' (señala su nariz).",
          "Celebra cualquier gesto o sonido de su parte.",
        ],
        trucoPro:
          "Las canciones de cuerpo tienen la ventaja de ser auto-referenciales: el niño toca su propio cuerpo, lo que crea una conexión sensorial más fuerte con el vocabulario.",
        variante:
          "Haz que la canción incluya un objeto favorito: 'Este es mi osito, osito, osito.'",
      },
      {
        id: "d10-m2",
        nombre: "Tarareo Libre",
        objetivo: "Producción vocal sin presión",
        duracionMin: 3,
        pasos: [
          "Empieza a tararear (sin letra) mientras juegas con él.",
          "Cuando te mire, exagera la boca moviéndola de forma graciosa.",
          "Si imita el tarareo, sigue él. Si no, continúa solo.",
          "Alterna entre tararear y cantarle directo a la cara con contacto visual.",
        ],
        trucoPro:
          "El tarareo es más fácil de imitar que las palabras porque no tiene consonantes ni sílabas difíciles. Es una puerta trasera hacia la producción vocal.",
      },
    ],
    checklist: [
      {
        id: "d10-c1",
        label: "Inventé o adapté una canción simple de 2-4 palabras",
        descripcion: "Creé una frase musical que se repite y que tiene sentido para él",
      },
      {
        id: "d10-c2",
        label: "Usé la pausa estratégica al menos 3 veces",
        descripcion: "Dejé espacio para que completara antes de decir la última palabra",
      },
      {
        id: "d10-c3",
        label: "Celebré cualquier intento vocal",
        descripcion: "No esperé la palabra perfecta — celebré el esfuerzo",
      },
      {
        id: "d10-c4",
        label: "Canté con cuerpo y expresión",
        descripcion: "Usé movimientos, palmadas y expresiones faciales para hacer la canción más atractiva",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo mueve el cuerpo al ritmo de la música",
      "Intenta vocalizar durante la pausa o al final de una frase",
      "Pide que repitas la canción (señalando, jalando, vocalizando)",
    ],
    fraseMotivacional:
      "Tu voz cantando para tu hijo es una de las experiencias más ricas que su cerebro puede tener. No importa que cantes afinada o no. Lo que importa es que tu voz está llena de amor, y él lo siente completamente.",
    erroresComunes: [
      {
        error: "Interrumpir la canción para pedir que repita una palabra",
        reencuadre:
          "Interrumpir la canción rompe el flujo y crea presión justo cuando el niño estaba disfrutando. La magia ocurre cuando el juego fluye. Confía en la pausa — ella sola crea la invitación.",
      },
      {
        error: "Usar canciones muy largas o complejas",
        reencuadre:
          "Para estos objetivos, cuanto más corta la frase, más poderosa. 'Pan, pan, rico pan' cantado con entusiasmo tiene más valor que toda una canción infantil compleja. La simplicidad es fuerza.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting on a colorful rug with her toddler on her lap, both looking at each other with joy, mother's mouth open singing, child's hands clapping, warm indoor light, cheerful and cozy atmosphere, no screens visible.",
  },

  {
    day: 11,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Palabra y Gesto — Más",
    subtitulo: "Juntar los dedos: el primer gesto intencional de petición",
    capitulo: 5,
    loEsencial:
      "El gesto de 'más' — juntar las yemas de los dedos de ambas manos — es uno de los primeros gestos funcionales que los niños aprenden y uno de los más poderosos porque les da una forma de pedir sin necesitar palabras. Cuando un niño aprende a hacer 'más' con las manos, su frustración baja y su motivación para comunicarse sube. Hoy enseñarás este gesto en el contexto más natural: durante la comida o el juego. El gesto y la palabra siempre van juntos — nunca separados.",
    objetivoDia:
      "Enseñar el gesto de 'más' (yemas de dedos juntas) combinado con la palabra '¡Más!' en al menos 3 contextos distintos.",
    faseConexion: {
      nombre: "El poder de pedir",
      duracionMin: 5,
      descripcion:
        "Empieza con un alimento favorito. La motivación de la comida es el mejor motor para aprender a pedir.",
      pasos: [
        "Siéntate frente a tu hijo a la hora de un snack. Pon el snack favorito en un recipiente visible pero fuera de su alcance.",
        "Toma un pedazo, dáselo y di: 'Más' mientras juntas tus propias yemas de dedos frente a él.",
        "Cuando lo coma, espera. Míralo con expectativa.",
        "Si extiende la mano, di '¡Más! Quieres más.' y toma su mano para hacer el gesto junto a él.",
      ],
      recordatorio:
        "No esperes que haga el gesto perfecto desde el primer intento. Cualquier movimiento de las manos al pedir es un paso en la dirección correcta.",
    },
    faseJuego: {
      nombre: "Más Veces, Más Cosas",
      duracionMin: 7,
      descripcion:
        "Extiende el gesto 'más' a contextos de juego: más burbujas, más cosquillas, más vueltas.",
      pasos: [
        "Haz burbujas de jabón por 10 segundos, luego para. Muestra el gesto 'más' y di '¿Más?'",
        "Si hace algún gesto o sonido, celebra y haz más burbujas: '¡Más burbujas! ¡Pediste más!'",
        "Cambia a cosquillas: hazle cosquillas, para, muestra el gesto. Espera su petición.",
        "Cambia a girar: levántalo y da una vuelta, bájalo, espera que pida más.",
        "Cada vez que haga el gesto (aunque sea parcial), nombra lo que está pidiendo: '¿Más giro? ¡Más giro!'",
      ],
      recordatorio:
        "La variedad de contextos es clave. El gesto debe viajar de la comida al juego para volverse verdaderamente funcional.",
    },
    faseCierre: {
      nombre: "El gesto del día",
      duracionMin: 3,
      descripcion: "Revisa el gesto y celebra cada intento que hizo.",
      pasos: [
        "Muestra el gesto 'más' lentamente frente a él y di: 'Más. Tú pediste más hoy.'",
        "Si lo intenta imitar ahora, celebra con aplausos.",
        "Anota: ¿En qué contexto lo usó mejor? ¿Cuántas veces intentó el gesto?",
      ],
    },
    microjuegos: [
      {
        id: "d11-m1",
        nombre: "Burbujas y Más",
        objetivo: "Motivar la petición con el gesto en contexto de alta motivación",
        duracionMin: 4,
        materiales: ["Frasco de burbujas de jabón"],
        pasos: [
          "Haz una serie de burbujas. Para completamente.",
          "Muestra el gesto 'más' con las manos y di '¿Más?'",
          "Espera 4-5 segundos con cara de expectativa.",
          "Cualquier gesto o sonido = más burbujas inmediatas.",
        ],
        trucoPro:
          "Las burbujas tienen la ventaja de desaparecer, lo que crea la necesidad de pedir más de forma natural. Es uno de los mejores contextos para enseñar 'más'.",
        variante:
          "Usa bolitas de papel enrolladas que tiras al aire, música que pausas, o un columpio que detienes.",
      },
    ],
    checklist: [
      {
        id: "d11-c1",
        label: "Enseñé el gesto en contexto de comida",
        descripcion: "Usé un snack favorito para motivar la petición con gesto + palabra",
      },
      {
        id: "d11-c2",
        label: "Extendí el gesto a al menos 2 contextos de juego",
        descripcion: "Burbujas, cosquillas, girar u otra actividad placentera",
      },
      {
        id: "d11-c3",
        label: "Siempre combiné gesto + palabra",
        descripcion: "Nunca usé solo el gesto sin la palabra ni la palabra sin el gesto",
      },
      {
        id: "d11-c4",
        label: "Respondí inmediatamente a cualquier intento",
        descripcion: "Cualquier gesto parcial o sonido recibió una respuesta positiva inmediata",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo junta las manos o hace un gesto al pedir algo",
      "Mira al adulto mientras hace el gesto (comunicación intencional)",
      "Usa el gesto en más de un contexto diferente",
    ],
    consejoDia:
      "Comparte este gesto con todos los cuidadores del niño: papá, abuela, tía. Cuantas más personas respondan al gesto, más rápido se consolida. Haz una nota en el refrigerador si es necesario.",
    fraseMotivacional:
      "Cuando tu hijo junta esas manitas para pedir más, está diciendo 'quiero seguir conectado contigo'. Ese gesto es un abrazo en forma de manos. Recíbelo siempre, siempre con amor.",
    erroresComunes: [
      {
        error: "Forzar físicamente las manos del niño para hacer el gesto",
        reencuadre:
          "Mover físicamente las manos puede crear resistencia. Es mejor modelar el gesto frente a él muchas veces. Cuando está motivado, lo imitará en su propio tiempo. La imitación voluntaria vale diez gestos forzados.",
      },
      {
        error: "Ignorar el gesto si no está 'perfecto'",
        reencuadre:
          "Un niño que extiende la mano, señala, o mueve los dedos en cualquier forma está intentando comunicar 'más'. Responde a la intención, no a la forma. La forma mejora sola cuando la intención es celebrada.",
      },
    ],
    imagePromptHint:
      "LATAM mother at a small table with toddler in high chair, mother holding up both hands with fingertips together making the 'more' gesture, child looking at her hands with interest, small bowl of fruit on the table, warm kitchen light.",
  },

  {
    day: 12,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Animales y Onomatopeyas",
    subtitulo: "Guau, miau, muuu: los sonidos más fáciles de decir y recordar",
    capitulo: 3,
    loEsencial:
      "Las onomatopeyas son las palabras más amigables del idioma para los niños con retraso de lenguaje. Son cortas, son sonoras, se pueden exagerar, y tienen un vínculo directo con la experiencia sensorial. 'Guau' es más fácil de decir que 'perro', y 'muuu' anclada a la imagen de una vaca crea una asociación poderosísima. Hoy usarás animales y sus sonidos para expandir el vocabulario activo de tu hijo de la forma más placentera posible: exagerando, dramatizando, y riéndose juntos.",
    objetivoDia:
      "Presentar 3 animales con sus onomatopeyas usando exageración vocal y corporal, y observar cuáles intenta imitar.",
    faseConexion: {
      nombre: "¿Quién viene hoy?",
      duracionMin: 5,
      descripcion: "Presenta los animales como personajes que van a visitar con mucho misterio.",
      pasos: [
        "Esconde 3 juguetes de animales en una bolsa (o usa imágenes grandes en papel).",
        "Di: '¡Hoy tenemos visitas muy especiales! ¿Quién será?' Agita la bolsa.",
        "Saca el primero muy despacio y antes de nombrarlo, haz el sonido del animal.",
        "Espera que tu hijo lo reconozca. Si lo hace, celebra. Si no, haz el sonido más exagerado.",
      ],
      recordatorio:
        "No digas el nombre del animal antes del sonido. Deja que el sonido llegue primero — así la asociación es más natural.",
    },
    faseJuego: {
      nombre: "El Gran Teatro de Animales",
      duracionMin: 7,
      descripcion:
        "Dramatiza cada animal con todo el cuerpo: movimiento, postura y sonido exagerado.",
      pasos: [
        "Toma el perro: camina en cuatro patas por el cuarto y ladra '¡GUAU GUAU!' muy fuerte. Haz que 'muerda' suavemente su barriga.",
        "Toma el gato: camina sigiloso con las manos como garras y di '¡miiiiiau!' muy suave y largo.",
        "Toma la vaca: párate rígida, mueve la cabeza lentamente y di '¡MUUUUU!' desde el estómago.",
        "Luego pon los tres animales en fila y di uno de los sonidos. Espera que señale el animal correcto.",
        "Si señala bien: '¡Sí! El perro dice guau. ¡Tú lo sabes!'",
      ],
      recordatorio:
        "El cuerpo de mamá actuando como animal es infinitamente más interesante que un juguete. La actuación física ancla el sonido a una experiencia completa.",
    },
    faseCierre: {
      nombre: "Noche de animales",
      duracionMin: 3,
      descripcion: "Despide a cada animal con su sonido y guárdalos juntos.",
      pasos: [
        "Di: 'Los animales se van a dormir.' Haz que cada uno 'duerma' con un '¡muuu, dormido!'",
        "Haz el sonido de cada animal una última vez y espera que él lo complete o imite.",
        "Anota: ¿Cuál onomatopeya intentó imitar? ¿Cuál le causó más risa?",
      ],
    },
    microjuegos: [
      {
        id: "d12-m1",
        nombre: "¿Quién Habla?",
        objetivo: "Discriminación auditiva y vocabulario animal",
        duracionMin: 3,
        materiales: ["Juguetes o imágenes de 3 animales"],
        pasos: [
          "Pon los tres animales en fila visible.",
          "Voltéate o cierra los ojos y haz el sonido de uno.",
          "Di: '¿Quién habló?' Señala los tres animales con la pregunta.",
          "Celebra si señala el correcto. Si no, muéstrale y repite.",
        ],
        trucoPro:
          "Empieza con animales cuyos sonidos sean muy distintos (perro=guau, vaca=muuu, gato=miau). Cuando los domine, añade animales más similares.",
        variante:
          "Hazlo al revés: tú señalas un animal y él hace el sonido.",
      },
      {
        id: "d12-m2",
        nombre: "El Animal de Hoy",
        objetivo: "Practicar onomatopeya favorita en múltiples contextos",
        duracionMin: 3,
        pasos: [
          "Elige el animal que más le gustó hoy.",
          "Úsalo en 3 situaciones diferentes durante el día: al despertar, al almorzar, al bañar.",
          "Cada vez que aparezca el animal, haz su sonido.",
          "Esto crea repetición natural y espaciada.",
        ],
        trucoPro:
          "Pega una imagen del animal en el refrigerador. Cada vez que pasen frente a ella, haz el sonido. Treinta repeticiones diarias sin que parezca una sesión.",
      },
    ],
    checklist: [
      {
        id: "d12-c1",
        label: "Presenté 3 animales con onomatopeyas exageradas",
        descripcion: "Guau, miau y muuu con actuación corporal completa",
      },
      {
        id: "d12-c2",
        label: "Dramaticé físicamente cada animal",
        descripcion: "Caminé en cuatro patas, hice gestos, usé la voz con volumen y tono variado",
      },
      {
        id: "d12-c3",
        label: "Esperé antes de decir el sonido",
        descripcion: "Dejé pausa para que él anticipara o completara",
      },
      {
        id: "d12-c4",
        label: "Noté cuál onomatopeya intentó más",
        descripcion: "Registré qué animal o sonido intentó imitar o señaló mejor",
      },
    ],
    indicadoresProgreso: [
      "Señala el animal correcto cuando escucha su onomatopeya",
      "Intenta producir uno de los sonidos animales",
      "Se ríe o reacciona con emoción ante la actuación corporal",
    ],
    fraseMotivacional:
      "Hoy fuiste actriz, maestra y mamá todo al mismo tiempo. Cada 'guau' que dijiste, cada cuatro patas que caminaste — todo eso fue amor en acción. Tu hijo no olvidará este juego, aunque todavía no tenga las palabras para decírtelo.",
    erroresComunes: [
      {
        error: "Usar solo imágenes en tarjetas sin movimiento ni sonido corporal",
        reencuadre:
          "Las tarjetas son bidimensionales. El aprendizaje de los niños pequeños es multisensorial. Cuando mamá actúa el animal con todo el cuerpo, la memoria es más profunda y el aprendizaje dura más.",
      },
      {
        error: "Pasar demasiado rápido de un animal al otro",
        reencuadre:
          "Tres animales bien dramatizados valen más que diez presentados sin emoción. La profundidad supera siempre a la amplitud en estas edades.",
      },
    ],
    imagePromptHint:
      "LATAM mother on all fours on a rug with her toddler, both laughing, small stuffed dog toy in front of them, mother's mouth wide open as if barking, child clapping with delight, afternoon light through curtains.",
  },

  {
    day: 13,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Vestirse Hablado",
    subtitulo: "La rutina de vestirse se convierte en lección de vocabulario",
    capitulo: 7,
    loEsencial:
      "Vestir a tu hijo es algo que ocurre al menos dos veces al día. Esa rutina repetida y predecible es un aula perfecta: siempre los mismos pasos, siempre las mismas prendas, siempre el mismo cuerpo. Cuando nombras cada prenda mientras la vistes, tu hijo escucha las mismas palabras docenas de veces por semana en un contexto completamente auténtico. Las rutinas de cuidado son donde más palabras se aprenden, no en sesiones de flashcards.",
    objetivoDia:
      "Nombrar cada prenda de ropa durante toda la rutina de vestirse, añadiendo la parte del cuerpo donde va.",
    faseConexion: {
      nombre: "Hoy nos vestimos despacio",
      duracionMin: 5,
      descripcion: "Convierte el momento de vestirse de la mañana en una experiencia consciente y hablada.",
      pasos: [
        "Antes de comenzar, muestra la ropa del día: extiéndela sobre la cama o el cambiador.",
        "Señala cada prenda y di su nombre: 'La camisa. Los pantalones. Los calcetines.'",
        "Habla como si fuera un evento especial: 'Hoy nos ponemos la camisa azul. Azul.'",
        "Deja que él toque cada prenda antes de ponérsela.",
      ],
      recordatorio:
        "No apresures esta rutina. Cinco minutos más de tiempo es el precio de cientos de palabras aprendidas en un mes.",
    },
    faseJuego: {
      nombre: "Prenda por Prenda",
      duracionMin: 7,
      descripcion:
        "Nombra la prenda + la parte del cuerpo donde va + una acción: 'Calcetín — pie — dentro!'",
      pasos: [
        "Toma el calcetín. Di: 'Calcetín.' Señala su pie: 'Pie.' Ponlo: '¡Dentro!' con entusiasmo.",
        "Toma la camisa. Di: 'Camisa.' Señala sus brazos: 'Brazos.' Ponla: '¡Pasa la mano!' con cara de alivio.",
        "Toma los pantalones. Di: 'Pantalón.' Señala sus piernas: 'Piernas.' '¡Entra la pierna!'",
        "Al terminar: 'Lista la camisa, listo el pantalón, listos los calcetines. ¡Listo [nombre]!'",
        "Pídele que señale: '¿Dónde está el calcetín?' Espera que señale su pie.",
      ],
      recordatorio:
        "La fórmula 'prenda + cuerpo + acción' es perfecta porque da tres palabras por prenda en un solo momento.",
    },
    faseCierre: {
      nombre: "¿Qué llevamos puesto?",
      duracionMin: 3,
      descripcion: "Repaso final frente al espejo si es posible.",
      pasos: [
        "Llévalo al espejo. Di: 'Mira qué guapo. ¿Qué llevas?' Señala cada prenda.",
        "Nombra cada una una vez más. Celebra si señala o imita alguna palabra.",
        "Anota en la Bitácora: ¿Qué prenda intentó nombrar? ¿Señaló alguna parte del cuerpo?",
      ],
    },
    microjuegos: [
      {
        id: "d13-m1",
        nombre: "El Osito se Viste",
        objetivo: "Practicar vocabulario de ropa con juguete como intermediario",
        duracionMin: 4,
        materiales: ["Un osito o muñeco", "Ropa pequeña de juguete o pañuelos"],
        pasos: [
          "Toma el osito y colócale un pañuelo como 'capa' o 'cobija'.",
          "Di: 'El osito tiene frío. Le ponemos la manta. Manta.'",
          "Quítasela: 'Ahora tiene calor. Quitamos la manta.'",
          "Invítalo a poner y quitar él.",
        ],
        trucoPro:
          "Vestir al muñeco antes de vestir al niño 'ensaya' el vocabulario de forma lúdica, sin la tensión de que el proceso le afecta directamente a él.",
      },
    ],
    checklist: [
      {
        id: "d13-c1",
        label: "Nombré cada prenda al menos 2 veces",
        descripcion: "Al mostrarla y al ponérsela",
      },
      {
        id: "d13-c2",
        label: "Usé la fórmula prenda + cuerpo + acción",
        descripcion: "'Calcetín — pie — dentro' para cada prenda principal",
      },
      {
        id: "d13-c3",
        label: "Hice el repaso frente al espejo",
        descripcion: "Revisamos juntos lo que llevaba puesto nombrando las prendas",
      },
      {
        id: "d13-c4",
        label: "No apresuré la rutina",
        descripcion: "Tomé el tiempo extra necesario para hacer la rutina hablada",
      },
    ],
    indicadoresProgreso: [
      "Levanta el pie o el brazo en anticipación cuando nombras la prenda correspondiente",
      "Señala su calcetín, zapato u otra prenda cuando la nombras",
      "Intenta imitar alguna de las palabras de ropa o partes del cuerpo",
    ],
    fraseMotivacional:
      "Las palabras más importantes no se aprenden en sesiones especiales. Se aprenden mientras te cambio el pañal, mientras te pongo la camisa, mientras vivimos juntos. Cada mañana que hablas con tu hijo mientras lo vistes eres su mejor maestra.",
    erroresComunes: [
      {
        error: "Vestirlo en silencio por las prisas de la mañana",
        reencuadre:
          "Entendemos que las mañanas son caóticas. Pero incluso una prenda comentada por la mañana ('¡Camisa!') es mejor que ninguna. No tiene que ser perfecto para ser poderoso.",
      },
      {
        error: "Darle la prenda sin señalar la parte del cuerpo",
        reencuadre:
          "La conexión entre la prenda y la parte del cuerpo es lo que hace que el vocabulario sea funcional y no solo una lista de palabras. 'Calcetín en el pie' crea un mapa mental que dura.",
      },
    ],
    imagePromptHint:
      "LATAM mother kneeling on a bed holding up a small colorful sock, toddler sitting and extending foot toward her, mother pointing at the foot and smiling, morning light, cozy bedroom, other small clothes laid out neatly.",
  },

  {
    day: 14,
    week: 2,
    weekTheme: "Jugar con significado",
    weekColor: "var(--color-accent-rose)",
    titulo: "Celebración Semana 2",
    subtitulo: "Revisa tu Bitácora, honra el progreso y prepárate para la semana que viene",
    capitulo: 8,
    loEsencial:
      "Llegaste a la mitad del camino. Catorce días de juego intencional, de presencia, de canciones y gestos y tesoros sonoros. Esta semana aprendiste que el lenguaje no ocurre en clínicas ni en sesiones especiales — ocurre en la palangana de agua, en la rutina del vestirse, en una carrera de juguetes. Hoy es un día de celebración, no de trabajo. Revisa la Bitácora con ojos amables, identifica el progreso real aunque sea pequeño, y comparte este momento con la persona que más te apoya.",
    objetivoDia:
      "Revisar la Bitácora de la semana 2, identificar la 'victoria de la semana' y celebrar compartiendo con un ser querido.",
    faseConexion: {
      nombre: "Mi victoria de la semana",
      duracionMin: 5,
      descripcion:
        "Siéntate con tu Bitácora y los ojos del corazón abiertos. El progreso real vive en los detalles.",
      pasos: [
        "Lee las notas de los días 8-13 completo.",
        "Busca: ¿Qué hizo esta semana que no hacía la semana pasada?",
        "Escribe una frase: 'Esta semana [nombre] empezó a [____].'",
        "No compares con otros niños. No compares con manuales. Solo compara con él mismo hace 7 días.",
      ],
      recordatorio:
        "La victoria puede ser minúscula: empezó a mirar hacia los objetos cuando los nombras, repitió una sílaba, hizo el gesto de 'más' una vez. Eso es enorme.",
    },
    faseJuego: {
      nombre: "El Juego de los Recuerdos",
      duracionMin: 7,
      descripcion:
        "Juega a repetir el juego favorito de la semana — el que más disfrutaron juntos.",
      pasos: [
        "Pregúntale (aunque no te entienda) qué juego quiere: '¿Las burbujas? ¿Los animales? ¿La carrera?'",
        "Observa hacia dónde se orienta o qué toma.",
        "Juega ese juego con toda la alegría de saber que ya lo conocen los dos.",
        "Añade una pequeña variación para mantener el interés.",
        "Celebra al final: '¡Este es nuestro juego favorito!'",
      ],
      recordatorio:
        "Repetir los juegos favoritos no es un retroceso — es consolidación. El cerebro necesita repetición con pequeñas variaciones para hacer permanentes los aprendizajes.",
    },
    faseCierre: {
      nombre: "Carta a la semana 3",
      duracionMin: 3,
      descripcion: "Escribe una intención para la semana que viene y comparte la victoria de hoy.",
      pasos: [
        "Escribe en la Bitácora: 'Esta semana quiero intentar [____] más.'",
        "Llama o escribe a una persona de confianza (papá, abuela, amiga) y comparte una victoria.",
        "Dale un abrazo largo a tu hijo y dile: 'Gracias por jugar conmigo estas dos semanas.'",
      ],
    },
    microjuegos: [
      {
        id: "d14-m1",
        nombre: "Álbum de la Semana",
        objetivo: "Crear un registro visual del progreso",
        duracionMin: 5,
        materiales: ["Fotos de la semana en teléfono o impresas", "Hoja de papel"],
        pasos: [
          "Busca 3-4 fotos o recuerdos de los juegos de esta semana.",
          "Muéstraselas a tu hijo: '¡Mira, aquí estás jugando con los animales!'",
          "Nómbralo en las fotos: '[Nombre] jugando. [Nombre] aprendiendo.'",
          "Guarda estas fotos — son la historia de su progreso.",
        ],
        trucoPro:
          "Si haces esto cada semana, al día 30 tendrás un álbum de 4 semanas de progreso. Ver las fotos del día 1 junto a las del día 30 es uno de los momentos más emotivos del programa.",
      },
    ],
    checklist: [
      {
        id: "d14-c1",
        label: "Revisé la Bitácora completa de la semana 2",
        descripcion: "Leí las notas de los días 8-13 con atención",
      },
      {
        id: "d14-c2",
        label: "Identifiqué y escribí la victoria de la semana",
        descripcion: "Una frase específica sobre algo nuevo que hizo esta semana",
      },
      {
        id: "d14-c3",
        label: "Jugué el juego favorito de la semana",
        descripcion: "Repetí el juego que más disfrutamos juntos",
      },
      {
        id: "d14-c4",
        label: "Compartí la victoria con alguien",
        descripcion: "Conté a una persona de confianza sobre el progreso de esta semana",
      },
    ],
    indicadoresProgreso: [
      "Puedes identificar al menos 1 cambio concreto desde el día 8",
      "Tu hijo tiene ahora al menos 1 gesto funcional (más, señalar, mostrar)",
      "Los momentos de juego son más largos o más conectados que al inicio",
    ],
    consejoDia:
      "Si sientes que 'no avanzamos nada', vuelve al Mapa de Comunicación del día 7. Compara. El progreso suele ser invisible hasta que lo pones junto al punto de partida.",
    fraseMotivacional:
      "Dos semanas. Catorce días. Tú no faltaste ni uno. Eso dice todo sobre el amor que le tienes a tu hijo y la determinación que llevas dentro. La semana que viene las palabras empiezan a despertar. Estás lista, mamá.",
    erroresComunes: [
      {
        error: "Comparar el progreso con el de otros niños en internet",
        reencuadre:
          "Las redes están llenas de historias extremas — milagros instantáneos y catástrofes. La realidad del progreso real es discreta y consistente. Confía en lo que ves en tu propio hijo, no en las pantallas.",
      },
      {
        error: "Saltarse el día de revisión porque 'no es un juego real'",
        reencuadre:
          "La revisión es parte central del método. Sin mirar atrás, no sabes hacia dónde ir. El día 14 es tan importante como el día 1.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting at a table with a small notebook open, smiling warmly while looking at photos on her phone, toddler playing happily in the background, cup of tea nearby, cozy afternoon light, sense of peace and accomplishment.",
  },

  // ─────────────────────────────────────────────
  // SEMANA 3 — Las palabras despiertan
  // ─────────────────────────────────────────────
  {
    day: 15,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Canción Hola/Adiós",
    subtitulo: "El mismo saludo cantado cada día se convierte en la primera rutina de lenguaje",
    capitulo: 5,
    loEsencial:
      "Los rituales de saludo y despedida son los primeros contextos donde los niños producen lenguaje social. 'Hola' y 'adiós' son palabras cortas, cargadas de emoción, y completamente predecibles — lo que las hace perfectas para el aprendizaje. Cuando usas la misma canción corta cada vez que llegues o te vayas, tu hijo comienza a anticiparla. La anticipación activa el lenguaje. Un día, antes de que lo notes, levantará la mano y dirá algo que suene a 'adiós'.",
    objetivoDia:
      "Establecer una canción de saludo y una de despedida que usarás de forma consistente en todos los encuentros y separaciones del día.",
    faseConexion: {
      nombre: "El saludo de hoy para siempre",
      duracionMin: 5,
      descripcion:
        "Elige o inventa una canción de hola de 3-4 palabras que usarás de ahora en adelante.",
      pasos: [
        "Inventa tu versión: '¡Hola [nombre], hola! ¡Hola [nombre], hola! Buenos días, [nombre], hola!'",
        "Cántala con palmadas, mirándolo a los ojos, con la mayor alegría del mundo.",
        "Repítela exactamente igual 3 veces seguidas.",
        "Extiende la mano para que le dé la suya, o dale un chocar de manos al final.",
      ],
      recordatorio:
        "La consistencia es el ingrediente mágico. La misma canción cada día, con los mismos gestos, en el mismo momento.",
    },
    faseJuego: {
      nombre: "Hola y Adiós en el Cuarto",
      duracionMin: 7,
      descripcion:
        "Practica ambas canciones usando muñecos y separaciones pequeñas dentro del cuarto.",
      pasos: [
        "Toma un muñeco y haz que 'llegue': canta la canción del hola.",
        "El muñeco juega un poco, luego 'se va': canta la canción del adiós.",
        "Haz que tu hijo despida al muñeco con la mano.",
        "Ahora tú sal del cuarto por 10 segundos. Al volver, canta el hola con entusiasmo.",
        "Repite la entrada y salida 3-4 veces con la canción completa cada vez.",
      ],
      recordatorio:
        "Las separaciones pequeñas practicadas con la canción reducen la ansiedad de separación real y crean el contexto para el 'adiós' verbal.",
    },
    faseCierre: {
      nombre: "La canción de despedida",
      duracionMin: 3,
      descripcion: "Termina la sesión con la canción de adiós por primera vez.",
      pasos: [
        "Canta: '[Nombre], [nombre], ya nos vamos. [Nombre], [nombre], hasta pronto. ¡Adiós!'",
        "Acompaña con el gesto de adiós con la mano.",
        "Anota en la Bitácora si extendió la mano o intentó el gesto de adiós.",
      ],
    },
    microjuegos: [
      {
        id: "d15-m1",
        nombre: "El Personaje que Llega",
        objetivo: "Practicar saludo en contexto lúdico y repetido",
        duracionMin: 4,
        materiales: ["2-3 juguetes o muñecos"],
        pasos: [
          "Esconde todos los muñecos detrás de una almohada.",
          "Saca uno a uno haciendo que 'llegan'. Canta el hola a cada uno.",
          "Luego hazlos 'irse' uno a uno. Canta el adiós a cada uno.",
          "Deja que él haga el gesto de adiós con la mano a cada muñeco.",
        ],
        trucoPro:
          "Usa un muñeco de su animal favorito. El apego emocional al muñeco hace que el ritual del saludo sea más significativo y emotivo.",
        variante:
          "Usa un títere de calcetín para hacer llegar y salir al personaje — el títere crea más magia que el muñeco estático.",
      },
    ],
    checklist: [
      {
        id: "d15-c1",
        label: "Creé y canté la canción del hola",
        descripcion: "Una frase corta y repetible que cantaré cada día de aquí en adelante",
      },
      {
        id: "d15-c2",
        label: "Creé y canté la canción del adiós",
        descripcion: "Un ritual de despedida con la misma melodía o una complementaria",
      },
      {
        id: "d15-c3",
        label: "Practiqué separaciones cortas con la canción",
        descripcion: "Salí y volví 3-4 veces usando las canciones en cada entrada y salida",
      },
      {
        id: "d15-c4",
        label: "Usé los mismos gestos cada vez",
        descripcion: "El gesto de la mano para adiós fue consistente en todas las repeticiones",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo levanta la mano para el gesto de adiós cuando escucha la canción",
      "Anticipa la canción y muestra emoción antes de que termines de cantarla",
      "Intenta vocalizar durante la canción del hola o el adiós",
    ],
    fraseMotivacional:
      "Cada 'hola' cantado es un ancla emocional en el cerebro de tu hijo. Cada 'adiós' con la mano es una palabra aprendida sin que nadie se lo haya exigido. Tú creaste un ritual de amor y lenguaje que él guardará para siempre.",
    erroresComunes: [
      {
        error: "Cambiar la canción cada día para que sea 'diferente'",
        reencuadre:
          "La consistencia es exactamente el punto. El cerebro aprende por repetición. Una sola canción de saludo usada todos los días durante 30 días tiene más poder que 30 canciones diferentes.",
      },
      {
        error: "Olvidarse de cantar cuando se tiene prisa",
        reencuadre:
          "En los días de prisa, una versión ultra corta es perfecta: solo di '¡Hola [nombre]!' cantado con la misma melodía y el gesto. Diez segundos preservan el ritual.",
      },
    ],
    imagePromptHint:
      "LATAM mother at the front door of a cozy home, waving warmly as she comes in, toddler standing in hallway with arms raised toward her, both mid-laugh, soft morning light, colorful backpack or bag visible, genuine homecoming joy.",
  },

  {
    day: 16,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "El Eco Avanzado",
    subtitulo: "Él inicia, tú ecoas y expandes: 'ta' se convierte en '¡Taza!'",
    capitulo: 5,
    loEsencial:
      "Recuerdas el eco del día 4, cuando repetías sus sonidos igual? Esta semana damos el siguiente paso: el eco avanzado. Cuando tu hijo dice 'ta', no solo repites 'ta' — agregas la palabra completa: '¡Taza! Sí, taza.' Esta técnica se llama expansión y es una de las estrategias más documentadas en el desarrollo del lenguaje. No corriges lo que dijo mal — agrandas lo que dijo bien. La diferencia es enorme para su motivación.",
    objetivoDia:
      "Cada vez que tu hijo emita un sonido o palabra incompleta, repetirlo y expandirlo a la palabra o frase completa, al menos 8 veces durante el día.",
    faseConexion: {
      nombre: "Escucho y amplío",
      duracionMin: 5,
      descripcion:
        "Comienza siendo consciente de que hoy cada sonido que haga es una oportunidad de expansión.",
      pasos: [
        "Prepárate con esta idea: 'Todo lo que él diga hoy, yo lo recibo y lo hago un poquito más grande.'",
        "Si dice 'ba': '¡Pelota! Sí, pelota.'",
        "Si señala y dice 'eeeh': '¿El carro? ¡El carro rojo!'",
        "Practica el patrón antes con ejemplos mentales para que fluya naturalmente.",
      ],
      recordatorio:
        "La expansión no es corrección. Es celebración más información. El tono siempre es de '¡Exacto, eso es!'",
    },
    faseJuego: {
      nombre: "Iniciativas y Expansiones",
      duracionMin: 7,
      descripcion:
        "Juega de forma que él inicie comunicación y tú respondas con expansión.",
      pasos: [
        "Dispón varios juguetes frente a él y espera que tome uno o señale.",
        "Cuando tome el carro: si dice algo, expande. Si no dice nada, di el nombre y espera.",
        "Cuando señale algo fuera de alcance: '¿Quieres el _____? ¡El _____! Vamos a buscarlo.'",
        "Después de tu expansión, espera 3 segundos a ver si él repite la versión expandida.",
        "Si repite aunque sea parcialmente, celebra con toda tu alegría.",
      ],
      recordatorio:
        "No pidas que repita. Espera que lo haga voluntariamente. La repetición forzada bloquea; la voluntaria fluye.",
    },
    faseCierre: {
      nombre: "Las palabras que crecieron hoy",
      duracionMin: 3,
      descripcion: "Revisa mentalmente las expansiones del día.",
      pasos: [
        "Anota en la Bitácora: ¿Qué sonidos o palabras incompletas dijo hoy? ¿Cómo las expandiste?",
        "Haz una lista de 3-5 palabras completas que 'nacieron' de sus intentos.",
        "Comparte una con alguien: 'Hoy dijo algo que sonó a [palabra].'",
      ],
    },
    microjuegos: [
      {
        id: "d16-m1",
        nombre: "Juego del Expansor",
        objetivo: "Practicar el patrón eco + expansión de forma consciente",
        duracionMin: 5,
        materiales: ["5-6 objetos cotidianos en una cesta"],
        pasos: [
          "Saca los objetos uno a uno y ponlos frente a él.",
          "Espera que tome uno y haga cualquier vocalización.",
          "Repite su sonido + di la palabra completa: 'Ba… ¡Botella! Botella azul.'",
          "Devuelve el objeto y espera el siguiente.",
        ],
        trucoPro:
          "Cuanto más entusiasmo pongas en la expansión, más ganas tendrá de 'intentar' de nuevo. El entusiasmo de mamá es el combustible del lenguaje.",
        variante:
          "Usa fotos de objetos familiares en lugar de los objetos mismos. Las fotos requieren más representación mental y son un paso más avanzado.",
      },
    ],
    checklist: [
      {
        id: "d16-c1",
        label: "Expandí al menos 8 sonidos o palabras incompletas",
        descripcion: "Repetí su intento y añadí la versión completa con entusiasmo",
      },
      {
        id: "d16-c2",
        label: "Nunca corregí — solo expandí",
        descripcion: "Recibí lo que dijo como correcto y lo amplié, sin decir 'no, se dice así'",
      },
      {
        id: "d16-c3",
        label: "Esperé después de expandir",
        descripcion: "Di 3 segundos después de mi expansión para ver si él repetía",
      },
      {
        id: "d16-c4",
        label: "Anoté las palabras que expandí",
        descripcion: "Llevo registro de qué palabras están emergiendo en sus intentos",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo repite o aproxima la versión expandida de su propio sonido",
      "Aumenta la frecuencia de sus vocalizaciones durante el juego",
      "Inicia comunicación sobre objetos para que tú los nombres (señala y te mira)",
    ],
    fraseMotivacional:
      "Cada 'ta' que dice es una semilla. Cada '¡Taza!' que tú devuelves es el riego. No sabes exactamente cuándo florecerá, pero sabes que estás haciendo exactamente lo correcto. El jardín de su lenguaje está en las mejores manos.",
    erroresComunes: [
      {
        error: "Corregir diciendo 'no es ta, es taza, di taza'",
        reencuadre:
          "La corrección directa le dice que lo hizo mal. La expansión le dice que lo hizo bien y hay más. El primero cierra la puerta; el segundo la abre de par en par.",
      },
      {
        error: "Pedir que repita después de expandir: 'Ahora di tú taza'",
        reencuadre:
          "La demanda de repetición convierte el juego en examen. Si quiere repetir, lo hará. Tu trabajo es crear el contexto; el suyo es decidir cuándo participar.",
      },
    ],
    imagePromptHint:
      "LATAM mother at eye level with toddler, child holding a cup and making a sound, mother's face lit up with delight pointing at the cup and saying something enthusiastically, kitchen setting, morning light, intimate face-to-face moment.",
  },

  {
    day: 17,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Más + Gesto",
    subtitulo: "Petición intencional: enseñar a pedir con señal clara",
    capitulo: 5,
    loEsencial:
      "Hoy profundizamos en la habilidad de pedir de forma intencional. Mientras que el día 11 introdujo el gesto de 'más', hoy el objetivo es consolidarlo como una herramienta real de comunicación que el niño usa espontáneamente — sin que se lo pidas, sin que lo modeles en ese momento. Cuando un niño pide de forma intencional, deja de ser receptivo y se vuelve activo en la comunicación. Ese cambio es uno de los más importantes en todo el desarrollo del lenguaje.",
    objetivoDia:
      "Crear al menos 3 situaciones donde tu hijo necesite pedir 'más' de forma intencional, respondiendo inmediatamente a cada señal.",
    faseConexion: {
      nombre: "Preparamos la necesidad",
      duracionMin: 5,
      descripcion:
        "Diseña el día para que haya momentos naturales donde necesite pedir más.",
      pasos: [
        "Identifica 3 cosas que le encantan y que puedes dar en porciones pequeñas: snack, burbujas, giros.",
        "A la hora del desayuno, dale una cantidad pequeña del snack favorito. Espera.",
        "Cuando mire hacia el snack o extienda la mano, modela el gesto de más: '¿Más? ¡Más!'",
        "Da inmediatamente. Celebra la petición, no la palabra perfecta.",
      ],
      recordatorio:
        "El diseño de la necesidad es estrategia de lenguaje. No es crear frustración — es crear motivación.",
    },
    faseJuego: {
      nombre: "Tres Contextos de Más",
      duracionMin: 7,
      descripcion:
        "Usa tres actividades distintas donde el pedir 'más' sea la llave para continuar.",
      pasos: [
        "Contexto 1 — Burbujas: haz burbujas, para, espera gesto o sonido, luego más burbujas.",
        "Contexto 2 — Girar: gira al niño en tus brazos, para, espera, continúa.",
        "Contexto 3 — Cosquillas: cosquillas, para, espera gesto, más cosquillas.",
        "En cada contexto: primero acepta cualquier señal (mirada, movimiento), luego modela el gesto de más con las manos, luego da lo que pide.",
        "Con el tiempo, espera el gesto antes de continuar.",
      ],
      recordatorio:
        "El orden de enseñanza es: señal del niño → tu modelo → das lo que pide. Nunca: tu modelo → exiges que lo haga → das lo que pide.",
    },
    faseCierre: {
      nombre: "¿Qué pediste hoy?",
      duracionMin: 3,
      descripcion: "Cierra nombrando cada cosa que pidió durante el día.",
      pasos: [
        "Di: 'Hoy pediste las burbujas. Pediste las cosquillas. Pediste el snack.'",
        "Haz el gesto de más mientras dices cada cosa.",
        "Anota en la Bitácora: ¿En qué contexto usó el gesto de forma más espontánea?",
      ],
    },
    microjuegos: [
      {
        id: "d17-m1",
        nombre: "El Juego del Pause",
        objetivo: "Crear la pausa que motiva la petición",
        duracionMin: 5,
        materiales: ["Cualquier actividad favorita"],
        pasos: [
          "Durante cualquier actividad que él disfrute, para en el momento de mayor diversión.",
          "Míralo con cara expectante. Espera.",
          "Si hace cualquier gesto comunicativo, continúa inmediatamente.",
          "Si no hace nada después de 5 segundos, modela el gesto de más y luego continúa.",
        ],
        trucoPro:
          "El 'pause' es una de las estrategias más poderosas de toda la terapia de lenguaje. Practicarlo conscientemente 5 veces al día acelera el desarrollo de la comunicación intencional.",
        variante:
          "También funciona con música: pon su canción favorita, para, espera, continúa cuando pide.",
      },
    ],
    checklist: [
      {
        id: "d17-c1",
        label: "Diseñé al menos 3 contextos de petición",
        descripcion: "Creé situaciones donde necesitara pedir para continuar",
      },
      {
        id: "d17-c2",
        label: "Respondí inmediatamente a cada señal de petición",
        descripcion: "Cualquier gesto o sonido fue suficiente para recibir lo que pedía",
      },
      {
        id: "d17-c3",
        label: "Modelé el gesto después de responder, no antes de dar",
        descripcion: "No exigí el gesto como condición — lo mostré como modelo",
      },
      {
        id: "d17-c4",
        label: "Usé el 'pause' conscientemente",
        descripcion: "Pausé actividades placenteras para crear el espacio de petición",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo usa el gesto de más o señala sin que lo hayas modelado en ese momento",
      "Mira al adulto mientras hace el gesto (comunicación intencional clara)",
      "Usa el gesto en 2 o más contextos distintos de forma espontánea",
    ],
    fraseMotivacional:
      "Cuando tu hijo junta esas manos para pedir, está ejerciendo su poder de comunicarse con el mundo. Tú le diste ese poder. Cada vez que respondes, se lo confirmas. Eso es un regalo que cambia vidas.",
    erroresComunes: [
      {
        error: "Dar lo que pide antes de que haga ninguna señal",
        reencuadre:
          "Si anticipas siempre sus necesidades, no hay necesidad de comunicar. Deja que la espera pequeña y segura cree la motivación de pedir. No es crueldad — es oportunidad.",
      },
      {
        error: "Frustración cuando no hace el gesto perfecto",
        reencuadre:
          "Un niño que extiende la mano, te mira, o hace cualquier gesto dirigido está comunicando intención. Eso es exactamente lo que buscamos. Celebra la intención, no la forma.",
      },
    ],
    imagePromptHint:
      "LATAM toddler in high chair with both hands reaching out toward mother who is holding a small bowl of fruit just out of reach, mother making the 'more' hand gesture and smiling, eye contact between both, bright kitchen light.",
  },

  {
    day: 18,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Comida con Palabras",
    subtitulo: "Pan, agua, rico: el vocabulario que vive en cada comida",
    capitulo: 7,
    loEsencial:
      "La mesa es uno de los mejores aulas de lenguaje que existen. Cada comida tiene sus palabras: el nombre del alimento, su temperatura, su sabor, la acción de comer, la petición de más. Cuando narras las comidas en voz alta, tu hijo escucha las mismas palabras en el mismo contexto, varias veces al día, todos los días. Esa repetición contextual es exactamente cómo se construye el vocabulario funcional — el que el niño usará para comunicar necesidades reales.",
    objetivoDia:
      "Narrar en voz alta cada comida del día usando al menos 5 palabras clave: el nombre del alimento, 'rico/caliente/frío', y palabras de acción.",
    faseConexion: {
      nombre: "Preparamos juntos",
      duracionMin: 5,
      descripcion: "Incluye a tu hijo en la preparación de la comida. El proceso también tiene lenguaje.",
      pasos: [
        "Llévalo a la cocina mientras preparas la comida. Di qué estás haciendo: 'Abro la nevera. Saco el pan.'",
        "Deja que toque los ingredientes seguros: 'Pan. Toca el pan. Suave.'",
        "Al calentarlo: 'Caliente. Cuidado, caliente.' Acerca su mano sin quemarlo.",
        "Al servir: 'Listo. La comida está lista. Vamos a comer.'",
      ],
      recordatorio:
        "No necesitas cocinar algo especial. El cereal de la mañana tiene tanto vocabulario como el almuerzo más elaborado.",
    },
    faseJuego: {
      nombre: "La Mesa Hablada",
      duracionMin: 7,
      descripcion:
        "Durante la comida, nombra cada elemento y espera participación antes de continuar.",
      pasos: [
        "Al poner el plato: '¿Qué es esto? ¡Arroz! Arroz con pollo. Mmmm.'",
        "Antes de cada cucharada: 'Abre la boca. ¡Aquí viene!' Pausa. '¡Qué rico!'",
        "Al ofrecer agua: '¿Agua? Toma agua. ¡Rica el agua fría!'",
        "Si hace el gesto de más: '¿Más arroz? ¡Más arroz! Que le gusta el arroz a [nombre]!'",
        "Al terminar: 'Todo. No hay más. ¡Se acabó! ¿Qué rico, verdad?'",
      ],
      recordatorio:
        "No conviertas la comida en una sesión de terapia. Habla de forma natural, con flujo, como si contaras un cuento.",
    },
    faseCierre: {
      nombre: "Qué comimos hoy",
      duracionMin: 3,
      descripcion: "Al terminar, haz un breve recuento de la comida.",
      pasos: [
        "Di: '[Nombre] comió arroz. Y pollo. Y tomó agua. ¡Qué buena comida!'",
        "Si tiene un plato o vaso favorito, nómbralo: 'Tu plato azul. Tu vaso con el oso.'",
        "Anota: ¿Intentó decir el nombre de algún alimento o pidió más con gesto o palabra?",
      ],
    },
    microjuegos: [
      {
        id: "d18-m1",
        nombre: "Cocinita de Juguete",
        objetivo: "Practicar vocabulario de comida en contexto lúdico",
        duracionMin: 5,
        materiales: ["Cocinita de juguete o recipientes vacíos y cucharas"],
        pasos: [
          "Juega a 'cocinar' con él usando juguetes o recipientes vacíos.",
          "Simula preparar: 'Echamos el agua. Revolvemos. ¡Listo!'",
          "Sirve la 'comida' imaginaria y di: 'Pan. Pan caliente. Mmmm, rico.'",
          "Haz que él te 'sirva' a ti también.",
        ],
        trucoPro:
          "El juego simbólico de cocinar es un indicador de desarrollo cognitivo y de lenguaje. Si todavía no 'juega a cocinar', este juego también estimula esa habilidad.",
        variante:
          "Usa frutas reales cortadas en trozos para 'servir'. La experiencia táctil y gustativa refuerza el vocabulario.",
      },
    ],
    checklist: [
      {
        id: "d18-c1",
        label: "Narré la preparación de la comida",
        descripcion: "Incluí a mi hijo en la cocina y nombré lo que hacía",
      },
      {
        id: "d18-c2",
        label: "Usé al menos 5 palabras clave durante la comida",
        descripcion: "Nombre del alimento, rico/caliente/frío, más, listo, se acabó",
      },
      {
        id: "d18-c3",
        label: "Esperé su participación antes de continuar",
        descripcion: "Pausé para que pudiera señalar, pedir o vocalizar",
      },
      {
        id: "d18-c4",
        label: "Hice el recuento final de la comida",
        descripcion: "Al terminar, nombré lo que comimos en orden",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo señala o vocaliza para pedir un alimento específico",
      "Dice o aproxima el nombre de algún alimento familiar (pan, agua, leche)",
      "Hace el gesto de 'más' durante la comida de forma espontánea",
    ],
    fraseMotivacional:
      "Cada comida que compartes con tu hijo, hablándole, nombrándole el mundo, es un acto de amor que también es ciencia. La calidez de la mesa y las palabras que flotan en el aire se quedan en su cerebro para siempre. Qué hermoso lo que haces.",
    erroresComunes: [
      {
        error: "Poner el teléfono o la televisión durante la comida",
        reencuadre:
          "Las pantallas compiten por la atención y ganan casi siempre. La comida sin pantallas es 20 minutos de contexto de lenguaje natural que no puedes recuperar. Vale la pena el cambio.",
      },
      {
        error: "Insistir en que diga el nombre del alimento antes de dárselo",
        reencuadre:
          "La comida no debe ser condicional al lenguaje. Dar el alimento y luego nombrar el flujo es siempre la secuencia correcta. La presión a la hora de comer crea asociaciones negativas con la comunicación.",
      },
    ],
    imagePromptHint:
      "LATAM mother feeding her toddler in a high chair, holding up a small piece of banana and pointing at it with a big smile, child reaching for it with both hands, colorful kitchen setting, natural light, warmth and joy in the scene.",
  },

  {
    day: 19,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Baño Hablado",
    subtitulo: "Cuerpo, agua y palabras: el baño como ritual de lenguaje",
    capitulo: 7,
    loEsencial:
      "El baño tiene todo lo que necesita una sesión de lenguaje perfecta: partes del cuerpo, el agua como protagonista, rutina predecible, contacto físico y emocional, y las mismas palabras cada noche. Cuando el baño se convierte en un ritual hablado, esas palabras — mano, cabeza, agua, jabón, seca — se aprenden de forma completamente natural. No necesitas nada especial. Solo tu voz, presente y cariñosa, nombrando el mundo de tu hijo mientras lo cuidas.",
    objetivoDia:
      "Nombrar 5 partes del cuerpo y 3 palabras de acción durante el baño de hoy, usando el tacto como ancla.",
    faseConexion: {
      nombre: "Preparamos el baño con palabras",
      duracionMin: 5,
      descripcion:
        "Anuncia el baño con anticipación y empieza el vocabulario desde antes de entrar al agua.",
      pasos: [
        "Di: 'Vamos al baño. A bañarse.' Con un tono alegre, no neutro.",
        "Mientras llenan la bañera: '¡Agua! El agua está llenando. ¿Caliente o fría?'",
        "Deja que ponga la mano: 'Agua tibia. Aaah, qué rica.'",
        "Al desvestirlo antes del baño, nombra cada prenda que quitas (refuerzo del día 13).",
      ],
      recordatorio:
        "El baño ya es una rutina. Solo necesitas añadirle palabras. No es trabajo extra — es la misma cosa con un ingrediente más.",
    },
    faseJuego: {
      nombre: "El Mapa del Cuerpo Mojado",
      duracionMin: 7,
      descripcion:
        "Nombra cada parte del cuerpo mientras la lavas, tocándola suavemente.",
      pasos: [
        "Lava la mano: 'Mano. Lavamos la mano.' Guía su mano para que se frote.",
        "Lava el pie: 'Pie. El pie. ¡Cosquillas en el pie!'",
        "Lava la cabeza: 'Cabeza. Arriba, la cabeza. Champú en la cabeza.'",
        "Lava la barriga: 'Barriga. La barriga. Burbujitas en la barriga.'",
        "Añade palabras de acción: 'Frota', 'Enjuaga', 'Seca'. Muéstrale el movimiento mientras dices la palabra.",
      ],
      recordatorio:
        "El tacto mientras nombras crea una memoria corporal muy profunda. 'Mano' + lavar la mano = la asociación más fuerte posible.",
    },
    faseCierre: {
      nombre: "Secamos y nombramos",
      duracionMin: 3,
      descripcion: "El momento de secado es otra oportunidad para vocabulario.",
      pasos: [
        "Con la toalla, seca cada parte nombrándola: 'Secamos los pies. Secamos la barriga. Secamos la cabeza.'",
        "Al terminar: 'Limpio. [Nombre] limpio y rico. ¡Qué rico hueles!'",
        "Anota en la Bitácora: ¿Señaló alguna parte del cuerpo cuando la nombraste?",
      ],
    },
    microjuegos: [
      {
        id: "d19-m1",
        nombre: "Barquitos en el Baño",
        objetivo: "Vocabulario de posición y acción con agua",
        duracionMin: 4,
        materiales: ["Objetos que floten: tapa de botella, esponja pequeña, vaso"],
        pasos: [
          "Pon los objetos flotantes en la bañera.",
          "Di: 'Flota. El barquito flota.' Haz que naveguen.",
          "Hunde uno: 'Se fue abajo. Se hundió.' Hazlo salir: '¡Apareció! Salió.'",
          "Espera que él lo hunda o lo saque. Nombra su acción.",
        ],
        trucoPro:
          "El contraste 'flota/se hunde' es un par de conceptos opuestos que se aprenden juntos perfectamente en el contexto del baño.",
        variante:
          "Usa un vaso para llenar y vaciar: '¡Lleno! ¡Vacío!' — vocabulario de cantidad en acción.",
      },
    ],
    checklist: [
      {
        id: "d19-c1",
        label: "Anuncié el baño con palabras de anticipación",
        descripcion: "Dije 'vamos al baño' y comenté el agua antes de entrar",
      },
      {
        id: "d19-c2",
        label: "Nombré al menos 5 partes del cuerpo con tacto",
        descripcion: "Mano, pie, cabeza, barriga, y al menos una más",
      },
      {
        id: "d19-c3",
        label: "Usé palabras de acción durante el baño",
        descripcion: "Frota, enjuaga, seca — con el movimiento como ancla",
      },
      {
        id: "d19-c4",
        label: "Cerré nombrando las partes durante el secado",
        descripcion: "Reforcé el vocabulario corporal al secar",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo señala correctamente una parte del cuerpo cuando la nombras",
      "Anticipa el siguiente paso del baño (levanta el pie cuando dices pie)",
      "Intenta vocalizar el nombre de una parte del cuerpo durante el baño",
    ],
    fraseMotivacional:
      "El baño de cada noche que conviertes en palabras es tiempo que no se recupera pero sí se multiplica. Cada 'mano' dicho con cariño es una palabra que su cerebro guarda. Y las palabras guardadas, un día salen. Solo espera y sigue.",
    erroresComunes: [
      {
        error: "Bañarlo en silencio porque está cansada al final del día",
        reencuadre:
          "Entendemos que la noche es difícil. Incluso nombrar solo 2 partes del cuerpo durante el secado ya es un gran aporte. No tienes que hacer todo perfectamente — solo hacer algo.",
      },
      {
        error: "Señalar partes del cuerpo sin tocarlo",
        reencuadre:
          "El tacto es el ancla sensorial más poderosa para el vocabulario corporal. Decir 'mano' mientras tocas su mano es cinco veces más efectivo que señalarla desde lejos.",
      },
    ],
    imagePromptHint:
      "LATAM mother kneeling beside a small colorful bathtub, gently washing toddler's hand with a sponge, child looking at their own hand with curiosity, mother pointing at the hand and smiling, soft bathroom light, warm and tender moment.",
  },

  {
    day: 20,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Refuerzo de Palabras Clave",
    subtitulo: "Las 5 palabras más importantes de estas semanas, una vez más con amor",
    capitulo: 3,
    loEsencial:
      "El aprendizaje de vocabulario no es lineal. Las palabras necesitan ser escuchadas, usadas y recordadas en múltiples contextos y momentos para quedar grabadas permanentemente. Hoy es un día de refuerzo: volvemos a las 5 palabras más relevantes de las últimas semanas y las usamos de forma intencional en diferentes situaciones a lo largo del día. No es repetición aburrida — es siembra en tierra fértil.",
    objetivoDia:
      "Identificar 5 palabras clave aprendidas en los últimos días y crear 3 contextos naturales para cada una durante el día.",
    faseConexion: {
      nombre: "Las palabras de mi hijo",
      duracionMin: 5,
      descripcion:
        "Revisa la Bitácora para identificar las 5 palabras que más están emergiendo en tu hijo.",
      pasos: [
        "Abre la Bitácora de las semanas 2 y 3. Busca: ¿Qué palabras intentó más? ¿Cuáles reconoce mejor?",
        "Escribe una lista de 5 en un papel y ponla en un lugar visible de la casa.",
        "Di en voz alta las 5 palabras mientras señalas los objetos correspondientes.",
        "Estas 5 son tus palabras del día. Todo lo que hagas, pasa por ellas.",
      ],
      recordatorio:
        "Si no tienes Bitácora de esas semanas, elige estas 5: agua, más, mamá, no, y el nombre de su juguete favorito.",
    },
    faseJuego: {
      nombre: "Las Palabras en su Contexto",
      duracionMin: 7,
      descripcion:
        "Juega a encontrar los 5 objetos o situaciones correspondientes a las palabras clave.",
      pasos: [
        "Para cada palabra, crea una situación natural: 'agua' → ir al grifo juntos.",
        "'más' → snack favorito con el gesto.",
        "El nombre del juguete → buscar ese juguete en el cuarto.",
        "Una acción favorita (p.ej. 'rueda') → hacer rodar algo juntos.",
        "Repite cada situación 2-3 veces a lo largo del día, no todas juntas.",
      ],
      recordatorio:
        "La clave es la variedad de contextos. La misma palabra en tres situaciones diferentes el mismo día se ancla mucho más profundo.",
    },
    faseCierre: {
      nombre: "El repaso del tesoro",
      duracionMin: 3,
      descripcion: "Al final del día, repasa las 5 palabras de una forma lúdica.",
      pasos: [
        "Di: 'Hoy jugamos con palabras. ¿Cuáles fueron nuestras palabras hoy?'",
        "Di cada una y señala o haz el gesto correspondiente.",
        "Celebra: '¡Esas son las palabras de [nombre]!'",
        "Anota: ¿Cuál usó o intentó usar hoy por primera vez o de forma más clara?",
      ],
    },
    microjuegos: [
      {
        id: "d20-m1",
        nombre: "Cacería de Palabras",
        objetivo: "Reforzar vocabulario en contexto de movimiento",
        duracionMin: 5,
        pasos: [
          "Di: 'Vamos a buscar el agua.' Ve con él al grifo, ábrelo y di: '¡Agua!'",
          "Vuelve al cuarto: 'Ahora buscamos [juguete].' Búsquenlo.",
          "Cada vez que encuentran el objeto, celebra la palabra.",
          "Repite con 3-4 palabras de la lista.",
        ],
        trucoPro:
          "El movimiento + la búsqueda + el encuentro crea una memoria de múltiples capas. El niño no solo escucha la palabra — la vive.",
        variante:
          "Hazlo al revés: él elige a dónde ir y tú nombras lo que encuentra.",
      },
    ],
    checklist: [
      {
        id: "d20-c1",
        label: "Identifiqué y escribí mis 5 palabras clave del día",
        descripcion: "Basadas en la Bitácora de semanas anteriores",
      },
      {
        id: "d20-c2",
        label: "Creé al menos 3 contextos naturales para cada palabra",
        descripcion: "No agrupados en la sesión sino distribuidos durante el día",
      },
      {
        id: "d20-c3",
        label: "Usé gestos o acciones junto con cada palabra",
        descripcion: "La palabra nunca fue solo auditiva — siempre tuvo ancla sensorial",
      },
      {
        id: "d20-c4",
        label: "Anoté cambios o avances en el reconocimiento o producción",
        descripcion: "Registré si alguna palabra dio un salto de comprensión o producción hoy",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo reconoce las 5 palabras clave cuando las escucha (mira, señala, actúa)",
      "Intenta producir 1-2 de las palabras de forma aproximada",
      "Usa alguna de las palabras en un contexto nuevo o inesperado",
    ],
    fraseMotivacional:
      "La repetición con amor no es aburrida — es el ritmo del cerebro aprendiendo. Cada vez que dices esas palabras con calor y en contexto real, estás tejiendo redes neuronales que son literalmente para siempre. Estás construyendo el cerebro de tu hijo con tus manos.",
    erroresComunes: [
      {
        error: "Hacer el repaso de palabras sentados en una silla como clase",
        reencuadre:
          "El vocabulario de los niños pequeños se aprende en movimiento, en contexto, con emoción. Busca las palabras, ve a ellas, vívelas. La silla y las tarjetas vendrán mucho después.",
      },
      {
        error: "Añadir más de 5 palabras nuevas en el mismo día",
        reencuadre:
          "El cerebro del niño pequeño consolida mejor pocas palabras bien trabajadas que muchas superficialmente. La profundidad siempre gana a la amplitud en estas edades.",
      },
    ],
    imagePromptHint:
      "LATAM mother and toddler on a treasure hunt indoors, child pointing at a glass of water on a low table, mother with arms raised in celebration, bright living room, afternoon light, sense of discovery and joy.",
  },


  {
    day: 21,
    week: 3,
    weekTheme: "Las palabras despiertan",
    weekColor: "var(--color-accent-sky)",
    titulo: "Revisión Semana 3",
    subtitulo: "Identifica la palabra más cercana y celebra tres semanas de constancia",
    capitulo: 8,
    loEsencial:
      "Tres semanas. Veintiún días de conexión, de gestos, de canciones y rutinas habladas. Hoy no hay juego nuevo. Hoy es el día de mirar atrás con ojos sabios y ver lo que creció. Hay una palabra, un gesto, o una conducta comunicativa que está más cerca que hace tres semanas. Encuéntrala. Nómbrala. Celébrala. Ese progreso es real aunque sea pequeño, y es tuyo — tuyo y de tu hijo.",
    objetivoDia:
      "Revisar la Bitácora de las 3 semanas, identificar la 'palabra más cercana' del niño, y celebrar con un ritual especial.",
    faseConexion: {
      nombre: "El detective del progreso",
      duracionMin: 5,
      descripcion:
        "Revisa todo lo que has anotado y busca el hilo de progreso que conecta el día 1 con el día 21.",
      pasos: [
        "Abre la Bitácora desde el principio. Lee cada semana como si fuera la historia de un viaje.",
        "Busca: ¿Qué hacía él en la semana 1 que ahora hace diferente? ¿Qué no hacía y ahora intenta?",
        "Identifica la comunicación que más creció: ¿señalar? ¿gesticular? ¿una sílaba?",
        "Escribe: 'La palabra (o gesto) más cercana de [nombre] hoy es [____].'",
      ],
      recordatorio:
        "La 'palabra más cercana' no tiene que ser una palabra real. Puede ser una sílaba consistente, un sonido intencional, un gesto nuevo.",
    },
    faseJuego: {
      nombre: "Juego de los Favoritos",
      duracionMin: 7,
      descripcion: "Juega el juego favorito de cada semana, uno tras otro, brevemente.",
      pasos: [
        "Semana 1 — El escondite o juego de mirada: 2 minutos.",
        "Semana 2 — El gesto de más o los animales: 2 minutos.",
        "Semana 3 — La canción del hola o el eco avanzado: 2 minutos.",
        "Observa cuál disfruta más ahora. ¿Ha cambiado su preferencia?",
      ],
      recordatorio:
        "Este 'tour' de las semanas también es para ti: para que veas cuánto has aprendido como mamá de lenguaje.",
    },
    faseCierre: {
      nombre: "Ritual de los 21 días",
      duracionMin: 3,
      descripcion: "Crea un momento especial de celebración para los dos.",
      pasos: [
        "Dale un abrazo largo mientras dices: 'Tres semanas juntos. Qué bien lo hiciste.'",
        "Saca el Mapa de Comunicación del día 7 y hazle uno nuevo. Compáralos.",
        "Escribe en la Bitácora: 'La semana que viene haremos [una cosa que quiero mejorar].'",
      ],
    },
    microjuegos: [
      {
        id: "d21-m1",
        nombre: "Mapa de Comunicación Semana 3",
        objetivo: "Comparar el progreso comunicativo desde el inicio",
        duracionMin: 5,
        materiales: ["Papel", "Lápices de colores", "Mapa del Día 7"],
        pasos: [
          "Dibuja el mismo círculo con el nombre de tu hijo en el centro.",
          "Añade alrededor todas las formas de comunicación que tiene hoy.",
          "Pon los dos mapas uno al lado del otro.",
          "Circula con otro color todo lo que es nuevo desde el día 7.",
        ],
        trucoPro:
          "Toma una foto de los dos mapas juntos. Esta foto será una de las más valiosas del programa.",
      },
    ],
    checklist: [
      {
        id: "d21-c1",
        label: "Revisé la Bitácora de las 3 semanas completas",
        descripcion: "Leí desde el día 1 hasta el día 20",
      },
      {
        id: "d21-c2",
        label: "Identifiqué y escribí la palabra o gesto más cercano",
        descripcion: "La comunicación que más ha crecido en estas semanas",
      },
      {
        id: "d21-c3",
        label: "Hice el Mapa de Comunicación nuevo",
        descripcion: "Dibujé el inventario de sus formas de comunicación actuales",
      },
      {
        id: "d21-c4",
        label: "Comparé los dos mapas (día 7 y día 21)",
        descripcion: "Vi visualmente el progreso de dos semanas",
      },
    ],
    indicadoresProgreso: [
      "El Mapa de Comunicación del día 21 tiene más elementos que el del día 7",
      "Puedes nombrar al menos 1 conducta comunicativa nueva desde el inicio",
      "Los momentos de juego conjunto duran más o son más fluidos que en la semana 1",
    ],
    consejoDia:
      "Si sientes que el progreso es insuficiente, habla con tu pediatra o logopeda de confianza. Pero primero mira bien el mapa. El progreso pequeño sigue siendo progreso.",
    fraseMotivacional:
      "Tres semanas. Veintiún días. Tú elegiste estar presente cuando era más fácil no estarlo, jugar cuando estabas cansada, cantar cuando tenías mil cosas pendientes. Eso es amor en forma de acción. Y tu hijo lo está guardando todo.",
    erroresComunes: [
      {
        error: "Desanimarse si el mapa no muestra suficiente progreso",
        reencuadre:
          "El progreso del lenguaje no es lineal. Hay semanas lentas y luego un salto grande. Si estás haciendo el trabajo, el salto llegará. Confía en el proceso y en ti misma.",
      },
      {
        error: "Saltarse la revisión y pasar directamente a la semana 4",
        reencuadre:
          "La revisión te dice cómo personalizar la semana 4. Sin revisar, la siguiente semana es genérica. Con revisión, es exactamente lo que tu hijo necesita.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting cross-legged on a rug with two sheets of paper side by side, both have circles drawn on them with words around the edges, she is comparing them with a thoughtful smile, toddler asleep in the background, evening light.",
  },

  // ─────────────────────────────────────────────
  // SEMANA 4 — El lenguaje vive en todo
  // ─────────────────────────────────────────────
  {
    day: 22,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Desayuno Narrado",
    subtitulo: "Abrir, verter, caliente, listo: el lenguaje del desayuno completo",
    capitulo: 7,
    loEsencial:
      "El desayuno es el primer momento del día y también el primer aula de lenguaje. Esta semana llevamos la narración de rutinas al nivel más completo: no solo nombramos lo que vemos, sino que describimos acciones, estados, secuencias y resultados. 'Abre la nevera. Sale el jugo. Frío, fríoooo. Vierte en el vaso. Listo. ¡A desayunar!' Una narración de desayuno de 5 minutos puede contener veinte palabras funcionales en contexto completamente auténtico.",
    objetivoDia:
      "Narrar en voz alta el proceso completo del desayuno, desde la preparación hasta el último sorbo, usando vocabulario de acción, estado y resultado.",
    faseConexion: {
      nombre: "El desayuno empieza con palabras",
      duracionMin: 5,
      descripcion:
        "Comienza la narración desde que entran a la cocina, antes de poner cualquier cosa en la mesa.",
      pasos: [
        "Al entrar a la cocina: '¡Buenos días, cocina! Vamos a preparar el desayuno.'",
        "Abre la nevera con énfasis: '¡Abro la nevera! Hay leche, hay jugo, hay yogur.'",
        "Señala cada opción y espera que él indique cuál quiere.",
        "Di su elección en voz alta: '¡Leche! Hoy quieres leche. Vamos a calentar la leche.'",
      ],
      recordatorio:
        "La narración no es un monólogo rápido. Es lento, con pausas, con expresión. Como el mejor narrador de cuentos que conoces.",
    },
    faseJuego: {
      nombre: "Paso a Paso en la Cocina",
      duracionMin: 7,
      descripcion:
        "Narra cada paso de la preparación con una palabra clave por acción.",
      pasos: [
        "Calentar: 'Calentamos la leche. Caliente, caliente. Cuidado, caliente.'",
        "Verter: 'Vierto en el vaso. Cae la leche. ¡Lleno!'",
        "El cereal o el pan: 'Pan. Ponemos el pan. El pan en el plato.'",
        "Mientras come: '¡Mmm, rico! ¿Rico el desayuno? Come, come.'",
        "Al terminar: 'Listo. Se acabó. Vacío el vaso. Vacío el plato. ¡Qué buen desayuno!'",
      ],
      recordatorio:
        "Las palabras de estado son especialmente valiosas: caliente, frío, rico, listo, vacío, lleno. Son las más funcionales en la vida diaria.",
    },
    faseCierre: {
      nombre: "La secuencia del desayuno",
      duracionMin: 3,
      descripcion: "Repasa la secuencia en orden, como si fuera un cuento.",
      pasos: [
        "Di: 'Primero abrimos la nevera. Después calentamos. Después vertimos. Después comemos. ¡Listo!'",
        "Haz los gestos de cada acción.",
        "Anota: ¿Qué palabra del desayuno intentó hoy? ¿Señaló algún alimento por nombre?",
      ],
    },
    microjuegos: [
      {
        id: "d22-m1",
        nombre: "Chef de Juguete",
        objetivo: "Practicar secuencias de acción con lenguaje",
        duracionMin: 4,
        materiales: ["Recipientes vacíos, cuchara, agua"],
        pasos: [
          "Juega a preparar el desayuno con agua y recipientes vacíos.",
          "Narra cada paso exageradamente: '¡Vierto! ¡Revuelvo! ¡Listo!'",
          "Deja que él vierta, mezcle, sirva.",
          "Cada acción que haga, nómbrala tú.",
        ],
        trucoPro:
          "El juego simbólico de cocinar antes del desayuno real crea un 'ensayo' mental del vocabulario que luego se activa con la experiencia real.",
      },
    ],
    checklist: [
      {
        id: "d22-c1",
        label: "Narré desde la entrada a la cocina",
        descripcion: "Empecé las palabras antes de que comenzara la preparación",
      },
      {
        id: "d22-c2",
        label: "Usé palabras de estado: caliente, listo, vacío, lleno",
        descripcion: "No solo nombré objetos sino sus estados y cambios",
      },
      {
        id: "d22-c3",
        label: "Esperé su participación en cada elección",
        descripcion: "Le di opciones y respeté su indicación",
      },
      {
        id: "d22-c4",
        label: "Hice el repaso de secuencia al final",
        descripcion: "Revisé en orden los pasos del desayuno con gestos",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo señala o vocaliza para elegir un alimento entre dos opciones",
      "Anticipa el siguiente paso de la rutina antes de que lo nombres",
      "Intenta decir o imitar alguna palabra de acción o estado",
    ],
    fraseMotivacional:
      "Cada mañana que te levantas y le hablas mientras desayunan juntos, estás eligiendo a tu hijo sobre el cansancio. Eso es heroísmo cotidiano. Eso es la mejor maternidad del mundo.",
    erroresComunes: [
      {
        error: "Narrar demasiado rápido sin pausas",
        reencuadre:
          "La narración a alta velocidad no da tiempo para procesar. Una sola acción bien narrada con pausa vale más que diez en cadena. Lento y con expresión es siempre la fórmula correcta.",
      },
      {
        error: "Narrar solo para él y nunca esperar respuesta",
        reencuadre:
          "La narración debe tener huecos: '¿Qué tenemos aquí? ¡La leche!' El hueco + la respuesta + la celebración es el ciclo completo del aprendizaje de vocabulario.",
      },
    ],
    imagePromptHint:
      "LATAM mother in a kitchen pouring milk into a small cup while toddler watches from a high chair, mother pointing at the cup with an expressive face, morning sunlight through window, colorful kitchen decor, warm and energetic start-of-day feel.",
  },

  {
    day: 23,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Paseo Descriptivo",
    subtitulo: "Perro, carro, árbol, vuela: el lenguaje vive afuera también",
    capitulo: 7,
    loEsencial:
      "El mundo exterior es el vocabulario más grande que existe. Cuando sales con tu hijo — aunque sea al patio o al pasillo del edificio — tienes acceso a decenas de palabras nuevas en contexto completamente natural: árboles, pájaros, carros, perros, flores, escaleras, viento. El paseo descriptivo no es una caminata silenciosa ni una carrera hacia el parque — es una exploración lenta y hablada donde tú eres el guía de lenguaje más amoroso del mundo.",
    objetivoDia:
      "Durante un paseo de al menos 10 minutos, nombrar 10 cosas del entorno, describir 3 acciones visibles, y responder a cada cosa que él señale.",
    faseConexion: {
      nombre: "Preparamos los ojos y las palabras",
      duracionMin: 5,
      descripcion:
        "Antes de salir, crea la actitud de exploradores. El paseo ya empieza en la puerta.",
      pasos: [
        "Di: 'Vamos a explorar afuera. ¿Qué encontraremos hoy?'",
        "Abre la puerta lentamente: '¡La puerta! Abrimos la puerta. Afuera.'",
        "Asómate primero y señala algo: '¡Mira! ¿Qué ves?'",
        "Deja que él salga a su ritmo. Si se detiene, deténte con él.",
      ],
      recordatorio:
        "Un paseo de 10 metros que dura 15 minutos es más rico para el lenguaje que uno de 2 kilómetros en 20 minutos.",
    },
    faseJuego: {
      nombre: "Nombramos el Mundo",
      duracionMin: 7,
      descripcion:
        "Sigue su mirada y su dedo para nombrar lo que él nota, más lo que tú notas para él.",
      pasos: [
        "Cuando señale algo: responde inmediatamente con el nombre. '¡Perro! Hay un perro. Guau guau.'",
        "Cuando pase algo: '¡El carro! El carro rojo. Va rápido. Beep beep.'",
        "Cuando veas algo alto: '¡El árbol! Grande el árbol. Mira las hojas.'",
        "Cuando vuele algo: '¡El pájaro! Vuela, vuela. Mira cómo vuela.'",
        "Cuando haya viento: 'El viento. Siente el viento. Frío el viento.'",
      ],
      recordatorio:
        "Responde primero a lo que ÉL señala. Luego añade lo que tú notas. Su iniciativa siempre tiene prioridad.",
    },
    faseCierre: {
      nombre: "Lo que vimos hoy",
      duracionMin: 3,
      descripcion: "Al volver, haz el recuento de lo que encontraron.",
      pasos: [
        "Di: 'Vimos un perro. Vimos el carro rojo. Vimos el árbol grande.'",
        "Haz el sonido de cada cosa: 'El perro: guau. El carro: beep. El pájaro: pío pío.'",
        "Anota: ¿Qué señaló él? ¿Intentó vocalizar alguna cosa que vio?",
      ],
    },
    microjuegos: [
      {
        id: "d23-m1",
        nombre: "El Libro del Paseo",
        objetivo: "Crear un registro visual del vocabulario del entorno",
        duracionMin: 5,
        materiales: ["Papel doblado como librito", "Lápices o marcadores"],
        pasos: [
          "Al volver del paseo, dibuja (aunque sea muy simple) 3-4 cosas que vieron.",
          "Ponle el nombre a cada dibujo en letras grandes.",
          "Léele el libro: 'Aquí está el perro. Aquí está el árbol.'",
          "Guarda el libro — puedes añadir una página por cada paseo.",
        ],
        trucoPro:
          "El 'libro del paseo' se convierte en el libro favorito de muchos niños porque tiene su propia vida en las páginas. La pertenencia hace que quieran 'leerlo' una y otra vez.",
        variante:
          "Toma fotos en el teléfono durante el paseo y muéstraselas al llegar nombrando cada cosa.",
      },
    ],
    checklist: [
      {
        id: "d23-c1",
        label: "Hice el paseo con actitud de explorador",
        descripcion: "Fui lento y atento, no con prisa hacia un destino",
      },
      {
        id: "d23-c2",
        label: "Respondí primero a lo que él señaló",
        descripcion: "Su iniciativa tuvo siempre prioridad sobre mis señalamientos",
      },
      {
        id: "d23-c3",
        label: "Nombré al menos 10 cosas del entorno",
        descripcion: "Objetos, animales, fenómenos naturales, vehículos, personas",
      },
      {
        id: "d23-c4",
        label: "Hice el recuento al volver",
        descripcion: "Revisé con sonidos y palabras lo que vimos",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo señala activamente cosas durante el paseo para que tú las nombres",
      "Intenta vocalizar el nombre de algo que ve (perro, carro, perro)",
      "Hace el sonido del animal o vehículo cuando lo ves pasar",
    ],
    fraseMotivacional:
      "El mundo entero es el aula de tu hijo. Cada paseo que dan juntos, cada perro que pasa, cada pájaro que vuela, es vocabulario y es conexión y es recuerdo. Tú haces que su mundo tenga nombre. Eso es inmenso.",
    erroresComunes: [
      {
        error: "Caminar sin hablar porque estás pensando en otras cosas",
        reencuadre:
          "Ponle los auriculares dentro del bolsillo. Diez minutos de presencia completa durante el paseo cambian más el lenguaje de tu hijo que dos horas de conversación distraída.",
      },
      {
        error: "Nombrar todo sin esperar a que él señale primero",
        reencuadre:
          "Si nombras todo tú antes de que él señale, reduces su motivación de señalar. Espera su iniciativa. Sé reactiva, no proactiva. Cuando señala y tú nombras, el circuito de comunicación se completa.",
      },
    ],
    imagePromptHint:
      "LATAM mother and toddler on a sidewalk in a warm neighborhood, child pointing at a dog across the street with wide eyes, mother kneeling beside him pointing the same direction with a big smile, trees and colorful houses in background, golden afternoon light.",
  },

  {
    day: 24,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Baño Cantado",
    subtitulo: "Inventamos la canción del baño: lavamos la mano, mano, mano",
    capitulo: 7,
    loEsencial:
      "La canción inventada en el momento, sobre lo que está pasando exactamente ahora, es uno de los recursos de lenguaje más poderosos que existen. No necesita ser perfecta ni afinada. Necesita ser real. 'Lavamos la mano, mano, mano. Lavamos la mano con agua y jabón.' Esa canción, inventada por ti mientras bañas a tu hijo esta noche, puede convertirse en la primera canción que él aprende a cantar. No porque sea hermosa — porque es suya.",
    objetivoDia:
      "Inventar una canción del baño de 4-6 palabras que se repita y cantar una variación para cada parte del cuerpo.",
    faseConexion: {
      nombre: "Hoy inventamos una canción",
      duracionMin: 5,
      descripcion:
        "Anuncia antes del baño que hoy habrá una canción especial. Crea la anticipación.",
      pasos: [
        "Al anunciar el baño: 'Esta noche vamos a inventar una canción del baño. ¿Cómo será?'",
        "Canta la melodía antes de que entren al agua: 'La la la, la la la' con mucho ritmo.",
        "Di: 'Yo empiezo y tú ayudas. Lista… ¡Lavamos la mano, mano, mano!'",
        "Canta las palabras con mucho ritmo y palmadas.",
      ],
      recordatorio:
        "No importa si la melodía es una que ya conoces o completamente inventada. Lo que importa es el ritmo, la repetición y que sea sobre su cuerpo.",
    },
    faseJuego: {
      nombre: "La Canción que Crece",
      duracionMin: 7,
      descripcion:
        "Empieza con una parte del cuerpo y añade una nueva con cada vuelta.",
      pasos: [
        "Comienza: 'Lavamos la mano, mano, mano. Lavamos la mano con agua y jabón.'",
        "Lava la mano mientras cantas. Repite la estrofa dos veces.",
        "Añade el pie: 'Lavamos el pie, pie, pie. Lavamos el pie con agua y jabón.'",
        "Añade la cabeza: 'Lavamos la cara, cara, cara. Lavamos la cara con agua y jabón.'",
        "Al final: 'Lavamos a [nombre], [nombre], [nombre]. ¡Limpio ya está [nombre]!'",
      ],
      recordatorio:
        "Deja pausas en la sílaba final para que él intente completar: 'Lavamos la maaaa…' (espera). Si no completa, di tú 'mano' y sigue.",
    },
    faseCierre: {
      nombre: "La canción de siempre",
      duracionMin: 3,
      descripcion: "Esta canción de baño será parte de su rutina nocturna desde hoy.",
      pasos: [
        "Canta la versión completa una vez sin pausas, como regalo de cierre.",
        "Di: 'Esta es nuestra canción del baño. La cantaremos todas las noches.'",
        "Anota la letra en la Bitácora para recordarla mañana.",
      ],
    },
    microjuegos: [
      {
        id: "d24-m1",
        nombre: "Burbujas Musicales",
        objetivo: "Asociar música y agua con vocabulario corporal",
        duracionMin: 4,
        materiales: ["Espuma de baño o jabón en espuma"],
        pasos: [
          "Pon espuma en su mano mientras cantas: 'Espuma en la mano, mano, mano.'",
          "Pon en la barriga: 'Espuma en la barriga, barriga, barriga.'",
          "Deja que él ponga espuma donde quiera.",
          "Nombra la parte donde la pone él, cantada.",
        ],
        trucoPro:
          "La espuma hace el vocabulario corporal táctil, visual y musical al mismo tiempo — triple ancla de aprendizaje.",
        variante:
          "Usa colorante de baño en el agua y canta sobre los colores también: 'Agua azul, azul, azul.'",
      },
    ],
    checklist: [
      {
        id: "d24-c1",
        label: "Inventé una canción de baño propia",
        descripcion: "Con la melodía que sea, pero la letra es sobre su cuerpo y el agua",
      },
      {
        id: "d24-c2",
        label: "Canté una variación por cada parte del cuerpo",
        descripcion: "Mano, pie, cara, barriga — cada una tuvo su estrofa",
      },
      {
        id: "d24-c3",
        label: "Usé pausas para que completara",
        descripcion: "Esperé en la sílaba clave de cada estrofa",
      },
      {
        id: "d24-c4",
        label: "Anoté la letra en la Bitácora",
        descripcion: "Guardé la canción para repetirla exactamente igual mañana",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo empieza a moverse o vocalizar cuando empieza la canción del baño",
      "Extiende la parte del cuerpo correspondiente cuando la nombras en la canción",
      "Intenta completar alguna palabra en las pausas de la canción",
    ],
    fraseMotivacional:
      "La canción que inventaste hoy, con su melodía imperfecta y sus palabras sencillas, puede ser la primera canción que tu hijo cante en su vida. Años después, quizás ni recuerdes que la inventaste tú. Pero él la llevará en algún rincón del corazón para siempre.",
    erroresComunes: [
      {
        error: "Cambiar la canción cada noche para que sea variada",
        reencuadre:
          "La misma canción cada noche es exactamente lo que buscamos. La familiaridad crea seguridad y la seguridad abre la puerta al intento vocal. Una canción constante vale más que treinta diferentes.",
      },
      {
        error: "Sentirse ridícula cantando una canción inventada",
        reencuadre:
          "Tu hijo no tiene el más mínimo criterio estético todavía. Para él, tu voz cantando para él es la mejor música del mundo. El ridículo es solo tuyo — y puedes soltarlo.",
      },
    ],
    imagePromptHint:
      "LATAM mother bathing toddler in a small tub, both laughing, mother's mouth open singing with an exaggerated happy face, child reaching up toward her face with soapy hands, warm bathroom light, rubber duck in the tub, joyful and intimate.",
  },

  {
    day: 25,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Reinicio Conectivo",
    subtitulo: "Cuando el día se pone difícil, aquí está el botón de reinicio",
    capitulo: 6,
    loEsencial:
      "No todos los días salen bien. Hay días en que tu hijo está irritable, tú estás agotada, y la sesión de lenguaje parece imposible. El Reinicio Conectivo es una herramienta de tres pasos para cuando todo se descarrila: detente, conecta físicamente, y empieza de nuevo sin culpa. No es rendirse — es ser sabia. Un niño que primero siente conexión luego puede aprender. Un niño frustrado o tenso no puede. Hoy aprendes el arte del reinicio.",
    objetivoDia:
      "Practicar el ritual de reinicio de 3 pasos en al menos 1 momento difícil del día, sin objetivo de lenguaje — solo reconexión.",
    faseConexion: {
      nombre: "Antes de que llegue la tormenta",
      duracionMin: 5,
      descripcion:
        "Reconoce las señales de que tu hijo (o tú) necesitan un reinicio antes de que escale.",
      pasos: [
        "Aprende las señales de saturación de tu hijo: se aleja, llora, ignora, tira objetos.",
        "Cuando veas una señal, para todo. Di suavemente: '[Nombre], para. Aquí estoy.'",
        "Baja al suelo. Sin objetivos, sin juguetes, sin preguntas.",
        "Simplemente estate con él.",
      ],
      recordatorio:
        "El reinicio no es recompensa ni castigo. Es medicina. Se aplica cuando hay saturación, no solo cuando hay mal comportamiento.",
    },
    faseJuego: {
      nombre: "El Protocolo de Tres Pasos",
      duracionMin: 7,
      descripcion:
        "Los tres pasos del reinicio conectivo: para, conecta, redirige con calma.",
      pasos: [
        "Paso 1 — Para: detén toda actividad. Saca el juguete de la escena si hay conflicto.",
        "Paso 2 — Conecta: siéntate a su nivel. Pon una mano en su espalda o tómalo en tus brazos. Sin hablar de lo que pasó.",
        "Paso 3 — Redirige: después de 60-90 segundos de calma juntos, ofrece una actividad diferente sin mencionar la anterior: '¿Vamos a buscar los carros?'",
        "Si llora, sostenlo. No apresures el paso 3.",
        "Si tú estás agotada, siéntate en el piso y respira. No tienes que hacer nada más.",
      ],
      recordatorio:
        "El paso 2 es el más importante. La conexión física antes de cualquier redireccionamiento verbal es la clave.",
    },
    faseCierre: {
      nombre: "Lo que aprendí hoy sobre mi hijo",
      duracionMin: 3,
      descripcion: "Usa este día para entender mejor los límites y necesidades de tu hijo.",
      pasos: [
        "Anota en la Bitácora: ¿Qué situación desencadenó la saturación? ¿Qué la resolvió?",
        "Escribe: 'Cuando mi hijo necesita reinicio, lo que más ayuda es [____].'",
        "Reconoce tu propio esfuerzo: el reinicio también requiere mucho de ti.",
      ],
    },
    microjuegos: [
      {
        id: "d25-m1",
        nombre: "El Rincón de la Calma",
        objetivo: "Crear un espacio físico de reconexión",
        duracionMin: 5,
        materiales: ["Una manta suave", "Un cojín o almohada", "Un objeto favorito"],
        pasos: [
          "Designa un rincón del cuarto como 'el rincón de la calma'.",
          "Ponle una manta suave y un cojín.",
          "Ve ahí cuando necesiten reiniciarse — no como castigo sino como refugio.",
          "Di: 'Vamos al rincón especial.' Y simplemente estén juntos.",
        ],
        trucoPro:
          "El rincón de la calma también es para ti. Cuando tú te sientas en él, tu hijo aprende que los adultos también necesitan descanso y reconexión. Eso es modelar regulación emocional.",
      },
    ],
    checklist: [
      {
        id: "d25-c1",
        label: "Identifiqué señales de saturación de mi hijo",
        descripcion: "Noté antes de la crisis cuándo necesitaba el reinicio",
      },
      {
        id: "d25-c2",
        label: "Apliqué los 3 pasos sin saltarme el paso 2",
        descripcion: "Para, conecta físicamente, redirige — en ese orden",
      },
      {
        id: "d25-c3",
        label: "No usé el reinicio para enseñar lenguaje",
        descripcion: "Hoy la conexión fue el único objetivo — sin metas de vocabulario",
      },
      {
        id: "d25-c4",
        label: "Anoté lo que funcionó en la Bitácora",
        descripcion: "Registré qué desencadenó la saturación y qué la resolvió",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo se calma más rápido cuando lo sostienes sin hablar",
      "Busca el contacto físico contigo cuando está saturado",
      "El reinicio tarda menos tiempo que la semana anterior",
    ],
    consejoDia:
      "El reinicio no es un fracaso del día — es el día funcionando como debe. Un niño que siente que puede saturarse y que hay un adulto que lo recibe sin reproches tiene un sistema nervioso más seguro, y un sistema nervioso seguro aprende mejor.",
    fraseMotivacional:
      "Los días difíciles no borran los días buenos. No borran el progreso. Son parte del viaje, no un desvío. Y el hecho de que hoy hayas elegido reconectar en lugar de rendirte dice todo sobre el tipo de mamá que eres.",
    erroresComunes: [
      {
        error: "Hablar y explicar durante el paso 2 del reinicio",
        reencuadre:
          "Las palabras durante la saturación no llegan. El sistema nervioso activado no puede procesar lenguaje. El silencio con presencia física es infinitamente más efectivo que la mejor explicación.",
      },
      {
        error: "Intentar continuar la sesión de lenguaje justo después del reinicio",
        reencuadre:
          "El reinicio es suficiente por sí solo. No necesita ser seguido de más aprendizaje para tener valor. A veces el mejor día de lenguaje es el que termina en un abrazo largo y nada más.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting on a soft rug with her toddler in her lap, both calm and quiet, mother's arms wrapped around the child, child leaning back against her chest, eyes closed, afternoon sunlight casting gentle shadows, peaceful moment after a hard time.",
  },

  {
    day: 26,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Juego Libre Narrado",
    subtitulo: "Tú sigues, él lidera, las palabras aparecen solas",
    capitulo: 7,
    loEsencial:
      "El juego libre narrado es la síntesis de todo lo que aprendiste en estas semanas. Sigues su juego (semana 1), añades palabras (semana 2), expandes sus intentos (semana 3), y narras en tiempo real (semana 4). No diriges. No corriges. No preguntas. Solo sigues y nombras. Cuando haces esto bien, el niño experimenta la maravilla de tener un adulto que le da lenguaje exactamente para lo que está viviendo en ese momento. Ese es el regalo más grande.",
    objetivoDia:
      "Seguir el juego libre de tu hijo durante 15 minutos narrandolo en tiempo real sin dirigir, preguntar ni corregir.",
    faseConexion: {
      nombre: "Estoy lista para seguirte",
      duracionMin: 5,
      descripcion:
        "Prepárate mentalmente para ser seguidora, no líder. Este cambio de rol es el más importante.",
      pasos: [
        "Siéntate en el suelo en la zona de juego. Pon los juguetes disponibles sin sacarlos ni organizarlos.",
        "Di internamente: 'Hoy él elige, yo sigo.'",
        "Cuando tome un juguete, di su nombre suavemente: 'El carro.' Nada más.",
        "Espera lo que viene después.",
      ],
      recordatorio:
        "Si sientes el impulso de sugerir algo, toca el piso con la mano como ancla. Ese impulso se pasa.",
    },
    faseJuego: {
      nombre: "Narración en Vivo",
      duracionMin: 7,
      descripcion:
        "Narra en tiempo real cada acción como un comentarista deportivo muy tranquilo.",
      pasos: [
        "Nombra objetos: 'El carro. El carro azul.'",
        "Nombra acciones: 'Empuja el carro. El carro rueda. Fue lejos.'",
        "Nombra estados: 'El carro cayó. Cayó al piso.'",
        "Responde a sus iniciativas: si te muestra algo, di: '¡Me mostraste el carro! El carro.'",
        "Si hace un sonido, ecoa y expande. Si señala, nombra lo señalado.",
      ],
      recordatorio:
        "La narración es en voz baja, tranquila, sin entusiasmo exagerado. Como quien cuenta un cuento al oído.",
    },
    faseCierre: {
      nombre: "El cuento de hoy",
      duracionMin: 3,
      descripcion: "Cierra contando el 'cuento' de lo que jugaron.",
      pasos: [
        "Di: 'Hoy [nombre] jugó con el carro. El carro rodó. El carro cayó. [Nombre] lo levantó. Fin.'",
        "Haz los gestos de cada acción mientras la cuentas.",
        "Anota en la Bitácora: ¿Cuántas veces inició comunicación sin que tú lo pidieras?",
      ],
    },
    microjuegos: [
      {
        id: "d26-m1",
        nombre: "El Comentarista",
        objetivo: "Practicar la narración en vivo de forma natural",
        duracionMin: 10,
        pasos: [
          "Pon un temporizador de 10 minutos.",
          "Sigue el juego libre completo sin dirigir una sola vez.",
          "Narra en voz baja cada acción: 'Toma el bloque. Pone el bloque arriba. Cayó. Lo busca.'",
          "Al sonar el temporizador, anota cuántas palabras diferentes dijiste.",
        ],
        trucoPro:
          "Los terapeutas de lenguaje llaman a esto 'parallel talk' y 'self talk'. Es una de las estrategias más efectivas y menos usadas por los padres en casa.",
        variante:
          "Grábate en audio durante 3 minutos. Escucha después — te sorprenderá cuánto vocabulario natural produciste.",
      },
    ],
    checklist: [
      {
        id: "d26-c1",
        label: "Seguí su liderazgo durante toda la sesión",
        descripcion: "No sugerí, no redirigí, no organicé su juego",
      },
      {
        id: "d26-c2",
        label: "Narré en tiempo real sin preguntas ni correcciones",
        descripcion: "Solo descripciones y expansiones, nunca evaluaciones",
      },
      {
        id: "d26-c3",
        label: "Respondí a sus iniciativas comunicativas",
        descripcion: "Cuando me mostró algo o señaló, recibí y nombré inmediatamente",
      },
      {
        id: "d26-c4",
        label: "Conté el 'cuento del juego' al final",
        descripcion: "Narré en pasado los eventos del juego libre",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo te incluye en su juego activamente (te muestra, te ofrece objetos)",
      "Los episodios de juego duran más cuando estás narrando que cuando hay silencio",
      "Produce más vocalizaciones durante el juego libre narrado que en otros momentos",
    ],
    fraseMotivacional:
      "Seguir a tu hijo en su mundo, nombrárselo, y no pedir nada a cambio — eso es la forma más pura de amor en el lenguaje. Hoy no enseñaste. Acompañaste. Y acompañar bien es más raro y más valioso que cualquier técnica.",
    erroresComunes: [
      {
        error: "Empezar a dirigir después de los primeros 3 minutos porque 'no pasa nada'",
        reencuadre:
          "Lo que parece que 'no pasa nada' es en realidad el niño procesando sin presión. El procesamiento sin presión es exactamente cuando más se instala el lenguaje. Confía en el silencio activo.",
      },
      {
        error: "Hacer preguntas retóricas durante la narración ('¿verdad que es un carro?')",
        reencuadre:
          "Las preguntas, aunque sean retóricas, crean una expectativa de respuesta. Cambia cada pregunta por una declaración: en lugar de '¿es un carro, verdad?', di 'Ese es un carro.'",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting cross-legged on a colorful rug watching her toddler play with wooden blocks, mother's posture relaxed and open, child fully absorbed in stacking blocks, mother speaking softly with a gentle smile, warm afternoon light, no tension.",
  },

  {
    day: 27,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Rutina Nocturna",
    subtitulo: "Cama, dormir, beso, mañana: las palabras que terminan cada día",
    capitulo: 7,
    loEsencial:
      "La rutina nocturna es la más emocional del día. Hay algo en el momento de dormir que hace que las palabras tengan más peso — más calor, más ternura, más permanencia. Cuando los últimas palabras que escucha tu hijo antes de dormir son constantes, predecibles y llenas de amor, crean una red de seguridad lingüística y emocional que influye en cómo su cerebro procesa el lenguaje mientras duerme. La rutina nocturna hablada no solo enseña vocabulario — enseña que el mundo es seguro.",
    objetivoDia:
      "Crear y usar una rutina nocturna de lenguaje consistente: las mismas palabras, en el mismo orden, con el mismo tono, todas las noches.",
    faseConexion: {
      nombre: "La hora de dormir empieza antes",
      duracionMin: 5,
      descripcion:
        "Anuncia la rutina nocturna con al menos 10 minutos de anticipación para reducir la resistencia.",
      pasos: [
        "Di: 'En un ratito, a dormir.' Con voz suave, no de aviso sino de abrazo que se acerca.",
        "Empieza a bajar el ritmo de la actividad: menos movimiento, voz más baja, luces más suaves.",
        "Di: 'Vamos a preparar la cama.' Llévalo al cuarto con calma.",
        "Nombra cada elemento del cuarto: 'La cama. La almohada. La cobija. El osito.'",
      ],
      recordatorio:
        "Los niños se resisten más a dormir cuando el cambio es abrupto. La transición gradual con palabras suaves reduce la resistencia y crea el contexto ideal para el vocabulario de la noche.",
    },
    faseJuego: {
      nombre: "Las Palabras de la Noche",
      duracionMin: 7,
      descripcion:
        "Usa las mismas 5-6 palabras en el mismo orden cada noche como ritual de cierre.",
      pasos: [
        "Al ponerlo en la cama: 'Cama. En la cama. Qué rica la cama.'",
        "La cobija: 'Cobija. Te tapo con la cobija. Calientito.'",
        "El beso: 'Un beso. Beso de mamá. Beso.' (besa su frente o mejilla)",
        "El apagado: 'Luz. Apagamos la luz. Oscuro.'",
        "El cierre: 'Dormir. A dormir, [nombre]. Hasta mañana.'",
        "Y un último susurro: 'Te quiero, [nombre]. Buenas noches.'",
      ],
      recordatorio:
        "Exactamente las mismas palabras, en el mismo orden, con el mismo tono. La predicción es seguridad y la seguridad es aprendizaje.",
    },
    faseCierre: {
      nombre: "El silencio que también enseña",
      duracionMin: 3,
      descripcion: "Después de las palabras, viene el silencio amoroso.",
      pasos: [
        "Después del 'buenas noches', quédate un momento en silencio al lado de la cama.",
        "Si señala algo o hace un sonido, responde suavemente con la palabra.",
        "Sal del cuarto con calma, sabiendo que las palabras de hoy ya están guardadas en su cerebro.",
      ],
    },
    microjuegos: [
      {
        id: "d27-m1",
        nombre: "El Cuento de Un Minuto",
        objetivo: "Cierre narrativo del día con vocabulario de actividades",
        duracionMin: 3,
        pasos: [
          "Con la luz ya baja, cuenta en voz muy suave lo que hicieron hoy.",
          "Solo 3-4 frases: 'Hoy [nombre] desayunó. Salimos a caminar. Vimos un perro. Ahora a dormir.'",
          "Habla despacio y con pausas largas.",
          "Si le provocas que intente completar alguna palabra, bien. Si se durmió, mejor.",
        ],
        trucoPro:
          "El cuento del día activa la memoria episódica antes de dormir — el momento en que el cerebro consolida mejor los aprendizajes del día.",
        variante:
          "Usa 1-2 fotos del día en el teléfono (en modo oscuro) para que las vea mientras las cuentas.",
      },
    ],
    checklist: [
      {
        id: "d27-c1",
        label: "Anuncié el momento de dormir con anticipación",
        descripcion: "Avisé con tiempo suficiente y reduje el ritmo gradualmente",
      },
      {
        id: "d27-c2",
        label: "Usé las 6 palabras nocturnas en orden",
        descripcion: "Cama, cobija, beso, luz, dormir, buenas noches — en ese orden",
      },
      {
        id: "d27-c3",
        label: "Usé el mismo tono suave en toda la rutina",
        descripcion: "Voz baja y cálida de principio a fin",
      },
      {
        id: "d27-c4",
        label: "Conté el cuento del día en un minuto",
        descripcion: "Tres frases cortas sobre lo que hicimos hoy",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo empieza a calmarse cuando inicia la rutina nocturna, antes de las palabras",
      "Señala o mira su almohada u osito cuando nombras la cama",
      "Intenta vocalizar 'beso' o extiende la mejilla cuando dices 'beso'",
    ],
    fraseMotivacional:
      "Las últimas palabras del día son las que más se quedan. Cuando esas palabras son tuyas, llenas de amor, y dichas con calma — son lo último que su cerebro procesa antes de consolidar todo lo aprendido. Qué privilegio tan hermoso tienes cada noche.",
    erroresComunes: [
      {
        error: "Cambiar la rutina nocturna según el cansancio o el humor del día",
        reencuadre:
          "La consistencia de la rutina nocturna es especialmente crítica. Los días en que estás más cansada son exactamente cuando la rutina corta y predecible es más valiosa — para él y para ti.",
      },
      {
        error: "Usar el momento de dormir para revisar qué aprendió",
        reencuadre:
          "La noche no es para evaluar. Es para cerrar con amor. Guardar las preguntas de evaluación para el día garantiza que la noche sea siempre un lugar seguro.",
      },
    ],
    imagePromptHint:
      "LATAM mother leaning over a small crib or toddler bed, gently pulling up a colorful blanket over her child, soft night light visible, child's eyes half-closed, mother's face tender and close, whispering something with a peaceful smile.",
  },

  {
    day: 28,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Bitácora Mensual",
    subtitulo: "Treinta días de historia en un cuaderno: lo que fue, lo que es, lo que viene",
    capitulo: 8,
    loEsencial:
      "Llegaste al día 28. Quedan tres días. Hoy es el momento de hacer la retrospectiva más importante del programa: la Bitácora Mensual. No es una tarea escolar ni un informe. Es el registro de un viaje extraordinario que tú y tu hijo hicieron juntos. Léela entera. Llora si quieres. Ríe si puedes. Y luego compártela con la persona que más te ha apoyado en estas semanas, porque nadie debería guardar esta historia solo para sí.",
    objetivoDia:
      "Leer la Bitácora completa de 28 días, identificar los 3 mayores cambios, y compartir la historia con una persona querida.",
    faseConexion: {
      nombre: "El libro de nuestro viaje",
      duracionMin: 5,
      descripcion:
        "Prepárate para leer con el corazón abierto. Pon una bebida que te guste. Siéntate donde estés cómoda.",
      pasos: [
        "Abre la Bitácora en el día 1. Lee sin prisa.",
        "Marca o subraya momentos que te emocionen o sorprendan.",
        "No te juzgues por los días que saltaste o las notas cortas. Están bien.",
        "Cuando termines, cierra los ojos un momento y respira.",
      ],
      recordatorio:
        "La Bitácora no es perfecta porque tú no eras perfecta. Era honesta, y eso vale mucho más.",
    },
    faseJuego: {
      nombre: "Los Tres Grandes Cambios",
      duracionMin: 7,
      descripcion:
        "Identifica los 3 cambios más significativos desde el día 1 hasta hoy.",
      pasos: [
        "Mira el Mapa de Comunicación del día 7 y el del día 21. Compáralos.",
        "Escribe en una hoja nueva: 'Cambio 1: Antes [____], ahora [____].'",
        "Repite para los cambios 2 y 3.",
        "Estos tres cambios son el resumen de 28 días de trabajo.",
        "Toma una foto de la hoja.",
      ],
      recordatorio:
        "Los cambios pueden ser conductuales ('antes no señalaba, ahora señala'), comunicativos ('antes no miraba, ahora busca mi mirada'), o de relación ('antes el juego duraba 2 minutos, ahora dura 10').",
    },
    faseCierre: {
      nombre: "Compartir la historia",
      duracionMin: 3,
      descripcion: "La historia de este mes merece ser contada a alguien que lo aprecie.",
      pasos: [
        "Llama, escribe o visita a la persona que más te apoya.",
        "Comparte los 3 cambios y una historia favorita de la Bitácora.",
        "Si puedes, léele una entrada del día 1 y una del día 28 para que vea el contraste.",
        "Agradece en voz alta por el apoyo que recibiste.",
      ],
    },
    microjuegos: [
      {
        id: "d28-m1",
        nombre: "Carta a tu hijo del futuro",
        objetivo: "Crear un registro emocional del progreso para recordar",
        duracionMin: 10,
        materiales: ["Papel", "Lápiz"],
        pasos: [
          "Escribe una carta corta a tu hijo para cuando sea mayor.",
          "Cuéntale lo que hicieron juntos en estas 4 semanas.",
          "Dile qué aprendiste tú, no solo él.",
          "Guarda la carta en la Bitácora o en un sobre sellado.",
        ],
        trucoPro:
          "Leer esta carta años después, cuando tu hijo ya habla bien, es uno de los momentos más hermosos que puedes darte. Escríbela aunque te parezca ridículo ahora.",
      },
    ],
    checklist: [
      {
        id: "d28-c1",
        label: "Leí la Bitácora completa de 28 días",
        descripcion: "Sin saltarme días, con atención y con ojos amables",
      },
      {
        id: "d28-c2",
        label: "Identifiqué y escribí los 3 grandes cambios",
        descripcion: "Con la estructura: antes [____], ahora [____]",
      },
      {
        id: "d28-c3",
        label: "Compartí la historia con alguien",
        descripcion: "Conté los cambios a una persona de confianza",
      },
      {
        id: "d28-c4",
        label: "Escribí la carta a mi hijo del futuro",
        descripcion: "Una carta corta sobre lo que vivimos estas semanas",
      },
    ],
    indicadoresProgreso: [
      "Puedes listar 3 cambios concretos y medibles desde el inicio del programa",
      "Los tiempos de atención conjunta son más largos ahora que en la semana 1",
      "Tu hijo tiene al menos 3 gestos o palabras funcionales que no tenía al inicio",
    ],
    fraseMotivacional:
      "Veintiocho días. Cada uno una elección. La elección de estar, de jugar, de cantar, de observar. Nadie te pidió perfección — y tú de todas formas la buscaste con amor. Eso se llama ser una mamá extraordinaria. Y lo eres.",
    erroresComunes: [
      {
        error: "Comparar el progreso con 'lo que debería ser a esta edad'",
        reencuadre:
          "El único punto de comparación válido es tu propio hijo en el día 1. Cada niño tiene su propio ritmo y su propio camino. Lo que importa es la dirección: ¿está mejor que hace 28 días? Casi seguro que sí.",
      },
      {
        error: "Guardar la Bitácora sin compartir",
        reencuadre:
          "El progreso compartido se celebra dos veces: una cuando lo vives y otra cuando lo cuentas. Además, contarle a otro adulto refuerza tu propia confianza en el proceso.",
      },
    ],
    imagePromptHint:
      "LATAM mother sitting at a table with an open notebook filled with handwritten notes and small drawings, a cup of tea beside her, soft smile on her face as she reads, evening light, sense of accomplishment and warmth, phone nearby with photo visible.",
  },

  {
    day: 29,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Celebración Familiar",
    subtitulo: "Incluye a otro cuidador y muéstrale el método que aprendiste",
    capitulo: 9,
    loEsencial:
      "El lenguaje no se aprende con una sola persona. Se aprende en la red de relaciones que rodean a un niño. Hoy invitas a otro cuidador — el papá, la abuela, una tía, una persona de confianza — a ser parte de este método. No para evaluarlos ni para darles tarea, sino para que vean lo que tú ves cuando juegas con tu hijo. Para que aprendan el gesto de 'más', la pausa de anticipación, el eco. Para que tu hijo tenga más de una persona que lo responde de esta manera.",
    objetivoDia:
      "Involucrar a otro cuidador en al menos uno de los juegos del programa, mostrándole el método en acción.",
    faseConexion: {
      nombre: "Preparamos al invitado",
      duracionMin: 5,
      descripcion:
        "Antes de la sesión, prepara brevemente a la persona que vas a incluir.",
      pasos: [
        "Explica en 3 frases qué va a pasar: 'Vamos a jugar con [nombre]. Lo importante es seguir su ritmo y nombrar lo que hace.'",
        "Muéstrale el gesto de 'más' y el eco: 'Si dice algo, lo repites y añades la palabra completa.'",
        "Dile que no hay presión ni evaluación: 'Hoy solo observa y participa.'",
        "Asegúrate de que el niño esté en buen estado: descansado, alimentado, tranquilo.",
      ],
      recordatorio:
        "No conviertas al cuidador en estudiante ni en paciente. Hazlo cómplice de algo que ya funciona.",
    },
    faseJuego: {
      nombre: "El Juego de los Tres",
      duracionMin: 7,
      descripcion:
        "Juega primero tú con tu hijo para que el cuidador observe, luego invítalo a participar.",
      pasos: [
        "Empieza jugando tú el juego favorito del niño. El cuidador observa.",
        "Comenta en voz alta lo que haces: 'Ahora espero que me pida más. Mira — hizo el gesto.'",
        "Después de 3 minutos, invita al cuidador: '¿Quieres intentarlo?'",
        "Deja que juegue. Si necesita ayuda, susúrrale sugerencias amables.",
        "Celebra los momentos de conexión entre ellos: '¡Lo miró a los ojos! ¡Qué bien!'",
      ],
      recordatorio:
        "El objetivo no es que el cuidador haga todo perfectamente. Es que tenga una experiencia positiva que quiera repetir.",
    },
    faseCierre: {
      nombre: "Lo que vieron juntos",
      duracionMin: 3,
      descripcion: "Cierra con una conversación breve sobre lo que observaron.",
      pasos: [
        "Pregunta al cuidador: '¿Qué notaste que hizo [nombre]?'",
        "Escucha su observación. Valídala: 'Sí, eso es exactamente lo que estamos trabajando.'",
        "Di: 'Gracias por venir. Con que lo hagas 5 minutos al día ya ayuda mucho.'",
      ],
    },
    microjuegos: [
      {
        id: "d29-m1",
        nombre: "La Guía del Cuidador",
        objetivo: "Compartir el método de forma simple y usable",
        duracionMin: 5,
        materiales: ["Papel o tarjeta pequeña"],
        pasos: [
          "Escribe en una tarjeta las 3 reglas de oro: 1) Sigue su ritmo. 2) Nombra lo que hace. 3) Celebra cualquier intento.",
          "Dásela al cuidador para que la tenga en su bolsillo o refrigerador.",
          "Di: 'Estas tres cosas son todo lo que necesitas.'",
        ],
        trucoPro:
          "Una tarjeta física es más efectiva que una explicación larga. La simplicidad garantiza que se use. La complejidad garantiza que no.",
      },
    ],
    checklist: [
      {
        id: "d29-c1",
        label: "Identifiqué y preparé a otro cuidador",
        descripcion: "Expliqué el método brevemente antes de la sesión",
      },
      {
        id: "d29-c2",
        label: "Modelé el juego primero",
        descripcion: "El cuidador me observó jugar antes de participar",
      },
      {
        id: "d29-c3",
        label: "El cuidador participó al menos 3 minutos",
        descripcion: "Tuvo una experiencia directa con el método",
      },
      {
        id: "d29-c4",
        label: "Le di la tarjeta de las 3 reglas de oro",
        descripcion: "Tiene un recordatorio simple para seguir usando el método",
      },
    ],
    indicadoresProgreso: [
      "Tu hijo acepta el juego con el otro cuidador con confianza",
      "El otro cuidador observa algo en el niño que le sorprende positivamente",
      "Tu hijo usa un gesto o vocalización durante el juego con el nuevo cuidador",
    ],
    consejoDia:
      "Si el otro cuidador no puede estar hoy, está bien. Guarda el juego para cuando puedas. Lo que importa es la intención de expandir el círculo de lenguaje de tu hijo.",
    fraseMotivacional:
      "Cada persona que aprende a responder a tu hijo de esta manera es una fuente de lenguaje más. Hoy le diste a tu hijo un regalo que tú sola no podías darle: más voces amorosas que lo entienden. Eso es construir una red de amor.",
    erroresComunes: [
      {
        error: "Corregir al cuidador mientras juega con el niño",
        reencuadre:
          "Corregir al cuidador frente al niño interrumpe la conexión entre ellos. Guarda los comentarios para después de la sesión. Un error pequeño durante el juego tiene mucho menos impacto que la interrupción.",
      },
      {
        error: "Elegir a alguien escéptico del método para esta sesión",
        reencuadre:
          "Para este día, elige a alguien que ya esté dispuesto y abierto. El escepticismo se trabaja mejor con tiempo y con resultados visibles, no en la primera sesión conjunta.",
      },
    ],
    imagePromptHint:
      "LATAM family scene: mother, father or grandmother, and toddler all sitting on a rug, father or grandmother making the 'more' hand gesture while child reaches forward laughing, mother watching from the side with a proud smile, warm living room light.",
  },

  {
    day: 30,
    week: 4,
    weekTheme: "El lenguaje vive en todo",
    weekColor: "var(--color-accent-sage)",
    titulo: "Ritual de Cierre + Plan de Mantenimiento",
    subtitulo: "El programa termina, el viaje continúa: tu plan para los próximos 30 días",
    capitulo: 9,
    loEsencial:
      "Treinta días. Lo hiciste. No importa cuántos días perfectos hubo ni cuántos fueron difíciles. Lo que importa es que llegaste al día 30, que tu hijo tiene más herramientas de comunicación que hace un mes, y que tú eres una mamá diferente — más presente, más observadora, más confiada. El programa termina hoy, pero el método no. Lo que aprendiste no desaparece al cerrar esta aplicación. Vive en tus manos, en tu voz, en tu forma de mirar a tu hijo. Ahora tienes un plan para seguir.",
    objetivoDia:
      "Crear tu Plan de Mantenimiento personal: qué conservas, qué refuerzas, y cuándo vuelves a revisar el progreso.",
    faseConexion: {
      nombre: "Treinta días de gratitud",
      duracionMin: 5,
      descripcion:
        "Antes de planear el futuro, honra el presente. Treinta días merecen un momento de gratitud.",
      pasos: [
        "Siéntate con tu hijo en los brazos o frente a ti.",
        "Míralo a los ojos durante 30 segundos sin decir nada.",
        "Di: '[Nombre], gracias por enseñarme a verte. Gracias por confiar en mí.'",
        "Respira profundo y sonríe.",
      ],
      recordatorio:
        "Este momento no es para él — es para ti. Para que recuerdes por qué empezaste y quién eres ahora.",
    },
    faseJuego: {
      nombre: "El Juego de los Treinta Días",
      duracionMin: 7,
      descripcion:
        "Juega el juego que fue más significativo de todo el programa.",
      pasos: [
        "Elige el juego que más cambió la relación entre ustedes o que más avance generó.",
        "Juégalo completo, con toda la conciencia de lo que significa.",
        "Cuando termines, di: 'Este fue nuestro juego de estos treinta días.'",
        "Toma una foto si puedes — el último juego del programa.",
      ],
      recordatorio:
        "El juego elegido hoy se convierte en el ancla del Plan de Mantenimiento — el que nunca puede faltar.",
    },
    faseCierre: {
      nombre: "Plan de Mantenimiento",
      duracionMin: 3,
      descripcion: "Diseña tu plan sencillo para las próximas semanas.",
      pasos: [
        "Escribe: 'Mi juego semanal que nunca falta: [____].'",
        "Escribe: 'Mi rutina diaria de lenguaje: [____] (baño / desayuno / paseo).'",
        "Escribe: 'En 30 días voy a revisar la Bitácora el día [fecha].'",
        "Guarda este plan en la Bitácora o ponlo en el refrigerador.",
      ],
    },
    microjuegos: [
      {
        id: "d30-m1",
        nombre: "Carta a la Mamá del Día 1",
        objetivo: "Integrar el aprendizaje y celebrar la transformación",
        duracionMin: 8,
        materiales: ["Papel", "Lápiz"],
        pasos: [
          "Escribe una carta a la mamá que empezó el día 1 de este programa.",
          "Cuéntale lo que aprendiste, lo que fue difícil, lo que sorprendió.",
          "Di lo que le dirías si pudiera escucharte ahora.",
          "Guarda la carta junto a la 'Carta a tu hijo del futuro' del día 28.",
        ],
        trucoPro:
          "Esta carta es el mejor indicador de tu propio crecimiento como cuidadora de lenguaje. Léela en 6 meses. Será uno de los momentos más hermosos del año.",
        variante:
          "Comparte la carta con alguien de confianza. Lo que se dice en voz alta tiene más poder que lo que se guarda en papel.",
      },
      {
        id: "d30-m2",
        nombre: "El Ritual de Cierre Semanal",
        objetivo: "Establecer el hábito de revisión para el mantenimiento",
        duracionMin: 5,
        pasos: [
          "Elige un día de la semana que será tu 'día de Bitácora' para siempre.",
          "Cada semana, ese día: anota 3 cosas que observaste en el lenguaje de tu hijo.",
          "Una vez al mes: compara con el mes anterior.",
          "Ese ritual de 10 minutos semanales es suficiente para mantener el progreso.",
        ],
        trucoPro:
          "Pon el día de Bitácora en el calendario como una cita inamovible. El momento en que deja de ser hábito, empieza a perderse.",
      },
    ],
    checklist: [
      {
        id: "d30-c1",
        label: "Tuve el momento de gratitud del día 30",
        descripcion: "Miré a mi hijo 30 segundos con toda mi presencia y le agradecí",
      },
      {
        id: "d30-c2",
        label: "Jugué el juego más significativo del programa",
        descripcion: "El que más avance generó o el que más conectó nuestras historias",
      },
      {
        id: "d30-c3",
        label: "Escribí mi Plan de Mantenimiento",
        descripcion: "El juego semanal, la rutina diaria y la fecha de revisión",
      },
      {
        id: "d30-c4",
        label: "Escribí la Carta a la Mamá del Día 1",
        descripcion: "Honré mi propio camino con palabras escritas",
      },
    ],
    indicadoresProgreso: [
      "Puedes nombrar 5 herramientas de lenguaje que usas naturalmente todos los días",
      "Tu hijo tiene ahora más gestos, sonidos o palabras que al inicio del programa",
      "Los momentos de conexión durante el juego son más frecuentes y más largos",
    ],
    consejoDia:
      "Si tu hijo todavía no ha dicho su primera palabra, no te desanimes. El lenguaje tiene su propio tiempo. Lo que sí cambió es la calidad de la conexión entre ustedes, la frecuencia del lenguaje en el hogar, y tu confianza como cuidadora. Eso ya es transformación. Habla con tu pediatra o un especialista en comunicación si tienes preguntas sobre el progreso.",
    fraseMotivacional:
      "Treinta días. No con perfección — con amor. No con constancia inquebrantable — con una mamá real, cansada a veces, dudosa a veces, pero siempre, siempre, eligiendo a su hijo. Eso eres tú. Y eso, querida mamá, es exactamente suficiente. Más que suficiente. Es todo.",
    erroresComunes: [
      {
        error: "Cerrar el programa y volver exactamente a como era antes",
        reencuadre:
          "No necesitas mantener las 15 sesiones diarias. Solo necesitas conservar 3 cosas: la narración de una rutina, el eco de sus vocalizaciones, y una sesión de juego por semana. Con eso, el progreso continúa.",
      },
      {
        error: "Sentir que fallaste si el niño todavía no habla",
        reencuadre:
          "El lenguaje tiene su tiempo. Lo que sí ocurrió en 30 días es la construcción del andamiaje: la conexión, los gestos, la comprensión, la confianza. Las palabras vienen sobre ese andamiaje. Tú construiste algo invisible pero sólido. Confía.",
      },
    ],
    imagePromptHint:
      "LATAM mother holding her toddler in her arms, both looking at the camera with warm smiles, mother's eyes full of pride and love, home background with colorful details, golden hour light, sense of completion and joy, one hand of the child touching mother's face.",
  },

];

export function getDayContent(day: number): DayContent | undefined {
  return PROGRAM_DATA.find((d) => d.day === day);
}
