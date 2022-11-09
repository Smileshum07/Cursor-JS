
//Function 1

//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

function getRandomArray(length, min, max) {

   let ranArray = new Array(length).fill(0);
   console.log(ranArray);

   let newRanArray = ranArray.map(() => Math.floor(Math.random() * (max - min) + min));
   console.log (newRanArray);
   return newRanArray;
       
}
   

   //Function 2 
/*
function getModa(...numbers) {
   let numbersModa = numbers.map(function (item) {
         if (numbers.includes(item > 1));
         return item;
      });
   console.log(numbersModa);
   return numbersModa;
   }*/
  


  
   //Function 3

  //Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 

function  getAverage(...numbers) {
   let sumNumbers = numbers.reduce((a,b) => a+b, 0);
   console.log(sumNumbers);
   return sumNumbers/numbers.length;
   
}



   //Function 5

   //Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції


function filterEvenNumbers(...numbers) {
   let evenNumbers = numbers.filter((element, index) => {
      if (element % 2 === 1) {
         return element;
      }
   });
   console.log(evenNumbers);
   return evenNumbers;

}   

   //Function 7

   //Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(...numbers) {
   let numbersFive = numbers.filter((element) => {
      if (element % 5 === 0) {
         return element;
      }
   });
   console.log(numbersFive);
   return numbersFive;

}   

   //Function 6

   //Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
   
function countPositiveNumbers(...numbers) {
   let positiveNumbers = numbers.filter((element) => {
      if (element > 0) {
         return element;
      }
   })
   return positiveNumbers.length;
}   

  //Function 8

  //Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
   
  function replaceBadWords(string) {
      
   let newString = string.replace(/fuck|shit/gi,'****');
        
   return newString;
   
   }

  

document.getElementById("Resalt1").innerHTML = `<b> Random Array: </b>${getRandomArray(5, 200, 400)}`;
document.getElementById("Resalt2").innerHTML = `<b> AVG: </b>${getAverage(6, 2, 55, 11, 78)}`;
document.getElementById("Resalt3").innerHTML = `<b> Even numbers in the Array: </b>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`;
document.getElementById("Resalt4").innerHTML = `<b> Numbers divided by 5: </b>${getDividedByFive(6, 2, 50, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`;
document.getElementById("Resalt5").innerHTML = `<b> Positive numbers: </b>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`;
document.getElementById("Resalt6").innerHTML = `<b> Without bad words: </b>${replaceBadWords("Are you fucking kidding? Fucking shit!")}`;

