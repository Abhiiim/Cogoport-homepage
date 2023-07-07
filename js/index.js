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
  