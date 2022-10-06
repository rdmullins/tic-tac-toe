// Tic-Tac-Toe
// by Roger Mullins

function buildUI() {
    // Creates HTML elements
  
    function createElement(parentID, typeOfElement, bootstrapClasses, idString, innerText = "") {
      let target = document.getElementById(parentID);
      let newElement = document.createElement(typeOfElement);
      newElement.classList.add(...bootstrapClasses);
      newElement.setAttribute("id", idString);
      if (innerText != "") {
        newElement.innerText = innerText;
      }
      target.appendChild(newElement);
    };
  
    function createNavToggle() {
      let target = document.getElementById('nav-bar-container');
      let newButton = document.createElement('button');
      newButton.classList.add('navbar-toggler');
      newButton.setAttribute('type', 'button');
      newButton.setAttribute('data-bs-toggle', 'collapse');
      newButton.setAttribute('data-bs-target', '#nav-menu');
      newButton.setAttribute('id', 'hamburger');
      target.appendChild(newButton);
    }
  
    function addModalTrigger(elementID, destination) {
      let e = document.getElementById(elementID);
      e.classList.add("btn");
      //e.classList.add("btn-primary");
      e.setAttribute("data-bs-toggle", "modal");
      e.setAttribute("data-bs-target", ("#"+destination));
    };
  
    function addModalCloseButton(divIn) {
      let e = document.getElementById(divIn);
      e.setAttribute("type", "button");
      e.setAttribute("data-bs-dismiss", "modal");
      e.setAttribute("aria-label", "Close");
    };
  
    // Main Application Container
    createElement("main", "div", ["container"], "appContainer");
  
    // Navigation Bar
    createElement("appContainer", "nav", ['navbar', 'navbar-expand-sm', 'py-3'], "navbar");
    createElement("navbar", "div", ["container"], "nav-bar-container");
    createElement("nav-bar-container", "h1", ["navbar-brand", "display-5"], "navbarBrand", "Roger's Tic-Tac-Toe");
    createNavToggle();
    createElement("hamburger", "span", ["navbar-toggler-icon"], "hamburger-icon");
    createElement("nav-bar-container", "div", ["collapse", "navbar-collapse"], "nav-menu");
    createElement("nav-menu", "ul", ["navbar-nav", "ms-auto"], "nav-list");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-1");
    createElement("nav-list-item-1", "button", ["btn", "btn-outline-dark"], "about-link", "About");
    addModalTrigger("about-link", "aboutModal");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-2");
    createElement("nav-list-item-2", "button", ["btn", "btn-outline-dark"], "contact-link", "Contact");
    addModalTrigger("contact-link", "contactModal");
  
    // Title Box
  
    // Footer (Attribution of FavIcon and API)
    createElement("main", "footer", [], "footer-info");
    createElement("footer-info", "h6", ["text-center"], "favicon-attribution", "FavIcon provided by https://www.flaticon.com/free-icons/weather");
    createElement("footer-info", "h6", ["text-center"], "API-attribution", "Data from www.openweathermap.org");
  
    // About Modal
    createElement("appContainer", "div", ["modal", "fade"], "aboutModal");
    createElement("aboutModal", "div", ["modal-dialog"], "aboutDialog");
    createElement("aboutDialog", "div", ["modal-content"], "aboutContent");
    createElement("aboutContent", "div", ["modal-header"], "aboutHeader");
    createElement("aboutHeader", "h5", ["modal-title"], "aboutTitle", "About Roger's Tic-Tac-Toe");
    createElement("aboutHeader", "button", ["btn-close"], "aboutHeaderBtn");
    addModalCloseButton("aboutHeaderBtn");
    createElement("aboutContent", "div", ["modal-body"], "aboutBody", "Roger's Tic-Tac-Toe\nAwesome Inc. Web Developer Bootcamp\nFall 2022\nMIT License");
    createElement("aboutContent", "div", ["modal-footer"], "aboutFooter");
    createElement("aboutFooter", "button", ["btn", "btn-secondary"], "aboutFooterCloseButton", "Dismiss");
    addModalCloseButton("aboutFooterCloseButton");
  
    // Contact Modal
    createElement("appContainer", "div", ["modal", "fade"], "contactModal");
    createElement("contactModal", "div", ["modal-dialog"], "contactDialog");
    createElement("contactDialog", "div", ["modal-content"], "contactContent");
    createElement("contactContent", "div", ["modal-header"], "contactHeader");
    createElement("contactHeader", "h5", ["modal-title"], "contactTitle", "Contact the Developer");
    createElement("contactHeader", "button", ["btn-close"], "contactHeaderBtn");
    addModalCloseButton("contactHeaderBtn");
    createElement("contactContent", "div", ["modal-body"], "contactBody", "Roger Mullins\nrogermullins.mba@gmail.com");
    createElement("contactContent", "div", ["modal-footer"], "contactFooter");
    createElement("contactFooter", "button", ["btn", "btn-secondary"], "contactFooterCloseButton", "Dismiss");
    addModalCloseButton("contactFooterCloseButton");
  };