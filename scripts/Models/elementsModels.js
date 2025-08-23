export class ArticleElement {
  constructor(options = {}) {
    this.el = document.createElement("article");
    this.el.className = options.className || "";
    this.el.role = options.role || "";
    if(options.tabindex)
      this.el.setAttribute("tabindex", options.tabindex || "");
    if (options["data-index"] !== undefined) {
      this.el.setAttribute("data-index", options["data-index"]);
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}
}

export class DivElement {
  constructor(options = {}) {
    this.el = document.createElement("div");
    this.el.className = options.className || "";
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}

export class HeadingElement {
  constructor(tagName, options = {}) {
    this.el = document.createElement(tagName); // h1, h2, h3
    this.el.className = options.className || "";
    this.el.textContent = options.text || "";
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}

export class ParagraphElement {
  constructor(options = {}) {
    this.el = document.createElement("p");
    this.el.className = options.className || "";
    this.el.textContent = options.text || "";
  }
}

export class ImageElement {
  constructor(options = {}) {
    this.el = document.createElement("img");
    this.el.className = options.className || "";
    this.el.src = options.src || "";
    this.el.alt = options.alt || "";
  }
}

export class VideoElement {
  constructor(options = {}) {
    this.el = document.createElement("video");
    this.el.className = options.className || "";
    this.el.src = options.src || "";
    this.el.controls = options.controls || false;
  }
}

export class LabelElement {
  constructor(options = {}) {
    this.el = document.createElement("label");
    this.el.className = options.className || "";
    this.el.textContent = options.text || "";
    if (options.for) this.el.setAttribute("for", options.for);
  }
}

export class LinkElement {
  constructor(options = {}) {
    this.el = document.createElement("a");
    this.el.className = options.className || "";
    this.el.textContent = options.text || "";
    this.el.href = options.href || "#";
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}

export class ButtonElement {
  constructor(options = {}) {
    this.el = document.createElement("button");
    this.el.className = options.className || "";
    this.el.textContent = options.text || "";
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}

export class SectionElement {
  constructor(options = {}) {
    this.el = document.createElement("section");
    this.el.className = options.className || "";
    if (options.ariaLabel)
      this.el.setAttribute("aria-label", options.ariaLabel);
  }
}
