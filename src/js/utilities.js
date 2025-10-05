export function createItem(item, element, pelement) {
  let card = document.createElement(element);
  card.textContent = item;
  pelement.appendChild(card);
}
