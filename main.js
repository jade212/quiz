// Cherry Blossom quiz

// quiz questions
document.getElementById("btn1").addEventListener("click", btnClicked);

function btnClicked() {
  let numCorrect = 0;

  // Mark Question #1
  let answer1 = document.getElementById("question1").value;
  if (answer1 === "spring") {
    document.getElementById("result1").innerHTML = "Correct";
    numCorrect++
  } else {
    document.getElementById("result1").innerHTML = "Incorrect";
  }

  // Mark Question #2

  let answer2 = document.getElementById("question2").value;
  if (answer2 === "Japan") {
    document.getElementById("result2").innerHTML = "Correct";
    numCorrect++
  } else {
    document.getElementById("result2").innerHTML = "Incorrect";
  }

  // Mark Question #3

  let answer3 = document.getElementById("question3").value;
  if (answer3 === "2 weeks") {
    document.getElementById("result3").innerHTML = "Correct";
    numCorrect++
  } else {
    document.getElementById("result3").innerHTML = "Incorrect";
  }

  // Mark Question #4
  let answer4 = document.getElementById("question4").value;
  if (answer4 === "life and death") {
    document.getElementById("result4").innerHTML = "Correct";
    numCorrect++
  } else {
    document.getElementById("result4").innerHTML = "Incorrect";
  }

  //Calulate the percentage
  let percentage = document.getElementById("percent");
  let score = document.getElementById("score");

  if (numCorrect === 4) {
    percentage.innerHTML = 100;
    score.innerHTML = 4
  } else if (numCorrect === 3) {
    percentage.innerHTML = 75;
    score.innerHTML = 3
  } else if (numCorrect === 2) {
    percentage.innerHTML = 50;
    score.innerHTML = 2
  } else if (numCorrect === 1) {
    percentage.innerHTML = 25;
    score.innerHTML = 1
  } else if (numCorrect === 0) {
    percentage.innerHTML = 0;
    score.innerHTML = 0
  }
}
