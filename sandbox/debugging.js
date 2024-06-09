const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  section: [
    {
      sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 28,
      days: 'TTh',
      instructor: 'Sis A'
    },
  ],
};

function addcourse(course){
  const courseName = document.querySelector('#courseName');
  const courseCode = document.querySelector('#courseCode');
  courseName.textContent = aCourse.name;
  courseCode.textContent = aCourse.code;
}  
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet('Alice')); // Output: Hello, Alice!

  