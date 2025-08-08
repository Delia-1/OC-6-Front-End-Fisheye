import{ Picture, Video} from '../Models/mediaModels.js';

export class MediaFactory {
  static create(mediaData) {
    if(mediaData.image) {
      return new Picture(mediaData);
    }
    if(mediaData.video) {
      return new Video(mediaData);
    }
    throw new Error('Type de média non supporté');
  }
}


//  export const ElementFactory = (type, className, text, src, alt, ariaLabel, forString, href, controls, videoType) => {
//   const el = document.createElement(type);
//   el.setAttribute("class", className);

//   text? el.innerText = text : "";
//   ariaLabel? el.setAttribute("aria-label", ariaLabel) : "";
//   "alt" in el? el.setAttribute("alt", alt) : "";
//   "src" in el? el.setAttribute("src", src) : "";
//   (type.toLowerCase() === "label" && forString)? el.setAttribute("for", forString) : "";
//   "href" in el? el.setAttribute("href", href) : "";
//   "controls" in el? el.setAttribute("controls", controls) : "";
//   "type" in el? el.setAttribute("type", videoType) : "";

//   return {
//     el,
//     setText(text) {text? el.innerText = text : "";},
//     setClass(className) {el.setAttribute("class", className)},
//     setAlt(alt){"alt" in el ? el.setAttribute("alt", alt) : ""},
//     setSrc(src){"src" in el ? el.setAttribute("src", src) : ""},
//     setAriaLabel(ariaLabel){ariaLabel? el.setAttribute("aria-label", ariaLabel) : "";},
//     setForString(forString){(el.tagName.toLowerCase() === "label" && forString) ? el.setAttribute("for", forString) : ""},
//     setHref(href) {  "href" in el? el.setAttribute("href", href) : "";},
//     setControls(controls) { "controls" in el? el.setAttribute("controls", controls) : "";},
//     setVideoType(videoType) { "type" in el? el.setAttribute("type", videoType) : "";}
//     }
//   }
