document.getElementById("countDownOver").style.visibility = "hidden"

var numberOfQuestions = 5
var quizTime = 60
var countDownInterval = setInterval(function () {
  quizTime -= 1
  document.getElementById("countDown").textContent = quizTime
  if (quizTime === 0) {
    document.getElementById("countDownOver").style.visibility = "visible"
    clearInterval(countDownInterval);
    document.getElementById("submit").disabled = true
  }
}, 1000)

function submitForm(e) {
  clearInterval(countDownInterval);
  var numberOfCorrectInputs = 0
  for (var i = 1; i < numberOfQuestions + 1; ++i) {
    var isCorrect = checkQuestion('q' + i)
    if (isCorrect) {
      numberOfCorrectInputs += 1
    }
  }
  document.getElementById("results").textContent = `You got ${numberOfCorrectInputs} out of ${numberOfQuestions} questions correct!`
}

function checkQuestion(questionElementId) {
  var questionElement = document.getElementById(questionElementId)
  var questionAnswer = questionElement.dataset.answer
  var questionInputElements = questionElement.querySelectorAll("input")
  var userInputValue
  for (var i = 0; i < questionInputElements.length; ++i) {
    var inputElement = questionInputElements[i]
    if (inputElement.checked) {
      userInputValue = inputElement.value
      break;
    }
  }
  if (userInputValue === questionAnswer) {
    return true
  } else false
}