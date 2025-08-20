// 1) SELECCIONAR ELEMENTO
// 2) SELECCIONAR O MANIPULAR ELEMENTO

// selecionar elementos html
const opcionJugador = document.querySelectorAll('.opcion')
const resultadoMensaje = document.getElementById('mensaje')

// voy a definir una lista
const opciones = ['piedra', 'papel', 'tijera']

//funcion para jugar el juego
function jugar(opcionSeleccionada){
    // hacer que la computadora elija una opcion de manera aleatoria
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)] //[Math.flor]--> es para que agarre un número al asar 
    let resultado ='' // se queda vacio el resultado ya que no sabemos cual va hacer
    if(opcionSeleccionada === opcionComputadora){
        resultado ='Empate'
    }else if(
        (opcionSeleccionada === 'piedra' && opcionComputadora === 'tijera') ||
        (opcionSeleccionada === 'papel' && opcionComputadora === 'piedra') ||
        (opcionSeleccionada === 'tijera' && opcionComputadora === 'papel')
    ){
        resultado = 'Ganaste'
    }else{
        resultado = 'Perdiste'
    }
    // actualizar el resultado del mensaje
    // manipular el contenido de mi etiqueta "p"
    resultadoMensaje.textContent = `Elegiste ${opcionSeleccionada} la máquina eligio ${opcionComputadora}.  ${resultado} `
}
// agregar AddEventListener a cada opción del boton
// recorrer el array o lista llamada opciones.
    opcionJugador.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const opcionSeleccionada = opcion.dataset.opcion
            jugar(opcionSeleccionada)
        })
    })