function getRandomInteger(min, max) {
  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');
  }

  if ((min || max) < 0) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, simbolsAmount) {
  if (min >= max) {
    throw new RangeError('Максимальное значение интервала должно быть больше минимального!');
  }

  if ((min || max) < 0) {
    throw new RangeError('На входе встречены отрицательные значения интервала');
  }
  return +((Math.random() * (max - min + 1) + min).toFixed(simbolsAmount));
}

getRandomInteger();

getRandomFloat();
