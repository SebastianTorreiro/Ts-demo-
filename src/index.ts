import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'


console.log('Hola')

//declaracion de variables

let nombre: string = 'martin';

console.log("hola" + nombre)
console.log("hola", nombre, ', que tal?')
console.log(`hola ${nombre}`)

const PI: number = 3.1416

// tipo any explicitamente, la idea es evitarlo

let ejemplo: any = 'asdsd'

let error: boolean = false

// instanciacion multiple de variables

let a: string, b: boolean, c: number
a = 'asd'
b = true
c = 1

// c: string = 'asd' no se puede

//Builting Types number, string, boolean, void, null y undefined 

// tipos mas complejos

let listaTareas: string[] = ['tareas', 'tareas']

// combinar tipos en listas

let valores: (string | number | boolean)[] = [true, false, 'hola', 1]

// enumerados


// el valor es a, b y c

enum Estados {
    'completado' = 2,
    "incompleto" = 'b',
    'pendiento' = 'asd'
}

let estadoTarea: Estados = Estados.completado;

console.log(estadoTarea)



interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number,
}

// podemos crear variables que sigan la interface Tarea.


let tarea1: Tarea = {
    nombre: " tarea 1",
    estado: Estados.completado,
    urgencia: 10
}

console.log(tarea1)

// types de ts

type Producto = {
    precio: number,
    nombre: string
}

let coche: Producto = {
    nombre: 'audi',
    precio: 4000
}



//DO while ( se ejecuta al menos una vez)

// do {

// } while (condition);


// Funciones 
/**
 * Funcion que muestra un saludo por consola
 */

function saludar() {
    let nombre: string = 'martin';
    console.log(`hola ${nombre}`)
}

// Invocacion de la funcion
saludar();

/**
 * Funcion que muestra un saludo por consola
 * @param nombre nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log(`Adios, ${nombre}`)
}


/**
 * 
 * @param nombre Nombre de la persona a saludar, por defecto sera pepe
 */

function despedirPersona(nombre: string = 'pepe') {
    console.log(`hola ${nombre}`)

}

function despedidaOpcional(nombre?: string) {

    if (nombre) {
        console.log(`Adios, ${nombre}`)
    } else {
        console.log('Adios')

    }
}


function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    if (apellidos) {
        console.log(`${nombre}  ${apellidos} tiene ${edad} anios`)
    } else {
        console.log(`${nombre} tiene ${edad} anios`)

    }
}

variosParams("martin") // martin tiene 18 anios
variosParams("martin", "san jose") // martin san jose tiene 18 anios
variosParams("martin", undefined, 30) // martin tiene 30 anios
variosParams("martin", "san jose", 30) // martin san jose tiene 30 anios


function ejemploVariosTipos(a: string | number) {
    if (typeof (a) === 'string') {
        console.log('A es un string')
    } else if (typeof (a) === 'number') {
        console.log('A es un number')
    } else {
        console.log('A no es un string ni un number')
        throw Error('A no es un string ni un number')
    }
}


ejemploVariosTipos('Hola')
ejemploVariosTipos(3)

const ejemploArrow = () => {

}
/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellido de la persona
 * @returns Nombre completo de la persona
 */

function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre}  ${apellidos}`
}

const nombreCompleto = ejemploReturn("martin", "Torreiro")

/**
 * 
 * @param nombres es una lista de nombres de string
 */

function ejemploMultipleParams(...nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParams('martin')
ejemploMultipleParams('martin', 'sandra', 'juan')

const lista: string[] = ['alberto', 'martin', 'sandra', 'juan']

function ejemploParamLista(nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}

ejemploParamLista(lista);
// ejemploParamLista('martin', 'sandra', 'juan'); error
let empleadoMartin = {
    nombre: 'Martin',
    apellidos: "San jose",
    edad: 30
};

type Empleado = {
    nombre: string
    apellidos: string
    edad: number
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} anios`

mostrarEmpleado(empleadoMartin);

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`
    } else {
        return `Empleado ${empleado.nombre} no esta en edad de jubilacion`
    }
}

datosEmpleado(empleadoMartin); // Empleado martin no esta en edad de jubilacion

const obtenerSalario = (empleado: Empleado, cobrar: Function) => {
    if (empleado.edad > 70) {
        return
    } else {
        cobrar()
    }
}

const cobranzas = () => console.log('asdasdasd')

obtenerSalario(empleadoMartin, cobranzas)


// Funciones asincronas

async function ejemploAsync(): Promise<string> {
    await console.log('Tarea asyncrona')
    return 'completado'
}

ejemploAsync()
    .then((respuesta) => {
        console.log('respuesta', respuesta);
    }).catch((error) => {
        console.log('ha habido un error', error)
    }).finally(() => "todo ha terminado")



// Funciones generadoras

function* ejemploGenerator() {
    //yield --> para emitir valores

    let index: number = 0;

    while (index < 5) {
        //emitimos un valor incrementando
        yield index++
    }
}

// guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// accedemnos a los valores emitidos 
console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 3
console.log(generadora.next().value) // 4

// Worker

function* worker(valor: number) {
    yield valor + 1
    yield valor + 2
    yield valor + 3

}

// watcher

function* watcher(valor: number) {
    yield valor; //emitimos el valor inicial 
    yield* worker(valor) // llamamos a las emisiones del woker para que emita otros valores
    yield valor + 4

}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (Lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (Lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (Lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (Lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (Lo ha hecho el watcher)



// persistencia de datos

// 1. localstorage ---> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. session storage ---> La diferencia radica en la sesion del navegador. Es decir, los datos persisten en la sesion de navegador.
// 3. cookies ---> tiene una fecha de caducidad y tambien tiene un ambito de URL

// estos datos son accesibles desde las herramientas del navegador asique no debemos guardar informacion sensible


// function guardar():void{
//     // localstorage.set('nombre', 'sebastian')
// }

// function leer():void{
//     let nombre = localStorage.get('nombre')
// }

//cookie


const cookieOptions = {
    name: 'usuario', // string
    value: 'Martin', // string
    maxAge: 10 * 60, // optiional number(value in seconds)
    expires: new Date(2099, 10, 1), // optional date
    path: '/', // optional string
}



// seteamos la cookie

setCookie(cookieOptions);

// leer

let cookieValue = getCookieValue('usuario')

// eliminar 
deleteCookie('usuario');

// eliminar todas las cookies

deleteAllCookies();



// Clase temporizador

class Temporizador {

    public terminar?: (tiempo: number) => void;

    public empezar(): void {

        setTimeout(() => {
            // comprobamos que exista la funcion terminar como callback

            if (!this.terminar) return
            //cuando haya pasado el tiempo, se ejecutara la funcion terminar
            this.terminar(Date.now());

        }, 10000);


    }
}

const miTemporizador: Temporizador = new Temporizador();

// definimos la funcion del callback a ejectuar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
    console.log('hermos terminado a las: ', tiempo)
}

// lanzamos el temporizador 

miTemporizador.empezar(); // se inicia el timeout y cuando termine, se ejecuta la funcion terminar.

// setInterval(() => console.log('tic'), 1000) // Imprimir 'tic' cada segundo

// Eliminar la ejecucion de la funcion

delete miTemporizador.terminar;


// document.getElementById("boton-login").addEventListener('click', ()=>{
//     console.log('has hecho click en login')\
// })


// Extender de EventTarget

class Temporizador2 extends EventTarget{
 
}