let iconos = []
let selecciones = []

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
    iconos1 = [
        '<img src="assent/images/almeja.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/sombrerito.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/mejillon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/cholga.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol1.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol2.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/caracol3.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pulpoColorado.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/centolla.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/langostino.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    iconos2 = [
        '<img src="assent/images/merluzaComun.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pejerrey.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezGalloOElefante.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/pezSapo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/robalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/salmon.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/wakame.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/lechugaDeMar.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/escrofalo.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
        '<img src="assent/images/luche.jpeg" class="img-fluid d-block mx-auto my-auto imagen"  alt="...">',
    ]
    random = Math.random() - 0.5
    if (random > 0) {
        iconos = iconos1
    } else {
        iconos = iconos2
    }   
    //iconos ahora tiene 8 elementos al azar para mostrar
}


function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 20; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" id="area-tarjeta" onclick="seleccionarTarjeta(${i})">
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
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        //let areaTarjeta = document.getElementById("area-tarjeta")
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
    }, 200);

}