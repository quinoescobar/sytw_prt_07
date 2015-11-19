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
  this.vista="<textarea rows='4' cols='50'>";
}

module.exports = Question;
module.exports = ShortQuestion;
module.exports = LongQuestion;
