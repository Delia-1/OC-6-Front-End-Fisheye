import lightBoxTemplate from "../templates/lightboxTemplate.js";
import { MediaFactory } from "../Factories/mediaFactory.js";

// const main = document.getElementById("main_wrapper");
const body = document.querySelector("body");

let currentMediaData = [];
let lightboxElement = null;
let currentIndex = 0;



export function initLightBox(mediaData) {
    currentMediaData = mediaData;

    const cardLinks = document.querySelectorAll(".card-picture");

    cardLinks.forEach((card, index) => {

        // clique
        card.addEventListener("click", (e) => {
            e.preventDefault();
            displayLightbox(index);
        });

        // Événement clavier
        card.addEventListener("keydown", (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                displayLightbox(index);
            }
        });
    });
}

export function displayLightbox(mediaIndex) {
    console.log("🚀 Ouverture lightbox pour index:", mediaIndex);

    currentIndex = mediaIndex

    if (lightboxElement) {
      lightboxElement.remove();
      lightboxElement = null;
    }


    const selectedMedia = currentMediaData[currentIndex];
    lightboxElement = lightBoxTemplate(selectedMedia);
    document.body.appendChild(lightboxElement);

    // bloquer le body
    body.classList.add("lightbox-open");
    lightboxElement.focus();
    console.log("✅ Lightbox ouverte");

    initLightboxEvents();
}

export function closeLightbox() {
  if (!lightboxElement) return;

  lightboxElement.remove();
  lightboxElement = null;

  body.classList.remove("lightbox-open");

  console.log(" Lightbox fermée");
}

export function navigatePrevPic() {

  const prevIndex = (currentIndex > 0? currentIndex - 1 : currentMediaData.length - 1);
  // style pour la fleche si index 0

  updateLightBox(prevIndex)
}

export function navigateNextPic() {
  const mediaArrayLength = currentMediaData.length - 1;
  const nextIndex = currentIndex < mediaArrayLength ? currentIndex + 1 : 0;

  updateLightBox(nextIndex)
}

function updateLightBox(newIndex) {
  currentIndex = newIndex;
  const newMedia = currentMediaData[currentIndex];

  const imageSection = lightboxElement.querySelector('.image-section');
  const lightboxTitle = lightboxElement.querySelector('.lightbox-title');

  const media = MediaFactory.create(newMedia);
  const newMediaElement = media.render();
  newMediaElement.classList.add("lightbox-media");

  const old = imageSection.querySelector(".lightbox-media");
  if (old) imageSection.replaceChild(newMediaElement, old);
  else imageSection.prepend(newMediaElement)

  if (lightboxTitle) lightboxTitle.textContent = newMedia.title ?? "";

}

function initLightboxEvents() {
  const closeButton = document.querySelector(".close-lightbox");
  const prevButton = document.querySelector(".prevButton");
  const nextButton = document.querySelector(".nextButton");

    closeButton.addEventListener("click", closeLightbox);

    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigatePrevPic();
    });
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateNextPic();
    });


    // Gestion clavier pour le bouton fermer
    closeButton.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeLightbox();
      }
    });

    // Gestion de la touche Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);

        // Nettoyer l'event listener à la fermeture
    const originalCloseLightbox = closeLightbox;
    window.closeLightbox = () => {
        document.removeEventListener('keydown', handleEscape);
        originalCloseLightbox();
    };
}
