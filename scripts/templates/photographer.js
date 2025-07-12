function photographerTemplate(data) {
    const { name, portrait, country, tagline, price } = data;

    const picture = `../assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        // img.setAttribute("src", picture)
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pCountry = document.createElement( 'p' );
        pCountry.textContent = country;
        const pTagline = document.createElement( 'p' );
        pTagline.textContent = tagline;
        const pPrice = document.createElement( 'p' );
        pPrice.textContent = price;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pCountry);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return (article);
    }
    return { name, picture, country, tagline, price, getUserCardDOM }
}
