// script.js

// 1. Add a scroll event listener to the window object
window.addEventListener("scroll", scrollHandler);

// 2. Create a variable to store the current scroll position
var currentScrollPosition = 0;

// 3. Create a variable to store the scroll top button element
var scrollTopButton = document.getElementById("scroll-top-button");

// 4. Add an event listener to the scroll top button
scrollTopButton.addEventListener("click", scrollToTop);

// 5. Update the onscroll function
function scrollHandler() {
  currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > 500) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// 6. Add the scrollTop function
function scrollToTop() {
  window.scrollTo(0, 0);
  currentScrollPosition = 0;
}

// 7. Remove the scroll event listener when the user clicks the scroll top button
scrollTopButton.addEventListener("click", function() {
  window.removeEventListener("scroll", scrollHandler);
});

// 8. Show the scroll top button when the user scrolls up
window.addEventListener("scroll", function() {
  if (currentScrollPosition > 500) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo(0, 0);
}


