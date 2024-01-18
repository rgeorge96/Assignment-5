// Scroll to top button
const scrollTopButton = document.getElementById('scroll-top-button');

function scrollToTop() {
  window.scrollTo(0, 0);
}

scrollTopButton.addEventListener('click', scrollToTop);

// Add active class to current nav item
const navItems = document.querySelectorAll('.hyperlink');

function handleNavItemClick(event) {
  event.preventDefault();
  const target = event.target.hash;
  const navItem = document.querySelector(`a[href="${target}"]`);
  navItem.classList.add('active');
}

navItems.forEach(item => item.addEventListener('click', handleNavItemClick));
