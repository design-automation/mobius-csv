/**
 * Functions for working with CSV files.
 * These functions wrap the papaparse library.
 * https://www.papaparse.com/docs
 */

/**
 *
 */

import * as pp from "papaparse";

/**
 * Parse a csv file.
 * https://www.papaparse.com/docs
 */
export function parse(str: string, delimiter: string): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (delimiter === undefined) {delimiter = ",";}
    return pp.parse(str, {delimiter});
}

/**
 * Parse a csv file, and supply a config object.
 * https://www.papaparse.com/docs
 */
export function parseUseConfig(str: string, config?: pp.ParseConfig): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return pp.parse(str, config);
}
