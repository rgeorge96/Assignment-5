// Select the button with the scroll-to-top functionality
const scrollTopButton = document.getElementById("scroll-top-button");

// Add an event listener to the button
scrollTopButton.addEventListener("click", scrollToTop);

// Define the scrollToTop function
function scrollToTop() {
	// Select the HTML body element
	const body = document.body;

	// Animate the scrolling to the top
	body.style.transition = "all 0.5s ease-in-out";
	body.style.transform = "translateY(0)";

	// After the animation is finished, reset the transform property
	setTimeout(function() {
		body.style.transform = "";
	}, 500);
}

// Get a reference to the button element
const scrollButton = document.getElementById('scroll-button');

// Add an event listener to the button
scrollButton.addEventListener('click', function() {
  // Scroll the page to the top
  window.scrollTo(0, 0);
});
