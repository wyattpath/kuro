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