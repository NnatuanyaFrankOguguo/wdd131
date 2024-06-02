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

