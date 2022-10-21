const audioSeleccionar = new Audio("assent/audios/blackjack_1.mp3");
const audioDeseleccionar = new Audio("assent/audios/naipe.mp3");
const audioBarajar = new Audio("assent/audios/todos.mp3");
const aud1 = new Audio("assent/audios/1.mp3");
const aud2 = new Audio("assent/audios/2.mp3");
const aud3 = new Audio("assent/audios/3.mp3");
const aud4 = new Audio("assent/audios/4.mp3");
const aud5 = new Audio("assent/audios/5.mp3");
const aud6 = new Audio("assent/audios/6.mp3");
const aud7 = new Audio("assent/audios/7.mp3");
const aud8 = new Audio("assent/audios/8.mp3");
const aud9 = new Audio("assent/audios/9.mp3");

var iconos = []
var selecciones = []
var tarjetas = []
var aciertos = 0

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

    moluscosCrustaceos1 = [
        {
            "imagen": '<img src="assent/images/caracol2.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Caracol Pie Violeta',
            "texto": 'Puede medir hasta 20 cm de largo y su talla mínima de captura son 11 cm.',
        },
        {
            "imagen": '<img src="assent/images/caracol3.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Caracol Blanco',
            "texto": 'Especie de caracol que habita el intermareal y submareal desde las costas de Bs As hasta Tierra del Fuego. Son carnívoros, se alimentan de mejillones, almejas, caracoles y bivalvos produciendo un agujero en sus valvas para acceder a la carne de los mismos.',
        },
        {
            "imagen": '<img src="assent/images/pulpoColorado.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Pulpo Colorado',
            "texto": 'Es un organismo de la clase gasterópoda junto con calamares y calamaretes. Se lo encuentra entre la franja del Golfo San Matías y el Canal de Beagle. Presenta sexos separados y la hembra pone huevos una sola vez en su vida.',
        },
        {
            "imagen": '<img src="assent/images/centolla.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Centolla',
            "texto": 'Se aparean en diciembre y se puede diferenciar machos y hembras por la forma de su abdomen. Son animales que crecen por mudas y se estima que podría vivir hasta 20 años. Comen de todo, son carroñeras principalmente.',
        },
        {
            "imagen": '<img src="assent/images/langostino.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Langostino',
            "texto": 'Junto con la merluza, es uno de los principales recursos económicos del país. Es posible diferenciar machos de hembras por su primer par de patas. Predador importante de organismos bentónicos como crustáceos, gusanos y moluscos.',
        },
    ]

    moluscosCrustaceos2 = [
        {
            "imagen": '<img src="assent/images/almeja.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Almeja',
            "texto": 'Molusco bivalvo que se encuentra en fondos blandos de hasta 60 m de profundidad.Pueden vivir hasta 34 años y llegar a medir 55 cm.',
        },
        {
            "imagen": '<img src="assent/images/sombrerito.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Sombrerito',
            "texto": 'Molusco gasterópodo que habita en el intermareal rocoso somero. Son raspadores herbívoros generalistas. Para su captura es necesario que al menos midan 2 cm.',
        },
        {
            "imagen": '<img src="assent/images/mejillon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Mejillón',
            "texto": 'Molusco Bivalvo que habita en la mayoría de las costas de Sudamérica y se lo encuentra hasta los 50 metros de profundidad. Es una especie afectada por la marea roja por ser su hábito alimentario, la filtración. En su estadio juvenil se fija al fondo mediante unos filamentos bísales que constituyen el biso.',
        },
        {
            "imagen": '<img src="assent/images/cholga.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Cholga',
            "texto": 'Molusco bivalvo que se diferencia del mejillón por presentar líneas longitudinales llamadas costillas. Son organismos filtradores y su dieta es principalmente fitoplancton por lo que se ve afectado por la marea roja.',
        },
        {
            "imagen": '<img src="assent/images/caracol1.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Caracol Pie rojo',
            "texto": 'Es uno de los caracoles más grandes del golfo y depreda bivalvos y otros caracoles. Para recolectarlo es necesario bucear desde costa o embarcado.',
        },
    ]

    pecesAlgas1 = [
        {
            "imagen": '<img src="assent/images/salmon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Salmón de Mar',
            "texto": 'Es el pez más grande de los arrecifes patagónicos. Depredador generalista (peces, pulpos, cangrejos, etc.). Se Distribuye desde Río de Janeiro hasta el Golfo San Jorge.',
        },
        {
            "imagen": '<img src="assent/images/wakame.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Undaria / Wakame',
            "texto": 'Alga parda originaria de Japón, sur de China y Corea. Se cree que entró en Argentina a inicios de los 90s. Se la utiliza tanto para alimentación humana como de animales, como fertilizante o para la industria farmacéutica.',
        },
        {
            "imagen": '<img src="assent/images/lechugaDeMar.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Lechuga de Mar',
            "texto": 'Alga verde formada por dos capas de células, La especie tiene una amplia distribución en todo el mundo, se encuentran tanto en la zona de la costa como en profundidad. Usos: Consumo humano directo, aporta cantidades significativas de minerales y vitaminas A y C. En la elaboración de cosméticos hidratantes. Como Fertilizante agrícola.',
        },
        {
            "imagen": '<img src="assent/images/escrofalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Escrófalo',
            "texto": 'Depredador que se alimenta de crustáceos y otros peces. Es el pez más abundante de los arrecifes del Golfo San Jorge.',
        },
        {
            "imagen": '<img src="assent/images/luche.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Piropia / Luche',
            "texto": 'Alga roja que puede alcanzar un máximo de 40 cm de diámetro, de color pardo dorado hasta púrpura, a veces iridiscentes. En Argentina se la puede hallar desde Río Negro hasta Tierra del Fuego, pero las poblaciones más abundantes y permanentes se encuentran en el golfo San Jorge y costas de Santa Cruz. Consumo humano directo. La recolección comercial o para consumo propio del “luche” se realiza manualmente durante la bajamar.',
        },
    ]

    pecesAlgas2 = [
        {
            "imagen": '<img src="assent/images/merluzaComun.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Merluza',
            "texto": 'Uno de los principales recursos del mar argentino. Los machos pueden vivir hasta 9 años y las hembras hasta 11 años. Son animales carnívoros. ',
        },
        {
            "imagen": '<img src="assent/images/pejerrey.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Pejerrey',
            "texto": 'Peces costeros que habitan hasta los 10-50 metros de profundidad dependiendo de la especie. Los peces grandes se alimentan de los más pequeños.',
        },
        {
            "imagen": '<img src="assent/images/pezGalloOElefante.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Pez Elefante',
            "texto": 'Pariente de tiburones y rayas. Se distribuye desde el sur de Brasil hasta el sur de Perú por el Pacífico.',
        },
        {
            "imagen": '<img src="assent/images/pezSapo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Pez Sapo',
            "texto": 'Pez escurridizo que habita en cuevas y se mimetiza con los fondos. Se reproduce entre el invierno y la primavera.',
        },
        {
            "imagen": '<img src="assent/images/robalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
            "titulo": 'Róbalo',
            "texto": 'Se distribuye desde Valparaíso, Chile hasta el sur de la provincia de Bs As incluidas las islas Malvinas. Es una especie Protándrica, son machos primero y luego de una determinada edad se convierten en hembras. Forma pequeños cardúmenes en aguas poco profundas y fondos arenosos.',
        },
    ]

    rnd = Math.random() - 0.5
    categoria = ""
    if (rnd > 0) {
        categoria = "Moluscos y Crustáceos"
        if (Math.random() - 0.5 > 0) {
            iconos = moluscosCrustaceos1
        } else {
            iconos = moluscosCrustaceos2
        }
    } else {
        categoria = "Peces y Algas"
        if (Math.random() - 0.5 > 0) {
            iconos = pecesAlgas1
        } else {
            iconos = pecesAlgas2
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
    // hay q ver como utilizar iconos o en este caso va a tener q ser tarjetas que contenga jsons con divs, titulos y txt
    for (let i = 0; i < 10; i++) {
        tarjetas.push({
            'div': `
                <div class="area-tarjeta" id="area-tarjeta${i}" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]['imagen']}
                        </div>
                        <div class="cara superior">
                            <i class="bi bi-question-square"></i>
                        </div>
                    </div>
                </div>        
                `,
            'titulo': iconos[0]['titulo'],
            'texto': iconos[0]['texto'],
        })
        if (i % 2 == 1) {  // por cada iteracion le quita el primer elemento a iconos, es decir, el iconos[0] es removido.
            iconos.splice(0, 1)
        }   // para que luego de agregar dos veces un elemento, este se quite de la lista y se continue con los demas
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tarjetas.forEach(tarjeta => {
        tablero.innerHTML = tablero.innerHTML + tarjeta['div']
    });
    setTarjetas(tarjetas)

    
    // El usuario debe interactuar con la pantalla antes de poder reproducir cualquier sonido.

/*     setTimeout(() => {
        audioBarajar.play();
    }, 500); */

}

function setTarjetas(x) {
    tarjetas = x
}

function obtenerTarjetas() {
    return tarjetas
}

function obtenerAciertos() {
    return aciertos
}

function setAciertos(x) {
    aciertos = x
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
            audioSeleccionar.play();
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
            audioDeseleccionar.play();
        } else {
            aciertos++
            trasera1.style.background = "green"
            trasera2.style.background = "green"
            const myModal = new bootstrap.Modal('#modalMensaje', {
                keyboard: false
            })
            const modalToggle = document.getElementById('modalMensaje');
            myModal.show(modalToggle);
            if (aciertos == 1) {
                aud5.play();
            }
            if (aciertos == 2) {
                aud6.play();
            }
            if (aciertos == 3) {
                aud7.play();
            }
            if (aciertos == 4) {
                aud8.play();
            }
            if (aciertos == 5) {
                aud9.play();
            }
            modalToggle.querySelector(".modal-title").innerHTML = obtenerTitulo(selecciones[0])
            modalToggle.querySelector(".modal-body").innerHTML = obtenerTexto(selecciones[0])
            

            //document.getElementById('modalMensaje').modal({ show:true })
        }
        // const modalMensaje = document.getElementById('modalMensaje')
        // modalMensaje.addEventListener('shown.bs.modal', event => {
        //     // do something...
        // })
    }, 1200);


    audioSeleccionar.play();

}

