const offerTypeEnToRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('article');

const createCard = (advert) => {
  const offer = advert.offer;
  const features = offer.features;
  const photos = offer.photos;

  const card = cardTemplate.cloneNode(true);

  if (advert.author.avatar) {
    card.querySelector('.popup__avatar').src = advert.author.avatar;
  } else {
    card.querySelector('.popup__avatar').classList.add('hidden');
  }

  card.querySelector('.popup__title').textContent = offer.title || '';
  card.querySelector('.popup__type').textContent = offer.type
    ? offerTypeEnToRu[offer.type]
    : '';

  card.querySelector('.popup__text--capacity').textContent = offer.rooms && offer.guests
    ? `${offer.rooms} комнаты для ${offer.guests} гостей`
    : '';

  card.querySelector('.popup__text--address').textContent = offer.address || '';
  card.querySelector('.popup__text--price').textContent = offer.price
    ? `${offer.price} ₽/ночь`
    : '';

  card.querySelector('.popup__text--time').textContent = offer.checkin && offer.checkout
    ? card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
    : '';

  card.querySelector('.popup__description').textContent = offer.description || '';

  if (Array.isArray(offer.features) && offer.features.length > 0) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);

    // https://developer.mozilla.org/ru/docs/Web/API/DOMTokenList

    card.querySelectorAll('.popup__feature').forEach((feature) => {
      const modifier = feature.classList[1];

      if (! modifiers.includes(modifier)) {
        feature.remove();
      }
    });
  } else {
    card.querySelector('.popup__features').classList.add('hidden');

  }

  const photosContainer = card.querySelector('.popup__photos');
  const photoTemplate = card.querySelector('.popup__photo').cloneNode(true);

  if (Array.isArray(photos) && photos.length > 0) {
    photosContainer.innerHTML = '';

    photos.forEach((photo) => {
      const newPhoto = photoTemplate.cloneNode(true);
      newPhoto.src = photo;

      photosContainer.appendChild(newPhoto);
    });
  } else {
    photosContainer.classList.add('hidden');
  }

  return card;
};

export { createCard };
