import {generateAdverts} from './data.js';
import {addCard} from './map.js';

const adverts = generateAdverts(10);

addCard(adverts[0]);
