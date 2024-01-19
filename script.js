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

// 9. Add a video element
var video = document.getElementById("media1.mp4");

// 10. Add an event listener to the video element to pause it when the user scrolls down
video.addEventListener("scroll", function() {
  if (currentScrollPosition > 500) {
    video.pause();
  } else {
    video.play();
  }
});

// 11. Add a function to toggle the video's playback state
function toggleVideo() {
  if (video.playbackState === "paused") {
    video.play();
  } else {
    video.pause();
  }
}

// 12. Add an event listener to the play button to toggle the video's playback state
document.getElementById("playButton").addEventListener("click", toggleVideo);

// 13. Add a video element
var video2 = document.getElementById("https://www.youtube.com/watch?v=LL7xJQ6U2Yo");

// 14. Add an event listener to the video2 element to pause it when the user scrolls down
video2.addEventListener("scroll", function() {
  if (currentScrollPosition > 500) {
    video2.pause();
  } else {
    video2.play();
  }
});

// 15. Add a function to toggle the video2's playback state
function toggleVideo2() {
  if (video2.playbackState === "paused") {
    video2.play();
  } else {
    video2.pause();
  }
}

// 16. Add an event listener to the play button to toggle the video2's playback state
document.getElementById("playButton2").addEventListener("click", toggleVideo2);