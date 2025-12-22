export interface Question {
  q: string;
  a: string;
  points: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: 'frases-famosas',
    name: '💬 Frases Famosas',
    color: 'bg-purple-600',
    questions: [
      {
        q: 'Cuando robaron los manteles de la casa de Privada Río Sena, ¿qué dijo el abuelito?',
        a: '"Que lo aprovechen"',
        points: 100
      },
      {
        q: '¿Cuál era la frase clásica del tío Alito a Moris?',
        a: '"¿Y quién te dijo?"',
        points: 100
      },
      {
        q: 'Completa la frase: "Si a presidente quieres llegar..."',
        a: '"...Wellington debes usar"',
        points: 150
      },
      {
        q: '¿Qué le decía Fany a Buchita cuando la recogía del Bilingüe La Silla?',
        a: '"Tlae Linelo"',
        points: 150
      },
      {
        q: 'Alito ya llevaba 5 tortas. ¿Qué respondió JB Matar cuando le preguntaron si iba a agarrar más?',
        a: '"No es necesario tanto"',
        points: 200
      },
      {
        q: 'Menciona las 2 frases más icónicas del abuelito',
        a: '"Puro pájaro nalgón" e "Hijo de la guayaba"',
        points: 200
      },
      {
        q: '¿Qué coreaban los primos cada que se acercaba la Navidad?',
        a: '"¡Intercambio, intercambio, intercambio!"',
        points: 250
      },
      {
        q: '¿Qué decía mi Alf cuando llamaba a casa de los Dieck Hugler?',
        a: '"Me invitas o te invito"',
        points: 250
      },
      {
        q: 'La Mawita conoció a la tía Lula por primera vez. ¿Qué dijo?',
        a: '"Qué cambiado está la tía Bellita"',
        points: 300
      }
    ]
  },
  {
    id: 'historia',
    name: '📚 Historia Familiar',
    color: 'bg-amber-600',
    questions: [
    {
     q: 'Menciona UN restaurante donde pasamos Año Nuevo',
     a: 'Mirador, Magic Time Machine, Cheesecake Factory o Macaroni Grill',
     points: 100
    },
      {
        q: '¿Cuántos nietos tiene Siti en total?',
        a: '22 nietos',
        points: 100
      },
      {
        q: '¿En qué iglesia se casaron Siti y el abuelito?',
        a: 'La Purísima',
        points: 100
      },
      {
        q: '¿En qué pueblo del Líbano nació el abuelito Rachid?',
        a: 'Baicun, Líbano',
        points: 150
      },
      {
        q: '¿A qué ciudad mexicana llegó el abuelito Rachid en barco y cuántos años tenía?',
        a: 'Tampico, tenía 15 años',
        points: 150
      },
      {
        q: '¿En qué ciudad nació la abuelita Elenita?',
        a: 'Ciudad Victoria',
        points: 150
      },
      {
        q: '¿Cuál es el nombre completo de Buchita?',
        a: 'Tiburcia Camacho Ortiz',
        points: 200
      },
      {
        q: '¿En qué mes y año se mudó la familia a Privada Río Sena?',
        a: 'Enero de 2007',
        points: 200
      },
      {
        q: '¿Cómo se llamaba la mamá del abuelito Chano?',
        a: 'Margarita',
        points: 300
      },
      {
        q: '¿En qué colegio estudió la primaria el abuelito Chano?',
        a: 'Colegio Franco Mexicano',
        points: 300
      },
      {
        q: '¿Qué presidente de México era amigo personal del abuelito Chano?',
        a: 'Gustavo Díaz Ordaz',
        points: 350
      },
      {
        q: '¿Qué líder político internacional conoció el abuelito Chano?',
        a: 'Fidel Castro',
        points: 350
      },
      {
        q: 'Menciona AL MENOS 3 primos que NO se casaron en Monterrey',
        a: 'Lulita, Coki, Neto, Pedrito, Alf (cualquier 3 son correctos)',
        points: 250
}
    ]
  },
  {
    id: 'anecdotas',
    name: '😂 Anécdotas Legendarias',
    color: 'bg-pink-600',
    questions: [
      {
        q: '¿En qué año tuvimos que pasar la fiesta de Navidad en el hospital?',
        a: '2010',
        points: 100
      },
      {
        q: 'En el cumpleaños de pesca de Samuel, ¿cuántos peces se pescaron en total?',
        a: '0 (cero) - ¡Ni uno!',
        points: 100
      },
      {
        q: '¿A quién olvidaron en la cima del Cerro de la Bufa en Zacatecas?',
        a: 'A la tía Salma',
        points: 150
      },
      {
        q: '¿A quién olvidaron en el cumpleaños de pesca de Samuel?',
        a: 'A Farid',
        points: 150
      },
      {
        q: '¿Cómo se llamaba el crucero de año nuevo?',
        a: 'Rhapsody of the Seas',
        points: 200
      },
      {
        q: '¿Quién rompió una maceta en el hotel Home Gate de San Antonio?',
        a: 'Enitis',
        points: 200
    },
    {
        q: '¿Quién tuvo que hacer 50 push-ups como castigo en el campamento porque le acusaron de tirar el basurero?',
        a: 'Mi Alf',
        points: 250
      },
      {
        q: '¿Si el Alf no tiro el basurero, quien realmente lo hizo?',
        a: 'Farid',
        points: 250
      },
      {
        q: '¿Qué familias estuvieron a punto de hundirse en un submarino en Islas Caimán?',
        a: 'Familia Dieck Assam y Lozano Dieck',
        points: 200
      },
      {
        q: '¿Quién subió una botella de vodka a la silla del abuelito en el crucero? (Él pensó que era agua)',
        a: 'Coki',
        points: 250
      },
      {
        q: '¿Quién se hizo pasar por Marce diciendo "Hola soy Marce, estoy malita, quiero a mi mami"?',
        a: 'Alf',
        points: 250
      },
      {
        q: '¿De qué hotel corrieron a los primos por comerse pizzas que no eran suyas?',
        a: 'Embassy Suites en McAllen',
        points: 300
      },
      {
        q: '¿Quién se escondia en los rackets de ropa de las tiendas cuando era chica?',
        a: 'Josephine',
        points: 350
      },
      {
        q: '¿Quién leía las etiquetas de los juguetes en las tiendas y decía "¿Esto es para <nombre de la persona>?"?',
        a: 'Lulita',
        points: 350
      },
      {
        q: 'En el crucero, ¿qué dos familiares le pedían al Alf que esperara la pizza mientras ellos se dormían? (Por eso se aprendió todos los anuncios de la tele)',
        a: 'Tony y Coki',
        points: 300
    },
      {
        q: '¿Quién le bajó 3 aguas de horchata a la Panga y además fue candidato a alcalde de San Pedro?',
        a: 'Manuel Pichón',
        points: 300
      },
      {
        q: '¿Qué miembro de la familia fue jugador #1 a nivel mundial en el videojuego Tibia?',
        a: 'Farid/Samuel - su personaje era "Mini Archer"',
        points: 400
      }
    ]
  },
  {
    id: 'cultura-familiar',
    name: '🏠 Cultura Familiar',
    color: 'bg-teal-600',
    questions: [
        {
         q: '¿Qué juego de mesa jugábamos tradicionalmente en Año Nuevo?',
         a: 'Monopoly',
         points: 100
      },
      {
        q: '¿Cómo se llama el libro que escribió Siti?',
        a: 'Rácimo de Cuentos',
        points: 150
      },
      {
        q: '¿Cuáles eran los tacos favoritos del abuelito Chano y la Mawita?',
        a: 'El Palmito',
        points: 150
      },
      {
        q: '¿Cómo se llamaba la tienda de telas del abuelito Rachid?',
        a: 'Telas Primavera',
        points: 150
      },
      {
        q: '¿Cómo se llama la hermana más chiquita de Siti?',
        a: 'Polly',
        points: 150
      },
      {
        q: '¿Qué palabra de la familia usamos para decir "naco"?',
        a: 'Chabuz',
        points: 200
      },
      {
        q: '¿Qué animal significa el apellido "Dieck" en árabe?',
        a: 'Gallo ديك',
        points: 250
      },
      {
        q: '¿Qué animal significa el apellido "Assad" en árabe?',
        a: 'León أسد',
        points: 250
      },
      {
        q: 'Menciona UN plantillo que nunca faltaba los sábados en casa de Siti, hecho por Buch',
        a: 'Tostadas u Hojas de parra',
        points: 200
    },
      {
        q: '¿Cómo le decimos de cariño a la tía Conchita y sus hijas, y por qué?',
        a: '"Las Tiburtinas" - porque viven en Via Tiburtina',
        points: 200
    },
      {
        q: '¿Qué significa la palabra árabe "Haram"?',
        a: 'Pobrecito / Cositas',
        points: 250
      },
      {
        q: '¿Quién inventó la expresión "casa todos"?',
        a: 'Coki',
        points: 250
      },
      {
        q: '¿Qué familiar leía el futuro en los restos del café?',
        a: 'Siti',
        points: 250
      },
      {
        q: '¿Cómo se llamaba el kinder cerca de casa de Siti al que fueron muchos primos?',
        a: 'Kinder Gabriela Mistral',
        points: 300
      },
      {
        q: '¿Qué familiar tiene DOS cumpleaños? ¿En qué fechas?',
        a: 'Abuelito Chano - 4 de julio y 18 de agosto',
        points: 400
      }
    ]
  },
  {
    id: 'lugares',
    name: '📍 Lugares y Viajes',
    color: 'bg-blue-600',
    questions: [
      {
        q: '¿Cuál es la dirección exacta de la casa de la familia Dieck Assad de McAllen?',
        a: 'Esperanza 600',
        points: 100
      },
      {
        q: 'Menciona el nombre de uno de los hoteles donde se hospedaba la familia en la Isla del Padre',
        a: 'El Tiki o La Internacional',
        points: 150
      },
      {
        q: '¿Cómo se llamaba el hotel en San Antonio donde siempre nos quedábamos?',
        a: 'Home Gate',
        points: 200
      },
      {
        q: '¿En qué lugar celebraron Siti y el abuelito sus 50 años de casados?',
        a: 'En el Palestino',
        points: 200
      },
      {
        q: '¿Cómo se llamaba el supermercado frente a la iglesia El Rosario cerca de casa de Siti?',
        a: 'La Palanca (después se convirtió en Super Roma)',
        points: 250
      },
      {
        q: '¿Cómo se llamaba la guía de turistas en el viaje a Rusia? ¿Qué pensábamos que era?',
        a: 'Varda - pensábamos que era espía rusa',
        points: 300
      },
      {
        q: '¿Qué apodo le puso tío Pedro a la ciudad de Monterrey?',
        a: '"La caldera del diablo"',
        points: 400
      }
    ]
  },
  {
    id: 'personajes',
    name: '👥 Personajes Memorables',
    color: 'bg-red-600',
    questions: [
      {
        q: '¿Cómo se llama la mascota de Lulita y Alessandro?',
        a: 'Merlino',
        points: 100
      },
      {
        q: 'Menciona DOS familiares que sean aficionados de los Tigres',
        a: 'Moris y Farid',
        points: 100
      },
      {
        q: '¿Quién manejaba el puesto de pasteles en la kermes del Colegio Regiomontano?',
        a: 'Siti',
        points: 150
      },
      {
        q: '¿Cómo se llamaba el profesor del Regio Contry que iba a quejarse con Siti de la conducta de sus hijos?',
        a: 'El profesor Roibal',
        points: 200
      },
      {
        q: '¿Cómo se llamaba el chofer que hacía destrozos en las paredes del Centro Médico del Hospital San José?',
        a: 'Miguel / Miguelón',
        points: 200
      },
      {
        q: '¿Quién era él/la gran consentida de Buchita?',
        a: 'Marce',
        points: 250
      },
      {
        q: '¿Qué sacerdote casó a Neto y Wendy?',
        a: 'Padre Pedro',
        points: 250
      },
      {
        q: '¿Cómo se llamaba la primera esposa del Tío Momo?',
        a: 'Tía Bellita',
        points: 300
      },
      {
        q: '¿Qué familiar fue embajador de México ante la Unión Europea?',
        a: 'Tía Luly',
        points: 300
      }
    ]
  },
  {
    id: 'retos-especiales',
    name: '⭐ Retos Especiales',
    color: 'bg-yellow-600',
    questions: [
      {
        q: '🎵 RETO MUSICAL: Canten la canción de Mapy que inventó Tío Neto',
        a: '"Ay María Paula... qué niña tan buena, yo la quiero mucho, mucho de verdad"',
        points: 200
      },
      {
        q: '¿De qué trataba la obra de Navidad que actuamos de niños dirigida por Josephine y Lulita?',
        a: 'Un niño rico es llevado por ángeles a casa de una familia pobre para enseñarle que la Navidad no se trata de regalos',
        points: 300
      },
      {
        q: 'RETO TEATRAL: En la obra de Navidad, ¿quiénes eran la familia rica y quiénes la familia pobre?',
        a: 'FAMILIA RICA: Neni, Samuel y Farid | FAMILIA POBRE: Flety, Mariangela y Marce',
        points: 350
      },
      {
        q: '¿Cómo se llama y en qué ciudad nació la nieta mayor de Siti?',
        a: 'La Nena - Nació en Austin',
        points: 250
      },
      {
        q: '¿Qué dos bisnietos de Siti cumplen años el mismo día?',
        a: 'Tony bebé y Elen',
        points: 250
      },
      {
        q: '¿Cómo se llamaba el campamento de basquetbol al que íbamos de niños?',
        a: 'Spurs o Crusandaer',
        points: 300
      },
      {
        q: '¿A qué empresa de tecnología se fue a trabajar Samy cuando se mudó a Austin?',
        a: 'National Instruments',
        points: 350
      },
      {
        q: 'Coki y sus amigos le pagaron un boleto de avión a este personaje para visitar a Tafich en Vancouver. ¿Quién era y qué dijo cuando finalmente lo corrió Tafich?',
        a: 'Manuel Pichón - "Aquí están tus llaves, tiradas a la suerte como me tiraste a mí, puñetas"',
        points: 350
    },
      {
        q: '🎙️ PREGUNTA FINAL: ¿Quién es el compañero de podcast de la Mawita?',
        a: 'Alex Porras',
        points: 400
      }
    ]
  }
];
