import { MediaFactory } from "./MediaFactory.js";

export default function galleryTemplate(mediaData) {
  function createMediaCard(mediaItem) {
    const media = MediaFactory.create(mediaItem);

    const article = document.createElement("article");
    article.setAttribute("class", "card-picture");

    const mediaElement = media.render();

    const infoWrapper = document.createElement("div");
    infoWrapper.setAttribute("class", "pic-info-wrapper");

    const artPieceTitle = document.createElement("h3");
    artPieceTitle.setAttribute("class", "picture__title");
    artPieceTitle.textContent = mediaItem.title;

    const likesDiv = document.createElement("div");
    likesDiv.setAttribute("class", "likes-div");

    const nbLikes = document.createElement("p");
    nbLikes.setAttribute("class", "picture__likes");
    nbLikes.textContent = mediaItem.likes;

    const heartIcon = document.createElement("img");
    heartIcon.setAttribute("class", "heart-icon");
    heartIcon.setAttribute("src", "assets/icons/heartIcon.png");
    heartIcon.setAttribute("alt", "icon coeur");

    article.appendChild(mediaElement);
    article.appendChild(infoWrapper);
    infoWrapper.appendChild(artPieceTitle);
    infoWrapper.appendChild(likesDiv);
    likesDiv.appendChild(nbLikes);
    likesDiv.appendChild(heartIcon);

    return article;
  }

  function getGalleryDOM() {
    const reorderDiv = document.createElement("div");
    reorderDiv.setAttribute("class", "reoder-Div");

    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("class", "select-label");
    selectLabel.setAttribute("for", "select-filter");
    selectLabel.textContent = "Trier par";

    const container = document.createElement("section");
    container.setAttribute("class", "gallery-container");
    container.setAttribute("aria-label", "section des photographies");

    mediaData.forEach((item) => {
      const card = createMediaCard(item);
      container.appendChild(card);
    });

    reorderDiv.appendChild(selectLabel);
    const wrapper = document.createElement("div");
    wrapper.appendChild(reorderDiv);
    wrapper.appendChild(container);

    return wrapper;
  }

  return { getGalleryDOM };
}
