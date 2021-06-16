const TYPES = ['palace','flat','house','bungalow','hotel'];
const CHECKTIMES = ['12:00','13:00','14:00'];
const FEATURES = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const PHOTOS_ADDRESSES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const MAXIMUM_PHOTOS_ARRAY_LENGTH = 16;

const getRandomInteger = (min, max) => {
  if ((max === undefined) || (max === null)) {
    max = Number.MAX_SAFE_INTEGER;
  }

  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');

  }

  if ((min < 0) || (max < 0)) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomFloat = (min, max, digit) => {
  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');
  }

  if ((min < 0) || (max < 0)) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return +((Math.random() * (max - min) + min).toFixed(digit));
};
const getAuthorAvatar = (arrayElement) => (arrayElement < 10) ? `img/avatars/user0${arrayElement}.png` : `img/avatars/user${arrayElement}.png`;
const shuffleArray = (arrays) => arrays.sort(() => Math.random() - 0.5);
const getFeaturesArray = () => {

  const shufflings = shuffleArray(FEATURES);

  const arrayAmount = getRandomInteger(0, FEATURES.length - 1);

  const features = new Array(arrayAmount).fill(null);
  features.forEach((value, index) => {
    features[index] = shufflings[index];
  });

  return features;
};
const getPhotosArray = (maxArrayLength) => {
  const photos = new Array(getRandomInteger(1, maxArrayLength)).fill(null);
  photos.forEach((value, index) => {
    photos[index] = PHOTOS_ADDRESSES[getRandomInteger(0, PHOTOS_ADDRESSES.length - 1)];
  });

  return photos;
};
const createAdvert = (index) => {
  const LATITUDE = getRandomFloat(35.65000, 35.70000, 5); //Ругается es-lint если меняю на let
  const LONGTITUDE = getRandomFloat(139.70000, 139.80000, 5); //Ругается es-lint если меняю на let

  return {
    author: {
      avatar: getAuthorAvatar(index),
    },

    offer: {
      title: 'Аренда жилья в Токио',
      address: `${LATITUDE}, ${LONGTITUDE}`,
      price: getRandomInteger(0),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(0),
      guests: getRandomInteger(0),
      checkin: CHECKTIMES[getRandomInteger(0, CHECKTIMES.length - 1)],
      checkout: CHECKTIMES[getRandomInteger(0, CHECKTIMES.length - 1)],
      features: getFeaturesArray(),
      description: 'Внимание! Смарт-квартира в стиле лофт в центре города НЕ подойдет скучному нытику. Если это не о тебе, тогда барная стойка из натурального камня ждет тебя на пару коктейлей. А джакузи приглашает расслабиться перед вечеринкой с другом или подругой. Кстати, тебе даже не придется вызывать такси из клуба — все заведения в 500 метрах от дома',
      photos: getPhotosArray(MAXIMUM_PHOTOS_ARRAY_LENGTH),
    },

    location: {
      lat: LATITUDE,
      lng: LONGTITUDE,
    },
  };
};
const getAdvertsArray = (count) => {
  const adverts = new Array(count).fill(null).map((value, index) => createAdvert(index + 1));
  return adverts;
};

getAdvertsArray(10);
