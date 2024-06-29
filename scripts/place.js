let now = new Date();
let year = now.getFullYear();
const currentYear = document.querySelector('#currentyear');
currentYear.textContent = '© ' + year + ' ♠️ Nnatuanya Frank Oguguo ♠️ Nigeria';

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
lastModified.style.paddingRight = '20px'


let temperature = 10;
let windspeed = 4.9;


function calculateWindChill(temperature, windspeed){
    const parentElement = document.querySelector('#windchill-parent');
    const newP = document.createElement('p');
    if (temperature <= 10 && windspeed >= 4.8 ){
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * windspeed ** 0.16 + 0.3965 * temperature * windspeed ** 0.16;
        newP.innerHTML = `<span>Windchill:</span> ${windChill.toFixed(2)}`
        newP.style.padding = '3px'  
        parentElement.appendChild(newP)
        return windChill;
        
    } else {
        newP.innerHTML = `<span>Windchill:</span> N/A `
        parentElement.appendChild(newP)
        return 'N/A';
        

    }

}


calculateWindChill(temperature, windspeed)

