window.addEventListener('scroll', function() {
    var element = document.getElementById('nav-bar');
    var scrollTop = document.documentElement.scrollTop;
    var targetScroll = 1; // The scroll position at which you want to change the background color
  
    if (scrollTop >= targetScroll) {
      element.style.backgroundColor = "#FFF"; // Change to the desired background color
      element.style.boxShadow = "0 1px 6px rgba(169,188,218,.65)";
    } else {
      element.style.backgroundColor = "#FBDC00"; // Reset to the default background color
      element.style.boxShadow = "none";
    }
  });
  