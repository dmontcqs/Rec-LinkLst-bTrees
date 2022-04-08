const { LinkedList, Node } = require("../estructuras")

//FUNCIÓN QUE DEVUELVE EL LENG DE LA LISTA ENLAZADA. 

LinkedList.prototype.size = function () {

  if (!this.head) return 0;
  let current = this.head; // M
  let cuenta = 1;
  while (current.next) {
    cuenta++;
    current = current.next;
  }
  return cuenta;

};


//FUNCIÓN QUE ORDENA EN ORDEN ASCENDENTE. 

LinkedList.prototype.orderList = function () {
  // Tu código aca:
  if (!this.head) return false;
  let arregloNuevo = []; // [5,4,3]
  let current = this.head;
  while (current) {
    arregloNuevo.push(current.value);
    current = current.next;
  }
  arregloNuevo.sort((a, b) => b - a);
  // Head --> [5] --> [4] --> [3]
  //           c
  // [5,4,3]
  this.head = null;
  this.len = 0;
  for (let i = 0; i < arregloNuevo.length; i++) {
    this.add(arregloNuevo[i]);
  }
};


//FUNCIÓN PARA agregar nodos pasándole DATA y POSICIÓN dentro de la lista enlazada.   

  LinkedList.prototype.insert = function(data,pos) {

    //hacemos el nuevo nodo
    var node = new Node(data);

    //valor actual será el head. 
    var actual = this.head;
    
    //seteamos var anterior a null.  
    var anterior = null;
    
    
      //si la posición que me mandan es mayor al length de la lista, añade el nodo al final.  
      //utiliza .add (de estructuras.js) que hace lo que dice, agrega a la lista enlazada. 

    if (pos > this.len) return this.add(data);       
         
    // si pos es 1, quiere decir que es la primera posición. 
    if (pos === 1) {     
      //si es así el que era el head (actual) se volverá next del nodo.       
      node.next = actual;
      //actualizamos el head al nodo nuevo. 
      this.head = node;   
    };
    
    //si la posición es diferente a 1
    if (pos !== 1) {     
      //itera en cada número debajo de la posición.           
       for (let i = 1 ; i < pos; i++) {
         //y haz que anterior que era null, se vuelva el actual. 
          anterior = actual;
          //y actualiza el actual como el next del que era actual.
          actual = actual.next;
        }
        //el anterior .next se vuelve el nodo
       anterior.next = node;
       //y el next del nodo se vuelve el actual. 
       node.next = actual; 
      }
      //aumenta el length en 1. 
      this.len++;
  };

module.exports={
  LinkedList
}



