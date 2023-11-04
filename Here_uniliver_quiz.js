function checkAnswers() {
  var answers = document.querySelectorAll('input[name="answer"]:checked');
  var correctAnswers = "Elephant";
  for (var i = 0; i < answers.length; i++) {
    if (answers[