/* function obtenerImagen(seleccion) {
    let cards = obtenerTarjetas();    
    return cards[seleccion]['div'].trim();
} */

function obtenerTitulo(seleccion) {
    let doc;
    let id;
    let resultado;
    obtenerTarjetas().forEach(tarjeta => {
        doc = new DOMParser().parseFromString(tarjeta['div'].trim(), "text/xml")
        id = doc.firstChild.id.toString().replace(/^\D+/g, '')
        if (seleccion == id) {
            resultado = tarjeta['titulo']
        }
    });
    return resultado
}

function mostrarModalGanar() {

    if (aciertos == 5) {
        const myModal2 = new bootstrap.Modal('#modalMensaje2', {
            keyboard: false
        })
        const modalToggle2 = document.getElementById('modalMensaje2');
        myModal2.show(modalToggle2);
    }
}

function obtenerTexto(seleccion) {
    let doc;
    let id;
    let resultado;
    obtenerTarjetas().forEach(tarjeta => {
        doc = new DOMParser().parseFromString(tarjeta['div'].trim(), "text/xml")
        id = doc.firstChild.id.toString().replace(/^\D+/g, '')
        if (seleccion == id) {
            resultado = tarjeta['texto']
        }
    });
    return resultado
}



















/* 

rnd = Math.random() - 0.5
categoria = ""
if (rnd > 0) {
    categoria = "Moluscos y Crustáceos"
    if (Math.random() - 0.5 > 0) {
        for (let i = 0; i < 5; i++) {
            iconos.push(moluscosCrustaceos1[i]['imagen'])
            descripciones.push(moluscosCrustaceos1[i]['texto'])
            titulos.push(moluscosCrustaceos1[i]['titulo'])
        }
    } else {
        for (let i = 0; i < 5; i++) {
            iconos.push(moluscosCrustaceos2[i]['imagen'])
            descripciones.push(moluscosCrustaceos2[i]['texto'])
            titulos.push(moluscosCrustaceos2[i]['titulo'])
        }
    }
} else {
    categoria = "Peces y Algas"
    if (Math.random() - 0.5 > 0) {
        for (let i = 0; i < 5; i++) {
            iconos.push(pecesAlgas1[i]['imagen'])
            descripciones.push(pecesAlgas1[i]['texto'])
            titulos.push(pecesAlgas1[i]['titulo'])
        }
    } else {
        for (let i = 0; i < 5; i++) {
            iconos.push(pecesAlgas2[i]['imagen'])
            descripciones.push(pecesAlgas2[i]['texto'])
            titulos.push(pecesAlgas2[i]['titulo'])
        }
    }
}
//iconos ahora tiene 10 elementos para mostrar

let titulo = document.getElementById("titulo-categoria")
titulo.innerHTML = categoria; */