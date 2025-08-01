import { MediaFactory, ElementFactory } from "../utils/FactoryPatterns.js";

// ordre des attributs: type, class, text, src, alt, ariaLabel, for

// construction de la card picture
export default function galleryTemplate(mediaData) {

  function createMediaCard(mediaItem) {
    const media = MediaFactory.create(mediaItem);
    const article = ElementFactory("article", "card-picture").el;
    const mediaElement = media.render();
    const infoWrapper = ElementFactory("div", "pic-info-wrapper").el;
    const artPieceTitle = ElementFactory("h3","picture__title", mediaItem.title).el;
    const likesDiv = ElementFactory("div", "likes-div").el;
    const nbLikes = ElementFactory("p", "picture__likes", mediaItem.likes).el;
    const heartIcon = ElementFactory("img", "heart-icon", "", "assets/icons/heartIcon.png", "icon coeur" ).el;

    article.appendChild(mediaElement);
    article.appendChild(infoWrapper);
    infoWrapper.appendChild(artPieceTitle);
    infoWrapper.appendChild(likesDiv);
    likesDiv.appendChild(nbLikes);
    likesDiv.appendChild(heartIcon);

    return article;
  }

// construction section de tri
  function getGalleryDOM() {
    const reorderDiv = ElementFactory("div", "reoder-Div" ).el;
    const selectLabel = ElementFactory("label", "select-label", "Trier par", "", "", "", "select-filter").el;
    const container = ElementFactory("section", "gallery-container", "", "", "", "section des photographies" ).el;

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
