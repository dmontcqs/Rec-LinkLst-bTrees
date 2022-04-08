// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo:

  //comenzamos recursed number en 1: esto multiplicará elementos del array.  
  let recursedNumber = 1; 

  //caso de corte: no hay elementos en el array,devuelve  recursed Number (1). 

  if(array.length === 0) { return recursedNumber}; 
  
  //si hay elementos en el arrray. recursedNumber tomará el valor de la multimplicación entre el primer valor del array  ( con .shift()) y el resultado de la función que se llama así misma. 

  recursedNumber = array.shift() * producto(array); 
  
  //retornar recursedNumber que tendrá el resultado de la multiplicación entre elementos del array. 
  return recursedNumber; 

};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  //escribe aqui tu codigo 
    //condición de corte: si encuentra el valor en el árbol de objetos.
    //iteramos con un for, ideal para objetos.  
    for (const key in obj){
         
      //si encontramos el valor como key del objeto, entonces retornamos True. (si está el valor en el árbol)
      if (obj[key] === value) return true;
      
      //si no lo encontramos continuamos iteración pero solo en donde las key del objeto sean de tipo objeto (array también sería de tipo objeto, cuidado.)
      if (typeof obj[key] === "object" ) {

          //Saltarse la primera propiedad o decirle que si el valor de esa propiedad no es un objeto, se salte a la que sigue

          //guardar el llamado a recursión en "aux" para que siga recorriendo el árbol y no se pare en el primer objeto devolviendo "false".

          let aux= isThere(obj[key], value)
          
          // rEn la siguiente linea retornamos TRUE SOLO SI la evaluación de la recursión es TRUE. Porque la función por sí sola retorna true o false y termina ejecución al retornar cualquiera de estos valores de modo que si encuentra un false ya no continuaria la ejecución. En este caso, nosotros queremos que continúe buscando en el árbol (que de true), que no se detenega al devolver false, que continúe buscando hasta dar con el valor. Para hacerlo, wrapeamos el resultado de la función dentro de una variable que hace que solo en el caso de que la recursión sea true, devolverá true. Así ya no se para la recursión en el false, se espera aesta ultima condición que le dimos. 

          if (aux) return true 
          
      } 

} return false

};
module.exports = { producto, isThere };
