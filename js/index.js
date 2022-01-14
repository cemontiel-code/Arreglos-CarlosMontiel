// Declaracion de variables globals
    let estudianteList =[];                                // Arreglo para almacenar estudiantes
    

// clase de estudiante
class Estudiante {
    constructor( dni, lname, nombre, nota1, nota2, nota3) {
        this.dni    =  dni;
        this.ape    =  lname;
        this.nombre =  nombre;
        this.nota1  =  nota1;
        this.nota2  =  nota2;
        this.nota3  =  nota3;
        this.notaF  =  undefined;
        this.aprovo =  undefined;
        this.css    =  "background-color:white;";
    }
    calcFinal(){
        this.notaF = this.nota1 * 0.25 + this.nota2 * 0.25 + this.nota3 * 0.5;
    }
    calcPass(){
        switch (true) {
            case this.notaF > 5:
                this.css = "background-color:rgb(133,255,133);";
                this.aprovo = "Aprovado";
                break;
            case this.notaF < 6:
                this.css = "background-color:rgb(255,133,133);";
                this.aprovo = "Desaprovado"; 
                break;
            default:
        }    
    }
}


function determinarNota() {

// recoleccion los datos ingresados por el usuario
    const dni    = document.getElementById("DNI").value;        // DNI del Estudiante
    const lname  = document.getElementById("lName").value;      // Apellido del Estudiante
    const name   = document.getElementById("name").value;       // Nombre del Estudiante
    const grade1 = document.getElementById("grade1").value;     // Primera entrega
    const grade2 = document.getElementById("grade2").value;     // Segunda entrega
    const grade3 = document.getElementById("grade3").value;     // Tercera entrega

// inyeccion de datos 
    const estudianteNuevo = new Estudiante( dni, lname, name,grade1,grade2,grade3);
    
// metodo para calcular la nota final 
    estudianteNuevo.calcFinal();
// Determina si la nota es suficiente para aprovar 
    estudianteNuevo.calcPass();

// almacenamos en el arrreglo de lista de estudiantes
    estudianteList.push(estudianteNuevo);
   
// Salida de datos
    printFinal(estudianteList);
}

function ordenarLista() {
    try {
        estudianteList.sort(function (a, b) {
            if (a.ape > b.ape) {
                return 1;
            }
            if (a.ape < b.ape) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        
        //imprimimos la lista organizada en la tabla 
        printFinal(estudianteList);

    } catch (error) {
        alert("lista no existe");
    }
}

function filtarListaApr() {
    try {
        const listaFiltrada = estudianteList.filter(
          (element) => element.aprovo == "Aprovado"
        );
            printFinal(listaFiltrada);

    } catch (error) {
        alert("lista no existe");
    }
}

function filtarListaDes() {
    try {
        const listaFiltrada = estudianteList.filter(
          (element) => element.aprovo == "Desaprovado"
        );
            printFinal(listaFiltrada);

    } catch (error) {
        alert("lista no existe");
    }
}


function printFinal(arrayEst) {
  let table = document.getElementById("outputTable"); // elemento table dentro del htmlgit 
  let outputRow = ""; // variable de salida
  let auxRow = ""; // variable de salida
  let auxlist = [];

  // generando salida
  arrayEst.forEach((index) => {
    auxRow =
      "<tr style=" +
      index.css +
      "><td>" +
      index.dni +
      "</td><td>" +
      index.ape +
      "</td><td>" +
      index.nombre +
      "</td><td>" +
      index.nota1 +
      "</td><td>" +
      index.nota2 +
      "</td><td>" +
      index.nota3 +
      "</td><td>" +
      index.notaF +
      "</td><td>" +
      index.aprovo +
      "</td> </tr>";

    console.log("auxRow", auxRow);

    auxlist.push(auxRow);
  });

  auxlist.forEach((index) => {
    outputRow = outputRow + index;
  });

  // salida
  table.innerHTML = outputRow;
}