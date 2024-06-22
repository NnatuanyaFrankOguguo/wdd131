const menu = document.querySelector('#mobile_menu');
const menuLink = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() { 
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})


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
