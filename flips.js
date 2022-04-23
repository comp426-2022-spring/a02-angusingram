
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if (args[0] == null) {
    let array1 = coinFlips(args[0]);
    console.log(array1);
    console.log(countFlips(array1));
} else {
    args[0] = args[0].slice(9);
    let array1 = coinFlips(args[0]);
    console.log(array1);
    console.log(countFlips(array1));
} 
//process.stdout.write(array1);
//process.stdout.write(countFlips(array1));