async function getRandomChinese(length) {
   let signs = '';
   let number; 
   for (i = 0; i < length; i++) {
      number = Date.now().toString().slice(-5);
      signs += String.fromCharCode(number);
      await time();
   }
   console.log(signs);
   return signs;
}

function time() {
   return new Promise(resolve => setTimeout(resolve, 50));
};

getRandomChinese(4);




