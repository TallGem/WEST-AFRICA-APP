function Country(cImage, named, flag, cap, pop, cont, fact) {
  this.image = cImage;
  this.name = named;
  this.flag = flag;
  this.capital = cap;
  this.population = pop;
  this.continent = cont;
  this.funFact = fact;


  this.details = function () {
    display.innerHTML = `

<div class = "container mt-5 col-7">
    <div class="card">

        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
             <img src= ${this.image} class="img-fluid">
            <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
        </div>

        <div class="card-body">
            <h1 class="card-title fw-bolder">${this.name} <span><img src = ${this.flag} class="img-fluid" width = 40></span></h1>
            <p class="card-text">The Capital of ${this.name} is <span class = "fw-bolder">${this.capital}</span></p> 
            <p class="card-text"> Continent :  <span class = "fw-bolder">${this.continent}</span></p> 
            <p class="card-text"> It has about  <span class = "fw-bolder">${this.population}</span> in population</p> 
            <p class="card-text"><span class = "fw-bolder">Fun fact:</span> ${this.funFact}</p> 
        </div>
    </div>
</div>
               `;
               
  };
}

let nigeria = new Country(
  "image/nigeria2.jpg",
  "Nigeria",
  "image/flags/640px-Flag_of_Nigeria.svg.png",
  "Abuja",
  "213.4 Millions(2021)",
  "Africa",
  "Over 500 indigenous languages are spoken in Nigeria."
);

let kenya = new Country(
  "image/kenya.jpg",
  "Kenya",
  "image/flags/640px-Flag_of_Kenya.svg.png",
  "Nairobi",
  "53.01 Millions(2021)",
  "Africa",
  "Kenya is home to Africa's second-highest mountain"
);

let ghana = new Country(
  "image/ghana.jpg",
  "Ghana",
  "image/flags/640px-Flag_of_Ghana.svg.png",
  "Accra",
  "32.83 millions(2021)",
  "Africa",
  "Ghana was the first sub-Saharan African country to gain independence from colonial rule."
);

let senegal = new Country(
  "image/sengal.jpg",
  "Senegal",
  "image/flags/640px-Flag_of_Senegal.svg.png",
  "Dakar",
  "16.88 Millions(2021)",
  "Africa",
  "Senegal was once home to the largest slave-trading centre on the African coast."
);

let burkinafaso = new Country(
  "image/burkinafaso.jpg",
  "Burkina Faso",
  "image/flags/640px-Flag_of_Burkina_Faso.svg.png",
  "Ouagadougou",
  "22.1 Millions(2021)",
  "Africa",
  "Burkina Faso is home to 60 different ethnic groups, each with their own variety of folk music."
);

let benin = new Country(
  "image/BENIN.webp",
  "Benin",
  "image/flags/640px-Flag_of_Benin.svg.png",
  "Porto Novo",
  "13 Million(2021)",
  "Africa",
  "Benin has one of the youngest populations in the world."
);

let togo = new Country(
  "image/togo.jpg",
  "Togo",
  "image/flags/640px-Flag_of_Togo.svg.png",
  "Lome",
  "8.645 million (2021)",
  "Africa",
  "African tradition places a great emphasis on the respect for elders. If you’re in Togo and someone older than you is carrying heavy stuff, as a sign of respect, you should take it from them immediately. Don’t leave them carrying it."
);

let niger = new Country(
  "image/Niger.jpg",
  "Niger",
  "image/flags/560px-Flag_of_Niger.svg.png",
  "Niamey",
  "25.25 million (2021)",
  "Africa",
  "The Sahara Desert covers nearly four-fifths of Niver, making it one of the hottest countries in the world. Drought and desertification threaten the non-desert portions of the country too."
);

let liberia = new Country(
  "image/liberia.webp",
  "Liberia",
  "image/flags/640px-Flag_of_Liberia.svg.png",
  "Monrovia",
  "5.193 million (2021)",
  "African",
   "Liberia is the oldest republic in Africa. The American Society for Colonization of Free People of Color of the United States established the country in 1821 on land acquired for freed US slaves. Liberia remained under the control of the Americans for 17 years. In 1839, Liberia achieved partial independence through the declaration of a commonwealth. On July 26, 1847, Liberia declared itself a (free) sovereign nation."
);

let gambia = new Country(
  "image/gambia.jpg",
  "The Gambia",
  "image/flags/640px-Flag_of_The_Gambia.svg.png",
  "Banjul",
  "2.64 million (2021)",
  "Africa",
  "The country is undoubtedly a birdwatcher’s paradise with 600+ species to be discovered in the forests and by its banks."
);



let seirraLeone = new Country(
    "image/sierra.jpg",
  "Seirra Leone",
  "image/flags/640px-Flag_of_Sierra_Leone.svg.png",
  "Freetown",
  "8.421 million (2021)",
  "Africa",
  " One most distinguishable factor about Sierra Leone is its rich and diverse cultural heritage. It is a collection of people from across West Africa, Europe (Mostly French) and Asia (mostly Lebanese). There are also Krio whose ancestry can be traced to slaves from the Americas and thus could owe their origin from different parts of Sub-Saharan Africa."
);

let cotedvoire = new Country("image/cotedvoire.jpg","Cote d'lvoire","image/flags/640px-Flag_of_Côte_d'Ivoire.svg.png","Yamoussoukro","27.48 million (2021)","African","The Republic of Cote d'Ivoire has two capitals: Yamoussoukro and Abidjan.")

let mali = new Country("image/Mali.webp","Mali","image/flags/640px-Flag_of_Mali.svg.png","Bamako","21.9 million (2021)","Africa","")


const nigerian = () => {
  nigeria.details();
  nigeria.display();
  
};

const kenyan = () => {
  kenya.details();
};

const ghanian = () => {
  ghana.details();
};

const senegalese = () => {
  senegal.details();
};

const burkinabe = () => {
  burkinafaso.details();
};

const benins = ()=>{
    benin.details()
}

const togolese = () => {
  togo.details();
};

const nigerien = () => {
  niger.details();
};

const liberian = () => {
  liberia.details();
};

const gambian = () => {
  gambia.details();
};

const seirraleone = ()=>{
    seirraLeone.details()
}

const cotevoire = ()=>{
    cotedvoire.details()
}