const { argv } = require('process');
const request  = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=` + argv[2];
// console.log('url :', url);


const fetchCatBreed = () => {
  request(url, (error, response, body) => {
    if (error) {
      return console.log(`Error request failed: ${error}`);
    } else if (body === '[]') {
      return console.log(`Error: Breed does not exist`);
    }
    const data = JSON.parse(body);
    const description = data[0]['description'];
    console.log(description);
  });
};

fetchCatBreed();