import * as tm from "../_export";
import * as pp from "papaparse";
import {} from "jasmine";

describe("Tests for CSV Module", () => {
    it("test_csv_parse", () => {
        expect( test_csv_parse() ).toBe(true);
    });
});

export function test_csv_parse(): boolean {
    const str: string = "this,is,the,header\n5,6,7,8\na,b,c,d\ne,f,g,h";
    const res1: pp.ParseResult = tm.csv.parse(str, undefined);
    if (res1.data.length !== 4) {return false;}
    if (res1.data[1][2] !== "7") {return false;}
    if (res1.errors.length !== 0) {return false;}
    if (res1.meta.delimiter !== ",") {return false;}
    const res2: pp.ParseResult = tm.csv.parseUseConfig(str, {header:true});
    if (res2.data.length !== 3) {return false;}
    return true;
}
