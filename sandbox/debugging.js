const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  sections: [
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

  enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },

};


function setCourseInfo(course){
  const courseName = document.querySelector('#courseName');
  const courseCode = document.querySelector('#courseCode');
  courseName.textContent = aCourse.name;
  courseCode.textContent = aCourse.code;
}; 

//creating a function that outputs the section into the table identified by #section and pasting them in html

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});




// function addsection(section) {
//   const addedTr = document.querySelector('#sections');
//   const container = document.querySelector('tbody');
//   const newTr = document.createElement('tr');
//   newTr.className = 'scndRow'
//   container.appendChild(newTr);

//   const newTd = document.createElement('td');
//   newTd.textContent = aCourse.sections[0].sectionNum;
//   newTr.appendChild(newTd);

// };

setCourseInfo(aCourse);
renderSections(aCourse.sections);


  






  