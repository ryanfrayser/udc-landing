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

            navLink.textContent = sectionTitle;
            navLink.classList = "menu__link";
            navLink.setAttribute("href", `#${navSections[i].getAttribute("id")}`);

            navbar.appendChild(navItem);
            navItem.appendChild(navLink);
    }



// Add class 'active' to section when near top of viewport


// Scroll to anchor section

const links = document.querySelectorAll('a')
for( const link of links) {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const section = document.getElementById(
            e.target.getAttribute("href").replace("#", ""));
          section.scrollIntoView({ behavior: "smooth" });
        }
    )}


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
