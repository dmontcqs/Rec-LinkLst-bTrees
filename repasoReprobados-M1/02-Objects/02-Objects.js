function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      // "este Libro tiene este titulo"
      // "este libro tiene este autor"
      this.titulo= titulo;
      this.autor= autor;
        // [ {} {} {} ]
      this.traducciones = traducciones; 
    }
    getTitulo() {
      // este método debe retornar el titulo del libros.
      // Tu código aca:
      return this.titulo;
    }
    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor;
    }
    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      // agregar un obj a un arreglo
      // no debo retornar nada
      this.traducciones.push({ idioma, editorial });
    }
    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones:
      // [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      // un arreglo nuevo para agregar los nombres de los idiomas
      // pararme en cada idioma, para poder acceder al nombre
      // [ {} {} {} {} ]
      //             e
      let arregloNuevo = [];
      this.traducciones.forEach((element) => {
        // codigo
        arregloNuevo.push(element.idioma);
      });
      return arregloNuevo;
    }
    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones:
      // [
      //   {idioma: 'inglés', editorial: 'Scholastic'},
      //   {idioma: 'inglés', editorial: 'MIT2020'},
      //   {idioma: 'castellano', editorial: 'Santillana'}
      // ]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      let idiomas = this.getTraducciones(); // ["ingles", "ingles", "castellano"]
      let aux = new Set(idiomas); // {"ingles", "castellano"}
      return aux.size;
    }
  }

  return Libro;
}
let Libro = crearClaseLibro();
let libro1 = new Libro("titanic", "Autora", [
  { idioma: "inglés", editorial: "Scholastic" },
  { idioma: "castellano", editorial: "Santillana" },
]);

libro1.getAlcance();

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };

//pista: usar Bucle for in: 
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let newArray = [];
  
  //cuando tengamos que recorrer objetos utilizar for in loop
  //Se transforma en cada propiedad del objeto (el key), al devolverlo , lo hace en formato string.

  for (element in hogwarts.staff) {

    let job = element //headmaster, keeperOfKeys, PositionMaster
    let completeName = hogwarts.staff[element].name //Albus.... Dumbledore',

    newArray.push(`The ${job} is ${completeName}`) //
  }
  return newArray; 
};

//dot notation ----> recibe el nombre literal de la propiedad: howards.staff

//bracket notation ---> espera una string con el nombre de la propiedad : howards["staff"]


module.exports = { crearClaseLibro, printStaff }