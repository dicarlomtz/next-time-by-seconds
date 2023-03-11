/**
 * Truncs a given number
 * @param {number} value
 * @returns number
 */
export const truncValue = (value) => {
    if (!value) {
        throw new Error("parameter {value} is not defined");
    }

    return Math.trunc(value);
}

/**
 * Rounds a given number
 * @param {number} value
 * @returns number
 */
export const roundValue = (value) => {
    if (!value) {
        throw new Error("parameter {value} is not defined");
    }

    return Math.round(value);
}
