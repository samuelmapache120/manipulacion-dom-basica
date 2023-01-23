## Respuestas al trest de JavaScript

Estas respuestas (a al menos la mayoría) NO SON ABSOLUTAS. Es válido (en la mayoría de los casos) tener otras respuestas. 

## Variables y operaciones

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios: 

- ¿Qué es una variable y para qué sirve? 

R/= Cajas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e incializar una variable?

R/= Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre que deseamos. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

R/= EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando sumamos strings, lo que hace es unir (concatenar, en lenguaje tecnico) ambos strings. y gracias a la coercion de JavaScript podremos incluso concatenar strings con números, por ejemplo 

```js
let concatenacion = "Hola, " + 2; // 'Hola, 2'
```

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre                        // String
- Apellido                      // String
- Nombre de usuario en Platzi   // String
- Edad                          // Number
- Correo electrónico            // String
- Mayor de edad                 // Boolean
- Dinero ahorrado               // Number
- Deudas                        // Number 

### 3️⃣ Taduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

 ```js
let nombre = "Samuel";
let apellido = "Ramírez";
let nombreUsPlatzi = "Samuel Ramriez";
let edad = 19;
let correoElectronico = "samuelramirez.2911@gmail.com";
let mayorEdad = "true";
let dineroAhorrado = 50000;
let Deudas = 2000000;
 ```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

let nombreCompleto = nombre + ' ' + apellido;

let dineroReal = dineroAhorrado - Deudas;

## Funciones 

### 1️⃣ responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

R/= Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?

R/= Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro. 

También nos sirva para ordenar y mejorar la legibilidad de nuestro código

- ¿Cual es la diferencia entre parámetros y argumentos de una función?

R/= Las funciones reciben parametros cuando las estamos declarando. Les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:  

```js
const names = "Samuel";
const lastName = "Ramírez Tisnés";
const completeName = name + lastName;
const nickName = "Sam"

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");

```

```js
function completeName(name, lastName, nickName){
    console.log("Mi nombre es " + name + " " + lastName + ", pero prefiero que me digas " + nickName + ".")
}

completeName("Samuel", 'Ramírez', 'Sam')

```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

R/= Son la forma en la que ejecutamos un bloque de código u otro dependiendo de alguna condicion o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

R/= if  (else y else if), Switch, arreglos

El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch los cases se comparan con la misma variable o condición que definimos en el switch 

- ¿Puedo conbinar funciones y condicionales?

R/= Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales. 

### 2️⃣ Replica el comportamiento del siguiente código que use la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

```

## Solución

```js
function planPlatzi(tipoDeSuscripcion) {
    if (tipoDeSuscripcion == 'Free'){
        console.log("Solo puedes tomar cursos gratis");
    }
    else if (tipoDeSuscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (tipoDeSuscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if (tipoDeSuscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
    }
}
```

### 3️⃣ Replica el comportamiento de tu codicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). 

> 💡 Bonus: si ya eres un experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional 

```js
 function planPlatzi(tipoDeSuscripcion) {
    if (tipoDeSuscripcion === 'Free'){
        console.log("Solo puedes tomar cursos gratis");
        return;
    }
    if (tipoDeSuscripcion === 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return; 
    }
    if (tipoDeSuscripcion === 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if (tipoDeSuscripcion === 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
        return;
    }
    console.warm('Ese tipo de suscripcion no existe')
}
```
 ### Bonus 

```js

let tiposDeSuscripciones = {
    free: "Solo puedes tomar cursos gratis",
    basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
    }
}

conseguirTipoSuscripcion('free')
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios: 

- ¿Qué es un ciclo?

R/= La forma de ejecutar un bloque de código hasta que se cumpla cierta condición

- ¿Qué tipos de ciclos existen en JavaScript?

R/= while, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

R/= Es cuando la validación de nuestros condicionales nunca se cumple y termina dañando la aplicación (e.j. cuando el navegador ya no puede rrealizar mas ejecuciones de un mismo bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

R/= Si, aunque los ciclos son una especie de condicionales, nada nos impide agragar más condicionales dentro del ciclo 
 

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5 ; i++) {
    console.log("El valor de i es: " + i)
}

// Respuesta 

let i = 0 

while ( i <  5) {
    console.log("El valor de i es: " + i)
    i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i)
}

let i = 10

while ( i >= 2 ) {
    console.log("El valor de i es: " + i)
    i--
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: Puedes usar la función prompt de JavaScript. 

```js
let respuesta = prompt("Cuánto es 2 + 2")

while (respuesta != '4') {
    alert("Vuelva a intentarlo")
    let respuesta = prompt("Cuánto es 2 + 2")
}
alert("La respuesta es correcta!")

```

## Listas 

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios: 

- ¿Qué es un array?

R/= Es una lista de elementos (datos).

```js
const array = [1, 'jaja', true, false, {nombre: "Samuel", edad: 18}]
```

- ¿Qué es un objeto?

R/= Es una lista de elementos PERO cada elemento tiene un nombre clave.

```js
const objeto = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', ' vegetales']
}
```

- ¿Cuándo es mejor usar objetos o arrays?

R/= Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir), Mientras que un objeto cuanto los nombres de cada elemnto son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

R/=Sí. Los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades. 

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. 

```js
function imprimirtElemento (array) {
    console.log(array[0])
}

imprimirtElemento([1,2,3]) // 1

```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir al array completo).

```js 

function imprimirArreglo(array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
imprimirArreglo([1,2,3,4,5,6]) 

// 1
// 2
// 3
// 4
// 5
// 6

```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
const objeto = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', ' vegetales']
}

function imprimirElementosDeUnObjeto (objeto) {
    const arreglo = Object.values(objeto)
    for (let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i])
    }
} 

imprimirElementosDeUnObjeto(objeto)

// Fulanito

// 3

// ['Pollo frito', ' vegetales']

```