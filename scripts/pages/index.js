import { getPhotographers } from "../utils/getPhotographer.js";
import { photographerTemplates } from "../templates/photographerTemplate.js";

const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const model = photographerTemplates(photographer);
    const card = model.cardsHomepageTemplate();

    photographersSection.appendChild(card);
  });
};

const init = async () => {
  const data = await getPhotographers();
  displayData(data.photographers);
};

init();
