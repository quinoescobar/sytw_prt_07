" use strict";
function Answer(args) {
  this.args=args;
  if (typeof this.args === "string")
  {
    return function(x) { return x === 'string'; };
  } else if(typeof this.args=== "number")
          {
            return function(x) { return x === number; };
          }




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
