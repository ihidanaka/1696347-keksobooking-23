const getRandomInteger = (min, max = Number.MAX_SAFE_INTEGER) => {

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

const shuffleArray = (items) => items.sort(() => Math.random() - 0.5);

export {getRandomInteger,getRandomFloat,shuffleArray};
