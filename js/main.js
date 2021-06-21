import {generateAdverts} from './data.js';
import {generateCard} from './generateCard.js';

generateAdverts(10);


const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(generateCard());
