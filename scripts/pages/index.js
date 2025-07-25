import { getPhotographers } from "../utils/getPhotographer.js";
import photographerTemplate from "../templates/photographer.js"
console.log(getPhotographers)

async function displayData(photographers) {
  console.log("from f ", photographers)
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const model = photographerTemplate(photographer);
    const card = model.renderCard();

    photographersSection.appendChild(card);
  });
}

async function init() {
  // Récupère les datas des photographes
  const data = await getPhotographers();
  displayData(data.photographers);
}

init();
