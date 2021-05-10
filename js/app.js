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
            navLink.classList = ("menu__link");
            navLink.id = (`nav-${navSections[i].getAttribute("id")}`);

        //Add Smooth scroll behavior to navbar links
            navLink.addEventListener("click", (e)=>{
                e.preventDefault();
                navSections[i].scrollIntoView({behavior: "smooth"})
            });

            navbar.appendChild(navItem);
            navItem.appendChild(navLink);
    }

//Scroll To Top Button

let scrollToTopBtn = document.getElementById("scrollToTop");
let rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
  scrollToTopBtn.addEventListener('click', scrollToTop);


// Add class 'activated' to section when near top of viewport using Intersection Observer API
// Also, adds "activeNav" to active navbar section.

let options = {
    root: null,
    rootMargin: '10%',
    threshold: .75,
};

const observer = new IntersectionObserver( function(entries,observer){
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('activated');
            document.querySelector(`#nav-${entry.target.id}`).classList.add('activeNav');
        }
        else{
            entry.target.classList.remove('activated')
            document.querySelector(`#nav-${entry.target.id}`).classList.remove('activeNav');
        }
    });
}, options);

//Add observer to each section tag

navSections.forEach(section => {observer.observe(section)});