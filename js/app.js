/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


// Define Global Variables

const navSections = document.querySelectorAll("section");
const navbar = document.querySelector('#navbar__list');

// Get section tags and add them to the navbar.

for (let i=0; i<navSections.length; i++){
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const sectionTitle = navSections[i].getAttribute('data-title');
        const sectionArea = "#" + navSections[i].getAttribute('id');

            navLink.textContent = sectionTitle;
            navLink.classList = "menu__link";
            navLink.href = sectionArea;

            navbar.appendChild(navItem);
            navItem.appendChild(navLink);
    }


//Scroll To Top Button

var scrollToTopBtn = document.getElementById("scrollToTop");
var rootElement = document.documentElement;

function scrollToTop () {
    rootElement.scrollTo({
        top:0,
        behavior: 'smooth'
    })
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



// Begin Events

// Build menu
