import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);
console.log(coinFlips(args['number']));
console.log(countFlips(coinFlips(args['number'])));