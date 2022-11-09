function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
console.log(e.propertyName);
}

function makeSound(e) {
   const audio = document.querySelector(`audio[data-code = "${e.code}"]`);
 
   const keyCode = document.querySelector(`div[data-code = "${e.code}"]`);
   
   if (!audio) return;

   keyCode.classList.add('playing');
   audio.currentTime = 0;
   audio.play();
}

const keys = Array.from(document.querySelectorAll('.button'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', makeSound);
