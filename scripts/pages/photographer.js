import { getPhotographers } from "../utils/getPhotographer.js";
import photographerTemplates from "../templates/photographerTemplate.js";
import galleryTemplate from "../templates/galleryTemplate.js";
import { initModal } from "../Components/contactForm.js";
import { initLightBox } from "../Components/lightBox.js";
import { toggleOptions } from "../Components/reorderAside.js";

async function displayDataProfilePage(photographer) {
  const headerSection = document.querySelector(".photograph-section");
  const model = photographerTemplates(photographer);
  const headerDOM = model.renderHeader();

  headerSection.appendChild(headerDOM);

  const modalTitle = document.getElementById("modal_title");
  if (modalTitle) {
    modalTitle.innerHTML = `Contactez-moi ${photographer.name}`;
  }
}

async function displayGalleryProfilePage(mediaData) {
  const gallerySection = document.querySelector(".gallery-section");
  const reorderSection = document.getElementById("reorder-section");
  const galleryModel = galleryTemplate(mediaData);
  const { galleryContent } = galleryModel.getGalleryDOM();

  gallerySection.appendChild(galleryContent);

  const video = document.querySelector("video");
  video.removeAttribute("controls");

  toggleOptions(mediaData);
  initModal();
  initLightBox(mediaData);
}

function getphotographerId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

async function getRightPics() {
  const photographerId = getphotographerId();
  const data = await getPhotographers();
  let pics = data.media.filter((pic) => pic.photographerId === photographerId);
  return pics;
}

export async function init() {
  const photographId = getphotographerId();

  if (!photographId) {
    console.error("Aucun ID de photographe trouvé dans l'URL");
    return;
  }

  // Récupère les datas des photographes
  const data = await getPhotographers();
  const goodPics = await getRightPics();
  const rightPhotographer = data.photographers.find(
    (p) => p.id === photographId
  );

  await displayDataProfilePage(rightPhotographer);
  await displayGalleryProfilePage(goodPics);

  handleLikes();
}

export const handleLikes = () => {
  const likesDiv = document.querySelectorAll(".likes-div");

  likesDiv.forEach((div, index) => {
    const likeButton = div.querySelector(".heart-icon");
    const nbLikes = div.querySelector(".picture__likes");

    const newLikeButton = likeButton.cloneNode(true);
    likeButton.parentNode.replaceChild(newLikeButton, likeButton);

    newLikeButton.setAttribute("role", "button");
    newLikeButton.setAttribute("tabindex", "0");
    newLikeButton.setAttribute(
      "aria-label",
      `${nbLikes.textContent} likes, press enter to like`
    );

    newLikeButton.addEventListener("click", (e) => {
      let currentLikes = parseInt(
        div.querySelector(".picture__likes").textContent
      );
      nbLikes.textContent = String(currentLikes + 1);
      newLikeButton.setAttribute(
        "aria-label",
        `Aimé! ${currentLikes + 1} likes`
      );
      updateTotalLikes(1);
    });

    newLikeButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        newLikeButton.click();
      }
    });
  });
};

const updateTotalLikes = (increment) => {
  const totalLikesEl = document.querySelector(".nb-total-likes");

  let currentTotal = parseInt(totalLikesEl.textContent);
  totalLikesEl.textContent = String(currentTotal + increment);
};

init();
