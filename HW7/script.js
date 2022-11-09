const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



//1
//Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст
// в якійсь з країн.Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary){
   const payTax = salary * this.tax;
   return payTax;
}

console.log(getMyTaxes.call(latvia, 5000));

document.getElementById("Resalt1").innerHTML = `<b> Your tax: </b>${getMyTaxes.call(latvia, 5000)} $`;

//2
//Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT - спеціалісти у кожній країні.
//(tax * middleSalary).Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
   const middleTax = this.tax * this.middleSalary;
   return middleTax; 
}

document.getElementById("Resalt2").innerHTML = `<b> The middle amount of taxes: </b>${getMiddleTaxes.call(ukraine)} $`;

//3
//Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT - спеціалісти у кожній країні.
//(tax * middleSalary * vacancies).Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
   const avgTax = this.tax * this.middleSalary * this.vacancies;
   return avgTax;
}
  
document.getElementById("Resalt3").innerHTML = `<b> The middle amount of taxes IT specialist: </b>${getTotalTaxes.call(ukraine)} $`;

//4
//Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number }
//кожні 10 секунд.Значення salary – генеруйте випадковим чином у діапазоні 1500 - 2000. taxes – розраховується в залежності від вибраної
//країни та значення salary.
//profit = salary - taxes;
//для виводу в консоль кожні 10 секунд використайте setInterval

function getMySalary(){
   const min = 1500;
   const max = 2000;
   let salary = Math.floor(Math.random() * (max - min) + min);
   let profit = Math.ceil(salary - salary * this.tax)
   
   
   let newObj = {
      salary: salary,
      tax: this.tax,
      profit: profit,
   }
   console.log(newObj);
   return newObj;
}

setInterval(() => getMySalary.call(ukraine), 1000);
document.getElementById("Resalt4").innerHTML = `<b> There is your profit: </b>${getMySalary.call(latvia)} $`;

