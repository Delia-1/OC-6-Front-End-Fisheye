import { getPhotographers } from "../utils/getPhotographer.js";
import photographerTemplates from "../templates/photographer.js"
import {displayModal, initModal, closeModal} from "../utils/contactForm.js";

async function displayData(photographers) {
  // Instancie la section dans le dom ou inserer les cards photographers
  const photographersSection = document.querySelector(".photographer_section");

  // Mapping sur tous les objets photorapher pour les afficher dynamiquement
  photographers.forEach((photographer) => {
    // On appelle photographer template en lui renseignant l'argument necessaire
    const model = photographerTemplates(photographer);
    const card = model.renderCard();

    photographersSection.appendChild(card);
  });
}

async function init() {
  // Récupère les datas des photographes
  const data = await getPhotographers();
  // Appel la fonction qui s'occupe du display via mapping
  displayData(data.photographers);

}


init();
