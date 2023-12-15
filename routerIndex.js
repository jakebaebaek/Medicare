// routerIndex.js
import createRouter from "./router.js";

const container = document.querySelector("body")
const pages = {
 home: () => console.log('we are in home'),
 Pediatrics: () => loadPage("./descs/Pediatrics.html"),
 Endocrinology: () => loadPage("./descs/Endocrinology.html"),
 Rheumatology: () => loadPage("./descs/Rheumatology.html"),
 Obstetrician: () => loadPage("./descs/Obstetrician.html"),
 Neurology: () => loadPage("./descs/Neurology.html"),
 Ophthalmology: () => loadPage("./descs/Ophthalmology.html"),
}

function loadPage(pageName) {
  container.innerText='';
  console.log(container)

  
  fetch(pageName)
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error(`Error loading page: ${pageName}`, error);
    });
}
const router = createRouter();

router.addRoute("#/", pages.home)
    .addRoute("#/Pediatrics", pages.Pediatrics)
     .addRoute("#/Endocrinology", pages.Endocrinology)
     .addRoute("#/Rheumatology", pages.Rheumatology)
     .addRoute("#/Obstetrician", pages.Obstetrician)
     .addRoute("#/Neurology", pages.Neurology)
     .addRoute("#/Ophthalmology", pages.Ophthalmology)
     .start();

     window.addEventListener("click", event => {
          if(event.target.matches("[data-navigate]")) {
            router.navigate(event.target.dataset.navigate);
          }
        });
      