export default class Picture {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.price = data.price;
    this.date = data.date;
  }

  render() {
    const picture = document.createElement("img");
    picture.setAttribute("src", `assets/pics/${this.image}`);
    picture.setAttribute("alt", this.title);
    picture.setAttribute("class", "picture");
    return picture;
  };

  getType() {
    return 'image';
  }
};
