import { galleryTemplate } from "../templates/galleryTemplate.js";
import { reorderAsideTemplate } from "../templates/reorderAsideTemplate.js";
import { handleLikes } from "../pages/photographer.js";
import { initLightBox } from "./lightBox.js";

let currentMediaData = [];

const sortByTitle = (mediaData) => {
  return [...mediaData].sort((media1, media2) =>
    media1.title.localeCompare(media2.title, "en", {
      sensitivity: "base",
      numeric: "true",
    })
  );
};

const sortByPop = (mediaData) => {
  return [...mediaData].sort((media1, media2) => media2.likes - media1.likes);
};

const sortByDate = (mediaData) => {
  return [...mediaData].sort(
    (media1, media2) => new Date(media2.date) - new Date(media1.date)
  );
};

const addKeyboardNav = () => {
  const orderMenu = document.querySelector(".order-menu");
  const extraOptions = document.querySelector(".extra-options");

  orderMenu.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = orderMenu.getAttribute("aria-expanded") === "true";
    if (!isOpen) {
      openMenu();
      focusFirstOption();
    } else {
      closeMenu();
    }
  });

  orderMenu.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        e.preventDefault();
        const isOpen = orderMenu.getAttribute("aria-expanded") === "true";
        if (!isOpen) {
          openMenu();
          focusFirstOption();
        } else {
          closeMenu();
        }
        break;
      }
      case "ArrowDown":
        e.preventDefault();
        if (orderMenu.getAttribute("aria-expanded") === "false") {
          openMenu();
        }
        focusFirstOption();
        break;
      case "Escape":
        closeMenu();
        break;
    }
  });

  extraOptions.addEventListener("keydown", (e) => {
    const options = extraOptions.querySelectorAll('[role="option"]');

    const currentIndex = Array.from(options).findIndex(
      (opt) => opt === document.activeElement
    );

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % options.length;
        options[nextIndex].focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prevIndex =
          currentIndex === 0 ? options.length - 1 : currentIndex - 1;
        options[prevIndex].focus();
        break;
      }
      case "Enter":
      case " ":
        e.preventDefault();
        document.activeElement.click();
        break;
      case "Escape":
        closeMenu();
        orderMenu.focus();
        break;
    }
  });
};

const openMenu = () => {
  const orderMenu = document.querySelector(".order-menu");
  const reorderDiv = document.querySelector(".reorder-div");
  const dropdownIcon = document.querySelector(".dropdown-close-icon");

  orderMenu.setAttribute("aria-expanded", "true");
  reorderDiv.setAttribute("open", "true");

  if (dropdownIcon) {
    dropdownIcon.src = "assets/icons/dropdown-open.svg"
  }
};

const closeMenu = () => {
  const orderMenu = document.querySelector(".order-menu");
  const reorderDiv = document.querySelector(".reorder-div");
  const dropdownIcon = document.querySelector(".dropdown-close-icon");

  orderMenu.setAttribute("aria-expanded", "false");
  reorderDiv.setAttribute("open", "false");

  if (dropdownIcon) {
    dropdownIcon.src = "assets/icons/dropdown-close.svg";
  }
};

const focusFirstOption = () => {
  const firstOption = document.querySelector(
    '.extra-options [role="option"]:first-child'
  );
  firstOption && firstOption.focus();
};

const addDropdownEvents = () => {
  const extraOptions = document.querySelector(".extra-options");

  extraOptions.querySelectorAll(".order-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      let selectedFilter;
      if (btn.classList.contains("popularite")) selectedFilter = "popularite";
      else if (btn.classList.contains("date")) selectedFilter = "date";
      else if (btn.classList.contains("title")) selectedFilter = "title";

      let sortedData;
      if (selectedFilter === "popularite")
        sortedData = sortByPop(currentMediaData);
      else if (selectedFilter === "date")
        sortedData = sortByDate(currentMediaData);
      else if (selectedFilter === "title")
        sortedData = sortByTitle(currentMediaData);

      closeMenu();

      updateGalleryProfilePage(sortedData, selectedFilter);
    });
  });
}

async function updateGalleryProfilePage(
  sortedData,
  selectedFilter = "Popularité"
) {
  const gallerySection = document.querySelector(".gallery-section");
  const reorderSection = document.getElementById("reorder-section");

  gallerySection.innerHTML = "";
  reorderSection.innerHTML = "";

  const newGalleryModel = galleryTemplate(sortedData);
  const { galleryContent } = newGalleryModel.getGalleryDOM();

  gallerySection.appendChild(galleryContent);

  toggleOptions(sortedData, selectedFilter);
  initLightBox(sortedData);
  handleLikes();
}

export const toggleOptions = (mediaData, selectedFilter = "popularite") => {
  currentMediaData = mediaData;

  const reorderModel = reorderAsideTemplate(selectedFilter);
  const reorderDOM = reorderModel.getReorderDOM();

  const reorderSection = document.getElementById("reorder-section");
  reorderSection.innerHTML = "";
  reorderSection.appendChild(reorderDOM);

  addDropdownEvents(selectedFilter);
  addKeyboardNav();
  handleLikes();
};
