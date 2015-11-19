" use strict";

function Question(frage) {
  // body...
  this.frage=frage;
}

function ShortQuestion(frage) {
  // body...
  Question.call(this,frage);
  //input
  this.vista="<input type='text' name='ShortQ'>"+ this.frage +"</input>";
}

function LongQuestion(frage) {
  // body...
  Question.call(this,frage);
  //textarea
  this.vista="<textarea name='LongQ' rows='4' cols='50'>"+ this.frage +"</textarea>";


module.exports = Question;
module.exports = ShortQuestion;
module.exports = LongQuestion;
