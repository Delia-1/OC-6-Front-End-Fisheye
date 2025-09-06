import { MediaFactory } from "../Factories/mediaFactory.js";
import { ElementFactory } from "../Factories/elementFactory.js";

export default function lightBoxTemplate(mediaItem) {
    const media = MediaFactory.create(mediaItem);
    const mediaElement = media.render();

    const lightboxContainer = ElementFactory.create("div", {
        className: "lightbox-container",
        id: "lightbox_modal",
        role: "dialog",
        "aria-label": "image closeup view",
        "aria-modal": "true",
        tabindex : "-1"
    });

    const overlay = ElementFactory.create("div", {
        className: "lightbox-overlay"
    });

    const lightboxContent = ElementFactory.create("div", {
        className: "lightbox-content"
    });

    const closeLightbox = ElementFactory.create("button", {
        className: "close-lightbox",
        "aria-label": "Close Light-Box from button",
    });

    const closeIcon = ElementFactory.create("img", {
      className: "close-icon",
      src: "assets/icons/closeLB.png",
      alt: "close light-box",
    })

    const prevButton = ElementFactory.create("button", {
      className: "prevButton",
      tabindex: "0",
      "aria-label": `Previous image`
    })

    const prevIcon = ElementFactory.create("img", {
      className: "prev-icon",
      src: "assets/icons/arrowLeft.png",
      alt: "image précédente"
    })
        const nextButton = ElementFactory.create("button", {
      className: "nextButton",
      tabindex: "0",
      "aria-label": `Next image`
    })

    const nextIcon = ElementFactory.create("img", {
      className: "next-icon",
      src: "assets/icons/arrowRight.png",
      alt: "image suivante"
    })

    const imageSection = ElementFactory.create("section", {
      className: "image-section",
    })

    const lightboxMedia = mediaElement.cloneNode(true);
    lightboxMedia.className = "lightbox-media";
    lightboxMedia.setAttribute("aria-label", mediaItem.title);


    const pictureDesc = ElementFactory.create("h2", {
        className: "lightbox-title",
        id: "lightbox_title",
        text: mediaItem.title
    });

    lightboxContainer.el.appendChild(overlay.el);
    lightboxContainer.el.appendChild(lightboxContent.el);

    lightboxContent.el.appendChild(closeLightbox.el);
    closeLightbox.el.appendChild(closeIcon.el)

    lightboxContent.el.appendChild(prevButton.el);
    prevButton.el.appendChild(prevIcon.el);

    lightboxContent.el.appendChild(imageSection.el)
    imageSection.el.appendChild(lightboxMedia);
    imageSection.el.appendChild(pictureDesc.el);

    lightboxContent.el.appendChild(nextButton.el);
    nextButton.el.appendChild(nextIcon.el);


    return lightboxContainer.el;
}
