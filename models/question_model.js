" use strict";

function Question(frage) {
  // body...
  this.frage=frage;
}

function ShortQuestion(frage) {
  // body...
  Question.call(this,frage);
  //input
    this.vista="<input type='text' name='respuesta' placeholder='Ponga la respuesta' autofocus=''>";
}

function LongQuestion(frage) {
  // body...
  Question.call(this,frage);
  //textarea
  this.vista="<textarea name='respuesta' rows='4' cols='50' placeholder='Ponga la respuesta' autofocus=''></textarea>";


}


Question.prototype.inputArea = function ()
{
  if (this instanceof LongQuestion)
  {
    this.vista="<input type='text' name='respuesta' placeholder='Ponga la respuesta' autofocus=''>";
  }else  if (this instanceof ShortQuestion)
  {
    this.vista="<textarea name='respuesta' rows='4' cols='50' placeholder='Ponga la respuesta' autofocus=''></textarea>";
  }
};


// Sólo se esta enviando el último
// module.exports = Question;
// module.exports = ShortQuestion;
// module.exports = LongQuestion;
exports.Question = Question;
exports.ShortQuestion = ShortQuestion;
exports.LongQuestion = LongQuestion;
// module.exports = function() {
//     console.log('Exportando ');
//
// };
