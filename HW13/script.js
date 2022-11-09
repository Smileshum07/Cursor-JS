// Characters
document.querySelector('#search').addEventListener('click', getCharacter);
let gender;

async function getCharacter(event) {
   let number = document.querySelector('#filmName').value;
   let charactersList = '';
   let footer = document.createElement('footer');
   document.body.append(footer);

   await fetch(`https://swapi.dev/api/films/${number}/`)
      .then((response) => response.json())
      .then((data) =>
         charactersList = data.characters.forEach(character => {
            fetch(character)
               .then((response) => response.json())
               .then((data) => { 
                  gender = data.gender; 
                  card = document.createElement('div');
                  card.className = 'card';
                  footer.append(card);
                  card.insertAdjacentHTML('beforeend', `<h2>${data.name}</h2>
                            <div class='card-content'>
                                <span>Data of birth: ${data.birth_year}</span><br>
                                <span>Gender: ${getGender()}</span>
                            </div>`);
            })
         })
   )
      .catch((err) => {
         alert('Episode number does not exist')
      })
}

//Gender
function getGender() {
   if (gender === 'male') {
      let male = gender;
     return male.innerHTML = '<img src="./img/male-symbol.png" alt="male" width="20px",hight="20px"></img>';
   } else if (gender === 'female') {
      let female = gender;
     return female.innerHTML = '<img src="./img/female-symbol.png" alt="female" width="15px",hight="15px"></img>';
   } else {
      let na = gender;
      return na.innerHTML = '<img src="./img/question.png" alt="question" width="15px",hight="15px"></img>';
   }
}

//Planets         
document.querySelector('#planets_btn').addEventListener('click', getPlanets);

async function getPlanets(event) {
   let planetsList;
   let list;
   let footer = document.createElement('footer');
   document.body.append(footer);
   
   await fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) =>
         data.results.forEach((result) => {
            planetsList = result.name;
            list = document.createElement('div');
            list.className = 'list';
            footer.append(list);
            list.insertAdjacentHTML('beforeend', `<h3>${result.name}</h3>`)
         })); 
}