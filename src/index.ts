console.log('ashe')

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

enum Estados{
    'completado'= 2,
    "incompleto"= 'b',
    'pendiento'= 'asd'
}

let estadoTarea: Estados = Estados.completado;

console.log(estadoTarea)



interface Tarea{
    nombre: string,
    estado: Estados,
    urgencia: number,
}

// podemos crear variables que sigan la interface Tarea.


let tarea1: Tarea = {
    nombre:" tarea 1",
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

 