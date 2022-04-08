const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
   
//caso de corte: encontramos el valor en el arbol. 
if (this.value === value) return this.value;
 
// si el valor (p.ej. 7) es menor al del nodo derecho y además hay valor en el nodo izquierdo, 
 if (value < this.value && this.left) {

    //entonces aplica recursión sobre el arbol de la izquierda: 
    return this.left.search(value);

    //si el valor es mayor al valor del nodo raíz y además hay valores en el nodo derecho, 
  } else if (value > this.value &&  this.right) {

    //entonces aolica recursión sobre el arbol de la derecha
    return this.right.search(value);

    //si ya se hicieron todas las recursiones posibles, y no se encontró el valor, entonces quiere decir que no está en nuestro árbol.

  } else {
    return "no se encontró el valor";
  }
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(){

    //TypeError: Cannot read property 'value' of null

    //inicilizamos nivel en 0. 
    let nivel = 0; 
    let nivelLeft = 0; 
    let nivelRight = 0; 

    //caso de corte
    if(!this.left && !this.right) return 0; 


    //caso de que solo tengo nodos derecha, suma 1 que es el de la head. 
    else if(this.right && !this.left) return 1 + this.right.height() 
    //caso de que solo tengo nodos a la izquierda suma 1 que es el del nodo raíz
    else if(this.left && !this.right) return 1 + this.left.height()
    //caso: tengo nodos a la derecha y a la izquierda. 
    //regresa el valor mayor entre la rama left y rama right.
    else if(this.right && this.left) return Math.max(1+this.left.height(), 1+this.right.height())              


}



module.exports={
    BinarySearchTree
}