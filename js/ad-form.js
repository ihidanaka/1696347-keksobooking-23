const typeSelectInput = document.querySelector('#type');
const pricePerNightInput = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const capacityList = roomCapacity.querySelectorAll('option');

const offerTypeToMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const roomNumberToGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const typeSelectInputChangeHandler = () => {
  const minPrice = offerTypeToMinPrice[typeSelectInput.value];

  pricePerNightInput.min = minPrice;
  pricePerNightInput.placeholder = minPrice;
};

typeSelectInput.addEventListener('change', typeSelectInputChangeHandler);

roomNumber.addEventListener('change', () => {
  const guests = roomNumberToGuests[roomNumber.value];

  capacityList.forEach((option) => {
    const isValid = guests.includes(+option.value);


    option.classList[isValid ? 'remove' : 'add']('hidden');
  });

  const errorMessage = guests.includes(+roomCapacity.value)
    ? ''
    : 'Укажите правильное кол-во мест!';

  roomCapacity.setCustomValidity(errorMessage);
});
