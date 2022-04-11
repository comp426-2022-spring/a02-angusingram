
import { flipACoin } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if (args[0] == null) {
    process.stdout.write(flipACoin(args[0]));
} else {
    args[0] = args[0].slice(7);

    process.stdout.write(flipACoin(args[0]));  
}

