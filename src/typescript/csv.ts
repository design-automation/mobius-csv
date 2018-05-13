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
 *
 * If the delimeter is undefined, then the delimiting character will be
 * auto-detected from a list of common delimeters, including "," and tab.
 *
 * Returns a parse result object.
 * The parse result object always contains 1) a data array, 2) an errors array, and 3) a meta object.
 * The data array is an array of rows from teh csv.
 * The errors array is an array of errors generated during the process of parsing the csv.
 * The meta object contains extra information about the parse, such as delimiter used,
 * the newline sequence, whether the process was aborted, etc.
 *
 * The rows in the data array will contain strings.
 * If numeric data is required, strings will need to be converted to numbers
 * using a string conversion function.
 *
 * See [https://www.papaparse.com/docs](https://www.papaparse.com/docs).
 *
 * @param str The text from the csv file, as a string.
 * @param delimeter The delimeter used in the csv file.
 * @example
 * result = io.csv.parse(my_data)
 * parse_data = result.data
 * errors = result.errors
 * meta = result.meta
 *
 * first_row = parsed_data[0]
 * second_row = parsed.data[1]
 */
export function parse(str: string, delimiter: string): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (delimiter === undefined) {return pp.parse(str);}
    return pp.parse(str, {delimiter: delimiter});
}

/**
 * Parse a csv file, and supply a config object.
 *
 * See [https://www.papaparse.com/docs](https://www.papaparse.com/docs).
 */
export function parseUseConfig(str: string, config?: pp.ParseConfig): pp.ParseResult {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return pp.parse(str, config);
}
