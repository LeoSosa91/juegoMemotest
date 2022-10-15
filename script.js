var iconos = []
var selecciones = []

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
            categoria = "Moluscos y Crustáceos"
        } else {
            iconos = moluscosCrustaceos1
            categoria = "Moluscos y Crustáceos"
        }
    } else {
        if (Math.random() - 0.5 > 0) {
            iconos = pecesAlgas1
            categoria = "Peces y Algas"
        } else {
            iconos = pecesAlgas2
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
    for (let i = 0; i < 10; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" id="area-tarjeta${i}" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="bi bi-question-square" ></i>
                        </div>
                    </div>
                </div>        
                `)
        //<img src="assent/images/wakame.jpeg" class="img-fluid d-block mx-auto my-auto"  alt="...">

        // style="font-size:600%" style="height: 100px; width: 100px;"
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
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
            //document.getElementById('modalMensaje').modal({ show:true })
        }
        // const modalMensaje = document.getElementById('modalMensaje')
        // modalMensaje.addEventListener('shown.bs.modal', event => {
        //     // do something...
        // })
    }, 500);


}