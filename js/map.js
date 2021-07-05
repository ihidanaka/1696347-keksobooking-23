import { createCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');

const addCard = (advert) => {
  const card = createCard(advert);

  mapCanvas.appendChild(card);
};

export {addCard};
