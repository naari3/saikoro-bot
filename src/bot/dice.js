// Commands:
//  1d100 - 1

const BigInt = require("big-integer");

export default async robot => {
  robot.hear(new RegExp("([1-9][\\d]*)d([1-9][\\d]*)"), res => {
    res.send(
      `${dice(parseInt(res.match[1]), parseInt(res.match[2])).toString()}`
    );
  });
};

const dice = (a, b) =>
  [...Array(a)].map(() => BigInt.randBetween(1, b)).reduce((c, x) => c.add(x));
