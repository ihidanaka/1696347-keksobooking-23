import {generateAdverts} from './data.js';
import {addCard} from './map.js';
import  './ad-form.js';

const adverts = generateAdverts(10);

addCard(adverts[0]);

