//Constructor

class Student {
   constructor(university, course, fullName, marks, dismiss) {
      this.university = university,
      this.course = course,
      this.fullName = fullName,
      this.marks = marks,
      this.dismiss = false
   }
   getStudentInfo() {
      if (this.dismiss === true) {
         return 'Студента виключено з вищого навчального закладу!';
      } else {
         return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
      }
   }
   getMarks() {
      if (this.dismiss === true) {
         return this.marks = null;
      } else {
         return this.marks;
      }
   }
   setNewMarks(mark) {
      if (this.dismiss === true) {
         return this.marks = null;
      } else {
         return this.newMark = mark;
      }
   }
   getAllMarks() {
      if (this.dismiss === true) {
         return this.marks = null; 
      } else if (isFinite(this.newMark) && 5 >= this.newMark && 0 < this.newMark) {
         this.marks.push(this.newMark);
         return this.marks;
      } else {
         return this.marks;
      }
   }
   getAverageMark() {
      let sumMarks = this.marks.reduce((markA, markB) => markA + markB);
      return sumMarks / this.marks.length;
   }

   setDismiss() {
      return this.dismiss = true;
   }

   setRecover() {
      return this.dismiss = false;
   }
}

let newStudent = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер', [5, 4, 4, 5]);

document.getElementById("Resalt1").innerHTML = `<b> Info about a new student: </b>${newStudent.getStudentInfo()};`;
document.getElementById("Resalt2").innerHTML = `<b> The new student's marks: </b>${newStudent.getMarks()};`;
document.getElementById("Resalt3").innerHTML = `<b> The new student's mark: </b>${newStudent.setNewMarks(5)}; <br> <b>All student's marks: </b> ${newStudent.getAllMarks()}`;
document.getElementById("Resalt4").innerHTML = `<b> The student's avgmark: </b>${newStudent.getAverageMark()};`;
document.getElementById("Resalt5").innerHTML = `<b> The student dismissed: </b>${newStudent.setDismiss()}, ${newStudent.getStudentInfo()}, оцінки студента: ${newStudent.getMarks()}, поставити нову оцінку: ${newStudent.setNewMarks()}`;
document.getElementById("Resalt6").innerHTML = `<b> The student recovered: </b>${newStudent.setRecover()}, ${newStudent.getStudentInfo()}`;

//Advanced

class BudgetStudent extends Student {
   constructor(university, course, fullName, marks, dismiss) {
      super(university, course, fullName, marks, dismiss);
      setInterval (function() {
         console.log(budgetStudent.getScholarship());
      }, 3000);
   }
      
   getScholarship() {
      if (this.getAverageMark() >= 4 && this.dismiss === false) {
         return 'Ви отримали 1 400 грн. стипендії!';
      } else {
         return 'На жаль, в цьому місяці ви залишились без стипендії =(';
      }
   }
}

let budgetStudent = new BudgetStudent('НУДПСУ', 5, 'Syrotenko Anna', [5, 4, 4, 5, 5]);

document.getElementById("Resalt7").innerHTML = `<b> Schoolarship status: </b>${budgetStudent.getScholarship()}`;



