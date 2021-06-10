const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'];
const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];
const PHOTOS_ADDRESSES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const MAXIMUM_PHOTOS_ARRAY_LENGTH = 16;

const getRandomInteger = (min, max) => {
  if (max === undefined || null) {
    max = Number.MAX_SAFE_INTEGER;
  }

  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');

  }

  if ((min || max) < 0) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomFloat = (min, max, simbolsAmount) => {
  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');
  }

  if ((min || max) < 0) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return +((Math.random() * (max - min) + min).toFixed(simbolsAmount));
};
const getRandomAvatarAddress = (arrayElement) => (arrayElement < 10) ? `img/avatars/user0${arrayElement}.png` : `img/avatars/user${arrayElement}.png`;
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
const getFeaturesArray = () => {

  const featureShuffled = shuffleArray(FEATURES);

  const arrayAmount = getRandomInteger(0, FEATURES.length - 1);

  const features = new Array(arrayAmount).fill(0);
  features.forEach((val, ind) => {
    features[ind] = featureShuffled[ind];
  });

  return features;
};
const getPhotosArray = (maxArrayLength) => {
  const photosArray = new Array(getRandomInteger(1, maxArrayLength)).fill(0);
  photosArray.forEach((val, ind) => {
    photosArray[ind] = PHOTOS_ADDRESSES[getRandomInteger(0, PHOTOS_ADDRESSES.length - 1)];
  });

  return photosArray;
};
const createAdd = () => {
  const LATITUDE = getRandomFloat(35.65000, 35.70000, 5);
  const LONGTITUDE = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getRandomAvatarAddress(),
    },

    offer: {
      title: 'Аренда жилья в Токио',
      address: `${LATITUDE},${LONGTITUDE}`,
      price: getRandomInteger(0).toString(),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(0).toString(),
      guests: getRandomInteger(0).toString(),
      checkin: CHECKTIME[getRandomInteger(0, CHECKTIME.length - 1)],
      checkout: CHECKTIME[getRandomInteger(0, CHECKTIME.length - 1)],
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
const fillAds = (elementsAmount) => {
  const adID = new Array(elementsAmount).fill(0);
  adID.forEach((val, index) => adID[index] = index + 1);
  const shuffledArray = shuffleArray(adID);

  const AdsArray = new Array(elementsAmount).fill(0);
  AdsArray.forEach((val, ind) => {
    AdsArray[ind] = createAdd();
    AdsArray[ind].author.avatar = getRandomAvatarAddress(shuffledArray[ind]);
  });

  return AdsArray;
};

fillAds(10);
