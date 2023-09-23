// Function to calculate and return the grade based on student marks
function calculateGrade(marks) {
    if (marks > 79) {
      return 'A';
    } else if (marks >= 60 && marks <= 79) {
      return 'B';
    } else if (marks >= 50 && marks <= 59) {
      return 'C';
    } else if (marks >= 40 && marks <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  

  const studentMarks = parseFloat(prompt('Enter student marks (between 0 and 100):'));
  

  if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
    
    const grade = calculateGrade(studentMarks);
  

    console.log(`Student Grade: ${grade}`);
  } else {
    console.log('Invalid input. Please enter a valid mark between 0 and 100.');
  }
  