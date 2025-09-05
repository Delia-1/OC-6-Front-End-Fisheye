// import { MediaFactory } from "../Factories/mediaFactory.js";
// import { ElementFactory } from "../Factories/elementFactory.js";
import galleryTemplate from "../templates/galleryTemplate.js";
import { handleLikes } from "../pages/photographer.js"
import { initLightBox } from "./lightBox.js";

let currentMediaData = [];



const filters = [
{ key: "popularite", label: "Popularité" },
{ key: "date", label: "Date" },
{ key: "title", label: "Titre" }
];

function renderReorderMenu(selectedKey) {
  const reorderDiv = document.querySelector(".reorder-div")
  reorderDiv.innerHTML = "";

  const selectedFilter = filters.find(f => f.key === selectedKey);

  const selectLabel = document.createElement("label");
  selectLabel.className = "select-label";
  selectLabel.textContent = "Trier par";
  selectLabel.setAttribute("for", "select-filter");

  const orderMenu = document.createElement("div");
  orderMenu.className = "order-menu";
  orderMenu.setAttribute("role", "button");
  orderMenu.setAttribute("aria-haspopup", "listbox");
  orderMenu.setAttribute("aria-expanded", "true");
  orderMenu.setAttribute("aria-label", "Order by");

  const mainBtn = document.createElement("button");
  mainBtn.className = `order-option ${selectedFilter.key} is-active`
  mainBtn.textContent = selectedFilter.label;
  mainBtn.setAttribute("aria-expanded", "false");
  mainBtn.setAttribute("aria-controls", "extra-options");

  const dropdownIcon = document.createElement("img");
  dropdownIcon.className = "dropdown-close-icon";
  dropdownIcon.src = "assets/icons/dropdown-close.png";
  dropdownIcon.alt = "dropdown icon"
  mainBtn.appendChild(dropdownIcon);


  const extraOptions = document.createElement("div");
  extraOptions.className = "extra-options";
  extraOptions.id = "extra-options";

  reorderDiv.appendChild(selectLabel)
  reorderDiv.appendChild(orderMenu)
  orderMenu.appendChild(mainBtn)
  orderMenu.appendChild(extraOptions)

  filters
  .filter(f => f.key !== selectedKey)
  .forEach(filter => {
    const btn = document.createElement("button")
    btn.className =  `order-option ${filter.key}`
    btn.textContent = filter.label;
    extraOptions.appendChild(btn)
  })

}

function addDropdownEvents (currentFilter) {
  const reorderDiv = document.querySelector(".reorder-div")
  const mainBtn = reorderDiv.querySelector(`.order-option.${currentFilter}`);
  const dropdown = reorderDiv.querySelector(".dropdown-close-icon");
  const extraOptions = reorderDiv.querySelector(".extra-options");

  mainBtn.addEventListener("click", () => {
    const isOpen = reorderDiv.getAttribute("open") === "true";
    reorderDiv.setAttribute("open", !isOpen);
    dropdown.setAttribute("src", !isOpen ? "assets/icons/dropdown-open.png" : "assets/icons/dropdown-close.png")
  })



  extraOptions.querySelectorAll(".order-option").forEach(btn => {
    btn.addEventListener("click", () => {
      let selectedFilter;
      if (btn.classList.contains("popularite")) selectedFilter = "popularite";

      else if (btn.classList.contains("date")) selectedFilter = "date";
      else if (btn.classList.contains("title")) selectedFilter = "title";

      let sortedData
      if(selectedFilter === "popularite") sortedData = sortByPop(currentMediaData);
      else if (selectedFilter === "date") sortedData = sortByDate(currentMediaData);
        else if (selectedFilter === "title") sortedData = sortByTitle(currentMediaData);

      updateGalleryProfilePage(sortedData, selectedFilter);
    })
  })
}

function sortByTitle(mediaData) {
  console.log("TRI PAR title")
    return [...mediaData].sort((media1, media2) =>  media1.title.localeCompare(media2.title, "en", {sensitivity:"base", numeric: "true"}))
}


function sortByPop(mediaData) {
  console.log("TRI PAR POPULARITÉ")
  return [...mediaData].sort((media1, media2) => media2.likes - media1.likes);

}


function sortByDate(mediaData) {
  console.log("TRI PAR date")
  return  [...mediaData].sort((media1, media2) =>  new Date(media2.date) - new Date(media1.date))
}




async function updateGalleryProfilePage(sortedData, selectedFilter = "Popularité") {
  const gallerySection = document.querySelector(".gallery-section")
  const reorderSection = document.getElementById("reorder-section")

  gallerySection.innerHTML = "";
  reorderSection.innerHTML = "";


  const newGalleryModel = galleryTemplate(sortedData);
  const { galleryContent, reorderMenu } = newGalleryModel.getGalleryDOM();
  const galleryDom = newGalleryModel.getGalleryDOM();

  gallerySection.appendChild(galleryContent)
  reorderSection.appendChild(reorderMenu)
  initLightBox(sortedData);
  // réinitialise les listeners de tri avec les nouveaux éléments DOM après chaque tri.
  // handleLikes();
  toggleOptions(sortedData, selectedFilter);
}

export const toggleOptions = (mediaData, selectedFilter = "popularite") => {
  currentMediaData = mediaData;
  renderReorderMenu(selectedFilter);
  addDropdownEvents(selectedFilter);
  handleLikes();
};
