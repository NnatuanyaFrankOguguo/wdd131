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
