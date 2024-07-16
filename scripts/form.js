const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectProduct = document.querySelector('#product');

//  fill the products arrays in the the id(products in html)
function addProduct(products) {
    products.forEach(product => {
        // create a new option element 
        const option = document.createElement('option');

        // assign a single products id to the option.value when it loop 

        option.value = product.id;

        option.textContent = product.name;

        selectProduct.appendChild(option);
    });
}

addProduct(products);


// Function to update the review count in localStorage
function updateReviewCount() {
    // Get the current review count from localStorage, or initialize to 0 if it doesn't exist
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the review count
    reviewCount += 1;

    // Store the updated review count back in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Update the displayed review count
    document.getElementById('reviewCount').textContent = reviewCount;
}

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Update the review count
    updateReviewCount();

    // Optionally, you can clear the form or show a success message
    alert('Review submitted successfully!');
    this.reset();
});

// On page load, display the current review count
document.addEventListener('DOMContentLoaded', function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviewCount').textContent = reviewCount;
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

