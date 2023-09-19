#!/usr/bin/node
const request = require('request');
const myRequest = new Request(process.argv[2]);

fetch(myRequest).then((response) => {
    console.log(response.status);
})