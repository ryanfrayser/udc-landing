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



// Gets section tags  and adds them to the navbar. 

function getContent(){
    for (let i=0; i<navSections.length; i++){
        
        let navItem = document.createElement('li');
        let sectionTitle = navSections[i].getAttribute("data-title");

            navItem.innerText = sectionTitle;
            navbar.appendChild(navItem);
 }}
getContent();



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


