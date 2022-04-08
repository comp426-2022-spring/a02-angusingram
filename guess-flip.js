
import { flipACoin } from "./modules/coin.mjs";

const args = process.argv.slice(2);
args[0] = args[0].slice(7);
process.stdout.write(flipACoin(args[0]));
