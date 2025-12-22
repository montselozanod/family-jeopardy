export interface Question {
  id: number;
  categoryId: string;
  q: string;
  a: string;
  points: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'frases-famosas', name: '💬 Frases Famosas', color: 'bg-purple-600' },
  { id: 'historia', name: '📚 Historia Familiar', color: 'bg-amber-600' },
  { id: 'anecdotas', name: '😂 Anécdotas Legendarias', color: 'bg-pink-600' },
  { id: 'cultura-familiar', name: '🏠 Cultura Familiar', color: 'bg-teal-600' },
  { id: 'lugares', name: '📍 Lugares y Viajes', color: 'bg-blue-600' },
  { id: 'personajes', name: '👥 Personajes Memorables', color: 'bg-red-600' },
  { id: 'retos-especiales', name: '⭐ Retos Especiales', color: 'bg-yellow-600' }
];

export const questions: Question[] = [
  // Frases Famosas
  { id: 1, categoryId: 'frases-famosas', q: 'Cuando robaron los manteles de la casa de Privada Río Sena, ¿qué dijo el abuelito?', a: '"Que lo aprovechen"', points: 100 },
  { id: 2, categoryId: 'frases-famosas', q: '¿Cuál era la frase clásica del tío Alito a Moris?', a: '"¿Y quién te dijo?"', points: 100 },
  { id: 3, categoryId: 'frases-famosas', q: 'Completa la frase: "Si a presidente quieres llegar..."', a: '"...Wellington debes usar"', points: 150 },
  { id: 4, categoryId: 'frases-famosas', q: '¿Qué le decía Fany a Buchita cuando la recogía del Bilingüe La Silla?', a: '"Tlae Linelo"', points: 150 },
  { id: 5, categoryId: 'frases-famosas', q: 'Alito ya llevaba 5 tortas. ¿Qué respondió JB Matar cuando le preguntaron si iba a agarrar más?', a: '"No es necesario tanto"', points: 200 },
  { id: 6, categoryId: 'frases-famosas', q: 'Menciona las 2 frases más icónicas del abuelito', a: '"Puro pájaro nalgón" e "Hijo de la guayaba"', points: 200 },
  { id: 7, categoryId: 'frases-famosas', q: '¿Qué coreaban los primos cada que se acercaba la Navidad?', a: '"¡Intercambio, intercambio, intercambio!"', points: 250 },
  { id: 8, categoryId: 'frases-famosas', q: '¿Qué decía mi Alf cuando llamaba a casa de los Dieck Hugler?', a: '"Me invitas o te invito"', points: 250 },
  { id: 9, categoryId: 'frases-famosas', q: 'Tio Mauricio conoció a la tía Lula por primera vez. ¿Qué dijo?', a: '"Qué cambiado está la tía Bellita"', points: 300 },
  { id: 10, categoryId: 'frases-famosas', q: '¿Qué decía Buchita cuando ella encontraba algo que tu antes habías buscado y no lo encontraste?', a: '"Si fuera víbora ya te hubiera picado"', points: 400 },
  { id: 11, categoryId: 'frases-famosas', q: '¿Quién dijo: "No entiendo por qué México no gana el mundial si tenemos al Guille que es una superestrella"?', a: 'Mapy', points: 400 },

  // Historia Familiar
  { id: 10, categoryId: 'historia', q: 'Menciona UN restaurante donde pasamos Año Nuevo', a: 'Mirador, Magic Time Machine, Cheesecake Factory o Macaroni Grill', points: 100 },
  { id: 11, categoryId: 'historia', q: '¿Cuántos nietos tiene Siti en total?', a: '22 nietos', points: 100 },
  { id: 12, categoryId: 'historia', q: '¿En qué iglesia se casaron Siti y el abuelito?', a: 'La Purísima', points: 100 },
  { id: 13, categoryId: 'historia', q: '¿En qué pueblo del Líbano nació el abuelito Rachid?', a: 'Baicun, Líbano', points: 150 },
  { id: 14, categoryId: 'historia', q: '¿A qué ciudad mexicana llegó el abuelito Rachid en barco y cuántos años tenía?', a: 'Tampico, tenía 15 años', points: 150 },
  { id: 15, categoryId: 'historia', q: '¿En qué ciudad nació la abuelita Elenita?', a: 'Ciudad Victoria', points: 150 },
  { id: 16, categoryId: 'historia', q: '¿Cuál es el nombre completo de Buchita?', a: 'Tiburcia Camacho Ortiz', points: 200 },
  { id: 17, categoryId: 'historia', q: '¿En qué mes y año se mudó la familia a Privada Río Sena?', a: 'Enero de 2007', points: 200 },
  { id: 18, categoryId: 'historia', q: '¿Cómo se llamaba la mamá del abuelito Chano?', a: 'Margarita', points: 300 },
  { id: 19, categoryId: 'historia', q: '¿En qué colegio estudió la primaria el abuelito Chano?', a: 'Colegio Franco Mexicano', points: 300 },
  { id: 20, categoryId: 'historia', q: '¿Qué presidente de México era amigo personal del abuelito Chano?', a: 'Gustavo Díaz Ordaz', points: 350 },
  { id: 21, categoryId: 'historia', q: '¿A qué líder internacional conoció el abuelito Chano?', a: 'Fidel Castro', points: 350 },
  { id: 44, categoryId: 'historia', q: '¿Cómo se llamaba la tienda de telas del abuelito Rachid?', a: 'Telas Primavera', points: 400 },
  { id: 22, categoryId: 'historia', q: 'Menciona AL MENOS 3 primos que NO se casaron en Monterrey', a: 'Lulita, Coki, Neto, Pedrito, Alf (cualquier 3 son correctos)', points: 200 },

  // Anécdotas Legendarias
  { id: 23, categoryId: 'anecdotas', q: '¿En qué año tuvimos que pasar la fiesta de Navidad en el hospital?', a: '2010', points: 100 },
  { id: 24, categoryId: 'anecdotas', q: 'En el cumpleaños de pesca de Samuel, ¿cuántos peces se pescaron en total?', a: '0 (cero) - ¡Ni uno!', points: 100 },
  { id: 26, categoryId: 'anecdotas', q: '¿A quién olvidaron en el cumpleaños de pesca de Samuel?', a: 'A Farid', points: 150 },
  { id: 29, categoryId: 'anecdotas', q: '¿Quién tuvo que hacer 50 push-ups como castigo en el campamento porque le acusaron de tirar el basurero?', a: 'Mi Alf', points: 250 },
  { id: 30, categoryId: 'anecdotas', q: '¿Si el Alf no tiro el basurero, quien realmente lo hizo?', a: 'Farid', points: 250 },
  { id: 31, categoryId: 'anecdotas', q: '¿Qué familias estuvieron a punto de hundirse en un submarino en Islas Caimán?', a: 'Familia Dieck Assam y Lozano Dieck', points: 200 },
  { id: 32, categoryId: 'anecdotas', q: '¿Quién subió una botella de vodka a la silla del abuelito en el crucero? (Él pensó que era agua)', a: 'Coki', points: 250 },
  { id: 33, categoryId: 'anecdotas', q: '¿Quién se hizo pasar por Marce diciendo "Hola soy Marce, estoy malita, quiero a mi mami"?', a: 'Alf', points: 250 },
  { id: 34, categoryId: 'anecdotas', q: '¿Qué condición decía Flety que tenía al tratar de levantarse pero nadie le creía?', a: 'Parálisis del sueño', points: 250 },
  { id: 34, categoryId: 'anecdotas', q: '¿De qué hotel corrieron a los primos por comerse pizzas que no eran suyas?', a: 'Embassy Suites en McAllen', points: 300 },
  { id: 35, categoryId: 'anecdotas', q: 'Flety le cambió el fondo de pantalla a Siti. ¿De quién era la foto y qué dijo Siti al verla?', a: 'Flavor Flav - Siti dijo: "¿Quién es ese viejo tan feo?"', points: 300},
  { id: 35, categoryId: 'anecdotas', q: '¿Quién se escondia en los rackets de ropa y quitaba las etiquetas de las tiendas cuando era chica?', a: 'Josephine', points: 350 },
  { id: 36, categoryId: 'anecdotas', q: '¿Quién leía las etiquetas de los juguetes en las tiendas y decía "¿Esto es para <y decía su nombre>?"?', a: 'Lulita', points: 350 },
  { id: 37, categoryId: 'anecdotas', q: 'En el crucero, ¿qué dos familiares le pedían al Alf que esperara la pizza mientras ellos se dormían? (Por eso se aprendió todos los anuncios de la tele)', a: 'Tony y Coki', points: 300 },
  { id: 38, categoryId: 'anecdotas', q: '¿Quién le bajó 3 aguas de horchata a la Panga y además fue candidato a alcalde de San Pedro?', a: 'Manuel Pichón', points: 300 },
  { id: 39, categoryId: 'anecdotas', q: '¿Qué miembro de la familia fue jugador #1 a nivel mundial en el videojuego Tibia?', a: 'Farid/Samuel - su personaje era "Mini Archer"', points: 400 },

  // Cultura Familiar
  { id: 40, categoryId: 'cultura-familiar', q: '¿Qué juego de mesa jugábamos tradicionalmente en Año Nuevo?', a: 'Monopoly', points: 100 },
  { id: 41, categoryId: 'cultura-familiar', q: '¿Qué significa "marmaja"?', a: 'Dinero / Alguien con dinero', points: 200},
  { id: 42, categoryId: 'cultura-familiar', q: '¿Cómo se llama el libro que escribió Siti?', a: 'Rácimo de Cuentos', points: 150 },
  { id: 43, categoryId: 'cultura-familiar', q: '¿Cuáles eran los tacos favoritos del abuelito Chano y la Mawita?', a: 'El Palmito', points: 150 },
  { id: 45, categoryId: 'cultura-familiar', q: '¿Cómo se llama la hermana más chiquita de Siti?', a: 'Polly', points: 150 },
  { id: 46, categoryId: 'cultura-familiar', q: '¿Qué palabra de la familia usamos para decir "naco"?', a: 'Chabuz', points: 200 },
  { id: 46, categoryId: 'cultura-familiar', q: '¿Qué animal significa el apellido "Dieck" en árabe?', a: 'Gallo ديك', points: 250 },
  { id: 47, categoryId: 'cultura-familiar', q: '¿Qué animal significa el apellido "Assad" en árabe?', a: 'León أسد', points: 250 },
  { id: 48, categoryId: 'cultura-familiar', q: 'Menciona UN plantillo que nunca faltaba los sábados en casa de Siti, hecho por Buch', a: 'Tostadas u Hojas de parra', points: 200 },
  { id: 49, categoryId: 'cultura-familiar', q: '¿Cómo le decía de cariño el abuelito Chano a Siti?', a: '"La hermana de la caridad"', points: 150 },
  { id: 50, categoryId: 'cultura-familiar', q: '¿Cómo le decimos de cariño a la tía Conchita y sus hijas, y por qué?', a: '"Las Tiburtinas" - porque viven en Via Tiburtina', points: 200 },
  { id: 51, categoryId: 'cultura-familiar', q: '¿Qué significa la palabra árabe "Haram"?', a: 'Pobrecito / Cositas', points: 250 },
  { id: 52, categoryId: 'cultura-familiar', q: '¿Quién inventó la expresión "casa todos"?', a: 'Coki', points: 250 },
  { id: 53, categoryId: 'cultura-familiar', q: '¿Qué familiar leía el futuro en los restos del café?', a: 'Siti', points: 250 },
  { id: 54, categoryId: 'cultura-familiar', q: '¿Cómo se llamaba el kinder cerca de casa de Siti al que fueron muchos primos?', a: 'Kinder Gabriela Mistral', points: 300 },
  { id: 55, categoryId: 'cultura-familiar', q: '¿Qué familiar tiene DOS cumpleaños? ¿En qué fechas?', a: 'Abuelito Chano - 4 de julio y 18 de agosto', points: 400 },
  
  // Lugares y Viajes
  { id: 56, categoryId: 'lugares', q: '¿Cuál es la dirección exacta de la casa de la familia Dieck Assad de McAllen?', a: 'Esperanza 600', points: 100 },
  { id: 57, categoryId: 'lugares', q: 'Menciona el nombre de uno de los hoteles donde se hospedaba la familia en la Isla del Padre', a: 'El Tiki o La Internacional', points: 150 },
  { id: 58, categoryId: 'lugares', q: '¿Cómo se llamaba el hotel en San Antonio donde siempre nos quedábamos?', a: 'Home Gate', points: 200 },
  { id: 28, categoryId: 'anecdotas', q: '¿Quién rompió una maceta en el hotel de San Antonio?', a: 'Enitis', points: 200 },
  { id: 59, categoryId: 'lugares', q: '¿En qué lugar celebraron Siti y el abuelito sus 50 años de casados?', a: 'En el Palestino', points: 200 },
  { id: 25, categoryId: 'lugares', q: '¿A quién olvidaron en la cima del Cerro de la Bufa en Zacatecas?', a: 'A la tía Salma', points: 150 },
  { id: 27, categoryId: 'lugares', q: '¿Cómo se llamaba el crucero de año nuevo?', a: 'Rhapsody of the Seas', points: 200 },
  { id: 60, categoryId: 'lugares', q: '¿Cómo se llamaba el supermercado frente a la iglesia El Rosario cerca de casa de Siti?', a: 'La Palanca (después se convirtió en Super Roma)', points: 250 },
  { id: 61, categoryId: 'lugares', q: '¿Cómo se llamaba la guía de turistas en el viaje a Rusia? ¿Qué pensábamos que era?', a: 'Varda - pensábamos que era espía rusa', points: 300 },
  { id: 62, categoryId: 'lugares', q: '¿Qué apodo le puso tío Pedro a la ciudad de Monterrey?', a: '"La caldera del diablo"', points: 400 },

  // Personajes Memorables
  { id: 63, categoryId: 'personajes', q: '¿Cómo se llama la mascota de Lulita y Alessandro?', a: 'Merlino', points: 100 },
  { id: 64, categoryId: 'personajes', q: 'Menciona DOS familiares que sean aficionados de los Tigres', a: 'Moris y Farid', points: 100 },
  { id: 65, categoryId: 'personajes', q: '¿Quién manejaba el puesto de pasteles en la kermes del Colegio Regiomontano?', a: 'Siti', points: 150 },
  { id: 66, categoryId: 'personajes', q: '¿Qué tío es cinéfilo por excelencia y con quien muchos primos se juntaban a ver películas?', a: 'Tío Pedro', points: 150},
  { id: 66, categoryId: 'personajes', q: '¿Cómo se llamaba el profesor del Regio Contry que iba a quejarse con Siti de la conducta de sus hijos?', a: 'El profesor Roibal', points: 200 },
  { id: 67, categoryId: 'personajes', q: '¿Cuál miembro de la familia fue Presidente del club de fans de One Direction en México?', a: 'Mapy', points: 300},
  { id: 67, categoryId: 'personajes', q: '¿Cómo se llamaba el chofer que hacía destrozos en las paredes del Centro Médico del Hospital San José?', a: 'Miguel / Miguelón', points: 200 },
  { id: 68, categoryId: 'personajes', q: '¿Quién era él/la gran consentida de Buchita?', a: 'Marce', points: 250 },
  { id: 69, categoryId: 'personajes', q: '¿Qué sacerdote casó a Neto y Wendy?', a: 'Padre Pedro', points: 250 },
  { id: 70, categoryId: 'personajes', q: '¿Cómo se llamaba la primera esposa del Tío Momo?', a: 'Tía Bellita', points: 300 },
  { id: 71, categoryId: 'personajes', q: '¿Qué familiar fue embajador de México ante la Unión Europea?', a: 'Tía Luly', points: 300 },

  // Retos Especiales
  { id: 72, categoryId: 'retos-especiales', q: '🎵 RETO MUSICAL: Canten la canción de Mapy que inventó Tío Neto', a: '"Ay María Paula... qué niña tan buena, yo la quiero mucho, mucho de verdad"', points: 200 },
  { id: 73, categoryId: 'retos-especiales', q: '¿De qué trataba la obra de Navidad que actuamos de niños dirigida por Josephine y Lulita?', a: 'Un niño rico es llevado por ángeles a casa de una familia pobre para enseñarle que la Navidad no se trata de regalos', points: 300 },
  { id: 74, categoryId: 'retos-especiales', q: 'En la obra de Navidad, ¿quiénes eran la familia rica y quiénes la familia pobre?', a: 'FAMILIA RICA: Neni, Samuel y Farid | FAMILIA POBRE: Flety, Mariangela y Marce', points: 350 },
  { id: 75, categoryId: 'retos-especiales', q: '¿Cómo se llama y en qué ciudad nació la nieta mayor de Siti?', a: 'La Nena - Nació en Austin', points: 250 },
  { id: 76, categoryId: 'retos-especiales', q: '¿Qué dos bisnietos de Siti cumplen años el mismo día?', a: 'Tony bebé y Elen', points: 250 },
  { id: 77, categoryId: 'retos-especiales', q: '¿Cómo se llamaba el campamento de basquetbol al que íbamos de niños?', a: 'Spurs o Crusander', points: 300 },
  { id: 78, categoryId: 'retos-especiales', q: '¿A qué empresa de tecnología se fue a trabajar Samy cuando se mudó a Austin?', a: 'National Instruments', points: 350 },
  { id: 79, categoryId: 'retos-especiales', q: 'Coki y sus amigos le pagaron un boleto de avión a este personaje para visitar a Tafich en Vancouver. ¿Quién era y qué dijo cuando finalmente lo corrió Tafich?', a: 'Manuel Pichón - "Aquí están tus llaves, tiradas a la suerte como me tiraste a mí, puñetas"', points: 350 },
  { id: 80, categoryId: 'retos-especiales', q: '🎙️ PREGUNTA FINAL: ¿Quién es el compañero de podcast del tío Mauricio?', a: 'Alex Porras', points: 400 }
];

// Helper function to get questions by category
export const getQuestionsByCategory = (categoryId: string): Question[] => {
  return questions.filter(q => q.categoryId === categoryId);
};
