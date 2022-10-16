var iconos = []
var selecciones = []
var descripciones = []
var titulos = []
generarTablero()

/* function cargarIconos() {
    // iconos = [
    //     '<i class="fas fa-star"></i>',
    //     '<i class="far fa-star"></i>',
    //     '<i class="fas fa-star-of-life"></i>',
    //     '<i class="fas fa-star-and-crescent"></i>',
    //     '<i class="fab fa-old-republic"></i>',
    //     '<i class="fab fa-galactic-republic"></i>',
    //     '<i class="fas fa-sun"></i>',
    //     '<i class="fas fa-stroopwafel"></i>',
    //     '<i class="fas fa-dice"></i>',
    //     '<i class="fas fa-chess-knight"></i>',
    //     '<i class="fas fa-chess"></i>',
    //     '<i class="fas fa-dice-d20"></i>',
    // ]
    iconos = [
        '<img src="assent/images/almeja.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol1.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol2.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol3.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/centolla.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/cholga.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/escrofalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/langostino.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/lechugaDeMar.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/luche.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/mejillon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/merluzaComun.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pejerrey.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezGalloOElefante.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezSapo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pulpoColorado.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/robalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/salmon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/sombrerito.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/wakame.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
} */

function cargarIconos() {
    moluscosTitulo1 = [
        'Caracol Pie Violeta',
        'Caracol Blanco',
        'Pulpo Colorado',
        'Centolla',
        'Langostino',
    ]

    moluscosTitulo2 = [
        'Almeja',
        'Sombrerito',
        'Mejillón',
        'Cholga',
        'Caracol Pie rojo',
    ]

    pecesTitulo1 = [
        'Salmón de Mar',
        'Undaria / Wakame',
        'Lechuga de Mar',
        'Escrófalo',
        'Piropia / Luche',
    ]

    pecesTitulo2 = [
        'Merluza',
        'Pejerrey',
        'Pez Elefante',
        'Pez Sapo',
        'Róbalo',
    ]

    moluscosTexto1 = [
        'Puede medir hasta 20 cm de largo y su talla mínima de captura son 11 cm.',
        'Especie de caracol que habita el intermareal y submareal desde las costas de Bs As hasta Tierra del Fuego. Son carnívoros, se alimentan de mejillones, almejas, caracoles y bivalvos produciendo un agujero en sus valvas para acceder a la carne de los mismos.',
        'Es un organismo de la clase gasterópoda junto con calamares y calamaretes. Se lo encuentra entre la franja del Golfo San Matías y el Canal de Beagle. Presenta sexos separados y la hembra pone huevos una sola vez en su vida.',
        'Se aparean en diciembre y se puede diferenciar machos y hembras por la forma de su abdomen. Son animales que crecen por mudas y se estima que podría vivir hasta 20 años. Comen de todo, son carroñeras principalmente.',
        'Junto con la merluza, es uno de los principales recursos económicos del país. Es posible diferenciar machos de hembras por su primer par de patas. Predador importante de organismos bentónicos como crustáceos, gusanos y moluscos.',
    ]
    moluscosTexto2 = [
        'Molusco bivalvo que se encuentra en fondos blandos de hasta 60 m de profundidad.Pueden vivir hasta 34 años y llegar a medir 55 cm.',
        'Molusco gasterópodo que habita en el intermareal rocoso somero. Son raspadores herbívoros generalistas. Para su captura es necesario que al menos midan 2 cm.',
        'Molusco Bivalvo que habita en la mayoría de las costas de Sudamérica y se lo encuentra hasta los 50 metros de profundidad. Es una especie afectada por la marea roja por ser su hábito alimentario, la filtración. En su estadio juvenil se fija al fondo mediante unos filamentos bísales que constituyen el biso.',
        'Molusco bivalvo que se diferencia del mejillón por presentar líneas longitudinales llamadas costillas. Son organismos filtradores y su dieta es principalmente fitoplancton por lo que se ve afectado por la marea roja.',
        'Es uno de los caracoles más grandes del golfo y depreda bivalvos y otros caracoles. Para recolectarlo es necesario bucear desde costa o embarcado.',
    ]
    pecesTexto1 = [
        'Es el pez más grande de los arrecifes patagónicos. Depredador generalista (peces, pulpos, cangrejos, etc.). Se Distribuye desde Río de Janeiro hasta el Golfo San Jorge.',
        'Alga parda originaria de Japón, sur de China y Corea. Se cree que entró en Argentina a inicios de los 90s. Se la utiliza tanto para alimentación humana como de animales, como fertilizante o para la industria farmacéutica.',
        'Alga verde formada por dos capas de células, La especie tiene una amplia distribución en todo el mundo, se encuentran tanto en la zona de la costa como en profundidad. Usos: Consumo humano directo, aporta cantidades significativas de minerales y vitaminas A y C. En la elaboración de cosméticos hidratantes. Como Fertilizante agrícola.',
        'Depredador que se alimenta de crustáceos y otros peces. Es el pez más abundante de los arrecifes del Golfo San Jorge.',
        'Alga roja que puede alcanzar un máximo de 40 cm de diámetro, de color pardo dorado hasta púrpura, a veces iridiscentes. En Argentina se la puede hallar desde Río Negro hasta Tierra del Fuego, pero las poblaciones más abundantes y permanentes se encuentran en el golfo San Jorge y costas de Santa Cruz. Consumo humano directo. La recolección comercial o para consumo propio del “luche” se realiza manualmente durante la bajamar.',
    ]
    pecesTexto2 = [
        'Uno de los principales recursos del mar argentino. Los machos pueden vivir hasta 9 años y las hembras hasta 11 años. Son animales carnívoros. ',
        'Peces costeros que habitan hasta los 10-50 metros de profundidad dependiendo de la especie. Los peces grandes se alimentan de los más pequeños.',
        'Pariente de tiburones y rayas. Se distribuye desde el sur de Brasil hasta el sur de Perú por el Pacífico.',
        'Pez escurridizo que habita en cuevas y se mimetiza con los fondos. Se reproduce entre el invierno y la primavera.',
        'Se distribuye desde Valparaíso, Chile hasta el sur de la provincia de Bs As incluidas las islas Malvinas. Es una especie Protándrica, son machos primero y luego de una determinada edad se convierten en hembras. Forma pequeños cardúmenes en aguas poco profundas y fondos arenosos.',
    ]

    moluscosCrustaceos1 = [
        '<img src="assent/images/caracol2.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol3.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pulpoColorado.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/centolla.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/langostino.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    moluscosCrustaceos2 = [
        '<img src="assent/images/almeja.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/sombrerito.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/mejillon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/cholga.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol1.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    pecesAlgas1 = [
        '<img src="assent/images/salmon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/wakame.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/lechugaDeMar.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/escrofalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/luche.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    pecesAlgas2 = [
        '<img src="assent/images/merluzaComun.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pejerrey.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezGalloOElefante.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezSapo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/robalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    random = Math.random() - 0.5
    categoria = ""
    if (random > 0) {
        if (Math.random() - 0.5 > 0) {
            iconos = moluscosCrustaceos1
            descripciones = moluscosTexto1
            titulos = moluscosTitulo1
            categoria = "Moluscos y Crustáceos"
        } else {
            iconos = moluscosCrustaceos2
            descripciones = moluscosTexto2
            titulos = moluscosTitulo2
            categoria = "Moluscos y Crustáceos"
        }
    } else {
        if (Math.random() - 0.5 > 0) {
            iconos = pecesAlgas1
            descripciones = pecesTexto1
            titulos = pecesTitulo1
            categoria = "Peces y Algas"
        } else {
            iconos = pecesAlgas2
            descripciones = pecesTexto2
            titulos = pecesTitulo2
            categoria = "Peces y Algas"
        }

    }
    //iconos ahora tiene 10 elementos para mostrar

    let titulo = document.getElementById("titulo-categoria")
    titulo.innerHTML = categoria;
}


function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    let textos = []
    let headers = []
    for (let i = 0; i < 10; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" id="area-tarjeta${i}" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="bi bi-question-square"></i>
                        </div>
                    </div>
                </div>        
                `)
        textos.push(descripciones[0])
        headers.push(titulos[0])
        if (i % 2 == 1) {  // por cada iteracion le quita el primer elemento a iconos, es decir, el iconos[0] es removido.
            iconos.splice(0, 1)
            descripciones.splice(0, 1)
            titulos.splice(0, 1)
        }   // para que luego de agregar dos veces un elemento, este se quite de la lista y se continue con los demas
    }
    let random = Math.random() - 0.5;
    textos.sort(() => random)
    tarjetas.sort(() => random)
    headers.sort(() => random)
    descripciones = textos
    titulos = headers
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    var areaTarjeta;
    var id = "area-tarjeta"

    for (let k = 0; k < 9; k++) {
        id = "area-tarjeta"
        id = id + k;
        areaTarjeta = document.getElementById(id)
        areaTarjeta.classList.remove('inactive')
    }
    let tarjeta = document.getElementById("tarjeta" + i)
    if (selecciones.length < 3) {
        if (tarjeta.style.transform != "rotateY(180deg)") {
            tarjeta.style.transform = "rotateY(180deg)"
            selecciones.push(i)
        }
    }
    if (selecciones.length == 2) {
        for (let j = 0; j < 10; j++) {
            id = "area-tarjeta"
            id = id + j;
            areaTarjeta = document.getElementById(id)
            areaTarjeta.classList.add('inactive')
        }
        deseleccionar(selecciones)
        selecciones = []
        for (let k = 0; k < 10; k++) {
            id = "area-tarjeta"
            id = id + k;
            areaTarjeta = document.getElementById(id)
            areaTarjeta.classList.remove('inactive')
        }
    }
}

function deseleccionar(selecciones) {

    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            trasera1.style.background = "green"
            trasera2.style.background = "green"
            const myModal = new bootstrap.Modal('#modalMensaje', {
                keyboard: false
            })
            const modalToggle = document.getElementById('modalMensaje');
            myModal.show(modalToggle);
            modalToggle.querySelector(".modal-title").innerHTML = titulos[selecciones[0]]
            modalToggle.querySelector(".modal-body").innerHTML = descripciones[selecciones[0]]

            /*             if (selecciones[0] > 4) {
                            if (selecciones[0] % 2 == 0) {
                                modalToggle.querySelector(".modal-body").innerHTML = descripciones[selecciones[0]/2]
                            } else {
                                modalToggle.querySelector(".modal-body").innerHTML = descripciones[selecciones[1]/2]
                            }
                        } else {
                            modalToggle.querySelector(".modal-body").innerHTML = descripciones[selecciones[0]]
                        } */
            //document.getElementById('modalMensaje').modal({ show:true })
        }
        // const modalMensaje = document.getElementById('modalMensaje')
        // modalMensaje.addEventListener('shown.bs.modal', event => {
        //     // do something...
        // })
    }, 500);


}