export default class Video {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.video = data.video;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  render() {
    const video = document.createElement("video");
    video.setAttribute("controls", true);
    video.setAttribute("class", "video");
    const source = document.createElement("source");
    source.setAttribute("src", `assets/pics/${this.video}`);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    return video;
  };

  getType() {
    return 'video';
  }
};
