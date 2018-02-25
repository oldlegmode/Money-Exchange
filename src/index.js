// PLEASE DON'T change function name
module.exports = makeExchange;
// (91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
console.log(makeExchange(91));

function makeExchange(currency) {
    if (currency <= 0) {
      return {};
    } else if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let H = currency / 50 >= 1 ? Math.floor(currency / 50) : 0;
    let Q = (currency - 50 * H) / 25 >= 1 ? Math.floor((currency - 50 * H) / 25) : 0;
    let D = (currency - 50 * H - 25 * Q) / 10 >= 1 ? Math.floor((currency - 50 * H - 25 * Q) / 10) : 0;
    let N = (currency - 50 * H - 25 * Q - 10 * D) / 5 >= 1 ? Math.floor((currency - 50 * H - 25 * Q - 10 * D) / 5) : 0;
    let P = currency - 50 * H - 25 * Q - 10 * D - 5 * N;
    let result = { H, Q, D, N, P };

    for (let key in result) {
      if (!result[key]) {
        delete result[key];
      }
    }
    return result;
}
