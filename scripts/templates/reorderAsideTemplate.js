import { ElementFactory } from "../Factories/elementFactory.js";

const filters = [
  { key: "popularite", label: "Popularité" },
  { key: "date", label: "Date" },
  { key: "title", label: "Titre" },
];

export const reorderAsideTemplate = (selectedKey = "popularite") => {
  const selectedFilter =
    filters.find((f) => f.key === selectedKey) || filters[0];

  function getReorderDOM() {
    const reorderDiv = ElementFactory.create("aside", {
      className: "reorder-div",
    });

    const selectLabel = ElementFactory.create("label", {
      className: "select-label",
      id: "order-label",
      text: "Trier par",
      for: "order-menu",
    });

    const orderMenu = ElementFactory.create("button", {
      className: "order-menu",
      id: "order-menu",
      ariaHaspopup: "listbox",
      ariaExpanded: "false",
      ariaLabelledby: "order-label",
      tabindex: "0",
      textContent: selectedFilter.label,
    });

    const dropdownIcon = ElementFactory.create("img", {
      className: "dropdown-close-icon",
      src: "assets/icons/dropdown-close.png",
      alt: "dropdown icon",
      ariaHidden: "true",
    });

    const extraOptions = ElementFactory.create("div", {
      className: "extra-options",
      role: "listbox",
      ariaLabelledby: "order-label",
    });

    filters
      .filter((f) => f.key !== selectedFilter.key)
      .forEach((filter) => {
        const btn = ElementFactory.create("button", {
          className: `order-option ${filter.key}`,
          id: `option-${filter.key}`,
          textContent: filter.label,
          role: "option",
          ariaSelected: "false",
          tabindex: "-1",
        });
        extraOptions.el.appendChild(btn.el);
      });

    orderMenu.el.appendChild(dropdownIcon.el);
    reorderDiv.el.appendChild(selectLabel.el);
    reorderDiv.el.appendChild(orderMenu.el);
    reorderDiv.el.appendChild(extraOptions.el);

    return reorderDiv.el;
  }

  return { getReorderDOM, filters };
};
