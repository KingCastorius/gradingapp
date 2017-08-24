let userInput = document.getElementById('userInput')
let userOutput = document.getElementById('userOutput')
function submit() {
  if(userInput.value > 90 && userInput.value < 100) {
    userOutput.innerHTML = "A"
  } else if (userInput.value > 80 && userInput.value < 90) {
      userOutput.innerHTML = "B"
  } else if (userInput.value > 70 && userInput.value < 80) {
      userOutput.innerHTML = "C"
  } else if (userInput.value > 60 && userInput.value < 70) {
      userOutput.innerHTML = "D"
  } else if (userInput.value > 0 && userInput.value < 60) {
      userOutput.innerHTML = "F"



  }
}
