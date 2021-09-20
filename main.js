/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"items":[{"category":"Coffee","name":"Cold Brew","price":"300δ"},{"category":"Coffee","name":"Iced Latte","price":"350δ"},{"category":"Coffee","name":"Espresso","price":"400δ"},{"category":"Coffee","name":"Cappuccino","price":"420δ"},{"category":"Teas","name":"Green Tea","price":"150δ"},{"category":"Teas","name":"Black Tea","price":"250δ"},{"category":"Wine","name":"Red Wine","price":"400δ"},{"category":"Wine","name":"Sparkling Wine","price":"550δ"},{"category":"Cocktails","name":"Margarita","price":"400δ"},{"category":"Cocktails","name":"Martini","price":"500δ"},{"category":"Cocktails","name":"The Viper","price":"800δ"},{"category":"Sandwiches","name":"Ham & Cheese","price":"1000δ"},{"category":"Sandwiches","name":"BLT","price":"1200δ"},{"category":"Pastries","name":"Glazed Donut","price":"500δ"},{"category":"Pastries","name":"Anima Cake","price":"750δ"},{"category":"Snacks","name":"Candy Pop","price":"100δ"},{"category":"Snacks","name":"Chocolate Bar","price":"150δ"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//import css from "./style.css";
const menuData = __webpack_require__(/*! ./menu.json */ "./src/menu.json");

let content = document.getElementById("content");
let container = document.createElement("div");
container.id = "content-container";
let currentTab = "home";

function createHeader() {
    let header = document.createElement("header");

    let headerImg = document.createElement("div");
    headerImg.id = "header-img";

    let title = document.createElement("h1");
    title.innerHTML = "Viperidae Cafe";

    // used to be a sawtooth banner but..
    let sawtooth = document.createElement("div");
    sawtooth.id = "sawtooth";

    let nav = document.createElement("nav");
    let homeBtn = document.createElement("button");
    let menuBtn = document.createElement("button");
    let contactBtn = document.createElement("button");
    homeBtn.id = "home-btn"; 
    homeBtn.className = "nav-btn";
    homeBtn.innerHTML = "Home";
    homeBtn.addEventListener("click", () => {
        changeTabs("home");
    })
    menuBtn.id = "menu-btn"; 
    menuBtn.className = "nav-btn";
    menuBtn.innerHTML = "Menu";
    menuBtn.addEventListener("click", () => {
        changeTabs("menu");
    })
    contactBtn.id = "contact-btn"; 
    contactBtn.className = "nav-btn";
    contactBtn.innerHTML = "Contact";
    contactBtn.addEventListener("click", () => {
        changeTabs("contact");
    })
    
    nav.append(homeBtn, menuBtn, contactBtn);
    headerImg.append(title,sawtooth, nav);
    header.appendChild(headerImg);

    return header;
}

function createHome() {
    let home = document.createElement("div");
    home.id = "home";
    home.className = "info";

    let circle = document.createElement("div");
    circle.className = "rounded-circle";

    let divider = document.createElement("div");
    divider.className = "divider-wrapper"
    divider.innerHTML = "NID VIPERIDAE";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    home.append(circle,divider,p);
    return home;
}

function createMenu() {
    let menu = document.createElement("div");
    menu.id = "menu";
    menu.className = "info";

    let title = document.createElement("h2");
    title.innerHTML = "Menu";

    let divider = document.createElement("div");
    divider.className = "divider-wrapper";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let grid = document.createElement("div");
    grid.id = "menu-grid";

    let categories = [];
    menuData.items.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });
    categories.forEach(type => {
        let category = document.createElement("div");
        category.id = type;
        category.className = "category";

        let h3 = document.createElement("h3");
        h3.innerHTML = type;
        category.appendChild(h3);

        menuData.items.forEach(item => {
            if (item.category === type) {
                let div = document.createElement("div");
                div.className = "menu-item";

                let name = document.createElement("span");
                name.innerHTML = item.name;

                let divider = document.createElement("span");
                divider.className = "dotted";

                let price = document.createElement("span");
                price.innerHTML = item.price;

                div.append(name, divider, price);
                category.appendChild(div);
            }
        });
        grid.appendChild(category);
    });
    menu.append(title, divider, grid);
    return menu;
}

function createContact() {
    let contact = document.createElement("div");
    contact.id = "contact";
    contact.className = "info";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contact"

    let divider = document.createElement("div");
    divider.className = "divider-wrapper";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let ul = document.createElement("ul");
    ul.id = "contact-details";

    let address = document.createElement("li");
    address.innerHTML = "<i class='fas fa-map-marker-alt'></i>123 Main Street, Duskhaven";
    let phone = document.createElement("li");
    phone.innerHTML = "<i class='fas fa-phone'></i>888-8888 (Mon-Fri, 8:00 am - 5:30 pm)";
    let email = document.createElement("li");
    email.innerHTML = "<i class='fas fa-envelope'></i>viperidae@animail.com";
    
    ul.append(address, phone, email);
    contact.append(h2, divider, ul);
    return contact;
}

