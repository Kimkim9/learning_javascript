"use strict";
const fetch = require("node-fetch")
//using promise
function getAPIRes(){
    fetch("https://api.github.com/users/github")
    .then((res) => {
        return res.json();
    })
    .then((updatedRes) => {
        console.log(updatedRes);
    })
    .catch((err)=> {
        console.log(err);
    });
}
//using Async and await
async function getAPIRes() {
    let response = await fetch("https://api.github.com/users/github")
    let data = await response.json();
    console.log(data);
}
getAPIRes()