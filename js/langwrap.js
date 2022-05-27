
const langEl = document.querySelector('.lang-wrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('#title');
const descrEl = document.querySelector('#description');
const nameEl = document.querySelector('#nameLabel');
const emailEl = document.querySelector('#emailLabel');
const numberEl = document.querySelector('#numberLabel');
const genderEl = document.querySelector('.gender');
const gendermEl = document.querySelector('.genderMale');
const genderfEl = document.querySelector('.genderFemale');
const courtposEl = document.querySelector('.courtPos');
const posEl = document.querySelector('.pos');
const pointguardEl = document.querySelector('.pointGuard');
const guardEl = document.querySelector('.guard');
const smallforwardEl = document.querySelector('.smallForward');
const powerforwardEl = document.querySelector('.powerForward');
const centerEl = document.querySelector('.center');
const statsEl = document.querySelector('.statsText');
const siEl = document.querySelector('.siText');
const siaEl = document.querySelector('.siaText');
const sibEl = document.querySelector('.sibText');
const lubaEl = document.querySelector('.lubaText');
const lubbEl = document.querySelector('.lubbText');
const seltEl = document.querySelector('.selTeam');
const playerlubEl = document.querySelector('.playerLub');
const placeEl = document.getElementsByName('placeholder');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        nameEl.textContent = data[attr].nameLabel;
        emailEl.textContent = data[attr].emailLabel;
        numberEl.textContent = data[attr].numberLabel;
        genderEl.textContent = data[attr].gender;
        gendermEl.textContent = data[attr].genderMale;
        genderfEl.textContent = data[attr].genderFemale;
        courtposEl.textContent = data[attr].courtPos;
        posEl.textContent = data[attr].pos;
        pointguardEl.textContent = data[attr].pointGuard;
        guardEl.textContent = data[attr].guard;
        smallforwardEl.textContent = data[attr].smallForward;
        powerforwardEl.textContent = data[attr].powerForward;
        centerEl.textContent = data[attr].center;
        statsEl.textContent = data[attr].statsText;
        siEl.textContent = data[attr].siText;
        siaEl.textContent = data[attr].siaText;
        sibEl.textContent = data[attr].sibText;
        lubaEl.textContent = data[attr].lubaText;
        lubbEl.textContent = data[attr].lubbText;
        seltEl.textContent = data[attr].selTeam;
        playerlubEl.textContent = data[attr].playerLub;
        placeEl.textContent = data[attr].placeholder;
    });
});


var data = {
    "english": {
        "title": "Basketball Player Survey Form",
        "description": "Thank you for taking the time to help us.",
        "nameLabel": "Name",
        "emailLabel":"Email",
        "numberLabel": "Age",
        "gender": "What is your gender?",
        "genderMale": "Male",
        "genderFemale": "Female",
        "courtPos": "What is your position on the court?",
        "pos": "Select current position",
        "pointGuard": "Point Guard",
        "guard": "Guard",
        "smallForward": "Small Forward",
        "powerForward": "Power Forward",
        "center": "Center",
        "statsText": "Would you like to see your statistics on a website?",
        "siText": "Yes",
        "siaText": "Yes",
        "sibText": "Yes",
        "lubaText": "Do you watch national basketball? LUB (Liga Uruguaya de Básquetbol)",
        "lubbText": "Which is your favorite LUB basketball team?",
        "selTeam": "Select a team",
        "playerLub": "Which is your favorite basketball player in the LUB?",
        "placeholder": "Player's name",
        "": "Do yo watch NBA?",
        "": "Which is your favorite NBA basketball team?",
        "": "Select a team",
        "": "Which is your favorite basketball player in the NBA?",
        "": "Player's name",
        "": "What basketball leagues do you watch?",
        "": "Any comments or suggestions?",
        "": "Enter your comment here...",
        "": "Submit"
    },
    "spanish": {
        "title": "Encuesta Jugadores de Basket",
        "description": "Gracias por tomarte el tiempo para ayudarnos.",
        "nameLabel": "Nombre",
        "emailLabel": "Email",
        "numberLabel": "Edad",
        "gender": "Género",
        "genderMale": "Masculino",
        "genderFemale": "Femenino",
        "courtPos": "En qué posición juegas?",
        "pos": "Selecciona tú posición",
        "pointGuard": "Base",
        "guard": "Escolta",
        "smallForward": "Alero",
        "powerForward": "Ala-Pivot",
        "center": "Pivot",
        "statsText": "Te gustaría ver tus estadísticas en un sitio web?",
        "siText": "Si",
        "siaText": "Si",
        "sibText": "Si",
        "lubaText": "Miras los partidos de la LUB (Liga Uruguaya de Básquetbol)?",
        "lubbText": "Cuál es tu equipo favorito de la LUB?",
        "selTeam": "Selecciona un equipo",
        "playerLub": "Cuál es tu jugador favorito de la LUB?",
        "placeholder": "Nombre del jugador",
        "": "Sigues los partidos de la NBA?",
        "": "Cuál es tu equipo favorito de la NBA?",
        "": "Selecciona un equipo",
        "": "Cuál es tu jugador favorito de la NBA?",
        "": "Nombre del jugador",
        "": "Qué otras ligas de basketball sigues o miras por TV?",
        "": "Algún comentario o sugerencia?",
        "": "Ingresa tu comentario...",
        "": "Enviar"
    }
}