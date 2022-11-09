const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const studentPairs = getPairs(students);

const studentsTheme = chooseTheme (studentPairs,themes);



//Function 1

function getPairs(students) {
   let girls = students.filter((student) => student[student.length-1] === 'а')
   console.log (girls);

   let boys = students.filter((student) => student[student.length-1] !== 'а')
   console.log (boys);
/*
   let studentPairs = [[boys[0],girls[0]], [boys[1],girls[1]], [boys[2],girls[2]]];*/

   let studentPairs = boys.map(item => [item, girls[boys.indexOf(item)]]);
   console.log(studentPairs);
   return studentPairs;
   }

   //Function 2

function chooseTheme (studentPairs,themes) {
   let studentsTheme = studentPairs.map(item => [item.join(' і '), themes[studentPairs.indexOf(item)]]);
   console.log(studentsTheme);
   return studentsTheme;
   }
  
   //Function 3

function  studentsMark (students, marks) {
   let studMarks = students.map(item => [item, marks[students.indexOf(item)]]);
   console.log(studMarks);
   return studMarks;
}

   //Function 4

function randomMark (studentsTheme) {
   let ranMark = Math.floor(Math.random()*5 + 1);
   console.log(ranMark);
   let studentsRandomMarks = studentsTheme.map(item => [item, ranMark]);
   return studentsRandomMarks;

}   


        
    

document.getElementById("Resalt1").innerHTML = `<b>Array students pair: </b>${getPairs(students)}`;
document.getElementById("Resalt2").innerHTML = `<b>Array students themes: </b>${chooseTheme(studentPairs,themes)}`;
document.getElementById("Resalt3").innerHTML = `<b>Array students marks: </b>${studentsMark (students, marks)}`;
document.getElementById("Resalt4").innerHTML = `<b>Array students random marks: </b>${randomMark (studentsTheme)}`;
