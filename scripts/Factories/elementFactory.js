import {
  ArticleElement,
  DivElement,
  SectionElement,
  HeadingElement,
  ParagraphElement,
  ImageElement,
  VideoElement,
  LabelElement,
  LinkElement,
  ButtonElement,
  AsideElement,
  SpanElement,
  BrElement
} from '../Models/elementsModels.js';


export class ElementFactory {
  static create(elementType, options={}) {
    switch (elementType) {
      case "article":
        return new ArticleElement(options);
      case "div":
        return new DivElement(options);
      case "section":
        return new SectionElement(options);
      case "h1":
      case "h2":
      case "h3":
        return new HeadingElement(elementType, options);
      case 'p':
        return new ParagraphElement(options);
      case "img":
        return new ImageElement(options);
      case "video":
        return new VideoElement(options);
      case 'label':
        return new LabelElement(options);
      case "a":
        return new LinkElement(options);
      case "button":
        return new ButtonElement(options);
      case "aside":
        return new AsideElement(options)
      case "span":
        return new SpanElement(options);
      case "br":
        return new BrElement(options);
      default:
        throw new Error(`Type d'element ${elementType} non supporté`);
    }
  }
}
