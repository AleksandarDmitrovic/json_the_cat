const request  = require('request');


// console.log('url :', url);


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breedName, (error, response, body) => {

    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (data.length === 0) {
      callback(`Breed not found`, null);
    } else {
      const description = data[0]['description'];
      callback(null, description);
    }
  });
};



module.exports = { fetchBreedDescription };

