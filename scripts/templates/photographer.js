function photographerTemplate(data) {
    const {id, name, portrait, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
      // div article/ container card-artist
        const article = document.createElement( 'article' );
        article.setAttribute("class", "card-artist");
        article.setAttribute("aria-label", `Carte du photographe ${name}`);

      // link to the photographer page / link-artist-page
        const link = document.createElement( 'a' );
        link.setAttribute("class", "link-artist-page");
        link.setAttribute("href", `photographer.html?${id}`);
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
    return { id, name, picture, country, tagline, price, getUserCardDOM }
}
