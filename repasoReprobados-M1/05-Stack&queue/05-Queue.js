const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
  //hacemos arreglo de nombres que van a ingresar al evento.
  let nombres = [];
  //hacemos arreglo para guardar los tickets que ya han sido usados. 
  let ticketIngresados = [];

  //mientras que hayan elementos en la fila. 
  //evaluamos esto con método .size() ue devuelve un número de elementos. 

  while (queue.size()) {
    //quita al primer elemento de la fila (index 0) y guárdalo como "persona". 
    let persona = queue.dequeue();
    //si este objeto ahora llamado persona tiene una propiedad de "age" mayor a 18 y además la propiedad ticket tiene una propiedad "event" idéntica al parámetro que le enviamos, y además el número de su ticket de la persona NO está en el array ticketIngresados 
    if (
      persona.age >= 18 &&
      persona.ticket.event === event &&
      !ticketIngresados.includes(persona.ticket.number)
    ) 
    //entonces... al array nombres pushea la propiedad fullname de la pesona. 

    {
      nombres.push(persona.fullname);
    //y guada en tickets ingresados el número de ticket de la persona. 

      ticketIngresados.push(persona.ticket.number);
    }
  }
  //cuando termines, regresa el array con los nombres que pasaron las condiciones: mayor a 18, ticket con el evento y numeor no repetido en array tickets. 
   
  return nombres;
};
      
  

  module.exports = {
    controlAcces,
   
}