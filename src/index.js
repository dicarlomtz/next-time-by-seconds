import { nextTimeBySeconds } from "./app.js";

const cliParametersGetter = () => process.argv.slice(2, 6);

const init = () => {
    const [hour, minute, second, secondsLater] = cliParametersGetter().map(parameter => parseInt(parameter));
    console.log(nextTimeBySeconds(hour, minute, second, secondsLater));
}

init();
