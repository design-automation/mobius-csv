/**
 * Functions for working with CSV files.
 * These functions wrap the papaparse library.
 * https://www.papaparse.com/docs
 */

/**
 *
 */

import * as pp from "papaparse";

//  ===============================================================================================================
//  String functions ==============================================================================================
//  ===============================================================================================================

/**
 * Parse a csv file.
 * https://www.papaparse.com/docs
 */
export function parse(str: string): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return pp.parse(str);
}

/**
 * Parse a csv file, and assume that the first row is the header.
 * https://www.papaparse.com/docs
 */
export function parseHasHeader(str: string): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return pp.parse(str, {header:true});
}

/**
 * Parse a csv file, and supply a config object.
 * https://www.papaparse.com/docs
 */
export function parseUseConfig(str: string, config?: pp.ParseConfig): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return pp.parse(str, config);
}
