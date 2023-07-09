window.addEventListener('scroll', function() {
    var element = document.getElementById('nav-bar');
    var scrollTop = document.documentElement.scrollTop;
    var targetScroll = 1;
  
    if (scrollTop >= targetScroll) {
      element.style.backgroundColor = "#FFF"; 
      element.style.boxShadow = "0 1px 6px rgba(169,188,218,.65)";
    } else {
      element.style.backgroundColor = "#FBDC00"; 
      element.style.boxShadow = "none";
    }
});


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navigate');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('burger-active');
});
  

var button1 = document.getElementById('footer-btn-1');
var content1 = document.querySelector('.d-6');
button1.addEventListener('click', function() {
  content1.classList.toggle('d-6');
});

var button2 = document.getElementById('footer-btn-2');
var content2 = document.querySelector('.d-7');
button2.addEventListener('click', function() {
  content2.classList.toggle('d-7');
});

var button3 = document.getElementById('footer-btn-3');
var content3 = document.querySelector('.d-8');
button3.addEventListener('click', function() {
  content3.classList.toggle('d-8');
});

var button4 = document.getElementById('footer-btn-4');
var content4 = document.querySelector('.d-9');
button4.addEventListener('click', function() {
  content4.classList.toggle('d-9');
});

var button5 = document.getElementById('footer-btn-5');
var content5 = document.querySelector('.d-10');
button5.addEventListener('click', function() {
  content5.classList.toggle('d-10');
});
