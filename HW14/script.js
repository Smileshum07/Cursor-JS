const createIdGenerator = function* incrementer() {
   let i = 1;
   while (true) {
      yield i++;
   }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value); 
console.log(idGenerator.next().value);
console.log(idGenerator.next().value); 


function* newFontGenerator(par) {
   let font = yield par;
   while (true) {
      if (font === "up") {
         par += 2;
         font = yield par;
      } else if (font === "down") {
         par -= 2;
         font = yield par;
      } else {
         font = yield par;
      }
   }
}

const fontGenerator = newFontGenerator(14); 

console.log(fontGenerator.next("up").value); //-> 14
console.log(fontGenerator.next("up").value); //-> 16
console.log(fontGenerator.next("up").value); //-> 18
console.log(fontGenerator.next().value); //-> 18
console.log(fontGenerator.next("down").value); //-> 16
console.log(fontGenerator.next("down").value); //-> 14
console.log(fontGenerator.next("down").value); //-> 12
console.log(fontGenerator.next().value); // -> 12
 