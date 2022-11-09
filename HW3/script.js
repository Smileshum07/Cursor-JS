// getMaxDigit(number)

function getMaxDigit(number) {
   let maxValue = 0;
   while (number){
      let x = number % 10;
      if (x > maxValue) maxValue = x;
      number = (number - x) / 10;
   }
   return maxValue;
}

//Pow

function pow (a, b) {
   let powValue = a;
      for (let i = 0; i < b; i++) {
         powValue *= a;
      }
      return powValue;
}

//normalName

function normalName (userName) {
   let lowerUserName = userName.toLowerCase();
   return lowerUserName[0].toUpperCase() + lowerUserName.slice(1);
}

//taxes

function getProfit (salary) {
   let taxRate = 19.5;
   let profit = salary - salary*taxRate/100;
   return profit;
}

//Random

function getRandomNumber () {
   let number = Math.random()*10;
   return Math.ceil(number);
}

//Include a letter

function countLetter(letter, word) {
   return word.toLowerCase().split(letter).length - 1;
}

//Convert

function convertCurrency(value) {
   value = value.toLowerCase();
   console.log(value);
   if (value.includes('$')) {
      let convertCours = 40;
      let convertValue = value.replace('$','') * convertCours;
      return convertValue + ' ' + 'грн';
   } else if (value.includes('uah')) {
      let convertCours = 40;
      convertValue = value.replace('uah', '') / convertCours;
      return convertValue + ' ' + '$';
   } 
      else {
         return 'Erorr';
      }
}

//Password

function getRandomPassword (pass = 8) {
   let password = "";
   let symbols = "0123456789";

   for (let i = 1; i <= pass; i++){
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));   
   } 
   return password;
}

//delete

function deleteLetters (letter, word) {
   return word.split(letter).join('');
}

//Palindroma

function isPalyndrom(string) {
   
   let  newString = string.toLowerCase().replace(/\s/g, '');
   let reverseString = newString.split(' ').reverse().join(' ');

   console.log(newString, reverseString);
   return newString === reverseString;
}

//Delete letters

function deleteDuplicateLetter(string) {

   string = string.toLowerCase().split('');
   console.log(string);

   let newString = string.filter(function (value, i, string) {
      return string.lastIndexOf(value) === string.indexOf(value);
   });
   return newString.join("");
}
     
         
document.writeln (`<b>Function getMaxDigit: найбільшa цифрa в числі = </b>  ${getMaxDigit(123)} ;</p>`)
document.writeln (`<b>Function pow: ступінь числа  = </b>  ${pow(-2,2)} ;</p>`)
document.writeln (`<b>Function normalName: </b>  ${normalName('vlaDYMYr')} ;</p>`)
document.writeln (`<b>Function getProfit: чиста зп = </b>  ${getProfit(1000)} грн;</p>`)       
document.writeln (`<b>Function getRandomNumber: рандомне число = </b>  ${getRandomNumber()};</p>`)    
document.writeln (`<b>Function countLetter: повторення букви в слові = </b>  ${countLetter('a', 'AjdakuaaAAaA')};</p>`)  
document.writeln (`<b>Function convertCurrency: результат конвертації: </b>  ${convertCurrency('7000 $')};</p>`)    
document.writeln (`<b>Function getRandomPassword: рандомний пароль: </b>  ${getRandomPassword(4)};</p>`)   
document.writeln (`<b>Function deleteLetters: після видалення зайвих букв: </b>  ${deleteLetters('a','abrakadabra')};</p>`)  
document.writeln (`<b>Function isPalyndrom: чи паліндром це: </b>  ${isPalyndrom('мадам')};</p>`)    
document.writeln (`<b>Function deleteDuplicateLetter: речення без повторюваних букв: </b>  ${deleteDuplicateLetter('Бісквіт бв дуже ніжним')};</p>`)   