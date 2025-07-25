function galleryTemplate(goodPics) {
  // const {name, id, photographerId, title, image, likes, date, price} = goodPics;

  function MediaFactory(media) {
    if(media.image) {return new Picture(media)};
    if(media.video) {return new Video(media)};
  }

  function Picture(data) {
    this.renderMedia = function () {
      const picture = document.createElement("img");
      picture.setAttribute("src", `assets/pics/${data.image}`)
      picture.setAttribute("alt", data.title);
      picture.setAttribute("class", "picture")
      return picture
    }

  }

  function Video(data) {
    this.renderMedia = function () {
      const video = document.createElement("video");
      video.setAttribute("controls", true);
      video.setAttribute("class", "video");
      const source = document.createElement("source");
      source.setAttribute("src", `assets/pics/${data.video}`);
      source.setAttribute("type", "video/mp4");
      video.appendChild(source);

      return video;
    }
  }

  function getGalleryDOM() {
    const superContainer = document.querySelector(".gallery-section");

        const reorderDiv = document.createElement("div");
        reorderDiv.setAttribute("class", "reoder-Div");

        const selectLabel = document.createElement("label");
        selectLabel.setAttribute("class", "select-label")
        selectLabel.setAttribute("for","select-filter");
        selectLabel.textContent="Trier par";

        const container = document.createElement('section');
        container.setAttribute("class", "gallery-container");
        container.setAttribute("aria-label", "section des photographies")


        goodPics.forEach(mediaData => {
          const media = MediaFactory(mediaData);

          const article = document.createElement("article");
          article.setAttribute("class", "card-picture")

        const mediaElement = media.renderMedia();

        const infoWrapper = document.createElement("div");
        infoWrapper.setAttribute("class", "pic-info-wrapper")

        const artPieceTitle = document.createElement("h3");
        artPieceTitle.setAttribute("class", "picture__title");
        artPieceTitle.textContent = (mediaData.title);

        const likesDiv = document.createElement("div");
        likesDiv.setAttribute("class", "likes-div");


        const nbLikes = document.createElement("p");
         nbLikes.setAttribute("class", "picture__likes");
        nbLikes.textContent = (mediaData.likes);

        const heartIcon = document.createElement("img");
        heartIcon.setAttribute("class", "heart-icon")
        heartIcon.setAttribute("src", "assets/icons/heartIcon.png");
        heartIcon.setAttribute("alt", "icon coeur")


        superContainer.appendChild(reorderDiv);
        reorderDiv.appendChild(selectLabel)
        container.appendChild(article);
        reorderDiv.appendChild(selectLabel)
        article.appendChild(mediaElement);
        article.appendChild(infoWrapper);
        infoWrapper.appendChild(artPieceTitle);
        infoWrapper.appendChild(likesDiv);
        likesDiv.appendChild(nbLikes);
        likesDiv.appendChild(heartIcon);

    })

        return container;
      }

    return { getGalleryDOM }

}
