import { getPhotographers } from "../utils/getPhotographer.js";

    async function displayDataProfilePage(photographer, pictures) {
        const headerSection = document.querySelector(".photograph-section");
        // const gallerySection = document.querySelector(".gallery-section")
      if (headerSection) {
                // Réutilisation de photographerTemplate avec isHeader = true
        const photographerModel = photographerTemplate(photographer);
        const headerDOM = photographerModel.getUserCardDOM(true);
        headerSection.appendChild(headerDOM);
      }
      // const galeryModel = galleryTemplate(pictures);
      // const galleryDom = galerysModel.getGalleryDOM;
      // gallerySection.appendChild(galleryDom)
    }

    async function displayGalleryProfilePage( photographer) {
      const gallerySection = document.querySelector(".gallery-section")

      const galleryModel = galleryTemplate(photographer);
      const galleryDom = galleryModel.getGalleryDOM();
      gallerySection.appendChild(galleryDom)
    }

function getphotographerId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

async function getRightPics() {
  const photographerId = getphotographerId();
  const data = await getPhotographers();
  let pics = [];
  pics = data.media.filter(pic =>
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
          console.log("j'attend que toute la data charge encore")
    }

    init();
