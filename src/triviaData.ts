export interface MediaContent {
  type: 'image' | 'video' | 'youtube';
  url: string;
  caption?: string;
  showWith: 'question' | 'answer' | 'both';
}

export interface Question {
  id: number;
  categoryId: string;
  q: string;
  a: string;
  points: number;
  media?: MediaContent;
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
  { id: 'personajes', name: '👥 Personajes Memorables', color: 'bg-red-600' }
];

export const questions: Question[] = [
  // Frases Famosas (1-14)
  { id: 1, categoryId: 'frases-famosas', q: 'Cuando robaron los manteles de la casa de Privada Río Sena, ¿qué dijo el abuelito?', a: '"Que lo aprovechen"', points: 100 },
  { id: 2, categoryId: 'frases-famosas', q: '¿Cuál era la frase clásica del tío Alito a Moris?', a: '"¿Y quién te dijo?"', points: 100 },
  { id: 3, categoryId: 'frases-famosas', q: 'Completa la frase: "Si a presidente quieres llegar..."', a: '"...Wellington debes usar"', points: 150 },
  { id: 4, categoryId: 'frases-famosas', q: '¿Qué le decía Fany a Buchita cuando la recogía del Bilingüe La Silla?', a: '"Tlae Linelo"', points: 150 },
  { id: 5, categoryId: 'frases-famosas', q: 'Alito ya llevaba 5 tortas. ¿Qué respondió JB Matar cuando le preguntaron si iba a agarrar más?', a: '"No es necesario tanto"', points: 200 },
  { id: 6, categoryId: 'frases-famosas', q: 'Menciona las 2 frases más icónicas del abuelito', a: '"Puro pájaro nalgón" e "Hijo de la guayaba"', points: 200 },
  { id: 7, categoryId: 'frases-famosas', q: '¿Qué coreaban los primos cada que se acercaba la Navidad?', a: '"¡Intercambio, intercambio, intercambio!"', points: 250 },
  { id: 8, categoryId: 'frases-famosas', q: '¿Qué decía mi Alf cuando llamaba a casa de los Dieck Hugler?', a: '"Me invitas o te invito"', points: 250 },
  { id: 9, categoryId: 'frases-famosas', q: 'Tio Mauricio conoció a la tía Lula por primera vez. ¿Qué dijo?', a: '"Qué cambiado está la tía Bellita"', points: 300 },
  { id: 10, categoryId: 'frases-famosas', q: 'Completa la frase: "Trabajando duro o..."', a: '"Durando en el trabajo"', points: 350 },
  { id: 11, categoryId: 'frases-famosas', q: '¿Qué decía Buchita cuando ella encontraba algo que tu antes habías buscado y no lo encontraste?', a: '"Si fuera víbora ya te hubiera picado"', points: 400 },
  { id: 12, categoryId: 'frases-famosas', q: '¿Quién dijo: "No entiendo por qué México no gana el mundial si tenemos al Guille que es una superestrella"?', a: 'Mapy', points: 400 },
  { id: 13, categoryId: 'frases-famosas', q: '¿Qué dijo Tía Nena al naranjero para incitarlo a comprar dulces?', a: '"Si no nos compra dulces, le voy a decir a mi mama que no le compre naranjas"', points: 450 },
  { id: 14, categoryId: 'frases-famosas', q: 'Durante un viaje a McAllen, Tío Mauricio estaba llorando porque quería ir a la juguetería. Siti comenzó a contarle una larga historia sobre el futuro (escuela, graduación, matrimonio, tienda de vestidos de novia). ¿Cuál fue la frase exacta de Tío Mauricio cuando Siti terminó su relato sobre crecer?', a: 'No, yo no quiero crecer. Yo quiero ser siempre niño.', points: 450 },

  // Historia Familiar (15-29)
  { id: 15, categoryId: 'historia', q: 'Menciona UN restaurante donde pasamos Año Nuevo', a: 'Mirador, Magic Time Machine, Cheesecake Factory o Macaroni Grill', points: 100 },
  { id: 16, categoryId: 'historia', q: '¿Cuántos nietos tiene Siti en total?', a: '22 nietos', points: 100 },
  { id: 17, categoryId: 'historia', q: '¿En qué iglesia se casaron Siti y el abuelito?', a: 'La Purísima', points: 100 },
  { id: 18, categoryId: 'historia', q: '¿Cómo se llama y en qué ciudad nació la nieta mayor de Siti?', a: 'La Nena - Nació en Austin', points: 150 },
  { id: 19, categoryId: 'historia', q: '¿En qué pueblo del Líbano nació el abuelito Rachid?', a: 'Baicun, Líbano', points: 150 },
  { id: 20, categoryId: 'historia', q: '¿A qué ciudad mexicana llegó el abuelito Rachid en barco y cuántos años tenía?', a: 'Tampico, tenía 15 años', points: 150 },
  { id: 21, categoryId: 'historia', q: '¿En qué ciudad nació la abuelita Elenita?', a: 'Ciudad Victoria', points: 150 },
  { id: 22, categoryId: 'historia', q: '¿Cuál es el nombre completo de Buchita?', a: 'Tiburcia Camacho Ortiz', points: 200 },
  { id: 23, categoryId: 'historia', q: '¿En qué mes y año se mudó la familia a Privada Río Sena?', a: 'Enero de 2007', points: 200 },
  { id: 24, categoryId: 'historia', q: 'Menciona AL MENOS 3 primos que NO se casaron en Monterrey', a: 'Lulita, Coki, Neto, Pedrito, Alf (cualquier 3 son correctos)', points: 200 },
  { id: 25, categoryId: 'historia', q: '¿Cómo se llamaba la mamá del abuelito Chano?', a: 'Margarita', points: 300 },
  { id: 26, categoryId: 'historia', q: '¿En qué colegio estudió la primaria el abuelito Chano?', a: 'Colegio Franco Mexicano', points: 300 },
  { id: 27, categoryId: 'historia', q: '¿Qué presidente de México era amigo personal del abuelito Chano?', a: 'Gustavo Díaz Ordaz', points: 350 },
  { id: 28, categoryId: 'historia', q: '¿A qué líder internacional conoció el abuelito Chano?', a: 'Fidel Castro', points: 350 },
  { id: 29, categoryId: 'historia', q: '¿Cómo se llamaba la tienda de telas del abuelito Rachid?', a: 'Telas Primavera', points: 400 },
  { id: 109, categoryId: 'historia', q: 'Este familiar pasó del “nunca iré a Guanajuato” al “sí acepto” en Guanajuato. ¿Quién fue?', a: 'Coki', points: 400 },
  { id: 110, categoryId: 'historia', q: '¿Qué familiar podría reclamar el título de “motor oficial del chat” por ser quien más mensajes ha enviado desde 2014?', a: 'Siti', points: 450 },


  // Anécdotas Legendarias (30-49)
  { id: 30, categoryId: 'anecdotas', q: '¿En qué año tuvimos que pasar la fiesta de Navidad en el hospital?', a: '2010', points: 100 },
  { id: 31, categoryId: 'anecdotas', q: 'En el cumpleaños de pesca de Samuel, ¿cuántos peces se pescaron en total?', a: '0 (cero) - ¡Ni uno!', points: 100 },
  { id: 32, categoryId: 'anecdotas', q: '¿A quién olvidaron en el cumpleaños de pesca de Samuel?', a: 'A Farid', points: 150 },
  { id: 33, categoryId: 'anecdotas', q: '¿Qué familias estuvieron a punto de hundirse en un submarino en Islas Caimán?', a: 'Familia Dieck Assam y Lozano Dieck', points: 200 },
  { id: 34, categoryId: 'anecdotas', q: '¿Quién tuvo que hacer 50 push-ups como castigo en el campamento porque le acusaron de tirar el basurero?', a: 'Mi Alf', points: 250 },
  { id: 35, categoryId: 'anecdotas', q: '¿Si el Alf no tiro el basurero, quien realmente lo hizo?', a: 'Farid', points: 250 },
  { id: 36, categoryId: 'anecdotas', q: '¿Quién subió una botella de vodka a la silla del abuelito en el crucero? (Él pensó que era agua)', a: 'Coki', points: 250 },
  { id: 37, categoryId: 'anecdotas', q: '¿Quién se hizo pasar por Marce diciendo "Hola soy Marce, estoy malita, quiero a mi mami"?', a: 'Alf', points: 250 },
  { id: 38, categoryId: 'anecdotas', q: '¿Qué condición decía Flety que tenía al tratar de levantarse pero nadie le creía?', a: 'Parálisis del sueño', points: 250 },
  { id: 39, categoryId: 'anecdotas', q: '¿Qué familiar se quedó atrapado en el elevador del hospital cuando fue a visitar a Siti después de su cirugía?', a: 'Tío Luly', points: 250 },
  { id: 40, categoryId: 'anecdotas', q: 'En una ocasión, Tony llamó al programa de Don Roberto Hernández, Fútbol Al Día. ¿Qué le dijo?', a: 'Lo quiero felicitar porque usted sabe de futbol lo que yo sé de medicina. (Nada más que yo soy licenciado)', points: 250 },
  { id: 41, categoryId: 'anecdotas', q: '¿De qué hotel corrieron a los primos por comerse pizzas que no eran suyas?', a: 'Embassy Suites en McAllen', points: 300 },
  { id: 42, categoryId: 'anecdotas', q: 'Flety le cambió el fondo de pantalla a Siti. ¿De quién era la foto y qué dijo Siti al verla?', a: 'Flavor Flav - Siti dijo: "¿Quién es ese viejo tan feo?"', points: 300, media: { type: 'image', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Public_Enemy_2008.05.29_002.jpg', caption: 'Flavor Flav', showWith: 'answer' } },
  { id: 43, categoryId: 'anecdotas', q: 'En el crucero, ¿qué dos familiares le pedían al Alf que esperara la pizza mientras ellos se dormían? (Por eso se aprendió todos los anuncios de la tele)', a: 'Tony y Coki', points: 300 },
  { id: 44, categoryId: 'anecdotas', q: '¿Quién le bajó 3 aguas de horchata al restaurante la Panga y además quiso ser candidato a alcalde de San Pedro?', a: 'Manuel Pichón', points: 300 },
  { id: 45, categoryId: 'anecdotas', q: '¿Cómo se llama la tía que le llamó a Siti para decirle que el Tío Juan (hermano de Abuelito) había fallecido cuando no era verdad?', a: 'La tía Odette', points: 350 },
  { id: 46, categoryId: 'anecdotas', q: 'Cuando los primos jugaron fútbol, cuál familiar fungió como árbitro y dijo "¡Penal para allá y penal para acá"?', a: 'Josephine', points: 350 },
  { id: 47, categoryId: 'anecdotas', q: '¿Quién leía las etiquetas de los juguetes en las tiendas y decía "¿Esto es para <y decía su nombre>?"?', a: 'Lulita', points: 350 },
  { id: 48, categoryId: 'anecdotas', q: '¿Qué miembro de la familia fue jugador #1 a nivel mundial en el videojuego Tibia?', a: 'Farid/Samuel - su personaje era "Mini Archer"', points: 400 },
  { id: 49, categoryId: 'anecdotas', q: 'Coki y sus amigos le pagaron un boleto de avión a este personaje para visitar a Tafich en Vancouver. ¿Quién era y qué dijo cuando finalmente lo corrió Tafich?', a: 'Manuel Pichón - "Aquí están tus llaves ***, tiradas a la suerte como me tiraste a mí, puñetas"', points: 450, media: { type: 'video', url: './media/questions/pichon.mp4', caption: 'Manuel Pichón', showWith: 'answer' } },

  // Cultura Familiar (50-72)
  { id: 50, categoryId: 'cultura-familiar', q: '¿Qué juego de mesa jugábamos tradicionalmente en Año Nuevo?', a: 'Monopoly', points: 100 },
  { id: 51, categoryId: 'cultura-familiar', q: '¿Cómo se llamaba el equipo de beisbol de liga Valle en el que estaban los primos?', a: 'Los Bravos', points: 100 },
  { id: 52, categoryId: 'cultura-familiar', q: '¿Cómo se llama el libro que escribió Siti?', a: 'Rácimo de Cuentos', points: 150 },
  { id: 108, categoryId: 'cultura-familiar', q: '¿De qué era el curso que dieron Tío Chano, Tía Nena y Tía Marce en la Semana I en la EGADE?', a: 'First Responders', points: 150 },
  { id: 53, categoryId: 'cultura-familiar', q: '¿Cuáles eran los tacos favoritos del abuelito Chano y la Mawita?', a: 'El Palmito', points: 150 },
  { id: 54, categoryId: 'cultura-familiar', q: '¿Cómo se llama la hermana más chiquita de Siti?', a: 'Polly', points: 150 },
  { id: 55, categoryId: 'cultura-familiar', q: '¿Cómo le decía de cariño el abuelito Chano a Siti?', a: '"La hermana de la caridad"', points: 150 },
  { id: 56, categoryId: 'cultura-familiar', q: '¿Qué significa "marmaja"?', a: 'Dinero / Alguien con dinero', points: 200 },
  { id: 57, categoryId: 'cultura-familiar', q: '🎵 RETO MUSICAL: Canten la canción de Mapy que inventó Tío Neto', a: '"Ay María Paula... qué niña tan buena, yo la quiero mucho, mucho de verdad"', points: 200 },
  { id: 58, categoryId: 'cultura-familiar', q: '¿Qué palabra de la familia usamos para decir "naco"?', a: 'Chabuz', points: 200 },
  { id: 110, categoryId: 'cultura-familiar', q: '¿Cuál fue el primer perrito de la familia en tener Facebook', a: 'Capu Dieck', points: 200, media: { type: 'video', url: './media/questions/Capu.png', caption: 'Capu', showWith: 'answer' } },
  { id: 59, categoryId: 'cultura-familiar', q: 'Menciona UN platillo que nunca faltaba los sábados en casa de Siti, hecho por Buch', a: 'Tostadas u Hojas de parra', points: 200 },
  { id: 60, categoryId: 'cultura-familiar', q: '¿Cómo le decimos de cariño a la tía Conchita y sus hijas, y por qué?', a: '"Las Tiburtinas" - porque viven en Via Tiburtina', points: 200 },
  { id: 61, categoryId: 'cultura-familiar', q: '¿Qué significa la palabra árabe "Haram"?', a: 'Pobrecito / Cositas', points: 250 },
  { id: 62, categoryId: 'cultura-familiar', q: '¿Quién inventó la expresión "casa todos"?', a: 'Coki', points: 250 },
  { id: 63, categoryId: 'cultura-familiar', q: 'Sin este primo, Wendy y Neto no se habrían conocido. ¿De quién estamos hablando?', a: 'Rachid', points: 250 },
  { id: 64, categoryId: 'cultura-familiar', q: '¿Por qué le decimos a Samuel "La D"?', a: 'Samy se molesto con Tony Rady porque pensaba que el celular que le compro no funcionaba y para molestarlo los primos le empezaron a decir "Rady, Dy, D"', points: 250 },
  { id: 65, categoryId: 'cultura-familiar', q: '¿Qué familiar leía el futuro en los restos del café?', a: 'Siti', points: 250 },
  { id: 66, categoryId: 'cultura-familiar', q: '¿Qué primo siempre jugaba a ser el ladrón y destruía las casas que Coki le construía a las primas??', a: 'Gal', points: 300 },
  { id: 67, categoryId: 'cultura-familiar', q: '¿Cómo se llamaba el kinder cerca de casa de Siti al que fueron muchos primos?', a: 'Kinder Gabriela Mistral', points: 300 },
  { id: 68, categoryId: 'cultura-familiar', q: '¿Quién es el miembro de la familia conocido por convertir algo tan simple como comer un plátano en todo un espectáculo maquiavélico?', a: 'Carlo', points: 300, media: { type: 'video', url: './media/questions/carlo.MOV', caption: 'Carlog', showWith: 'answer' } },
  { id: 69, categoryId: 'cultura-familiar', q: '¿De qué trataba la obra de Navidad que actuamos de niños dirigida por Josephine y Lulita?', a: 'Un niño rico es llevado por ángeles a casa de una familia pobre para enseñarle que la Navidad no se trata de regalos', points: 300 },
  { id: 70, categoryId: 'cultura-familiar', q: 'En la obra de Navidad, ¿quiénes eran la familia rica y quiénes la familia pobre?', a: 'FAMILIA RICA: Neni, Samuel y Farid | FAMILIA POBRE: Flety, Mariangela y Marce', points: 300 },
  { id: 71, categoryId: 'cultura-familiar', q: 'A esta casa llegamos los primos con los tíos para un cumpleaños… solo para enterarnos ahí mismo que no estábamos invitados. ¿De quién era la casa  y cuál cumpleaños se celebraba?', a: 'Casa de la Tía Maela para el cumpleaños de Porchini', points: 350 },
  { id: 72, categoryId: 'cultura-familiar', q: '¿A qué casa quería ir tía Nena siempre los domingos por unas mentitas que daba una tía?', a: 'Casa de la tía Sahuille', points: 350 },
  { id: 73, categoryId: 'cultura-familiar', q: '¿Por qué y quién fue la iniciadora de pedir a domicilio pizzas a las señoritas Garza (vecinas de Palestina 600)?', a: 'Tío Luly, porque no devolvían las pelotas', points: 350 },
  { id: 74, categoryId: 'cultura-familiar', q: '¿Qué familiar tiene DOS cumpleaños? ¿En qué fechas?', a: 'Abuelito Chano - 4 de julio y 18 de agosto', points: 400 },
  { id: 75, categoryId: 'cultura-familiar', q: '¿Qué dos bisnietos de Siti cumplen años el mismo día?', a: 'Tony bebé y Elen', points: 450 },
  { id: 107, categoryId: 'cultura-familiar', q: '¿Qué es Älfñ?', a: 'Mensaje de spam que recibió Fany y pensaron que era de una secta de aliens', points: 500 },

  // Lugares y Viajes (76-88)
  { id: 76, categoryId: 'lugares', q: '¿Cuál es la dirección exacta de la casa de la familia Dieck Assad de McAllen?', a: 'Esperanza 600', points: 100 },
  { id: 77, categoryId: 'lugares', q: 'Menciona el nombre de uno de los hoteles donde se hospedaba la familia en la Isla del Padre', a: 'El Tiki o La Internacional', points: 150 },
  { id: 78, categoryId: 'lugares', q: '¿A quién olvidaron en la cima del Cerro de la Bufa en Zacatecas?', a: 'A la tía Salma', points: 150 },
  { id: 79, categoryId: 'lugares', q: '¿Cómo se llamaba el hotel en San Antonio donde siempre nos quedábamos?', a: 'Home Gate', points: 200 },
  { id: 80, categoryId: 'lugares', q: '¿Quién rompió una maceta en el hotel de San Antonio?', a: 'Enitis', points: 200 },
  { id: 81, categoryId: 'lugares', q: '¿En qué lugar celebraron Siti y el abuelito sus 50 años de casados?', a: 'En el Palestino', points: 200 },
  { id: 82, categoryId: 'lugares', q: '¿Cómo se llamaba el crucero de año nuevo?', a: 'Rhapsody of the Seas', points: 200 },
  { id: 112, categoryId: 'lugares', q: '¿Cómo se llamaba el campamento de verano que organizaba mi tío Chano en donde los primos pasaron veranos muy felices?', a: 'Space Camp', points: 250 },
  { id: 83, categoryId: 'lugares', q: '¿Cómo se llamaba el supermercado frente a la iglesia El Rosario cerca de casa de Siti?', a: 'La Palanca (después se convirtió en Super Roma)', points: 250 },
  { id: 84, categoryId: 'lugares', q: '¿Cómo se llamaba el campamento de basquetbol al que íbamos de niños?', a: 'Spurs o Crusader', points: 300 },
  { id: 85, categoryId: 'lugares', q: 'Una tía se perdió en Cozumel en una de las paradas del crucero de año nuevo. ¿Quién fue?', a: 'Tía Marce', points: 300 },
  { id: 86, categoryId: 'lugares', q: 'Este restaurante en el centro de Monterrey hizo creer a los primos que era posible comer una rebanada de pastel de chocolate de tan solo 4 calorías.', a: 'Equipales', points: 300 },
  { id: 87, categoryId: 'lugares', q: '¿Cómo se llamaba la guía del viaje a Rusia y que pensamos que era espía de la KGB?', a: 'Varda', points: 300 },
  { id: 88, categoryId: 'lugares', q: '¿Qué apodo le puso tío Pedro a la ciudad de Monterrey?', a: '"La caldera del diablo"', points: 400 },

  // Personajes Memorables (89-108)
  { id: 89, categoryId: 'personajes', q: '¿Cómo se llama la mascota de Lulita y Alessandro?', a: 'Merlino', points: 100 },
  { id: 90, categoryId: 'personajes', q: 'Menciona DOS familiares que sean aficionados de los Tigres', a: 'Moris y Farid', points: 100 },
  { id: 91, categoryId: 'personajes', q: '¿Cómo se llama el plomero de Siti, conocido por toda la Familia?', a: 'Fuantos', points: 100 },
  { id: 92, categoryId: 'personajes', q: '¿Quién manejaba el puesto de pasteles en la kermes del Colegio Regiomontano?', a: 'Siti', points: 150 },
  { id: 93, categoryId: 'personajes', q: '¿Qué tío formó un Cine Club del que muchos primos eran parte y se juntaban a ver películas?', a: 'Tío Pedro', points: 150 },
  { id: 94, categoryId: 'personajes', q: '¿A quién se le conoce como "Nombre Gringo"?', a: 'Hilary Montes', points: 150 },
  { id: 95, categoryId: 'personajes', q: '¿Cómo se llamaba el profesor del Regio Contry que iba a quejarse con Siti de la conducta de sus hijos?', a: 'El profesor Roibal', points: 200 },
  { id: 96, categoryId: 'personajes', q: '¿Cómo se llamaba el chofer que hacía destrozos en las paredes del Centro Médico del Hospital San José?', a: 'Miguel / Miguelón', points: 200 },
  { id: 97, categoryId: 'personajes', q: '¿Qué miembro de la familia jugó en la liga mayor de los Borregos y pertence al Salón de la Fama del Tec?', a: 'Tío Tony', points: 200 },
  { id: 109, categoryId: 'personajes', q: 'La persona que siempre regalaba un rollo de guayaba a toda la familia.', a: 'Jaime Martínez', points: 250 },
  { id: 98, categoryId: 'personajes', q: '¿Qué primo nos ilusionó con una fuente de Bacardí en su boda y nos dejó solo con el recuerdo?', a: 'Coki', points: 250 },
  { id: 99, categoryId: 'personajes', q: '¿Quién era él/la gran consentida de Buchita?', a: 'Marce', points: 250 },
  { id: 100, categoryId: 'personajes', q: '¿Qué sacerdote casó a Neto y Wendy?', a: 'Padre Pedro', points: 250 },
  { id: 101, categoryId: 'personajes', q: '¿Cómo se llamaba la primera esposa del Tío Momo?', a: 'Tía Bellita', points: 300 },
  { id: 102, categoryId: 'personajes', q: 'La familia de Eloísa Lozanoe es muy cercana a la familia. Menciona al menos a TRES de sus hijos:', a: 'Aaron, Amalia, Eluan, Rebeca, Myrna, Ara, Julio y Hernán', points: 300 },
  { id: 103, categoryId: 'personajes', q: '¿Cuál miembro de la familia fue Presidente del club de fans de One Direction en México?', a: 'Mapy', points: 300 },
  { id: 104, categoryId: 'personajes', q: '¿Qué familiar fue embajador de México ante la Unión Europea?', a: 'Tía Luly', points: 300 },
  { id: 105, categoryId: 'personajes', q: '¿Cómo se llamaba la mucama de tía Paula que se durmió en su cama?', a: 'Esmeralda', points: 350 },
  {id: 111, categoryId: 'personajes', q: '¿Cómo le decían a Tía Marce en el Mater?', a: 'Chiquita Dieck', points: 350 },
  { id: 108, categoryId: 'personajes', q: '¿Cómo se llamaba la señora que le devolvió un pan árabe a Siti con la excusa de que estaba echado a perder?  ', a: 'San Juana', points: 400 },
  { id: 106, categoryId: 'personajes', q: '🎙️ PREGUNTA FINAL: ¿Quién es el compañero de podcast del tío Mauricio?', a: 'Alex Porras', points: 400 }
];

// Helper function to get questions by category
export const getQuestionsByCategory = (categoryId: string): Question[] => {
  return questions.filter(q => q.categoryId === categoryId);
};
