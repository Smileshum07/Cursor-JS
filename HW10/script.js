function generateBlocks() {

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

generateBlocks();


