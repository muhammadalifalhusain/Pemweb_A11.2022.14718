// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggle@media screen and (max-width: 767px) {
  .container {
    max-width: 720px;
  }
  /* navbar css for mobile start */
  .nav-toggler{
    display: block;
  }
  .site-navbar {
    min-height: 60px;
  }
  .site-navbar ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #444;
    background-color: rgba(0,0,0,.75);
    max-height: 0;
    overflow: hidden;
    transition: .3s;
  }
  .site-navbar ul li {
    width: 100%;
    text-align: center;
  }
  .site-navbar ul li a {
    padding: 25px;
  }
  .site-navbar ul li a:hover {
    background-color: rgba(255,255,255,.1);
  }
  .site-navbar ul.open {
    max-height: 100vh;
    overflow: visible;
  }
  .intro-area h2 {
    font-size: 36px;
    margin-bottom: 15px;
  }  
  /* navbar css for mobile end */
}
addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( element => element.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}