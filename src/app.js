import {
getMinutesFromSeconds,
getHoursFromSeconds,
getTimeFormatted,
getTimeSeconds,
HOURS_PER_DAY,
} from "./utils/time.js";

/**
 * Get the exact time after a given number of hours
 * @param {number} hours
 * @returns number
 * @example hours = 34, after days, the hour is 10 (24H format)
 */
const getHoursInRealTime = (hours) => {
    if (!hours) {
        throw new Error("Parameter {hours} is not defined");
    }

    return hours % HOURS_PER_DAY;
}

export const nextTimeBySeconds = (hour, minute, second, secondsLater) => {

    const nextTimeSeconds = getTimeSeconds(hour, minute, second + secondsLater);

    const { hours: nextHours, remainingSeconds: remainingSecondsFromHours } = getHoursFromSeconds(nextTimeSeconds);
    const { minutes: nextMinutes, remainingSeconds: nextSeconds } = getMinutesFromSeconds(remainingSecondsFromHours);

    const hoursInRealTime = getHoursInRealTime(nextHours);

    return getTimeFormatted(hoursInRealTime, nextMinutes, nextSeconds);
}