function createFooter() {
    let footer = document.createElement("footer");
    footer.textContent = "Developed by zaraku";
    return footer;
}

function createContent() {
    container.appendChild(createHome());
    content.append(createHeader(), container, createFooter());
}

function changeTabs(tab) {
    if (currentTab === tab) return;
    container.removeChild(container.firstChild);
    
    if (tab === "home") container.appendChild(createHome());
    if (tab === "menu") container.appendChild(createMenu());
    if (tab === "contact") container.appendChild(createContact());
    currentTab = tab;
}

createContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsb0NBQWE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvL2ltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCBtZW51RGF0YSA9IHJlcXVpcmUoJy4vbWVudS5qc29uJyk7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuaWQgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XG5sZXQgY3VycmVudFRhYiA9IFwiaG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJJbWcuaWQgPSBcImhlYWRlci1pbWdcIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlZpcGVyaWRhZSBDYWZlXCI7XG5cbiAgICAvLyB1c2VkIHRvIGJlIGEgc2F3dG9vdGggYmFubmVyIGJ1dC4uXG4gICAgbGV0IHNhd3Rvb3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXd0b290aC5pZCA9IFwic2F3dG9vdGhcIjtcblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWVCdG4uaWQgPSBcImhvbWUtYnRuXCI7IFxuICAgIGhvbWVCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnRuXCI7XG4gICAgaG9tZUJ0bi5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVRhYnMoXCJob21lXCIpO1xuICAgIH0pXG4gICAgbWVudUJ0bi5pZCA9IFwibWVudS1idG5cIjsgXG4gICAgbWVudUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idG5cIjtcbiAgICBtZW51QnRuLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGFicyhcIm1lbnVcIik7XG4gICAgfSlcbiAgICBjb250YWN0QnRuLmlkID0gXCJjb250YWN0LWJ0blwiOyBcbiAgICBjb250YWN0QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VUYWJzKFwiY29udGFjdFwiKTtcbiAgICB9KVxuICAgIFxuICAgIG5hdi5hcHBlbmQoaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bik7XG4gICAgaGVhZGVySW1nLmFwcGVuZCh0aXRsZSxzYXd0b290aCwgbmF2KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgICBob21lLmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gICAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2lyY2xlLmNsYXNzTmFtZSA9IFwicm91bmRlZC1jaXJjbGVcIjtcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCJcbiAgICBkaXZpZGVyLmlubmVySFRNTCA9IFwiTklEIFZJUEVSSURBRVwiO1xuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZGl2aWRlclwiO1xuICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIjtcblxuICAgIGhvbWUuYXBwZW5kKGNpcmNsZSxkaXZpZGVyLHApO1xuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmlkID0gXCJtZW51LWdyaWRcIjtcblxuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG4gICAgbWVudURhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGl0ZW0uY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goaXRlbS5jYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjYXRlZ29yaWVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlkID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJjYXRlZ29yeVwiO1xuXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIG1lbnVEYXRhLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRvdHRlZFwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcblxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQobmFtZSwgZGl2aWRlciwgcHJpY2UpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgICBtZW51LmFwcGVuZCh0aXRsZSwgZGl2aWRlciwgZ3JpZCk7XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVySFRNTCA9IFwiQ29udGFjdFwiXG5cbiAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRpdmlkZXItd3JhcHBlclwiO1xuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZGl2aWRlclwiO1xuICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuaWQgPSBcImNvbnRhY3QtZGV0YWlsc1wiO1xuXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtbWFwLW1hcmtlci1hbHQnPjwvaT4xMjMgTWFpbiBTdHJlZXQsIER1c2toYXZlblwiO1xuICAgIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwaG9uZS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtcGhvbmUnPjwvaT44ODgtODg4OCAoTW9uLUZyaSwgODowMCBhbSAtIDU6MzAgcG0pXCI7XG4gICAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGVtYWlsLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1lbnZlbG9wZSc+PC9pPnZpcGVyaWRhZUBhbmltYWlsLmNvbVwiO1xuICAgIFxuICAgIHVsLmFwcGVuZChhZGRyZXNzLCBwaG9uZSwgZW1haWwpO1xuICAgIGNvbnRhY3QuYXBwZW5kKGgyLCBkaXZpZGVyLCB1bCk7XG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSB6YXJha3VcIjtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjb250YWluZXIsIGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFicyh0YWIpIHtcbiAgICBpZiAoY3VycmVudFRhYiA9PT0gdGFiKSByZXR1cm47XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICBcbiAgICBpZiAodGFiID09PSBcImhvbWVcIikgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgaWYgKHRhYiA9PT0gXCJtZW51XCIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIGlmICh0YWIgPT09IFwiY29udGFjdFwiKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbiAgICBjdXJyZW50VGFiID0gdGFiO1xufVxuXG5jcmVhdGVDb250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9