
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);
args[0] = args[0].slice(9);
let array1 = coinFlips(args[0]);
process.stdout.write(array1);
process.stdout.write(countFlips(array1));