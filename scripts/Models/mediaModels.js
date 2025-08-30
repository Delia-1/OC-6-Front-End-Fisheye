import { ElementFactory } from "../Factories/elementFactory.js";

class Media {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.price = data.price;
    this.date = data.date;
  }
}

export class Picture extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }

  render() {
    const picture = ElementFactory.create("img", {
      className: "media",
      src: `assets/pics/${this.image}`,
      alt: this.title,
    });
    return picture.el;
  }

  getType() {
    return "image";
  }
}

export class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }
  render() {
    const video = ElementFactory.create("video", {
      className: "media",
      src: `assets/pics/${this.video}`,
      controls: true,
      preload: "metadata",
      playsinline: true,
      role: "button",
      tabindex: "0",
      ariaLabel: "Ouvrir Wooden sculpture of a horse en grand format",
    });

    return video.el;
  }

  getType() {
    return "video";
  }
}
