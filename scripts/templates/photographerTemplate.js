import { ElementFactory } from "../Factories/elementFactory.js";

export const photographerTemplates = (data) => {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;

  const renderHeader = () => {
      const photographInfo = ElementFactory.create("div", {
        className: "photograph-info",
      });
      const infoWrapper = ElementFactory.create("div", {
        className: "info-wrapper",
        tabindex: "0",
      });
      const photographName = ElementFactory.create("h1", {
        className: "info-wrapper__name",
        text: name,
      });
      const origin = ElementFactory.create("p", {
        className: "info-wrapper__origin",
        text: `${city}, ${country.toUpperCase()}`,
      });
      const tagLine = ElementFactory.create("p", {
        className: "info-wrapper__tagLine",
        text: tagline,
      });
      const btnWrapper = ElementFactory.create("div", {
        className: "btn-wrapper",
      });
      const button = document.querySelector(".contact_button");
      const imgWrapper = ElementFactory.create("div", {
        className: "img-wrapper",
        tabindex: "0",
        ariaLabelledby: "artist-picture",
      });
      const image = ElementFactory.create("img", {
        className: "artist-picture",
        src: picture,
        name: name,
        alt: name,
      });

      photographInfo.el.appendChild(infoWrapper.el);
      infoWrapper.el.appendChild(photographName.el);
      infoWrapper.el.appendChild(origin.el);
      infoWrapper.el.appendChild(tagLine.el);
      photographInfo.el.appendChild(btnWrapper.el);
      btnWrapper.el.appendChild(button);
      photographInfo.el.appendChild(imgWrapper.el);
      imgWrapper.el.appendChild(image.el);

      return photographInfo.el;
  }

  const cardsHomepageTemplate = () => {
    const article = ElementFactory.create("article", {
      className: "card-artist",
    });
    const link = ElementFactory.create("a", {
      className: "link-artist-page",
      ariaLabel: `Navigate to ${name} page `,
      href: `photographer.html?id=${id}`,
    });
    const imgWrapper = ElementFactory.create("div", {
      className: "img-wrapper",
    });
    const img = ElementFactory.create("img", {
      className: "artist-picture",
      src: picture,
      name: name,
    });
    const h2 = ElementFactory.create("h2", {
      className: "artist-name",
      text: name,
    });
    const pCountry = ElementFactory.create("p", {
      className: "card-artist__country",
      text: `${city}, ${country.toUpperCase()}`,
      tabindex: "0",
    });
    const spanTagline = ElementFactory.create("span", {
      className: "card-artist__tagline",
      text: tagline,
      tabindex: "0",
    });
    const pPrice = ElementFactory.create("p", {
      className: "card-artist__price",
      text: `${price}€/jour`,
      tabindex: "0",
      ariaLabel: `${price} euros per day`,
    });

    article.el.appendChild(link.el);
    link.el.appendChild(imgWrapper.el);
    imgWrapper.el.appendChild(img.el);
    link.el.appendChild(h2.el);
    article.el.appendChild(pCountry.el);
    article.el.appendChild(spanTagline.el);
    article.el.appendChild(pPrice.el);

    return article.el;
  };

  return {
    renderHeader,
    cardsHomepageTemplate,
  };
};
