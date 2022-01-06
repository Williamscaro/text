// En esté ejemplo "Log" es una función y la palabra clavé "console" es un objecto que pertenece a la función.
console.log("Hello, Williams!");
// ***************************  Este tipo de función perteneciente a un objecto es llamada generalmente un "metodo". *************************
// La función es una pieza de codigo que le permité realizar una tarea Especifica, la cual acepta argumentos lo que es información que utilizarán durante la operación.

// HTML describe la estructura de un Documento mientras que CSS describe su presentación.
//  Ctrl + o open a file
// Trata de utilizar "let" en vez de "var" ya que cuando utilizas var puedes tener errores con la doble declaración.
let height;
console.log(height); // Aquí sale indefinido porque no tenemos nada guardado en nuestra variable.

let weight;
console.log(weight);

height = 180; // aqui ya estamos almacenando algo en nuestra variable como ya la declaramos mas arriba no es necesario de ponerle let.
let anotherHeight = height;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;
console.log(weight); // -> 70

height = 180;
// Aquí podemos notar que nuestra variable llamada height tiene almacenado 180
console.log(height); // -> 180        si imprimimos esto nos dice que tenemos 180,
console.log("height"); // -> height       en cambio esto lo toma literal por las  comillas e imprime height.

//almacenar string luego cambiar su valor y tipo
let greeting = "Hello!"; //Aquí hemos almacenado un string
let counter = 100; //mientras que aquí hemos almacenado un valor entero

console.log(greeting);
greeting = 1;
console.log(greeting);
//Aquí podemos apreciar que en JS podemos declarar una variable que almacena un tipo de dato y luego cambiarlo y no afecta.

//conversión implicita
let greeting = "Hello!";
let counter = 100;
greeting = greeting + counter;
console.log(greeting); // -> Hello!100  conversión implicitá JS encontró a greeting y luegó como hicimos una concatenación lo que hizo fue una conversión implicita y convirtio a counter en string.
