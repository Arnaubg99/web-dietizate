const dietas = [
    {
        "id": 1,
        "nombre": "Vegetariana",
        "descripcion": "La dieta vegetariana es un enfoque alimentario que excluye el consumo de carne y productos derivados de animales. Se basa en alimentos de origen vegetal, como frutas, verduras, granos, legumbres, nueces y semillas. Los vegetarianos pueden optar por diferentes variantes de esta dieta, como ovo-lacto-vegetariana (incluye huevos y lácteos), lacto-vegetariana (incluye lácteos pero no huevos) o vegetariana estricta (excluye todos los productos animales). Requiere de cierta planificación para obtener nutrientes esenciales de manera equilibrada.",
        "beneficios": [
            "Mejora de la salud cardiovascular",
            "Control del peso",
            "Reducción del riesgo de ciertos tipos de cáncer",
            "Promoción de la salud digestiva"

        ],
        "imagen": "../assets/Fotos_dietas/dieta_vegetariana.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/vegetariana.png"
    },
    {
        "id": 2,
        "nombre": "Vegana",
        "descripcion": "La dieta vegana es un estilo de alimentación que excluye todos los productos de origen animal, incluyendo carne, lácteos, huevos y miel. Se basa en alimentos de origen vegetal como frutas, verduras, granos, legumbres, nueces y semillas. Los veganos evitan el uso de productos derivados de animales en todos los aspectos de su vida, promoviendo así el respeto hacia los animales y la sostenibilidad ambiental.",
        "beneficios": [
            "Mejora de la salud del corazón",
            "Control del peso",
            "Beneficios para el medio ambiente"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_vegana.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/vegana.png"
    },
    {
        "id": 3,
        "nombre": "Detox",
        "descripcion": "La dieta detox es un enfoque alimentario temporal que busca eliminar toxinas del cuerpo y promover la desintoxicación. Se basa en la ingesta de alimentos naturales, como frutas, verduras, agua y tés de hierbas, mientras se evitan alimentos procesados, azúcares y grasas saturadas. Se promueve el consumo de antioxidantes y se suele acompañar de ayuno intermitente o de restricciones calóricas.",
        "beneficios": [
            "Eliminación de toxinas",
            "Aumento de la energía",
            "Mejora de la digestión"

        ],
        "imagen": "../assets/Fotos_dietas/dieta_detox.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/detox.png"
    },
    {
        "id": 4,
        "nombre": "Paleolítica",
        "descripcion": "La dieta paleo, o dieta paleolítica, se basa en imitar la alimentación de nuestros ancestros cazadores-recolectores. Se enfoca en consumir alimentos no procesados, como carnes magras, pescados, frutas, verduras, nueces y semillas. Se evitan alimentos modernos, como cereales, lácteos, legumbres y azúcares refinados. Se busca obtener nutrientes naturales y evitar alimentos procesados y comidas industrializadas.",
        "beneficios": [
            "Mayor consumo de nutrientes",
            "Control del azúcar y los carbohidratos refinados",
            "Ayuda a reducir la ingesta de aditivos y conservantes"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_paleolitica.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/paleo.png"
    },
    {
        "id": 5,
        "nombre": "No procesados",
        "descripcion": "La dieta de no procesados se basa en consumir alimentos en su forma más natural y evitar aquellos que han sido sometidos a procesamiento industrial. Se enfoca en alimentos frescos como frutas, verduras, carnes magras, pescados, huevos y granos enteros. Se evitan alimentos procesados, como alimentos precocinados, snacks y bebidas azucaradas, para priorizar una alimentación más saludable y equilibrada.",
        "beneficios": [
            "Menor ingesta de aditivos y conservantes",
            "Mayor ingesta de nutrientes",
            "Control del peso",
            "Mejora de la salud digestiva"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_no_procesados.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/no_procesado.png"
    },
    {
        "id": 6,
        "nombre": "Proteica",
        "descripcion": "La dieta proteica se enfoca en aumentar el consumo de proteínas y reducir la ingesta de carbohidratos y grasas. Se consumen alimentos ricos en proteínas, como carnes magras, pescado, huevos, queso, yogur y legumbres, y se evitan alimentos ricos en carbohidratos, como pan, pasta, arroz y azúcares refinados. Se busca mantener la masa muscular, reducir la grasa corporal y aumentar la saciedad para controlar el apetito.",
        "beneficios": [
            "Promoción de la saciedad",
            "Mantenimiento y desarrollo muscular",
            "Mejora de la composición corporal",
            "Estabilización de los niveles de azúcar en sangre"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_proteica.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/proteica.png"
    },{
        "id": 7,
        "nombre": "Hipocalórica",
        "descripcion": "La dieta hipocalórica es un enfoque alimentario que busca reducir la ingesta de calorías para promover la pérdida de peso. Se basa en consumir menos calorías de las que el cuerpo necesita para su funcionamiento diario. Se enfoca en alimentos bajos en calorías pero ricos en nutrientes, como frutas, verduras, proteínas magras y granos integrales. Se recomienda controlar las porciones y evitar alimentos procesados y azucarados.",
        "beneficios": [
            "Pérdida de peso",
            "Control de la glucemia",
            "Beneficios psicológicos al ver resultados",
            "Mejora de la salud cardiovascular"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_hipercalorica.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/hipocalorica.png"
    },
    {
        "id": 8,
        "nombre": "Mediterránea",
        "descripcion": "Se caracteriza por un consumo elevado de frutas, verduras, legumbres, granos integrales, pescado, aceite de oliva y frutos secos. También incluye moderadas cantidades de lácteos, aves y huevos, mientras que limita el consumo de carnes rojas, alimentos procesados y azúcares añadidos. Se destaca por ser equilibrada, rica en nutrientes y promover la salud cardiovascular.",
        "beneficios": [
            "Salud cardiovascular",
            "Longevidad",
            "Control del peso"
        ],
        "imagen": "../assets/Fotos_dietas/dieta_mediterranea.jpg",
        "imagen_menu": "../assets/Fotos_menu_semanales/mediterranea.png"
    }
];

const restaurantes = [
    {
        "id": 1,
        "nombre": "Xavier Pellicer",
        "descripcion": "Xavier Pellicer cerró el restaurante Celerí, dedicado a la verdura –con opción a complementar los platos con proteína animal– justo después de ganar la Michelin. Lo reabrió una breve temporada después en el Eixample con cambio de nombre y más apuesta por el vegetal. Cambio para seguir igual, más y mejor: más espacio, y una brasa de encina y fuego de wok. Cambio para convertirse, según la guía We’re Smart Green Guide, en el mejor restaurante de verduras del mundo. De ejemplos, mil; zanahoria a la brasa al pilpil de naranja o la alcachofa con tupinambo y emulsión de almendra. Ofrece una carta con una triple declinación: proteína animal, ovolactovegetariana y vegana.",
        "direccion": "Provença, 310, Dreta de l'Eixample, 08037 Barcelona",
        "imagen": "../assets/Fotos_restaurantes/restaurante_xavier_pellicer.png",
        "tipo": "Vegerariano",
        "id_dieta": 1
    },
    {
        "id": 2,
        "nombre": "Teresa Carles",
        "descripcion": "Todos los vegetarianos quieren ser diferentes, pero este lo es de verdad: su recetario, a medio camino entre la tradición catalana y la cocina de autor, es sorprendente, sabroso y sin dogmas vegetarianos. Y la verdad es que han marcado una época y lo siguen haciendo: abrieron en el 2011, y pronto se establecieron como referente de los restaurantes vegetarianos que, en lugar de imitar la cocina hecha con proteína animal, interpretan tradiciones y inventan platos nuevos. Al frente, la gran Teresa Carlos, leridana universal. Sus clásicos rollos de berenjena y la escudella vegetal no pueden faltar en la lista de platos foodies de la ciudad.",
        "direccion": "Jovellanos, 2, El Raval, 08001 Barcelona",
        "imagen": "../assets/Fotos_restaurantes/restaurante_Teresa_carles.png",
        "tipo": "Vegetariano",
        "id_dieta": 1
    },


    {
        "id": 3,
        "nombre": "Sopa Barcelona",
        "descripcion": "Hay dos restaurantes en Barcelona, dos en Bali y uno en Madrid que se llaman Sopa y donde los caldos y las cremas vegetarianas y veganas de temporada son las auténticas protagonistas. En su menú del mediodía siempre encontrará cuatro opciones soperas para hacer de primero. Algunas os resultarán muy familiares, como la de calabaza y zanahoria de toda la vida, y otras no tanto, como el dahl indio de lentejas rojas o la crema nipona de verdura con miso.",
        "direccion": "Roc Boronat, 114, 08018 Barcelona",
        "imagen": "../assets/Fotos_restaurantes/RESTAURANTE_SOPA_BCN.png",
        "tipo": "Vegano",
        "id_dieta": 2
    },
    {
        "id": 4,
        "nombre": "Rasoterra",
        "descripcion": "El Rasoterra es más que un restaurante vegano: es uno de los lugares más emblemáticos en la revolución verde en las mesas de Barcelona, desde que abrieron en el 2013. Si tenemos en cuenta que uno de los socios del restaurante, Danielle Rossi, también es presidente de la asociación Slow Food de Barcelona y que tienen un huerto propio, entenderemos la magnitud y el rigor del Rasoterra en materia de cocina km 0. La chef Adriana Carcelén ha incrementado el voltaje gastronómico de sus elaboraciones. Abren de noche, y en lugar de una carta con tapas y platos principales, tienen un menú cerrado a 29 euros con un aperitivo, entrante y segundo que puede alargarse a voluntad.",
        "direccion": "Palau, 5, Gòtic, 08002 Barcelona",
        "imagen": "../assets/Fotos_restaurantes/RESTAUTANTE_RASOTERRA.png",
        "tipo": "Vegetariano",
        "id_dieta": 1
    },
    {
        "id": 5,
        "nombre": "Blavis",
        "descripcion": "Blavis es un pequeño rincón gastronómico en el que se propone compartir tapas y platillos. En su menú encontraréis cocina sabrosa, elaborada con cariño y con influencias de diversas culturas. Además, ofrecen una selección de vinos locales con los que acompañar la experiencia. El menú del día cuesta 12,50€ y está compuesto por dos primeros, un segundo y un postre. Pero por la noche, el concepto cambia: de martes a sábado, proponen un menú cerrado de 8 tapas variadas.",
        "direccion": "C/ de Saragossa, 85, 08006 Barcelona",
        "imagen": [
            "../assets/Fotos_restaurantes/blavis_1.jpeg",
            "../assets/Fotos_restaurantes/blavis_2.jpeg"
        ],
        "tipo": "Mediterráneo",
        "id_dieta": 8
    },
    {
        "id": 6,
        "nombre": "Tast-Ller",
        "descripcion": "Tast-Ller es un restaurante que apuesta por una cocina de mercado, en un ambiente diferente donde te hacen sentir como si de tu casa se tratase. Con las explicaciones de cada plato por parte del chef Mikel Peinador, se convierte en una experiencia única, muy agradable y cercana. Un taller de sabores.",
        "direccion": "Carrer de Viladomat, 137, 08015 Barcelona",
        "imagen": [
            "../assets/Fotos_restaurantes/TASTELLER_1.jpg",
            "../assets/Fotos_restaurantes/TASTELLER_2.jpg"
        ],
        "tipo": "Mediterráneo",
        "id_dieta": 8
    },
    {
        "id": 7,
        "nombre": "Flax & Kale",
        "descripcion": "Flax & Kale, primer restaurante en autodenominarse Healthy-Flexitariano. Nació con la intención de fomentar un estilo de vida en el que predominen los valores de respeto por la salud, el medioambiente y las personas. La gastronomía sería nuestra vía para hacer de este mundo un lugar un poco mejor para todos. Sirven lo último de lo último en tendencias gastronómicas saludables.",
        "direccion": "C/Tallers, 74b, 08001 Barcelona",
        "imagen": [
            "../assets/Fotos_restaurantes/flaxandkale_1.jpg",
            "../assets/Fotos_restaurantes/flaxandkale_2.jpg"
        ],
        "tipo": "Detox",
        "id_dieta": 3
    },
    {
        "id": 8,
        "nombre": "Maai",
        "descripcion": "Maai ofrece desayunos saludables y menús de mediodía elaborados con ingredientes de proximidad y en muchos casos ecológicos. El término eco, en este caso, tiene doble sentido: ecológico y económico. Tiene un pero: solo abre las mañanas y los medios días laborales. ¡Suerte que tienen servicio ‘take away’!",
        "direccion": "C/ Regàs, 30, 09006, Barcelona",
        "imagen": [
            "../assets/Fotos_restaurantes/maai_1.jpeg",
            "../assets/Fotos_restaurantes/maai_2.jpeg"
        ],
        "tipo": "Detox",
        "id_dieta": 3
    },
    {
        "id": 9,
        "nombre": "Green Vita",
        "descripcion": "GreenVita es un concepto gastronómico apto para todos los públicos, nacido con la sencilla y clara intención de proporcionar buena comida. Buena para tu paladar y buena para tu cuerpo. Un restaurante donde se cultiva una cocina sana y equilibrada, sin procesados, sin aditivos artificiales, sin fritos, con los nutrientes y el sabor del producto fresco recién cocinado. Desde ensaladas, bowls de pasta y arroz, pollo de corral a la brasa, pescado a la brasa, burgers, tacos a deliciosos postres sin gluten y una amplia selección de bebidas ecológicas. Y ello en un espacio cuidado, con plantas naturales, colores tierra y un personal amable que te acompañarán para hacer más agradable tu experiencia.",
        "direccion": "Local 13, Avda. Diagonal, 03, Barcelona 08019",
        "imagen": "../assets/Fotos_restaurantes/green_vita.jpg",
        "tipo": "Detox",
        "id_dieta": 3
    }
]

function getDietas(){
    return dietas;
}

function getDietaById(id){
    return dietas.find((dieta) => dieta.id === id);
}

function getRestaurantes(){
    return restaurantes;
}


function getRestauranteById(id){
    return restaurantes.find((restaurante) => restaurante.id === id);
}
function getRestaurantesDeDietaById(id){
    id = Number(id)
    const listadoRestaurantes = restaurantes.filter(restaurante => restaurante.id_dieta === id);
    return listadoRestaurantes;
}