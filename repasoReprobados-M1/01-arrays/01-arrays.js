
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    
    //invertir elementos 
     let arrayRenornable = []; 
    
    for (let i = array.length-1; i >= 0 ; i--) {
        const element = array[i];

        console.log(element);


        if (element < 10 ) {
            arrayRenornable.push(element)
        }
    }
    return arrayRenornable; 
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    let commonArray = []; 
    let min1 = array1[0];
    let min2 = array2[0];

    // iteracion de array 1

    for (let index = 0; index < array1.length; index++) {
        element1 = array1[index];

        if(element1 < min1){
            min1=element1
        } 

    }

    //iteración de array 2
    for (let j = 0; j < array2.length; j++) {
        element2 = array2[j];
     
        if(element2 < min2){
         min2 = element2
      } 
     }

    if (element1 === element2){
         commonArray.push(element1)
    }
    
    if(min1 < min2){
        return min1
    
    } else return min2
        
    return commonArray
   
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimensional con arrays que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    let arraySumados = []; 


    // aqui iteramos en los sub-arrays del array
    for (let index = 0; index < array.length; index++) {
        
    //console.log(array[index]) //imprime toodos lo elementos encontrados en array. 


    if(typeof array[index] === "object"){
    arraySumados.push(array[index][0] + array[index][1])
    } 

    if(typeof array[index] === "number"){
        arraySumados.push(array[index])
    }
    
}
    return arraySumados

};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false


    //expect(mismoValorMismosElementos(100, 4)).toEqual([25, 25, 25, 25])

    //declaramos Array
    let expectedArray  = []; 
    //declaramos numero esperado
    let  expectedNumber = numero / divisor;


    // el modulo de 1 de todo numero entero es 0. 
    if(expectedNumber%1 !== 0){
        return false
    }

    //operación 
    while(divisor > 0){
    
    //pushear4 veces
    expectedArray.push(expectedNumber)
    divisor--
    }

    //retorno valor 
    return expectedArray;



};


function elementoMenorYMayor(array) {
   // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

    let numeroMenor =  array[0]; 
    let numeroMayor = array[0]; 
    let arrayEsperado = []; 

    for (index = 1; index < array.length; index++) {
        const element = array[index];
        
        if(element < numeroMenor ){
            numeroMenor = element; 
           
        }
    }

    arrayEsperado.push(numeroMenor) //1 

    for (let j = 1; j< array.length; j++) {
        const element2 = array[j];
        
        if(element2 > numeroMayor ){ //si cualquier lemento del array es mayor a 4

            numeroMayor = element2;  //numero mayor se volverá ese valor iterado.
        }
    }
    arrayEsperado.push(numeroMayor)

    return arrayEsperado; 
};

// elementoMenorYMayor([10, 15, 24])) // [10, 24]
// elementoMenorYMayor([2, 4, 9, 1])) // [1, 9]
// elementoMenorYMayor([10, 15, 24])) // [10, 24]
// elementoMenorYMayor([2, 4, 9, 1])) // [1, 9]

module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};