import { getPhotographers } from "../utils/getPhotographer.js";
import { photographerTemplates } from "../templates/photographerTemplate.js";
import { galleryTemplate } from "../templates/galleryTemplate.js";
import { initModal } from "../Components/contactForm.js";
import { initLightBox } from "../Components/lightBox.js";
import { toggleOptions } from "../Components/reorderAside.js";

const displayHeaderProfilePage = (photographer) => {
  const headerSection = document.querySelector(".photograph-section");
  const templateTools = photographerTemplates(photographer);
  const headerDOM = templateTools.renderHeader();

  headerSection.appendChild(headerDOM);

  const modalTitle = document.getElementById("modal_title");
  if (modalTitle) {
    modalTitle.innerHTML = `Contactez-moi ${photographer.name}`;
  }
};

const displayGalleryProfilePage = (mediaData) => {
  const gallerySection = document.querySelector(".gallery-section");
  const galleryTools = galleryTemplate(mediaData);
  const wrapper = galleryTools.getGalleryDOM();
  gallerySection.appendChild(wrapper);

  const video = document.querySelector("video");
  video.removeAttribute("controls");

  toggleOptions(mediaData);
  initModal();
  initLightBox(mediaData);
};

const getphotographerId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
};

const getRightPics = (data, photographerId) => {
  return data.media.filter((pic) => pic.photographerId === photographerId);
};

export const init = async () => {
  try {
    const photographerId = getphotographerId();
    if (!photographerId) {
      console.error("Aucun ID de photographe trouvé dans l'URL");
      return;
    }
    // Récupère les datas des photographes
    const data = await getPhotographers();
    const goodPics = getRightPics(data, photographerId);
    const rightPhotographer = data.photographers.find(
      (p) => p.id === photographerId
    );

    displayHeaderProfilePage(rightPhotographer);
    displayGalleryProfilePage(goodPics);

    handleLikes();
  } catch (error) {
    console.error("Erreur lors de l'initialisation", error);
  }
};

export const handleLikes = () => {
  const likesDiv = document.querySelectorAll(".likes-div");

  likesDiv.forEach((div) => {
    const likeButton = div.querySelector(".heart-icon");
    const nbLikes = div.querySelector(".picture__likes");
    // Pour éviter l'accumulation des eventListener
    const newLikeButton = likeButton.cloneNode(true);
    likeButton.parentNode.replaceChild(newLikeButton, likeButton);

    newLikeButton.setAttribute("role", "button");
    newLikeButton.setAttribute("tabindex", "0");
    newLikeButton.setAttribute(
      "aria-label",
      `${nbLikes.textContent} likes, press enter to like`
    );

    newLikeButton.addEventListener("click", () => {
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
