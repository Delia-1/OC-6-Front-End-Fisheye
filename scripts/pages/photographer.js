import { getPhotographers } from "../utils/getPhotographer.js";
import photographerTemplates from "../templates/photographer.js";
import galleryTemplate from "../templates/galleryTemplate.js";

async function displayDataProfilePage(photographer) {
  const headerSection = document.querySelector(".photograph-section");
  const model = photographerTemplates(photographer);
  const headerDOM = model.renderHeader();

  headerSection.appendChild(headerDOM);
}
async function displayGalleryProfilePage( photographer) {
  const gallerySection = document.querySelector(".gallery-section")
  const galleryModel = galleryTemplate(photographer);
  const galleryDom = galleryModel.getGalleryDOM();

  gallerySection.appendChild(galleryDom)
}

// To put in utils?
function getphotographerId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

async function getRightPics() {
  const photographerId = getphotographerId();
  const data = await getPhotographers();
  let pics = data.media.filter(pic =>
    pic.photographerId === photographerId
  )
  return pics
}

export async function init() {
  const photographId = getphotographerId();

  if (!photographId) {
    console.error('Aucun ID de photographe trouvé dans l\'URL');
    return;
   }

     // Récupère les datas des photographes
   const data  = await getPhotographers();
   const goodPics = await getRightPics();
   const rightPhotographer = data.photographers.find(p => p.id === photographId);

   if (!rightPhotographer) {
    console.error('Photographe non trouvé');
    return;
  }

  await displayDataProfilePage(rightPhotographer)
  await displayGalleryProfilePage(goodPics)
}

init();
