const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// riferimento per l'innesto delle cards 
const listaTeamHTML = document.getElementById('listaTeam')

// FUNZIONE DI CREAZIONE CARD
function createNewCard(x) {

	// destructuring style
const	{name, img, role, email} = x

const card = `
<div class="col">
  <div class="d-flex myImg bg-black text-light p-0">
    <img src="${img}" class="img-fluid" alt="${name}">
    <div class="d-flex flex-column justify-content-between ms-2 py-2">
      <h2 class="m-0 fw-bold">${name}</h2>
      <p class="m-0">${role}</p>
      <a href="mailto:" class="m-0 text-info text-decoration-none">${email}</a>
    </div>
  </div>
  </div>
</div>
`;

	return card
}

// ciclo per aggiungere le card singole e formare una stringa da poi mettere in html
let cards = '';
for (let i = 0; i < teamMembers.length; i++) {
  const membro = teamMembers[i];
  console.log(membro);
  cards += createNewCard(membro)
  console.log(cards);
}
listaTeamHTML.innerHTML = cards;