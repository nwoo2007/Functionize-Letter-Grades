// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades
  // English
  document.getElementById("eng-letter").innerHTML = percentToLetter(engPercent);
  // Social Studies
  document.getElementById("soc-letter").innerHTML = percentToLetter(socPercent);
  // Mathematics
  document.getElementById("math-letter").innerHTML =
    percentToLetter(mathPercent);
  // Science
  document.getElementById("sci-letter").innerHTML = percentToLetter(sciPercent);
}

// Calculate Grades
function percentToLetter(percent) {
  let letterGrade;
  if (percent >= 80) {
    letterGrade = "A";
  } else if (percent >= 65) {
    letterGrade = "B";
  } else if (percent >= 55) {
    letterGrade = "C";
  } else if (percent >= 50) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return letterGrade;
}

// percentToLetter
// purpose: convert a percentage grade to a letter
// data function needs: percentage grade
// data function returns: the corresponding letter grade

// ctrl + b select same text of highlighted text everywhere
