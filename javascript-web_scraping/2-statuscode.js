#!/usr/bin/node
const fetch = require("node-fetch");

async function makeRequest() {
    try {
        const response = await fetch(`${process.argv[2]}`);
        console.log(response.status);
    } catch (err) {
        console.log(err);
    }
}
makeRequest()
