//HW3

export function getMaxDigit(number) {
   let maxValue = 0;
   while (number){
      let x = number % 10;
      if (x > maxValue) maxValue = x;
      number = (number - x) / 10;
   }
   return maxValue;
}

//HW5

export function getRandomArray(length, min, max) {

   let ranArray = new Array(length).fill(0);
   
   let newRanArray = ranArray.map(() => Math.floor(Math.random() * (max - min) + min));
   console.log (newRanArray);
   return newRanArray;
}

//HW10

export function generateBlocks() {

   const blocksConteiner = document.createElement('div');
   document.body.append(blocksConteiner);
   blocksConteiner.style.cssText = "display: flex; flex-wrap: wrap; width: 300px; height: 300px; margin: 0 40%;";

   for (let i = 0; i < 25; i++) {
      const block = document.createElement('block');
      blocksConteiner.append(block);
      block.style.cssText = "width: 50px; height: 50px; margin: 2px; border: 1px solid black;";
      setInterval(() => {
         block.style.background = `rgb(${color(0, 500)},${color(0, 500)},${color(0, 500)}`;
      }, 500);
   }

   function color(min, max) {
   const colorNum = Math.floor(Math.random() * (max - min) + min);
   return colorNum;
   }
}



