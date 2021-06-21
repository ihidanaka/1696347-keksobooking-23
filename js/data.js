import {getRandomInteger,getRandomFloat,shuffleArray} from './random.js';

const types = ['palace','flat','house','bungalow','hotel'];
const checktimes = ['12:00','13:00','14:00'];
const features = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const photosAddresses = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const maxPhotosArrayLength = 16;

const getAuthorAvatar = (id) => id < 10 ? `img/avatars/user0${id}.png` : `img/avatars/user${id}.png`;

const getFeatures = () => {

  const shufflings = shuffleArray(features);

  const arrayAmount = getRandomInteger(0, features.length - 1);

  const featuresData = new Array(arrayAmount).fill(null);
  featuresData.forEach((value, index) => {
    featuresData[index] = shufflings[index];
  });

  return featuresData;
};
const generatePhotos = (count) => {
  const photos = new Array(getRandomInteger(1, count)).fill(null);
  photos.forEach((value, index) => {
    photos[index] = photosAddresses[getRandomInteger(0, photosAddresses.length - 1)];
  });

  return photos;
};
const createAdvert = (id) => {
  const latitude = getRandomFloat(35.65000, 35.70000, 5);
  const longtitude = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getAuthorAvatar(id),
    },

    offer: {
      title: 'Аренда жилья в Токио',
      address: `${latitude}, ${longtitude}`,
      price: getRandomInteger(0),
      type: types[getRandomInteger(0, types.length - 1)],
      rooms: getRandomInteger(0),
      guests: getRandomInteger(0),
      checkin: checktimes[getRandomInteger(0, checktimes.length - 1)],
      checkout: checktimes[getRandomInteger(0, checktimes.length - 1)],
      features: getFeatures(),
      description: 'Внимание! Смарт-квартира в стиле лофт в центре города НЕ подойдет скучному нытику. Если это не о тебе, тогда барная стойка из натурального камня ждет тебя на пару коктейлей. А джакузи приглашает расслабиться перед вечеринкой с другом или подругой. Кстати, тебе даже не придется вызывать такси из клуба — все заведения в 500 метрах от дома',
      photos: generatePhotos(maxPhotosArrayLength),
    },

    location: {
      lat: latitude,
      lng: longtitude,
    },
  };
};
const generateAdverts = (count) => {
  const adverts = new Array(count).fill(null).map((value, index) => createAdvert(index + 1));
  return adverts;
};

export {generateAdverts};
