import { MediaFactory } from "../Factories/mediaFactory.js";
import { ElementFactory } from "../Factories/elementFactory.js";


export default function galleryTemplate(mediaData) {

  function createMediaCard(mediaItem, index) {
    const media = MediaFactory.create(mediaItem);
    const article = ElementFactory.create("article", {
      className: "card-picture",
      role: "button",
      tabindex: "0",
      "data-index": index
    });
    const mediaElement = media.render();
    const infoWrapper = ElementFactory.create("div", { className: "pic-info-wrapper" });
    const artPieceTitle = ElementFactory.create("h3", {
      className: "picture__title",
      text: mediaItem.title
    });
    const likesDiv = ElementFactory.create("div", { className: "likes-div" });
    const nbLikes = ElementFactory.create("p", {
      className: "picture__likes",
      text: mediaItem.likes
    });
    const heartIcon = ElementFactory.create("img", {
      className: "heart-icon",
      src: "assets/icons/heartIcon.png",
      alt: "icon coeur"
    });

    article.el.appendChild(mediaElement);
    article.el.appendChild(infoWrapper.el);
    infoWrapper.el.appendChild(artPieceTitle.el);
    infoWrapper.el.appendChild(likesDiv.el);
    likesDiv.el.appendChild(nbLikes.el);
    likesDiv.el.appendChild(heartIcon.el);

    return article.el;
  }

  function getGalleryDOM() {
    const reorderDiv = ElementFactory.create("div", { className: "reoder-Div" });
    const selectLabel = ElementFactory.create("label", {
      className: "select-label",
      text: "Trier par",
      for: "select-filter"
    });
    const container = ElementFactory.create("section", {
      className: "gallery-container",
      ariaLabel: "section des photographies"
    });

    mediaData.forEach((item, index) => {
      const card = createMediaCard(item, index);
      container.el.appendChild(card);
    });

    reorderDiv.el.appendChild(selectLabel.el);
    const wrapper = document.createElement("div");
    wrapper.appendChild(reorderDiv.el);
    wrapper.appendChild(container.el);

    return wrapper;
  }

  return { getGalleryDOM };
}
