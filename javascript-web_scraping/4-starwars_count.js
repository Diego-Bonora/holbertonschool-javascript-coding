#!/usr/bin/node
const axios = require('axios');
const url = `https://swapi-api.hbtn.io/api/people/18`;

axios.get(url).then((response) => {
    const values = Object.values(response.data);
    console.log(`${Object.keys(values[9]).length}`);
})
    .catch(err => console.log(err));