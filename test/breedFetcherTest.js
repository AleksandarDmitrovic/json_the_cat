const { assert } = require('chai');

const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via a callback', (done) => {
    fetchBreedDescription('Siberian', (err,desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDes = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';

      //compare returned description
      assert.equal(expectedDes, desc);

      done();
    });
  });
  it('returns a error for a invalid breed, via a callback', (done) => {
    fetchBreedDescription('invalid', (err,desc) => {
      // we expect no error for this scenario
      
      const expectedErr = 'Breed not found';
      assert.equal(err, expectedErr);

      const expectedDes = null;

      //compare returned description
      assert.equal(expectedDes, desc);
  

      done();
    });
  });
});


