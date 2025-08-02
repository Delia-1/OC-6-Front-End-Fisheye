import { ElementFactory } from "../utils/FactoryPatterns.js";

export default function photographerTemplates(data) {
  // destructuration de data
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;

// Factory gestion section
  function PhotographersFactory(section) {
    if (section.header) {
      return new Header();
    }
    if (section.card) {
      return new Card();
    }
  }

  // construction du header de chaque page photographe
  class Header {
    constructor() {
      this.render = function () {
        const photographInfo = ElementFactory("div", "photograph-info").el;
        const infoWrapper = ElementFactory("div", "info-wrapper").el;
        const photographName = ElementFactory("h1", "info-wrapper__name", name).el;
        const origin = ElementFactory("p", "info-wrapper__origin", `${city}, ${country.toUpperCase()}`).el;
        const tagLine = ElementFactory("p", "info-wrapper__tagLine", tagline).el;
        const btnWrapper = ElementFactory("div", "btn-wrapper").el;
        // const button = ElementFactory("button", "contact_button", "Contactez-moi").el;
        const button = document.querySelector(".contact_button")
        const imgWrapper = ElementFactory("div", "img-wrapper").el;
        const image = ElementFactory("img", "artist-picture", "", picture, `Photo de ${name}`).el;

        photographInfo.appendChild(infoWrapper);
        infoWrapper.appendChild(photographName);
        infoWrapper.appendChild(origin);
        infoWrapper.appendChild(tagLine);
        photographInfo.appendChild(btnWrapper);
        btnWrapper.appendChild(button);

        photographInfo.appendChild(imgWrapper);
        imgWrapper.appendChild(image);

        return photographInfo;
      };
    }
  }

  // construction des cards photographe sur la homepage
  class Card {
    constructor() {
      this.render = function () {
        const article = ElementFactory("article", "card-artist", "", "", "", `Carte du photographe ${name}`).el;
        const link = ElementFactory("a", "link-artist-page","", "", "", `Naviguer sur la page de ${name}`, "", `photographer.html?id=${id}`).el;
        const img = ElementFactory("img", "artist-picture", "", picture, `Photo de ${name}` ).el;
        const h2 = ElementFactory("h2", "artist-name", name).el;
        const pCountry = ElementFactory("p", "card-artist__country", `${city}, ${country.toUpperCase()}`).el;
        const pTagline = ElementFactory("p", "card-artist__tagline", tagline).el;
        const pPrice = ElementFactory("p", "card-artist__price", `${price}€/jour`).el;

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pCountry);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return article;
      };
    }
  }

  return {
    id,
    name,
    picture,
    country,
    tagline,
    price,
    renderHeader: () => PhotographersFactory({ header: true }).render(),
    renderCard: () => PhotographersFactory({ card: true }).render(),
  };
}
