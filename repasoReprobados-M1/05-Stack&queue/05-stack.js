const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  

//creamos nueva instancia de Stack porque es aquí y no en otro archivo (como ene el caso de Filas) donde la utilizaremos. 

  let stack = new Stack();// la clase Stack viene de estructuras.js y es un array que está vacío en este punto. 

//creamos string vacía que retornaremos al final. 
  let reversedString = "";

  //hacemos for loop sobre la string recibida p. ej : "Colombia Argentina"
  for (let i = 0; i < str.length; i++) {
      //si el iterador pasa por un espacio. (para separar las palabras.)
    if (str[i] === " ") {
      //y mientras que el size del stack sea mayor a 0
      while (stack.size() > 0) {
        //agrega a reverseString el último elemento del stack. 
        reversedString = stack.pop();
      }
      //si no es mayor a 0, como en la primera iteración, entronces reverseString se convertirá en los valores iterados del str. 
      //"C, o, l, o , m, b, i, a"
      reversedString = reversedString + str[i];
    } else {
      // aquí agregamos cada letra iterada del array al stack
      stack.push(str[i]); //["C, o, l, o , m, b, i, a"]
    }
  }
  //mientras haya valores en el stack, 
  while (stack.size()) {
      //reverseString irá sumando los últimos valores que tenía el stack:  
    reversedString += stack.pop(); // a, i, b, m, o, l, o, C. 
  }
  //retornamos la string reverseada esta string priero recibirá la primera palabra e irá colocando las letras en posición al revés. Después toma la segunda palabra y efectúa la misma operación. 
  
  return reversedString; 
};


module.exports = {
    efectoEspejo,
   
}