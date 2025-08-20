'use strict';

const livePeople = document.querySelectorAll('.population');

const value = [...livePeople].map(
  (contryPopulation) => +contryPopulation.textContent.replace(/,/g, ''),
);

const allPeople = value.reduce((acum, oneContry) => acum + oneContry, 0);

const middleAvarage = allPeople / value.length;

const docAllPeaple = document.querySelector('.total-population');
const docAveragePeaple = document.querySelector('.average-population');

docAllPeaple.textContent = allPeople.toLocaleString('en-US');
docAveragePeaple.textContent = middleAvarage.toLocaleString('en-US');
