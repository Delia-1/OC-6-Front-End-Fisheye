import { getPhotographers } from "../utils/getPhotographer.js";
import { photographerTemplates } from "../templates/photographerTemplate.js"

const displayData = async (photographers) => {
  // Instancie la section dans le dom ou inserer les cards photographers
  const photographersSection = document.querySelector(".photographer_section");

  // Mapping sur tous les objets photorapher pour les afficher dynamiquement
  photographers.forEach((photographer) => {
    // On appelle photographer template en lui renseignant l'argument necessaire
    const model = photographerTemplates(photographer);
    const card = model.cardsHomepageTemplate();

    photographersSection.appendChild(card);
  });
}

const init = async() => {
  // Récupère les datas des photographes
  const data = await getPhotographers();
  // Appel la fonction qui s'occupe du display via mapping
  displayData(data.photographers);

}



init();
