import lightBoxTemplate from "../templates/lightboxTemplate.js";
import { MediaFactory } from "../Factories/mediaFactory.js";

const main = document.getElementById("main_wrapper");
const body = document.querySelector("body");

let currentMediaData = [];
let lightboxElement = null;
let currentIndex = 0;



export function initLightBox(mediaData) {
    currentMediaData = mediaData;
    const mediaLinks = document.querySelectorAll(".btn-media-wrapper");

    mediaLinks.forEach((media, index) => {

        // clique
        media.addEventListener("click", (e) => {
            e.preventDefault();
            displayLightbox(index);
            console.log("open", index)
        });


        // clavier
        media.addEventListener("keydown", (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                displayLightbox(index);
            }
        });
    });
}



export function displayLightbox(mediaIndex) {

    currentIndex = mediaIndex
    const selectedMedia = currentMediaData[currentIndex];

    lightboxElement = lightBoxTemplate(selectedMedia);
    document.body.appendChild(lightboxElement);

    body.classList.add("lightbox-open");
    main.setAttribute('inert','');

    const video = document.querySelector(".lightbox-media")
    video.setAttribute("controls", "true")

    lightboxElement.focus();
    document.addEventListener("keydown", handleKeyboardEvent);
    initLightboxEvents();
}

export function closeLightbox() {
  if (!lightboxElement) return;

  document.removeEventListener("keydown", handleKeyboardEvent);

      const video = document.querySelector(".lightbox-media")
    video.setAttribute("controls", "false")

  lightboxElement.remove();
  lightboxElement = null;

  body.classList.remove("lightbox-open");
  main.removeAttribute('inert');
}

export function navigatePrevPic() {

  const prevIndex = (currentIndex > 0? currentIndex - 1 : currentMediaData.length - 1);

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
  newMediaElement.classList.remove("media");



  const old = imageSection.querySelector(".lightbox-media");
  imageSection.replaceChild(newMediaElement, old);

  lightboxTitle.textContent = newMedia.title ?? "";

}

function initLightboxEvents() {
  const closeButton = lightboxElement.querySelector(".close-lightbox");
  const prevButton = lightboxElement.querySelector(".prevButton");
  const nextButton = lightboxElement.querySelector(".nextButton");

  closeButton.addEventListener("click", closeLightbox);

    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigatePrevPic();
    });

    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
        navigateNextPic();

    });
  };

  const handleKeyboardEvent = (e) => {
    if (!lightboxElement) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        console.log("j'entre dans switch escape")
        break;
      case "ArrowLeft":
        e.preventDefault();
        navigatePrevPic();
        break;
      case"ArrowRight":
        e.preventDefault();
        navigateNextPic();
        break;
      case "Enter":
      case " ": {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains("close-lightbox")) {
          closeLightbox();
        } else if (activeElement.classList.contains("prevButton")) {
          navigatePrevPic();
        } else if (activeElement.classList.contains("nextButton")) {
          navigateNextPic();
        }
        break;
      }
    }
  }
