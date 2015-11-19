var AbstractQuiz = require('../models/abstract_quiz_model');
var Answer = require('../models/answer_model');
var ShortQ = require('../models/question_model');
var LongQ = require('../models/question_model');
function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new ShortQ('¿Capital de Italia?'),
      respuesta: new Answer(/^\s*roma\s*$/i)
    },
    {
      pregunta: new LongQ('Cada país me distingue,porque yo lo represento,suelo estar en las alturas cara al sol y cara al viento.¿Soy una....?'),
      respuesta: new Answer(/^\s*bandera\s*$/i),
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<5;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      //debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      //debug("n2 = "+n2);
      self.q.push(
        { pregunta: new ShortQ('¿ '+n1+'*'+n2+"= ?"),
          respuesta:new Answer( function(x) {
            // debug("n1 = "+n1);
            // debug("n2 = "+n2);
            return (x == n1*n2);
        })
      });
    })();
  }
  // debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
