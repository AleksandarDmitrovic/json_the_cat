const { argv }                  = require('process');

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
