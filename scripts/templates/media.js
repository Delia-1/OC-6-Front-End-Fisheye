function galleryTemplate(goodPics) {
  // const {id, photographerId, title, image, likes, date, price} = goodPics;


    function getGalleryDOM() {

        const container = document.createElement('div');
        container.setAttribute("class", "gallery-container");

        goodPics.forEach(pic => {
        const article = document.createElement("article");
        article.setAttribute("class", "card-picture")

        const picture = document.createElement("img");
        picture.setAttribute("src", `assets/pics/${pic.image}`)
        picture.setAttribute("alt", pic.title);

        const video = document.createElement("video");
        video.setAttribute("src",`assets/pics/${pic.image}`)


        article.appendChild(picture)
        article.appendChild(video)
        container.appendChild(article);
    })



      // // link to the photographer page / link-artist-page
      //   const link = document.createElement( 'a' );
      //   link.setAttribute("class", "link-artist-page");
      //   link.setAttribute("href", `photographer.html?id=${id}`);
      //   link.setAttribute("aria-label", `Naviguer sur la page de ${name} `);

      // // artist-picture
      //   const img = document.createElement( 'img' );
      //   img.setAttribute("class", "artist-picture");
      //   img.setAttribute("src", picture);
      //   img.setAttribute("alt", `photo de ${name}`);

      // artist-name


      // // card-artist__country
      //   const pCountry = document.createElement( 'p' );
      //   pCountry.setAttribute("class", "card-artist__country");
      //   pCountry.textContent = country;

      // // card-artist__tagline
      //   const pTagline = document.createElement( 'p' );
      //   pTagline.setAttribute("class", "card-artist__tagline");
      //   pTagline.textContent = tagline;

      // // card-artist__price
      //   const pPrice = document.createElement( 'p' );
      //   pPrice.setAttribute("class", "card-artist__price");
      //   pPrice.textContent = `${price}€/jour`;

      //   // append all
        // article.appendChild(link);
      //   link.appendChild(img);

        // article.appendChild(image)
      //   article.appendChild(pCountry);
      //   article.appendChild(pTagline);
      //   article.appendChild(pPrice);

        return container;
      }

    return { getGalleryDOM }

}
