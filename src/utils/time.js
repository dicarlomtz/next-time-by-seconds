import { truncValue, roundValue } from "./number.js";

export const SECONDS_PER_MINUTE = 60;
export const SECONDS_PER_HOUR = 3600;
export const HOURS_PER_DAY = 24;

/**
 * Formats a string with the given time parameters
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns string
 * @example hour = 2, minutes = 1, seconds = 12 => 2:1:12
 */
export const getTimeFormatted = (hours, minutes, seconds) => {
    if (!hours || !minutes || !seconds) {
        throw new Error("All parameters must be defined");
    }

    return `${hours}:${minutes}:${seconds}`;
};

/**
 * Converts minuts to seconds
 * @param {number} minutes
 * @returns number
 */
export const minutesToSeconds = (minutes) => {
    if (!minutes) {
        throw new Error("Parameter {minutes} is not defiend");
    }

    return minutes * SECONDS_PER_MINUTE;
};

/**
 * Converts seconds to minutes
 * @param {number} seconds
 * @returns number
 */
export const secondsToMinutes = (seconds) => {
    if (!seconds) {
        throw new Error("Parameter {seconds} is not defiend");
    }

    return seconds / SECONDS_PER_MINUTE;
};

/**
 * Converts seconds to hours
 * @param {number} seconds
 * @returns number
 */
export const secondsToHours = (seconds) => {
    if (!seconds) {
        throw new Error("Parameter {seconds} is not defiend");
    }

    return seconds / SECONDS_PER_HOUR;
};

/**
 * Converts hours to seconds
 * @param {number} hours
 * @returns number
 */
export const hoursToSeconds = (hours) => {
    if (!hours) {
        throw new Error("Parameter {hours} is not defiend");
    }

    return hours * SECONDS_PER_HOUR;
};

/**
 * Gets the hours in a given seconds
 * @param {number} seconds
 * @returns object
 * @example
 * seconds = 70 => { hours: 1, remainingSeconds: 10 }
 */
export const getHoursFromSeconds = (seconds) => {
    if (!seconds) {
        throw new Error("Parameter {seconds} is not defiend");
    }

    const hours = secondsToHours(seconds);
    const truncHours = truncValue(hours);
    const remainingHours = hours - truncHours;

    const operationData = {
        hours: truncHours,
        remainingSeconds: roundValue(hoursToSeconds(remainingHours)),
    };

    return operationData;
}

/**
 * Gets the minutes in a given seconds
 * @param {number} seconds
 * @returns object
 * @example
 * seconds = 70 => { minutes: 1, remainingSeconds: 10 }
 */
export const getMinutesFromSeconds = (seconds) => {
    if (!seconds) {
        throw new Error("Parameter {seconds} is not defiend");
    }

    const minutes = secondsToMinutes(seconds);
    const truncMinutes = truncValue(minutes);
    const remainingMinutes = minutes - truncMinutes;

    const operationData = {
        minutes: truncMinutes,
        remainingSeconds: roundValue(minutesToSeconds(remainingMinutes)),
    };

    return operationData;
}

/**
 * Sum the seconds in a given hour, minute and second
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @returns number
 * @example hour = 1, minute = 1, second = 15 => 3675 seconds
 */
export const getTimeSeconds = (hour, minute, second) => {
    if (!hour || !minute || !second) {
        throw new Error("All parameters must be defined");
    }

    const timeSeconds = hoursToSeconds(hour)
                        + minutesToSeconds(minute)
                        + second;

    return timeSeconds;
}
