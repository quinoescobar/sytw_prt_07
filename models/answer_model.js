" use strict";
function Answer(args) {
  // body...
  // this.funci = funci;
  // this.cadena = cadena;
  // this.exreg = exreg;
  this.args = args;
  this.tipo = args.tipo;

  this.evaluar = function() {
	    alert("evaluando "+this.args);

      //aqui codigo de clasificacion de que tipo de argumento se ingresó
	  };
}
