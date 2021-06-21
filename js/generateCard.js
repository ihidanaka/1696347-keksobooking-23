import { generateAdverts } from './data.js';

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const adverts = generateAdverts(1);

const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('article');
const advert = adverts[0];


const title = template.querySelector('.popup__title');
advert.offer.title ? title.textContent = advert.offer.title : title.classList.add('hidden');

const address = template.querySelector('.popup__text--address');
advert.offer.address ? address.textContent = advert.offer.address : address.classList.add('hidden');

const price = template.querySelector('.popup__text--price');
advert.offer.price ? price.textContent = `${advert.offer.price} ₽/ночь` : price.classList.add('hidden');

const type = template.querySelector('.popup__type');
advert.offer.type ? type.textContent = types[advert.offer.type] : type.classList.add('hidden');


const capacity = template.querySelector('.popup__text--capacity');
(advert.offer.rooms && advert.offer.guests) ? capacity.textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей` : capacity.classList.add('hidden');


const time = template.querySelector('.popup__text--time');
(advert.offer.checkin && advert.offer.checkout) ? time.textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}` : time.classList.add('hidden');


const features = advert.offer.features;

if (advert.offer.features) {
  const featureListElement = template.querySelector('.popup__features');

  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
} else { features.classList.add('hidden'); }


const description = template.querySelector('.popup__description');
advert.offer.description ? description.textContent = advert.offer.description : description.classList.add('hidden');

const photo = template.querySelector('.popup__photo').cloneNode(true);
const photosHtml = template.querySelector('.popup__photos');
const photos = advert.offer.photos;

if (photos) {
  photosHtml.innerHTML = '';

  photos.forEach((item) => {
    const newPhoto = photo.cloneNode(true);
    newPhoto.src = item;
    photosHtml.appendChild(newPhoto);
  });
} else {photosHtml.classList.add('hidden');}

const avatar = template.querySelector('.popup__avatar');
advert.author.avatar ? avatar.src = advert.author.avatar : avatar.classList.add('hidden');

const generateCard = () => template;

export { generateCard };

