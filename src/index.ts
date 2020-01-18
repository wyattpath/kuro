// https://www.toptal.com/typescript/dependency-injection-discord-bot-tutorial

require('dotenv').config(); // Recommended way of loading dotenv
import container from "../inversify.config";
import {TYPES} from "./types";
import {Bot} from "./Bot";
let bot = container.get<Bot>(TYPES.Bot);
bot.listen().then(() => {
    console.log('Logged in!')
}).catch((error) => {
    console.log('Oh no, Error! ', error)
});

// keeps bot on Glitch.com alive
const express = require("express");
const app = express();
const http = require('http');
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);
