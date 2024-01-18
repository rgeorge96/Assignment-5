// script.js

window.onload = function(){
    window.onscroll = function(){
      var currentScrollPosition = window.pageYOffset;
      var scrollTopButton = document.getElementById("scroll-top-button");
      if (currentScrollPosition > 500) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    }
    
    function scrollTop(newScrollPosition) {
      window.scrollTo(0, newScrollPosition);
    }
    
    document.getElementById("scroll-top-button").addEventListener("click", function(){
      scrollTop(0);
    });
  }

// index.html   
