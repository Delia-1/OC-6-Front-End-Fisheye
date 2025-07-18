function photographerTemplate(data) {
    const {id, name, portrait, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;




    function getUserCardDOM(isHeader = false) {

      if (isHeader) {

      const photographInfo = document.createElement( "div" );
      photographInfo.setAttribute("class", "photograph-info")
      //  div info-wrapper
      const infoWrapper = document.createElement("div");
      infoWrapper.setAttribute("class", "info-wrapper");

        // name
      const photographName = document.createElement("h1");
      photographName.setAttribute("class", "info-wrapper__name")
      photographName.textContent = (name)

        // origin
      const origin = document.createElement("p");
      origin.setAttribute("class", "info-wrapper__origin")
      origin.textContent = (country.toUpperCase())

        // citation
      const tagLine = document.createElement("p");
      tagLine.setAttribute("class", "info-wrapper__tagLine")
      tagLine.textContent = (tagline)

        // col2 / div2
      const btnWrapper = document.createElement("div");
      btnWrapper.setAttribute("class", "btn-wrapper");

        // bouton
      const button = document.createElement("button");
      button.setAttribute("class", "contact_button" )
      button.textContent = "Contactez-moi";

        // div img-wrapper
      const imgWrapper = document.createElement("div");
      imgWrapper.setAttribute("class", "img-wrapper")

        // artist-picture
      const image = document.createElement("img");
      image.setAttribute("class", "artist-picture")
      image.setAttribute("src", picture);
      image.setAttribute("alt", `photo de ${name}`);

      // section pour les photos photograph-pictures:

      photographInfo.appendChild(infoWrapper);
      infoWrapper.appendChild(photographName);
      infoWrapper.appendChild(origin);
      infoWrapper.appendChild(tagLine);

      photographInfo.appendChild(btnWrapper)
      btnWrapper.appendChild(button)

      photographInfo.appendChild(imgWrapper);
      imgWrapper.appendChild(image);


      return photographInfo;
    } else {

      // div article/ container card-artist
        const article = document.createElement( 'article' );
        article.setAttribute("class", "card-artist");
        article.setAttribute("aria-label", `Carte du photographe ${name}`);

      // link to the photographer page / link-artist-page
        const link = document.createElement( 'a' );
        link.setAttribute("class", "link-artist-page");
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute("aria-label", `Naviguer sur la page de ${name} `);

      // artist-picture
        const img = document.createElement( 'img' );
        img.setAttribute("class", "artist-picture");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `photo de ${name}`);

      // artist-name
        const h2 = document.createElement( 'h2' );
        h2.setAttribute("class", "artist-name");
        h2.textContent = name;

      // card-artist__country
        const pCountry = document.createElement( 'p' );
        pCountry.setAttribute("class", "card-artist__country");
        pCountry.textContent = country;

      // card-artist__tagline
        const pTagline = document.createElement( 'p' );
        pTagline.setAttribute("class", "card-artist__tagline");
        pTagline.textContent = tagline;

      // card-artist__price
        const pPrice = document.createElement( 'p' );
        pPrice.setAttribute("class", "card-artist__price");
        pPrice.textContent = `${price}€/jour`;

        // append all
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pCountry);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return (article);
      }
    }

    return { id, name, picture, country, tagline, price, getUserCardDOM }

}
        // img.setAttribute("src", picture);
        // img.setAttribute("alt", `photo de ${name}`);
