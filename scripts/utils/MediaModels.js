import { ElementFactory } from "./FactoryPatterns.js";

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
    super(data),
    this.image = data.image
  }

  render() {
    const picture = ElementFactory("img", "picture", "", `assets/pics/${this.image}`, this.title);
    return picture.el;
  };

  getType() {
    return 'image';
  }
};

export class Video extends Media{
  constructor(data) {
    super(data),
    this.video = data.video;
  }
  render() {
    const video = ElementFactory("video", "video", "", `assets/pics/${this.video}`, `video ${this.title}`, "", "", "", true ).el;
    const source = ElementFactory("source", "video-source", "", `assets/pics/${this.video}`, "", "", "", "", "", "video/mp4").el;
    video.appendChild(source);

    return video;
  };

  getType() {
    return 'video';
  }
};
