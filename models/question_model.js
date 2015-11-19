" use strict";

function Question(argument) {
  // body...
  this.argument=argument;
}

function ShortQuestion(argument) {
  // body...
  Question.call(this.argument);
}

function LongQuestion(argument) {
  // body...
  Question.call(this.argument);
}

module.exports = Question;
module.exports = Question;
module.exports = Question;
