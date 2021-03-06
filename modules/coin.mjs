/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */


/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */
/*
 import { createRequire } from 'module';
export const require = createRequire(import.meta.url);
const minimist = require('/Users/angus/github-classroom/comp426-2022-spring/a02-angusingram/node_modules/minimist');
*/
export function coinFlip() {
  let min = 1;
  let max = 10;
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  x = x % 2;
  if(x == 1) {
    return '"heads"';
  } else if (x == 0) {
    return '"tails"';
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  if (flips == null) {
    flips = 1;
  }
  let array = new Array(flips);
  for (let i = 0; i < flips; i++) {
    array[i] = coinFlip();
  }
  return array;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let heads = 0;
  let tails = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "heads") {
      heads++;
    } else {
      tails++;
    }
  }
  return "{ heads: " + heads + ", tails: " + tails + " }";
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  if (call == "heads" || call == "tails") {
    let x = coinFlip();
    if (x == call) {
      return "{ call: '" + call + "', flip: '" + x + "', result: 'win' }"
    } else {
      return "{ call: '" + call + "', flip: " + x + ", result: 'lose' }"
    }
  }
  
  return "Error: no input \nUsage: node guess-flip --call=[heads|tails]"

}


/** Export 
 * 
 * Export all of your named functions
*/
