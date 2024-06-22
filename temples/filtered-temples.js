const menuBtn = document.querySelector('#menubtn');

menuBtn.addEventListener('click', function(){
  const openSidebar = document.querySelector('.sidebar');
  openSidebar.style.display = 'flex'

});


const closeBtn = document.querySelector('#closebtn');

closeBtn.addEventListener('click', function(){
  const closeSidebar = document.querySelector('.sidebar');
  closeSidebar.style.display = 'none'
});


let now = new Date();
let year = now.getFullYear();
const currentYear = document.querySelector('#currentyear');
currentYear.textContent = '© ' + year + ' ♠️ Nnatuanya Frank Oguguo ♠️ Nigeria'

let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2,'0')}`;
let formattedTime = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2, '0')}`;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = 'Last Modification: ' + formattedDate + ' ' + formattedTime;
lastModified.style.fontSize = '0.9em'
lastModified.style.paddingLeft = '40px'

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Accra Ghana",
    location: "Independence Ave, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5151.jpg"
  },

  {
    templeName: "Idaho Falls Idaho",
    location: "1000 Memorial Dr, Idaho Falls",
    dedicated: "1954, September, 23-25",
    area: 85624,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1911.jpg"

  },

  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-38623.jpg"
  }
  // Add more temple objects here...
];


//FOR LATER REFERENCE CAUSE AM TRYING TO LOOP THROUGH THE OBJECT ARRAY
// temples.forEach(function(Index) {
//   console.log(temple);
// });





function sidebarDis(){
  const closeSidebar = document.querySelector('.sidebar');
  closeSidebar.style.display = 'none'
}

createTempleCard(temples);

const smallSize = document.querySelector('.smallsize')
smallSize.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
  sidebarDis();
});

const largeSize = document.querySelector('#largesize')
largeSize.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
  sidebarDis();
});

const largeSizec = document.querySelector('.largesize')
largeSizec.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
  sidebarDis();
});

const oldBtn = document.querySelector('#oldBtn')
oldBtn.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
  sidebarDis();
});

const newOnes = document.querySelector('#newones')
newOnes.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
  sidebarDis();
});




function createTempleCard(filteredTemples){

  document.querySelector('.container').innerHTML = '';
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

     

    name.textContent = temple.templeName;
    name.style.marginBottom = '15px';
    location.innerHTML = `<span class="label"> Location: </span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label"> Dedicated: </span> ${temple.dedicated} `;
    area.innerHTML = `<span class="label"> Size: </span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.container').appendChild(card);
  
    

});

}

// clickOld()

// function clickOld(){
//   const oldBtn = document.querySelector('#oldbtn');
//   oldBtn.addEventListener('click', function(){
//     const oldTemples = temples.filter(temple => temple.dedicated < 1900);
//     console.log(oldTemples)
//   })
// }


