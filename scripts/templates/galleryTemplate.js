import { MediaFactory } from "../Factories/mediaFactory.js";
import { ElementFactory } from "../Factories/elementFactory.js";

const calculateTotalLikes = (mediaData) => {
  let nbLikes = 0;
  mediaData.forEach((media) => {
    nbLikes += media.likes;
  })
  return nbLikes;
}

const calculateAveragePrice = (mediaData) => {
  let totalPrice = 0;
  mediaData.forEach((media) => {
    totalPrice += media.price;
  })
  const averagePrice = totalPrice / (mediaData.length)
  return averagePrice;
}

export default function galleryTemplate(mediaData) {

  function createMediaCard(mediaItem) {
    const media = MediaFactory.create(mediaItem);
    const mediaElement = media.render();

    const article = ElementFactory.create("article", {
      className: "card-picture",
    });

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
      alt: "likes"
    });

    article.el.appendChild(mediaElement);
    article.el.appendChild(infoWrapper.el);
    infoWrapper.el.appendChild(artPieceTitle.el);
    infoWrapper.el.appendChild(likesDiv.el);
    likesDiv.el.appendChild(nbLikes.el);
    likesDiv.el.appendChild(heartIcon.el);

    return article.el;
    // export default heartIcon;
  }

  function getGalleryDOM() {

    const galleryWrapper = document.getElementById("main_wrapper");
    const mediaInfoDiv = ElementFactory.create("aside", { className:"media-info-div"})
    const totalLikesDiv = ElementFactory.create("div", {className:"total-likes-div"})
    const nbTotalLikes = ElementFactory.create("p", {
      className: "nb-total-likes",
      text: calculateTotalLikes(mediaData)
     })
    const heartIconTotal = ElementFactory.create("img", {
      className: "heart-icon-total",
      src: "assets/icons/heartIconBlack.png",
      alt: "likes"
    });
    const averagePriceDiv = ElementFactory.create("div", {className:"average-price-div"})
    const averagePrice = ElementFactory.create("p", {
      className: "average-price",
      text: `${calculateAveragePrice(mediaData)}€ / jour`})


    const reorderDiv = ElementFactory.create("div", { className: "reoder-div" });
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

    galleryWrapper.appendChild(mediaInfoDiv.el);
    mediaInfoDiv.el.appendChild(totalLikesDiv.el);
    totalLikesDiv.el.appendChild(nbTotalLikes.el);
    totalLikesDiv.el.appendChild(heartIconTotal.el);

    mediaInfoDiv.el.appendChild(averagePriceDiv.el);
    averagePriceDiv.el.appendChild(averagePrice.el);

    reorderDiv.el.appendChild(selectLabel.el);
    const wrapper = document.createElement("div");
    wrapper.appendChild(reorderDiv.el);
    wrapper.appendChild(container.el);

    return wrapper;
  }

  return { getGalleryDOM };
}
